// Datos de unidades reclutables de Heroes III: The Board Game.
// Extraído de RecruitmentCalculator.tsx para poder reutilizarse también
// como fuente de la base de conocimiento del oráculo Sandro (ver server.ts
// y src/data/knowledgeIndex.ts).

export interface UnitStats {
  atk: number;
  def: number;
  hp: number;
  ini: number;
  type: 'Melé' | 'a Distancia' | 'Voladora';
  abilities: string[];
  customCost?: { gold: number; materials: number; valuable: number };
}

export interface BoardGameUnit {
  level: number;
  nameBasic: string;
  nameElite?: string;
  tier: 'bronce' | 'plata' | 'oro' | 'azul';
}

export interface FactionsUnitsData {
  [factionId: string]: BoardGameUnit[];
}

export const FACTION_UNITS: FactionsUnitsData = {
  castillo: [
    { level: 1, nameBasic: 'Alabarderos', nameElite: 'Alabarderos', tier: 'bronce' },
    { level: 2, nameBasic: 'Tiradores', nameElite: 'Tiradores', tier: 'bronce' },
    { level: 3, nameBasic: 'Grifos', nameElite: 'Grifos', tier: 'bronce' },
    { level: 4, nameBasic: 'Cruzados', nameElite: 'Cruzados', tier: 'plata' },
    { level: 5, nameBasic: 'Fanáticos', nameElite: 'Fanáticos', tier: 'plata' },
    { level: 6, nameBasic: 'Campeones', nameElite: 'Campeones', tier: 'oro' },
    { level: 7, nameBasic: 'Arcángeles', nameElite: 'Arcángeles', tier: 'oro' }
  ],
  necropolis: [
    { level: 1, nameBasic: 'Esqueletos', nameElite: 'Esqueletos', tier: 'bronce' },
    { level: 2, nameBasic: 'Zombis', nameElite: 'Zombis', tier: 'bronce' },
    { level: 3, nameBasic: 'Espectros', nameElite: 'Espectros', tier: 'bronce' },
    { level: 4, nameBasic: 'Vampiros', nameElite: 'Vampiros', tier: 'plata' },
    { level: 5, nameBasic: 'Liches', nameElite: 'Liches', tier: 'plata' },
    { level: 6, nameBasic: 'Caballeros del terror', nameElite: 'Caballeros del terror', tier: 'oro' },
    { level: 7, nameBasic: 'Dragones fantasma', nameElite: 'Dragones fantasma', tier: 'oro' }
  ],
  mazmorra: [
    { level: 1, nameBasic: 'Trogloditas', nameElite: 'Trogloditas', tier: 'bronce' },
    { level: 2, nameBasic: 'Arpías', nameElite: 'Arpías', tier: 'bronce' },
    { level: 3, nameBasic: 'Ojos maléficos', nameElite: 'Ojos maléficos', tier: 'bronce' },
    { level: 4, nameBasic: 'Medusas', nameElite: 'Medusas', tier: 'plata' },
    { level: 5, nameBasic: 'Minotauros', nameElite: 'Minotauros', tier: 'plata' },
    { level: 6, nameBasic: 'Mantícoras', nameElite: 'Mantícoras', tier: 'oro' },
    { level: 6, nameBasic: 'Mantícoras (Alternativa)', nameElite: 'Mantícoras (Alternativa)', tier: 'oro' },
    { level: 7, nameBasic: 'Dragones negros', nameElite: 'Dragones negros', tier: 'oro' }
  ],
  murallas: [
    { level: 1, nameBasic: 'Centauros', nameElite: 'Centauros', tier: 'bronce' },
    { level: 2, nameBasic: 'Enanos', nameElite: 'Enanos', tier: 'bronce' },
    { level: 3, nameBasic: 'Elfos', nameElite: 'Elfos', tier: 'bronce' },
    { level: 4, nameBasic: 'Pegasos', nameElite: 'Pegasos', tier: 'plata' },
    { level: 5, nameBasic: 'Dendroides', nameElite: 'Dendroides', tier: 'plata' },
    { level: 6, nameBasic: 'Unicornios', nameElite: 'Unicornios', tier: 'oro' },
    { level: 7, nameBasic: 'Dragones dorados', nameElite: 'Dragones dorados', tier: 'oro' }
  ],
  torre: [
    { level: 1, nameBasic: 'Gremlins', nameElite: 'Gremlins', tier: 'bronce' },
    { level: 2, nameBasic: 'Gárgolas', nameElite: 'Gárgolas', tier: 'bronce' },
    { level: 3, nameBasic: 'Gólems de hierro', nameElite: 'Golems de hierro', tier: 'bronce' },
    { level: 4, nameBasic: 'Magos', nameElite: 'Magos', tier: 'plata' },
    { level: 5, nameBasic: 'Genios', nameElite: 'Genios', tier: 'plata' },
    { level: 6, nameBasic: 'Nagas', nameElite: 'Nagas', tier: 'oro' },
    { level: 7, nameBasic: 'Titanes', nameElite: 'Titanes', tier: 'oro' }
  ],
  inferno: [
    { level: 1, nameBasic: 'Familiares', nameElite: 'Familiares', tier: 'bronce' },
    { level: 2, nameBasic: 'Magogs', nameElite: 'Magogs', tier: 'bronce' },
    { level: 3, nameBasic: 'Cerberos', nameElite: 'Cerberos', tier: 'bronce' },
    { level: 4, nameBasic: 'Demonios', nameElite: 'Demonios', tier: 'plata' },
    { level: 5, nameBasic: 'Señores del abismo', nameElite: 'Señores del abismo', tier: 'plata' },
    { level: 6, nameBasic: 'Efrits', nameElite: 'Efrits', tier: 'oro' },
    { level: 7, nameBasic: 'Archidiablos', nameElite: 'Archidiablos', tier: 'oro' }
  ],
  bastion: [
    { level: 1, nameBasic: 'Goblins', nameElite: 'Goblins', tier: 'bronce' },
    { level: 2, nameBasic: 'Incursores lupinos', nameElite: 'Incursores lupinos', tier: 'bronce' },
    { level: 3, nameBasic: 'Orcos', nameElite: 'Orcos', tier: 'bronce' },
    { level: 4, nameBasic: 'Ogros', nameElite: 'Ogros', tier: 'plata' },
    { level: 5, nameBasic: 'Aves de trueno', nameElite: 'Aves de Trueno', tier: 'plata' },
    { level: 6, nameBasic: 'Cíclopes', nameElite: 'Cíclopes', tier: 'oro' },
    { level: 7, nameBasic: 'Behemoths', nameElite: 'Behemoths', tier: 'oro' }
  ],
  fortaleza: [
    { level: 1, nameBasic: 'Gnolls', nameElite: 'Gnolls', tier: 'bronce' },
    { level: 2, nameBasic: 'Hombres lagarto', nameElite: 'Hombres lagarto', tier: 'bronce' },
    { level: 3, nameBasic: 'Libélulas', nameElite: 'Libélulas', tier: 'bronce' },
    { level: 4, nameBasic: 'Basiliscos', nameElite: 'Basiliscos', tier: 'plata' },
    { level: 5, nameBasic: 'Gorgonas', nameElite: 'Gorgonas', tier: 'plata' },
    { level: 6, nameBasic: 'Wyverns', nameElite: 'Wyverns', tier: 'oro' },
    { level: 7, nameBasic: 'Hidras', nameElite: 'Hidras', tier: 'oro' }
  ],
  conflujo: [
    { level: 1, nameBasic: 'Hadas', nameElite: 'Hadas', tier: 'bronce' },
    { level: 2, nameBasic: 'Elementales de tormenta', nameElite: 'Elementales de tormenta', tier: 'bronce' },
    { level: 3, nameBasic: 'Elementales de hielo', nameElite: 'Elementales de hielo', tier: 'bronce' },
    { level: 4, nameBasic: 'Elementales de energía', nameElite: 'Elementales de energía', tier: 'plata' },
    { level: 5, nameBasic: 'Elementales de magma', nameElite: 'Elementales de magma', tier: 'plata' },
    { level: 6, nameBasic: 'Elementales mágicos', nameElite: 'Elementales mágicos', tier: 'oro' },
    { level: 7, nameBasic: 'Fénix', nameElite: 'Fénix', tier: 'oro' }
  ],
  invocaciones: [
    { level: 2, nameBasic: 'Elementales de aire', nameElite: 'Elementales de aire', tier: 'bronce' },
    { level: 2, nameBasic: 'Elementales de agua', nameElite: 'Elementales de agua', tier: 'bronce' },
    { level: 3, nameBasic: 'Elementales de fuego', nameElite: 'Elementales de fuego', tier: 'bronce' },
    { level: 3, nameBasic: 'Elementales de tierra', nameElite: 'Elementales de tierra', tier: 'bronce' }
  ],
  cala: [
    { level: 1, nameBasic: 'Oceánidos', nameElite: 'Oceánidos', tier: 'bronce' },
    { level: 2, nameBasic: 'Marineros', nameElite: 'Marineros', tier: 'bronce' },
    { level: 3, nameBasic: 'Lobos de mar', nameElite: 'Lobos de mar', tier: 'bronce' },
    { level: 4, nameBasic: 'Ayssids', nameElite: 'Ayssids', tier: 'plata' },
    { level: 5, nameBasic: 'Hechiceras', nameElite: 'Hechiceras', tier: 'plata' },
    { level: 6, nameBasic: 'Nix', nameElite: 'Nix', tier: 'oro' },
    { level: 7, nameBasic: 'Háspidos', nameElite: 'Háspidos', tier: 'oro' }
  ],
  neutrales: [
    { level: 1, nameBasic: 'Paisanos', tier: 'bronce' },
    { level: 1, nameBasic: 'Alabarderos (Neutral)', tier: 'bronce' },
    { level: 1, nameBasic: 'Esqueletos (Neutral)', tier: 'bronce' },
    { level: 1, nameBasic: 'Trogloditas (Neutral)', tier: 'bronce' },
    { level: 1, nameBasic: 'Gremlins (Neutral)', tier: 'bronce' },
    { level: 1, nameBasic: 'Hobbits', tier: 'bronce' },
    { level: 1, nameBasic: 'Hadas (Neutral)', tier: 'bronce' },
    { level: 1, nameBasic: 'Oceánidos (Neutral)', tier: 'bronce' },
    { level: 1, nameBasic: 'Goblins (Neutral)', tier: 'bronce' },
    { level: 2, nameBasic: 'Jabalíes', tier: 'bronce' },
    { level: 2, nameBasic: 'Pícaros', tier: 'bronce' },
    { level: 2, nameBasic: 'Duende', tier: 'bronce' },
    { level: 2, nameBasic: 'Nómadas', tier: 'bronce' },
    { level: 2, nameBasic: 'Arqueros (Neutral)', tier: 'bronce' },
    { level: 2, nameBasic: 'Zombis (Neutral)', tier: 'bronce' },
    { level: 2, nameBasic: 'Arpías (Neutral)', tier: 'bronce' },
    { level: 2, nameBasic: 'Gárgolas (Neutral)', tier: 'bronce' },
    { level: 2, nameBasic: 'Elementales de la tormenta (Neutral)', tier: 'bronce' },
    { level: 2, nameBasic: 'Marineros (Neutral)', tier: 'bronce' },
    { level: 2, nameBasic: 'Incursores lupinos (Neutral)', tier: 'bronce' },
    { level: 2, nameBasic: 'Elemental de aire', tier: 'bronce' },
    { level: 3, nameBasic: 'Trolls', tier: 'bronce' },
    { level: 3, nameBasic: 'Grifos (Neutral)', tier: 'bronce' },
    { level: 3, nameBasic: 'Espectros (Neutral)', tier: 'bronce' },
    { level: 3, nameBasic: 'Ojos Maléficos (Neutral)', tier: 'bronce' },
    { level: 3, nameBasic: 'Gólems de hierro (Neutral)', tier: 'bronce' },
    { level: 3, nameBasic: 'Orcos (Neutral)', tier: 'bronce' },
    { level: 3, nameBasic: 'Elementales de hielo (Neutral)', tier: 'bronce' },
    { level: 3, nameBasic: 'Lobos de mar (Neutral)', tier: 'bronce' },
    { level: 4, nameBasic: 'Cruzados (Neutral)', tier: 'plata' },
    { level: 4, nameBasic: 'Vampiros (Neutral)', tier: 'plata' },
    { level: 4, nameBasic: 'Medusas (Neutral)', tier: 'plata' },
    { level: 4, nameBasic: 'Magos (Neutral)', tier: 'plata' },
    { level: 4, nameBasic: 'Ayssids (Neutral)', tier: 'plata' },
    { level: 4, nameBasic: 'Sátiros', tier: 'plata' },
    { level: 4, nameBasic: 'Ogros (Neutral)', tier: 'plata' },
    { level: 4, nameBasic: 'Elemental de agua', tier: 'plata' },
    { level: 4, nameBasic: 'Tiradores certeros', tier: 'plata' },
    { level: 4, nameBasic: 'Elementales de energía (Neutral)', tier: 'plata' },
    { level: 4, nameBasic: 'Fangarm', tier: 'plata' },
    { level: 4, nameBasic: 'Gólems de acero', tier: 'plata' },
    { level: 4, nameBasic: 'Hechiceras (Neutral)', tier: 'plata' },
    { level: 4, nameBasic: 'Aves de trueno (Neutral)', tier: 'plata' },
    { level: 4, nameBasic: 'Elemental de fuego', tier: 'plata' },
    { level: 5, nameBasic: 'Gólems de oro', tier: 'plata' },
    { level: 5, nameBasic: 'Momias', tier: 'plata' },
    { level: 5, nameBasic: 'Fanáticos (Neutral)', tier: 'plata' },
    { level: 5, nameBasic: 'Liches (Neutral)', tier: 'plata' },
    { level: 5, nameBasic: 'Minotauros (Neutral)', tier: 'plata' },
    { level: 5, nameBasic: 'Genios (Neutral)', tier: 'plata' },
    { level: 5, nameBasic: 'Elementales de magma (Neutral)', tier: 'plata' },
    { level: 6, nameBasic: 'Gólems de diamante', tier: 'oro' },
    { level: 6, nameBasic: 'Campeones (Neutral)', tier: 'oro' },
    { level: 6, nameBasic: 'Caballeros del Terror (Neutral)', tier: 'oro' },
    { level: 6, nameBasic: 'Mantícoras (Neutral)', tier: 'oro' },
    { level: 6, nameBasic: 'Nagas (Neutral)', tier: 'oro' },
    { level: 6, nameBasic: 'Encantadores', tier: 'oro' },
    { level: 6, nameBasic: 'Elemental de tierra', tier: 'oro' },
    { level: 6, nameBasic: 'Elementales mágicos (Neutral)', tier: 'oro' },
    { level: 6, nameBasic: 'Cíclopes (Neutral)', tier: 'oro' },
    { level: 6, nameBasic: 'Nix (Neutral)', tier: 'oro' },
    { level: 7, nameBasic: 'Arcángeles (Neutral)', tier: 'oro' },
    { level: 7, nameBasic: 'Dragones Fantasma (Neutral)', tier: 'oro' },
    { level: 7, nameBasic: 'Dragones Negros (Neutral)', tier: 'oro' },
    { level: 7, nameBasic: 'Háspidos (Neutral)', tier: 'oro' },
    { level: 7, nameBasic: 'Behemoths (Neutral)', tier: 'oro' },
    { level: 8, nameBasic: 'Titanes (Neutral)', tier: 'azul' },
    { level: 8, nameBasic: 'Dragón de Hada', tier: 'azul' },
    { level: 8, nameBasic: 'Dragón de Óxido', tier: 'azul' },
    { level: 8, nameBasic: 'Dragón de Cristal', tier: 'azul' },
    { level: 8, nameBasic: 'Dragón Azul', tier: 'azul' },
    { level: 8, nameBasic: 'Fénix (Neutral)', tier: 'azul' }
  ],
  bancos: [
    { level: 1, nameBasic: 'Esqueletos (Cripta)', tier: 'bronce' },
    { level: 2, nameBasic: 'Zombis (Cripta)', tier: 'bronce' },
    { level: 3, nameBasic: 'Grifos (Conservatorio)', tier: 'bronce' },
    { level: 3, nameBasic: 'Espectros (Cripta)', tier: 'bronce' },
    { level: 3, nameBasic: 'Espectros (Naufragio)', tier: 'bronce' },
    { level: 4, nameBasic: 'Vampiros (Cripta)', tier: 'plata' },
    { level: 4, nameBasic: 'Medusas (Almacén)', tier: 'plata' },
    { level: 6, nameBasic: 'Nagas (Banco)', tier: 'oro' },
    { level: 7, nameBasic: 'Dragón Negro (Utopía)', tier: 'oro' }
  ]
};

export const BASE_COSTS = {
  bronce: {
    basic: { gold: 0, materials: 0, valuable: 0 },
    elite: { gold: 0, materials: 0, valuable: 0 }
  },
  plata: {
    basic: { gold: 0, materials: 0, valuable: 0 },
    elite: { gold: 0, materials: 0, valuable: 0 }
  },
  oro: {
    basic: { gold: 0, materials: 0, valuable: 0 },
    elite: { gold: 0, materials: 0, valuable: 0 }
  },
  azul: {
    basic: { gold: 0, materials: 0, valuable: 0 },
    elite: { gold: 0, materials: 0, valuable: 0 }
  }
};

export const UNIT_DETAILS: {
  [nameBasic: string]: {
    basic: UnitStats;
    elite?: UnitStats;
  }
} = {
  // Castillo
  "Alabarderos": {
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'Melé', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 2, ini: 5, type: 'Melé', abilities: ["Pasivo: Cuando esta unidad sea el objetivo de un ataque, puedes descartar una carta para ignorar el resultado del dado de ataque."], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Tiradores": {
    basic: { atk: 2, def: 0, hp: 2, ini: 4, type: 'a Distancia', abilities: [], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 0, hp: 2, ini: 6, type: 'a Distancia', abilities: ["Al Atacar: Si un objetivo no está adyacente, vuelve a atacarlo."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Grifos": {
    basic: { atk: 2, def: 0, hp: 4, ini: 6, type: 'Voladora', abilities: ["Contraataque: Esta unidad puede llevar a cabo una cantidad ilimitada de contraataques."], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 0, hp: 4, ini: 9, type: 'Voladora', abilities: ["Contraataque: Esta unidad puede llevar a cabo una cantidad ilimitada de contraataques."], customCost: { gold: 6, materials: 0, valuable: 0 } }
  },
  "Cruzados": {
    basic: { atk: 3, def: 2, hp: 4, ini: 5, type: 'Melé', abilities: [], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 2, hp: 4, ini: 6, type: 'Melé', abilities: ["Al Atacar: Puedes volver a tirar los 0 en el dado de ataque de esta unidad."], customCost: { gold: 10, materials: 0, valuable: 0 } }
  },
  "Fanáticos": {
    basic: { atk: 3, def: 1, hp: 5, ini: 5, type: 'a Distancia', abilities: [], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 5, ini: 7, type: 'a Distancia', abilities: ["Pasivo: Ignora la penalización de combate contra unidades adyacentes."], customCost: { gold: 12, materials: 0, valuable: 0 } }
  },
  "Campeones": {
    basic: { atk: 5, def: 2, hp: 7, ini: 7, type: 'Melé', abilities: ["Mapa: Si tu héroe está en una zona con establos, el coste de refuerzo de esta unidad se reduce en 6 Oros."], customCost: { gold: 12, materials: 0, valuable: 0 } },
    elite: { atk: 6, def: 2, hp: 7, ini: 9, type: 'Melé', abilities: ["Al Atacar: Si esta unidad termina su movimiento en un espacio diferente al inicial, puedes volver a tirar un dado de ataque."], customCost: { gold: 20, materials: 0, valuable: 1 } }
  },
  "Arcángeles": {
    basic: { atk: 6, def: 3, hp: 8, ini: 12, type: 'Voladora', abilities: ["Pasivo: Cuando se inicie un combate, roba 1 carta."], customCost: { gold: 20, materials: 0, valuable: 1 } },
    elite: { atk: 7, def: 3, hp: 10, ini: 18, type: 'Voladora', abilities: ["Pasivo: Una vez por combate. Cancela un ataque que fuese a reducir a 0 los Puntos de Salud otra unidad a 0."], customCost: { gold: 30, materials: 0, valuable: 2 } }
  },

  // Necrópolis
  "Esqueletos": {
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'Melé', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 2, ini: 5, type: 'Melé', abilities: [], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Zombis": {
    basic: { atk: 2, def: 1, hp: 3, ini: 3, type: 'Melé', abilities: ["Pasivo: Si el atacante resuelve un +1 en el dado de ataque, obtén +1 Defensa."], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 1, hp: 3, ini: 4, type: 'Melé', abilities: ["Pasivo: Si el atacante resuelve un 0 o un +1 en el dado de ataque, obtén +1 Defensa."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Espectros": {
    basic: { atk: 3, def: 0, hp: 3, ini: 5, type: 'Voladora', abilities: ["Activación: Retira hasta 1 Herida de esta unidad."], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 0, hp: 5, ini: 7, type: 'Voladora', abilities: ["Activación: Retira hasta 1 Herida de esta unidad y después descarta 1 carta al azar de la mano del enemigo."], customCost: { gold: 6, materials: 0, valuable: 0 } }
  },
  "Vampiros": {
    basic: { atk: 4, def: 1, hp: 4, ini: 6, type: 'Voladora', abilities: ["Al Atacar: Ignora el contraataque."], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 1, hp: 4, ini: 9, type: 'Voladora', abilities: ["Al Atacar: Ignora el contraataques. Después retira hasta 2 Heridas a esta unidad."], customCost: { gold: 12, materials: 0, valuable: 0 } },
  },
  "Liches": {
    basic: { atk: 3, def: 1, hp: 5, ini: 6, type: 'a Distancia', abilities: [], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 5, ini: 7, type: 'a Distancia', abilities: ["Al Atacar: Elige una unidad adyacente al objetivo y atácala. Para este ataque tu Ataque es 2."], customCost: { gold: 14, materials: 0, valuable: 0 } }
  },
  "Caballeros del terror": {
    basic: { atk: 5, def: 2, hp: 7, ini: 7, type: 'Melé', abilities: ["Al Atacar: Al contraatacar después de este ataque, el enemigo lanza 2 dados de ataque y resuelve el resultado menor."], customCost: { gold: 12, materials: 0, valuable: 0 } },
    elite: { atk: 6, def: 2, hp: 7, ini: 9, type: 'Melé', abilities: ["Al Atacar: Si resuelves un 0 o un +1 en el dado de ataque, aumenta el valor total del ataque de esta unidad en un +1 adicional."], customCost: { gold: 20, materials: 0, valuable: 1 } }
  },
  "Dragones fantasma": {
    basic: { atk: 6, def: 3, hp: 8, ini: 9, type: 'Voladora', abilities: ["Activación: Descarta la ficha Moral Positiva del enemigo."], customCost: { gold: 19, materials: 0, valuable: 1 } },
    elite: { atk: 7, def: 3, hp: 9, ini: 14, type: 'Voladora', abilities: ["Activación: Descarta la ficha Moral Positiva del enemigo.", "Al Atacar: Gana +1 Ataque."], customCost: { gold: 32, materials: 0, valuable: 2 } }
  },

  // Mazmorra
  "Trogloditas": {
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'Melé', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 2, ini: 5, type: 'Melé', abilities: ["Pasivo: Esta unidad ignora el efecto Parálisis."], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Arpías": {
    basic: { atk: 2, def: 0, hp: 3, ini: 6, type: 'Voladora', abilities: ["Al Atacar: Después del contraataque del enemigo, esta unidad puede volver al espacio desde el que se ha movido para atacar."], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 0, hp: 3, ini: 9, type: 'Voladora', abilities: ["Al Atacar: Ignora el contraataque. Esta unidad puede volver al espacio desde el que se ha movido para atacar."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Ojos maléficos": {
    basic: { atk: 3, def: 0, hp: 3, ini: 5, type: 'a Distancia', abilities: [], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 3, ini: 7, type: 'a Distancia', abilities: ["Pasivo: Ignora la penalización de combate contra unidades adyacentes."], customCost: { gold: 6, materials: 0, valuable: 0 } }
  },
  "Medusas": {
    basic: { atk: 3, def: 1, hp: 4, ini: 5, type: 'a Distancia', abilities: ["Contraataque: Después del contraataque, lanza un dado de ataque; si sacas 0, el objetivo queda Parálizado."], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 4, ini: 6, type: 'a Distancia', abilities: ["Pasivo: Ignora la penalización de combate contra unidades adyacentes.", "Contraataque: El objetivo queda Parálizado."], customCost: { gold: 12, materials: 0, valuable: 0 } }
  },
  "Minotauros": {
    basic: { atk: 4, def: 2, hp: 4, ini: 6, type: 'Melé', abilities: ["Al Atacar: Si resuelves un -1 en el dado de ataque, roba una carta."], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 2, hp: 4, ini: 8, type: 'Melé', abilities: ["Al Atacar: Si resuelves un -1 en el dado de ataque, roba una carta."], customCost: { gold: 14, materials: 0, valuable: 0 } }
  },
  "Mantícoras": {
    basic: { atk: 5, def: 1, hp: 6, ini: 7, type: 'Voladora', abilities: [], customCost: { gold: 10, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 1, hp: 6, ini: 11, type: 'Voladora', abilities: ["Al Atacar: Durante este ataque, ignora el valor de Defensa de la carta de la unidad objetivo."], customCost: { gold: 18, materials: 0, valuable: 1 } }
  },
  "Mantícoras (Alternativa)": {
    basic: { atk: 4, def: 1, hp: 7, ini: 8, type: 'Voladora', abilities: ["Al Atacar: Coloca 1 cubo de facción sobre el objetivo. Cuando se active, retira el cubo para infligir 1 Herida."], customCost: { gold: 12, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 2, hp: 7, ini: 11, type: 'Voladora', abilities: ["Pasivo: Después de cada ataque, coloca 1 cubo de facción sobre el objetivo. Cuando se active, retira el cubo para infligir 1 Herida."], customCost: { gold: 18, materials: 0, valuable: 1 } }
  },
  "Dragones negros": {
    basic: { atk: 6, def: 3, hp: 8, ini: 11, type: 'Voladora', abilities: ["Pasivo: Reduce el Daño de Hechizo recibido por esta unidad en 2 (hasta un mínimo de 0)."], customCost: { gold: 19, materials: 0, valuable: 1 } },
    elite: { atk: 8, def: 3, hp: 8, ini: 15, type: 'Voladora', abilities: ["Pasivo: Ignora cualquier efecto de Hechizo y Daño de especialidad."], customCost: { gold: 33, materials: 0, valuable: 2 } }
  },

  // Murallas
  "Centauros": {
    basic: { atk: 2, def: 0, hp: 3, ini: 6, type: 'Melé', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 0, hp: 3, ini: 8, type: 'Melé', abilities: [], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Enanos": {
    basic: { atk: 2, def: 1, hp: 3, ini: 3, type: 'Melé', abilities: ["Pasivo: Si esta unidad es objetivo de cualquier carta de hechizo o especialidad, lanza 1 dado de ataque.\nSi sacas un +1, ignora el efecto de la carta."], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 3, ini: 5, type: 'Melé', abilities: ["Pasivo: Si esta unidad es objetivo de cualquier carta de hechizo o especialidad, lanza 1 dado de ataque.\nSi sacas un +1, ignora el efecto de la carta."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Elfos": {
    basic: { atk: 2, def: 1, hp: 3, ini: 6, type: 'a Distancia', abilities: [], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 3, ini: 7, type: 'a Distancia', abilities: ["Al Atacar: Si una unidad objetivo no está adyacente, vuélvela a atacar si sacas un -1 o un 0."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Pegasos": {
    basic: { atk: 3, def: 0, hp: 5, ini: 8, type: 'Voladora', abilities: [], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 0, hp: 6, ini: 12, type: 'Voladora', abilities: ["Pasivo: El Poder de todos los hechizos enemigos se reduce en 1 (hasta un mínimo de 0)."], customCost: { gold: 10, materials: 0, valuable: 0 } }
  },
  "Dendroides": {
    basic: { atk: 4, def: 2, hp: 5, ini: 3, type: 'Melé', abilities: [], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 2, hp: 6, ini: 4, type: 'Melé', abilities: ["Pasivo: Las unidades enemigas que empiecen su activación adyacentes a esta unidad no pueden moverse."], customCost: { gold: 15, materials: 0, valuable: 0 } }
  },
  "Unicornios": {
    basic: { atk: 5, def: 1, hp: 8, ini: 7, type: 'Melé', abilities: ["Pasivo: Reduce el Daño de Hechizos sufridos por esta unidad en 1 (hasta un mínimo de 0)."], customCost: { gold: 11, materials: 0, valuable: 0 } },
    elite: { atk: 6, def: 1, hp: 8, ini: 9, type: 'Melé', abilities: ["Pasivo: Reduce el Daño de Hechizos sufridos por esta unidad y unidades adyacentes aliadas en 1 (hasta un mínimo de 0)."], customCost: { gold: 18, materials: 0, valuable: 1 } }
  },
  "Dragones dorados": {
    basic: { atk: 5, def: 3, hp: 9, ini: 10, type: 'Voladora', abilities: ["Al Atacar: Ataca a 2 espacios en fila. El primer ataque se resuelve de forma normal y el segundo con 2 Ataque."], customCost: { gold: 22, materials: 0, valuable: 1 } },
    elite: { atk: 6, def: 3, hp: 10, ini: 16, type: 'Voladora', abilities: ["Al Atacar: Ataca a 2 espacios en fila. El primer ataque se resuelve normalmente y el segundo tiene 3 Ataque."], customCost: { gold: 30, materials: 0, valuable: 2 } }
  },

  // Torre
  "Gremlins": {
    basic: { atk: 2, def: 0, hp: 2, ini: 4, type: 'Melé', abilities: [], customCost: { gold: 0, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 0, hp: 2, ini: 5, type: 'a Distancia', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } }
  },
  "Gárgolas": {
    basic: { atk: 2, def: 1, hp: 3, ini: 6, type: 'Voladora', abilities: ["Pasiva: Esta unidad ignora cualquier efecto Contínuo de hechizos."], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 3, ini: 9, type: 'Voladora', abilities: ["Pasiva: Esta unidad ignora cualquier efecto Contínuo de hechizos."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Gólems de hierro": {
    basic: { atk: 3, def: 1, hp: 3, ini: 4, type: 'Melé', abilities: ["Pasiva: Esta unidad reduce cualquier Daño que reciba de hechizos en 1, hasta un mínimo de 0."], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 2, hp: 3, ini: 5, type: 'Melé', abilities: ["Pasiva: Esta unidad reduce cualquier Daño que reciba de hechizos en 2, hasta un mínimo de 0."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Magos": {
    basic: { atk: 3, def: 0, hp: 4, ini: 5, type: 'a Distancia', abilities: ["Al Atacar: Ignora penalizaciones de combate."], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 4, ini: 6, type: 'a Distancia', abilities: ["Al Atacar: Ignora penalizaciones de combate.", "Activación: Añade +1 Poder al primer hechizo que lances esta ronda."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Genios": {
    basic: { atk: 3, def: 1, hp: 6, ini: 7, type: 'Voladora', abilities: ["Alternativa: Descarta 3 cartas de tu mazo y devuelve a tu mano un Hechizo descartado de esta forma."], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 6, ini: 8, type: 'Voladora', abilities: ["Al Atacar: Descarta hasta 3 cartas de tu mazo y devuelve a tu mano un Hechizo descartado de esta forma."], customCost: { gold: 12, materials: 0, valuable: 0 } }
  },
  "Nagas": {
    basic: { atk: 5, def: 2, hp: 7, ini: 6, type: 'Melé', abilities: ["Al Atacar: Ignora contraataques."], customCost: { gold: 13, materials: 0, valuable: 0 } },
    elite: { atk: 6, def: 2, hp: 7, ini: 8, type: 'Melé', abilities: ["Al Atacar: Ignora contraataques."], customCost: { gold: 18, materials: 0, valuable: 1 } }
  },
  "Titanes": {
    basic: { atk: 6, def: 3, hp: 8, ini: 7, type: 'Melé', abilities: ["Pasiva: Esta unidad ignora cualquier efecto Contínuo."], customCost: { gold: 18, materials: 0, valuable: 1 } },
    elite: { atk: 6, def: 3, hp: 8, ini: 11, type: 'a Distancia', abilities: ["Pasiva: Esta unidad cualquier efecto Continuo y los penalizadores de combate aplicados a unidades adyacentes."], customCost: { gold: 32, materials: 0, valuable: 2 } }
  },

  // Inferno
  "Familiares": {
    basic: { atk: 2, def: 1, hp: 2, ini: 5, type: 'Melé', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 2, ini: 7, type: 'Melé', abilities: ["Pasivo: Cuando un enemigo lanza un Hechizo de su mano, debe descartar 1 carta de la mano."], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Magogs": {
    basic: { atk: 2, def: 0, hp: 2, ini: 4, type: 'a Distancia', abilities: [], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 0, hp: 3, ini: 6, type: 'a Distancia', abilities: ["Al Atacar: Cuando los magogs atacan a un objetivo que no está adyacente a ellos, hacen 1 Herida a una unidad adyacente al objetivo."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Cerberos": {
    basic: { atk: 3, def: 0, hp: 4, ini: 7, type: 'Melé', abilities: [], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 5, ini: 8, type: 'Melé', abilities: ["Al Atacar: Ignora contraataques. Además, hace 1 Herida a otra unidad enemiga adyacente a los cerberos."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Demonios": {
    basic: { atk: 3, def: 2, hp: 4, ini: 5, type: 'Melé', abilities: [], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 2, hp: 5, ini: 6, type: 'Melé', abilities: [], customCost: { gold: 8, materials: 0, valuable: 0 } }
  },
  "Señores del abismo": {
    basic: { atk: 4, def: 1, hp: 6, ini: 6, type: 'Melé', abilities: [], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 1, hp: 6, ini: 7, type: 'Melé', abilities: ["Alternativo: Una vez por cada combate en el que hayas perdido una unidad. Invoca o refuerza <<unos pocos>> demonios (en el tablero)."], customCost: { gold: 15, materials: 0, valuable: 0 } }
  },
  "Efrits": {
    basic: { atk: 5, def: 1, hp: 7, ini: 9, type: 'Voladora', abilities: ["Pasivo: Ignora el Daño del hechizo Flecha mágica."], customCost: { gold: 12, materials: 0, valuable: 0 } },
    elite: { atk: 6, def: 1, hp: 7, ini: 13, type: 'Voladora', abilities: ["Pasivo: Ignora cualquier Daño de la Flecha mágica y hechizos de la escuela de fuego."], customCost: { gold: 18, materials: 0, valuable: 1 } }
  },
  "Archidiablos": {
    basic: { atk: 6, def: 3, hp: 8, ini: 11, type: 'Voladora', abilities: ["Al Atacar: Ignora contraataques."], customCost: { gold: 22, materials: 0, valuable: 1 } },
    elite: { atk: 7, def: 3, hp: 9, ini: 15, type: 'Voladora', abilities: ["Al Atacar: Ignora contraataques.","Pasivo: Al moverse, los archidiablos se pueden mover a cualquier espacio vacío."], customCost: { gold: 30, materials: 0, valuable: 2 } }
  },

  // Bastión
  "Goblins": {
    basic: { atk: 1, def: 0, hp: 4, ini: 6, type: 'Melé', abilities: [], customCost: { gold: 1, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 0, hp: 4, ini: 7, type: 'Melé', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } }
  },
  "Incursores lupinos": {
    basic: { atk: 2, def: 0, hp: 3, ini: 7, type: 'Melé', abilities: [], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 0, hp: 4, ini: 8, type: 'Melé', abilities: ["Al Atacar: Ataca este objetivo otra vez. El segundo ataque se produce después de que el objetivo contraataque (si es posible)."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Orcos": {
    basic: { atk: 2, def: 1, hp: 4, ini: 4, type: 'a Distancia', abilities: [], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 5, ini: 5, type: 'a Distancia', abilities: [], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Ogros": {
    basic: { atk: 3, def: 2, hp: 4, ini: 4, type: 'Melé', abilities: ["Alternativo: Coloca una ficha +1 Ataque en la unidad Melé o Voladora que elijas durante 2 rondas de combate."], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 2, hp: 6, ini: 5, type: 'Melé', abilities: ["Alternativo: Coloca una ficha +2 Ataque en la unidad Melé o Voladora que elijas durante 2 rondas de combate."], customCost: { gold: 8, materials: 0, valuable: 0 } }
  },
  "Aves de trueno": {
    basic: { atk: 4, def: 1, hp: 5, ini: 9, type: 'Voladora', abilities: [], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 6, ini: 11, type: 'Voladora', abilities: ["Pasivo: Justo después del ataque de esta unidad y antes de un contraataque, tira 1 dado de ataque; con un <<0> o <<+1>>, inflige 1 Herida al objetivo."], customCost: { gold: 14, materials: 0, valuable: 0 } }
  },
  "Cíclopes": {
    basic: { atk: 5, def: 0, hp: 6, ini: 6, type: 'a Distancia', abilities: ["Alternativo: Esta unidad puede destruir un muro o la puerta."], customCost: { gold: 13, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 1, hp: 7, ini: 8, type: 'a Distancia', abilities: ["Alternativo: Esta unidad puede destruir un muro, puerta o torre de arqueros."], customCost: { gold: 17, materials: 0, valuable: 1 } },
  },
  "Behemoths": {
    basic: { atk: 6, def: 2, hp: 9, ini: 6, type: 'Melé', abilities: ["Al Atacar: Disminuye la Defensa del objetivo en 1 (hasta un mínimo de 0)."], customCost: { gold: 19, materials: 0, valuable: 1 } },
    elite: { atk: 7, def: 2, hp: 10, ini: 9, type: 'Melé', abilities: ["Al Atacar: Disminuye la Defensa del objetivo en 2 (hasta un mínimo de 0). Después del ataque, pon 1 ficha de corrosión en el objetivo."], customCost: { gold: 29, materials: 0, valuable: 2 } },
  },

  // Fortaleza
  "Gnolls": {
    basic: { atk: 2, def: 1, hp: 3, ini: 4, type: 'Melé', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 1, hp: 4, ini: 5, type: 'Melé', abilities: [], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Hombres lagarto": {
    basic: { atk: 2, def: 0, hp: 3, ini: 4, type: 'a Distancia', abilities: [], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 0, hp: 3, ini: 5, type: 'a Distancia', abilities: [], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Libélulas": {
    basic: { atk: 3, def: 0, hp: 3, ini: 8, type: 'Voladora', abilities: ["Al Atacar: Retira todos los efectos Continuos que el enemigo ha jugado sobre el objetivo."], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 3, ini: 12, type: 'Voladora', abilities: ["Al Atacar: Retira todos los efectos Continuos que el enemigo ha jugado sobre el objetivo. Si el objetivo contraataca, sufre -1 Ataque."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Basiliscos": {
    basic: { atk: 4, def: 1, hp: 4, ini: 5, type: 'Melé', abilities: ["Al Atacar: Con un resultado -1 en el dado de ataque la unidad atacada recibe una ficha Parálisis."], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 5, ini: 7, type: 'Melé', abilities: ["Al Atacar: Con un resultado -1 en el dado de ataque la unidad atacada recibe una ficha Parálisis."], customCost: { gold: 9, materials: 0, valuable: 0 } }
  },
  "Gorgonas": {
    basic: { atk: 4, def: 2, hp: 5, ini: 5, type: 'Melé', abilities: [], customCost: { gold: 9, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 2, hp: 5, ini: 6, type: 'Melé', abilities: ["Al Atacar: Después del ataque, lanza 2 dados de ataque; si sacas un doble 0, reduce los Puntos de Salud de la unidad objetivo a 0."], customCost: { gold: 14, materials: 0, valuable: 0 } }
  },
  "Wyverns": {
    basic: { atk: 5, def: 1, hp: 8, ini: 7, type: 'Voladora', abilities: ["Al Atacar: Coloca 1 cubo de facción sobre el objetivo. Al comienzo de su activación retíralo para infligirle 1 Herida."], customCost: { gold: 12, materials: 0, valuable: 0 } },
    elite: { atk: 6, def: 1, hp: 8, ini: 11, type: 'Voladora', abilities: ["Al Atacar: Coloca 2 cubos de facción sobre el objetivo. Al comienzo de cada activación, retira 1 para infligirle 1 Herida."], customCost: { gold: 18, materials: 0, valuable: 1 } }
  },
  "Hidras": {
    basic: { atk: 6, def: 3, hp: 8, ini: 5, type: 'Melé', abilities: ["Al Atacar: Ignora el contraataque."], customCost: { gold: 20, materials: 0, valuable: 1 } },
    elite: { atk: 7, def: 3, hp: 10, ini: 7, type: 'Melé', abilities: ["Al Atacar: Ignora el contraataque. Esta unidad ataca a hasta 2 unidades enemigas adyacentes."], customCost: { gold: 28, materials: 0, valuable: 2 } }
  },

  // Conflujo
  "Hadas": {
    basic: { atk: 2, def: 0, hp: 2, ini: 7, type: 'Melé', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 0, hp: 4, ini: 9, type: 'Melé', abilities: ["Al Atacar: Ignora los contraataques."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Elementales de la tormenta": {
    basic: { atk: 2, def: 0, hp: 3, ini: 7, type: 'a Distancia', abilities: [], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 0, hp: 5, ini: 8, type: 'a Distancia', abilities: ["Al Atacar: Añade +1 Potencia al primer hechizo de magia de aire que lances durante esta activación."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Elementales de hielo": {
    basic: { atk: 2, def: 1, hp: 4, ini: 5, type: 'a Distancia', abilities: [], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 5, ini: 6, type: 'a Distancia', abilities: ["Activación: Añade +1 Potencia al primer hechizo de magia de agua que lances durante esta acticación"], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Elementales de energía": {
    basic: { atk: 3, def: 1, hp: 5, ini: 5, type: 'Melé', abilities: [], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 5, ini: 8, type: 'Melé', abilities: ["Activación: +1 Potencia al primer hechizo de magia de fuego quwle"], customCost: { gold: 8, materials: 0, valuable: 0 } }
  },
  "Elementales de magma": {
    basic: { atk: 4, def: 2, hp: 5, ini: 4, type: 'Melé', abilities: [], customCost: { gold: 9, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 2, hp: 5, ini: 6, type: 'Melé', abilities: ["Activación: Añade +1 Potencia al primer hechizo de magia tierra que lances durante esta activación."], customCost: { gold: 13, materials: 0, valuable: 0 } }
  },
  "Elementales mágicos": {
    basic: { atk: 4, def: 2, hp: 7, ini: 7, type: 'Melé', abilities: ["Al Atacar: Ignora los contraataques.\nAtaca a todas las unidades adyacentes."], customCost: { gold: 13, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 2, hp: 7, ini: 9, type: 'Melé', abilities: ["Al Atacar: Ignora los contraataques.\nAtaca todas las unidades enemigas adyacentes.\nPasivo: Ignora cualquier efecto de Hechizo y Daño de especialidad."], customCost: { gold: 19, materials: 0, valuable: 1 } },
  },
  "Fénix": {
    basic: { atk: 6, def: 2, hp: 7, ini: 12, type: 'Voladora', abilities: ["Pasivo: Una vez por combate. Cuando los PS de esta unidad se reduzcan a 0, ponlos en 1. Pasivo: Innmunes a los Hechizos de magia de fuego."], customCost: { gold: 21, materials: 0, valuable: 1 } },
    elite: { atk: 7, def: 2, hp: 8, ini: 18, type: 'Voladora', abilities: ["Al Atacar: Ataca 2 espacios en una línea. El primer ataque se resuelve normalmente y el segundo tiene 2 Ataque.\nPasivo: Inmunes a los Hechizos de magia de fuego."], customCost: { gold: 29, materials: 0, valuable: 2 } }
  },

  // Invocaciones (Summons)
  "Elementales de aire": {
    basic: { atk: 2, def: 0, hp: 4, ini: 8, type: 'Melé', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de aire.\nEsta unidad inflige daño elemental."] },
    elite: { atk: 3, def: 0, hp: 4, ini: 8, type: 'Melé', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de aire.\nEsta unidad inflige daño elemental."] }
  },
  "Elementales de agua": {
    basic: { atk: 2, def: 0, hp: 5, ini: 6, type: 'Melé', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de agua.\nEsta unidad inflige daño elemental."] },
    elite: { atk: 3, def: 0, hp: 5, ini: 6, type: 'Melé', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de agua.\nEsta unidad inflige daño elemental."] }
  },
  "Elementales de fuego": {
    basic: { atk: 2, def: 1, hp: 4, ini: 5, type: 'Melé', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de fuego.\nEsta unidad inflige daño elemental."] },
    elite: { atk: 3, def: 1, hp: 4, ini: 5, type: 'Melé', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de fuego.\nEsta unidad inflige daño elemental."] }
  },
  "Elementales de tierra": {
    basic: { atk: 2, def: 2, hp: 2, ini: 5, type: 'Melé', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de tierra.\nEsta unidad inflige daño elemental."] },
    elite: { atk: 3, def: 2, hp: 2, ini: 5, type: 'Melé', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de tierra.\nEsta unidad inflige daño elemental."] }
  },

  // Cala
  "Oceánidos": {
    basic: { atk: 2, def: 0, hp: 3, ini: 6, type: 'Voladora', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 0, hp: 3, ini: 8, type: 'Voladora', abilities: ["Pasivo: Ignora todos los efectos y Daño de un Hechizo de magia de agua."], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Marineros": {
    basic: { atk: 2, def: 1, hp: 3, ini: 5, type: 'Melé', abilities: [], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 1, hp: 5, ini: 6, type: 'Melé', abilities: ["Pasivo: Una vez por combate, cuando esta unidad retira una unidad del combate, gana 2 Oros."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Lobos de mar": {
    basic: { atk: 2, def: 0, hp: 4, ini: 6, type: 'a Distancia', abilities: ["Pasivo: Ignora la penalización de combate contra unidades adyacentes."], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 0, hp: 5, ini: 8, type: 'a Distancia', abilities: ["Al Atacar: Ignora los contraataques.\nPasivo: Ignora la penalización de combate contra unidades adyanteces."], customCost: { gold: 6, materials: 0, valuable: 0 } }
  },
  "Ayssids": {
    basic: { atk: 3, def: 1, hp: 5, ini: 9, type: 'Voladora', abilities: [], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 6, ini: 11, type: 'Voladora', abilities: ["Al Atacar: Si los Puntos de salud del objetivo se reducen a 0, después de resolver el Contraataque (si corresponde), los Ayssids pueden atacar a otra unidad adyacente."], customCost: { gold: 10, materials: 0, valuable: 0 } }
  },
  "Hechiceras": {
    basic: { atk: 3, def: 1, hp: 5, ini: 6, type: 'a Distancia', abilities: ["Alternativo: Coloca una ficha de debilidad <<-2>> sobre cualquier unidad durante 2 rondas de combate."], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 6, ini: 7, type: 'a Distancia', abilities: ["Al Atacar: Después del ataque, coloca una ficha de Debilidad <<-1>> sobre el objetivo durante 2 rondas de combate."], customCost: { gold: 13, materials: 0, valuable: 0 } }
  },
  "Nix": {
    basic: { atk: 5, def: 2, hp: 7, ini: 6, type: 'Melé', abilities: [], customCost: { gold: 12, materials: 0, valuable: 0 } },
    elite: { atk: 6, def: 2, hp: 8, ini: 7, type: 'Melé', abilities: ["Pasivo: Esta unidad no puede recibir más de 4 Heridas de un solo ataque."], customCost: { gold: 20, materials: 0, valuable: 1 } }
  },
  "Háspidos": {
    basic: { atk: 5, def: 3, hp: 8, ini: 9, type: 'Melé', abilities: ["Al Atacar: +2 Ataque si, durante este combate, esta unidad se giró del lado de manada al lado de unos pocos."], customCost: { gold: 18, materials: 0, valuable: 1 } },
    elite: { atk: 7, def: 3, hp: 8, ini: 12, type: 'Melé', abilities: ["Al Atacar: Coloca 2 cubos de facción sobre el objetivo. Al comienzo de cada una de sus activaciones, retira 1 de ellos para inflgir 1 Herida."], customCost: { gold: 30, materials: 0, valuable: 2 } }
  },

  // Neutrales
  "Paisanos": {
    basic: { atk: 1, def: 0, hp: 1, ini: 2, type: 'Melé', abilities: [] }
  },
  "Pícaros": {
    basic: { atk: 1, def: 0, hp: 1, ini: 4, type: 'Melé', abilities: ["Sin Represalia."] }
  },
  "Alabarderos (Neutral)": {
    basic: { atk: 2, def: 0, hp: 4, ini: 4, type: 'Melé', abilities: ["Pasiva: Trata a las unidades aliadas adyacentes como si tuviesen una ficha de Defensa."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Esqueletos (Neutral)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 4, type: 'Melé', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Cuando son derrotados, si controlas un Héroe Nigromante, inmediatamente Refuerzas 1 de tus unidades Bronce."], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Trogloditas (Neutral)": {
    basic: { atk: 2, def: 1, hp: 3, ini: 6, type: 'Melé', abilities: ["Pasiva: Esta unidad ignora los efectos de Parálisis."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Gremlins (Neutral)": {
    basic: { atk: 2, def: 0, hp: 2, ini: 5, type: 'a Distancia', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } }
  }, 
  "Hobbits": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'a Distancia', abilities: [] }
  },
  "Hadas (Neutral)": {
    basic: { atk: 2, def: 0, hp: 2, ini: 7, type: 'Voladora', abilities: ["Al Atacar: Ignora el contraataque."], customCost: { gold: 2, materials: 0, valuable: 0 } }
  },
  "Oceánidos (Neutral)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 6, type: 'Voladora', abilities: ["Pasivo: Ignora todos los efectos y Daño de un Hechizo de magia de agua."], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Duende": {
    basic: { atk: 2, def: 0, hp: 3, ini: 5, type: 'Melé', abilities: ["Al Atacar: Lanza 2 dados de ataque y resuelve el resultado mayor."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Goblins (Neutral)": {
    basic: { atk: 1, def: 0, hp: 4, ini: 6, type: 'Melé', abilities: [], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Nómadas": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'Melé', abilities: ["Veloz: Ignora ciertas restricciones."] }
  },
  "Arqueros (Neutral)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 5, type: 'a Distancia', abilities: ["Al Atacar: Si el objetivo no está adyacente, ataca a ese objetivo de nuevo."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Zombis (Neutral)": {
    basic: { atk: 2, def: 0, hp: 4, ini: 3, type: 'Melé', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Si el atacante resuelve un '0' o '+1' en su dado de Ataque, gana +1 en Defensa."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Arpías (Neutral)": {
    basic: { atk: 2, def: 0, hp: 4, ini: 8, type: 'Voladora', abilities: ["Al Atacar: Ignora el contraataque enemigo. Esta unidad puede regresar a la posición desde la que se movió para atacar."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Gárgolas (Neutral)": {
    basic: { atk: 2, def: 1, hp: 3, ini: 9, type: 'Voladora', abilities: ["Pasiva: Esta unidad ignora los efectos de Parálisis."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Elementales de la tormenta (Neutral)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 7, type: 'a Distancia', abilities: ["Pasivo: Inmune a la Flecha mágica y a los Hechizos de magia de aire. Esta unidad inflige daño elemental."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Marineros (Neutral)": {
    basic: { atk: 2, def: 1, hp: 3, ini: 5, type: 'Melé', abilities: [], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Incursores lupinos (Neutral)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 7, type: 'Melé', abilities: ["Al Atacar: Ataca este objetivo otra vez. El segundo ataque se produce después de que el objetivo contraataque (si es posible)."], customCost: { gold: 6, materials: 0, valuable: 0 } }
  },
  "Elemental de aire": {
    basic: { atk: 2, def: 0, hp: 3, ini: 7, type: 'Melé', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de aire. Esta unidad inflige daño elemental."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Trolls": {
    basic: { atk: 1, def: 1, hp: 1, ini: 3, type: 'Melé', abilities: ["Carga: +1 de Ataque tras avanzar."] }
  },
  "Gólems de Acero": {
    basic: { atk: 1, def: 1, hp: 1, ini: 3, type: 'Melé', abilities: ["Carga: +1 de Ataque tras avanzar."] }
  },
  "Jabalíes": {
    basic: { atk: 1, def: 1, hp: 1, ini: 3, type: 'Melé', abilities: ["Carga: +1 de Ataque tras avanzar."] }
  },
  "Grifos (Neutral)": {
    basic: { atk: 3, def: 0, hp: 4, ini: 8, type: 'Voladora', abilities: ["Contraataque: Esta unidad puede realizar un número ilimitado de contraataques."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Espectros (Neutral)": {
    basic: { atk: 2, def: 0, hp: 4, ini: 7, type: 'Voladora', abilities: ["No-muerto: Inmune a los efectos de moral.", "Activación: Retira hasta 2 Heridas de esta unidad."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Ojos Maléficos (Neutral)": {
    basic: { atk: 2, def: 1, hp: 3, ini: 6, type: 'a Distancia', abilities: ["Pasiva: Ignora la penalización de combate contra unidades adyacentes."], customCost: { gold: 6, materials: 0, valuable: 0 } }
  },
  "Gólems de hierro (Neutral)": {
    basic: { atk: 2, def: 1, hp: 4, ini: 3, type: 'Melé', abilities: ["Pasiva: Esta unidad reduce cualquier daño provocado por hechizos en 2, hasta un mínimo de 0."], customCost: { gold: 6, materials: 0, valuable: 0 } }
  },
  "Orcos (Neutral)": {
    basic: { atk: 2, def: 1, hp: 4, ini: 4, type: 'a Distancia', abilities: [], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Elementales de hielo (Neutral)": {
    basic: { atk: 2, def: 1, hp: 3, ini: 5, type: 'a Distancia', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de agua. Esta unidad inflige daño elemental."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Lobos de mar (Neutral)": {
    basic: { atk: 2, def: 0, hp: 4, ini: 6, type: 'a Distancia', abilities: ["Pasivo: Ignora la penalización de combate contra unidades adyacentes."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Cruzados (Neutral)": {
    basic: { atk: 3, def: 2, hp: 4, ini: 5, type: 'Melé', abilities: ["Pasiva: Durante cualquier ataque, tira 2 dados de Ataque y escoge el resultado más alto."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Vampiros (Neutral)": {
    basic: { atk: 3, def: 0, hp: 5, ini: 8, type: 'Voladora', abilities: ["No-muerto: Inmune a los efectos de moral.", "Al Atacar: Ignora los contraataques. Luego elimina hasta 2 Heridas de esta unidad."], customCost: { gold: 9, materials: 0, valuable: 0 } }
  },
  "Medusas (Neutral)": {
    basic: { atk: 3, def: 1, hp: 4, ini: 6, type: 'a Distancia', abilities: ["Pasiva: Ignora la penalización de combate contra unidades adyacentes.", "Contraataque: El objetivo sufre Parálisis."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Archimagos (Neutral)": {
    basic: { atk: 3, def: 0, hp: 5, ini: 6, type: 'a Distancia', abilities: ["Al Atacar: Ignora las penalizaciones de combate. Después del ataque, el enemigo descarta una carta al azar o una carta con Potencia."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Ayssids (Neutral)": {
    basic: { atk: 3, def: 1, hp: 5, ini: 9, type: 'Voladora', abilities: ["Al Atacar: Si los puntos de Salud del objetivo se reducen a 0, después de resolver el Contraataque (si corresponde), los Ayssids pueden atacar a otra unidad adyacente."], customCost: { gold: 9, materials: 0, valuable: 0 } }
  },
  "Sátiros": {
    basic: { atk: 3, def: 0, hp: 5, ini: 7, type: 'Melé', abilities: ["Mapa: Una vez por turno. Tira 1 dado de ataque. Con +1, gana Moral positiva."], customCost: { gold: 10, materials: 0, valuable: 0 } }
  },
  "Ogros (Neutral)": {
    basic: { atk: 3, def: 2, hp: 4, ini: 4, type: 'Melé', abilities: ["Alternativo: Coloca una ficha +2 Ataque en la unidad Melé o Voladora que elijas durante 2 rondas de combate."], customCost: { gold: 10, materials: 0, valuable: 0 } }
  },
  "Elemental de agua": {
    basic: { atk: 2, def: 1, hp: 4, ini: 5, type: 'Melé', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de agua. Esta unidad inflige daño elemental."], customCost: { gold: 10, materials: 0, valuable: 0 } }
  },
  "Tiradores certeros": {
    basic: { atk: 3, def: 0, hp: 6, ini: 9, type: 'a Distancia', abilities: ["Al Atacar: Ignora las penalizaciones de combate."], customCost: { gold: 10, materials: 0, valuable: 0 } }
  },
  "Elementales de energía (Neutral)": {
    basic: { atk: 3, def: 1, hp: 4, ini: 5, type: 'Voladora', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de fuego. Esta unidad inflige daño elemental."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Fangarm": {
    basic: { atk: 3, def: 1, hp: 5, ini: 8, type: 'Melé', abilities: ["Pasivo: Ignora todos los efectos de Hechizo y de especialidad distintos de Daño."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Gólems de acero": {
    basic: { atk: 3, def: 2, hp: 3, ini: 5, type: 'Melé', abilities: ["Pasivo: Reduce el Daño sufrido por esta unidad de Hechizo o especialidad en 2, hasta un mínimo de 0."], customCost: { gold: 12, materials: 0, valuable: 0 } }
  },
  "Hechiceras (Neutral)": {
    basic: { atk: 3, def: 1, hp: 5, ini: 6, type: 'a Distancia', abilities: ["Al Atacar: Después del ataque, coloca una ficha de Debilidad <<-1>> sobre el objetivo durante 2 rondas de combate."], customCost: { gold: 13, materials: 0, valuable: 0 } }
  },
  "Aves de trueno (Neutral)": {
    basic: { atk: 3, def: 0, hp: 6, ini: 9, type: 'Voladora', abilities: ["Pasivo: Justo después del ataque de esta unidad y antes de un contraataque, tira 1 daod de ataque; con un <<0>> o <<+1>>, inflige 1 Herida al objetivo."], customCost: { gold: 13, materials: 0, valuable: 0 } }
  },
  "Elemental de fuego": {
    basic: { atk: 3, def: 1, hp: 3, ini: 6, type: 'Melé', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de fuego. Esta unidad inflige daño elemental."], customCost: { gold: 13, materials: 0, valuable: 0 } }
  },
  "Gólems de oro": {
    basic: { atk: 2, def: 2, hp: 2, ini: 3, type: 'Melé', abilities: ["Constructo.", "Resistencia de Oro: Reduce el daño de hechizos enemigos en 2."] }
  },
  "Momias": {
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'Melé', abilities: ["Infección: Enemigo herido se convierte en Licántropo si es derrotado."] }
  },
  "Fanáticos (Neutral)": {
    basic: { atk: 3, def: 0, hp: 5, ini: 5, type: 'a Distancia', abilities: ["Pasiva: No sufre penalizaciones en combates cuerpo a cuerpo."], customCost: { gold: 12, materials: 0, valuable: 0 } }
  },
  "Liches (Neutral)": {
    basic: { atk: 3, def: 0, hp: 6, ini: 7, type: 'a Distancia', abilities: ["No-muerto: Inmune a los efectos de moral.", "Al Atacar: Elige una unidad adyacente al objetivo y atácala con 2 de Ataque."], customCost: { gold: 12, materials: 0, valuable: 0 } }
  },
  "Minotauros (Neutral)": {
    basic: { atk: 3, def: 2, hp: 4, ini: 7, type: 'Melé', abilities: ["Al Atacar: Si resuelves un '-1' en el dado de Ataque, roba una carta de tu mazo."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Genios (Neutral)": {
    basic: { atk: 3, def: 1, hp: 4, ini: 9, type: 'Voladora', abilities: ["Al Atacar: Esta unidad obtiene +1 Ataque contra Efreets."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Elementales de magma (Neutral)": {
    basic: { atk: 3, def: 2, hp: 4, ini: 4, type: 'Melé', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de tierra. Esta unidad inflige daño elemental."], customCost: { gold: 14, materials: 0, valuable: 0 } }
  },
  "Gólems de diamante": {
    basic: { atk: 2, def: 2, hp: 2, ini: 3, type: 'Melé', abilities: ["Resistencia Enana: Al recibir un hechizo, lanza el dado de combate; con +1 lo ignora."] }
  },
  "Campeones (Neutral)": {
    basic: { atk: 4, def: 2, hp: 6, ini: 8, type: 'Melé', abilities: ["Al Atacar: Lanza 2 dados de Ataque y aplica ambos resultados.", "Pasiva: Vuelve a tirar todos los dados '-1' de esta unidad."], customCost: { gold: 18, materials: 0, valuable: 0 } }
  },
  "Caballeros del Terror (Neutral)": {
    basic: { atk: 5, def: 1, hp: 7, ini: 7, type: 'Melé', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Cuando es objetivo de un Contraataque, gana +1 en Defensa."], customCost: { gold: 18, materials: 0, valuable: 0 } }
  },
  "Mantícoras (Neutral)": {
    basic: { atk: 4, def: 1, hp: 7, ini: 8, type: 'Voladora', abilities: ["Pasiva: En los resultados 0 o +1 del dado de Ataque del enemigo, gana +1 Defensa."], customCost: { gold: 18, materials: 0, valuable: 0 } }
  },
  "Nagas (Neutral)": {
    basic: { atk: 5, def: 1, hp: 6, ini: 6, type: 'Melé', abilities: ["Al Atacar: Ignora los contraataques."], customCost: { gold: 16, materials: 0, valuable: 0 } }
  },
  "Encantadores": {
    basic: { atk: 4, def: 1, hp: 5, ini: 8, type: 'a Distancia', abilities: ["Activación: Quita hasta 2 Heridas de una unidad amiga. De lo contrario, los encantadores obtienen +1 Ataque."], customCost: { gold: 16, materials: 0, valuable: 0 } }
  },
  "Elemental de tierra": {
    basic: { atk: 3, def: 2, hp: 5, ini: 4, type: 'Melé', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de tierra. Esta unidad inflige daño elemental."], customCost: { gold: 16, materials: 0, valuable: 0 } }
  },
  "Elementales mágicos (Neutral)": {
    basic: { atk: 3, def: 1, hp: 7, ini: 7, type: 'Melé', abilities: ["Pasivo: Inmunes a la Flecha mágica. Esta unidad inflige daño elemental."], customCost: { gold: 19, materials: 0, valuable: 0 } }
  },
  "Cíclopes (Neutral)": {
    basic: { atk: 5, def: 1, hp: 6, ini: 8, type: 'a Distancia', abilities: ["Alternativo: Esta unidad puede destruir un muro, puerta o torre de arqueros."], customCost: { gold: 19, materials: 0, valuable: 0 } }
  },
  "Nix (Neutral)": {
    basic: { atk: 5, def: 1, hp: 7, ini: 6, type: 'Melé', abilities: ["Pasivo: Esta unidad no puede recibir más de 5 Heridas de un solo ataque."], customCost: { gold: 20, materials: 0, valuable: 0 } }
  },
  "Arcángeles (Neutral)": {
    basic: { atk: 5, def: 2, hp: 7, ini: 10, type: 'Voladora', abilities: ["Al Atacar: esta unidad obtiene +2 de Ataque contra Archidiablos."], customCost: { gold: 29, materials: 0, valuable: 0 } }
  },
  "Dragones Fantasma (Neutral)": {
    basic: { atk: 5, def: 2, hp: 6, ini: 9, type: 'Voladora', abilities: ["No-muerto: Inmune a los efectos de moral.", "Al Atacar: Después del ataque, tira un dado de Ataque; si el resultado es '0', el objetivo debe alejarse 1 casilla."], customCost: { gold: 28, materials: 0, valuable: 0 } }
  },
  "Dragón Negro (Neutral)": {
    basic: { atk: 5, def: 2, hp: 7, ini: 9, type: 'Voladora', abilities: ["Al Atacar: Ataca 2 espacios en línea. El primer ataque se resuelve normalmente, y el segundo tiene 2 de Ataque."], customCost: { gold: 30, materials: 0, valuable: 0 } }
  },
  "Háspidos (Neutral)": {
    basic: { atk: 5, def: 2, hp: 6, ini: 9, type: 'Melé', abilities: ["Al Atacar: Coloca 1 cubo de facción sobre el objetivo. Cuando se active, retira el cubo para infligir 1 Herida."], customCost: { gold: 25, materials: 0, valuable: 0 } }
  },
  "Behemoths (Neutral)": {
    basic: { atk: 5, def: 1, hp: 8, ini: 9, type: 'Melé', abilities: ["Al Atacar: Disminuye la Defensa del objetivo en 2 (hasta un mínimo de 0). Después del ataque, pon 1 ficha de corrosión en el objetivo."], customCost: { gold: 26, materials: 0, valuable: 0 } }
  },
  "Titanes (Neutral)": {
    basic: { atk: 6, def: 2, hp: 10, ini: 10, type: 'a Distancia', abilities: ["Pasiva: Ignora las penalizaciones de combate contra unidades adyacentes.", "Al Atacar: Esta unidad obtiene +2 de Ataque contra Dragones Negros."], customCost: { gold: 39, materials: 0, valuable: 0 } }
  },
  "Dragón de Hada": {
    basic: { atk: 3, def: 3, hp: 3, ini: 6, type: 'Voladora', abilities: ["Volador.", "Espejo Mágico: Al recibir un hechizo, lanza el dado de combate; con un resultado de 0 o +1, devuelve el hechizo al héroe enemigo."] }
  },
  "Dragón de Óxido": {
    basic: { atk: 4, def: 3, hp: 4, ini: 5, type: 'Voladora', abilities: ["Volador.", "Aliento Ácido: Reduce permanentemente la defensa del objetivo herido en 2."] }
  },
  "Dragón de Cristal": {
    basic: { atk: 4, def: 4, hp: 4, ini: 5, type: 'Melé', abilities: ["Inmune a toda magia.", "Generador de Gema: Añade +1 Gema a la reserva al final del combate."] }
  },
  "Dragón Azul": {
    basic: { atk: 5, def: 4, hp: 5, ini: 7, type: 'Voladora', abilities: ["Volador.", "Pánico: Unidades enemigas adyacentes de bronce/plata no pueden activar su turno."] }
  },
  "Fénix (Neutral)": {
    basic: { atk: 6, def: 2, hp: 7, ini: 12, type: 'Voladora', abilities: ["Pasivo: Una vez por combate. Cuando los PS de esta unidad se reduzcan a 0, ponlos en 1.\nPasivo: Inmunes a los Hechizos de magia de fuego."], customCost: { gold: 32, materials: 0, valuable: 0 } }
  },

  // Banco de Criaturas
  "Esqueletos (Cripta)": {
    basic: { atk: 1, def: 0, hp: 2, ini: 4, type: 'Melé', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Una vez por Combate. Cuando su vida baja a 0, ponla a 1 en su lugar."] }
  },
  "Zombis (Cripta)": {
    basic: { atk: 1, def: 0, hp: 2, ini: 3, type: 'Melé', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Si el atacante resuelve un '+1' en su dado de Ataque, gana +1 en Defensa."] }
  },
  "Grifos (Conservatorio)": {
    basic: { atk: 3, def: 0, hp: 4, ini: 8, type: 'Voladora', abilities: ["Pasiva: Esta unidad puede realizar un número ilimitado de contraataques."] }
  },
  "Espectros (Cripta)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 5, type: 'Voladora', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Siempre que esta unidad ataque, el enemigo debe descartar 1 carta de su mano (si es posible)."] }
  },
  "Espectros (Naufragio)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 5, type: 'Voladora', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Siempre que esta unidad ataque, el enemigo debe descartar 1 carta de su mano (si es posible)."] }
  },
  "Vampiros (Cripta)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 6, type: 'Voladora', abilities: ["No-muerto: Inmune a los efectos de moral.", "Al Atacar: Después del ataque, elimina todas las Heridas de esta unidad."] }
  },
   "Medusas (Almacén)": {
    basic: { atk: 3, def: 0, hp: 3, ini: 6, type: 'a Distancia', abilities: ["Al Atacar: Ignora el contraataque. Si esta unidad está apilada, el objetivo sufre Parálisis."] }
  },
  "Nagas (Banco)": {
    basic: { atk: 4, def: 1, hp: 5, ini: 6, type: 'Melé', abilities: ["Al Atacar: Ignora los contraataques."] }
  },
  "Dragón Negro (Utopía)": {
    basic: { atk: 5, def: 2, hp: 5, ini: 9, type: 'Voladora', abilities: ["Pasiva: Mientras esta unidad esté apilada, obtiene +3 de Ataque."] }
  },
};
