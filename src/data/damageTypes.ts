// Tipos de daño y modificadores en Heroes III: The Board Game (Edición Española)
// Basado en reglasCombinadas.ts y documentación oficial

export interface DamageType {
  id: string;
  name: string;
  description: string;
  ignoresDefense: boolean;
  affectedByAttackModifiers: boolean;
  notes?: string;
}

export interface DamageModifier {
  id: string;
  name: string;
  description: string;
  appliesTo: ('physical' | 'spell' | 'elemental' | 'direct' | 'wall_mine' | 'all')[];
  valueType: 'flat' | 'percentage';
  notes?: string;
}

export const DAMAGE_TYPES: DamageType[] = [
  {
    id: 'physical',
    name: 'Daño Físico',
    description: 'Daño estándar de unidades terrestres y voladoras. Reducido por la Defensa del objetivo.',
    ignoresDefense: false,
    affectedByAttackModifiers: true,
    notes: 'Aplicado por la mayoría de ataques de unidades. Se calcula como: Ataque Total - Defensa Total (mínimo 0).'
  },
  {
    id: 'spell',
    name: 'Daño de Hechizo',
    description: 'Daño de hechizos y efectos mágicos. Ignora completamente la Defensa del objetivo.',
    ignoresDefense: true,
    affectedByAttackModifiers: false,
    notes: 'Los hechizos aplican una cantidad fija de daño y no se ven afectados por el dado de ataque. Incluye daño de hechizos básicos y potenciados.'
  },
  {
    id: 'elemental',
    name: 'Daño Elemental',
    description: 'Daño especial de ciertas unidades que ignora la Defensa, igual que el daño de hechizo.',
    ignoresDefense: true,
    affectedByAttackModifiers: true,
    notes: 'Algunas unidades tienen la habilidad "esta unidad inflige daño elemental". No se ve afectado por habilidades que reducen el daño de hechizos.'
  },
  {
    id: 'direct',
    name: 'Daño Directo',
    description: 'Daño que ignora Defensa y otros modificadores estándar.',
    ignoresDefense: true,
    affectedByAttackModifiers: false,
    notes: 'Incluye efectos como el de la Carta de Característica Potenciada y ciertas habilidades especiales.'
  },
  {
    id: 'wall_mine',
    name: 'Daño de Muro/Mina',
    description: 'Daño especial aplicado por estructuras defensivas y trampas.',
    ignoresDefense: false,
    affectedByAttackModifiers: false,
    notes: 'Daño de Muro de Fuego y Minas Terrestres. Se aplica al pasar por estas casillas.'
  }
];

export const DAMAGE_MODIFIERS: DamageModifier[] = [
  {
    id: 'attack_bonus',
    name: 'Bonificación de Ataque',
    description: 'Incrementa el valor de ataque antes de calcular el daño.',
    appliesTo: ['physical', 'elemental'],
    valueType: 'flat',
    notes: 'Proviene de habilidades, artefactos, efectos de cartas y bonificaciones de terreno.'
  },
  {
    id: 'attack_penalty',
    name: 'Penalización de Ataque',
    description: 'Reduce el valor de ataque antes de calcular el daño.',
    appliesTo: ['physical', 'elemental'],
    valueType: 'flat',
    notes: 'Ejemplo: penalización de unidades a distancia cuando el objetivo está adyacente (-1).'
  },
  {
    id: 'defense_bonus',
    name: 'Bonificación de Defensa',
    description: 'Incrementa el valor de defensa antes de calcular el daño.',
    appliesTo: ['physical', 'wall_mine'],
    valueType: 'flat',
    notes: 'Proviene de habilidades, artefactos, efectos de cartas y bonificaciones de terreno.'
  },
  {
    id: 'defense_penalty',
    name: 'Penalización de Defensa',
    description: 'Reduce el valor de defensa antes de calcular el daño.',
    appliesTo: ['physical', 'wall_mine'],
    valueType: 'flat',
    notes: 'Ejemplo: Corrosión (-1 Defensa hasta mínimo 0).'
  },
  {
    id: 'damage_bonus',
    name: 'Bonificación de Daño',
    description: 'Incrementa el daño final después de aplicar defensa.',
    appliesTo: ['all'],
    valueType: 'flat',
    notes: 'Ejemplo: ciertas habilidades que añaden daño fijo independientemente de ataque/defensa.'
  },
  {
    id: 'damage_penalty',
    name: 'Penalización de Daño',
    description: 'Reduce el daño final después de aplicar defensa.',
    appliesTo: ['all'],
    valueType: 'flat',
    notes: 'Ejemplo: ciertas habilidades que reducen el daño recibido.'
  },
  {
    id: 'spell_power',
    name: 'Poder de Hechizo',
    description: 'Incrementa el poder de los hechizos, afectando su daño base.',
    appliesTo: ['spell'],
    valueType: 'flat',
    notes: 'Proviene de cartas de Poder, habilidades y ciertos artefactos.'
  },
  {
    id: 'elemental_immunity',
    name: 'Inmunidad Elemental',
    description: 'Hace que la unidad ignore completamente el daño elemental.',
    appliesTo: ['elemental'],
    valueType: 'percentage',
    notes: 'Valor: 100% (inmunidad total). Algunas habilidades otorgan inmunidad a escuelas de magia específicas.'
  },
  {
    id: 'magic_immunity',
    name: 'Inmunidad Mágica',
    description: 'Hace que la unidad ignore completamente el daño de hechizo.',
    appliesTo: ['spell'],
    valueType: 'percentage',
    notes: 'Valor: 100% (inmunidad total). Ejemplo: facción Bastión tiene inmunidad mágica natural.'
  }
];

export const DAMAGE_RESOLUTION_RULES = {
  // Fórmula básica de daño
  basicFormula: '(Ataque Total + Bonificaciones de Ataque - Penalizaciones de Ataque) - (Defensa Total + Bonificaciones de Defensa - Penalizaciones de Defensa)',
  
  // Daño mínimo
  minimumDamage: 0,
  
  // Tipos de daño que ignoran defensa
  ignoresDefense: ['spell', 'elemental', 'direct'],
  
  // Tipos de daño que no se ven afectados por dado de ataque
  noAttackDie: ['spell'],
  
  // Resolución paso a paso
  steps: [
    '1. Calcular Ataque Total: Ataque Base + Bonificaciones de Ataque - Penalizaciones de Ataque',
    '2. Calcular Defensa Total: Defensa Base + Bonificaciones de Defensa - Penalizaciones de Defensa',
    '3. Aplicar Dado de Ataque (si corresponde): suma -1, 0 o +1 al Ataque Total',
    '4. Para daño que ignora defensa: Daño = Ataque Total (modificado por dado si aplica)',
    '5. Para daño que respeta defensa: Daño = max(0, Ataque Total - Defensa Total)',
    '6. Aplicar Bonificaciones/Penalizaciones de Daño Final',
    '7. Aplicar Resistencias/Inmunidades Específicas'
  ]
};