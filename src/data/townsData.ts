export interface ResourceCost {
  gold: number;
  materials?: number;
  valuables?: number;
}

export interface Unit {
  name: string; // El nombre es idéntico para ambos lados de la carta ("unas pocas" / "manada")
  recruitCost: ResourceCost; // Coste básico ("Unas pocas")
  eliteCost: ResourceCost; // Coste reforzado ("Manada")
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
    bronze: Unit;
    silver: Unit;
    gold: Unit;
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
        cost: { gold: 10 },
        benefit: 'Al comienzo de cada ronda de recursos, produce +10 de Oro. Además, reduce en 1 de Oro el coste del primer reclutamiento de Bronce en cada ronda.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 5, materials: 5 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de muralla, 1 de puerta y 1 de torre de arqueros al tablero de combate.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de Magos',
        cost: { gold: 5, materials: 5, valuables: 5 },
        benefit: 'Al construirla, busca 2 cartas en el mazo de hechizos y elige una para tu mano. En rondas posteriores, puedes usar la Ficha de Cofradía para volver a buscar (Busca 2, elige 1) pagando 6 de Oro.'
      },
      {
        id: 'bronce',
        name: 'Torres (Morada de Bronce)',
        cost: { gold: 10 },
        benefit: 'Permite reclutar Alabarderos y Arqueros (unidades de Bronce).',
        upgradeName: 'Herrería',
        upgradeCost: { gold: 5, materials: 5 },
        upgradeBenefit: 'Habilita la compra de cartas de Arma/Armadura o añade bonificaciones de combate.'
      },
      {
        id: 'plata',
        name: 'Tierra sagrada (Morada de Plata)',
        cost: { gold: 15, materials: 5 },
        benefit: 'Permite reclutar Grifos, Cruzados y Monjes.',
        upgradeName: 'Tierra sagrada Mejorada',
        upgradeCost: { gold: 10, materials: 5, valuables: 2 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" de Grifos, Cruzados y Monjes.'
      },
      {
        id: 'oro',
        name: 'Gloria de Erathia (Morada de Oro)',
        cost: { gold: 20, materials: 5, valuables: 5 },
        benefit: 'Permite reclutar Caballeros y Ángeles.',
        upgradeName: 'Gloria de Erathia Mejorada',
        upgradeCost: { gold: 15, materials: 5, valuables: 3 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" de Caballeros y Ángeles.'
      },
      {
        id: 'especial',
        name: 'Hermandad de la Espada',
        cost: { gold: 10, materials: 5, valuables: 3 },
        benefit: 'Otorga +1 a la fuerza de combate de las tropas terrestres aliadas adyacentes en el combate táctico.'
      }
    ],
    units: {
      bronze: {
        name: 'Alabarderos / Arqueros',
        recruitCost: { gold: 4 },
        eliteCost: { gold: 4 }
      },
      silver: {
        name: 'Grifos / Cruzados / Monjes',
        recruitCost: { gold: 8 },
        eliteCost: { gold: 8 }
      },
      gold: {
        name: 'Caballeros / Ángeles',
        recruitCost: { gold: 12 },
        eliteCost: { gold: 12 }
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
        cost: { gold: 10 },
        benefit: 'Al comienzo de cada ronda de recursos, produce +5 de Oro y alza 1 Esqueleto básico gratis en tu reserva de tropas (sin coste de oro).'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 5, materials: 5 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de muralla, 1 de puerta y 1 de torre de espíritus al tablero de combate.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de Magos',
        cost: { gold: 5, materials: 5, valuables: 5 },
        benefit: 'Al construirla, busca 2 cartas en el mazo de hechizos y elige una para tu mano. En rondas posteriores, puedes usar la Ficha de Cofradía para volver a buscar (Busca 2, elige 1) pagando 6 de Oro.'
      },
      {
        id: 'bronce',
        name: 'Cementerio (Morada de Bronce)',
        cost: { gold: 10 },
        benefit: 'Permite reclutar Esqueletos y Zombis (unidades de Bronce).',
        upgradeName: 'Amplificador de nigromancia',
        upgradeCost: { gold: 5, materials: 5 },
        upgradeBenefit: 'Siempre que derrotes a un ejército neutral de nivel Bronce, alza inmediatamente 1 Esqueleto básico gratis.'
      },
      {
        id: 'plata',
        name: 'Mausoleo (Morada de Plata)',
        cost: { gold: 15, materials: 5 },
        benefit: 'Permite reclutar Fantasmas, Vampiros y Liches.',
        upgradeName: 'Mausoleo Mejorado',
        upgradeCost: { gold: 10, materials: 5, valuables: 2 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" de Fantasmas, Vampiros y Liches.'
      },
      {
        id: 'oro',
        name: 'Tumba del dragón (Morada de Oro)',
        cost: { gold: 20, materials: 5, valuables: 5 },
        benefit: 'Permite reclutar Caballeros de la muerte y Dragones de hueso.',
        upgradeName: 'Tumba del dragón Mejorada',
        upgradeCost: { gold: 15, materials: 5, valuables: 3 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" de Caballeros de la muerte y Dragones de hueso.'
      },
      {
        id: 'especial',
        name: 'Foso de almas',
        cost: { gold: 10, materials: 5, valuables: 3 },
        benefit: 'Reduce el coste de oro para reclutar o revivir unidades de tu cementerio o pila de descartes en un 20%.'
      }
    ],
    units: {
      bronze: {
        name: 'Esqueletos / Zombis',
        recruitCost: { gold: 4 },
        eliteCost: { gold: 4 }
      },
      silver: {
        name: 'Fantasmas / Vampiros / Liches',
        recruitCost: { gold: 8 },
        eliteCost: { gold: 8 }
      },
      gold: {
        name: 'Caballeros de la muerte / Dragones de hueso',
        recruitCost: { gold: 12 },
        eliteCost: { gold: 12 }
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
        cost: { gold: 10 },
        benefit: 'Al comienzo de cada ronda de recursos, produce +5 de Oro y +1 Material. Una vez por ronda, puedes pagar 2 de Oro para robar 1 carta del mazo de aventura.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 5, materials: 5 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de muralla, 1 de puerta de hierro y 1 de foso de lava al combate.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de Magos',
        cost: { gold: 5, materials: 5, valuables: 5 },
        benefit: 'Al construirla, busca 2 cartas en el mazo de hechizos y elige una para tu mano. En rondas posteriores, puedes usar la Ficha de Cofradía para volver a buscar (Busca 2, elige 1) pagando 6 de Oro.'
      },
      {
        id: 'bronce',
        name: 'Cueva de Trogloditas (Morada de Bronce)',
        cost: { gold: 10 },
        benefit: 'Permite reclutar Trogloditas y Harpías (unidades de Bronce).',
        upgradeName: 'Cueva Mejorada',
        upgradeCost: { gold: 5, materials: 5 },
        upgradeBenefit: 'Las unidades de Bronce ganan +1 de velocidad de iniciativa en la primera ronda del combate.'
      },
      {
        id: 'plata',
        name: 'Capilla del Azote (Morada de Plata)',
        cost: { gold: 15, materials: 5 },
        benefit: 'Permite reclutar Contempladores, Medusas y Minotauros.',
        upgradeName: 'Capilla del Azote Mejorada',
        upgradeCost: { gold: 10, materials: 5, valuables: 2 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" de Contempladores, Medusas y Minotauros.'
      },
      {
        id: 'oro',
        name: 'Cueva de Dragones (Morada de Oro)',
        cost: { gold: 20, materials: 5, valuables: 5 },
        benefit: 'Permite reclutar Manticoras y Dragones rojos.',
        upgradeName: 'Cueva de Dragones Mejorada',
        upgradeCost: { gold: 15, materials: 5, valuables: 3 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" de Manticoras y Dragones negros.'
      },
      {
        id: 'especial',
        name: 'Vórtice de maná',
        cost: { gold: 10, materials: 5, valuables: 3 },
        benefit: 'Una vez por combate, te permite restablecer instantáneamente todos tus puntos de Maná consumidos o duplicar el daño de tu primer conjuro táctico.'
      }
    ],
    units: {
      bronze: {
        name: 'Trogloditas / Harpías',
        recruitCost: { gold: 4 },
        eliteCost: { gold: 4 }
      },
      silver: {
        name: 'Contempladores / Medusas / Minotauros',
        recruitCost: { gold: 8 },
        eliteCost: { gold: 8 }
      },
      gold: {
        name: 'Manticoras / Dragones rojos',
        recruitCost: { gold: 12 },
        eliteCost: { gold: 12 }
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
        cost: { gold: 10 },
        benefit: 'Al comienzo de cada ronda de recursos, produce +5 de Oro y +1 Punto de Movimiento. Si tu héroe termina su turno en una casilla de bosque, roba 1 carta de hechizo gratis.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 5, materials: 5 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de murallas de bosque, 1 de puerta de raíces y 1 de nido de avispas al combate.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de Magos',
        cost: { gold: 5, materials: 5, valuables: 5 },
        benefit: 'Al construirla, busca 2 cartas en el mazo de hechizos y elige una para tu mano. En rondas posteriores, puedes usar la Ficha de Cofradía para volver a buscar (Busca 2, elige 1) pagando 6 de Oro.'
      },
      {
        id: 'bronce',
        name: 'Claro de centauros (Morada de Bronce)',
        cost: { gold: 10 },
        benefit: 'Permite reclutar Centauros y Enanos (unidades de Bronce).',
        upgradeName: 'Silo de recursos',
        upgradeCost: { gold: 5, materials: 5 },
        upgradeBenefit: 'Produce automáticamente +1 Gema adicional al comienzo de cada ronda de recursos.'
      },
      {
        id: 'plata',
        name: 'Hogar de los Elfos (Morada de Plata)',
        cost: { gold: 15, materials: 5 },
        benefit: 'Permite reclutar Elfos, Pegasos y Dendroides.',
        upgradeName: 'Hogar de los Elfos Mejorado',
        upgradeCost: { gold: 10, materials: 5, valuables: 2 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" de Elfos, Pegasos y Dendroides.'
      },
      {
        id: 'oro',
        name: 'Arboleda Dorada (Morada de Oro)',
        cost: { gold: 20, materials: 5, valuables: 5 },
        benefit: 'Permite reclutar Unicornios y Dragones verdes.',
        upgradeName: 'Arboleda Dorada Mejorada',
        upgradeCost: { gold: 15, materials: 5, valuables: 3 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" de Unicornios y Dragones dorados.'
      },
      {
        id: 'especial',
        name: 'Tesoro',
        cost: { gold: 10, materials: 5, valuables: 3 },
        benefit: 'Al final de cada turno, si logras conservar al menos 1 Moneda de Oro en tu tesorería, recibes inmediatamente +2 de Oro de interés gratis.'
      }
    ],
    units: {
      bronze: {
        name: 'Centauros / Enanos',
        recruitCost: { gold: 4 },
        eliteCost: { gold: 4 }
      },
      silver: {
        name: 'Elfos / Pegasos / Dendroides',
        recruitCost: { gold: 8 },
        eliteCost: { gold: 8 }
      },
      gold: {
        name: 'Unicornios / Dragones verdes',
        recruitCost: { gold: 12 },
        eliteCost: { gold: 12 }
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
        cost: { gold: 10 },
        benefit: 'Al comienzo de cada ronda de recursos, produce +5 de Oro y +1 Objeto de valor (Valuables). Tus compras de pergaminos o de cartas de artefactos tienen un descuento permanente de 1 de Oro.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 5, materials: 5 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de muralla helada, 1 de compuerta mística y 1 de mina de nubes.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de Magos',
        cost: { gold: 5, materials: 5, valuables: 5 },
        benefit: 'Al construirla, busca 2 cartas en el mazo de hechizos y elige una para tu mano. En rondas posteriores, puedes usar la Ficha de Cofradía para volver a buscar (Busca 2, elige 1) pagando 6 de Oro.'
      },
      {
        id: 'bronce',
        name: 'Fábrica de Juguetes (Morada de Bronce)',
        cost: { gold: 10 },
        benefit: 'Permite reclutar Gremlins y Gárgolas (unidades de Bronce).',
        upgradeName: 'Alquimista',
        upgradeCost: { gold: 5, materials: 5 },
        upgradeBenefit: 'Ganas un 15% de descuento permanente en la compra de cartas de hechizos en el mercado o en la cofradía.'
      },
      {
        id: 'plata',
        name: 'Taller de Gólems (Morada de Plata)',
        cost: { gold: 15, materials: 5 },
        benefit: 'Permite reclutar Gólems de hierro, Genios y Archimagos.',
        upgradeName: 'Taller de Gólems Mejorado',
        upgradeCost: { gold: 10, materials: 5, valuables: 2 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" (Gólems de acero, Genios y Archimagos de Élite).'
      },
      {
        id: 'oro',
        name: 'Nube de Tormenta (Morada de Oro)',
        cost: { gold: 20, materials: 5, valuables: 5 },
        benefit: 'Permite reclutar Gigantes y Titanes.',
        upgradeName: 'Nube de Tormenta Mejorada',
        upgradeCost: { gold: 15, materials: 5, valuables: 3 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" de Gigantes y Titanes.'
      },
      {
        id: 'especial',
        name: 'Biblioteca',
        cost: { gold: 10, materials: 5, valuables: 3 },
        benefit: 'Siempre que realices la acción de buscar hechizos en la Cofradía de Magos, robas 1 carta adicional para tu selección del draft.'
      }
    ],
    units: {
      bronze: {
        name: 'Gremlins / Gárgolas',
        recruitCost: { gold: 4 },
        eliteCost: { gold: 4 }
      },
      silver: {
        name: 'Gólems de hierro / Genios / Archimagos',
        recruitCost: { gold: 8 },
        eliteCost: { gold: 8 }
      },
      gold: {
        name: 'Gigantes / Titanes',
        recruitCost: { gold: 12 },
        eliteCost: { gold: 12 }
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
        cost: { gold: 10 },
        benefit: 'Al comienzo de cada ronda de recursos, produce +5 de Oro. Además, puedes descartar 1 carta de tu mano para ganar inmediatamente +3 de Oro o +1 Material.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 5, materials: 5 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de muralla de obsidiana, 1 de compuerta infernal y 1 de foso de azufre.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de Magos',
        cost: { gold: 5, materials: 5, valuables: 5 },
        benefit: 'Al construirla, busca 2 cartas en el mazo de hechizos y elige una para tu mano. En rondas posteriores, puedes usar la Ficha de Cofradía para volver a buscar (Busca 2, elige 1) pagando 6 de Oro.'
      },
      {
        id: 'bronce',
        name: 'Criadero de Sabuesos (Morada de Bronce)',
        cost: { gold: 10 },
        benefit: 'Permite reclutar Familiares y Magogs (unidades de Bronce).',
        upgradeName: 'Silo de azufre',
        upgradeCost: { gold: 5, materials: 5 },
        upgradeBenefit: 'Produce automáticamente +1 de Azufre (recurso Valioso) al comienzo de cada ronda de recursos.'
      },
      {
        id: 'plata',
        name: 'Fosa de Demonios (Morada de Plata)',
        cost: { gold: 15, materials: 5 },
        benefit: 'Permite reclutar Cerberos, Demonios y Señores del abismo.',
        upgradeName: 'Fosa de Demonios Mejorada',
        upgradeCost: { gold: 10, materials: 5, valuables: 2 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" (Cerberos, Demonios y Señores del abismo de Élite).'
      },
      {
        id: 'oro',
        name: 'Palacio de Efrits (Morada de Oro)',
        cost: { gold: 20, materials: 5, valuables: 5 },
        benefit: 'Permite reclutar Efrits y Archidiablos.',
        upgradeName: 'Palacio de Efrits Mejorado',
        upgradeCost: { gold: 15, materials: 5, valuables: 3 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" de Efrits y Archidiablos.'
      },
      {
        id: 'especial',
        name: 'Puertas del Castillo',
        cost: { gold: 10, materials: 5, valuables: 3 },
        benefit: 'Permite a tus héroes teletransportarse instantáneamente de vuelta a este Castillo desde cualquier portal o ciudad del mapa de exploración pagando solo 1 PM.'
      }
    ],
    units: {
      bronze: {
        name: 'Familiares / Magogs',
        recruitCost: { gold: 4 },
        eliteCost: { gold: 4 }
      },
      silver: {
        name: 'Cerberos / Demonios / Señores del abismo',
        recruitCost: { gold: 8 },
        eliteCost: { gold: 8 }
      },
      gold: {
        name: 'Efrits / Archidiablos',
        recruitCost: { gold: 12 },
        eliteCost: { gold: 12 }
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
        cost: { gold: 10 },
        benefit: 'Al comienzo de cada ronda de recursos, produce +5 de Oro y +1 Material. Tus héroes ganan +1 de daño de combate físico por cada campamento neutral derrotado en esta ronda.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 5, materials: 5 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de empalizadas de picos, 1 de compuerta reforzada y 1 de torre de catapultas.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de Magos',
        cost: { gold: 5, materials: 5, valuables: 5 },
        benefit: 'Al construirla, busca 2 cartas en el mazo de hechizos y elige una para tu mano. En rondas posteriores, puedes usar la Ficha de Cofradía para volver a buscar (Busca 2, elige 1) pagando 6 de Oro.'
      },
      {
        id: 'bronce',
        name: 'Chozas de Orcos (Morada de Bronce)',
        cost: { gold: 10 },
        benefit: 'Permite reclutar Duendes y Orcos (unidades de Bronce).',
        upgradeName: 'Mercado de esclavos',
        upgradeCost: { gold: 5, materials: 5 },
        upgradeBenefit: 'Permite cambiar o retirar tropas de tu reserva de reclutamiento a cambio de su coste básico refundido en materiales.'
      },
      {
        id: 'plata',
        name: 'Nido de Rocs (Morada de Plata)',
        cost: { gold: 15, materials: 5 },
        benefit: 'Permite reclutar Lobos, Rocs y Ogros.',
        upgradeName: 'Nido de Rocs Mejorado',
        upgradeCost: { gold: 10, materials: 5, valuables: 2 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" (Lobos de combate, Rocs y Ogros de Élite).'
      },
      {
        id: 'oro',
        name: 'La Guarida del Behemoth (Morada de Oro)',
        cost: { gold: 20, materials: 5, valuables: 5 },
        benefit: 'Permite reclutar Cíclopes y Behemoths.',
        upgradeName: 'La Guarida del Behemoth Mejorada',
        upgradeCost: { gold: 15, materials: 5, valuables: 3 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" de Cíclopes y Behemoths.'
      },
      {
        id: 'especial',
        name: 'Salón de Valhalla',
        cost: { gold: 10, materials: 5, valuables: 3 },
        benefit: 'Incrementa de forma permanente en +1 la estadística de Ataque físico del Héroe Principal en su track personal.'
      }
    ],
    units: {
      bronze: {
        name: 'Duendes / Orcos',
        recruitCost: { gold: 4 },
        eliteCost: { gold: 4 }
      },
      silver: {
        name: 'Lobos / Rocs / Ogros',
        recruitCost: { gold: 8 },
        eliteCost: { gold: 8 }
      },
      gold: {
        name: 'Cíclopes / Behemoths',
        recruitCost: { gold: 12 },
        eliteCost: { gold: 12 }
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
        cost: { gold: 10 },
        benefit: 'Al comienzo de cada ronda de recursos, produce +5 de Oro. Tus héroes ganan +2 Puntos de Movimiento adicionales si comienzan su turno en casillas de pantano.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 5, materials: 5 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de terraplén de lodo, 1 de puerta de juncos y 1 de foso de pirañas.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de Magos',
        cost: { gold: 5, materials: 5, valuables: 5 },
        benefit: 'Al construirla, busca 2 cartas en el mazo de hechizos y elige una para tu mano. En rondas posteriores, puedes usar la Ficha de Cofradía para volver a buscar (Busca 2, elige 1) pagando 6 de Oro.'
      },
      {
        id: 'bronce',
        name: 'Nido de Hombres Lagarto (Morada de Bronce)',
        cost: { gold: 10 },
        benefit: 'Permite reclutar Goblins de agua y Hombres lagarto (unidades de Bronce).',
        upgradeName: 'Jaula de Señores de la Guerra',
        upgradeCost: { gold: 5, materials: 5 },
        upgradeBenefit: 'Incrementa de forma permanente en +1 la estadística de Defensa física del Héroe Principal en su track personal.'
      },
      {
        id: 'plata',
        name: 'Cercado de Basiliscos (Morada de Plata)',
        cost: { gold: 15, materials: 5 },
        benefit: 'Permite reclutar Libélulas, Basiliscos y Gorgonas.',
        upgradeName: 'Cercado de Basiliscos Mejorado',
        upgradeCost: { gold: 10, materials: 5, valuables: 2 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" (Libélulas de fuego, Basiliscos y Gorgonas de Élite).'
      },
      {
        id: 'oro',
        name: 'Estanque de Hidras (Morada de Oro)',
        cost: { gold: 20, materials: 5, valuables: 5 },
        benefit: 'Permite reclutar Escorpiones e Hidras de caos.',
        upgradeName: 'Estanque de Hidras Mejorado',
        upgradeCost: { gold: 15, materials: 5, valuables: 3 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" de Escorpiones e Hidras de caos de Élite.'
      },
      {
        id: 'especial',
        name: 'Muro de Hiedra',
        cost: { gold: 10, materials: 5, valuables: 3 },
        benefit: 'Otorga una bonificación de +1 a la armadura/defensa de todas tus tropas que se encuentren situadas dentro o adyacentes a tus murallas defensivas.'
      }
    ],
    units: {
      bronze: {
        name: 'Goblins de agua / Hombres lagarto',
        recruitCost: { gold: 4 },
        eliteCost: { gold: 4 }
      },
      silver: {
        name: 'Libélulas / Basiliscos / Gorgonas',
        recruitCost: { gold: 8 },
        eliteCost: { gold: 8 }
      },
      gold: {
        name: 'Escorpiones / Hidras de caos',
        recruitCost: { gold: 12 },
        eliteCost: { gold: 12 }
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
        cost: { gold: 10 },
        benefit: 'Al comienzo de cada ronda de recursos, produce +5 de Oro. Al comprar hechizos en la Cofradía de Magos, puedes pagar con Materiales en lugar de Oro a un ratio de 1:1.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 5, materials: 5 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de muralla astral, 1 de portal de energía y 1 de rayo elemental.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de Magos',
        cost: { gold: 5, materials: 5, valuables: 5 },
        benefit: 'Al construirla, busca 2 cartas en el mazo de hechizos y elige una para tu mano. En rondas posteriores, puedes usar la Ficha de Cofradía para volver a buscar (Busca 2, elige 1) pagando 6 de Oro.'
      },
      {
        id: 'bronce',
        name: 'Hogar de Duendecillos (Morada de Bronce)',
        cost: { gold: 10 },
        benefit: 'Permite reclutar Pixies y Elementales de Aire.',
        upgradeName: 'Linterna Mágica',
        upgradeCost: { gold: 5, materials: 5 },
        upgradeBenefit: 'Permite reclutar 1 Pixie básica adicional por ronda directamente desde tu reserva sin consumir límite ordinario de reclutamiento.'
      },
      {
        id: 'plata',
        name: 'Llama de Vida (Morada de Plata)',
        cost: { gold: 15, materials: 5 },
        benefit: 'Permite reclutar Elementales de Agua, Fuego y Tierra.',
        upgradeName: 'Llama de Vida Mejorada',
        upgradeCost: { gold: 10, materials: 5, valuables: 2 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" (Hielo, Magma y Energía de Élite).'
      },
      {
        id: 'oro',
        name: 'Nido de Cenizas (Morada de Oro)',
        cost: { gold: 20, materials: 5, valuables: 5 },
        benefit: 'Permite reclutar Psíquicos y Fénix.',
        upgradeName: 'Nido de Cenizas Mejorado',
        upgradeCost: { gold: 15, materials: 5, valuables: 3 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" (Psíquicos y Fénix Celestiales de Élite).'
      },
      {
        id: 'especial',
        name: 'Confluencia elemental',
        cost: { gold: 10, materials: 5, valuables: 3 },
        benefit: 'Te permite transmutar o cambiar cartas de hechizos que tengas equipadas por otras del draft de igual o inferior nivel pagando 2 de Oro.'
      }
    ],
    units: {
      bronze: {
        name: 'Pixies / Elementales de Aire',
        recruitCost: { gold: 4 },
        eliteCost: { gold: 4 }
      },
      silver: {
        name: 'Elementales de Agua / Fuego / Tierra',
        recruitCost: { gold: 8 },
        eliteCost: { gold: 8 }
      },
      gold: {
        name: 'Psíquicos / Fénix',
        recruitCost: { gold: 12 },
        eliteCost: { gold: 12 }
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
        cost: { gold: 10 },
        benefit: 'Al comienzo de cada ronda de recursos, produce +5 de Oro. Ganas +2 de Oro adicionales cada vez que derrotes a un ejército neutral en casillas de agua o costa.'
      },
      {
        id: 'ciudadela',
        name: 'Ciudadela',
        cost: { gold: 5, materials: 5 },
        benefit: 'Desbloquea reforzar unidades. Cuando estés bajo asedio, añade 3 cartas de empalizadas de coral, 1 de compuerta pirata y 1 de cañón de cubierta.'
      },
      {
        id: 'cofradia',
        name: 'Cofradía de Magos',
        cost: { gold: 5, materials: 5, valuables: 5 },
        benefit: 'Al construirla, busca 2 cartas en el mazo de hechizos y elige una para tu mano. En rondas posteriores, puedes usar la Ficha de Cofradía para volver a buscar (Busca 2, elige 1) pagando 6 de Oro.'
      },
      {
        id: 'bronce',
        name: 'Taberna de Abordaje (Morada de Bronce)',
        cost: { gold: 10 },
        benefit: 'Permite reclutar Oceánidos y Marineros.',
        upgradeName: 'Nido de cuervos',
        upgradeCost: { gold: 5, materials: 5 },
        upgradeBenefit: 'Al comienzo de cada ronda, te otorga +1 Material o Valioso al azar extra.'
      },
      {
        id: 'plata',
        name: 'Nido del Pirata (Morada de Plata)',
        cost: { gold: 15, materials: 5 },
        benefit: 'Permite reclutar Hechiceras de mar y Piratas regnan.',
        upgradeName: 'Nido del Pirata Mejorado',
        upgradeCost: { gold: 10, materials: 5, valuables: 2 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" (Hechiceras de mar y Capitanes de Élite).'
      },
      {
        id: 'oro',
        name: 'Bahía de la Serpiente (Morada de Oro)',
        cost: { gold: 20, materials: 5, valuables: 5 },
        benefit: 'Permite reclutar Aves marinas y Serpientes de mar.',
        upgradeName: 'Bahía de la Serpiente Mejorada',
        upgradeCost: { gold: 15, materials: 5, valuables: 3 },
        upgradeBenefit: 'Permite reclutar o reforzar a las caras de "Manada" de Aves y Serpientes de mar de Élite.'
      },
      {
        id: 'especial',
        name: 'Faro del Puerto',
        cost: { gold: 10, materials: 5, valuables: 3 },
        benefit: 'Otorga +2 Puntos de Movimiento gratis siempre que navegues o explores casillas con losetas de agua o mar.'
      }
    ],
    units: {
      bronze: {
        name: 'Oceánidos / Marineros',
        recruitCost: { gold: 4 },
        eliteCost: { gold: 4 }
      },
      silver: {
        name: 'Hechiceras de mar / Piratas regnan',
        recruitCost: { gold: 8 },
        eliteCost: { gold: 8 }
      },
      gold: {
        name: 'Aves marinas / Serpientes de mar',
        recruitCost: { gold: 12 },
        eliteCost: { gold: 12 }
      }
    }
  }
};
