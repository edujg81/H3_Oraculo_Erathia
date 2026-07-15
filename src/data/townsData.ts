export interface ResourceCost {
  gold: number;
  materials?: number;
  valuables?: number;
}

export interface Unit {
  name: string; // El nombre es idéntico para ambos lados de la carta ("unas pocas" / "manada")
  recruitCost: ResourceCost; // Coste básico ("Unas pocas")
  eliteCost: ResourceCost; // Coste reforzado ("Manada")
  type: 'melee' | 'ranged' | 'flying';
}

export interface FactionBuilding {
  id: string; // alcaldia, ciudadela, cofradia, bronce, plata, oro, especial
  name: string;
  cost: ResourceCost;
  benefit: string;
  upgradeName?: string;
  upgradeCost?: ResourceCost;
  upgradeBenefit?: string;
}

export interface TownData {
  factionId: string;
  factionName: string;
  townName: string;
  lore: string;
  buildings: FactionBuilding[];
  units: {
    bronze: { nivel1: Unit, nivel2: Unit, nivel3: Unit },
    silver: { nivel4: Unit, nivel5: Unit },
    gold: { nivel6: Unit, nivel7: Unit }
  };
}

export const townsData: Record<string, TownData> = {
  castillo: {
    factionId: 'castillo',
    factionName: 'Castillo (Castle)',
    townName: 'Portal de la Gloria',
    lore: 'Una magnífica fortaleza medieval guiada por el honor, la fe y la rectitud militar. Sus ejércitos combinan infantería disciplinada, arqueros infalibles, caballeros veloces y celestiales arcángeles.',
    buildings: [
      {
        id: 'alcaldia',
        name: 'Alcaldía',
        cost: { gold: 10, materials: 4 },
        benefit: 'Al comienzo de cada ronda de recursos, elige: +5 de Oro o +1 PM.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 8, materials: 5, valuables: 1 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de muralla, 1 de puerta y 1 de torre de arqueros al tablero de combate.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de magos',
        cost: { gold: 4, materials: 2, valuables: 1 },
        benefit: 'Al construirla: Busca (2) Hechizos dos veces.\nDespués: Una vez por turno paga 6 Oros para buscar (2) Hechizos.'
      },
      {
        id: 'bronce',
        name: 'Torres (Morada de Bronce)',
        cost: { gold: 5, materials: 3, valuables: 1 },
        benefit: 'Permite reclutar Alabarderos, Tiradores y Grifos.',
        upgradeName: 'Herrería',
        upgradeCost: { gold: 4, materials: 3 },
        upgradeBenefit: 'Durante tu turno, elige una:\n1. Retira una carta Artefacto de tu mano para ganar 4 Oros.\n2. Paga 6 Oros para buscar (2) Artefactos.'
      },
      {
        id: 'plata',
        name: 'Tierra sagrada (Morada de Plata)',
        cost: { gold: 8, materials: 6, valuables: 3 },
        benefit: 'Permite reclutar Cruzados y Fanáticos.'
      },
      {
        id: 'oro',
        name: 'Gloria de Erathia (Morada de Oro)',
        cost: { gold: 10, materials: 9, valuables: 4 },
        benefit: 'Permite reclutar Campeones y Arcángeles.'
      },
      {
        id: 'especial',
        name: 'Hermandad de la Espada',
        cost: { gold: 8, materials: 4, valuables: 0 },
        benefit: 'Al comienzo de cada ronda de recursos gana Moral Positiva.'
      }
    ],
    units: {
      bronze: {
        nivel1: {
          name: 'Alabarderos',
          recruitCost: { gold: 2 },
          eliteCost: { gold: 3 },
          type: 'melee'
        },
        nivel2: {
          name: 'Tiradores',
          recruitCost: { gold: 3 },
          eliteCost: { gold: 5 },
          type: 'ranged'
        },
        nivel3: {
          name: 'Grifos',
          recruitCost: { gold: 4 },
          eliteCost: { gold: 6 },
          type: 'flying'
        }
      },
      silver: {
        nivel4: {
          name: 'Cruzados',
          recruitCost: { gold: 6 },
          eliteCost: { gold: 10 },
          type: 'melee'
        },
        nivel5: {
          name: 'Fanáticos',
          recruitCost: { gold: 8 },
          eliteCost: { gold: 12 },
          type: 'ranged'
        }
      },
      gold: {
        nivel6: {
          name: 'Campeones',
          recruitCost: { gold: 12 },
          eliteCost: { gold: 20, valuables: 1 },
          type: 'melee'
        },
        nivel7: {
          name: 'Arcángeles',
          recruitCost: { gold: 20, valuables: 1 },
          eliteCost: { gold: 30, valuables: 2 },
          type: 'flying'
        }
      }
    }
  },
  necropolis: {
    factionId: 'necropolis',
    factionName: 'Necrópolis (Necropolis)',
    townName: 'Tumba de las Almas',
    lore: 'Un reino lúgubre de ultratumba gobernado por nigromantes y vampiros. Sus fuerzas inmunes a la moral alzan ejércitos inagotables de esqueletos, zombis, y espectrales dragones de hueso.',
    buildings: [
      {
        id: 'alcaldia',
        name: 'Alcaldía',
        cost: { gold: 10, materials: 4 },
        benefit: 'Al comienzo de cada ronda de recursos, elige: +4 de Oro o Refuerza 1 unidad Bronce gratis.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 8, materials: 5, valuables: 1 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de muralla, 1 de puerta y 1 de torre de arqueros al tablero de combate.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de magos',
        cost: { gold: 4, materials: 2, valuables: 1 },
        benefit: 'Al construirla: Busca (2) Hechizos dos veces.\nDespués: Una vez por turno paga 6 Oros para buscar (2) Hechizos.'
      },
      {
        id: 'bronce',
        name: 'Excavaciones (Morada de Bronce)',
        cost: { gold: 5, materials: 3, valuables: 1 },
        benefit: 'Permite reclutar Esqueletos, Zombis y Espectros.',
        upgradeName: 'Amplificador de Nigromancia',
        upgradeCost: { gold: 4, materials: 3 },
        upgradeBenefit: 'Después de un combate donde derrotes a un héroe o ejército neutral, puedes reclutar 1 Esqueleto básico gratis.'
      },
      {
        id: 'plata',
        name: 'Mausoleos (Morada de Plata)',
        cost: { gold: 8, materials: 6, valuables: 3 },
        benefit: 'Permite reclutar Vampiros y Liches.'
      },
      {
        id: 'oro',
        name: 'Cámara de la muerte (Morada de Oro)',
        cost: { gold: 10, materials: 9, valuables: 4 },
        benefit: 'Permite reclutar Caballeros del terror y Dragones fantasma.'
      },
      {
        id: 'especial',
        name: 'Manto de la oscuridad',
        cost: { gold: 6, materials: 4, valuables: 1 },
        benefit: 'Durante tu turno, elige una:\n1. Descarta hasta 2 cartas de fuerza y magia para robar otras 2.\n2. Al comienzo del combate contra un héroe enemigo, descarta 1 carta al azar de la mano de tu oponente.'
      }
    ],
    units: {
      bronze: {
        nivel1: {
          name: 'Esqueletos',
          recruitCost: { gold: 2 },
          eliteCost: { gold: 3 },
          type: 'melee'
        },
        nivel2: {
          name: 'Zombis',
          recruitCost: { gold: 3 },
          eliteCost: { gold: 4 },
          type: 'melee'
        },
        nivel3: {
          name: 'Espectros',
          recruitCost: { gold: 4 },
          eliteCost: { gold: 6 },
          type: 'flying'
        }
      },
      silver: {
        nivel4: {
          name: 'Vampiros',
          recruitCost: { gold: 8 },
          eliteCost: { gold: 12 },
          type: 'flying'
        },
        nivel5: {
          name: 'Liches',
          recruitCost: { gold: 8 },
          eliteCost: { gold: 14 },
          type: 'ranged'
        }
      },
      gold: {
        nivel6: {
          name: 'Caballeros del terror',
          recruitCost: { gold: 12 },
          eliteCost: { gold: 20, valuables: 1 },
          type: 'melee'
        },
        nivel7: {
          name: 'Dragones fantasma',
          recruitCost: { gold: 19, valuables: 1 },
          eliteCost: { gold: 32, valuables: 2 },
          type: 'flying'
        }
      }
    }
  },
  mazmorra: {
    factionId: 'mazmorra',
    factionName: 'Mazmorra (Dungeon)',
    townName: 'Abismo de las Sombras',
    lore: 'Un vasto imperio subterráneo erigido sobre cavernas oscuras, ritos prohibidos e incuestionable poder arcano. Sus huestes dominan la hechicería elemental destructiva con minotauros pesados e imparables dragones negros.',
    buildings: [
      {
        id: 'alcaldia',
        name: 'Alcaldía',
        cost: { gold: 10, materials: 4 },
        benefit: 'Al comienzo de cada ronda de recursos, elige: +5 de Oro o +1 Objeto de valor.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 8, materials: 5, valuables: 1 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de muralla, 1 de puerta y 1 de torre de arqueros al tablero de combate.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de magos',
        cost: { gold: 4, materials: 2, valuables: 1 },
        benefit: 'Al construirla: Busca (2) Hechizos dos veces.\nDespués: Una vez por turno paga 5 Oros para buscar (2) Hechizos.',
        upgradeName: 'Vórtice de maná',
        upgradeCost: { gold: 6, materials: 3, valuables: 1 },
        upgradeBenefit: 'Al comienzo de tu turno, descarta 1 carta de tu mano para devolver tu descarte al mazo de fuerza y magia y barajarlo. Después, busca (3) en él.'
      },
      {
        id: 'bronce',
        name: 'Madrigueras (Morada de Bronce)',
        cost: { gold: 5, materials: 3, valuables: 1 },
        benefit: 'Permite reclutar Trogloditas, Arpías y Ojos maléficos.'
      },
      {
        id: 'plata',
        name: 'Laberintos internos (Morada de Plata)',
        cost: { gold: 8, materials: 6, valuables: 3 },
        benefit: 'Permite reclutar Medusas y Minotauros.'
      },
      {
        id: 'oro',
        name: 'Antiguas guaridas (Morada de Oro)',
        cost: { gold: 10, materials: 9, valuables: 4 },
        benefit: 'Permite reclutar Mantícoras y Dragones negros.'
      },
      {
        id: 'especial',
        name: 'Portal de invocación',
        cost: { gold: 10, materials: 5, valuables: 3 },
        benefit: 'Al comienzo de tu turno, puedes robar 1 carta de unidad neutral de los mazos correspondientes a las viviendas de tu ciudad y pagar el coste de reclutamiento para reclutar a esta unidad.'
      }
    ],
    units: {
      bronze: {
        nivel1: {
          name: 'Trogloditas',
          recruitCost: { gold: 2 },
          eliteCost: { gold: 3 },
          type: 'melee'
        },
        nivel2: {
          name: 'Arpías',
          recruitCost: { gold: 3 },
          eliteCost: { gold: 5 },
          type: 'flying'
        },
        nivel3: {
          name: 'Ojos maléficos',
          recruitCost: { gold: 4 },
          eliteCost: { gold: 6 },
          type: 'ranged'
        }
      },
      silver: {
        nivel4: {
          name: 'Medusas',
          recruitCost: { gold: 6 },
          eliteCost: { gold: 12 },
          type: 'ranged'
        },
        nivel5: {
          name: 'Minotauros',
          recruitCost: { gold: 8 },
          eliteCost: { gold: 14 },
          type: 'melee'
        }
      },
      gold: {
        nivel6: {
          name: 'Mantícoras',
          recruitCost: { gold: 10 },
          eliteCost: { gold: 18, valuables: 1 },
          type: 'flying'
        },
        nivel7: {
          name: 'Dragones negros',
          recruitCost: { gold: 19, valuables: 1 },
          eliteCost: { gold: 32, valuables: 2 },
          type: 'flying'
        }
      }
    }
  },
  rampart: {
    factionId: 'rampart',
    factionName: 'Murallas (Rampart)',
    townName: 'Bosque de los Susurros',
    lore: 'Una elegante metrópolis forestal donde los elfos, centauros y seres míticos conviven en armonía natural. Se especializan en la agilidad en bosques, la protección de la tierra y los indestructibles dragones dorados.',
    buildings: [
      {
        id: 'alcaldia',
        name: 'Alcaldía',
        cost: { gold: 10, materials: 6 },
        benefit: 'Al comienzo de cada ronda de recursos gana +7 de Oro.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 8, materials: 4, valuables: 1 },
        benefit: 'Desbloquea reforzar unidades. Si te asedian, añade 3 cartas de muralla, 1 de puerta y 1 de torre de arqueros al tablero de combate.',
        upgradeName: 'Arbolillos',
        upgradeCost: { gold: 4, materials: 2, valuables: 1 },
        upgradeBenefit: 'Al comienzo de cada ronda astrológica refuerza instantáneamente 1 de tus unidades Bronce o Plata por la mitad del coste en Oro.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de magos',
        cost: { gold: 4, materials: 2, valuables: 1 },
        benefit: 'Al construirla: Busca (2) Hechizos dos veces.\nDespués: Una vez por turno paga 5 Oros para buscar (2) Hechizos.'
      },
      {
        id: 'bronce',
        name: 'Complejo residencial (Morada de Bronce)',
        cost: { gold: 5, materials: 3, valuables: 1 },
        benefit: 'Permite reclutar Centauros, Enanos y Elfos.'
      },
      {
        id: 'plata',
        name: 'Fuente sobre arcos (Morada de Plata)',
        cost: { gold: 8, materials: 6, valuables: 3 },
        benefit: 'Permite reclutar Pegasos y Dendroides.'
      },
      {
        id: 'oro',
        name: 'Acantilado detrás del claro (Morada de Oro)',
        cost: { gold: 10, materials: 9, valuables: 4 },
        benefit: 'Permite reclutar Unicornios y Dragones dorados.'
      },
      {
        id: 'especial',
        name: 'Estanque místico',
        cost: { gold: 7, materials: 4, valuables: 0 },
        benefit: 'Al comienzo de cada ronda de recursos, lanza 1 dado de recursos y gana el resultado.'
      }
    ],
    units: {
      bronze: {
        nivel1: {
          name: 'Centauros',
          recruitCost: { gold: 2 },
          eliteCost: { gold: 3 },
          type: 'melee'
        },
        nivel2: {
          name: 'Enanos',
          recruitCost: { gold: 3 },
          eliteCost: { gold: 5 },
          type: 'melee'
        },
        nivel3: {
          name: 'Elfos',
          recruitCost: { gold: 4 },
          eliteCost: { gold: 6 },
          type: 'ranged'
        }
      },
      silver: {
        nivel4: {
          name: 'Pegasos',
          recruitCost: { gold: 6 },
          eliteCost: { gold: 10 },
          type: 'flying'
        },
        nivel5: {
          name: 'Dendroides',
          recruitCost: { gold: 8 },
          eliteCost: { gold: 12 },
          type: 'melee'
        }
      },
      gold: {
        nivel6: {
          name: 'Unicornios',
          recruitCost: { gold: 12 },
          eliteCost: { gold: 20, valuables: 1 },
          type: 'melee'
        },
        nivel7: {
          name: 'Dragones dorados',
          recruitCost: { gold: 20, valuables: 1 },
          eliteCost: { gold: 30, valuables: 2 },
          type: 'flying'
        }
      }
    }
  },
  torre: {
    factionId: 'torre',
    factionName: 'Torre (Tower)',
    townName: 'Cumbre de Alquimia',
    lore: 'Una majestuosa ciudad arcana de cúpulas doradas construida sobre picos nevados. Es la cuna de los magos eruditos, Gólems mecánicos, genios místicos y los colosales titanes de las tormentas.',
    buildings: [
      {
        id: 'alcaldia',
        name: 'Alcaldía',
        cost: { gold: 10, materials: 4 },
        benefit: 'Al comienzo de cada ronda de recursos, elige: +4 de Oro o Roba 1 carta de tu mazo.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 8, materials: 5, valuables: 1 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de muralla, 1 de puerta y 1 de torre de arqueros al tablero de combate.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de magos',
        cost: { gold: 4, materials: 2, valuables: 1 },
        benefit: 'Al construirla: Busca (2) Hechizos dos veces.\nDespués: Una vez por turno paga 5 Oros para buscar (2) Hechizos.',
        upgradeName: 'Muro del conocimiento',
        upgradeCost: { gold: 6, materials: 4, valuables: 1 },
        upgradeBenefit: 'Al comienzo de cada ronda astrológica, puedes coger 1 carta de características Conocimiento o Poder de tu descarte y llevártela a tu mano.'
      },
      {
        id: 'bronce',
        name: 'Talleres alquímicos (Morada de Bronce)',
        cost: { gold: 5, materials: 3, valuables: 1 },
        benefit: 'Permite reclutar Gremlins, Gárgolas y Gólems de hierro.'
      },
      {
        id: 'plata',
        name: 'Torres encantadas (Morada de Plata)',
        cost: { gold: 8, materials: 6, valuables: 3 },
        benefit: 'Permite reclutar Magos y Genios.'
      },
      {
        id: 'oro',
        name: 'Templos dorados (Morada de Oro)',
        cost: { gold: 10, materials: 9, valuables: 4 },
        benefit: 'Permite reclutar Nagas y Titanes.'
      },
      {
        id: 'especial',
        name: 'Mercaderes de artefactos',
        cost: { gold: 8, materials: 6, valuables: 1 },
        benefit: 'Durante tu turno, elige una:\n1. Paga 7 Oros para buscar (2) Artefactos.\n2. Retira una carta de artefacto de tu mano para ganar 2 Oros.'
      }
    ],
    units: {
      bronze: {
        nivel1: {
          name: 'Gremlins',
          recruitCost: { gold: 2 },
          eliteCost: { gold: 3 },
          type: 'ranged'
        },
        nivel2: {
          name: 'Gárgolas',
          recruitCost: { gold: 3 },
          eliteCost: { gold: 5 },
          type: 'flying'
        },
        nivel3: {
          name: 'Gólems de hierro',
          recruitCost: { gold: 4 },
          eliteCost: { gold: 6 },
          type: 'melee'
        }
      },
      silver: {
        nivel4: {
          name: 'Magos',
          recruitCost: { gold: 6 },
          eliteCost: { gold: 11 },
          type: 'ranged'
        },
        nivel5: {
          name: 'Genios',
          recruitCost: { gold: 8 },
          eliteCost: { gold: 12 },
          type: 'flying'
        }
      },
      gold: {
        nivel6: {
          name: 'Nagas',
          recruitCost: { gold: 13 },
          eliteCost: { gold: 18, valuables: 1 },
          type: 'melee'
        },
        nivel7: {
          name: 'Titanes',
          recruitCost: { gold: 18, valuables: 1 },
          eliteCost: { gold: 32, valuables: 2 },
          type: 'ranged'
        }
      }
    }
  },
  infierno: {
    factionId: 'infierno',
    factionName: 'Inferno',
    townName: 'Abismo de Fuego',
    lore: 'Un averno subterráneo dominado por demonios crueles, Efrits ígneos y colosales archidiablos. Su estrategia se basa en las magias destructivas de fuego, la teleportación táctica y el azote violento a melé.',
    buildings: [
      {
        id: 'alcaldia',
        name: 'Alcaldía',
        cost: { gold: 13, materials: 5 },
        benefit: 'Al comienzo de cada ronda de recursos, elige: +6 de Oro o +3 Material de construcción.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 9, materials: 4, valuables: 1 },
        benefit: 'Desbloquea el refuerzo de unidades. Cuando estés bajo asedio, añade 3 cartas de muralla, 1 de puerta y 1 de torre de arqueros al tablero de combate.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de magos',
        cost: { gold: 4, materials: 2, valuables: 1 },
        benefit: 'Al construirla: Busca (2) Hechizos dos veces.\nDespués: Una vez por turno paga 5 Oros para buscar (2) Hechizos.'
      },
      {
        id: 'bronce',
        name: 'Crisol de pecados (Morada de Bronce)',
        cost: { gold: 5, materials: 3, valuables: 1 },
        benefit: 'Permite reclutar Familiares, Magogs y Cerberos.',
        upgradeName: 'Nubes de azufre',
        upgradeCost: { gold: 6, materials: 3, valuables: 2 },
        upgradeBenefit: 'Al construirlo y al comienzo de cada ronda astrológica, coloca aquí 1 cubo de facción (máx. 3). Durante cualquier combate, puedes retirarlos para ganar +1 Poder por cubo. Solo puedes utilizar 1 cubo por Hechizo.'
      },
      {
        id: 'plata',
        name: 'Puertas del abismo (Morada de Plata)',
        cost: { gold: 9, materials: 6, valuables: 3 },
        benefit: 'Permite reclutar Demonios y Señores del abismo.'
      },
      {
        id: 'oro',
        name: 'Palacio del fuego infernal (Morada de Oro)',
        cost: { gold: 10, materials: 9, valuables: 4 },
        benefit: 'Permite reclutar Efrits y Archidiablos.'
      },
      {
        id: 'especial',
        name: 'Puerta del Castillo',
        cost: { gold: 7, materials: 5, valuables: 0 },
        benefit: 'Durante tu turno, elige una:\n1. Paga 3 Oros para descartar 1 carta al azar de la mano de tu oponente.\n2. Si tu héroe está en una ciudad o asentamiento, muévelo a otra ciudad o asentamiento bajo tu control.'
      }
    ],
    units: {
      bronze: {
        nivel1: {
          name: 'Familiares',
          recruitCost: { gold: 2 },
          eliteCost: { gold: 3 },
          type: 'melee'
        },
        nivel2: {
          name: 'Magogs',
          recruitCost: { gold: 3 },
          eliteCost: { gold: 5 },
          type: 'ranged'
        },
        nivel3: {
          name: 'Cerberos',
          recruitCost: { gold: 4 },
          eliteCost: { gold: 6 },
          type: 'melee'
        }
      },
      silver: {
        nivel4: {
          name: 'Demonios',
          recruitCost: { gold: 6 },
          eliteCost: { gold: 10 },
          type: 'melee'
        },
        nivel5: {
          name: 'Señores del abismo',
          recruitCost: { gold: 8 },
          eliteCost: { gold: 12 },
          type: 'melee'
        }
      },
      gold: {
        nivel6: {
          name: 'Efrits',
          recruitCost: { gold: 12 },
          eliteCost: { gold: 20, valuables: 1 },
          type: 'flying'
        },
        nivel7: {
          name: 'Archidiablos',
          recruitCost: { gold: 20, valuables: 1 },
          eliteCost: { gold: 30, valuables: 2 },
          type: 'flying'
        }
      }
    }
  },
  stronghold: {
    factionId: 'stronghold',
    factionName: 'Bastión (Stronghold)',
    townName: 'Campamento Orc',
    lore: 'Un campamento de guerra bárbaro asimilado sobre desiertos y estepas pedregosas. Sus ejércitos dependen de la fuerza física bruta, tácticas de asalto rápido, orcos salvajes, cíclopes y los brutales Behemoths.',
    buildings: [
      {
        id: 'alcaldia',
        name: 'Alcaldía',
        cost: { gold: 10, materials: 4 },
        benefit: 'Al comienzo de cada ronda de recursos, elige: Roba 2 cartas del mazo de fuerza y magia o +2 Materiales de construcción.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 8, materials: 4, valuables: 1 },
        benefit: 'Desbloquea unidades de refuerzo. Bajo asedio, añade 3 cartas de muro, 1 puerta y 1 de torre de arqueros al tablero de combate.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de magos',
        cost: { gold: 4, materials: 2, valuables: 1 },
        benefit: 'Al construirla: Busca (2) Hechizos dos veces.\nDespués: Una vez por turno paga 6 Oros para buscar (2) Hechizos.'
      },
      {
        id: 'bronce',
        name: 'Chozas (Morada de Bronce)',
        cost: { gold: 4, materials: 3, valuables: 1 },
        benefit: 'Permite reclutar Goblins, Incursores lupinos y Orcos.',
        upgradeName: 'Gremio de mercenarios',
        upgradeCost: { gold: 2, materials: 2 },
        upgradeBenefit: 'Cada vez que ganes un combate contra unidades neutrales, gana 1 Oro. Al reclutar o reforzar, puedes utilizar Materiales u Objetos de valor como Oro.'
      },
      {
        id: 'plata',
        name: 'Fuerte bajo el nido (Morada de Plata)',
        cost: { gold: 8, materials: 6, valuables: 3 },
        benefit: 'Permite reclutar Ogros y Aves de trueno.'
      },
      {
        id: 'oro',
        name: 'Cuevas de montaña (Morada de Oro)',
        cost: { gold: 10, materials: 8, valuables: 4 },
        benefit: 'Permite reclutar Cíclopes y Behemoths.'
      },
      {
        id: 'especial',
        name: 'Salón de Valhalla',
        cost: { gold: 8, materials: 3, valuables: 0 },
        benefit: 'Una vez por ronda, una de las unidades gana +1 Ataque para un solo ataque.'
      }
    ],
    units: {
      bronze: {
        nivel1: {
          name: 'Goblins',
          recruitCost: { gold: 2 },
          eliteCost: { gold: 3 },
          type: 'melee'
        },
        nivel2: {
          name: 'Incursores lupinos',
          recruitCost: { gold: 3 },
          eliteCost: { gold: 5 },
          type: 'melee'
        },
        nivel3: {
          name: 'Orcos',
          recruitCost: { gold: 4 },
          eliteCost: { gold: 6 },
          type: 'ranged'
        }
      },
      silver: {
        nivel4: {
          name: 'Ogros',
          recruitCost: { gold: 6 },
          eliteCost: { gold: 10 },
          type: 'melee'
        },
        nivel5: {
          name: 'Aves de trueno',
          recruitCost: { gold: 8 },
          eliteCost: { gold: 14 },
          type: 'flying'
        }
      },
      gold: {
        nivel6: {
          name: 'Cíclopes',
          recruitCost: { gold: 13 },
          eliteCost: { gold: 17, valuables: 1 },
          type: 'ranged'
        },
        nivel7: {
          name: 'Behemoths',
          recruitCost: { gold: 19, valuables: 1 },
          eliteCost: { gold: 29, valuables: 2 },
          type: 'melee'
        }
      }
    }
  },
  fortaleza: {
    factionId: 'fortaleza',
    factionName: 'Fortaleza (Fortress)',
    townName: 'Marisma de Escamas',
    lore: 'Una ciudad camuflada en lo profundo de pantanos ponzoñosos. Sus batallones se defienden con garras impenetrables comandando fieros hombres lagarto, basiliscos petrificadores, gorgonas y letales hidras de caos.',
    buildings: [
      {
        id: 'alcaldia',
        name: 'Alcaldía',
        cost: { gold: 10, materials: 4 },
        benefit: 'Al comienzo de cada ronda de recursos, elige: +5 de Oro o Intercambiar recursos como en el mercadillo.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 8, materials: 5, valuables: 1 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de muralla, 1 de puerta y 1 de torre de arqueros al tablero de combate.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de magos',
        cost: { gold: 4, materials: 2, valuables: 1 },
        benefit: 'Al construirla: Busca (2) Hechizos dos veces.\nDespués: Una vez por turno paga 5 Oros para buscar (2) Hechizos.'
      },
      {
        id: 'bronce',
        name: 'Guarida (Morada de Bronce)',
        cost: { gold: 5, materials: 3, valuables: 1 },
        benefit: 'Permite reclutar Gnolls, Hombres lagarto y Libélulas.',
        upgradeName: 'Jaula de los guerreros',
        upgradeCost: { gold: 6, materials: 4, valuables: 1 },
        upgradeBenefit: 'Si la construyes, al comienzo de cada ronda de recursos, coloca un cubo de facción aquí (máximo 2). Durante cualquier combate, un jugador puede retirarlos para ganar +1 Ataque o +1 Defensa por cubo.'
      },
      {
        id: 'plata',
        name: 'Guaridas de la ciénaga (Morada de Plata)',
        cost: { gold: 8, materials: 6, valuables: 3 },
        benefit: 'Permite reclutar Basiliscos y Gorgonas.'
      },
      {
        id: 'oro',
        name: 'Nido sobre el estanque (Morada de Oro)',
        cost: { gold: 10, materials: 9, valuables: 4 },
        benefit: 'Permite reclutar Wyverns e Hidras.'
      },
      {
        id: 'especial',
        name: 'Obelisco de sangre',
        cost: { gold: 6, materials: 6, valuables: 0 },
        benefit: 'Al comienzo de cada ronda de recursos o instantáneamente, después de que tu ciudad haya sido asediada, puedes buscar (4) en tu descarte.'
      }
    ],
    units: {
      bronze: {
        nivel1: {
          name: 'Gnolls',
          recruitCost: { gold: 2 },
          eliteCost: { gold: 3 },
          type: 'melee'
        },
        nivel2: {
          name: 'Hombres lagarto',
          recruitCost: { gold: 3 },
          eliteCost: { gold: 5 },
          type: 'ranged'
        },
        nivel3: {
          name: 'Libélulas',
          recruitCost: { gold: 4 },
          eliteCost: { gold: 7 },
          type: 'flying'
        }
      },
      silver: {
        nivel4: {
          name: 'Basiliscos',
          recruitCost: { gold: 6 },
          eliteCost: { gold: 10 },
          type: 'melee'
        },
        nivel5: {
          name: 'Gorgonas',
          recruitCost: { gold: 8 },
          eliteCost: { gold: 12 },
          type: 'melee'
        }
      },
      gold: {
        nivel6: {
          name: 'Wyverns',
          recruitCost: { gold: 12 },
          eliteCost: { gold: 18, valuables: 1 },
          type: 'flying'
        },
        nivel7: {
          name: 'Hidras',
          recruitCost: { gold: 20, valuables: 1 },
          eliteCost: { gold: 28, valuables: 2 },
          type: 'melee'
        }
      }
    }
  },
  confluencia: {
    factionId: 'confluencia',
    factionName: 'Conflujo (Conflux)',
    townName: 'Vórtice Elemental',
    lore: 'Un santuario planar sagrado donde la energía mágica pura se condensa en elementales de fuego, tierra, agua y aire. Son reyes de la alta magia comandados por el inmortal fénix celestial.',
    buildings: [
      {
        id: 'alcaldia',
        name: 'Alcaldía',
        cost: { gold: 10, materials: 3 },
        benefit: 'Al principio de cada ronda de recursos, elige: +4 de Oro o Buscar (3) Hechizos.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 8, materials: 4, valuables: 1 },
        benefit: 'Desbloquea refuerzo de unidades. Bajo asedio, añade 3 cartas de muro, 1 puerta y 1 torre de arqueros al tablero de combate.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de magos',
        cost: { gold: 4, materials: 2, valuables: 1 },
        benefit: 'Al construirla: Busca (2) Hechizos dos veces.\nDespués: Una vez por turno paga 5 Oros para buscar (2) Hechizos.'
      },
      {
        id: 'bronce',
        name: 'Altares de aire y agua (Morada de Bronce)',
        cost: { gold: 4, materials: 3, valuables: 1 },
        benefit: 'Permite reclutar Hadas, Elementales de tormenta y Elementales de hielo.',
        upgradeName: 'Jardín de la vida',
        upgradeCost: { gold: 2, materials: 1, valuables: 1 },
        upgradeBenefit: 'Al comienzo de cada ronda, recluta o refuerza hadas gratis.'
      },
      {
        id: 'plata',
        name: 'Altares de fuego y tierra (Morada de Plata)',
        cost: { gold: 8, materials: 6, valuables: 3 },
        benefit: 'Permite reclutar Elementales de energía y Elementales de magma.'
      },
      {
        id: 'oro',
        name: 'Pira mágica (Morada de Oro)',
        cost: { gold: 9, materials: 8, valuables: 4 },
        benefit: 'Permite reclutar Elementales mágicos y Fénix.'
      },
      {
        id: 'especial',
        name: 'Universidad mágica',
        cost: { gold: 6, materials: 3, valuables: 0 },
        benefit: 'Una vez por ronda, en lugar de buscar en el mazo Hechizos, elige una escuela de magia y descarta cartas de la parte superior del mazo de hechizos hasta que encuentres un hechizo de la escuela elegida.\nLlévate el hechizo a la mano.'
      }
    ],
    units: {
      bronze: {
        nivel1: {
          name: 'Hadas',
          recruitCost: { gold: 2 },
          eliteCost: { gold: 4 },
          type: 'melee'
        },
        nivel2: {
          name: 'Elementales de tormenta',
          recruitCost: { gold: 3 },
          eliteCost: { gold: 5 },
          type: 'ranged'
        },
        nivel3: {
          name: 'Elementales de hielo',
          recruitCost: { gold: 4 },
          eliteCost: { gold: 7 },
          type: 'ranged'
        }
      },
      silver: {
        nivel4: {
          name: 'Elementales de energía',
          recruitCost: { gold: 6 },
          eliteCost: { gold: 8 },
          type: 'melee'
        },
        nivel5: {
          name: 'Elementales de magma',
          recruitCost: { gold: 9 },
          eliteCost: { gold: 13 },
          type: 'melee'
        }
      },
      gold: {
        nivel6: {
          name: 'Elementales mágicos',
          recruitCost: { gold: 13 },
          eliteCost: { gold: 19, valuables: 1 },
          type: 'melee'
        },
        nivel7: {
          name: 'Fénix',
          recruitCost: { gold: 21, valuables: 1 },
          eliteCost: { gold: 29, valuables: 2 },
          type: 'flying'
        }
      }
    }
  },
  cove: {
    factionId: 'cove',
    factionName: 'Cala (Cove)',
    townName: 'Bahía del Corsario',
    lore: 'Un asentamiento costero pirata de Regnan, oculto tras densas brumas marinas. Comandan veloces oceánidos, asaltantes de abordaje armados con cañones pesados, serpientes marinas y ninfas acuáticas.',
    buildings: [
      {
        id: 'alcaldia',
        name: 'Alcaldía',
        cost: { gold: 10, materials: 4 },
        benefit: 'Al comienzo de cada ronda de recursos, elige: +4 de Oro o Retira 1 Artefacto de tu mano para ganar 1 Punto de experiencia.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 8, materials: 4, valuables: 1 },
        benefit: 'Desbloquea refuerzo de unidades. Bajo asedio, añade 3 cartas de muros, 1 de puerta y 1 torre de arqueros al tablero de combate.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de magos',
        cost: { gold: 4, materials: 2, valuables: 1 },
        benefit: 'Al construirla: Busca (2) Hechizos dos veces.\nDespués: Una vez por turno paga 5 Oros para buscar (2) Hechizos.'
      },
      {
        id: 'bronce',
        name: 'Bahía (Morada de Bronce)',
        cost: { gold: 4, materials: 3, valuables: 1 },
        benefit: 'Permite reclutar Oceánidos, Marineros y Lobos de mar.',
        upgradeName: 'Taberna',
        upgradeCost: { gold: 3, materials: 2, valuables: 0 },
        upgradeBenefit: 'Una vez durante la ronda de anuncio astrológico, al tiempo que refuerzas una unidad, reduce el coste de refuerzo en 3 Oros (hasta un mínimo de 0).'
      },
      {
        id: 'plata',
        name: 'Nidos que se elevan sobre el mar (Morada de Plata)',
        cost: { gold: 8, materials: 6, valuables: 3 },
        benefit: 'Permite reclutar Ayssids y Hechiceras.'
      },
      {
        id: 'oro',
        name: 'Vórtice temido (Morada de Oro)',
        cost: { gold: 10, materials: 8, valuables: 4 },
        benefit: 'Permite reclutar Nix y Háspidos.'
      },
      {
        id: 'especial',
        name: 'Cofradía de ladrones',
        cost: { gold: 4, materials: 2, valuables: 1 },
        benefit: 'Una vez durante tu turno, elige cualquier mazo del juego (incluido el mazo de fuerza y magia de otro jugador), mira sus 2 cartas superiores y coloca una de ellas en su pila de descarte y la otra de nuevo en la parte superior del mazo.'
      }
    ],
    units: {
      bronze: {
        nivel1: {
          name: 'Oceánidos',
          recruitCost: { gold: 2 },
          eliteCost: { gold: 3 },
          type: 'melee'
        },
        nivel2: {
          name: 'Marineros',
          recruitCost: { gold: 3 },
          eliteCost: { gold: 5 },
          type: 'melee'
        },
        nivel3: {
          name: 'Lobos de mar',
          recruitCost: { gold: 4 },
          eliteCost: { gold: 6 },
          type: 'ranged'
        }
      },
      silver: {
        nivel4: {
          name: 'Ayssids',
          recruitCost: { gold: 6 },
          eliteCost: { gold: 10 },
          type: 'flying'
        },
        nivel5: {
          name: 'Hechiceras',
          recruitCost: { gold: 8 },
          eliteCost: { gold: 13 },
          type: 'ranged'
        }
      },
      gold: {
        nivel6: {
          name: 'Nix',
          recruitCost: { gold: 12 },
          eliteCost: { gold: 20, valuables: 1 },
          type: 'melee'
        },
        nivel7: {
          name: 'Háspidos',
          recruitCost: { gold: 18, valuables: 1 },
          eliteCost: { gold: 30, valuables: 2 },
          type: 'melee'
        }
      }
    }
  }
};
