export interface WarMachine {
  id: string;
  name: string;
  costBlacksmith: number;
  costFactory: number;
  hp: string;
  timing: string;
  expansion: string;
  baseEffect: string;
  associatedSkill: string;
  skillNormalEffect: string;
  skillExpertEffect: string;
  icon: string;
  bgGradient: string;
  borderColor: string;
}

export const WAR_MACHINES: WarMachine[] = [
  {
    id: 'ballista',
    name: 'Balista',
    costBlacksmith: 7,
    costFactory: 10,
    hp: 'Inmune',
    timing: 'Al comienzo de cada ronda de combate',
    expansion: 'Juego Base',
    baseEffect: 'Inflige 1 Herida a la unidad enemiga con menor iniciativa.',
    associatedSkill: 'Artillería',
    skillNormalEffect: 'Instantáneo: Inflige 1 Herida a la unidad enemiga con menor Iniciativa (no necesita tener la carta Balista).',
    skillExpertEffect: 'Instantáneo: Al utilizar la carta Balista, resuelve su efecto 3 veces contra el mismo objetivo (inflige un total de 3 heridas a la unidad enemiga con la menor Iniciativa).',
    icon: '🏹',
    bgGradient: 'from-amber-950/40 to-slate-900/80',
    borderColor: 'border-amber-700/60'
  },
  {
    id: 'catapult',
    name: 'Catapulta',
    costBlacksmith: 8,
    costFactory: 12,
    hp: 'Inmune',
    timing: 'Al comienzo de cada ronda de combate',
    expansion: 'Juego Base',
    baseEffect: 'Puedes pagar 1 Piedra para elegir 2 objetivos adyacentes (cualquier combinación de unidades, muros y la puerta) y aplicar 1 Herida a cada uno.',
    associatedSkill: 'Balística',
    skillNormalEffect: 'Instantáneo: Juega esta carta durante un asedio. Destruye 1 muralla o puerta (no necesita tener la carta Catapulta).',
    skillExpertEffect: 'Instantáneo: Juega esta carta durante un asedio. Destruye la Torre de arqueros (no necesita tener la carta Catapulta).',
    icon: '🧱',
    bgGradient: 'from-orange-950/40 to-slate-900/80',
    borderColor: 'border-orange-800/60'
  },
  {
    id: 'ammo_cart',
    name: 'Carro de Municiones',
    costBlacksmith: 5,
    costFactory: 8,
    hp: 'Inmune',
    timing: 'Al comienzo de cada ronda de combate',
    expansion: 'Juego Base',
    baseEffect: 'Tus unidades a distancia ignoran penalizadores de combate y ganan +2 Iniciativa.',
    associatedSkill: 'Ninguna',
    skillNormalEffect: 'No aplica.',
    skillExpertEffect: 'No aplica.',
    icon: '📦',
    bgGradient: 'from-emerald-950/40 to-slate-900/80',
    borderColor: 'border-emerald-800/60'
  },
  {
    id: 'first_aid',
    name: 'Tienda de primeros auxilios',
    costBlacksmith: 3,
    costFactory: 6,
    hp: 'Inmune',
    timing: 'Una vez por cada ronda de combate',
    expansion: 'Juego Base',
    baseEffect: 'Retira 1 Herida de la unidad que elijas.',
    associatedSkill: 'Primeros auxilios',
    skillNormalEffect: 'Instantáneo: Retira 1 Herida de una de tus unidades (no necesita la carta Tienda de primeros auxilios).',
    skillExpertEffect: 'Instantáneo: Cuando utilices la carta Tienda de primeros auxilios, resuelve su efecto de 3 veces contra el mismo objetivo (retirando un total de 3 heridas de la unidad aliada que elijas).',
    icon: '🩹',
    bgGradient: 'from-rose-950/40 to-slate-900/80',
    borderColor: 'border-rose-800/60'
  },
  {
    id: 'cannon',
    name: 'Cañón',
    costBlacksmith: 10,
    costFactory: 14,
    hp: 'Inmune',
    timing: 'Al comienzo de cada ronda de combate',
    expansion: 'Expansión de Cala (Cove)',
    baseEffect: 'Puedes gastar 1 Corona para aplicar 2 Heridas a 1 unidad enemiga.',
    associatedSkill: 'Ninguna',
    skillNormalEffect: 'No Aplica.',
    skillExpertEffect: 'No Aplica.',
    icon: '💣',
    bgGradient: 'from-cyan-950/40 to-slate-900/80',
    borderColor: 'border-cyan-800/60'
  }
];

export const warMachinesData = WAR_MACHINES;
