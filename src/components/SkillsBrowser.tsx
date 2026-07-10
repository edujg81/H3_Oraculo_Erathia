import React, { useState, useMemo } from 'react';
import { 
  Search, Swords, Flame, Compass, Coins, Sparkles, 
  Users, Award, ChevronRight, HelpCircle, Layers, BookOpen, Filter, ArrowUpDown,
  TrendingUp, HeartPlus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FACTION_HEROES } from '../data/heroesData';

// Custom interface for enriched skill
interface EnrichedSkill {
  name: string;
  normal: string;
  expert: string;
  category: 'Combate' | 'Magia' | 'Aventura' | 'Economía' | 'Desarrollo' | 'Apoyo';
  description: string;
  heroes: Array<{
    name: string;
    factionId: string;
    factionName: string;
    className: string;
  }>;
}

// Map of Faction ID to Spanish name
const FACTION_NAMES: Record<string, string> = {
  castillo: 'Castillo (Castle)',
  necropolis: 'Necrópolis (Necropolis)',
  mazmorra: 'Mazmorra (Dungeon)',
  rampart: 'Murallas (Rampart)',
  torre: 'Torre (Tower)',
  infierno: 'Inferno (Inferno)',
  stronghold: 'Bastión (Stronghold)',
  fortaleza: 'Fortaleza (Fortress)',
  confluencia: 'Confluencia (Conflux)',
  cove: 'Bahía (Cove)'
};

// Master Static Database of ALL 32 Board Game Skills with exact official card mechanics
const ALL_BOARD_GAME_SKILLS = [
  {
    name: 'Magia de Aire',
    normal: 'Permanente: +1 Poder para hechizos de la escuela de magia de aire.',
    expert: 'Instantáneo: Al lanzar un Hechizo de la escuela de aire, puedes descartar esta carta y ganar +3 Poder.',
    category: 'Magia' as const,
    description: 'Afinidad elemental permanente que potencia los hechizos de la escuela de aire.'
  },
  {
    name: 'Magia de tierra',
    normal: 'Permanente: +1 Poder para hechizos de la escuela de magia de tierra.',
    expert: 'Instantáneo: Al lanzar un Hechizo de la escuela de tierra, puedes descartar esta carta y ganar +3 Poder.',
    category: 'Magia' as const,
    description: 'Afinidad elemental permanente que potencia los hechizos de la escuela de tierra.'
  },
  {
    name: 'Magia de Fuego',
    normal: 'Permanente: +1 Poder para hechizos de la escuela de magia de fuego.',
    expert: 'Instantáneo: Al lanzar un Hechizo de la escuela de fuego, puedes descartar esta carta y ganar +3 Poder.',
    category: 'Magia' as const,
    description: 'Afinidad elemental permanente que potencia los hechizos de la escuela de fuego.'
  },
  {
    name: 'Magia de agua',
    normal: 'Permanente: +1 Poder para hechizos de la escuela de magia de agua.',
    expert: 'Instantáneo: Al lanzar un Hechizo de la escuela de agua, puedes descartar esta carta y ganar +3 Potencia.',
    category: 'Magia' as const,
    description: 'Afinidad elemental permanente que potencia los hechizos de la escuela de agua.'
  },
  {
    name: 'Magia básica del aire',
    normal: 'Permanente: En lugar de buscar en el mazo de hechizos, encuentra el primer Hechizo de magia de aire que haya en él y llévate el Hechizo a la mano.\nA continuación, vuelve a bajarar el mazo.',
    expert: 'Instantáneo: +3 Poder para un Hechizo de magia de aire.',
    category: 'Magia' as const,
    description: 'Conocimientos rudimentarios que facilitan la obtención y potenciación de hechizos de aire.'
  },
  {
    name: 'Magia básica de la tierra',
    normal: 'Permanente: En lugar de buscar en el mazo de hechizos, encuentra el primer Hechizo de magia de tierra que haya en él y llévate el Hechizo a la mano.\nA continuación, vuelve a bajarar el mazo.',
    expert: 'Instantáneo: +3 Potencia para un Hechizo de magia de tierra.',
    category: 'Magia' as const,
    description: 'Conocimientos rudimentarios que facilitan la obtención y potenciación de hechizos de tierra.'
  },
  {
    name: 'Magia básica del fuego',
    normal: 'Permanente: En lugar de buscar en el mazo de hechizos, encuentra el primer Hechizo de magia de fuego que haya en él y llévate el Hechizo a la mano.\nA continuación, vuelve a barajar el mazo.',
    expert: 'Instantáneo: +3 Potencia para un Hechizo de magia de fuego.',
    category: 'Magia' as const,
    description: 'Conocimientos rudimentarios que facilitan la obtención y potenciación de hechizos de fuego.'
  },
  {
    name: 'Magia básica del agua',
    normal: 'Permanente: En lugar de buscar en el mazo de hechizos, encuentra el primer Hechizo de magia de agua que haya en él y llévate el Hechizo a la mano.\nA continuación, vuelve a bajarar el mazo.',
    expert: 'Instantáneo: +3 Potencia para un Hechizo de magia de agua.',
    category: 'Magia' as const,
    description: 'Conocimientos rudimentarios que facilitan la obtención y potenciación de hechizos de agua.'
  },
  {
    name: 'Tiro con arco',
    normal: 'Continuo: Durante esta ronda de combate, tus unidades a distancia ganan +1 Ataque si el objetivo no es una unidad adyacente.',
    expert: 'Continuo: Hasta el final de la siguiente ronda de combate, todas tus unidades a distancia ganan +1 Iniciativa y +1 Ataque si el objetivo no es una unidad adyacente.',
    category: 'Combate' as const,
    description: 'Incrementa la letalidad, iniciativa y precisión táctica de tus unidades a distancia.'
  },
  {
    name: 'Armero',
    normal: 'Instantáneo: +1 Defensa.\nDespués, roba 1 carta.',
    expert: 'Instantáneo: +2 Defensa.\nDespués, roba 1 carta.',
    category: 'Combate' as const,
    description: 'Mejora la absorción de impactos físicos de tus tropas y repone tu mano táctica.'
  },
  {
    name: 'Artillería',
    normal: 'Instantáneo: Inflige 1 Herida a la unidad enemiga con menor Iniciativa.',
    expert: 'Instantáneo: Al utilizar la carta Balista, resuelve su efecto 3 veces contra el mismo objetivo.',
    category: 'Combate' as const,
    description: 'Domina el armamento pesado táctico para desatar ráfagas o golpes precisos contra las filas enemigas.'
  },
  {
    name: 'Balística',
    normal: 'Instantáneo: Juega esta carta durante un asedio.\nDestruya 1 muralla o puerta.',
    expert: 'Instantáneo: Juega esta carta durante un asedio.\nDestruye la Torre de arqueros.',
    category: 'Combate' as const,
    description: 'Optimiza los disparos de asedio para desmantelar las fortificaciones enemigas de forma letal.'
  },
  {
    name: 'Diplomacia',
    normal: 'Mapa: Por cada vivienda que tengas, roba 1 carta de la unidad neutral correspondiente.\nPodrás reclutar una de estas unidades si Pagas su coste de reclutamiento.',
    expert: 'Instantáneo: Ignora el combate con unidades neutrales en una zona cuya dificultad de la zona sea igual al nivel de tu héroe. Visita la zona. Tu héroe no gana experiencia.',
    category: 'Apoyo' as const,
    description: 'Facilita la asimilación pacífica de unidades salvajes y evita batallas costosas.'
  },
  {
    name: 'Vista de águila',
    normal: 'Instantáneo: Roba cartas del mazo de hechizos hasta que encuentres una carta de hechizo básico. Llévatela a la mano o descártala. Devuelve el resto de las cartas al mazo de hechizos y barájalo.',
    expert: 'Instantáneo: Roba cartas del mazo de hechizos hasta que encuentres una carta de hechizo avanzado. Llévatela a la mano o descártala. Devuelve el resto de las cartas al mazo de hechizos y barájalo.',
    category: 'Desarrollo' as const,
    description: 'Agudiza tus sentidos para asimilar y adquirir nuevos conjuros directamente del mazo.'
  },
  {
    name: 'Patrimonio',
    normal: 'Instantáneo: Gana 3 Oros.',
    expert: 'Instantáneo: Gana 6 Oros.',
    category: 'Economía' as const,
    description: 'Establece un cobro de tributos inmediato para inyectar capital de oro a tus arcas del reino.'
  },
  {
    name: 'Primeros auxilios',
    normal: 'Instantáneo: Retira 1 Herida de una de tus unidades.',
    expert: 'Instantáneo: Cuando utilices la carta Tienda de primeros auxilios, resuelve su efecto 3 veces contra el mismo objetivo.',
    category: 'Apoyo' as const,
    description: 'Sostiene la vitalidad de tus tropas de asalto sanando heridas críticas en el fragor de la batalla.'
  },
  {
    name: 'Inteligencia',
    normal: 'Instantáneo: Al comienzo de la ronda de combate, juega una carta de hechizo.\nDurante la ronda de combate sigues pudiendo jugar solo una carta de hechizo.',
    expert: 'Instantáneo: Al comienzo de la ronda de combate, juega una carta de hechizo.\nEste hechizo no cuenta para el límite de hechizos por ronda de combate.',
    category: 'Magia' as const,
    description: 'Otorga la capacidad táctica de adelantarse al orden de iniciativa lanzando magia de forma flexible.'
  },
  {
    name: 'Interferencia',
    normal: 'Instantáneo: +1 Defensa. Este efecto se puede utilizar para reducir el Daño de un Hechizo.',
    expert: 'Instantáneo: +2 Defensa. Este efecto se puede utilizar para reducir el Daño de un Hechizo.',
    category: 'Apoyo' as const,
    description: 'Crea una distorsión mágica defensiva que ampara a tus tropas de ataques y conjuros hostiles.'
  },
  {
    name: 'Liderazgo',
    normal: 'Instantáneo: Gana una ficha de Moral Positiva.',
    expert: 'Instantáneo: Roba 2 cartas.\nDespués, gana una ficha de Moral Positiva.',
    category: 'Combate' as const,
    description: 'Inculca valor supremo en el ejército, reponiendo opciones tácticas o ganando moral.'
  },
  {
    name: 'Aprendizaje',
    normal: 'Instantáneo: Juégala cuando el héroe esté a punto de subir de nivel. Aumenta su nivel de experiencia en medio nivel adicional.',
    expert: 'Instantáneo: Juégala cuando el héroe esté a punto de subir de nivel. Aumenta su nivel de experiencia en un nivel adicional y después retira esta carta.',
    category: 'Desarrollo' as const,
    description: 'Maximiza el provecho de tus hazañas para acelerar drásticamente el desarrollo de tu Héroe.'
  },
  {
    name: 'Logística',
    normal: 'Continuo: Al final de tu turno, mueve la miniatura de tu héroe a una zona vacía adyacente.',
    expert: 'Instantáneo: Tu héroe gana +1 de movimiento.',
    category: 'Aventura' as const,
    description: 'Incrementa el alcance y dinamismo de tus marchas tácticas sobre el mapa de aventura.'
  },
  {
    name: 'Suerte',
    normal: 'Continuo: Puedes volver a lanzar un dado de tesoro y de recurso una vez durante este turno.',
    expert: 'Continuo: Puedes volver a lanzar tantos dados como quieras una vez durante este turno.',
    category: 'Combate' as const,
    description: 'Invoca la buena fortuna para mitigar la aleatoriedad de los dados en momentos clave.'
  },
  {
    name: 'Misticismo',
    normal: 'Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En vez de descartar la carta de hechizo, devuélvela a tu mano.',
    expert: 'Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En vez de descartar la carta de Hechizo y el resto de las cartas que juegues con ella, devuélvelas a tu mano.',
    category: 'Magia' as const,
    description: 'Canalización sagaz de energía mágica que permite reciclar conjuros ya lanzados.'
  },
  {
    name: 'Nigromancia',
    normal: 'Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Refuerza una de tus unidades Bronce o Plata por la mitad del coste en Oro (redondeado hacia abajo).',
    expert: 'Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Refuerza cualquiera de tus unidades por la mitad del coste en Oro (redondeado hacia abajo).',
    category: 'Apoyo' as const,
    description: 'Anima los restos de las bajas enemigas para expandir tus propias filas de no-muertos a un precio ínfimo.'
  },
  {
    name: 'Ofensa',
    normal: 'Instantáneo: +1 Ataque\nDespués, roba 1 carta.',
    expert: 'Instantáneo: +2 Ataque\nDespués, roba 1 carta.',
    category: 'Combate' as const,
    description: 'Imbuye ferocidad temporal a tus ejércitos de choque y repone tus cartas tácticas.'
  },
  {
    name: 'Orientación',
    normal: 'Mapa: Este turno, tu héroe puede moverse por zonas con unidades neutrales y héroes enemigos, pero, si acaba en una de estas zonas, empezará el combate.',
    expert: 'Mapa: Tu héroe puede atravesar bordes amarillos y zonas bloqueadas, pero no puede acabar su movimiento en ellas.',
    category: 'Aventura' as const,
    description: 'Permite explorar y maniobrar a través de obstáculos terrestres y ejércitos enemigos pasivos.'
  },
  {
    name: 'Resistencia',
    normal: 'Instantáneo: Juega esta carta inmediatamente después de que el enemigo lance un hechizo. Si ha lanzado el hechizo con 1 Potencia o menos, ignora el efecto de la carta de hechizo.',
    expert: 'Instantáneo: Juega esta carta inmediatamente después de que el enemigo lance un hechizo. Ignora el efecto de la carta de hechizo.',
    category: 'Apoyo' as const,
    description: 'Anula o neutraliza la hostilidad de conjuros mágicos hostiles lanzados contra tus tropas.'
  },
  {
    name: 'Erudito',
    normal: 'Instantáneo: Elige 1 carta de tu descarte y añádela a tu mano.',
    expert: 'Mapa: Retira hasta 2 cartas de característica de tu mano o del descarte. Coge 2 cartas de característica potenciada y colócalas en la parte superior de tu descarte. Retira el Erudito.',
    category: 'Desarrollo' as const,
    description: 'Optimiza la baraja de tu héroe purgando cartas mediocres o recuperando recursos del descarte.'
  },
  {
    name: 'Exploración',
    normal: 'Instantáneo: Juega esta carta cuando vayas a buscar para buscar(3).',
    expert: 'Instantáneo: Juega esta carta cuando vayas a buscar para buscar(5).',
    category: 'Aventura' as const,
    description: 'Acelera el descubrimiento y expansión del mapa de aventura mediante búsquedas eficientes de losetas.'
  },
  {
    name: 'Hechicería',
    normal: 'Instantáneo: +1 Potencia\nDespués, roba 1 carta.',
    expert: 'Instantáneo: +2 Potencia\nDespués, roba 1 carta.',
    category: 'Magia' as const,
    description: 'Amplifica el poder bruto de todos tus conjuros activos durante un turno completo.'
  },
  {
    name: 'Táctica',
    normal: 'Instantáneo: Al comienzo del combate, intercambia la posición de 2 de tus unidades.',
    expert: 'Activación: Durante el combate, intercambia la posición de 2 de tus unidades.',
    category: 'Combate' as const,
    description: 'Otorga flexibilidad posicional absoluta a tus batallones antes o durante la liza.'
  },
  {
    name: 'Sabiduría',
    normal: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(3) en vez de buscar(2).',
    expert: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. When compres hechizos de tu cofradía de magos, busca(4) en vez de buscar(2).',
    category: 'Desarrollo' as const,
    description: 'Abarata los gremios de magos y expande drásticamente las cartas de conjuros disponibles para tu héroe.'
  }
];

// Normalize mapping from hero initial skill to standard card name
const NORMALIZE_SKILL_NAME: Record<string, string> = {
  'Liderazgo': 'Liderazgo',
  'Tiro con arco': 'Tiro con arco',
  'Arquería': 'Tiro con arco',
  'Artillería': 'Artillería',
  'Táctica': 'Táctica',
  'Tácticas': 'Táctica',
  'Armero': 'Armero',
  'Armadura': 'Armero',
  'Resistencia': 'Resistencia',
  'Interferencia': 'Interferencia',
  'Suerte': 'Suerte',
  'Sabiduría': 'Sabiduría',
  'Hechicería': 'Hechicería',
  'Misticismo': 'Misticismo',
  'Inteligencia': 'Inteligencia',
  'Nigromancia': 'Nigromancia',
  'Logística': 'Logística',
  'Exploración': 'Exploración',
  'Orientación': 'Orientación',
  'Buscador de Caminos': 'Orientación',
  'Patrimonio': 'Patrimonio',
  'Finanzas': 'Patrimonio',
  'Diplomacia': 'Diplomacia',
  'Primeros auxilios': 'Primeros auxilios',
  'Primeros Auxilios': 'Primeros auxilios',
  'Vista de águila': 'Vista de águila',
  'Ojo de Águila': 'Vista de águila',
  'Erudito': 'Erudito',
  'Aprendizaje': 'Aprendizaje',
  'Navegación': 'Logística',
  'Ofensiva': 'Ofensa',
  'Ofensa': 'Ofensa',
  'Ofensiva / Ataque': 'Ofensa',
  'Magia de aire': 'Magia de Aire',
  'Magia de tierra': 'Magia de Tierra',
  'Magia de fuego': 'Magia de Fuego',
  'Magia de agua': 'Magia de agua',
  'Magia básica del fuego': 'Magia básica del fuego',
  'Magia Básica de Fuego': 'Magia básica del fuego'
};

export default function SkillsBrowser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [sortBy, setSortBy] = useState<'name' | 'heroesCount'>('name');

  // Aggregated skills list dynamically parsed with linked heroes
  const skillsList = useMemo(() => {
    // Clone our master static database
    const list: EnrichedSkill[] = ALL_BOARD_GAME_SKILLS.map(skill => ({
      ...skill,
      heroes: []
    }));

    // Scan heroes database to find matches
    Object.entries(FACTION_HEROES).forEach(([factionId, heroes]) => {
      heroes.forEach((hero) => {
        if (hero.initialSkill && hero.initialSkill.name) {
          const rawName = hero.initialSkill.name.trim();
          const normalizedName = NORMALIZE_SKILL_NAME[rawName] || rawName;

          // Find matching skill in the clone list
          const targetSkill = list.find(s => s.name.toLowerCase() === normalizedName.toLowerCase());
          if (targetSkill) {
            const heroLink = {
              name: hero.name,
              factionId,
              factionName: FACTION_NAMES[factionId] || factionId,
              className: hero.className
            };

            // Avoid duplicate hero links
            if (!targetSkill.heroes.some(h => h.name === hero.name)) {
              targetSkill.heroes.push(heroLink);
            }
          }
        }
      });
    });

    // Sort according to selection
    if (sortBy === 'name') {
      return [...list].sort((a, b) => a.name.localeCompare(b.name, 'es'));
    } else {
      return [...list].sort((a, b) => b.heroes.length - a.heroes.length);
    }
  }, [sortBy]);

  // Filter skills based on search and category
  const filteredSkills = useMemo(() => {
    return skillsList.filter(skill => {
      const matchesSearch = 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.normal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.expert.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'Todas' || skill.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [skillsList, searchTerm, selectedCategory]);

  // Category counts for UI badges
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Todas: skillsList.length };
    skillsList.forEach(skill => {
      counts[skill.category] = (counts[skill.category] || 0) + 1;
    });
    return counts;
  }, [skillsList]);

  // Get style configs for categories
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'Combate':
        return {
          bg: 'bg-red-950/40',
          border: 'border-red-900/40',
          text: 'text-red-400',
          badge: 'bg-red-500/10 text-red-400 border-red-500/20',
          icon: Swords
        };
      case 'Magia':
        return {
          bg: 'bg-violet-950/40',
          border: 'border-violet-900/40',
          text: 'text-violet-400',
          badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
          icon: Flame
        };
      case 'Aventura':
        return {
          bg: 'bg-emerald-950/40',
          border: 'border-emerald-900/40',
          text: 'text-emerald-400',
          badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
          icon: Compass
        };
      case 'Economía':
        return {
          bg: 'bg-amber-950/40',
          border: 'border-amber-900/40',
          text: 'text-amber-400',
          badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
          icon: Coins
        };
      case 'Desarrollo':
        return {
          bg: 'bg-blue-950/40',
          border: 'border-blue-900/40',
          text: 'text-blue-400',
          badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
          icon: TrendingUp
        };
      case 'Apoyo':
        return {
          bg: 'bg-pink-950/40',
          border: 'border-pink-900/40',
          text: 'text-pink-400',
          badge: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
          icon: HeartPlus
        };
      default:
        return {
          bg: 'bg-slate-900/40',
          border: 'border-slate-800',
          text: 'text-slate-400',
          badge: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
          icon: HelpCircle
        };
    }
  };

  return (
    <div className="space-y-6" id="skills-browser-container">
      {/* Intro Block */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5" id="skills-intro-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-amber-400 tracking-wide flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              Enciclopedia de Habilidades del Juego de Mesa
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
              Navega por la baraja de habilidades del juego de mesa oficial de <strong>Heroes of Might & Magic III</strong>. Consulta los efectos de las cartas en sus modos <strong>Básico</strong> y <strong>Experto</strong> tal y como están descritos en el reglamento de juego en español.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 bg-slate-950/60 border border-slate-800/80 rounded-xl px-3 py-1.5 self-start md:self-auto">
            <span className="text-[10px] font-mono text-slate-500">HABILIDADES OFICIALES:</span>
            <span className="text-xs font-mono font-bold text-amber-500">{skillsList.length}</span>
          </div>
        </div>
      </div>

      {/* Search and Filters Bento Controls */}
      <div className="bg-slate-900/30 border border-slate-850 rounded-2xl p-4 md:p-5 space-y-4 shadow-lg shadow-black/20" id="skills-controls">
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
            <input
              type="text"
              id="skill-search-input"
              placeholder="Buscar por nombre, efecto básico, experto o palabra clave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-amber-500/60 rounded-xl pl-11 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500/20 transition-all duration-150"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300 font-semibold px-1.5 py-0.5 rounded bg-slate-800 cursor-pointer"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Sorter Dropdown */}
          <div className="flex items-center gap-3 bg-slate-950/40 border border-slate-800 rounded-xl px-3 py-1.5 self-start md:self-auto">
            <ArrowUpDown className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="text-xs text-slate-400 font-medium">Ordenar por:</span>
            <select
              id="skill-sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-xs text-amber-400 font-bold focus:outline-none cursor-pointer pr-2 border-none"
            >
              <option value="name">Alfabético (A-Z)</option>
              <option value="heroesCount">Héroes iniciales (Frecuencia)</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="border-t border-slate-800/40 pt-4 flex flex-wrap gap-2">
          {(['Todas', 'Combate', 'Magia', 'Aventura', 'Economía', 'Desarrollo', 'Apoyo'] as const).map((cat) => {
            const isActive = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;
            
            // Icon
            let CatIcon = HelpCircle;
            if (cat === 'Combate') CatIcon = Swords;
            if (cat === 'Magia') CatIcon = Flame;
            if (cat === 'Aventura') CatIcon = Compass;
            if (cat === 'Economía') CatIcon = Coins;
            if (cat === 'Desarrollo') CatIcon = TrendingUp;
            if (cat === 'Apoyo') CatIcon = HeartPlus;
            if (cat === 'Todas') CatIcon = Filter;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-amber-600 border-amber-500 text-white shadow-md shadow-amber-950/30 transform scale-[1.02]'
                    : 'bg-slate-950/40 border-slate-850 text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                }`}
              >
                <CatIcon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.25 rounded-md font-mono ${isActive ? 'bg-amber-800/80 text-amber-200' : 'bg-slate-900 text-slate-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active filters status */}
      {(searchTerm || selectedCategory !== 'Todas') && (
        <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-950/20 px-4 py-2.5 rounded-xl border border-slate-900/60">
          <div className="flex items-center gap-1.5">
            <span>Resultados:</span>
            <strong className="text-amber-500 font-mono font-bold">{filteredSkills.length}</strong>
            <span>habilidad(es) encontrada(s)</span>
            {selectedCategory !== 'Todas' && (
              <span className="bg-slate-800 px-2 py-0.5 rounded-md text-[10px] text-slate-300 uppercase font-bold tracking-wider">
                {selectedCategory}
              </span>
            )}
          </div>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('Todas');
            }}
            className="text-amber-400 hover:text-amber-300 font-bold hover:underline transition-all cursor-pointer"
          >
            Restablecer Filtros
          </button>
        </div>
      )}

      {/* Main Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="skills-grid">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => {
            const theme = getCategoryTheme(skill.category);
            const IconComponent = theme.icon;

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: Math.min(index * 0.03, 0.3) }}
                className="bg-slate-900/30 border border-slate-850/80 rounded-2xl p-5 hover:border-slate-700/80 hover:bg-slate-900/55 transition-all duration-200 shadow-lg shadow-black/10 flex flex-col justify-between"
                style={{ contentVisibility: 'auto' }}
              >
                <div className="space-y-4">
                  
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2 border-b border-slate-800/40 pb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-slate-100 tracking-wide">
                          {skill.name}
                        </h3>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border ${theme.badge}`}>
                          {skill.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pr-2">
                        {skill.description}
                      </p>
                    </div>
                    
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-slate-800 ${theme.bg}`}>
                      <IconComponent className={`w-4.5 h-4.5 ${theme.text}`} />
                    </div>
                  </div>

                  {/* Effects Breakdown */}
                  <div className="space-y-3">
                    {/* Basic effect */}
                    <div className="bg-slate-950/60 border border-slate-850 p-3 rounded-xl space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                        Efecto Básico
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed whitespace-pre-line">
                        {skill.normal}
                      </p>
                    </div>

                    {/* Expert effect */}
                    <div className="bg-amber-950/10 border border-amber-900/30 p-3 rounded-xl space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] uppercase font-bold text-amber-500 tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        Efecto Experto
                      </div>
                      <p className="text-xs text-amber-200 leading-relaxed whitespace-pre-line">
                        {skill.expert}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Heroes starting with this skill */}
                <div className="mt-5 pt-3.5 border-t border-slate-850/60 flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 uppercase">
                    <Users className="w-3.5 h-3.5" />
                    <span>Héroes Iniciales ({skill.heroes.length})</span>
                  </div>
                  {skill.heroes.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5 max-h-[120px] overflow-y-auto pr-1">
                      {skill.heroes.map((hero) => (
                        <div
                          key={hero.name}
                          className="bg-slate-950/70 hover:bg-slate-800/50 border border-slate-850 px-2 py-1 rounded-lg text-[10px] text-slate-300 flex items-center gap-1.5 transition-all duration-150"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80"></span>
                          <span className="font-medium text-slate-200">{hero.name}</span>
                          <span className="text-slate-500 border-l border-slate-800 pl-1">{hero.className.split(' (')[0]}</span>
                          <span className="text-[9px] text-amber-500/70 font-bold">({hero.factionName.split(' (')[0]})</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-[10px] text-slate-500 italic">
                      Adquirible durante la partida (ningún héroe comienza con ella)
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredSkills.length === 0 && (
          <div className="col-span-1 md:col-span-2 py-16 text-center space-y-3" id="skills-empty-state">
            <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mx-auto text-slate-600">
              <Search className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-300">No se encontraron habilidades</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                No hay resultados que coincidan con &quot;{searchTerm}&quot; o con el filtro seleccionado. Intenta buscar otra palabra clave.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
