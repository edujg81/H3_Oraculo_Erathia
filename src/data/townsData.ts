export interface ResourceCost {
  gold: number;
  materials?: number;
  valuables?: number;
}

export interface Building {
  name: string;
  cost: ResourceCost;
  requirements?: string[];
  benefit: string;
  isStarting?: boolean;
}

export interface TownData {
  factionId: string;
  factionName: string;
  townName: string;
  lore: string;
  startingBuildings: Building[];
  commonBuildings: {
    cityHall: Building;
    capitol: Building;
    marketplace: Building;
    resourceSilo: Building;
    mageGuilds: Building[]; // Levels 1 to 4 (or 5)
    citadel: Building;
    castle: Building;
  };
  dwellings: {
    bronze: {
      name: string;
      unit: string;
      upgradedName: string;
      upgradedUnit: string;
      cost: ResourceCost;
    };
    silver: {
      name: string;
      unit: string;
      upgradedName: string;
      upgradedUnit: string;
      baseCost: ResourceCost;
      upgradeCost: ResourceCost;
    };
    gold: {
      name: string;
      unit: string;
      upgradedName: string;
      upgradedUnit: string;
      baseCost: ResourceCost;
      upgradeCost: ResourceCost;
    };
  };
  uniqueBuilding: Building;
  grailBuilding: Building;
}

export const townsData: Record<string, TownData> = {
  castillo: {
    factionId: 'castillo',
    factionName: 'Castillo (Castle)',
    townName: 'Portal de la Gloria',
    lore: 'Una magnífica fortaleza medieval guiada por el honor, la fe y la rectitud militar. Sus ejércitos combinan infantería disciplinada, arqueros infalibles, caballeros veloces y celestiales arcángeles.',
    startingBuildings: [
      { name: 'Ayuntamiento (Town Hall)', cost: { gold: 0 }, benefit: 'Edificio inicial. Produce +10 de Oro en cada Fase de Recursos.', isStarting: true },
      { name: 'Fuerte (Fort)', cost: { gold: 0 }, benefit: 'Edificio inicial. Habilita la defensa básica de la ciudad y el reclutamiento de unidades de Bronce.', isStarting: true },
      { name: 'Morada de Bronce (Base)', cost: { gold: 0 }, benefit: 'Permite reclutar Alabarderos y Arqueros básicos.', isStarting: true }
    ],
    commonBuildings: {
      cityHall: {
        name: 'Cabildo (City Hall)',
        cost: { gold: 10, materials: 1 },
        requirements: ['Ayuntamiento'],
        benefit: 'Incrementa la producción de tu ciudad a +15 de Oro en cada Fase de Recursos.'
      },
      capitol: {
        name: 'Capitolio (Capitol)',
        cost: { gold: 15, materials: 2, valuables: 1 },
        requirements: ['Cabildo'],
        benefit: 'Incrementa la producción de tu ciudad al máximo de +20 de Oro en cada Fase de Recursos. Límite: Solo uno por jugador.'
      },
      marketplace: {
        name: 'Mercado (Marketplace)',
        cost: { gold: 5 },
        benefit: 'Habilita el comercio de recursos. Permite cambiar 2 Materiales por 1 Valioso, o 1 Valioso por 1 Material + 3 de Oro.'
      },
      resourceSilo: {
        name: 'Silo de Recursos',
        cost: { gold: 5 },
        requirements: ['Mercado'],
        benefit: 'Produce automáticamente +1 Material (Madera/Mineral) en cada Fase de Recursos.'
      },
      mageGuilds: [
        { name: 'Cofradía de Magos Nivel 1', cost: { gold: 5, materials: 1 }, benefit: 'Permite comprar y equipar hechizos de Nivel 1.' },
        { name: 'Cofradía de Magos Nivel 2', cost: { gold: 5, materials: 1, valuables: 1 }, requirements: ['Cofradía Nivel 1'], benefit: 'Permite comprar y equipar hechizos de Nivel 2.' },
        { name: 'Cofradía de Magos Nivel 3', cost: { gold: 10, materials: 2, valuables: 1 }, requirements: ['Cofradía Nivel 2'], benefit: 'Permite comprar y equipar hechizos de Nivel 3.' },
        { name: 'Cofradía de Magos Nivel 4', cost: { gold: 15, materials: 2, valuables: 2 }, requirements: ['Cofradía Nivel 3'], benefit: 'Permite comprar y equipar hechizos de Nivel 4.' }
      ],
      citadel: {
        name: 'Ciudadela (Citadel)',
        cost: { gold: 5, materials: 2 },
        requirements: ['Fuerte'],
        benefit: 'Proporciona defensa adicional a la ciudad frente a asedios y habilita la construcción de la Morada de Plata.'
      },
      castle: {
        name: 'Castillo (Castle)',
        cost: { gold: 10, materials: 3, valuables: 1 },
        requirements: ['Ciudadela'],
        benefit: 'Maximiza los muros defensivos de la ciudad y habilita la construcción de la Morada de Oro.'
      }
    },
    dwellings: {
      bronze: {
        name: 'Cuerpo de Guardia (Morada de Bronce)',
        unit: 'Alabarderos / Arqueros',
        upgradedName: 'Cuerpo de Guardia Mejorado',
        upgradedUnit: 'Alabarderos / Arqueros de Élite',
        cost: { gold: 5, materials: 1 }
      },
      silver: {
        name: 'Bastión de Grifos (Morada de Plata)',
        unit: 'Grifos / Cruzados / Monjes',
        upgradedName: 'Bastión de Grifos Mejorado',
        upgradedUnit: 'Grifos / Cruzados / Monjes de Élite',
        baseCost: { gold: 10, materials: 2 },
        upgradeCost: { gold: 5, materials: 1 }
      },
      gold: {
        name: 'Portal de la Gloria (Morada de Oro)',
        unit: 'Caballeros / Ángeles',
        upgradedName: 'Portal de la Gloria Mejorado',
        upgradedUnit: 'Caballeros / Ángeles de Élite',
        baseCost: { gold: 15, materials: 3, valuables: 2 },
        upgradeCost: { gold: 10, materials: 2, valuables: 1 }
      }
    },
    uniqueBuilding: {
      name: 'Caballerizas (Stables)',
      cost: { gold: 5 },
      requirements: ['Mercado'],
      benefit: 'Establecimiento que adiestra caballos veloces. Al inicio de cada ronda de exploración en el mapa, tu Héroe Principal gana +1 Punto de Movimiento (PM) adicional.'
    },
    grailBuilding: {
      name: 'Coloso de la Lealtad (Colossus)',
      cost: { gold: 0, valuables: 0 },
      requirements: ['Grial desenterrado'],
      benefit: 'Estructura legendaria del Grial. Genera +20 de Oro adicional por turno. Además, concede +2 de Moral permanente a todos tus héroes y aumenta un +1 adicional a la defensa de tus ejércitos.'
    }
  },
  necropolis: {
    factionId: 'necropolis',
    factionName: 'Necrópolis (Necropolis)',
    townName: 'Tumba de las Almas',
    lore: 'Un reino lúgubre de ultratumba gobernado por nigromantes y vampiros. Sus fuerzas inmunes a la moral alzan ejércitos inagotables de esqueletos, zombis, y espectrales dragones de hueso.',
    startingBuildings: [
      { name: 'Ayuntamiento (Town Hall)', cost: { gold: 0 }, benefit: 'Edificio inicial. Produce +10 de Oro en cada Fase de Recursos.', isStarting: true },
      { name: 'Fuerte (Fort)', cost: { gold: 0 }, benefit: 'Edificio inicial. Habilita la defensa básica de la ciudad y el reclutamiento de unidades de Bronce.', isStarting: true },
      { name: 'Morada de Bronce (Base)', cost: { gold: 0 }, benefit: 'Permite reclutar Esqueletos y Zombis básicos.', isStarting: true }
    ],
    commonBuildings: {
      cityHall: {
        name: 'Cabildo (City Hall)',
        cost: { gold: 10, materials: 1 },
        requirements: ['Ayuntamiento'],
        benefit: 'Incrementa la producción de tu ciudad a +15 de Oro en cada Fase de Recursos.'
      },
      capitol: {
        name: 'Capitolio (Capitol)',
        cost: { gold: 15, materials: 2, valuables: 1 },
        requirements: ['Cabildo'],
        benefit: 'Incrementa la producción de tu ciudad al máximo de +20 de Oro en cada Fase de Recursos. Límite: Solo uno por jugador.'
      },
      marketplace: {
        name: 'Mercado (Marketplace)',
        cost: { gold: 5 },
        benefit: 'Habilita el comercio de recursos. Permite cambiar 2 Materiales por 1 Valioso, o 1 Valioso por 1 Material + 3 de Oro.'
      },
      resourceSilo: {
        name: 'Silo de Recursos',
        cost: { gold: 5 },
        requirements: ['Mercado'],
        benefit: 'Produce automáticamente +1 Objeto de Valor (Gemas/Azufre/Mercury/Cristal) en cada Fase de Recursos.'
      },
      mageGuilds: [
        { name: 'Cofradía de Magos Nivel 1', cost: { gold: 5, materials: 1 }, benefit: 'Permite comprar y equipar hechizos de Nivel 1.' },
        { name: 'Cofradía de Magos Nivel 2', cost: { gold: 5, materials: 1, valuables: 1 }, requirements: ['Cofradía Nivel 1'], benefit: 'Permite comprar y equipar hechizos de Nivel 2.' },
        { name: 'Cofradía de Magos Nivel 3', cost: { gold: 10, materials: 2, valuables: 1 }, requirements: ['Cofradía Nivel 2'], benefit: 'Permite comprar y equipar hechizos de Nivel 3.' },
        { name: 'Cofradía de Magos Nivel 4', cost: { gold: 15, materials: 2, valuables: 2 }, requirements: ['Cofradía Nivel 3'], benefit: 'Permite comprar y equipar hechizos de Nivel 4.' },
        { name: 'Cofradía de Magos Nivel 5', cost: { gold: 20, materials: 3, valuables: 3 }, requirements: ['Cofradía Nivel 4'], benefit: 'Permite comprar y equipar hechizos de Nivel 5 (Escuela de Tierra o Nigromancia).' }
      ],
      citadel: {
        name: 'Ciudadela (Citadel)',
        cost: { gold: 5, materials: 2 },
        requirements: ['Fuerte'],
        benefit: 'Proporciona defensa adicional a la ciudad frente a asedios y habilita la construcción de la Morada de Plata.'
      },
      castle: {
        name: 'Castillo (Castle)',
        cost: { gold: 10, materials: 3, valuables: 1 },
        requirements: ['Ciudadela'],
        benefit: 'Maximiza los muros defensivos de la ciudad y habilita la construcción de la Morada de Oro.'
      }
    },
    dwellings: {
      bronze: {
        name: 'Excavación (Morada de Bronce)',
        unit: 'Esqueletos / Zombis',
        upgradedName: 'Excavación Mejorada',
        upgradedUnit: 'Esqueletos / Zombis de Élite',
        cost: { gold: 5, materials: 1 }
      },
      silver: {
        name: 'Mansión Maldita (Morada de Plata)',
        unit: 'Fantasmas / Vampiros / Liches',
        upgradedName: 'Mansión Maldita Mejorada',
        upgradedUnit: 'Fantasmas / Vampiros / Liches de Élite',
        baseCost: { gold: 10, materials: 2 },
        upgradeCost: { gold: 5, materials: 1 }
      },
      gold: {
        name: 'Mausoleo del Dragón (Morada de Oro)',
        unit: 'Caballeros de la muerte / Dragones de hueso',
        upgradedName: 'Mausoleo del Dragón Mejorado',
        upgradedUnit: 'Caballeros de la muerte / Dragones de hueso de Élite',
        baseCost: { gold: 15, materials: 3, valuables: 2 },
        upgradeCost: { gold: 10, materials: 2, valuables: 1 }
      }
    },
    uniqueBuilding: {
      name: 'Amplificador de nigromancia (Necromancy Amplifier)',
      cost: { gold: 5 },
      requirements: ['Mercado'],
      benefit: 'Un monolito de energía oscura. Siempre que tu héroe gane una batalla contra ejércitos neutrales de nivel Bronce, puedes invocar e incorporar inmediatamente 1 Esqueleto (básico de Bronce) a tus filas sin coste alguno.'
    },
    grailBuilding: {
      name: 'Sudario de la oscuridad (Soul Prison)',
      cost: { gold: 0, valuables: 0 },
      requirements: ['Grial desenterrado'],
      benefit: 'Estructura legendaria del Grial. Oculta el reino bajo sombras perpetuas. Genera +20 de Oro por turno y potencia la Nigromancia: el coste para revivir o reclutar unidades no-muertas se reduce un 20%.'
    }
  },
  mazmorra: {
    factionId: 'mazmorra',
    factionName: 'Mazmorra (Dungeon)',
    townName: 'Abismo de las Sombras',
    lore: 'Un vasto imperio subterráneo erigido sobre cavernas oscuras, ritos prohibidos e incuestionable poder arcano. Sus huestes dominan la hechicería elemental destructiva con minotauros pesados e imparables dragones negros.',
    startingBuildings: [
      { name: 'Ayuntamiento (Town Hall)', cost: { gold: 0 }, benefit: 'Edificio inicial. Produce +10 de Oro en cada Fase de Recursos.', isStarting: true },
      { name: 'Fuerte (Fort)', cost: { gold: 0 }, benefit: 'Edificio inicial. Habilita la defensa básica de la ciudad y el reclutamiento de unidades de Bronce.', isStarting: true },
      { name: 'Morada de Bronce (Base)', cost: { gold: 0 }, benefit: 'Permite reclutar Trogloditas y Harpías básicas.', isStarting: true }
    ],
    commonBuildings: {
      cityHall: {
        name: 'Cabildo (City Hall)',
        cost: { gold: 10, materials: 1 },
        requirements: ['Ayuntamiento'],
        benefit: 'Incrementa la producción de tu ciudad a +15 de Oro en cada Fase de Recursos.'
      },
      capitol: {
        name: 'Capitolio (Capitol)',
        cost: { gold: 15, materials: 2, valuables: 1 },
        requirements: ['Cabildo'],
        benefit: 'Incrementa la producción de tu ciudad al máximo de +20 de Oro en cada Fase de Recursos. Límite: Solo uno por jugador.'
      },
      marketplace: {
        name: 'Mercado (Marketplace)',
        cost: { gold: 5 },
        benefit: 'Habilita el comercio de recursos. Permite cambiar 2 Materiales por 1 Valioso, o 1 Valioso por 1 Material + 3 de Oro.'
      },
      resourceSilo: {
        name: 'Silo de Recursos',
        cost: { gold: 5 },
        requirements: ['Mercado'],
        benefit: 'Produce automáticamente +1 Objeto de Valor (Azufre) en cada Fase de Recursos.'
      },
      mageGuilds: [
        { name: 'Cofradía de Magos Nivel 1', cost: { gold: 5, materials: 1 }, benefit: 'Permite comprar y equipar hechizos de Nivel 1.' },
        { name: 'Cofradía de Magos Nivel 2', cost: { gold: 5, materials: 1, valuables: 1 }, requirements: ['Cofradía Nivel 1'], benefit: 'Permite comprar y equipar hechizos de Nivel 2.' },
        { name: 'Cofradía de Magos Nivel 3', cost: { gold: 10, materials: 2, valuables: 1 }, requirements: ['Cofradía Nivel 2'], benefit: 'Permite comprar y equipar hechizos de Nivel 3.' },
        { name: 'Cofradía de Magos Nivel 4', cost: { gold: 15, materials: 2, valuables: 2 }, requirements: ['Cofradía Nivel 3'], benefit: 'Permite comprar y equipar hechizos de Nivel 4.' },
        { name: 'Cofradía de Magos Nivel 5', cost: { gold: 20, materials: 3, valuables: 3 }, requirements: ['Cofradía Nivel 4'], benefit: 'Permite comprar y equipar hechizos de Nivel 5 (Magias de Fuego o Tierra destructivas).' }
      ],
      citadel: {
        name: 'Ciudadela (Citadel)',
        cost: { gold: 5, materials: 2 },
        requirements: ['Fuerte'],
        benefit: 'Proporciona defensa adicional a la ciudad frente a asedios y habilita la construcción de la Morada de Plata.'
      },
      castle: {
        name: 'Castillo (Castle)',
        cost: { gold: 10, materials: 3, valuables: 1 },
        requirements: ['Ciudadela'],
        benefit: 'Maximiza los muros defensivos de la ciudad y habilita la construcción de la Morada de Oro.'
      }
    },
    dwellings: {
      bronze: {
        name: 'Cueva de Trogloditas (Morada de Bronce)',
        unit: 'Trogloditas / Harpías',
        upgradedName: 'Cueva de Trogloditas Mejorada',
        upgradedUnit: 'Trogloditas / Harpías de Élite',
        cost: { gold: 5, materials: 1 }
      },
      silver: {
        name: 'Capilla del Azote (Morada de Plata)',
        unit: 'Contempladores / Medusas / Minotauros',
        upgradedName: 'Capilla del Azote Mejorada',
        upgradedUnit: 'Contempladores / Medusas / Minotauros de Élite',
        baseCost: { gold: 10, materials: 2 },
        upgradeCost: { gold: 5, materials: 1 }
      },
      gold: {
        name: 'Cueva de Dragones (Morada de Oro)',
        unit: 'Manticoras / Dragones rojos',
        upgradedName: 'Cueva de Dragones Mejorada',
        upgradedUnit: 'Manticoras / Dragones negros de Élite',
        baseCost: { gold: 15, materials: 3, valuables: 2 },
        upgradeCost: { gold: 10, materials: 2, valuables: 1 }
      }
    },
    uniqueBuilding: {
      name: 'Vórtice de maná (Mana Vortex)',
      cost: { gold: 5 },
      requirements: ['Cofradía de Magos Nivel 1'],
      benefit: 'Un nexo de pura magia concentrada. Una vez por combate táctico de exploración, el Héroe puede canalizar el vórtice para restablecer inmediatamente todos sus puntos de Maná gastados o duplicar el daño de su primer conjuro.'
    },
    grailBuilding: {
      name: 'Guardián de la tierra (Guardian of Earth)',
      cost: { gold: 0, valuables: 0 },
      requirements: ['Grial desenterrado'],
      benefit: 'Estructura legendaria del Grial. Una estatua colosal esculpida en la roca viva. Genera +20 de Oro por turno y proporciona un bonificador pasivo de +2 de Poder (Power) a todos tus hechizos terrestres.'
    }
  },
  rampart: {
    factionId: 'rampart',
    factionName: 'Murallas (Rampart)',
    townName: 'Bosque de los Susurros',
    lore: 'Una elegante metrópolis forestal donde los elfos, centauros y seres míticos conviven en armonía natural. Se especializan en la agilidad en bosques, la protección de la tierra y los indestructibles dragones dorados.',
    startingBuildings: [
      { name: 'Ayuntamiento (Town Hall)', cost: { gold: 0 }, benefit: 'Edificio inicial. Produce +10 de Oro en cada Fase de Recursos.', isStarting: true },
      { name: 'Fuerte (Fort)', cost: { gold: 0 }, benefit: 'Edificio inicial. Habilita la defensa básica de la ciudad y el reclutamiento de unidades de Bronce.', isStarting: true },
      { name: 'Morada de Bronce (Base)', cost: { gold: 0 }, benefit: 'Permite reclutar Centauros y Enanos básicos.', isStarting: true }
    ],
    commonBuildings: {
      cityHall: {
        name: 'Cabildo (City Hall)',
        cost: { gold: 10, materials: 1 },
        requirements: ['Ayuntamiento'],
        benefit: 'Incrementa la producción de tu ciudad a +15 de Oro en cada Fase de Recursos.'
      },
      capitol: {
        name: 'Capitolio (Capitol)',
        cost: { gold: 15, materials: 2, valuables: 1 },
        requirements: ['Cabildo'],
        benefit: 'Incrementa la producción de tu ciudad al máximo de +20 de Oro en cada Fase de Recursos. Límite: Solo uno por jugador.'
      },
      marketplace: {
        name: 'Mercado (Marketplace)',
        cost: { gold: 5 },
        benefit: 'Habilita el comercio de recursos. Permite cambiar 2 Materiales por 1 Valioso, o 1 Valioso por 1 Material + 3 de Oro.'
      },
      resourceSilo: {
        name: 'Silo de Recursos',
        cost: { gold: 5 },
        requirements: ['Mercado'],
        benefit: 'Produce automáticamente +1 Objeto de Valor (Gemas) en cada Fase de Recursos.'
      },
      mageGuilds: [
        { name: 'Cofradía de Magos Nivel 1', cost: { gold: 5, materials: 1 }, benefit: 'Permite comprar y equipar hechizos de Nivel 1.' },
        { name: 'Cofradía de Magos Nivel 2', cost: { gold: 5, materials: 1, valuables: 1 }, requirements: ['Cofradía Nivel 1'], benefit: 'Permite comprar y equipar hechizos de Nivel 2.' },
        { name: 'Cofradía de Magos Nivel 3', cost: { gold: 10, materials: 2, valuables: 1 }, requirements: ['Cofradía Nivel 2'], benefit: 'Permite comprar y equipar hechizos de Nivel 3.' },
        { name: 'Cofradía de Magos Nivel 4', cost: { gold: 15, materials: 2, valuables: 2 }, requirements: ['Cofradía Nivel 3'], benefit: 'Permite comprar y equipar hechizos de Nivel 4.' }
      ],
      citadel: {
        name: 'Ciudadela (Citadel)',
        cost: { gold: 5, materials: 2 },
        requirements: ['Fuerte'],
        benefit: 'Proporciona defensa adicional a la ciudad frente a asedios y habilita la construcción de la Morada de Plata.'
      },
      castle: {
        name: 'Castillo (Castle)',
        cost: { gold: 10, materials: 3, valuables: 1 },
        requirements: ['Ciudadela'],
        benefit: 'Maximiza los muros defensivos de la ciudad y habilita la construcción de la Morada de Oro.'
      }
    },
    dwellings: {
      bronze: {
        name: 'Claro de Centauros (Morada de Bronce)',
        unit: 'Centauros / Enanos',
        upgradedName: 'Claro de Centauros Mejorado',
        upgradedUnit: 'Centauros / Enanos de Élite',
        cost: { gold: 5, materials: 1 }
      },
      silver: {
        name: 'Hogar de los Elfos (Morada de Plata)',
        unit: 'Elfos / Pegasos / Dendroides',
        upgradedName: 'Hogar de los Elfos Mejorado',
        upgradedUnit: 'Elfos / Pegasos / Dendroides de Élite',
        baseCost: { gold: 10, materials: 2 },
        upgradeCost: { gold: 5, materials: 1 }
      },
      gold: {
        name: 'Arboleda Dorada (Morada de Oro)',
        unit: 'Unicornios / Dragones verdes',
        upgradedName: 'Arboleda Dorada Mejorada',
        upgradedUnit: 'Unicornios / Dragones dorados de Élite',
        baseCost: { gold: 15, materials: 3, valuables: 2 },
        upgradeCost: { gold: 10, materials: 2, valuables: 1 }
      }
    },
    uniqueBuilding: {
      name: 'Tesorería (Treasury)',
      cost: { gold: 5 },
      requirements: ['Mercado'],
      benefit: 'Un almacén fortificado de oro. Al final de cada ronda, si logras conservar al menos 1 Moneda de Oro en tu tesorería personal, recibes inmediatamente +2 de Oro de interés gratuito.'
    },
    grailBuilding: {
      name: 'Canción del Elfo (Spirit Guardian)',
      cost: { gold: 0, valuables: 0 },
      requirements: ['Grial desenterrado'],
      benefit: 'Estructura legendaria del Grial. Un santuario arbóreo cantante. Genera +20 de Oro por turno y otorga un +2 de Suerte permanente a todos tus héroes durante sus batallas.'
    }
  },
  torre: {
    factionId: 'torre',
    factionName: 'Torre (Tower)',
    townName: 'Cumbre de Alquimia',
    lore: 'Una majestuosa ciudad arcana de cúpulas doradas construida sobre picos nevados. Es la cuna de los magos eruditos, gólems mecánicos, genios místicos y los colosales titanes de las tormentas.',
    startingBuildings: [
      { name: 'Ayuntamiento (Town Hall)', cost: { gold: 0 }, benefit: 'Edificio inicial. Produce +10 de Oro en cada Fase de Recursos.', isStarting: true },
      { name: 'Fuerte (Fort)', cost: { gold: 0 }, benefit: 'Edificio inicial. Habilita la defensa básica de la ciudad y el reclutamiento de unidades de Bronce.', isStarting: true },
      { name: 'Morada de Bronce (Base)', cost: { gold: 0 }, benefit: 'Permite reclutar Gremlins y Gárgolas básicas.', isStarting: true }
    ],
    commonBuildings: {
      cityHall: {
        name: 'Cabildo (City Hall)',
        cost: { gold: 10, materials: 1 },
        requirements: ['Ayuntamiento'],
        benefit: 'Incrementa la producción de tu ciudad a +15 de Oro en cada Fase de Recursos.'
      },
      capitol: {
        name: 'Capitolio (Capitol)',
        cost: { gold: 15, materials: 2, valuables: 1 },
        requirements: ['Cabildo'],
        benefit: 'Incrementa la producción de tu ciudad al máximo de +20 de Oro en cada Fase de Recursos. Límite: Solo uno por jugador.'
      },
      marketplace: {
        name: 'Mercado (Marketplace)',
        cost: { gold: 5 },
        benefit: 'Habilita el comercio de recursos. Permite cambiar 2 Materiales por 1 Valioso, o 1 Valioso por 1 Material + 3 de Oro.'
      },
      resourceSilo: {
        name: 'Silo de Recursos',
        cost: { gold: 5 },
        requirements: ['Mercado'],
        benefit: 'Produce automáticamente +1 Objeto de Valor (Gemas) en cada Fase de Recursos.'
      },
      mageGuilds: [
        { name: 'Cofradía de Magos Nivel 1', cost: { gold: 5, materials: 1 }, benefit: 'Permite comprar y equipar hechizos de Nivel 1.' },
        { name: 'Cofradía de Magos Nivel 2', cost: { gold: 5, materials: 1, valuables: 1 }, requirements: ['Cofradía Nivel 1'], benefit: 'Permite comprar y equipar hechizos de Nivel 2.' },
        { name: 'Cofradía de Magos Nivel 3', cost: { gold: 10, materials: 2, valuables: 1 }, requirements: ['Cofradía Nivel 2'], benefit: 'Permite comprar y equipar hechizos de Nivel 3.' },
        { name: 'Cofradía de Magos Nivel 4', cost: { gold: 15, materials: 2, valuables: 2 }, requirements: ['Cofradía Nivel 3'], benefit: 'Permite comprar y equipar hechizos de Nivel 4.' },
        { name: 'Cofradía de Magos Nivel 5', cost: { gold: 20, materials: 3, valuables: 3 }, requirements: ['Cofradía Nivel 4'], benefit: 'Permite comprar y equipar hechizos de Nivel 5 (Acceso total a todos los hechizos avanzados del juego).' }
      ],
      citadel: {
        name: 'Ciudadela (Citadel)',
        cost: { gold: 5, materials: 2 },
        requirements: ['Fuerte'],
        benefit: 'Proporciona defensa adicional a la ciudad frente a asedios y habilita la construcción de la Morada de Plata.'
      },
      castle: {
        name: 'Castillo (Castle)',
        cost: { gold: 10, materials: 3, valuables: 1 },
        requirements: ['Ciudadela'],
        benefit: 'Maximiza los muros defensivos de la ciudad y habilita la construcción de la Morada de Oro.'
      }
    },
    dwellings: {
      bronze: {
        name: 'Fábrica de Juguetes (Morada de Bronce)',
        unit: 'Gremlins / Gárgolas',
        upgradedName: 'Fábrica de Juguetes Mejorada',
        upgradedUnit: 'Gremlins de élite / Gárgolas de Élite',
        cost: { gold: 5, materials: 1 }
      },
      silver: {
        name: 'Taller de Gólems (Morada de Plata)',
        unit: 'Gólems / Genios / Archimagos',
        upgradedName: 'Taller de Gólems Mejorado',
        upgradedUnit: 'Gólems de élite / Genios / Archimagos de Élite',
        baseCost: { gold: 10, materials: 2 },
        upgradeCost: { gold: 5, materials: 1 }
      },
      gold: {
        name: 'Nube de Tormenta (Morada de Oro)',
        unit: 'Gigantes / Titanes',
        upgradedName: 'Nube de Tormenta Mejorada',
        upgradedUnit: 'Gigantes / Titanes de Élite',
        baseCost: { gold: 15, materials: 3, valuables: 2 },
        upgradeCost: { gold: 10, materials: 2, valuables: 1 }
      }
    },
    uniqueBuilding: {
      name: 'Biblioteca (Library)',
      cost: { gold: 5 },
      requirements: ['Cofradía de Magos Nivel 1'],
      benefit: 'Un santuario de tomos olvidados. Siempre que realices la compra de hechizos de la Cofradía de Magos, el número de cartas a elegir del draft aumenta en +1, proporcionando más opciones arcanas.'
    },
    grailBuilding: {
      name: 'Dirigible (Carnival of Justice)',
      cost: { gold: 0, valuables: 0 },
      requirements: ['Grial desenterrado'],
      benefit: 'Estructura legendaria del Grial. Un gigantesco globo meteorológico místico. Genera +20 de Oro por turno y despeja por completo la Niebla de Guerra en todo el mapa de exploración.'
    }
  },
  infierno: {
    factionId: 'infierno',
    factionName: 'Infierno (Inferno)',
    townName: 'Abismo de Fuego',
    lore: 'Un averno subterráneo dominado por demonios crueles, efrits ígneos y colosales archidiablos. Su estrategia se basa en las magias destructivas de fuego, la teleportación táctica y el azote violento a melé.',
    startingBuildings: [
      { name: 'Ayuntamiento (Town Hall)', cost: { gold: 0 }, benefit: 'Edificio inicial. Produce +10 de Oro en cada Fase de Recursos.', isStarting: true },
      { name: 'Fuerte (Fort)', cost: { gold: 0 }, benefit: 'Edificio inicial. Habilita la defensa básica de la ciudad y el reclutamiento de unidades de Bronce.', isStarting: true },
      { name: 'Morada de Bronce (Base)', cost: { gold: 0 }, benefit: 'Permite reclutar Familiares y Magogs básicos.', isStarting: true }
    ],
    commonBuildings: {
      cityHall: {
        name: 'Cabildo (City Hall)',
        cost: { gold: 10, materials: 1 },
        requirements: ['Ayuntamiento'],
        benefit: 'Incrementa la producción de tu ciudad a +15 de Oro en cada Fase de Recursos.'
      },
      capitol: {
        name: 'Capitolio (Capitol)',
        cost: { gold: 15, materials: 2, valuables: 1 },
        requirements: ['Cabildo'],
        benefit: 'Incrementa la producción de tu ciudad al máximo de +20 de Oro en cada Fase de Recursos. Límite: Solo uno por jugador.'
      },
      marketplace: {
        name: 'Mercado (Marketplace)',
        cost: { gold: 5 },
        benefit: 'Habilita el comercio de recursos. Permite cambiar 2 Materiales por 1 Valioso, o 1 Valioso por 1 Material + 3 de Oro.'
      },
      resourceSilo: {
        name: 'Silo de Recursos',
        cost: { gold: 5 },
        requirements: ['Mercado'],
        benefit: 'Produce automáticamente +1 Objeto de Valor (Azufre) en cada Fase de Recursos.'
      },
      mageGuilds: [
        { name: 'Cofradía de Magos Nivel 1', cost: { gold: 5, materials: 1 }, benefit: 'Permite comprar y equipar hechizos de Nivel 1.' },
        { name: 'Cofradía de Magos Nivel 2', cost: { gold: 5, materials: 1, valuables: 1 }, requirements: ['Cofradía Nivel 1'], benefit: 'Permite comprar y equipar hechizos de Nivel 2.' },
        { name: 'Cofradía de Magos Nivel 3', cost: { gold: 10, materials: 2, valuables: 1 }, requirements: ['Cofradía Nivel 2'], benefit: 'Permite comprar y equipar hechizos de Nivel 3.' },
        { name: 'Cofradía de Magos Nivel 4', cost: { gold: 15, materials: 2, valuables: 2 }, requirements: ['Cofradía Nivel 3'], benefit: 'Permite comprar y equipar hechizos de Nivel 4.' }
      ],
      citadel: {
        name: 'Ciudadela (Citadel)',
        cost: { gold: 5, materials: 2 },
        requirements: ['Fuerte'],
        benefit: 'Proporciona defensa adicional a la ciudad frente a asedios y habilita la construcción de la Morada de Plata.'
      },
      castle: {
        name: 'Castillo (Castle)',
        cost: { gold: 10, materials: 3, valuables: 1 },
        requirements: ['Ciudadela'],
        benefit: 'Maximiza los muros defensivos de la ciudad y habilita la construcción de la Morada de Oro.'
      }
    },
    dwellings: {
      bronze: {
        name: 'Criadero de Sabuesos (Morada de Bronce)',
        unit: 'Familiares / Magogs',
        upgradedName: 'Criadero de Sabuesos Mejorado',
        upgradedUnit: 'Familiares / Magogs de Élite',
        cost: { gold: 5, materials: 1 }
      },
      silver: {
        name: 'Fosa de Demonios (Morada de Plata)',
        unit: 'Cerberos / Demonios / Señores del abismo',
        upgradedName: 'Fosa de Demonios Mejorada',
        upgradedUnit: 'Cerberos / Demonios / Señores del abismo de Élite',
        baseCost: { gold: 10, materials: 2 },
        upgradeCost: { gold: 5, materials: 1 }
      },
      gold: {
        name: 'Palacio de Efrits (Morada de Oro)',
        unit: 'Efrits / Archidiablos',
        upgradedName: 'Palacio de Efrits Mejorado',
        upgradedUnit: 'Efrits / Archidiablos de Élite',
        baseCost: { gold: 15, materials: 3, valuables: 2 },
        upgradeCost: { gold: 10, materials: 2, valuables: 1 }
      }
    },
    uniqueBuilding: {
      name: 'Puertas del Castillo (Castle Gate)',
      cost: { gold: 5 },
      requirements: ['Mercado'],
      benefit: 'Un portal dimensional de azufre. Permite al Héroe Principal teletransportarse inmediatamente de vuelta a este Castillo desde cualquier portal o ciudad aliada del mapa de exploración pagando únicamente 1 PM.'
    },
    grailBuilding: {
      name: 'Deidad de Fuego (Deity of Fire)',
      cost: { gold: 0, valuables: 0 },
      requirements: ['Grial desenterrado'],
      benefit: 'Estructura legendaria del Grial. Un altar de llamas devoradoras. Genera +20 de Oro por turno y otorga un +2 de Poder (Power) a todos los hechizos ígneos de tus héroes de forma permanente.'
    }
  },
  stronghold: {
    factionId: 'stronghold',
    factionName: 'Bastión (Stronghold)',
    townName: 'Campamento Orc',
    lore: 'Un campamento de guerra bárbaro asimilado sobre desiertos y estepas pedregosas. Sus ejércitos dependen de la fuerza física bruta, tácticas de asalto rápido, orcos salvajes, cíclopes y los brutales Behemoths.',
    startingBuildings: [
      { name: 'Ayuntamiento (Town Hall)', cost: { gold: 0 }, benefit: 'Edificio inicial. Produce +10 de Oro en cada Fase de Recursos.', isStarting: true },
      { name: 'Fuerte (Fort)', cost: { gold: 0 }, benefit: 'Edificio inicial. Habilita la defensa básica de la ciudad y el reclutamiento de unidades de Bronce.', isStarting: true },
      { name: 'Morada de Bronce (Base)', cost: { gold: 0 }, benefit: 'Permite reclutar Duendes y Orcos básicos.', isStarting: true }
    ],
    commonBuildings: {
      cityHall: {
        name: 'Cabildo (City Hall)',
        cost: { gold: 10, materials: 1 },
        requirements: ['Ayuntamiento'],
        benefit: 'Incrementa la producción de tu ciudad a +15 de Oro en cada Fase de Recursos.'
      },
      capitol: {
        name: 'Capitolio (Capitol)',
        cost: { gold: 15, materials: 2, valuables: 1 },
        requirements: ['Cabildo'],
        benefit: 'Incrementa la producción de tu ciudad al máximo de +20 de Oro en cada Fase de Recursos. Límite: Solo uno por jugador.'
      },
      marketplace: {
        name: 'Mercado (Marketplace)',
        cost: { gold: 5 },
        benefit: 'Habilita el comercio de recursos. Permite cambiar 2 Materiales por 1 Valioso, o 1 Valioso por 1 Material + 3 de Oro.'
      },
      resourceSilo: {
        name: 'Silo de Recursos',
        cost: { gold: 5 },
        requirements: ['Mercado'],
        benefit: 'Produce automáticamente +1 Material (Madera) en cada Fase de Recursos.'
      },
      mageGuilds: [
        { name: 'Cofradía de Magos Nivel 1', cost: { gold: 5, materials: 1 }, benefit: 'Permite comprar y equipar hechizos de Nivel 1.' },
        { name: 'Cofradía de Magos Nivel 2', cost: { gold: 5, materials: 1, valuables: 1 }, requirements: ['Cofradía Nivel 1'], benefit: 'Permite comprar y equipar hechizos de Nivel 2.' },
        { name: 'Cofradía de Magos Nivel 3', cost: { gold: 10, materials: 2, valuables: 1 }, requirements: ['Cofradía Nivel 2'], benefit: 'Permite comprar y equipar hechizos de Nivel 3.' }
      ],
      citadel: {
        name: 'Ciudadela (Citadel)',
        cost: { gold: 5, materials: 2 },
        requirements: ['Fuerte'],
        benefit: 'Proporciona defensa adicional a la ciudad frente a asedios y habilita la construcción de la Morada de Plata.'
      },
      castle: {
        name: 'Castillo (Castle)',
        cost: { gold: 10, materials: 3, valuables: 1 },
        requirements: ['Ciudadela'],
        benefit: 'Maximiza los muros defensivos de la ciudad y habilita la construcción de la Morada de Oro.'
      }
    },
    dwellings: {
      bronze: {
        name: 'Chozas de Orcos (Morada de Bronce)',
        unit: 'Duendes / Orcos',
        upgradedName: 'Chozas de Orcos Mejorada',
        upgradedUnit: 'Duendes / Orcos de Élite',
        cost: { gold: 5, materials: 1 }
      },
      silver: {
        name: 'Nido de Rocs (Morada de Plata)',
        unit: 'Lobos / Rocs / Ogros',
        upgradedName: 'Nido de Rocs Mejorado',
        upgradedUnit: 'Lobos de combate / Rocs / Ogros de Élite',
        baseCost: { gold: 10, materials: 2 },
        upgradeCost: { gold: 5, materials: 1 }
      },
      gold: {
        name: 'La Guarida del Behemoth (Morada de Oro)',
        unit: 'Cíclopes / Behemoths',
        upgradedName: 'La Guarida del Behemoth Mejorada',
        upgradedUnit: 'Cíclopes / Behemoths de Élite',
        baseCost: { gold: 15, materials: 3, valuables: 2 },
        upgradeCost: { gold: 10, materials: 2, valuables: 1 }
      }
    },
    uniqueBuilding: {
      name: 'Salón de Valhalla (Hall of Valhalla)',
      cost: { gold: 5 },
      requirements: ['Fuerte'],
      benefit: 'Un santuario tribal consagrado al valor físico. Al construirlo, tu Héroe Principal aumenta su estadística de Ataque en +1 de forma permanente en su track personal.'
    },
    grailBuilding: {
      name: 'Monumento al gladiador (Gladiator\'s Monument)',
      cost: { gold: 0, valuables: 0 },
      requirements: ['Grial desenterrado'],
      benefit: 'Estructura legendaria del Grial. Una enorme estatua de piedra que conmemora los guerreros caídos. Genera +20 de Oro por turno y otorga +2 de Ataque físico a todas tus tropas en combate de forma permanente.'
    }
  },
  fortaleza: {
    factionId: 'fortaleza',
    factionName: 'Fortaleza (Fortress)',
    townName: 'Marisma de Escamas',
    lore: 'Una ciudad camuflada en lo profundo de pantanos ponzoñosos. Sus batallones se defienden con garras impenetrables comandando fieros hombres lagarto, basiliscos petrificadores, gorgonas y letales hidras de caos.',
    startingBuildings: [
      { name: 'Ayuntamiento (Town Hall)', cost: { gold: 0 }, benefit: 'Edificio inicial. Produce +10 de Oro en cada Fase de Recursos.', isStarting: true },
      { name: 'Fuerte (Fort)', cost: { gold: 0 }, benefit: 'Edificio inicial. Habilita la defensa básica de la ciudad y el reclutamiento de unidades de Bronce.', isStarting: true },
      { name: 'Morada de Bronce (Base)', cost: { gold: 0 }, benefit: 'Permite reclutar Goblins de agua y Hombres lagarto básicos.', isStarting: true }
    ],
    commonBuildings: {
      cityHall: {
        name: 'Cabildo (City Hall)',
        cost: { gold: 10, materials: 1 },
        requirements: ['Ayuntamiento'],
        benefit: 'Incrementa la producción de tu ciudad a +15 de Oro en cada Fase de Recursos.'
      },
      capitol: {
        name: 'Capitolio (Capitol)',
        cost: { gold: 15, materials: 2, valuables: 1 },
        requirements: ['Cabildo'],
        benefit: 'Incrementa la producción de tu ciudad al máximo de +20 de Oro en cada Fase de Recursos. Límite: Solo uno por jugador.'
      },
      marketplace: {
        name: 'Mercado (Marketplace)',
        cost: { gold: 5 },
        benefit: 'Habilita el comercio de recursos. Permite cambiar 2 Materiales por 1 Valioso, o 1 Valioso por 1 Material + 3 de Oro.'
      },
      resourceSilo: {
        name: 'Silo de Recursos',
        cost: { gold: 5 },
        requirements: ['Mercado'],
        benefit: 'Produce automáticamente +1 Material (Madera/Mineral) en cada Fase de Recursos.'
      },
      mageGuilds: [
        { name: 'Cofradía de Magos Nivel 1', cost: { gold: 5, materials: 1 }, benefit: 'Permite comprar y equipar hechizos de Nivel 1.' },
        { name: 'Cofradía de Magos Nivel 2', cost: { gold: 5, materials: 1, valuables: 1 }, requirements: ['Cofradía Nivel 1'], benefit: 'Permite comprar y equipar hechizos de Nivel 2.' },
        { name: 'Cofradía de Magos Nivel 3', cost: { gold: 10, materials: 2, valuables: 1 }, requirements: ['Cofradía Nivel 2'], benefit: 'Permite comprar y equipar hechizos de Nivel 3.' }
      ],
      citadel: {
        name: 'Ciudadela (Citadel)',
        cost: { gold: 5, materials: 2 },
        requirements: ['Fuerte'],
        benefit: 'Proporciona defensa adicional a la ciudad frente a asedios y habilita la construcción de la Morada de Plata.'
      },
      castle: {
        name: 'Castillo (Castle)',
        cost: { gold: 10, materials: 3, valuables: 1 },
        requirements: ['Ciudadela'],
        benefit: 'Maximiza los muros defensivos de la ciudad y habilita la construcción de la Morada de Oro.'
      }
    },
    dwellings: {
      bronze: {
        name: 'Nido de Hombres Lagarto (Morada de Bronce)',
        unit: 'Goblins / Hombres lagarto',
        upgradedName: 'Nido de Hombres Lagarto Mejorado',
        upgradedUnit: 'Goblins de lodo / Hombres lagarto de Élite',
        cost: { gold: 5, materials: 1 }
      },
      silver: {
        name: 'Cercado de Basiliscos (Morada de Plata)',
        unit: 'Libélulas / Basiliscos / Gorgonas',
        upgradedName: 'Cercado de Basiliscos Mejorado',
        upgradedUnit: 'Libélulas de fuego / Basiliscos / Gorgonas de Élite',
        baseCost: { gold: 10, materials: 2 },
        upgradeCost: { gold: 5, materials: 1 }
      },
      gold: {
        name: 'Estanque de Hidras (Morada de Oro)',
        unit: 'Escorpiones / Hidras de caos',
        upgradedName: 'Estanque de Hidras Mejorado',
        upgradedUnit: 'Escorpiones / Hidras de caos de Élite',
        baseCost: { gold: 15, materials: 3, valuables: 2 },
        upgradeCost: { gold: 10, materials: 2, valuables: 1 }
      }
    },
    uniqueBuilding: {
      name: 'Jaula de Señores de la Guerra (Cage of Warlords)',
      cost: { gold: 5 },
      requirements: ['Fuerte'],
      benefit: 'Un recinto de adiestramiento marcial en el lodo. Al construirlo, tu Héroe Principal aumenta su estadística de Defensa en +1 de forma permanente en su track personal.'
    },
    grailBuilding: {
      name: 'Ídolo del Carnaval (Carnival Idol)',
      cost: { gold: 0, valuables: 0 },
      requirements: ['Grial desenterrado'],
      benefit: 'Estructura legendaria del Grial. Un gigantesco tótem de barro e hilos mágicos. Genera +20 de Oro por turno y confiere +2 de Defensa física a todas tus tropas en combate.'
    }
  },
  confluencia: {
    factionId: 'confluencia',
    factionName: 'Conflujo (Conflux)',
    townName: 'Vórtice Elemental',
    lore: 'Un santuario planar sagrado donde la energía mágica pura se condensa en elementales de fuego, tierra, agua y aire. Son reyes de la alta magia comandados por el inmortal fénix celestial.',
    startingBuildings: [
      { name: 'Ayuntamiento (Town Hall)', cost: { gold: 0 }, benefit: 'Edificio inicial. Produce +10 de Oro en cada Fase de Recursos.', isStarting: true },
      { name: 'Fuerte (Fort)', cost: { gold: 0 }, benefit: 'Edificio inicial. Habilita la defensa básica de la ciudad y el reclutamiento de unidades de Bronce.', isStarting: true },
      { name: 'Morada de Bronce (Base)', cost: { gold: 0 }, benefit: 'Permite reclutar Pixies y Elementales de aire.', isStarting: true }
    ],
    commonBuildings: {
      cityHall: {
        name: 'Cabildo (City Hall)',
        cost: { gold: 10, materials: 1 },
        requirements: ['Ayuntamiento'],
        benefit: 'Incrementa la producción de tu ciudad a +15 de Oro en cada Fase de Recursos.'
      },
      capitol: {
        name: 'Capitolio (Capitol)',
        cost: { gold: 15, materials: 2, valuables: 1 },
        requirements: ['Cabildo'],
        benefit: 'Incrementa la producción de tu ciudad al máximo de +20 de Oro en cada Fase de Recursos. Límite: Solo uno por jugador.'
      },
      marketplace: {
        name: 'Mercado (Marketplace)',
        cost: { gold: 5 },
        benefit: 'Habilita el comercio de recursos. Permite cambiar 2 Materiales por 1 Valioso, o 1 Valioso por 1 Material + 3 de Oro.'
      },
      resourceSilo: {
        name: 'Silo de Recursos',
        cost: { gold: 5 },
        requirements: ['Mercado'],
        benefit: 'Produce automáticamente +1 Objeto de Valor (Azufre/Gema al azar) en cada Fase de Recursos.'
      },
      mageGuilds: [
        { name: 'Cofradía de Magos Nivel 1', cost: { gold: 5, materials: 1 }, benefit: 'Permite comprar y equipar hechizos de Nivel 1.' },
        { name: 'Cofradía de Magos Nivel 2', cost: { gold: 5, materials: 1, valuables: 1 }, requirements: ['Cofradía Nivel 1'], benefit: 'Permite comprar y equipar hechizos de Nivel 2.' },
        { name: 'Cofradía de Magos Nivel 3', cost: { gold: 10, materials: 2, valuables: 1 }, requirements: ['Cofradía Nivel 2'], benefit: 'Permite comprar y equipar hechizos de Nivel 3.' },
        { name: 'Cofradía de Magos Nivel 4', cost: { gold: 15, materials: 2, valuables: 2 }, requirements: ['Cofradía Nivel 3'], benefit: 'Permite comprar y equipar hechizos de Nivel 4.' },
        { name: 'Cofradía de Magos Nivel 5', cost: { gold: 20, materials: 3, valuables: 3 }, requirements: ['Cofradía Nivel 4'], benefit: 'Permite comprar y equipar hechizos de Nivel 5 (Acceso a las 4 escuelas de magia del Conflujo).' }
      ],
      citadel: {
        name: 'Ciudadela (Citadel)',
        cost: { gold: 5, materials: 2 },
        requirements: ['Fuerte'],
        benefit: 'Proporciona defensa adicional a la ciudad frente a asedios y habilita la construcción de la Morada de Plata.'
      },
      castle: {
        name: 'Castillo (Castle)',
        cost: { gold: 10, materials: 3, valuables: 1 },
        requirements: ['Ciudadela'],
        benefit: 'Maximiza los muros defensivos de la ciudad y habilita la construcción de la Morada de Oro.'
      }
    },
    dwellings: {
      bronze: {
        name: 'Hogar de Duendecillos (Morada de Bronce)',
        unit: 'Duendes / Elementales de Aire',
        upgradedName: 'Hogar de Duendecillos Mejorado',
        upgradedUnit: 'Pixies de Élite / Tormenta',
        cost: { gold: 5, materials: 1 }
      },
      silver: {
        name: 'Llama de Vida (Morada de Plata)',
        unit: 'Ele. de Agua / Fuego / Tierra',
        upgradedName: 'Llama de Vida Mejorada',
        upgradedUnit: 'Hielo / Magma / Energía de Élite',
        baseCost: { gold: 10, materials: 2 },
        upgradeCost: { gold: 5, materials: 1 }
      },
      gold: {
        name: 'Nido de Cenizas (Morada de Oro)',
        unit: 'Psíquicos / Fénix',
        upgradedName: 'Nido de Cenizas Mejorado',
        upgradedUnit: 'Psíquicos / Fénix Celestiales de Élite',
        baseCost: { gold: 15, materials: 3, valuables: 2 },
        upgradeCost: { gold: 10, materials: 2, valuables: 1 }
      }
    },
    uniqueBuilding: {
      name: 'Linterna Mágica (Magic Lantern)',
      cost: { gold: 5 },
      requirements: ['Fuerte'],
      benefit: 'Un faro sintonizado con el plano astral. Te permite contratar Pixies o Elementales adicionales por ronda directamente, aumentando tu límite de tropas reclutables.'
    },
    grailBuilding: {
      name: 'Fuegos Artificiales Arcanos (Soul Conflux)',
      cost: { gold: 0, valuables: 0 },
      requirements: ['Grial desenterrado'],
      benefit: 'Estructura legendaria del Grial. Un faro de aura cósmica constante. Genera +20 de Oro por turno y añade de forma permanente +1 de Poder (Power) a todas las escuelas de magia aprendidas por tus Héroes.'
    }
  },
  cove: {
    factionId: 'cove',
    factionName: 'Cala (Cove)',
    townName: 'Bahía del Corsario',
    lore: 'Un asentamiento costero pirata de Regnan, oculto tras densas brumas marinas. Comandan veloces oceánidos, asaltantes de abordaje armados con cañones pesados, serpientes marinas y ninfas acuáticas.',
    startingBuildings: [
      { name: 'Ayuntamiento (Town Hall)', cost: { gold: 0 }, benefit: 'Edificio inicial. Produce +10 de Oro en cada Fase de Recursos.', isStarting: true },
      { name: 'Fuerte (Fort)', cost: { gold: 0 }, benefit: 'Edificio inicial. Habilita la defensa básica de la ciudad y el reclutamiento de unidades de Bronce.', isStarting: true },
      { name: 'Morada de Bronce (Base)', cost: { gold: 0 }, benefit: 'Permite reclutar Oceánidos y Marineros básicos.', isStarting: true }
    ],
    commonBuildings: {
      cityHall: {
        name: 'Cabildo (City Hall)',
        cost: { gold: 10, materials: 1 },
        requirements: ['Ayuntamiento'],
        benefit: 'Incrementa la producción de tu ciudad a +15 de Oro en cada Fase de Recursos.'
      },
      capitol: {
        name: 'Capitolio (Capitol)',
        cost: { gold: 15, materials: 2, valuables: 1 },
        requirements: ['Cabildo'],
        benefit: 'Incrementa la producción de tu ciudad al máximo de +20 de Oro en cada Fase de Recursos. Límite: Solo uno por jugador.'
      },
      marketplace: {
        name: 'Mercado (Marketplace)',
        cost: { gold: 5 },
        benefit: 'Habilita el comercio de recursos. Permite cambiar 2 Materiales por 1 Valioso, o 1 Valioso por 1 Material + 3 de Oro.'
      },
      resourceSilo: {
        name: 'Silo de Recursos',
        cost: { gold: 5 },
        requirements: ['Mercado'],
        benefit: 'Produce automáticamente +1 Objeto de Valor (Azufre/Mercury) en cada Fase de Recursos.'
      },
      mageGuilds: [
        { name: 'Cofradía de Magos Nivel 1', cost: { gold: 5, materials: 1 }, benefit: 'Permite comprar y equipar hechizos de Nivel 1.' },
        { name: 'Cofradía de Magos Nivel 2', cost: { gold: 5, materials: 1, valuables: 1 }, requirements: ['Cofradía Nivel 1'], benefit: 'Permite comprar y equipar hechizos de Nivel 2.' },
        { name: 'Cofradía de Magos Nivel 3', cost: { gold: 10, materials: 2, valuables: 1 }, requirements: ['Cofradía Nivel 2'], benefit: 'Permite comprar y equipar hechizos de Nivel 3.' },
        { name: 'Cofradía de Magos Nivel 4', cost: { gold: 15, materials: 2, valuables: 2 }, requirements: ['Cofradía Nivel 3'], benefit: 'Permite comprar y equipar hechizos de Nivel 4.' }
      ],
      citadel: {
        name: 'Ciudadela (Citadel)',
        cost: { gold: 5, materials: 2 },
        requirements: ['Fuerte'],
        benefit: 'Proporciona defensa adicional a la ciudad frente a asedios y habilita la construcción de la Morada de Plata.'
      },
      castle: {
        name: 'Castillo (Castle)',
        cost: { gold: 10, materials: 3, valuables: 1 },
        requirements: ['Ciudadela'],
        benefit: 'Maximiza los muros defensivos de la ciudad y habilita la construcción de la Morada de Oro.'
      }
    },
    dwellings: {
      bronze: {
        name: 'Taberna de Abordaje (Morada de Bronce)',
        unit: 'Oceánidos / Marineros',
        upgradedName: 'Taberna de Abordaje Mejorada',
        upgradedUnit: 'Ninfas / Corsarios de Élite',
        cost: { gold: 5, materials: 1 }
      },
      silver: {
        name: 'Nido del Pirata (Morada de Plata)',
        unit: 'Hechiceras de mar / Piratas regnan',
        upgradedName: 'Nido del Pirata Mejorado',
        upgradedUnit: 'Hechiceras de mar / Capitanes de Élite',
        baseCost: { gold: 10, materials: 2 },
        upgradeCost: { gold: 5, materials: 1 }
      },
      gold: {
        name: 'Bahía de la Serpiente (Morada de Oro)',
        unit: 'Aves marinas / Serpientes de mar',
        upgradedName: 'Bahía de la Serpiente Mejorada',
        upgradedUnit: 'Aves / Serpientes de mar de Élite',
        baseCost: { gold: 15, materials: 3, valuables: 2 },
        upgradeCost: { gold: 10, materials: 2, valuables: 1 }
      }
    },
    uniqueBuilding: {
      name: 'Nido de cuervos (Crow\'s Nest / Pub)',
      cost: { gold: 5 },
      requirements: ['Mercado'],
      benefit: 'Una torre vigía con taberna de contrabando. Al inicio de cada ronda, te otorga +1 Material o Valioso al azar o te permite descartar una loseta no deseada del draft de exploración.'
    },
    grailBuilding: {
      name: 'Estatua de la Sirena (Siren Statue)',
      cost: { gold: 0, valuables: 0 },
      requirements: ['Grial desenterrado'],
      benefit: 'Estructura legendaria del Grial. Una sirena tallada en concha marina dorada. Genera +20 de Oro por turno, concede +1 PM adicional en losetas de navegación por mar y reduce la Iniciativa de los arqueros enemigos en -1.'
    }
  }
};
