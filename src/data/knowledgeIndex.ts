import { RuleSection } from '../types';
import { FACTION_HEROES, HeroDetails } from './heroesData';
import { FACTION_UNITS, UNIT_DETAILS, UnitStats } from './unitsData';
import { ALL_BOARD_GAME_SKILLS } from './skillsData';
import { townsData, TownData } from './townsData';

/**
 * Este módulo transforma las bases de datos "de UI" (heroesData, unitsData,
 * skillsData, townsData) en secciones de texto (RuleSection[]) que el
 * backend (server.ts) puede inyectar en el prompt del oráculo Sandro.
 *
 * No se mezclan con rulesKB.ts a propósito: rulesKB son las reglas del
 * juego, mientras que esto es una base de datos "consultable" mucho más
 * grande. Para no disparar el tamaño (y el coste) del contexto en cada
 * mensaje del chat, server.ts solo incluye aquí las secciones relevantes
 * a la pregunta del usuario (ver getRelevantEntitySections), más un
 * pequeño "índice" siempre presente con los nombres disponibles.
 */

const slugify = (text: string) =>
  text
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quita acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const normalize = (text: string) =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Alias (nombres alternativos) por los que puede buscarse cada sección, indexados por id. */
const entityAliases: Record<string, string[]> = {};

function registerAliases(id: string, aliases: (string | undefined)[]) {
  entityAliases[id] = aliases
    .filter((a): a is string => !!a && a.trim().length >= 3)
    .map((a) => a.trim());
}

const formatCost = (cost?: { gold: number; materials?: number; valuable?: number; valuables?: number }) => {
  if (!cost) return 'sin coste registrado';
  const materials = cost.materials ?? 0;
  const valuable = cost.valuable ?? cost.valuables ?? 0;
  return `${cost.gold} Oro, ${materials} Materiales, ${valuable} Recursos Valiosos`;
};

// ---------------------------------------------------------------------------
// HÉROES
// ---------------------------------------------------------------------------

function buildHeroesKB(): RuleSection[] {
  const sections: RuleSection[] = [];
  for (const [factionId, heroes] of Object.entries(FACTION_HEROES)) {
    const factionName = townsData[factionId]?.factionName || factionId;
    (heroes as HeroDetails[]).forEach((hero) => {
      const specialtyLines = hero.specialty.cards
        .map((c) => `  - Nivel ${c.level} (${c.name}): ${c.effect.replace(/\n/g, ' ')}`)
        .join('\n');

      const content = `Facción: ${factionName}
Clase: ${hero.className} | Tipo de héroe: ${hero.type}
Estadísticas iniciales: Ataque ${hero.stats.atk}, Defensa ${hero.stats.def}, Poder ${hero.stats.power}, Conocimiento ${hero.stats.knowledge}
Habilidad inicial: ${hero.initialSkill.name}
  - Normal: ${hero.initialSkill.normal.replace(/\n/g, ' ')}
  - Experto: ${hero.initialSkill.expert.replace(/\n/g, ' ')}
Especialidad: ${hero.specialty.name}
${specialtyLines}
Trasfondo: ${hero.lore}${hero.quote ? `\nCita: "${hero.quote}"` : ''}`;

      sections.push({
        id: `hero-${factionId}-${slugify(hero.name)}`,
        title: `Héroe: ${hero.name} (${factionName})`,
        content,
        category: 'heroes',
      });
      registerAliases(`hero-${factionId}-${slugify(hero.name)}`, [hero.name]);
    });
  }
  return sections;
}

function buildHeroesCatalogIndex(): string {
  const lines: string[] = [];
  for (const [factionId, heroes] of Object.entries(FACTION_HEROES)) {
    const factionName = townsData[factionId]?.factionName || factionId;
    const names = (heroes as HeroDetails[]).map((h) => h.name).join(', ');
    lines.push(`- ${factionName}: ${names}`);
  }
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// UNIDADES
// ---------------------------------------------------------------------------

interface UnitLocation {
  factionId: string;
  factionName: string;
  level: number;
  tier: string;
}

function buildUnitLocationMap(): Record<string, UnitLocation> {
  const map: Record<string, UnitLocation> = {};
  for (const [factionId, units] of Object.entries(FACTION_UNITS)) {
    const factionName = townsData[factionId]?.factionName || factionId;
    units.forEach((u) => {
      map[u.nameBasic] = { factionId, factionName, level: u.level, tier: u.tier };
    });
  }
  return map;
}

function formatUnitStatsBlock(label: string, stats?: UnitStats): string {
  if (!stats) return '';
  const abilities = stats.abilities.length > 0 ? stats.abilities.join(' | ') : 'Sin habilidades especiales.';
  return `${label} -> Ataque ${stats.atk}, Defensa ${stats.def}, Vida ${stats.hp}, Iniciativa ${stats.ini}, Tipo: ${stats.type}
  Coste de reclutamiento: ${formatCost(stats.customCost)}
  Habilidades: ${abilities}`;
}

function buildUnitsKB(): RuleSection[] {
  const locationMap = buildUnitLocationMap();
  const sections: RuleSection[] = [];

  for (const [unitName, details] of Object.entries(UNIT_DETAILS)) {
    const location = locationMap[unitName];
    const header = location
      ? `Facción: ${location.factionName} | Nivel: ${location.level} | Rango: ${location.tier}`
      : `Unidad neutral / guardiana de banco de recursos (no reclutable en ninguna ciudad de facción).`;

    const content = `${header}
${formatUnitStatsBlock('Versión básica', details.basic)}
${details.elite ? formatUnitStatsBlock('Versión élite', details.elite) : '(Esta unidad no tiene versión élite reclutable.)'}`;

    sections.push({
      id: `unit-${slugify(unitName)}`,
      title: `Unidad: ${unitName}`,
      content,
      category: 'units',
    });
    const cleanName = unitName.replace(/\s*\([^)]*\)\s*$/, '').trim();
    registerAliases(`unit-${slugify(unitName)}`, [unitName, cleanName]);
  }
  return sections;
}

function buildUnitsCatalogIndex(): string {
  const lines: string[] = [];
  for (const [factionId, units] of Object.entries(FACTION_UNITS)) {
    const factionName = townsData[factionId]?.factionName || factionId;
    const names = units.map((u) => `${u.nameBasic} (Nv.${u.level}, ${u.tier})`).join(', ');
    lines.push(`- ${factionName}: ${names}`);
  }
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// HABILIDADES SECUNDARIAS
// ---------------------------------------------------------------------------

function buildSkillsKB(): RuleSection[] {
  return ALL_BOARD_GAME_SKILLS.map((skill) => {
    const id = `skill-${slugify(skill.name)}`;
    registerAliases(id, [skill.name]);
    return {
      id,
      title: `Habilidad secundaria: ${skill.name}`,
      content: `Categoría: ${skill.category}
Descripción: ${skill.description}
Nivel Normal: ${skill.normal}
Nivel Experto: ${skill.expert}`,
      category: 'skills' as const,
    };
  });
}

function buildSkillsCatalogIndex(): string {
  return ALL_BOARD_GAME_SKILLS.map((s) => `${s.name} (${s.category})`).join(', ');
}

// ---------------------------------------------------------------------------
// CIUDADES
// ---------------------------------------------------------------------------

function buildTownsKB(): RuleSection[] {
  return Object.values(townsData).map((town: TownData) => {
    const buildingLines = town.buildings
      .map((b) => {
        let line = `  - ${b.name} (coste: ${formatCost(b.cost)}): ${b.benefit}`;
        if (b.upgradeName) {
          line += `\n    Mejora "${b.upgradeName}" (coste: ${formatCost(b.upgradeCost)}): ${b.upgradeBenefit || ''}`;
        }
        return line;
      })
      .join('\n');

    const unitLine = (u: { name: string; recruitCost: any; eliteCost: any }) =>
      `${u.name} (básica: ${formatCost(u.recruitCost)} | élite: ${formatCost(u.eliteCost)})`;

    const content = `Trasfondo: ${town.lore}
Edificios de la ciudad:
${buildingLines}
Unidades reclutables:
  Bronce: ${unitLine(town.units.bronze.nivel1)}; ${unitLine(town.units.bronze.nivel2)}; ${unitLine(town.units.bronze.nivel3)}
  Plata: ${unitLine(town.units.silver.nivel4)}; ${unitLine(town.units.silver.nivel5)}
  Oro: ${unitLine(town.units.gold.nivel6)}; ${unitLine(town.units.gold.nivel7)}`;

    const id = `town-${town.factionId}`;
    const factionShortName = town.factionName.split('(')[0].trim();
    const factionEnglishName = town.factionName.match(/\(([^)]+)\)/)?.[1];
    registerAliases(id, [town.townName, town.factionName, factionShortName, factionEnglishName]);

    return {
      id,
      title: `Ciudad: ${town.townName} (${town.factionName})`,
      content,
      category: 'town' as const,
    };
  });
}

function buildTownsCatalogIndex(): string {
  return Object.values(townsData)
    .map((t: TownData) => `${t.townName} (${t.factionName})`)
    .join(', ');
}

// ---------------------------------------------------------------------------
// EXPORTS
// ---------------------------------------------------------------------------

export const heroesKB = buildHeroesKB();
export const unitsKB = buildUnitsKB();
export const skillsKB = buildSkillsKB();
export const townsKB = buildTownsKB();

/** Todas las secciones "extra" (no-reglas) disponibles, para búsqueda por palabra clave. */
export const extraEntitySections: RuleSection[] = [...heroesKB, ...unitsKB, ...skillsKB, ...townsKB];

/**
 * Catálogo compacto (solo nombres) de todo lo indexado. Se incluye SIEMPRE
 * en el contexto de Sandro —es barato— para que sepa qué existe y pueda
 * referenciarlo correctamente aunque no se cargue el detalle completo.
 */
export const entityCatalogSummary = `=== ÍNDICE DE HÉROES POR FACCIÓN ===
${buildHeroesCatalogIndex()}

=== ÍNDICE DE UNIDADES RECLUTABLES POR FACCIÓN ===
${buildUnitsCatalogIndex()}

=== ÍNDICE DE HABILIDADES SECUNDARIAS (32) ===
${buildSkillsCatalogIndex()}

=== ÍNDICE DE CIUDADES ===
${buildTownsCatalogIndex()}`;

/**
 * Devuelve las secciones detalladas (héroes/unidades/habilidades/ciudades)
 * cuyo nombre aparece mencionado en el texto dado (normalmente, los
 * últimos mensajes del usuario). Evita inyectar las ~260 entradas
 * completas en cada request: solo se añaden al prompt las que parecen
 * relevantes para la pregunta concreta.
 */
export function getRelevantEntitySections(text: string, maxSections = 12): RuleSection[] {
  const haystack = normalize(text);
  if (!haystack.trim()) return [];

  const matches = extraEntitySections.filter((section) => {
    const aliases = entityAliases[section.id] || [];
    return aliases.some((alias) => {
      const pattern = new RegExp(`\\b${escapeRegExp(normalize(alias))}\\b`, 'i');
      return pattern.test(haystack);
    });
  });

  // Si hay demasiadas coincidencias (p.ej. un nombre muy genérico), prioriza
  // las fichas con el alias más largo/específico primero.
  matches.sort((a, b) => {
    const longestAlias = (id: string) => Math.max(...(entityAliases[id] || ['']).map((a) => a.length));
    return longestAlias(b.id) - longestAlias(a.id);
  });
  return matches.slice(0, maxSections);
}
