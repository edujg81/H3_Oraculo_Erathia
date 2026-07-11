import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, HelpCircle, Swords, Heart, Zap, Compass, RefreshCw, Star, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface UnitStats {
  atk: number;
  def: number;
  hp: number;
  ini: number;
  type: 'Melee' | 'A distancia' | 'Volador';
  abilities: string[];
  customCost?: { gold: number; materials: number; valuable: number };
}

interface BoardGameUnit {
  level: number;
  nameBasic: string;
  nameElite?: string;
  tier: 'bronce' | 'plata' | 'oro' | 'azul';
}

interface FactionsUnitsData {
  [factionId: string]: BoardGameUnit[];
}

const FACTION_UNITS: FactionsUnitsData = {
  castillo: [
    { level: 1, nameBasic: 'Alabarderos', nameElite: 'Alabarderos', tier: 'bronce' },
    { level: 2, nameBasic: 'Arqueros', nameElite: 'Arqueros', tier: 'bronce' },
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
    { level: 6, nameBasic: 'Caballeros del Terror', nameElite: 'Caballeros del Terror', tier: 'oro' },
    { level: 7, nameBasic: 'Dragones Fantasma', nameElite: 'Dragones Fantasma', tier: 'oro' }
  ],
  mazmorra: [
    { level: 1, nameBasic: 'Trogloditas', nameElite: 'Trogloditas', tier: 'bronce' },
    { level: 2, nameBasic: 'Arpías', nameElite: 'Arpías', tier: 'bronce' },
    { level: 3, nameBasic: 'Ojos Maléficos', nameElite: 'Ojos Maléficos', tier: 'bronce' },
    { level: 4, nameBasic: 'Medusas', nameElite: 'Medusas', tier: 'plata' },
    { level: 5, nameBasic: 'Minotauros', nameElite: 'Minotauros', tier: 'plata' },
    { level: 6, nameBasic: 'Mantícoras', nameElite: 'Mantícoras', tier: 'oro' },
    { level: 6, nameBasic: 'Mantícoras (Alternativa)', nameElite: 'Mantícoras (Alternativa)', tier: 'oro' },
    { level: 7, nameBasic: 'Dragones Negros', nameElite: 'Dragones Negros', tier: 'oro' }
  ],
  murallas: [
    { level: 1, nameBasic: 'Centauros', nameElite: 'Centauros Líderes', tier: 'bronce' },
    { level: 2, nameBasic: 'Enanos', nameElite: 'Enanos de Batalla', tier: 'bronce' },
    { level: 3, nameBasic: 'Elfos', nameElite: 'Grandes Elfos', tier: 'bronce' },
    { level: 4, nameBasic: 'Pegasos', nameElite: 'Pegasos Plateados', tier: 'plata' },
    { level: 5, nameBasic: 'Dendroides', nameElite: 'Dendroides Guardianes', tier: 'plata' },
    { level: 6, nameBasic: 'Unicornios', nameElite: 'Unicornios de Guerra', tier: 'oro' },
    { level: 7, nameBasic: 'Dragones Verdes', nameElite: 'Dragones Dorados', tier: 'oro' }
  ],
  torre: [
    { level: 1, nameBasic: 'Gremlins', nameElite: 'Gremlins', tier: 'bronce' },
    { level: 2, nameBasic: 'Gárgolas', nameElite: 'Gárgolas', tier: 'bronce' },
    { level: 3, nameBasic: 'Golems de Hierro', nameElite: 'Golems de Hierro', tier: 'bronce' },
    { level: 4, nameBasic: 'Archimagos', nameElite: 'Archimagos', tier: 'plata' },
    { level: 5, nameBasic: 'Genios', nameElite: 'Genios', tier: 'plata' },
    { level: 6, nameBasic: 'Nagas', nameElite: 'Nagas', tier: 'oro' },
    { level: 7, nameBasic: 'Titanes', nameElite: 'Titanes', tier: 'oro' }
  ],
  inferno: [
    { level: 1, nameBasic: 'Diablillos', nameElite: 'Duendecillos', tier: 'bronce' },
    { level: 2, nameBasic: 'Gogs', nameElite: 'Magogs', tier: 'bronce' },
    { level: 3, nameBasic: 'Sabuesos', nameElite: 'Cerberos', tier: 'bronce' },
    { level: 4, nameBasic: 'Demonios', nameElite: 'Demonios del Averno', tier: 'plata' },
    { level: 5, nameBasic: 'Demonios del Abismo', nameElite: 'Señores del Abismo', tier: 'plata' },
    { level: 6, nameBasic: 'Efreet', nameElite: 'Efreet Sultanes', tier: 'oro' },
    { level: 7, nameBasic: 'Diablos', nameElite: 'Archidiablos', tier: 'oro' }
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
    { level: 1, nameBasic: 'Gnolls', nameElite: 'Merodeadores Gnoll', tier: 'bronce' },
    { level: 2, nameBasic: 'Hombres Lagarto', nameElite: 'Lagartos de Élite', tier: 'bronce' },
    { level: 3, nameBasic: 'Serpientes Aladas', nameElite: 'Libélulas', tier: 'bronce' },
    { level: 4, nameBasic: 'Basiliscos', nameElite: 'Basiliscos Mayores', tier: 'plata' },
    { level: 5, nameBasic: 'Gorgonas', nameElite: 'Gorgonas Verdes', tier: 'plata' },
    { level: 6, nameBasic: 'Wyverns', nameElite: 'Wyverns Monarcas', tier: 'oro' },
    { level: 7, nameBasic: 'Hidras', nameElite: 'Hidras del Caos', tier: 'oro' }
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
    { level: 3, nameBasic: 'Golems de Acero', tier: 'bronce' },
    { level: 3, nameBasic: 'Grifos (Neutral)', tier: 'bronce' },
    { level: 3, nameBasic: 'Espectros (Neutral)', tier: 'bronce' },
    { level: 3, nameBasic: 'Ojos Maléficos (Neutral)', tier: 'bronce' },
    { level: 3, nameBasic: 'Golems de Hierro (Neutral)', tier: 'bronce' },
    { level: 3, nameBasic: 'Orcos (Neutral)', tier: 'bronce' },
    { level: 3, nameBasic: 'Elementales de hielo (Neutral)', tier: 'bronce' },
    { level: 3, nameBasic: 'Lobos de mar (Neutral)', tier: 'bronce' },
    { level: 4, nameBasic: 'Cruzados (Neutral)', tier: 'plata' },
    { level: 4, nameBasic: 'Vampiros (Neutral)', tier: 'plata' },
    { level: 4, nameBasic: 'Medusas (Neutral)', tier: 'plata' },
    { level: 4, nameBasic: 'Archimagos (Neutral)', tier: 'plata' },
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
    { level: 5, nameBasic: 'Golems de Oro', tier: 'plata' },
    { level: 5, nameBasic: 'Momias', tier: 'plata' },
    { level: 5, nameBasic: 'Fangarms', tier: 'plata' },
    { level: 5, nameBasic: 'Fanáticos (Neutral)', tier: 'plata' },
    { level: 5, nameBasic: 'Liches (Neutral)', tier: 'plata' },
    { level: 5, nameBasic: 'Minotauros (Neutral)', tier: 'plata' },
    { level: 5, nameBasic: 'Genios (Neutral)', tier: 'plata' },
    { level: 5, nameBasic: 'Elementales de magma (Neutral)', tier: 'plata' },
    { level: 6, nameBasic: 'Golems de Diamante', tier: 'oro' },
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

const BASE_COSTS = {
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

const UNIT_DETAILS: {
  [nameBasic: string]: {
    basic: UnitStats;
    elite?: UnitStats;
  }
} = {
  // Castillo
  "Alabarderos": {
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'Melee', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 2, ini: 5, type: 'Melee', abilities: ["Pasiva: Cuando sea objetivo de cualquier ataque, puedes descartar 1 carta e ignorar el resultado de la tirada del dado de ataque."], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Arqueros": {
    basic: { atk: 2, def: 0, hp: 2, ini: 4, type: 'A distancia', abilities: [], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 0, hp: 2, ini: 6, type: 'A distancia', abilities: ["Al Atacar: Si el objetivo no está adyacente, ataca a ese objetivo de nuevo."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Grifos": {
    basic: { atk: 2, def: 0, hp: 4, ini: 6, type: 'Volador', abilities: ["Contraataque: Esta unidad puede realizar un número ilimitado de contraataques."], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 0, hp: 4, ini: 9, type: 'Volador', abilities: ["Contraataque: Esta unidad puede realizar un número ilimitado de contraataques."], customCost: { gold: 6, materials: 0, valuable: 0 } }
  },
  "Cruzados": {
    basic: { atk: 3, def: 2, hp: 4, ini: 5, type: 'Melee', abilities: [], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 2, hp: 4, ini: 6, type: 'Melee', abilities: ["Al Atacar: Puedes volver a tirar cada '0' en el dado de Ataque de esta unidad."], customCost: { gold: 10, materials: 0, valuable: 0 } }
  },
  "Fanáticos": {
    basic: { atk: 3, def: 1, hp: 5, ini: 5, type: 'A distancia', abilities: [], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 5, ini: 7, type: 'A distancia', abilities: ["Pasiva: No sufre penalizaciones en combates cuerpo a cuerpo."], customCost: { gold: 12, materials: 0, valuable: 0 } }
  },
  "Campeones": {
    basic: { atk: 5, def: 2, hp: 7, ini: 7, type: 'Melee', abilities: ["Mapa: Si tu héroe está en una casilla con establos, el coste de refuerzo de esta unidad se reduce en 6 Oros."], customCost: { gold: 12, materials: 0, valuable: 0 } },
    elite: { atk: 6, def: 2, hp: 7, ini: 9, type: 'Melee', abilities: ["Al Atacar: Si el movimiento de esta unidad termina en un espacio distinto al de inicio, puedes volver a tirar un dado de Ataque."], customCost: { gold: 20, materials: 0, valuable: 1 } }
  },
  "Arcángeles": {
    basic: { atk: 6, def: 3, hp: 8, ini: 12, type: 'Volador', abilities: ["Pasiva: Cuando comience el combate, roba 1 carta."], customCost: { gold: 20, materials: 0, valuable: 1 } },
    elite: { atk: 7, def: 3, hp: 10, ini: 18, type: 'Volador', abilities: ["Pasiva: Una vez por combate. Cancela un ataque que reduzca la vida de otra unidad a 0."], customCost: { gold: 30, materials: 0, valuable: 2 } }
  },

  // Necrópolis
  "Esqueletos": {
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'Melee', abilities: ["No-muerto: Inmune a los efectos de moral."], customCost: { gold: 2, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 2, ini: 5, type: 'Melee', abilities: ["No-muerto: Inmune a los efectos de moral."], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Zombis": {
    basic: { atk: 2, def: 1, hp: 3, ini: 3, type: 'Melee', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Si el atacante resuelve un '+1' en su dado de Ataque, gana +1 en Defensa."], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 1, hp: 3, ini: 4, type: 'Melee', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Si el atacante resuelve un '0' o '+1' en su dado de Ataque, gana +1 en Defensa."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Espectros": {
    basic: { atk: 3, def: 0, hp: 3, ini: 5, type: 'Volador', abilities: ["No-muerto: Inmune a los efectos de moral.", "Activación: Retira hasta 1 Herida de esta unidad."], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 0, hp: 5, ini: 7, type: 'Volador', abilities: ["No-muerto: Inmune a los efectos de moral.", "Activación: Retira hasta 1 Herida de esta unidad, luego descarta 1 carta al azar de la mano del enemigo."], customCost: { gold: 6, materials: 0, valuable: 0 } }
  },
  "Vampiros": {
    basic: { atk: 4, def: 1, hp: 4, ini: 6, type: 'Volador', abilities: ["No-muerto: Inmune a los efectos de moral.", "Al Atacar: Ignora los contraataques."], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 1, hp: 4, ini: 9, type: 'Volador', abilities: ["No-muerto: Inmune a los efectos de moral.", "Al Atacar: Ignora los contraataques. Luego elimina hasta 2 Heridas de esta unidad."], customCost: { gold: 12, materials: 0, valuable: 0 } },
  },
  "Liches": {
    basic: { atk: 3, def: 1, hp: 5, ini: 6, type: 'A distancia', abilities: ["No-muerto: Inmune a los efectos de moral."], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 5, ini: 7, type: 'A distancia', abilities: ["No-muerto: Inmune a los efectos de moral.", "Al Atacar: Elige una unidad adyacente al objetivo y atácala con 2 de Ataque."], customCost: { gold: 14, materials: 0, valuable: 0 } }
  },
  "Caballeros del Terror": {
    basic: { atk: 5, def: 2, hp: 7, ini: 7, type: 'Melee', abilities: ["No-muerto: Inmune a los efectos de moral.", "Al Atacar: En la represalia a este ataque, el enemigo tira 2 dados de Ataque y resuelve el más bajo."], customCost: { gold: 12, materials: 0, valuable: 0 } },
    elite: { atk: 6, def: 2, hp: 7, ini: 9, type: 'Melee', abilities: ["No-muerto: Inmune a los efectos de moral.", "Al Atacar: Con resultado de '0' o '+1' en el dado de Ataque, aumenta el valor total del ataque en '+1'."], customCost: { gold: 20, materials: 0, valuable: 1 } }
  },
  "Dragones Fantasma": {
    basic: { atk: 6, def: 3, hp: 8, ini: 9, type: 'Volador', abilities: ["No-muerto: Inmune a los efectos de moral.", "Activación: Descarta una ficha de Moral Positiva del enemigo."], customCost: { gold: 19, materials: 0, valuable: 1 } },
    elite: { atk: 7, def: 3, hp: 9, ini: 14, type: 'Volador', abilities: ["No-muerto: Inmune a los efectos de moral.", "Activación: Descarta una ficha de Moral Positiva del enemigo.", "Al Atacar: Suma +1 al resultado de tu dado de Ataque."], customCost: { gold: 32, materials: 0, valuable: 2 } }
  },

  // Mazmorra
  "Trogloditas": {
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'Melee', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 2, ini: 5, type: 'Melee', abilities: ["Pasiva: Esta unidad ignora los efectos de Parálisis."], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Arpías": {
    basic: { atk: 2, def: 0, hp: 3, ini: 6, type: 'Volador', abilities: ["Al Atacar: Tras el contraataque enemigo, esta unidad puede regresar a la posición desde la que se movió para atacar."], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 0, hp: 3, ini: 9, type: 'Volador', abilities: ["Al Atacar: Ignora el contraataque enemigo. Esta unidad puede regresar a la posición desde la que se movió para atacar."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Ojos Maléficos": {
    basic: { atk: 3, def: 0, hp: 3, ini: 5, type: 'A distancia', abilities: [], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 3, ini: 7, type: 'A distancia', abilities: ["Pasiva: Ignora la penalización de combate contra unidades adyacentes."], customCost: { gold: 6, materials: 0, valuable: 0 } }
  },
  "Medusas": {
    basic: { atk: 3, def: 1, hp: 4, ini: 5, type: 'A distancia', abilities: ["Pasiva: Después de contraatacar, tira un dado de Ataque, con un '0' el objetivo sufre Parálisis."], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 4, ini: 6, type: 'A distancia', abilities: ["Pasiva: Ignora la penalización de combate contra unidades adyacentes.", "Contraataque: El objetivo sufre Parálisis."], customCost: { gold: 12, materials: 0, valuable: 0 } }
  },
  "Minotauros": {
    basic: { atk: 4, def: 2, hp: 4, ini: 6, type: 'Melee', abilities: ["Al Atacar: Si resuelves un '-1' en el dado de Ataque, roba una carta de tu mazo."], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 2, hp: 4, ini: 8, type: 'Melee', abilities: ["Al Atacar: Si resuelves un '-1' en el dado de Ataque, roba una carta de tu mazo."], customCost: { gold: 14, materials: 0, valuable: 0 } }
  },
  "Mantícoras": {
    basic: { atk: 5, def: 1, hp: 6, ini: 7, type: 'Volador', abilities: [], customCost: { gold: 10, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 1, hp: 6, ini: 11, type: 'Volador', abilities: ["Al Atacar: Para este ataque, ignora la defensa de la unidad objetivo."], customCost: { gold: 18, materials: 0, valuable: 1 } }
  },
  "Mantícoras (Alternativa)": {
    basic: { atk: 4, def: 1, hp: 7, ini: 8, type: 'Volador', abilities: ["Al Atacar: Coloca 1 cubo de facción sobre el objetivo. Cuando se active, retira el cubo para infligir 1 Herida."], customCost: { gold: 12, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 2, hp: 7, ini: 11, type: 'Volador', abilities: ["Pasiva: Después de cada ataque, coloca 1 cubo de facción sobre el objetivo. Cuando se active, retira el cubo para infligir 1 Herida."], customCost: { gold: 18, materials: 0, valuable: 1 } }
  },
  "Dragones Negros": {
    basic: { atk: 6, def: 3, hp: 8, ini: 11, type: 'Volador', abilities: ["Pasiva: Reduce el daño recibido por Hechizos en 2 hasta un mínimo de 0."], customCost: { gold: 19, materials: 0, valuable: 1 } },
    elite: { atk: 8, def: 3, hp: 8, ini: 15, type: 'Volador', abilities: ["Pasiva: Ignora cualquier efecto de Hechizo y el daño de Especialidad."], customCost: { gold: 33, materials: 0, valuable: 2 } }
  },

  // Murallas
  "Centauros": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'Melee', abilities: ["Veloz: Gana bonificación al cargar."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 5, type: 'Melee', abilities: ["Veloz.", "Carga de Centauro: +1 de Ataque al avanzar."] }
  },
  "Enanos": {
    basic: { atk: 1, def: 2, hp: 1, ini: 3, type: 'Melee', abilities: ["Resistencia: Al recibir un hechizo dañino, lanza el dado de combate; con +1 lo ignora."] },
    elite: { atk: 2, def: 2, hp: 2, ini: 4, type: 'Melee', abilities: ["Resistencia mejorada: Al recibir un hechizo dañino, lanza el dado de combate; con 0 o +1 lo ignora."] }
  },
  "Elfos": {
    basic: { atk: 1, def: 0, hp: 1, ini: 4, type: 'A distancia', abilities: ["A distancia."] },
    elite: { atk: 2, def: 0, hp: 1, ini: 5, type: 'A distancia', abilities: ["A distancia.", "Doble Disparo: Realiza dos disparos a distancia por ronda."] }
  },
  "Pegasos": {
    basic: { atk: 2, def: 1, hp: 2, ini: 5, type: 'Volador', abilities: ["Volador.", "Infracción Mágica: Incrementa en 1 el coste de maná de hechizos enemigos."] },
    elite: { atk: 3, def: 1, hp: 2, ini: 6, type: 'Volador', abilities: ["Volador.", "Infracción Mágica.", "+1 Iniciativa de Combate."] }
  },
  "Dendroides": {
    basic: { atk: 2, def: 2, hp: 2, ini: 3, type: 'Melee', abilities: ["Enredar: Al atacar cuerpo a cuerpo, impide al objetivo moverse en su próximo turno."] },
    elite: { atk: 3, def: 3, hp: 2, ini: 4, type: 'Melee', abilities: ["Enredar.", "Defensa Arraigada: +1 Defensa al defender."] }
  },
  "Unicornios": {
    basic: { atk: 3, def: 2, hp: 3, ini: 4, type: 'Melee', abilities: ["Mirada Cegadora: En un resultado de +1 en el dado de ataque, ciega al objetivo herido."] },
    elite: { atk: 4, def: 2, hp: 3, ini: 5, type: 'Melee', abilities: ["Mirada Cegadora.", "Aura de Resistencia: Aliados adyacentes ganan +1 de Defensa."] }
  },
  "Dragones Verdes": {
    basic: { atk: 4, def: 3, hp: 4, ini: 5, type: 'Volador', abilities: ["Volador.", "Aliento Ácido.", "Inmune a hechizos de nivel 1-3."] },
    elite: { atk: 5, def: 4, hp: 4, ini: 6, type: 'Volador', abilities: ["Volador.", "Aliento Ácido.", "Inmune a hechizos de nivel 1-4."] }
  },

  // Torre
  "Gremlins": {
    basic: { atk: 2, def: 0, hp: 2, ini: 4, type: 'Melee', abilities: [], customCost: { gold: 0, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 0, hp: 2, ini: 5, type: 'A distancia', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } }
  },
  "Gárgolas": {
    basic: { atk: 2, def: 1, hp: 3, ini: 6, type: 'Volador', abilities: ["Pasiva: Esta unidad ignora cualquier efecto Contínuo de Hechizo."], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 3, ini: 9, type: 'Volador', abilities: ["Pasiva: Esta unidad ignora cualquier efecto Contínuo de Hechizo."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Golems de Hierro": {
    basic: { atk: 3, def: 1, hp: 3, ini: 4, type: 'Melee', abilities: ["Pasiva: Esta unidad reduce cualquier daño provocado por hechizos en 1, hasta un mínimo de 0."], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 2, hp: 3, ini: 5, type: 'Melee', abilities: ["Pasiva: Esta unidad reduce cualquier daño provocado por hechizos en 2, hasta un mínimo de 0."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Archimagos": {
    basic: { atk: 3, def: 0, hp: 4, ini: 5, type: 'A distancia', abilities: ["Al Atacar: Ignora las penalizaciones de combate."], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 4, ini: 6, type: 'A distancia', abilities: ["Al Atacar: Ignora las penalizacions de combate.", "Activación: Suma +1 de Potencia al primer hechizo que lances esta ronda."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Genios": {
    basic: { atk: 3, def: 1, hp: 6, ini: 7, type: 'Volador', abilities: ["Alternativa: Descarta 3 cartas de tu mazo y lleva un hechizo descartado de esta manera a tu mano."], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 6, ini: 8, type: 'Volador', abilities: ["Al Atacar: Descarta hasta 3 cartas de tu mazo y lleva un hechizo descartado de esta manera a tu mano."], customCost: { gold: 12, materials: 0, valuable: 0 } }
  },
  "Nagas": {
    basic: { atk: 5, def: 2, hp: 7, ini: 6, type: 'Melee', abilities: ["Al Atacar: Ignora los contraataques."], customCost: { gold: 13, materials: 0, valuable: 0 } },
    elite: { atk: 6, def: 2, hp: 7, ini: 8, type: 'Melee', abilities: ["Al Atacar: Ignora los contraataques."], customCost: { gold: 18, materials: 0, valuable: 1 } }
  },
  "Titanes": {
    basic: { atk: 6, def: 3, hp: 8, ini: 7, type: 'Melee', abilities: ["Pasiva: Ignora cualquier efecto Contínuo."], customCost: { gold: 18, materials: 0, valuable: 1 } },
    elite: { atk: 6, def: 3, hp: 8, ini: 11, type: 'A distancia', abilities: ["Pasiva: Ignora cualquier efecto Continuo y las penalizaciones de combate contra unidades adyacentes."], customCost: { gold: 32, materials: 0, valuable: 2 } }
  },

  // Inferno
  "Diablillos": {
    basic: { atk: 1, def: 0, hp: 1, ini: 3, type: 'Melee', abilities: ["Robo de Maná: Al inicio del combate, roba 1 de Maná al héroe enemigo."] },
    elite: { atk: 1, def: 1, hp: 1, ini: 4, type: 'Melee', abilities: ["Robo de Maná de élite: Roba 2 de Maná al héroe enemigo."] }
  },
  "Gogs": {
    basic: { atk: 1, def: 0, hp: 1, ini: 4, type: 'A distancia', abilities: ["A distancia."] },
    elite: { atk: 2, def: 0, hp: 1, ini: 5, type: 'A distancia', abilities: ["A distancia.", "Bolas de Fuego: Su disparo inflige daño en área circular."] }
  },
  "Sabuesos": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'Melee', abilities: ["Ataque Múltiple: Ataca a 3 enemigos adyacentes de forma simultánea."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 5, type: 'Melee', abilities: ["Ataque Múltiple.", "Sin Represalia."] }
  },
  "Demonios": {
    basic: { atk: 2, def: 1, hp: 2, ini: 3, type: 'Melee', abilities: [] },
    elite: { atk: 3, def: 1, hp: 2, ini: 4, type: 'Melee', abilities: ["Furia Infernal: +1 de Ataque si tiene heridas en su ficha."] }
  },
  "Demonios del Abismo": {
    basic: { atk: 2, def: 2, hp: 2, ini: 4, type: 'Melee', abilities: ["Invocador: Al morir un aliado de bronce, invoca una unidad de Demonios en su lugar."] },
    elite: { atk: 3, def: 2, hp: 2, ini: 5, type: 'Melee', abilities: ["Invocador.", "Azote de Fuego: +1 Daño de Fuego contra enemigos de Murallas."] }
  },
  "Efreet": {
    basic: { atk: 3, def: 2, hp: 3, ini: 5, type: 'Volador', abilities: ["Volador.", "Inmune a Fuego: Inmune a hechizos de la escuela de fuego."] },
    elite: { atk: 4, def: 2, hp: 3, ini: 6, type: 'Volador', abilities: ["Volador.", "Inmune a Fuego.", "Escudo de Fuego: Devuelve 1 de daño físico a quien le ataque cuerpo a cuerpo."] }
  },
  "Diablos": {
    basic: { atk: 4, def: 3, hp: 4, ini: 6, type: 'Volador', abilities: ["Volador.", "Sin Represalia."] },
    elite: { atk: 5, def: 4, hp: 4, ini: 7, type: 'Volador', abilities: ["Volador.", "Sin Represalia.", "Aura del Abismo: -1 a la Suerte de todas las unidades enemigas."] }
  },

  // Bastión
  "Goblins": {
    basic: { atk: 1, def: 0, hp: 4, ini: 6, type: 'Melee', abilities: [], customCost: { gold: 1, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 0, hp: 4, ini: 7, type: 'Melee', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } }
  },
  "Incursores lupinos": {
    basic: { atk: 2, def: 0, hp: 3, ini: 7, type: 'Melee', abilities: [], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 0, hp: 4, ini: 8, type: 'Melee', abilities: ["Al Atacar: Ataca este objetivo otra vez. El segundo ataque se produce después de que el objetivo contraataque (si es posible)."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Orcos": {
    basic: { atk: 2, def: 1, hp: 4, ini: 4, type: 'A distancia', abilities: [], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 5, ini: 5, type: 'A distancia', abilities: [], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Ogros": {
    basic: { atk: 3, def: 2, hp: 4, ini: 4, type: 'Melee', abilities: ["Alternativo: Coloca una ficha +1 Ataque en la unidad Melé o Voladora que elijas durante 2 rondas de combate."], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 2, hp: 6, ini: 5, type: 'Melee', abilities: ["Alternativo: Coloca una ficha +2 Ataque en la unidad Melé o Voladora que elijas durante 2 rondas de combate."], customCost: { gold: 8, materials: 0, valuable: 0 } }
  },
  "Aves de trueno": {
    basic: { atk: 4, def: 1, hp: 5, ini: 9, type: 'Volador', abilities: [], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 6, ini: 11, type: 'Volador', abilities: ["Pasivo: Justo después del ataque de esta unidad y antes de un contraataque, tira 1 dado de ataque; con un <<0> o <<+1>>, inflige 1 Herida al objetivo."], customCost: { gold: 14, materials: 0, valuable: 0 } }
  },
  "Cíclopes": {
    basic: { atk: 5, def: 0, hp: 6, ini: 6, type: 'A distancia', abilities: ["Alternativo: Esta unidad puede destruir un muro o la puerta."], customCost: { gold: 13, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 1, hp: 7, ini: 8, type: 'A distancia', abilities: ["Alternativo: Esta unidad puede destruir un muro, puerta o torre de arqueros."], customCost: { gold: 17, materials: 0, valuable: 1 } },
  },
  "Behemoths": {
    basic: { atk: 6, def: 2, hp: 9, ini: 6, type: 'Melee', abilities: ["Al Atacar: Disminuye la Defensa del objetivo en 1 (hasta un mínimo de 0)."], customCost: { gold: 19, materials: 0, valuable: 1 } },
    elite: { atk: 7, def: 2, hp: 10, ini: 9, type: 'Melee', abilities: ["Al Atacar: Disminuye la Defensa del objetivo en 2 (hasta un mínimo de 0). Después del ataque, pon 1 ficha de corrosión en el objetivo."], customCost: { gold: 29, materials: 0, valuable: 2 } },
  },

  // Fortaleza
  "Gnolls": {
    basic: { atk: 1, def: 1, hp: 1, ini: 3, type: 'Melee', abilities: ["Saña: +1 Ataque contra unidades de menor nivel."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 4, type: 'Melee', abilities: ["Saña Extrema: +2 Ataque contra unidades de menor nivel."] }
  },
  "Hombres Lagarto": {
    basic: { atk: 1, def: 1, hp: 1, ini: 3, type: 'A distancia', abilities: ["A distancia."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 4, type: 'A distancia', abilities: ["A distancia.", "Doble Disparo si se defiende en terreno pantanoso."] }
  },
  "Serpientes Aladas": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'Volador', abilities: ["Volador.", "Disipar: Quita todos los efectos beneficiosos del enemigo golpeado."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 5, type: 'Volador', abilities: ["Volador.", "Disipar.", "Debilidad: Reduce el ataque enemigo en 1 de forma permanente."] }
  },
  "Basiliscos": {
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'Melee', abilities: ["Mirada Petrificante: En un resultado de +1 en el dado de ataque, petrifica al objetivo."] },
    elite: { atk: 3, def: 2, hp: 2, ini: 5, type: 'Melee', abilities: ["Mirada Petrificante.", "Piel de Piedra Escamosa: +1 Defensa."] }
  },
  "Gorgonas": {
    basic: { atk: 2, def: 2, hp: 2, ini: 4, type: 'Melee', abilities: ["Mirada de la Muerte: En un resultado de +1 en el dado de ataque, derrota a un soldado enemigo adicional de bronce/plata."] },
    elite: { atk: 3, def: 2, hp: 3, ini: 5, type: 'Melee', abilities: ["Mirada de la Muerte.", "Cuerpo de Hierro: +1 HP."] }
  },
  "Wyverns": {
    basic: { atk: 3, def: 2, hp: 3, ini: 5, type: 'Volador', abilities: ["Volador.", "Envenenar: Daño místico periódico al inicio de cada ronda del objetivo."] },
    elite: { atk: 4, def: 2, hp: 3, ini: 6, type: 'Volador', abilities: ["Volador.", "Envenenar."] }
  },
  "Hidras": {
    basic: { atk: 4, def: 2, hp: 4, ini: 5, type: 'Melee', abilities: ["Ataque en Área Total: Golpea a todos los enemigos adyacentes de forma simultánea.", "Sin Represalia."] },
    elite: { atk: 5, def: 3, hp: 4, ini: 6, type: 'Melee', abilities: ["Ataque en Área Total.", "Sin Represalia.", "Regeneración: Se cura de forma pasiva 1 herida al activarse."] }
  },

  // Conflujo
  "Hadas": {
    basic: { atk: 2, def: 0, hp: 2, ini: 7, type: 'Melee', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 0, hp: 4, ini: 9, type: 'Melee', abilities: ["Al Atacar: Ignora los contraataques."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Elementales de la tormenta": {
    basic: { atk: 2, def: 0, hp: 3, ini: 7, type: 'A distancia', abilities: [], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 0, hp: 5, ini: 8, type: 'A distancia', abilities: ["Al Atacar: Añade +1 Potencia al primer hechizo de magia de aire que lances durante esta activación."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Elementales de hielo": {
    basic: { atk: 2, def: 1, hp: 4, ini: 5, type: 'A distancia', abilities: [], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 5, ini: 6, type: 'A distancia', abilities: ["Activación: Añade +1 Potencia al primer hechizo de magia de agua que lances durante esta acticación"], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Elementales de energía": {
    basic: { atk: 3, def: 1, hp: 5, ini: 5, type: 'Melee', abilities: [], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 5, ini: 8, type: 'Melee', abilities: ["Activación: +1 Potencia al primer hechizo de magia de fuego quwle"], customCost: { gold: 8, materials: 0, valuable: 0 } }
  },
  "Elementales de magma": {
    basic: { atk: 4, def: 2, hp: 5, ini: 4, type: 'Melee', abilities: [], customCost: { gold: 9, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 2, hp: 5, ini: 6, type: 'Melee', abilities: ["Activación: Añade +1 Potencia al primer hechizo de magia tierra que lances durante esta activación."], customCost: { gold: 13, materials: 0, valuable: 0 } }
  },
  "Elementales mágicos": {
    basic: { atk: 4, def: 2, hp: 7, ini: 7, type: 'Melee', abilities: ["Al Atacar: Ignora los contraataques.\nAtaca a todas las unidades adyacentes."], customCost: { gold: 13, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 2, hp: 7, ini: 9, type: 'Melee', abilities: ["Al Atacar: Ignora los contraataques.\nAtaca todas las unidades enemigas adyacentes.\nPasivo: Ignora cualquier efecto de Hechizo y Daño de especialidad."], customCost: { gold: 19, materials: 0, valuable: 1 } },
  },
  "Fénix": {
    basic: { atk: 6, def: 2, hp: 7, ini: 12, type: 'Volador', abilities: ["Pasivo: Una vez por combate. Cuando los PS de esta unidad se reduzcan a 0, ponlos en 1. Pasivo: Innmunes a los Hechizos de magia de fuego."], customCost: { gold: 21, materials: 0, valuable: 1 } },
    elite: { atk: 7, def: 2, hp: 8, ini: 18, type: 'Volador', abilities: ["Al Atacar: Ataca 2 espacios en una línea. El primer ataque se resuelve normalmente y el segundo tiene 2 Ataque.\nPasivo: Inmunes a los Hechizos de magia de fuego."], customCost: { gold: 29, materials: 0, valuable: 2 } }
  },

  // Invocaciones (Summons)
  "Elementales de aire": {
    basic: { atk: 2, def: 0, hp: 4, ini: 8, type: 'Melee', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de aire.\nEsta unidad inflige daño elemental."] },
    elite: { atk: 3, def: 0, hp: 4, ini: 8, type: 'Melee', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de aire.\nEsta unidad inflige daño elemental."] }
  },
  "Elementales de agua": {
    basic: { atk: 2, def: 0, hp: 5, ini: 6, type: 'Melee', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de agua.\nEsta unidad inflige daño elemental."] },
    elite: { atk: 3, def: 0, hp: 5, ini: 6, type: 'Melee', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de agua.\nEsta unidad inflige daño elemental."] }
  },
  "Elementales de fuego": {
    basic: { atk: 2, def: 1, hp: 4, ini: 5, type: 'Melee', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de fuego.\nEsta unidad inflige daño elemental."] },
    elite: { atk: 3, def: 1, hp: 4, ini: 5, type: 'Melee', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de fuego.\nEsta unidad inflige daño elemental."] }
  },
  "Elementales de tierra": {
    basic: { atk: 2, def: 2, hp: 2, ini: 5, type: 'Melee', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de tierra.\nEsta unidad inflige daño elemental."] },
    elite: { atk: 3, def: 2, hp: 2, ini: 5, type: 'Melee', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de tierra.\nEsta unidad inflige daño elemental."] }
  },

  // Cala
  "Oceánidos": {
    basic: { atk: 2, def: 0, hp: 3, ini: 6, type: 'Volador', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 0, hp: 3, ini: 8, type: 'Volador', abilities: ["Pasivo: Ignora todos los efectos y Daño de un Hechizo de magia de agua."], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Marineros": {
    basic: { atk: 2, def: 1, hp: 3, ini: 5, type: 'Melee', abilities: [], customCost: { gold: 3, materials: 0, valuable: 0 } },
    elite: { atk: 2, def: 1, hp: 5, ini: 6, type: 'Melee', abilities: ["Pasivo: Una vez por combate, cuando esta unidad retira una unidad del combate, gana 2 Oros."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Lobos de mar": {
    basic: { atk: 2, def: 0, hp: 4, ini: 6, type: 'A distancia', abilities: ["Pasivo: Ignora la penalización de combate contra unidades adyacentes."], customCost: { gold: 4, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 0, hp: 5, ini: 8, type: 'A distancia', abilities: ["Al Atacar: Ignora los contraataques.\nPasivo: Ignora la penalización de combate contra unidades adyanteces."], customCost: { gold: 6, materials: 0, valuable: 0 } }
  },
  "Ayssids": {
    basic: { atk: 3, def: 1, hp: 5, ini: 9, type: 'Volador', abilities: [], customCost: { gold: 6, materials: 0, valuable: 0 } },
    elite: { atk: 3, def: 1, hp: 6, ini: 11, type: 'Volador', abilities: ["Al Atacar: Si los Puntos de salud del objetivo se reducen a 0, después de resolver el Contraataque (si corresponde), los Ayssids pueden atacar a otra unidad adyacente."], customCost: { gold: 10, materials: 0, valuable: 0 } }
  },
  "Hechiceras": {
    basic: { atk: 3, def: 1, hp: 5, ini: 6, type: 'A distancia', abilities: ["Alternativo: Coloca una ficha de debilidad <<-2>> sobre cualquier unidad durante 2 rondas de combate."], customCost: { gold: 8, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 6, ini: 7, type: 'A distancia', abilities: ["Al Atacar: Después del ataque, coloca una ficha de Debilidad <<-1>> sobre el objetivo durante 2 rondas de combate."], customCost: { gold: 13, materials: 0, valuable: 0 } }
  },
  "Nix": {
    basic: { atk: 5, def: 2, hp: 7, ini: 6, type: 'Melee', abilities: [], customCost: { gold: 12, materials: 0, valuable: 0 } },
    elite: { atk: 6, def: 2, hp: 8, ini: 7, type: 'Melee', abilities: ["Pasivo: Esta unidad no puede recibir más de 4 Heridas de un solo ataque."], customCost: { gold: 20, materials: 0, valuable: 1 } }
  },
  "Háspidos": {
    basic: { atk: 5, def: 3, hp: 8, ini: 9, type: 'Melee', abilities: ["Al Atacar: +2 Ataque si, durante este combate, esta unidad se giró del lado de manada al lado de unos pocos."], customCost: { gold: 18, materials: 0, valuable: 1 } },
    elite: { atk: 7, def: 3, hp: 8, ini: 12, type: 'Melee', abilities: ["Al Atacar: Coloca 2 cubos de facción sobre el objetivo. Al comienzo de cada una de sus activaciones, retira 1 de ellos para inflgir 1 Herida."], customCost: { gold: 30, materials: 0, valuable: 2 } }
  },

  // Neutrales
  "Paisanos": {
    basic: { atk: 1, def: 0, hp: 1, ini: 2, type: 'Melee', abilities: [] }
  },
  "Pícaros": {
    basic: { atk: 1, def: 0, hp: 1, ini: 4, type: 'Melee', abilities: ["Sin Represalia."] }
  },
  "Alabarderos (Neutral)": {
    basic: { atk: 2, def: 0, hp: 4, ini: 4, type: 'Melee', abilities: ["Pasiva: Trata a las unidades aliadas adyacentes como si tuviesen una ficha de Defensa."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Esqueletos (Neutral)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 4, type: 'Melee', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Cuando son derrotados, si controlas un Héroe Nigromante, inmediatamente Refuerzas 1 de tus unidades Bronce."], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Trogloditas (Neutral)": {
    basic: { atk: 2, def: 1, hp: 3, ini: 6, type: 'Melee', abilities: ["Pasiva: Esta unidad ignora los efectos de Parálisis."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Gremlins (Neutral)": {
    basic: { atk: 2, def: 0, hp: 2, ini: 5, type: 'A distancia', abilities: [], customCost: { gold: 2, materials: 0, valuable: 0 } }
  }, 
  "Hobbits": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'A distancia', abilities: [] }
  },
  "Hadas (Neutral)": {
    basic: { atk: 2, def: 0, hp: 2, ini: 7, type: 'Volador', abilities: ["Al Atacar: Ignora el contraataque."], customCost: { gold: 2, materials: 0, valuable: 0 } }
  },
  "Oceánidos (Neutral)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 6, type: 'Volador', abilities: ["Pasivo: Ignora todos los efectos y Daño de un Hechizo de magia de agua."], customCost: { gold: 3, materials: 0, valuable: 0 } }
  },
  "Duende": {
    basic: { atk: 2, def: 0, hp: 3, ini: 5, type: 'Melee', abilities: ["Al Atacar: Lanza 2 dados de ataque y resuelve el resultado mayor."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Goblins (Neutral)": {
    basic: { atk: 1, def: 0, hp: 4, ini: 6, type: 'Melee', abilities: [], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Nómadas": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'Melee', abilities: ["Veloz: Ignora ciertas restricciones."] }
  },
  "Arqueros (Neutral)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 5, type: 'A distancia', abilities: ["Al Atacar: Si el objetivo no está adyacente, ataca a ese objetivo de nuevo."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Zombis (Neutral)": {
    basic: { atk: 2, def: 0, hp: 4, ini: 3, type: 'Melee', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Si el atacante resuelve un '0' o '+1' en su dado de Ataque, gana +1 en Defensa."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Arpías (Neutral)": {
    basic: { atk: 2, def: 0, hp: 4, ini: 8, type: 'Volador', abilities: ["Al Atacar: Ignora el contraataque enemigo. Esta unidad puede regresar a la posición desde la que se movió para atacar."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Gárgolas (Neutral)": {
    basic: { atk: 2, def: 1, hp: 3, ini: 9, type: 'Volador', abilities: ["Pasiva: Esta unidad ignora los efectos de Parálisis."], customCost: { gold: 4, materials: 0, valuable: 0 } }
  },
  "Elementales de la tormenta (Neutral)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 7, type: 'A distancia', abilities: ["Pasivo: Inmune a la Flecha mágica y a los Hechizos de magia de aire. Esta unidad inflige daño elemental."], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Marineros (Neutral)": {
    basic: { atk: 2, def: 1, hp: 3, ini: 5, type: 'Melee', abilities: [], customCost: { gold: 5, materials: 0, valuable: 0 } }
  },
  "Incursores lupinos (Neutral)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 7, type: 'Melee', abilities: ["Al Atacar: Ataca este objetivo otra vez. El segundo ataque se produce después de que el objetivo contraataque (si es posible)."], customCost: { gold: 6, materials: 0, valuable: 0 } }
  },
  "Elemental de aire": {
    basic: { atk: 2, def: 0, hp: 3, ini: 7, type: 'Melee', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de aire. Esta unidad inflige daño elemental."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Trolls": {
    basic: { atk: 1, def: 1, hp: 1, ini: 3, type: 'Melee', abilities: ["Carga: +1 de Ataque tras avanzar."] }
  },
  "Golems de Acero": {
    basic: { atk: 1, def: 1, hp: 1, ini: 3, type: 'Melee', abilities: ["Carga: +1 de Ataque tras avanzar."] }
  },
  "Jabalíes": {
    basic: { atk: 1, def: 1, hp: 1, ini: 3, type: 'Melee', abilities: ["Carga: +1 de Ataque tras avanzar."] }
  },
  "Grifos (Neutral)": {
    basic: { atk: 3, def: 0, hp: 4, ini: 8, type: 'Volador', abilities: ["Contraataque: Esta unidad puede realizar un número ilimitado de contraataques."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Espectros (Neutral)": {
    basic: { atk: 2, def: 0, hp: 4, ini: 7, type: 'Volador', abilities: ["No-muerto: Inmune a los efectos de moral.", "Activación: Retira hasta 2 Heridas de esta unidad."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Ojos Maléficos (Neutral)": {
    basic: { atk: 2, def: 1, hp: 3, ini: 6, type: 'A distancia', abilities: ["Pasiva: Ignora la penalización de combate contra unidades adyacentes."], customCost: { gold: 6, materials: 0, valuable: 0 } }
  },
  "Golems de Hierro (Neutral)": {
    basic: { atk: 2, def: 1, hp: 4, ini: 3, type: 'Melee', abilities: ["Pasiva: Esta unidad reduce cualquier daño provocado por hechizos en 2, hasta un mínimo de 0."], customCost: { gold: 6, materials: 0, valuable: 0 } }
  },
  "Orcos (Neutral)": {
    basic: { atk: 2, def: 1, hp: 4, ini: 4, type: 'A distancia', abilities: [], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Elementales de hielo (Neutral)": {
    basic: { atk: 2, def: 1, hp: 3, ini: 5, type: 'A distancia', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de agua. Esta unidad inflige daño elemental."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Lobos de mar (Neutral)": {
    basic: { atk: 2, def: 0, hp: 4, ini: 6, type: 'A distancia', abilities: ["Pasivo: Ignora la penalización de combate contra unidades adyacentes."], customCost: { gold: 7, materials: 0, valuable: 0 } }
  },
  "Cruzados (Neutral)": {
    basic: { atk: 3, def: 2, hp: 4, ini: 5, type: 'Melee', abilities: ["Pasiva: Durante cualquier ataque, tira 2 dados de Ataque y escoge el resultado más alto."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Vampiros (Neutral)": {
    basic: { atk: 3, def: 0, hp: 5, ini: 8, type: 'Volador', abilities: ["No-muerto: Inmune a los efectos de moral.", "Al Atacar: Ignora los contraataques. Luego elimina hasta 2 Heridas de esta unidad."], customCost: { gold: 9, materials: 0, valuable: 0 } }
  },
  "Medusas (Neutral)": {
    basic: { atk: 3, def: 1, hp: 4, ini: 6, type: 'A distancia', abilities: ["Pasiva: Ignora la penalización de combate contra unidades adyacentes.", "Contraataque: El objetivo sufre Parálisis."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Archimagos (Neutral)": {
    basic: { atk: 3, def: 0, hp: 5, ini: 6, type: 'A distancia', abilities: ["Al Atacar: Ignora las penalizaciones de combate. Después del ataque, el enemigo descarta una carta al azar o una carta con Potencia."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Ayssids (Neutral)": {
    basic: { atk: 3, def: 1, hp: 5, ini: 9, type: 'Volador', abilities: ["Al Atacar: Si los puntos de Salud del objetivo se reducen a 0, después de resolver el Contraataque (si corresponde), los Ayssids pueden atacar a otra unidad adyacente."], customCost: { gold: 9, materials: 0, valuable: 0 } }
  },
  "Sátiros": {
    basic: { atk: 3, def: 0, hp: 5, ini: 7, type: 'Melee', abilities: ["Mapa: Una vez por turno. Tira 1 dado de ataque. Con +1, gana Moral positiva."], customCost: { gold: 10, materials: 0, valuable: 0 } }
  },
  "Ogros (Neutral)": {
    basic: { atk: 3, def: 2, hp: 4, ini: 4, type: 'Melee', abilities: ["Alternativo: Coloca una ficha +2 Ataque en la unidad Melé o Voladora que elijas durante 2 rondas de combate."], customCost: { gold: 10, materials: 0, valuable: 0 } }
  },
  "Elemental de agua": {
    basic: { atk: 2, def: 1, hp: 4, ini: 5, type: 'Melee', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de agua. Esta unidad inflige daño elemental."], customCost: { gold: 10, materials: 0, valuable: 0 } }
  },
  "Tiradores certeros": {
    basic: { atk: 3, def: 0, hp: 6, ini: 9, type: 'A distancia', abilities: ["Al Atacar: Ignora las penalizaciones de combate."], customCost: { gold: 10, materials: 0, valuable: 0 } }
  },
  "Elementales de energía (Neutral)": {
    basic: { atk: 3, def: 1, hp: 4, ini: 5, type: 'Volador', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de fuego. Esta unidad inflige daño elemental."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Fangarm": {
    basic: { atk: 3, def: 1, hp: 5, ini: 8, type: 'Melee', abilities: ["Pasivo: Ignora todos los efectos de Hechizo y de especialidad distintos de Daño."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Gólems de acero": {
    basic: { atk: 3, def: 2, hp: 3, ini: 5, type: 'Melee', abilities: ["Pasivo: Reduce el Daño sufrido por esta unidad de Hechizo o especialidad en 2, hasta un mínimo de 0."], customCost: { gold: 12, materials: 0, valuable: 0 } }
  },
  "Hechiceras (Neutral)": {
    basic: { atk: 3, def: 1, hp: 5, ini: 6, type: 'A distancia', abilities: ["Al Atacar: Después del ataque, coloca una ficha de Debilidad <<-1>> sobre el objetivo durante 2 rondas de combate."], customCost: { gold: 13, materials: 0, valuable: 0 } }
  },
  "Aves de trueno (Neutral)": {
    basic: { atk: 3, def: 0, hp: 6, ini: 9, type: 'Volador', abilities: ["Pasivo: Justo después del ataque de esta unidad y antes de un contraataque, tira 1 daod de ataque; con un <<0>> o <<+1>>, inflige 1 Herida al objetivo."], customCost: { gold: 13, materials: 0, valuable: 0 } }
  },
  "Elemental de fuego": {
    basic: { atk: 3, def: 1, hp: 3, ini: 6, type: 'Melee', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de fuego. Esta unidad inflige daño elemental."], customCost: { gold: 13, materials: 0, valuable: 0 } }
  },
  "Golems de Oro": {
    basic: { atk: 2, def: 2, hp: 2, ini: 3, type: 'Melee', abilities: ["Constructo.", "Resistencia de Oro: Reduce el daño de hechizos enemigos en 2."] }
  },
  "Momias": {
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'Melee', abilities: ["Infección: Enemigo herido se convierte en Licántropo si es derrotado."] }
  },
  "Fanáticos (Neutral)": {
    basic: { atk: 3, def: 0, hp: 5, ini: 5, type: 'A distancia', abilities: ["Pasiva: No sufre penalizaciones en combates cuerpo a cuerpo."], customCost: { gold: 12, materials: 0, valuable: 0 } }
  },
  "Liches (Neutral)": {
    basic: { atk: 3, def: 0, hp: 6, ini: 7, type: 'A distancia', abilities: ["No-muerto: Inmune a los efectos de moral.", "Al Atacar: Elige una unidad adyacente al objetivo y atácala con 2 de Ataque."], customCost: { gold: 12, materials: 0, valuable: 0 } }
  },
  "Minotauros (Neutral)": {
    basic: { atk: 3, def: 2, hp: 4, ini: 7, type: 'Melee', abilities: ["Al Atacar: Si resuelves un '-1' en el dado de Ataque, roba una carta de tu mazo."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Genios (Neutral)": {
    basic: { atk: 3, def: 1, hp: 4, ini: 9, type: 'Volador', abilities: ["Al Atacar: Esta unidad obtiene +1 Ataque contra Efreets."], customCost: { gold: 11, materials: 0, valuable: 0 } }
  },
  "Elementales de magma (Neutral)": {
    basic: { atk: 3, def: 2, hp: 4, ini: 4, type: 'Melee', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de tierra. Esta unidad inflige daño elemental."], customCost: { gold: 14, materials: 0, valuable: 0 } }
  },
  "Golems de Diamante": {
    basic: { atk: 2, def: 2, hp: 2, ini: 3, type: 'Melee', abilities: ["Resistencia Enana: Al recibir un hechizo, lanza el dado de combate; con +1 lo ignora."] }
  },
  "Campeones (Neutral)": {
    basic: { atk: 4, def: 2, hp: 6, ini: 8, type: 'Melee', abilities: ["Al Atacar: Lanza 2 dados de Ataque y aplica ambos resultados.", "Pasiva: Vuelve a tirar todos los dados '-1' de esta unidad."], customCost: { gold: 18, materials: 0, valuable: 0 } }
  },
  "Caballeros del Terror (Neutral)": {
    basic: { atk: 5, def: 1, hp: 7, ini: 7, type: 'Melee', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Cuando es objetivo de un Contraataque, gana +1 en Defensa."], customCost: { gold: 18, materials: 0, valuable: 0 } }
  },
  "Mantícoras (Neutral)": {
    basic: { atk: 4, def: 1, hp: 7, ini: 8, type: 'Volador', abilities: ["Pasiva: En los resultados 0 o +1 del dado de Ataque del enemigo, gana +1 Defensa."], customCost: { gold: 18, materials: 0, valuable: 0 } }
  },
  "Nagas (Neutral)": {
    basic: { atk: 5, def: 1, hp: 6, ini: 6, type: 'Melee', abilities: ["Al Atacar: Ignora los contraataques."], customCost: { gold: 16, materials: 0, valuable: 0 } }
  },
  "Encantadores": {
    basic: { atk: 4, def: 1, hp: 5, ini: 8, type: 'A distancia', abilities: ["Activación: Quita hasta 2 Heridas de una unidad amiga. De lo contrario, los encantadores obtienen +1 Ataque."], customCost: { gold: 16, materials: 0, valuable: 0 } }
  },
  "Elemental de tierra": {
    basic: { atk: 3, def: 2, hp: 5, ini: 4, type: 'Melee', abilities: ["Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de tierra. Esta unidad inflige daño elemental."], customCost: { gold: 16, materials: 0, valuable: 0 } }
  },
  "Elementales mágicos (Neutral)": {
    basic: { atk: 3, def: 1, hp: 7, ini: 7, type: 'Melee', abilities: ["Pasivo: Inmunes a la Flecha mágica. Esta unidad inflige daño elemental."], customCost: { gold: 19, materials: 0, valuable: 0 } }
  },
  "Cíclopes (Neutral)": {
    basic: { atk: 5, def: 1, hp: 6, ini: 8, type: 'A distancia', abilities: ["Alternativo: Esta unidad puede destruir un muro, puerta o torre de arqueros."], customCost: { gold: 19, materials: 0, valuable: 0 } }
  },
  "Nix (Neutral)": {
    basic: { atk: 5, def: 1, hp: 7, ini: 6, type: 'Melee', abilities: ["Pasivo: Esta unidad no puede recibir más de 5 Heridas de un solo ataque."], customCost: { gold: 20, materials: 0, valuable: 0 } }
  },
  "Arcángeles (Neutral)": {
    basic: { atk: 5, def: 2, hp: 7, ini: 10, type: 'Volador', abilities: ["Al Atacar: esta unidad obtiene +2 de Ataque contra Archidiablos."], customCost: { gold: 29, materials: 0, valuable: 0 } }
  },
  "Dragones Fantasma (Neutral)": {
    basic: { atk: 5, def: 2, hp: 6, ini: 9, type: 'Volador', abilities: ["No-muerto: Inmune a los efectos de moral.", "Al Atacar: Después del ataque, tira un dado de Ataque; si el resultado es '0', el objetivo debe alejarse 1 casilla."], customCost: { gold: 28, materials: 0, valuable: 0 } }
  },
  "Dragón Negro (Neutral)": {
    basic: { atk: 5, def: 2, hp: 7, ini: 9, type: 'Volador', abilities: ["Al Atacar: Ataca 2 espacios en línea. El primer ataque se resuelve normalmente, y el segundo tiene 2 de Ataque."], customCost: { gold: 30, materials: 0, valuable: 0 } }
  },
  "Háspidos (Neutral)": {
    basic: { atk: 5, def: 2, hp: 6, ini: 9, type: 'Melee', abilities: ["Al Atacar: Coloca 1 cubo de facción sobre el objetivo. Cuando se active, retira el cubo para infligir 1 Herida."], customCost: { gold: 25, materials: 0, valuable: 0 } }
  },
  "Behemoths (Neutral)": {
    basic: { atk: 5, def: 1, hp: 8, ini: 9, type: 'Melee', abilities: ["Al Atacar: Disminuye la Defensa del objetivo en 2 (hasta un mínimo de 0). Después del ataque, pon 1 ficha de corrosión en el objetivo."], customCost: { gold: 26, materials: 0, valuable: 0 } }
  },
  "Titanes (Neutral)": {
    basic: { atk: 6, def: 2, hp: 10, ini: 10, type: 'A distancia', abilities: ["Pasiva: Ignora las penalizaciones de combate contra unidades adyacentes.", "Al Atacar: Esta unidad obtiene +2 de Ataque contra Dragones Negros."], customCost: { gold: 39, materials: 0, valuable: 0 } }
  },
  "Dragón de Hada": {
    basic: { atk: 3, def: 3, hp: 3, ini: 6, type: 'Volador', abilities: ["Volador.", "Espejo Mágico: Al recibir un hechizo, lanza el dado de combate; con un resultado de 0 o +1, devuelve el hechizo al héroe enemigo."] }
  },
  "Dragón de Óxido": {
    basic: { atk: 4, def: 3, hp: 4, ini: 5, type: 'Volador', abilities: ["Volador.", "Aliento Ácido: Reduce permanentemente la defensa del objetivo herido en 2."] }
  },
  "Dragón de Cristal": {
    basic: { atk: 4, def: 4, hp: 4, ini: 5, type: 'Melee', abilities: ["Inmune a toda magia.", "Generador de Gema: Añade +1 Gema a la reserva al final del combate."] }
  },
  "Dragón Azul": {
    basic: { atk: 5, def: 4, hp: 5, ini: 7, type: 'Volador', abilities: ["Volador.", "Pánico: Unidades enemigas adyacentes de bronce/plata no pueden activar su turno."] }
  },
  "Fénix (Neutral)": {
    basic: { atk: 6, def: 2, hp: 7, ini: 12, type: 'Volador', abilities: ["Pasivo: Una vez por combate. Cuando los PS de esta unidad se reduzcan a 0, ponlos en 1.\nPasivo: Inmunes a los Hechizos de magia de fuego."], customCost: { gold: 32, materials: 0, valuable: 0 } }
  },

  // Banco de Criaturas
  "Esqueletos (Cripta)": {
    basic: { atk: 1, def: 0, hp: 2, ini: 4, type: 'Melee', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Una vez por Combate. Cuando su vida baja a 0, ponla a 1 en su lugar."] }
  },
  "Zombis (Cripta)": {
    basic: { atk: 1, def: 0, hp: 2, ini: 3, type: 'Melee', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Si el atacante resuelve un '+1' en su dado de Ataque, gana +1 en Defensa."] }
  },
  "Grifos (Conservatorio)": {
    basic: { atk: 3, def: 0, hp: 4, ini: 8, type: 'Volador', abilities: ["Pasiva: Esta unidad puede realizar un número ilimitado de contraataques."] }
  },
  "Espectros (Cripta)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 5, type: 'Volador', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Siempre que esta unidad ataque, el enemigo debe descartar 1 carta de su mano (si es posible)."] }
  },
  "Espectros (Naufragio)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 5, type: 'Volador', abilities: ["No-muerto: Inmune a los efectos de moral.", "Pasiva: Siempre que esta unidad ataque, el enemigo debe descartar 1 carta de su mano (si es posible)."] }
  },
  "Vampiros (Cripta)": {
    basic: { atk: 2, def: 0, hp: 3, ini: 6, type: 'Volador', abilities: ["No-muerto: Inmune a los efectos de moral.", "Al Atacar: Después del ataque, elimina todas las Heridas de esta unidad."] }
  },
   "Medusas (Almacén)": {
    basic: { atk: 3, def: 0, hp: 3, ini: 6, type: 'A distancia', abilities: ["Al Atacar: Ignora el contraataque. Si esta unidad está apilada, el objetivo sufre Parálisis."] }
  },
  "Nagas (Banco)": {
    basic: { atk: 4, def: 1, hp: 5, ini: 6, type: 'Melee', abilities: ["Al Atacar: Ignora los contraataques."] }
  },
  "Dragón Negro (Utopía)": {
    basic: { atk: 5, def: 2, hp: 5, ini: 9, type: 'Volador', abilities: ["Pasiva: Mientras esta unidad esté apilada, obtiene +3 de Ataque."] }
  },
};

const FACTION_THEMES: {
  [factionId: string]: {
    primary: string;
    border: string;
    text: string;
    glow: string;
    bgGradient: string;
    badge: string;
  };
} = {
  castillo: {
    primary: 'from-sky-950 to-slate-950',
    border: 'border-sky-500/40',
    text: 'text-sky-400',
    glow: 'shadow-sky-500/15',
    bgGradient: 'radial-gradient(circle at top, #0c4a6e 0%, #030712 100%)',
    badge: 'bg-sky-950/80 border-sky-900 text-sky-400'
  },
  necropolis: {
    primary: 'from-zinc-950 to-stone-950',
    border: 'border-zinc-700/50',
    text: 'text-zinc-400',
    glow: 'shadow-zinc-500/10',
    bgGradient: 'radial-gradient(circle at top, #1e1e24 0%, #07070a 100%)',
    badge: 'bg-zinc-900/80 border-zinc-800 text-zinc-400'
  },
  mazmorra: {
    primary: 'from-purple-950 to-stone-950',
    border: 'border-purple-500/40',
    text: 'text-purple-400',
    glow: 'shadow-purple-500/15',
    bgGradient: 'radial-gradient(circle at top, #581c87 0%, #030712 100%)',
    badge: 'bg-purple-950/80 border-purple-900 text-purple-400'
  },
  murallas: {
    primary: 'from-green-950 to-stone-950',
    border: 'border-lime-500/30',
    text: 'text-lime-400',
    glow: 'shadow-lime-500/15',
    bgGradient: 'radial-gradient(circle at top, #22c55e 0%, #15803d 40%, #0c0a09 100%)',
    badge: 'bg-lime-950/80 border-lime-900 text-lime-400'
  },
  torre: {
    primary: 'from-slate-900 to-slate-950',
    border: 'border-cyan-100/35',
    text: 'text-cyan-50',
    glow: 'shadow-cyan-200/20',
    bgGradient: 'radial-gradient(circle at top, #93c5fd 0%, #1e293b 45%, #020617 100%)',
    badge: 'bg-slate-900/80 border-slate-700 text-cyan-50'
  },
  inferno: {
    primary: 'from-red-950 to-stone-950',
    border: 'border-red-500/40',
    text: 'text-red-500',
    glow: 'shadow-red-500/20',
    bgGradient: 'radial-gradient(circle at top, #991b1b 0%, #1c1917 100%)',
    badge: 'bg-red-950/80 border-red-900 text-red-400'
  },
  bastion: {
    primary: 'from-amber-950 to-stone-950',
    border: 'border-amber-600/40',
    text: 'text-amber-500',
    glow: 'shadow-amber-500/15',
    bgGradient: 'radial-gradient(circle at top, #7c2d12 0%, #1c1917 100%)',
    badge: 'bg-amber-950/80 border-amber-900 text-amber-500'
  },
  fortaleza: {
    primary: 'from-[#151c12] to-neutral-950',
    border: 'border-[#415436]/40',
    text: 'text-[#94ad82]',
    glow: 'shadow-[#415436]/15',
    bgGradient: 'radial-gradient(circle at top, #25331e 0%, #070a05 100%)',
    badge: 'bg-[#11160e]/80 border-[#25331e] text-[#94ad82]'
  },
  conflujo: {
    primary: 'from-pink-950 to-slate-950',
    border: 'border-pink-500/40',
    text: 'text-pink-400',
    glow: 'shadow-pink-500/15',
    bgGradient: 'radial-gradient(circle at top, #9d174d 0%, #090d16 100%)',
    badge: 'bg-pink-950/80 border-pink-900 text-pink-400'
  },
  cala: {
    primary: 'from-teal-950 to-slate-950',
    border: 'border-teal-500/40',
    text: 'text-teal-400',
    glow: 'shadow-teal-500/15',
    bgGradient: 'radial-gradient(circle at top, #115e59 0%, #030712 100%)',
    badge: 'bg-teal-950/80 border-teal-900 text-teal-400'
  },
  invocaciones: {
    primary: 'from-violet-950 to-indigo-950',
    border: 'border-violet-500/40',
    text: 'text-violet-400',
    glow: 'shadow-violet-500/15',
    bgGradient: 'radial-gradient(circle at top, #5c33a6 0%, #0c0a09 100%)',
    badge: 'bg-violet-950/80 border-violet-900 text-violet-400'
  },
  neutrales: {
    primary: 'from-yellow-950 to-stone-950',
    border: 'border-yellow-600/40',
    text: 'text-yellow-400',
    glow: 'shadow-yellow-500/15',
    bgGradient: 'radial-gradient(circle at top, #854d0e 0%, #1c1917 100%)',
    badge: 'bg-stone-950/85 border-yellow-900/60 text-yellow-400'
  },
  bancos: {
    primary: 'from-emerald-950 to-stone-950',
    border: 'border-emerald-500/40',
    text: 'text-emerald-400',
    glow: 'shadow-emerald-500/15',
    bgGradient: 'radial-gradient(circle at top, #065f46 0%, #0c0a09 100%)',
    badge: 'bg-stone-900/80 border-emerald-900 text-emerald-400'
  }
};;

const renderFactionWatermark = (factionId: string, className: string = "w-28 h-28"): React.JSX.Element => {
  switch (factionId) {
    case 'castillo':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Majestic castle crest/shield */}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M8 11h8M12 7v8M9 15v2h6v-2" />
          <path d="M7 8V5l5-2 5 2v3" />
        </svg>
      );
    case 'necropolis':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Gothic Skull / Reaper motif */}
          <path d="M12 2a6 6 0 0 0-6 6v4a5 5 0 0 0 3 4.5V19a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.5A5 5 0 0 0 18 12V8a6 6 0 0 0-6-6z" />
          <circle cx="10" cy="10" r="1" fill="currentColor" />
          <circle cx="14" cy="10" r="1" fill="currentColor" />
          <path d="M12 12.5l-0.5 1.5h1z" fill="currentColor" />
          <path d="M11 18v2M13 18v2" />
        </svg>
      );
    case 'mazmorra':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Dragon Eye / Wing */}
          <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 9.5l-1 2.5 1 2.5 1-2.5z" fill="currentColor" />
          <path d="M3 12c2-2 4-2 6 0M15 12c2 2 4 2 6 0" />
        </svg>
      );
    case 'murallas':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Tree of Life / Forest leaf */}
          <path d="M12 22V12M12 12l4-4M12 14l-4-4" />
          <path d="M12 2C7 2 5 6 5 10c0 4 3 6 7 7 4-1 7-3 7-7 0-4-2-8-7-8z" />
          <path d="M12 5a3 3 0 0 0-3 3c0 2 3 4 3 4s3-2 3-4a3 3 0 0 0-3-3z" />
        </svg>
      );
    case 'torre':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Alchemical magic star / wizard tower */}
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3l3 6 6 1-4.5 4.5 1 6.5-5.5-3-5.5 3 1-6.5L3 10l6-1z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case 'inferno':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Demonic Flame / Horns */}
          <path d="M12 2C8.5 2 6 5 6 9c0 4 3.5 7 6 13 2.5-6 6-9 6-13 0-4-2.5-7-6-7z" />
          <path d="M12 7c-2 0-3 1.5-3 3.5 0 2 1.5 3 3 6.5 1.5-3.5 3-4.5 3-6.5 0-2-1-3.5-3-3.5z" />
          <path d="M4 10c0-4 3-6 3-6M20 10c0-4-3-6-3-6" />
        </svg>
      );
    case 'bastion':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Brute crossed axes / savage emblem */}
          <path d="M5 19L19 5M19 19L5 5" />
          <path d="M15 5h4v4l-3-1-1-3zM5 15v4h4l-1-3-3-1z" />
          <path d="M19 15v4h-4l1-3 3-1zM5 5h4v4l-3-1-1-3z" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'fortaleza':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Swamp serpent shield / scales */}
          <path d="M12 2s7 3 7 9c0 5-4.5 8.5-7 10-2.5-1.5-7-5-7-10 0-6 7-9 7-9z" />
          <path d="M12 6c-1.5 0-2.5 1-2.5 2s1 1.5 2.5 2.5c1.5 1 2.5 1.5 2.5 3s-1 2.5-2.5 2.5" />
          <path d="M8 10h8" />
        </svg>
      );
    case 'conflujo':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Phoenix Rising */}
          <path d="M12 4a2 2 0 0 1 2 2M12 4a2 2 0 0 0-2 2" />
          <path d="M12 10C8 8 4 10 3 14c2-1 5-1 7-2M12 10c4-2 8 0 9 4-2-1-5-1-7-2" />
          <path d="M12 10v9M10 12l2 6 2-6" />
          <path d="M9 19c3 3 3 3 6 0" />
        </svg>
      );
    case 'cala':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Pirate Anchor & Sea waves */}
          <path d="M12 3v14M8 12H6a6 6 0 0 0 12 0h-2" />
          <circle cx="12" cy="3" r="1.5" />
          <path d="M6 12l-2 2M18 12l2 2M12 19.5v-2" />
          <path d="M3 21c3-1.5 3 1.5 6 0s3-1.5 6 0 3-1.5 6 0" />
        </svg>
      );
    case 'bancos':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Treasure Vault chest / bag of gold */}
          <rect x="3" y="11" width="18" height="9" rx="2" />
          <path d="M3 11a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4" />
          <path d="M12 11v3" />
          <circle cx="7" cy="15" r="1" />
          <circle cx="17" cy="15" r="1" />
        </svg>
      );
    case 'invocaciones':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Magic portal or vortex / summoning circle */}
          <circle cx="12" cy="12" r="9" strokeDasharray="4 2" />
          <circle cx="12" cy="12" r="6" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          <path d="M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case 'neutrales':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className={className} strokeLinecap="round" strokeLinejoin="round">
          {/* Crossed swords for neutrals */}
          <path d="M14.5 17.5L3 6M10 17.5L19.5 8" />
          <path d="M18 6l2 2-2 2-2-2zM6 18l-2 2h2z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
  }
};

export default function RecruitmentCalculator() {
  const [selectedFaction, setSelectedFaction] = useState('castillo');
  const [selectedTier, setSelectedTier] = useState<'bronce' | 'plata' | 'oro' | 'azul'>('bronce');
  const [selectedUnit, setSelectedUnit] = useState<BoardGameUnit | null>(null);
  const [isUpgraded, setIsUpgraded] = useState(false);

  const factions = [
    { id: 'castillo', name: 'Castillo (Castle)' },
    { id: 'necropolis', name: 'Necrópolis (Necropolis)' },
    { id: 'mazmorra', name: 'Mazmorra (Dungeon)' },
    { id: 'torre', name: 'Torre (Tower)' },
    { id: 'murallas', name: 'Murallas (Rampart)' },
    { id: 'fortaleza', name: 'Fortaleza (Fortress)' },
    { id: 'inferno', name: 'Inferno (Inferno)' },
    { id: 'bastion', name: 'Bastión (Stronghold)' },
    { id: 'conflujo', name: 'Conflujo (Conflux)' },
    { id: 'cala', name: 'Cala (Cove)' },
    { id: 'neutrales', name: 'Neutrales (Neutrals)' },
    { id: 'invocaciones', name: 'Invocaciones' },
    { id: 'bancos', name: 'Banco de Criaturas' }
  ];

  // Auto-adjust selected tier when faction changes
  useEffect(() => {
    if (selectedFaction !== 'neutrales' && selectedTier === 'azul') {
      setSelectedTier('bronce');
    }
  }, [selectedFaction, selectedTier]);

  // If we change faction and the current tier has no units for it,
  // let's auto-switch to first tier that has units.
  useEffect(() => {
    const unitsInThisTier = (FACTION_UNITS[selectedFaction] || []).filter(u => u.tier === selectedTier);
    if (unitsInThisTier.length === 0) {
      const validTiers: ('bronce' | 'plata' | 'oro' | 'azul')[] = ['bronce', 'plata', 'oro', 'azul'];
      const firstValidTier = validTiers.find(t => (FACTION_UNITS[selectedFaction] || []).some(u => u.tier === t));
      if (firstValidTier) {
        setSelectedTier(firstValidTier);
      }
    }
  }, [selectedFaction]);

  // Retrieve available units for current faction and tier
  const availableUnits = (FACTION_UNITS[selectedFaction] || []).filter(u => u.tier === selectedTier);

  // Sync selected unit when list or tier changes
  useEffect(() => {
    if (availableUnits.length > 0) {
      const exists = availableUnits.some(u => u.nameBasic === selectedUnit?.nameBasic);
      if (!exists) {
        setSelectedUnit(availableUnits[0]);
      }
    } else {
      setSelectedUnit(null);
    }
  }, [selectedFaction, selectedTier, availableUnits, selectedUnit]);

  // Get current stats & cost
  const isSingleSided = selectedFaction === 'neutrales' || selectedFaction === 'bancos';
  const effectiveUpgraded = isSingleSided ? false : isUpgraded;

  const stats: UnitStats | null = selectedUnit
    ? (UNIT_DETAILS[selectedUnit.nameBasic]?.[effectiveUpgraded ? 'elite' : 'basic'] || {
        atk: selectedUnit.level,
        def: 1,
        hp: Math.ceil(selectedUnit.level / 2),
        ini: selectedUnit.level + 2,
        type: 'Melee',
        abilities: ['Habilidades tácticas descritas en el manual de es.homm3bg.wiki.']
      })
    : null;

  const currentCostSpecs = (stats && stats.customCost)
    ? stats.customCost
    : (BASE_COSTS[selectedTier]?.[effectiveUpgraded ? 'elite' : 'basic'] || { gold: 0, materials: 0, valuable: 0 });

  // Helper to map units to images
  const getUnitImage = (unitName: string, factionId: string, level: number): string | null => {
    let baseName = unitName;
    if (unitName.includes('(')) {
      baseName = unitName.split('(')[0].trim();
    }

    // Map singular Dragón Negro to plural Dragones Negros to match Dungeon Level 7 unit
    if (baseName === 'Dragón Negro') {
      baseName = 'Dragones Negros';
    }

    // Check if the base name belongs to any faction unit
    for (const [fac, units] of Object.entries(FACTION_UNITS)) {
      if (fac === 'neutrales' || fac === 'bancos') continue;
      const found = units.find(u => u.nameBasic === baseName || (u.nameElite && u.nameElite === baseName));
      if (found) {
        return getFactionImageFilename(fac, found.level);
      }
    }

    // Handle pure neutral units
    const pureNeutralsMap: { [key: string]: string } = {
      'Golems de Oro': 'Creature_Gold_Golem_5.png',
      'Golems de Diamante': 'Creature_Diamond_Golem_6.png',
      'Paisanos': 'Creature_Peasant_1.png',
      'Hobbits': 'Creature_Halfling_(Factory).png',
      'Pícaros': 'Creature_Rogue_2.png',
      'Jabalíes': 'Creature_Boar_2.png',
      'Momias': 'Creature_Mummy_3.png',
      'Nómadas': 'Creature_Nomad_3.png',
      'Trolls': 'Creature_Troll_5.png',
      'Encantadores': 'Creature_Enchanter_6.png',
      'Tiradores': 'Creature_Sharpshooter_4.png',
      'Tiradores certeros': 'Creature_Sharpshooter_4.png',
      'Dragón de Hada': 'Creature_Faerie_Dragon_7.png',
      'Dragón de Óxido': 'Creature_Rust_Dragon_8.png',
      'Dragón de Cristal': 'Creature_Crystal_Dragon_8.png',
      'Dragón Azul': 'Creature_Azure_Dragon_8.png',
      'Fangarms': 'Creature_Fangarm_5.png',
      'Fangarm': 'Creature_Fangarm_5.png',
      'Duende': 'Creature_Leprechaun_2.png',
      'Sátiros': 'Creature_Satyr_4.png',
      'Golems de Acero': 'Creature_Steel_Golem_4.png',
      'Gólems de acero': 'Creature_Steel_Golem_4.png',
      'Elemental de aire': 'Creature_Air_Elemental_2.png',
      'Elemental de agua': 'Creature_Water_Elemental.png',
      'Elemental de fuego': 'Creature_Fire_Elemental_(HotA).png',
      'Elemental de tierra': 'Creature_Earth_Elemental.png',
      'Aves de trueno (Neutral)': 'Creature_Roc.png'
    };

    if (pureNeutralsMap[unitName]) {
      return pureNeutralsMap[unitName];
    }

    if (factionId === 'neutrales') {
      return 'Creature_Peasant_1.png';
    }

    return getFactionImageFilename(factionId, level);
  };

  const getFactionImageFilename = (factionId: string, level: number): string | null => {
    const mapping: { [key: string]: string } = {
      castillo: 'castillo',
      necropolis: 'necropolis',
      mazmorra: 'dungeon',
      murallas: 'rampart',
      torre: 'tower',
      inferno: 'inferno',
      bastion: 'bastion',
      fortaleza: 'fortaleza',
      conflujo: 'conflux',
      invocaciones: 'conflux',
      cala: 'bahia',
    };

    const prefix = mapping[factionId];
    if (!prefix) return null;
    
    const lvl = Math.min(Math.max(level, 1), 7);
    const ext = 'png';
    return `${prefix}_${lvl}.${ext}`;
  };

  const imageFilename = selectedUnit ? getUnitImage(selectedUnit.nameBasic, selectedFaction, selectedUnit.level) : null;
  const imageUrl = imageFilename 
    ? new URL(`../assets/images/units/${imageFilename}`, import.meta.url).href 
    : null;

  const theme = FACTION_THEMES[selectedFaction] || FACTION_THEMES.neutrales;

  return (
    <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 space-y-6 shadow-2xl backdrop-blur-md" id="creature-viewer">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/80 pb-4 gap-2">
        <div>
          <h2 className="text-xl font-serif text-amber-400 flex items-center gap-2">
            <Swords className="w-5 h-5 text-amber-500" />
            Visor Digital de Criaturas y Unidades
          </h2>
          <p className="text-xs text-slate-400">
            Explora las estadísticas de combate, costes, habilidades tácticas y caras de las cartas de Erathia (es.homm3bg.wiki).
          </p>
        </div>
        <span className="text-[10px] font-mono bg-slate-950 px-2.5 py-1 rounded-md text-amber-400 border border-amber-900/30 self-start sm:self-center uppercase">
          COMPENDIO DE COMBATE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Configuration Selector (Col Span 5) */}
        <div className="lg:col-span-5 bg-slate-950/40 p-5 rounded-2xl border border-slate-850/60 space-y-4">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
            <Star className="w-4.5 h-4.5 text-amber-500" />
            1. Selección de Criatura
          </h3>

          {/* Faction Grid */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">Facción o Alianza:</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {factions.map(fac => {
                const isSelected = selectedFaction === fac.id;
                return (
                  <button
                    key={fac.id}
                    onClick={() => {
                      setSelectedFaction(fac.id);
                      setIsUpgraded(false); // reset upgraded face on faction change
                    }}
                    className={`px-2 py-2 text-[10px] rounded-lg border flex items-center justify-start gap-1.5 transition cursor-pointer font-medium font-mono truncate ${
                      isSelected
                        ? `${FACTION_THEMES[fac.id]?.border || 'border-amber-500'} bg-slate-900/60 ${FACTION_THEMES[fac.id]?.text || 'text-amber-300'} font-bold shadow-lg shadow-black/80`
                        : 'bg-slate-950 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                    }`}
                  >
                    <span 
                      className={isSelected ? (FACTION_THEMES[fac.id]?.text || 'text-amber-400') : 'text-slate-500'}
                      style={{ filter: isSelected ? 'drop-shadow(0px 0px 4px currentColor)' : 'none' }}
                    >
                      {renderFactionWatermark(fac.id, "w-3.5 h-3.5 shrink-0")}
                    </span>
                    <span className="truncate">{fac.name.split(' (')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tier Selector */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">Rango (Tier):</label>
            <div className="flex gap-1.5">
              {(['bronce', 'plata', 'oro'] as const).map(t => {
                const isSelected = selectedTier === t;
                const starColor = t === 'bronce' ? 'text-[#a0522d] fill-[#a0522d]' : t === 'plata' ? 'text-slate-400 fill-slate-400' : 'text-yellow-500 fill-yellow-500';
                return (
                  <button
                    key={t}
                    onClick={() => setSelectedTier(t)}
                    className={`flex-1 py-1.5 text-[10px] uppercase font-bold tracking-wider rounded-lg border flex items-center justify-center gap-1 cursor-pointer transition ${
                      isSelected
                        ? t === 'bronce' ? 'border-amber-700 bg-amber-900/10 text-amber-500'
                        : t === 'plata' ? 'border-slate-400 bg-slate-400/10 text-slate-300'
                        : 'border-yellow-500 bg-yellow-500/10 text-yellow-300'
                        : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <Star className={`w-3 h-3 ${isSelected ? starColor : 'text-slate-600 fill-slate-700/20'}`} />
                    <span>{t}</span>
                  </button>
                );
              })}
              {selectedFaction === 'neutrales' && (
                <button
                  onClick={() => setSelectedTier('azul')}
                  className={`flex-1 py-1.5 text-[10px] uppercase font-bold tracking-wider rounded-lg border flex items-center justify-center gap-1 cursor-pointer transition ${
                    selectedTier === 'azul'
                      ? 'border-blue-500 bg-blue-500/15 text-blue-300 font-bold shadow-md'
                      : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <Star className={`w-3 h-3 ${selectedTier === 'azul' ? 'text-blue-500 fill-blue-500' : 'text-slate-600 fill-slate-700/20'}`} />
                  <span>azul</span>
                </button>
              )}
            </div>
          </div>

          {/* Unit List */}
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">Tropa / Nivel de Criatura:</label>
            {availableUnits.length > 0 ? (
              <div className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1 scrollbar-thin">
                {availableUnits.map(unit => {
                  const isSelected = selectedUnit?.nameBasic === unit.nameBasic;
                  return (
                    <button
                      key={unit.nameBasic}
                      onClick={() => setSelectedUnit(unit)}
                      className={`w-full p-2.5 rounded-xl border text-left transition cursor-pointer text-xs font-mono flex items-center justify-between ${
                        isSelected
                          ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-semibold'
                          : 'bg-slate-950 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                      }`}
                    >
                      <span className="font-medium text-slate-200">{unit.nameBasic}</span>
                      <span className="text-[10px] bg-slate-900/90 border border-slate-800 px-1.5 py-0.5 rounded text-slate-400 font-bold">
                        Niv. {unit.level}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="text-[12px] text-red-400 font-mono italic">Selecciona un rango válido.</p>
            )}
          </div>

          {/* Face of the card toggle */}
          <div className="space-y-1.5 pt-1">
            <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">Cara de la Carta (Cantidad):</label>
            <div className={isSingleSided ? "grid grid-cols-1 gap-2" : "grid grid-cols-2 gap-2"}>
              <button
                onClick={() => setIsUpgraded(false)}
                className={`py-2 text-xs rounded-lg border text-center cursor-pointer transition font-medium flex flex-col items-center justify-center gap-0.5 ${
                  !effectiveUpgraded
                    ? 'border-amber-500 bg-slate-900 text-slate-200 font-bold shadow-inner'
                    : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-350'
                }`}
              >
                <span className="text-sm">🛡️ "Unas pocas"</span>
                <span className="text-[10px] opacity-75 font-mono uppercase tracking-wider">
                  {isSingleSided ? 'Lado Único (Básico)' : 'Lado Básico'}
                </span>
              </button>
              {!isSingleSided && (
                <button
                  onClick={() => setIsUpgraded(true)}
                  className={`py-2 text-xs rounded-lg border text-center cursor-pointer transition font-medium flex flex-col items-center justify-center gap-0.5 ${
                    effectiveUpgraded
                      ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-bold shadow-md'
                      : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-350'
                  }`}
                >
                  <span className="text-sm">⚡ "Manada"</span>
                  <span className="text-[10px] opacity-75 font-mono uppercase tracking-wider">Lado Élite</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Board Game Creature Card Panel (Col Span 7) */}
        <div className="lg:col-span-7 space-y-4">
          <AnimatePresence mode="wait">
            {selectedUnit && stats && (
              <motion.div
                key={`${selectedUnit.nameBasic}-${effectiveUpgraded}`}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full rounded-2xl p-5 border relative overflow-hidden flex flex-col justify-between min-h-[460px] shadow-2xl"
                style={{
                  background: theme.bgGradient,
                  borderColor: effectiveUpgraded ? '#d97706' : '#475569'
                }}
              >
                {/* Visual Faction Emblem Background watermark */}
                <div className="absolute right-0 bottom-0 text-[180px] opacity-5 pointer-events-none font-bold select-none leading-none">
                  {effectiveUpgraded ? '⚡' : '🛡️'}
                </div>

                {/* Top Card Bar */}
                <div className="flex items-start justify-between border-b border-slate-700/40 pb-3 z-10">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border ${theme.badge}`}>
                        {factions.find(f => f.id === selectedFaction)?.name.split(' (')[0] || selectedFaction}
                      </span>
                      <span className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border flex items-center gap-1.5 ${
                        effectiveUpgraded 
                          ? 'bg-amber-950/40 text-amber-300 border-amber-500/50' 
                          : 'bg-slate-950/40 text-slate-300 border-slate-700/60'
                      }`}>
                        <Star className={`w-3 h-3 shrink-0 ${
                          selectedTier === 'bronce' ? 'text-[#a0522d] fill-[#a0522d]'
                          : selectedTier === 'plata' ? 'text-slate-400 fill-slate-400'
                          : selectedTier === 'oro' ? 'text-yellow-500 fill-yellow-500'
                          : 'text-blue-500 fill-blue-500'
                        }`} />
                        <span>Nivel {selectedUnit.level}</span>
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif font-extrabold text-white mt-1 tracking-wide uppercase drop-shadow-md">
                      {effectiveUpgraded ? selectedUnit.nameElite : selectedUnit.nameBasic}
                    </h3>
                  </div>

                  {!isSingleSided && (
                    <button
                      onClick={() => setIsUpgraded(!isUpgraded)}
                      className="p-1.5 bg-slate-950/60 hover:bg-slate-950 border border-slate-800 rounded-lg text-slate-400 hover:text-amber-400 transition cursor-pointer flex items-center gap-1.5 text-[10px] font-mono uppercase"
                      title="Voltear carta"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Voltear
                    </button>
                  )}
                </div>

                {/* Creature Artwork Image */}
                <div className={`my-3 relative w-full h-44 rounded-xl overflow-hidden border flex items-center justify-center z-10 group/img shadow-inner transition-all duration-300 ${
                  effectiveUpgraded 
                    ? 'bg-slate-950/40 border-amber-500/50 holo-foil-effect shadow-[inset_0_0_20px_rgba(217,119,6,0.25)]' 
                    : 'bg-slate-950/80 border-slate-800/80'
                }`}>
                  {/* Subtle radial gradient background pattern or holo shine */}
                  {effectiveUpgraded ? (
                    <div className="holo-foil-shine" />
                  ) : (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.3)_0%,transparent_70%)]" />
                  )}

                  {/* Faction Emblem in Top-Left Corner */}
                  <div 
                    className={`absolute top-2 left-2 pointer-events-none z-20 select-none ${theme.text} opacity-60 transition-opacity duration-300 group-hover/img:opacity-85`}
                    style={{ filter: 'drop-shadow(0px 1px 3px rgba(0,0,0,0.85)) drop-shadow(0px 0px 4px currentColor)' }}
                  >
                    {renderFactionWatermark(selectedFaction, "w-24 h-24")}
                  </div>

                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={effectiveUpgraded ? selectedUnit.nameElite : selectedUnit.nameBasic} 
                      className={`w-auto h-[90%] object-contain select-none pointer-events-none transition-transform duration-500 group-hover/img:scale-105 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-10 relative ${
                        effectiveUpgraded ? 'contrast-[1.05] brightness-[1.03]' : ''
                      }`}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-500 text-center p-4 z-10 relative">
                      <span className="text-3xl mb-1 filter drop-shadow">⚓</span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Imagen no disponible</span>
                    </div>
                  )}
                  {/* Subtle face badge indicator on artwork */}
                  <div className={`absolute bottom-2 left-2 z-20 px-2 py-0.5 rounded text-[10px] font-mono uppercase border transition-colors duration-300 ${
                    effectiveUpgraded 
                      ? 'bg-amber-950/90 text-amber-300 border-amber-700/50' 
                      : 'bg-slate-950/85 text-slate-300 border-slate-800'
                  }`}>
                    {effectiveUpgraded ? '# MANADA' : '# UNAS POCAS'}
                  </div>
                </div>

                {/* Central Body: Stats Grid */}
                <div className="grid grid-cols-4 gap-3 my-4 z-10">
                  {/* Atk */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                    <Swords className="w-5 h-5 text-red-400 mb-1" />
                    <span className="text-[10px] text-slate-400 font-mono uppercase leading-none">Ataque</span>
                    <span className="text-xl font-mono font-extrabold text-slate-100 mt-1">{stats.atk}</span>
                  </div>

                  {/* Def */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                    <Shield className="w-5 h-5 text-blue-400 mb-1" />
                    <span className="text-[10px] text-slate-400 font-mono uppercase leading-none">Defensa</span>
                    <span className="text-xl font-mono font-extrabold text-slate-100 mt-1">{stats.def}</span>
                  </div>

                  {/* HP */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                    <Heart className="w-5 h-5 text-rose-500 mb-1" />
                    <span className="text-[10px] text-slate-400 font-mono uppercase leading-none">Vida</span>
                    <span className="text-xl font-mono font-extrabold text-slate-100 mt-1">{stats.hp}</span>
                  </div>

                  {/* Initiative */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                    <Zap className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="text-[10px] text-slate-400 font-mono uppercase leading-none">Iniciativa</span>
                    <span className="text-xl font-mono font-extrabold text-slate-100 mt-1">{stats.ini}</span>
                  </div>
                </div>

                {/* Reach & Combat Mode info */}
                <div className="bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/60 flex items-center justify-between text-xs z-10 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">
                      {stats.type === 'Volador' ? '🦅' : stats.type === 'A distancia' ? '🏹' : '⚔️'}
                    </span>
                    <div>
                      <span className="font-bold text-slate-200 block text-[12px] font-mono leading-tight">
                        Unidad {stats.type}
                      </span>
                      <span className="text-[10px] text-slate-500 leading-none block">
                        {stats.type === 'Volador' ? 'Vuela e ignora obstáculos en el tablero'
                          : stats.type === 'A distancia' ? 'Ataca a distancia (Penalizado adyacente)'
                          : 'Ataque cuerpo a cuerpo regular'}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    Rango: {stats.type}
                  </span>
                </div>

                {/* Special Abilities List */}
                <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 space-y-3 z-10 flex-1">
                  <div className="flex items-center gap-1.5 border-b border-slate-800 pb-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-amber-400">
                      Habilidades y Rasgos Especiales
                    </span>
                  </div>

                  {stats.abilities.length > 0 ? (
                    <div className="space-y-2 max-h-[140px] overflow-y-auto scrollbar-thin pr-1 text-xs">
                      {stats.abilities.map((ability, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-300">
                          <span className="text-amber-500 font-bold mt-0.5">•</span>
                          <p className="leading-relaxed text-[12px]">{ability}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[10px] text-slate-500 font-mono italic">
                      Sin habilidades especiales activas en esta cara de la carta.
                    </p>
                  )}
                </div>

                {/* Cost Section & Info Footer */}
                <div className="border-t border-slate-700/40 pt-3 mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 z-10">
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400 font-mono block">COSTE DE RECLUTAMIENTO:</span>
                    <div className="flex gap-2 items-center text-xs font-bold font-mono">
                      {currentCostSpecs.gold > 0 && (
                        <span className="bg-amber-950/60 border border-amber-900/40 text-amber-400 px-2.5 py-1 rounded-lg">
                          🟡 {currentCostSpecs.gold} Oro
                        </span>
                      )}
                      {currentCostSpecs.materials > 0 && (
                        <span className="bg-slate-950/80 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-lg">
                          🪵 {currentCostSpecs.materials} Mineral
                        </span>
                      )}
                      {currentCostSpecs.valuable > 0 && (
                        <span className="bg-purple-950/60 border border-purple-900/40 text-purple-400 px-2.5 py-1 rounded-lg">
                          🔮 {currentCostSpecs.valuable} Valioso
                        </span>
                      )}
                      {(currentCostSpecs.gold + currentCostSpecs.materials + currentCostSpecs.valuable) < 1 && (
                        <span className="text-[10px] text-slate-400 font-mono block">
                          Sin Coste
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 leading-relaxed font-mono text-left sm:text-right">
                    <span>
                      {selectedFaction === 'neutrales' ? 'Mercenario / Mapa'
                        : selectedFaction === 'bancos' ? 'Banco de Criaturas'
                        : 'Alistado en Ciudad'}
                    </span>
                    <span className="block text-[10px] text-slate-500">
                      {selectedFaction === 'neutrales' ? 'No requiere vivienda de ciudad'
                        : selectedFaction === 'bancos' ? 'Defensores de criptas, utopías o conservatorios'
                        : `Requiere vivienda de ${selectedTier.toUpperCase()} construida`}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Rules Box */}
      <div className="bg-slate-950/60 rounded-2xl p-4 border border-slate-850 flex gap-4 text-xs text-slate-300 leading-relaxed">
        <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-slate-200">Reglas Oficiales del Tablero de Combate (es.homm3bg.wiki):</strong>
          <p>
            • <strong>Cara de la Carta:</strong> Al jugar la cara "Unas pocas" (basic), la unidad posee menores estadísticas. Puedes mejorarla en cualquier momento a "Manada" (elite) pagando la diferencia de coste en tu ciudad correspondiente.
          </p>
          <p>
            • <strong>Iniciativa y Activación:</strong> Durante la fase de combate, las criaturas se activan en orden descendente de su iniciativa (⚡). En caso de empate, el atacante original tiene prioridad de golpe (alternativamente).
          </p>
          <p>
            • <strong>Contraataque y Represalia:</strong> Cada unidad puede contraatacar de forma automática una vez por ronda al ser golpeada en cuerpo a cuerpo, a menos que el atacante posea el rasgo de <strong>Sin Represalia</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
