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
  nameElite: string;
  tier: 'bronce' | 'plata' | 'oro' | 'azul';
}

interface FactionsUnitsData {
  [factionId: string]: BoardGameUnit[];
}

const FACTION_UNITS: FactionsUnitsData = {
  castillo: [
    { level: 1, nameBasic: 'Piqueros', nameElite: 'Alabarderos', tier: 'bronce' },
    { level: 2, nameBasic: 'Arqueros', nameElite: 'Tiradores', tier: 'bronce' },
    { level: 3, nameBasic: 'Grifos', nameElite: 'Grifos Reales', tier: 'bronce' },
    { level: 4, nameBasic: 'Espadachines', nameElite: 'Cruzados', tier: 'plata' },
    { level: 5, nameBasic: 'Monjes', nameElite: 'Fanáticos', tier: 'plata' },
    { level: 6, nameBasic: 'Caballeros', nameElite: 'Campeones', tier: 'oro' },
    { level: 7, nameBasic: 'Ángeles', nameElite: 'Arcángeles', tier: 'oro' }
  ],
  necropolis: [
    { level: 1, nameBasic: 'Esqueletos', nameElite: 'Esqueletos con Escudo', tier: 'bronce' },
    { level: 2, nameBasic: 'Zombis', nameElite: 'Zombis Voraces', tier: 'bronce' },
    { level: 3, nameBasic: 'Fantasmas', nameElite: 'Espectros', tier: 'bronce' },
    { level: 4, nameBasic: 'Vampiros', nameElite: 'Señores Vampiros', tier: 'plata' },
    { level: 5, nameBasic: 'Liches', nameElite: 'Liches de Poder', tier: 'plata' },
    { level: 6, nameBasic: 'Caballeros del Terror', nameElite: 'Caballeros de la Muerte', tier: 'oro' },
    { level: 7, nameBasic: 'Dragones de Hueso', nameElite: 'Dragones Fantasma', tier: 'oro' }
  ],
  mazmorra: [
    { level: 1, nameBasic: 'Trogloditas', nameElite: 'Trogloditas Infernales', tier: 'bronce' },
    { level: 2, nameBasic: 'Arpías', nameElite: 'Arpías Brujas', tier: 'bronce' },
    { level: 3, nameBasic: 'Contempladores', nameElite: 'Ojos Maléficos', tier: 'bronce' },
    { level: 4, nameBasic: 'Medusas', nameElite: 'Reinas Medusa', tier: 'plata' },
    { level: 5, nameBasic: 'Minotauros', nameElite: 'Reyes Minotauro', tier: 'plata' },
    { level: 6, nameBasic: 'Mantícoras', nameElite: 'Quimeras', tier: 'oro' },
    { level: 6, nameBasic: 'Mantícoras (Alternativa)', nameElite: 'Mantícoras (Alternativa)', tier: 'oro' },
    { level: 7, nameBasic: 'Dragones Negros', nameElite: 'Dragones Negros', tier: 'oro' }
  ],
  rampart: [
    { level: 1, nameBasic: 'Centauros', nameElite: 'Centauros Líderes', tier: 'bronce' },
    { level: 2, nameBasic: 'Enanos', nameElite: 'Enanos de Batalla', tier: 'bronce' },
    { level: 3, nameBasic: 'Elfos', nameElite: 'Grandes Elfos', tier: 'bronce' },
    { level: 4, nameBasic: 'Pegasos', nameElite: 'Pegasos Plateados', tier: 'plata' },
    { level: 5, nameBasic: 'Dendroides', nameElite: 'Dendroides Guardianes', tier: 'plata' },
    { level: 6, nameBasic: 'Unicornios', nameElite: 'Unicornios de Guerra', tier: 'oro' },
    { level: 7, nameBasic: 'Dragones Verdes', nameElite: 'Dragones Dorados', tier: 'oro' }
  ],
  torre: [
    { level: 1, nameBasic: 'Gremlins', nameElite: 'Gremlins Maestros', tier: 'bronce' },
    { level: 2, nameBasic: 'Gárgolas de Piedra', nameElite: 'Gárgolas de Obsidiana', tier: 'bronce' },
    { level: 3, nameBasic: 'Golems de Hierro', nameElite: 'Golems de Acero', tier: 'bronce' },
    { level: 4, nameBasic: 'Magos', nameElite: 'Archimagos', tier: 'plata' },
    { level: 5, nameBasic: 'Genios', nameElite: 'Genios Amos', tier: 'plata' },
    { level: 6, nameBasic: 'Nagas', nameElite: 'Nagas Reina', tier: 'oro' },
    { level: 7, nameBasic: 'Gigantes', nameElite: 'Titanes', tier: 'oro' }
  ],
  infierno: [
    { level: 1, nameBasic: 'Diablillos', nameElite: 'Duendecillos', tier: 'bronce' },
    { level: 2, nameBasic: 'Gogs', nameElite: 'Magogs', tier: 'bronce' },
    { level: 3, nameBasic: 'Sabuesos', nameElite: 'Cerberos', tier: 'bronce' },
    { level: 4, nameBasic: 'Demonios', nameElite: 'Demonios del Averno', tier: 'plata' },
    { level: 5, nameBasic: 'Demonios del Abismo', nameElite: 'Señores del Abismo', tier: 'plata' },
    { level: 6, nameBasic: 'Efreet', nameElite: 'Efreet Sultanes', tier: 'oro' },
    { level: 7, nameBasic: 'Diablos', nameElite: 'Archidiablos', tier: 'oro' }
  ],
  stronghold: [
    { level: 1, nameBasic: 'Goblins', nameElite: 'Hobgoblins', tier: 'bronce' },
    { level: 2, nameBasic: 'Jinetes de Lobo', nameElite: 'Jinetes de Élite', tier: 'bronce' },
    { level: 3, nameBasic: 'Orcos', nameElite: 'Jefes Orco', tier: 'bronce' },
    { level: 4, nameBasic: 'Ogros', nameElite: 'Ogros Magos', tier: 'plata' },
    { level: 5, nameBasic: 'Rocs', nameElite: 'Rocs del Trueno', tier: 'plata' },
    { level: 6, nameBasic: 'Cíclopes', nameElite: 'Cíclopes Reyes', tier: 'oro' },
    { level: 7, nameBasic: 'Behemoths', nameElite: 'Behemoths Ancestrales', tier: 'oro' }
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
  confluencia: [
    { level: 1, nameBasic: 'Duendes', nameElite: 'Duendes Armados', tier: 'bronce' },
    { level: 2, nameBasic: 'Elementales de Aire', nameElite: 'Elementales de Tormenta', tier: 'bronce' },
    { level: 3, nameBasic: 'Elementales de Agua', nameElite: 'Elementales de Hielo', tier: 'bronce' },
    { level: 4, nameBasic: 'Elementales de Fuego', nameElite: 'Elementales de Energía', tier: 'plata' },
    { level: 5, nameBasic: 'Elementales de Tierra', nameElite: 'Elementales de Magma', tier: 'plata' },
    { level: 6, nameBasic: 'Elementales Mentales', nameElite: 'Elementales de Magia', tier: 'oro' },
    { level: 7, nameBasic: 'Fénix', nameElite: 'Fénix Sagrados', tier: 'oro' }
  ],
  cove: [
    { level: 1, nameBasic: 'Ninfas', nameElite: 'Nereidas', tier: 'bronce' },
    { level: 2, nameBasic: 'Marineros', nameElite: 'Corsarios', tier: 'bronce' },
    { level: 3, nameBasic: 'Piratas', nameElite: 'Bucaneros', tier: 'bronce' },
    { level: 4, nameBasic: 'Regentes del Mar', nameElite: 'Regentes del Abismo', tier: 'plata' },
    { level: 5, nameBasic: 'Aves de Tormenta', nameElite: 'Aves del Abismo', tier: 'plata' },
    { level: 6, nameBasic: 'Serpientes Marinas', nameElite: 'Haspid', tier: 'oro' },
    { level: 7, nameBasic: 'Leviatanes', nameElite: 'Leviatanes Antiguos', tier: 'oro' }
  ],
  neutrales: [
    { level: 1, nameBasic: 'Pícaros', nameElite: 'Pícaros Emboscadores', tier: 'bronce' },
    { level: 2, nameBasic: 'Nómadas', nameElite: 'Nómadas del Desierto', tier: 'bronce' },
    { level: 3, nameBasic: 'Jabalíes', nameElite: 'Colmillos de Hierro', tier: 'bronce' },
    { level: 4, nameBasic: 'Golems de Oro', nameElite: 'Golems de Diamante', tier: 'plata' },
    { level: 5, nameBasic: 'Licántropos', nameElite: 'Licántropos Alfas', tier: 'plata' },
    { level: 6, nameBasic: 'Enanos de Hierro', nameElite: 'Enanos de Hierro', tier: 'oro' },
    { level: 6, nameBasic: 'Mantícora (Neutral)', nameElite: 'Mantícora (Neutral)', tier: 'oro' },
    { level: 8, nameBasic: 'Dragón de Hada', nameElite: 'Dragón de Hada Antiguo', tier: 'azul' },
    { level: 8, nameBasic: 'Dragón de Óxido', nameElite: 'Dragón de Óxido Voraz', tier: 'azul' },
    { level: 8, nameBasic: 'Dragón de Cristal', nameElite: 'Dragón de Cristal Puro', tier: 'azul' },
    { level: 8, nameBasic: 'Dragón Azul', nameElite: 'Dragón Azul Legendario', tier: 'azul' },
    { level: 7, nameBasic: 'Dragón Negro (Neutral)', nameElite: 'Dragón Negro (Neutral)', tier: 'azul' },
    { level: 7, nameBasic: 'Dragón Negro (Utopía)', nameElite: 'Dragón Negro (Utopía)', tier: 'azul' }
  ]
};

const BASE_COSTS = {
  bronce: {
    basic: { gold: 2, materials: 0, valuable: 0 },
    elite: { gold: 3, materials: 0, valuable: 0 }
  },
  plata: {
    basic: { gold: 4, materials: 0, valuable: 0 },
    elite: { gold: 5, materials: 1, valuable: 0 }
  },
  oro: {
    basic: { gold: 7, materials: 0, valuable: 1 },
    elite: { gold: 9, materials: 0, valuable: 2 }
  },
  azul: {
    basic: { gold: 12, materials: 0, valuable: 2 },
    elite: { gold: 15, materials: 0, valuable: 3 }
  }
};

const UNIT_DETAILS: {
  [nameBasic: string]: {
    basic: UnitStats;
    elite: UnitStats;
  }
} = {
  // Castillo
  "Piqueros": {
    basic: { atk: 1, def: 1, hp: 1, ini: 3, type: 'Melee', abilities: ["Carga: +1 de Ataque al avanzar 2+ hexágonos."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 4, type: 'Melee', abilities: ["Carga: +1 de Ataque.", "Sin Represalia: Las unidades enemigas de bronce no contraatacan."] }
  },
  "Arqueros": {
    basic: { atk: 1, def: 0, hp: 1, ini: 5, type: 'A distancia', abilities: ["A distancia: Penalización cuerpo a cuerpo si hay enemigos adyacentes."] },
    elite: { atk: 2, def: 0, hp: 1, ini: 6, type: 'A distancia', abilities: ["A distancia.", "Doble Disparo: Realiza dos ataques a distancia por activación contra el mismo o distintos objetivos."] }
  },
  "Grifos": {
    basic: { atk: 1, def: 1, hp: 2, ini: 4, type: 'Volador', abilities: ["Volador.", "Contraataque Infinito: Puede contraatacar cualquier cantidad de veces por ronda."] },
    elite: { atk: 2, def: 1, hp: 2, ini: 5, type: 'Volador', abilities: ["Volador.", "Contraataque Infinito."] }
  },
  "Espadachines": {
    basic: { atk: 2, def: 2, hp: 2, ini: 3, type: 'Melee', abilities: ["Escudo: Reduce el daño recibido en 1."] },
    elite: { atk: 3, def: 2, hp: 2, ini: 4, type: 'Melee', abilities: ["Escudo: Reduce el daño recibido en 1.", "Doble Golpe: Ataca dos veces en combate cuerpo a cuerpo."] }
  },
  "Monjes": {
    basic: { atk: 2, def: 1, hp: 2, ini: 5, type: 'A distancia', abilities: ["A distancia."] },
    elite: { atk: 3, def: 1, hp: 2, ini: 6, type: 'A distancia', abilities: ["A distancia.", "Sin Penalización Melee: No sufre penalizaciones en combates cuerpo a cuerpo."] }
  },
  "Caballeros": {
    basic: { atk: 3, def: 2, hp: 3, ini: 4, type: 'Melee', abilities: ["Carga Temible: +2 de Ataque al avanzar 2+ hexágonos."] },
    elite: { atk: 4, def: 2, hp: 3, ini: 5, type: 'Melee', abilities: ["Carga Excepcional: +3 de Ataque.", "Caballería: +1 Punto de Iniciativa."] }
  },
  "Ángeles": {
    basic: { atk: 4, def: 3, hp: 4, ini: 6, type: 'Volador', abilities: ["Volador.", "Slayer: +1 de Daño contra no-muertos y demonios."] },
    elite: { atk: 5, def: 4, hp: 4, ini: 7, type: 'Volador', abilities: ["Volador.", "Resurrección: Revive una unidad aliada caída de Bronce o Plata por completo (una vez por combate)."] }
  },

  // Necrópolis
  "Esqueletos": {
    basic: { atk: 1, def: 0, hp: 1, ini: 3, type: 'Melee', abilities: ["No-muerto: Inmune a la baja moral y efectos de mente."] },
    elite: { atk: 1, def: 1, hp: 1, ini: 4, type: 'Melee', abilities: ["No-muerto.", "Escudo Óseo: Reduce el daño recibido en 1."] }
  },
  "Zombis": {
    basic: { atk: 1, def: 1, hp: 1, ini: 2, type: 'Melee', abilities: ["No-muerto.", "Enfermedad: El objetivo golpeado reduce su ataque en 1 en su próximo turno."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 3, type: 'Melee', abilities: ["No-muerto.", "Enfermedad.", "Regeneración: Se cura de forma pasiva 1 herida al inicio de su activación."] }
  },
  "Fantasmas": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'Volador', abilities: ["No-muerto.", "Volador.", "Espantoso: Reduce la iniciativa de enemigos adyacentes de bronce en 1."] },
    elite: { atk: 2, def: 1, hp: 2, ini: 5, type: 'Volador', abilities: ["No-muerto.", "Volador.", "Espantoso.", "Drena Maná: Al herir a un enemigo, drena 1 punto de Maná de su héroe."] }
  },
  "Vampiros": {
    basic: { atk: 2, def: 1, hp: 2, ini: 5, type: 'Volador', abilities: ["No-muerto.", "Volador.", "Sin Represalia: Ataca sin provocar contraataques."] },
    elite: { atk: 3, def: 2, hp: 2, ini: 6, type: 'Volador', abilities: ["No-muerto.", "Volador.", "Sin Represalia.", "Robo de Vida: Cura 1 herida del Vampiro por cada ataque con éxito."] }
  },
  "Liches": {
    basic: { atk: 3, def: 1, hp: 2, ini: 4, type: 'A distancia', abilities: ["No-muerto.", "A distancia.", "Nube de Muerte: El ataque inflige daño colateral en cruz."] },
    elite: { atk: 4, def: 2, hp: 2, ini: 5, type: 'A distancia', abilities: ["No-muerto.", "A distancia.", "Nube de Muerte.", "Sin Penalización Melee: No sufre penalizaciones cuerpo a cuerpo."] }
  },
  "Caballeros del Terror": {
    basic: { atk: 3, def: 2, hp: 3, ini: 4, type: 'Melee', abilities: ["No-muerto.", "Maldición: Al golpear, obliga al objetivo a infligir daño mínimo en su próximo ataque."] },
    elite: { atk: 4, def: 3, hp: 3, ini: 5, type: 'Melee', abilities: ["No-muerto.", "Maldición.", "Golpe Mortal: 20% de probabilidad de infligir el doble de daño físico."] }
  },
  "Dragones de Hueso": {
    basic: { atk: 4, def: 2, hp: 4, ini: 5, type: 'Volador', abilities: ["No-muerto.", "Volador.", "Dread: -1 a la moral de todas las unidades enemigas."] },
    elite: { atk: 5, def: 3, hp: 4, ini: 6, type: 'Volador', abilities: ["No-muerto.", "Volador.", "Dread.", "Envejecimiento: Reduce permanentemente la HP máxima del objetivo en 1."] }
  },

  // Mazmorra
  "Trogloditas": {
    basic: { atk: 1, def: 1, hp: 1, ini: 3, type: 'Melee', abilities: ["Inmune a Ceguera: Totalmente inmune a hechizos o efectos de ceguera."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 4, type: 'Melee', abilities: ["Inmune a Ceguera.", "Carga de Trog: +1 Ataque si se mueve en línea recta."] }
  },
  "Arpías": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'Volador', abilities: ["Volador.", "Ataca y Regresa: Tras golpear, vuelve a su posición inicial obligatoriamente."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 5, type: 'Volador', abilities: ["Volador.", "Ataca y Regresa.", "Sin Represalia: Ataca sin recibir contraataque."] }
  },
  "Contempladores": {
    basic: { atk: 1, def: 1, hp: 2, ini: 4, type: 'A distancia', abilities: ["A distancia."] },
    elite: { atk: 2, def: 1, hp: 2, ini: 5, type: 'A distancia', abilities: ["A distancia.", "Sin Penalización Melee."] }
  },
  "Medusas": {
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'A distancia', abilities: ["A distancia.", "Mirada de Piedra: 20% de probabilidad de petrificar al objetivo."] },
    elite: { atk: 3, def: 2, hp: 2, ini: 5, type: 'A distancia', abilities: ["A distancia.", "Mirada de Piedra.", "Sin Penalización Melee."] }
  },
  "Minotauros": {
    basic: { atk: 2, def: 2, hp: 2, ini: 4, type: 'Melee', abilities: ["Moral Alta: Siempre cuenta con moral positiva (+1 de ataque pasivo)."] },
    elite: { atk: 3, def: 2, hp: 2, ini: 5, type: 'Melee', abilities: ["Moral Alta.", "Bloqueo: Una vez por ronda, ignora por completo el primer punto de daño recibido."] }
  },
  "Mantícoras": {
    basic: { atk: 5, def: 1, hp: 6, ini: 7, type: 'Volador', abilities: [], customCost: { gold: 10, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 1, hp: 6, ini: 11, type: 'Volador', abilities: ["Al Atacar: Para este ataque, ignora la defensa de la unidad objetivo."], customCost: { gold: 18, materials: 0, valuable: 1 } }
  },
  "Mantícoras (Alternativa)": {
    basic: { atk: 4, def: 1, hp: 7, ini: 8, type: 'Volador', abilities: ["Al Atacar: Coloca 1 cubo de facción sobre el objetivo. Cuando se active, retira el cubo para infligir 1 herida."], customCost: { gold: 12, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 2, hp: 7, ini: 11, type: 'Volador', abilities: ["Pasiva: Después de cada ataque, coloca 1 cubo de facción sobre el objetivo. Cuando se active, retira el cubo para infligir 1 herida."], customCost: { gold: 18, materials: 0, valuable: 1 } }
  },
  "Dragones Negros": {
    basic: { atk: 6, def: 3, hp: 8, ini: 11, type: 'Volador', abilities: ["Pasiva: Reduce el daño recibido por Hechizos en 2 hasta un mínimo de 0."], customCost: { gold: 19, materials: 0, valuable: 1 } },
    elite: { atk: 8, def: 3, hp: 8, ini: 11, type: 'Volador', abilities: ["Pasiva: Ignora cualquier efecto de Hechizo y el daño de Especialidad."], customCost: { gold: 19, materials: 0, valuable: 1 } }
  },

  // Rampart (Murallas)
  "Centauros": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'Melee', abilities: ["Veloz: Gana bonificación al cargar."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 5, type: 'Melee', abilities: ["Veloz.", "Carga de Centauro: +1 de Ataque al avanzar."] }
  },
  "Enanos": {
    basic: { atk: 1, def: 2, hp: 1, ini: 3, type: 'Melee', abilities: ["Resistencia: 20% de probabilidad de ignorar hechizos dañinos."] },
    elite: { atk: 2, def: 2, hp: 2, ini: 4, type: 'Melee', abilities: ["Resistencia mejorada: 40% de probabilidad de ignorar hechizos dañinos."] }
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
    basic: { atk: 3, def: 2, hp: 3, ini: 4, type: 'Melee', abilities: ["Mirada Cegadora: 20% de probabilidad de cegar al objetivo herido."] },
    elite: { atk: 4, def: 2, hp: 3, ini: 5, type: 'Melee', abilities: ["Mirada Cegadora.", "Aura de Resistencia: Aliados adyacentes ganan +1 de Defensa."] }
  },
  "Dragones Verdes": {
    basic: { atk: 4, def: 3, hp: 4, ini: 5, type: 'Volador', abilities: ["Volador.", "Aliento Ácido.", "Inmune a hechizos de nivel 1-3."] },
    elite: { atk: 5, def: 4, hp: 4, ini: 6, type: 'Volador', abilities: ["Volador.", "Aliento Ácido.", "Inmune a hechizos de nivel 1-4."] }
  },

  // Torre
  "Gremlins": {
    basic: { atk: 1, def: 0, hp: 1, ini: 3, type: 'Melee', abilities: [] },
    elite: { atk: 1, def: 0, hp: 1, ini: 4, type: 'A distancia', abilities: ["A distancia.", "Reparador: Repara 1 Golem destruido una vez por combate."] }
  },
  "Gárgolas de Piedra": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'Volador', abilities: ["Gárgola: Inmune a venenos e infecciones."] },
    elite: { atk: 2, def: 2, hp: 1, ini: 5, type: 'Volador', abilities: ["Gárgola.", "Piel de Piedra: +1 Defensa."] }
  },
  "Golems de Hierro": {
    basic: { atk: 1, def: 2, hp: 2, ini: 3, type: 'Melee', abilities: ["Constructo: Inmune a efectos de moral y mente.", "Resistencia de Hierro: Reduce el daño de hechizos en 1."] },
    elite: { atk: 2, def: 2, hp: 2, ini: 4, type: 'Melee', abilities: ["Constructo.", "Resistencia de Acero: Reduce el daño de hechizos en 2."] }
  },
  "Magos": {
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'A distancia', abilities: ["A distancia.", "Canalizador: Reduce el coste de los hechizos del héroe aliado en 1 de Maná."] },
    elite: { atk: 3, def: 2, hp: 2, ini: 5, type: 'A distancia', abilities: ["A distancia.", "Canalizador.", "Sin Penalización de Distancia."] }
  },
  "Genios": {
    basic: { atk: 2, def: 1, hp: 2, ini: 5, type: 'Volador', abilities: ["Volador.", "Lanzador de Hechizos: Lanza un buff aleatorio al azar una vez por combate."] },
    elite: { atk: 3, def: 2, hp: 2, ini: 6, type: 'Volador', abilities: ["Volador.", "Lanzador de Hechizos.", "Odio a los Efreet: +1 Daño contra Efreet."] }
  },
  "Nagas": {
    basic: { atk: 3, def: 2, hp: 3, ini: 4, type: 'Melee', abilities: ["Sin Represalia: Ataca sin recibir contraataques."] },
    elite: { atk: 4, def: 2, hp: 3, ini: 5, type: 'Melee', abilities: ["Sin Represalia.", "Golpe Brutal: El enemigo no puede reducir este daño mediante defensa."] }
  },
  "Gigantes": {
    basic: { atk: 4, def: 3, hp: 4, ini: 5, type: 'Melee', abilities: ["Inmune a control mental."] },
    elite: { atk: 5, def: 3, hp: 4, ini: 6, type: 'A distancia', abilities: ["A distancia (Titán).", "Inmune a control mental.", "Odio a los Dragones Negros: +2 Daño contra Dragones Negros."] }
  },

  // Infierno
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
    basic: { atk: 1, def: 0, hp: 1, ini: 3, type: 'Melee', abilities: ["Frágil."] },
    elite: { atk: 1, def: 0, hp: 1, ini: 4, type: 'Melee', abilities: ["Frágil.", "Frenesí: +1 Ataque si corre en línea recta."] }
  },
  "Jinetes de Lobo": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'Melee', abilities: ["Doble Asalto: Ataca dos veces por activación."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 5, type: 'Melee', abilities: ["Doble Asalto."] }
  },
  "Orcos": {
    basic: { atk: 1, def: 1, hp: 1, ini: 3, type: 'A distancia', abilities: ["A distancia."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 4, type: 'A distancia', abilities: ["A distancia.", "Furia Orco: Ataca de nuevo si tiene moral positiva."] }
  },
  "Ogros": {
    basic: { atk: 2, def: 2, hp: 2, ini: 3, type: 'Melee', abilities: ["Piel Gruesa: HP máxima aumentada en 1."] },
    elite: { atk: 3, def: 2, hp: 3, ini: 4, type: 'Melee', abilities: ["Piel Gruesa.", "Ogro Mago: Lanza hechizo de Sed de Sangre a un aliado una vez por combate."] }
  },
  "Rocs": {
    basic: { atk: 2, def: 1, hp: 2, ini: 5, type: 'Volador', abilities: ["Volador."] },
    elite: { atk: 3, def: 2, hp: 2, ini: 6, type: 'Volador', abilities: ["Volador.", "Golpe de Trueno: 20% de probabilidad de paralizar al enemigo con un rayo."] }
  },
  "Cíclopes": {
    basic: { atk: 3, def: 2, hp: 3, ini: 4, type: 'A distancia', abilities: ["A distancia.", "Lanzar Rocas: Destruye un muro o puerta de asedio enemiga una vez por combate."] },
    elite: { atk: 4, def: 2, hp: 3, ini: 5, type: 'A distancia', abilities: ["A distancia.", "Lanzar Rocas.", "Doble Daño contra estructuras de asedio."] }
  },
  "Behemoths": {
    basic: { atk: 4, def: 2, hp: 4, ini: 5, type: 'Melee', abilities: ["Desgarrar: Reduce la defensa del objetivo en un 50% al atacar."] },
    elite: { atk: 5, def: 2, hp: 4, ini: 6, type: 'Melee', abilities: ["Desgarrar Ancestral: Ignora por completo la defensa del enemigo."] }
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
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'Melee', abilities: ["Mirada Petrificante: 20% de probabilidad de petrificar al objetivo."] },
    elite: { atk: 3, def: 2, hp: 2, ini: 5, type: 'Melee', abilities: ["Mirada Petrificante.", "Piel de Piedra Escamosa: +1 Defensa."] }
  },
  "Gorgonas": {
    basic: { atk: 2, def: 2, hp: 2, ini: 4, type: 'Melee', abilities: ["Mirada de la Muerte: Probabilidad de derrotar a un soldado extra de bronce/plata."] },
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

  // Confluencia
  "Duendes": {
    basic: { atk: 1, def: 0, hp: 1, ini: 3, type: 'Melee', abilities: [] },
    elite: { atk: 1, def: 1, hp: 1, ini: 4, type: 'Melee', abilities: ["Inmune a hechizos de control mental."] }
  },
  "Elementales de Aire": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'A distancia', abilities: ["Inmune a magia de aire."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 5, type: 'A distancia', abilities: ["Inmune a magia de aire.", "Lanza Hechizo Rayo una vez por combate."] }
  },
  "Elementales de Agua": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'A distancia', abilities: ["Inmune a magia de agua."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 5, type: 'A distancia', abilities: ["Inmune a magia de agua.", "Lanza Hechizo Flecha de Hielo una vez por combate."] }
  },
  "Elementales de Fuego": {
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'Melee', abilities: ["Inmune a magia de fuego."] },
    elite: { atk: 3, def: 1, hp: 2, ini: 5, type: 'Melee', abilities: ["Inmune a magia de fuego.", "Escudo de Fuego: Devuelve 1 de daño cuerpo a cuerpo."] }
  },
  "Elementales de Tierra": {
    basic: { atk: 2, def: 2, hp: 2, ini: 3, type: 'Melee', abilities: ["Inmune a magia de tierra.", "Piel de Roca pasiva."] },
    elite: { atk: 3, def: 3, hp: 2, ini: 4, type: 'Melee', abilities: ["Inmune a magia de tierra.", "Cuerpo de Magma: HP máxima aumentada en 1."] }
  },
  "Elementales Mentales": {
    basic: { atk: 3, def: 2, hp: 3, ini: 5, type: 'Melee', abilities: ["Ataque en Abanico: Golpea a 3 enemigos adyacentes.", "Sin Represalia."] },
    elite: { atk: 4, def: 2, hp: 3, ini: 6, type: 'Melee', abilities: ["Ataque en Abanico.", "Sin Represalia.", "Inmune a toda magia de nivel 1."] }
  },
  "Fénix": {
    basic: { atk: 4, def: 3, hp: 4, ini: 6, type: 'Volador', abilities: ["Volador.", "Aliento Flamígero.", "Renacimiento: 50% de probabilidad de revivir con 1 HP una vez por combate al morir."] },
    elite: { atk: 5, def: 4, hp: 4, ini: 7, type: 'Volador', abilities: ["Volador.", "Aliento Flamígero.", "Renacimiento Divino: Revive automáticamente al 100% de HP una vez por combate."] }
  },

  // Bahía
  "Ninfas": {
    basic: { atk: 1, def: 0, hp: 1, ini: 4, type: 'Volador', abilities: ["Inmune a magia de agua."] },
    elite: { atk: 1, def: 1, hp: 1, ini: 5, type: 'Volador', abilities: ["Inmune a magia de agua.", "Escudo de Náyade: Lanza escudo de agua para absorber 1 de daño."] }
  },
  "Marineros": {
    basic: { atk: 1, def: 1, hp: 1, ini: 3, type: 'Melee', abilities: ["Bonificación Costera: +1 de ataque en losetas de agua."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 4, type: 'Melee', abilities: ["Bonificación Costera.", "Saqueador: Otorga +1 de Oro tras derrotar a una unidad enemiga."] }
  },
  "Piratas": {
    basic: { atk: 1, def: 0, hp: 1, ini: 4, type: 'A distancia', abilities: ["A distancia."] },
    elite: { atk: 2, def: 0, hp: 1, ini: 5, type: 'A distancia', abilities: ["A distancia.", "Disparo Preciso: Ignora cobertura de muros o estructuras."] }
  },
  "Regentes del Mar": {
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'Melee', abilities: ["Hechicería: Lanza hechizo de Debilidad una vez por combate."] },
    elite: { atk: 3, def: 1, hp: 2, ini: 5, type: 'Melee', abilities: ["Hechicería.", "Invocador Marino: Invoca un elemental de agua aliado al morir."] }
  },
  "Aves de Tormenta": {
    basic: { atk: 2, def: 1, hp: 2, ini: 5, type: 'Volador', abilities: ["Volador."] },
    elite: { atk: 3, def: 2, hp: 2, ini: 6, type: 'Volador', abilities: ["Volador.", "Tormenta de Viento: Ataca e inflige daño a unidades adyacentes de forma colateral."] }
  },
  "Serpientes Marinas": {
    basic: { atk: 3, def: 2, hp: 3, ini: 4, type: 'Melee', abilities: ["Devorar: Gana +1 de Ataque tras derrotar a una unidad enemiga."] },
    elite: { atk: 4, def: 2, hp: 3, ini: 5, type: 'Melee', abilities: ["Devorar.", "Frenesí Sangriento: +2 de Ataque si está dañada."] }
  },
  "Leviatanes": {
    basic: { atk: 4, def: 3, hp: 4, ini: 5, type: 'Melee', abilities: ["Inmune a control mental.", "Embestida Abisal: Ataca empujando al enemigo 1 hexágono."] },
    elite: { atk: 5, def: 3, hp: 4, ini: 6, type: 'Melee', abilities: ["Inmune a control mental.", "Embestida Abisal.", "Regeneración: Se cura de forma pasiva 2 heridas al activarse."] }
  },

  // Neutrales
  "Pícaros": {
    basic: { atk: 1, def: 0, hp: 1, ini: 4, type: 'Melee', abilities: ["Sin Represalia."] },
    elite: { atk: 1, def: 1, hp: 1, ini: 5, type: 'Melee', abilities: ["Sin Represalia.", "Robo de Recursos: Al derrotar un enemigo, otorga 1 recurso común aleatorio."] }
  },
  "Nómadas": {
    basic: { atk: 1, def: 1, hp: 1, ini: 4, type: 'Melee', abilities: ["Veloz: Ignora ciertas restricciones."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 5, type: 'Melee', abilities: ["Veloz.", "Buscador de Caminos: Ignora penalizaciones de movimiento por desierto."] }
  },
  "Jabalíes": {
    basic: { atk: 1, def: 1, hp: 1, ini: 3, type: 'Melee', abilities: ["Carga: +1 de Ataque tras avanzar."] },
    elite: { atk: 2, def: 1, hp: 1, ini: 4, type: 'Melee', abilities: ["Carga de Jabalí: +2 de Ataque tras avanzar."] }
  },
  "Golems de Oro": {
    basic: { atk: 2, def: 2, hp: 2, ini: 3, type: 'Melee', abilities: ["Constructo.", "Resistencia de Oro: Reduce el daño de hechizos enemigos en 2."] },
    elite: { atk: 3, def: 2, hp: 2, ini: 4, type: 'Melee', abilities: ["Constructo.", "Resistencia de Diamante: Inmune a hechizos dañinos de nivel 1-3."] }
  },
  "Licántropos": {
    basic: { atk: 2, def: 1, hp: 2, ini: 4, type: 'Melee', abilities: ["Infección: Enemigo herido se convierte en Licántropo si es derrotado."] },
    elite: { atk: 3, def: 1, hp: 2, ini: 5, type: 'Melee', abilities: ["Infección.", "Regeneración Lunar: Se cura de forma pasiva 1 herida al activarse."] }
  },
  "Enanos de Hierro": {
    basic: { atk: 2, def: 2, hp: 2, ini: 3, type: 'Melee', abilities: ["Resistencia Enana: 30% de probabilidad de ignorar hechizos."] },
    elite: { atk: 3, def: 3, hp: 2, ini: 4, type: 'Melee', abilities: ["Resistencia Enana.", "Escudo de Hierro pasivo."] }
  },
  "Mantícora (Neutral)": {
    basic: { atk: 4, def: 1, hp: 7, ini: 8, type: 'Volador', abilities: ["Pasiva: En los resultados 0 o +1 del dado de ataque del enemigo, gana +1 Defensa."], customCost: { gold: 18, materials: 0, valuable: 0 } },
    elite: { atk: 4, def: 1, hp: 7, ini: 8, type: 'Volador', abilities: ["Pasiva: En los resultados 0 o +1 del dado de ataque del enemigo, gana +1 Defensa."], customCost: { gold: 18, materials: 0, valuable: 0 } }
  },
  "Dragón de Hada": {
    basic: { atk: 3, def: 3, hp: 3, ini: 6, type: 'Volador', abilities: ["Volador.", "Espejo Mágico: 50% de probabilidad de devolver hechizos enemigos al lanzador."] },
    elite: { atk: 4, def: 3, hp: 3, ini: 7, type: 'Volador', abilities: ["Volador.", "Espejo Mágico.", "Lanza Hechizo aleatorio de nivel 1-3 una vez por ronda."] }
  },
  "Dragón de Óxido": {
    basic: { atk: 4, def: 3, hp: 4, ini: 5, type: 'Volador', abilities: ["Volador.", "Aliento Ácido: Reduce permanentemente la defensa del objetivo herido en 2."] },
    elite: { atk: 5, def: 3, hp: 4, ini: 6, type: 'Volador', abilities: ["Volador.", "Aliento Ácido.", "Corrosión Extrema: +2 de Daño físico adicional."] }
  },
  "Dragón de Cristal": {
    basic: { atk: 4, def: 4, hp: 4, ini: 5, type: 'Melee', abilities: ["Inmune a toda magia.", "Generador de Gema: Añade +1 Gema a la reserva al final del combate."] },
    elite: { atk: 5, def: 4, hp: 4, ini: 6, type: 'Melee', abilities: ["Inmune a toda magia.", "Generador de Gema.", "Aliento de Cristal: Ataque doble en abanico."] }
  },
  "Dragón Azul": {
    basic: { atk: 5, def: 4, hp: 5, ini: 7, type: 'Volador', abilities: ["Volador.", "Pánico: Unidades enemigas adyacentes de bronce/plata no pueden activar su turno."] },
    elite: { atk: 6, def: 5, hp: 5, ini: 8, type: 'Volador', abilities: ["Volador.", "Pánico.", "Aliento Gélido: Congela al objetivo (pierde su próxima activación)."] }
  },
  "Dragón Negro (Neutral)": {
    basic: { atk: 5, def: 2, hp: 7, ini: 9, type: 'Volador', abilities: ["Al Atacar: Ataca 2 espacios en línea. El primer ataque se resuelve normalmente, y el segundo tiene 2 de Ataque."], customCost: { gold: 30, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 2, hp: 7, ini: 9, type: 'Volador', abilities: ["Al Atacar: Ataca 2 espacios en línea. El primer ataque se resuelve normalmente, y el segundo tiene 2 de Ataque."], customCost: { gold: 30, materials: 0, valuable: 0 } }
  },
  "Dragón Negro (Utopía)": {
    basic: { atk: 5, def: 2, hp: 5, ini: 9, type: 'Volador', abilities: ["Pasiva: Mientras esta unidad esté apilada, obtiene +3 de Ataque."], customCost: { gold: 0, materials: 0, valuable: 0 } },
    elite: { atk: 5, def: 2, hp: 5, ini: 9, type: 'Volador', abilities: ["Pasiva: Mientras esta unidad esté apilada, obtiene +3 de Ataque."], customCost: { gold: 0, materials: 0, valuable: 0 } }
  }
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
    primary: 'from-blue-900 to-indigo-950',
    border: 'border-blue-700/80',
    text: 'text-blue-300',
    glow: 'shadow-blue-500/20',
    bgGradient: 'radial-gradient(circle at top, #1e3a8a 0%, #0f172a 100%)',
    badge: 'bg-blue-950/80 border-blue-800 text-blue-300'
  },
  necropolis: {
    primary: 'from-zinc-900 to-slate-950',
    border: 'border-emerald-900/60',
    text: 'text-emerald-400',
    glow: 'shadow-emerald-500/10',
    bgGradient: 'radial-gradient(circle at top, #022c22 0%, #090d16 100%)',
    badge: 'bg-emerald-950/80 border-emerald-900 text-emerald-400'
  },
  mazmorra: {
    primary: 'from-purple-950 to-fuchsia-950',
    border: 'border-purple-800/70',
    text: 'text-purple-300',
    glow: 'shadow-purple-500/20',
    bgGradient: 'radial-gradient(circle at top, #3b0764 0%, #0f172a 100%)',
    badge: 'bg-purple-950/80 border-purple-800 text-purple-300'
  },
  rampart: {
    primary: 'from-emerald-900 to-teal-950',
    border: 'border-emerald-800/75',
    text: 'text-emerald-300',
    glow: 'shadow-emerald-500/20',
    bgGradient: 'radial-gradient(circle at top, #064e3b 0%, #022c22 100%)',
    badge: 'bg-emerald-950/80 border-emerald-900 text-emerald-300'
  },
  torre: {
    primary: 'from-cyan-900 to-sky-950',
    border: 'border-cyan-700/80',
    text: 'text-cyan-300',
    glow: 'shadow-cyan-500/20',
    bgGradient: 'radial-gradient(circle at top, #164e63 0%, #083344 100%)',
    badge: 'bg-cyan-950/80 border-cyan-850 text-cyan-300'
  },
  infierno: {
    primary: 'from-red-950 to-amber-950',
    border: 'border-red-800/80',
    text: 'text-red-400',
    glow: 'shadow-red-500/20',
    bgGradient: 'radial-gradient(circle at top, #7f1d1d 0%, #1c1917 100%)',
    badge: 'bg-red-950/80 border-red-900 text-red-400'
  },
  stronghold: {
    primary: 'from-amber-900 to-orange-950',
    border: 'border-amber-800/70',
    text: 'text-amber-400',
    glow: 'shadow-amber-500/20',
    bgGradient: 'radial-gradient(circle at top, #78350f 0%, #1c1917 100%)',
    badge: 'bg-amber-950/80 border-amber-900 text-amber-400'
  },
  fortaleza: {
    primary: 'from-teal-900 to-emerald-950',
    border: 'border-teal-800/80',
    text: 'text-teal-350',
    glow: 'shadow-teal-500/20',
    bgGradient: 'radial-gradient(circle at top, #115e59 0%, #042f2e 100%)',
    badge: 'bg-teal-950/80 border-teal-900 text-teal-350'
  },
  confluencia: {
    primary: 'from-indigo-900 to-violet-950',
    border: 'border-indigo-800/80',
    text: 'text-indigo-300',
    glow: 'shadow-indigo-500/25',
    bgGradient: 'radial-gradient(circle at top, #312e81 0%, #0f172a 100%)',
    badge: 'bg-indigo-950/80 border-indigo-900 text-indigo-300'
  },
  cove: {
    primary: 'from-sky-900 to-slate-950',
    border: 'border-sky-800/85',
    text: 'text-sky-300',
    glow: 'shadow-sky-500/20',
    bgGradient: 'radial-gradient(circle at top, #0c4a6e 0%, #082f49 100%)',
    badge: 'bg-sky-950/80 border-sky-900 text-sky-300'
  },
  neutrales: {
    primary: 'from-yellow-950 to-stone-900',
    border: 'border-yellow-800/80',
    text: 'text-amber-200',
    glow: 'shadow-amber-500/15',
    bgGradient: 'radial-gradient(circle at top, #451a03 0%, #1c1917 100%)',
    badge: 'bg-stone-950/85 border-amber-900/60 text-amber-200'
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
    { id: 'rampart', name: 'Murallas (Rampart)' },
    { id: 'torre', name: 'Torre (Tower)' },
    { id: 'infierno', name: 'Infierno (Inferno)' },
    { id: 'stronghold', name: 'Bastión (Stronghold)' },
    { id: 'fortaleza', name: 'Fortaleza (Fortress)' },
    { id: 'confluencia', name: 'Confluencia (Conflux)' },
    { id: 'cove', name: 'Bahía (Cove)' },
    { id: 'neutrales', name: 'Neutrales (Neutrals)' }
  ];

  // Auto-adjust selected tier when faction changes
  useEffect(() => {
    if (selectedFaction !== 'neutrales' && selectedTier === 'azul') {
      setSelectedTier('bronce');
    }
  }, [selectedFaction, selectedTier]);

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
  const stats: UnitStats | null = selectedUnit
    ? (UNIT_DETAILS[selectedUnit.nameBasic]?.[isUpgraded ? 'elite' : 'basic'] || {
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
    : (BASE_COSTS[selectedTier]?.[isUpgraded ? 'elite' : 'basic'] || { gold: 0, materials: 0, valuable: 0 });
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
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-1.5">
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
                    className={`px-1.5 py-2 text-[10px] rounded-lg border text-center transition cursor-pointer font-medium font-mono truncate ${
                      isSelected
                        ? 'border-amber-500 bg-amber-500/15 text-amber-300 font-bold shadow-md shadow-amber-950/40'
                        : 'bg-slate-950 border-slate-900 text-slate-400 hover:text-slate-200 hover:border-slate-800'
                    }`}
                  >
                    {fac.name.split(' (')[0]}
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
                return (
                  <button
                    key={t}
                    onClick={() => setSelectedTier(t)}
                    className={`flex-1 py-1.5 text-[10px] uppercase font-bold tracking-wider rounded-lg border text-center cursor-pointer transition ${
                      isSelected
                        ? t === 'bronce' ? 'border-amber-700 bg-amber-900/10 text-amber-500'
                        : t === 'plata' ? 'border-slate-400 bg-slate-400/10 text-slate-300'
                        : 'border-yellow-500 bg-yellow-500/10 text-yellow-300'
                        : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
              {selectedFaction === 'neutrales' && (
                <button
                  onClick={() => setSelectedTier('azul')}
                  className={`flex-1 py-1.5 text-[10px] uppercase font-bold tracking-wider rounded-lg border text-center cursor-pointer transition ${
                    selectedTier === 'azul'
                      ? 'border-cyan-500 bg-cyan-500/15 text-cyan-300 font-bold shadow-md'
                      : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  azul
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
                      <span className="text-[9px] bg-slate-900/90 border border-slate-800 px-1.5 py-0.5 rounded text-slate-400 font-bold">
                        Niv. {unit.level}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="text-[11px] text-red-400 font-mono italic">Selecciona un rango válido.</p>
            )}
          </div>

          {/* Face of the card toggle */}
          <div className="space-y-1.5 pt-1">
            <label className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block">Cara de la Carta (Cantidad):</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setIsUpgraded(false)}
                className={`py-2 text-xs rounded-lg border text-center cursor-pointer transition font-medium flex flex-col items-center justify-center gap-0.5 ${
                  !isUpgraded
                    ? 'border-amber-500 bg-slate-900 text-slate-200 font-bold shadow-inner'
                    : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-350'
                }`}
              >
                <span className="text-sm">🛡️ "Unas pocas"</span>
                <span className="text-[9px] opacity-75 font-mono uppercase tracking-wider">Lado Básico</span>
              </button>
              <button
                onClick={() => setIsUpgraded(true)}
                className={`py-2 text-xs rounded-lg border text-center cursor-pointer transition font-medium flex flex-col items-center justify-center gap-0.5 ${
                  isUpgraded
                    ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-bold shadow-md'
                    : 'bg-slate-950 border-slate-900 text-slate-500 hover:text-slate-350'
                }`}
              >
                <span className="text-sm">⚡ "Manada"</span>
                <span className="text-[9px] opacity-75 font-mono uppercase tracking-wider">Lado Élite</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Board Game Creature Card Panel (Col Span 7) */}
        <div className="lg:col-span-7 space-y-4">
          <AnimatePresence mode="wait">
            {selectedUnit && stats && (
              <motion.div
                key={`${selectedUnit.nameBasic}-${isUpgraded}`}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full rounded-2xl p-5 border relative overflow-hidden flex flex-col justify-between min-h-[460px] shadow-2xl"
                style={{
                  background: theme.bgGradient,
                  borderColor: isUpgraded ? '#d97706' : '#475569'
                }}
              >
                {/* Visual Faction Emblem Background watermark */}
                <div className="absolute right-0 bottom-0 text-[180px] opacity-5 pointer-events-none font-bold select-none leading-none">
                  🛡️
                </div>

                {/* Top Card Bar */}
                <div className="flex items-start justify-between border-b border-slate-700/40 pb-3 z-10">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border ${theme.badge}`}>
                        {selectedFaction}
                      </span>
                      <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-md border ${
                        selectedTier === 'bronce' ? 'bg-amber-950/40 text-amber-500 border-amber-900/30'
                        : selectedTier === 'plata' ? 'bg-slate-800 text-slate-300 border-slate-700'
                        : selectedTier === 'oro' ? 'bg-yellow-950/40 text-yellow-500 border-yellow-900/30'
                        : 'bg-cyan-950/40 text-cyan-400 border-cyan-900/30'
                      }`}>
                        Tier {selectedTier} • Nivel {selectedUnit.level}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif font-extrabold text-white mt-1 tracking-wide uppercase drop-shadow-md">
                      {isUpgraded ? selectedUnit.nameElite : selectedUnit.nameBasic}
                    </h3>
                  </div>

                  <button
                    onClick={() => setIsUpgraded(!isUpgraded)}
                    className="p-1.5 bg-slate-950/60 hover:bg-slate-950 border border-slate-800 rounded-lg text-slate-400 hover:text-amber-400 transition cursor-pointer flex items-center gap-1.5 text-[10px] font-mono uppercase"
                    title="Voltear carta"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Voltear
                  </button>
                </div>

                {/* Central Body: Stats Grid */}
                <div className="grid grid-cols-4 gap-3 my-4 z-10">
                  {/* Atk */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                    <Swords className="w-5 h-5 text-red-400 mb-1" />
                    <span className="text-[9px] text-slate-400 font-mono uppercase leading-none">Ataque</span>
                    <span className="text-xl font-mono font-extrabold text-slate-100 mt-1">{stats.atk}</span>
                  </div>

                  {/* Def */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                    <Shield className="w-5 h-5 text-blue-400 mb-1" />
                    <span className="text-[9px] text-slate-400 font-mono uppercase leading-none">Defensa</span>
                    <span className="text-xl font-mono font-extrabold text-slate-100 mt-1">{stats.def}</span>
                  </div>

                  {/* HP */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                    <Heart className="w-5 h-5 text-rose-500 mb-1" />
                    <span className="text-[9px] text-slate-400 font-mono uppercase leading-none">Vida</span>
                    <span className="text-xl font-mono font-extrabold text-slate-100 mt-1">{stats.hp}</span>
                  </div>

                  {/* Initiative */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 flex flex-col items-center justify-center text-center">
                    <Zap className="w-5 h-5 text-amber-400 mb-1" />
                    <span className="text-[9px] text-slate-400 font-mono uppercase leading-none">Iniciativa</span>
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
                      <span className="font-bold text-slate-200 block text-[11px] font-mono leading-tight">
                        Unidad {stats.type}
                      </span>
                      <span className="text-[9px] text-slate-500 leading-none block">
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
                          <p className="leading-relaxed text-[11px]">{ability}</p>
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
                    <span className="text-[9px] text-slate-400 font-mono block">COSTE DE RECLUTAMIENTO:</span>
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
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-400 leading-relaxed font-mono text-left sm:text-right">
                    <span>Alistado en Ciudad</span>
                    <span className="block text-[8px] text-slate-500">
                      Requiere vivienda de {selectedTier.toUpperCase()} construida
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
            • <strong>Iniciativa y Activación:</strong> Durante la fase de combate, las criaturas se activan en orden descendente de su iniciativa (⚡). En caso de empate, el atacante original tiene prioridad de golpe.
          </p>
          <p>
            • <strong>Contraataque y Represalia:</strong> Cada unidad puede contraatacar de forma automática una vez por ronda al ser golpeada en cuerpo a cuerpo, a menos que el atacante posea el rasgo místico de <strong>Sin Represalia</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
