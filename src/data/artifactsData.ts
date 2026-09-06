// Datos de artefactos de Heroes III: The Board Game.
// Extraído de MANUAL.md, REGLAS_Y_FAQS.md y el mazo castellano oficial.
// Estructura preparada para inventario futuro (introducción manual carta a carta).

export interface Artifact {
  id: string;
  name: string;
  nameES: string;
  rarity: 'Minor' | 'Major' | 'Relic'; // 'Minor' = menor, 'Major' = mayor, 'Relic' = reliquia
  effect: string;
  effectES: string;
  duration: 'instant' | 'ongoing' | 'activation' | 'permanent' | 'map_effect';
  discard: boolean; // true = se descarta tras usar; false = permanente hasta jugar otro permanente.
  source: string;
  notes?: string;
}

export const ARTIFACTS_DATA: Artifact[] = [
  // Datos extraídos de src/docs/artifacts/index.md (fuente: Homm3_BG_Database)
  // Solo se incluyen los verificados; el resto requiere introducción manual.
  {
    id: 'orb_of_driving_rain',
    name: 'Orb of Driving Rain',
    nameES: 'Orbe de Lluvia Impetuosa',
    rarity: 'Major',
    effect: ':ongoing: Al lanzar un [:hechizo:] de la [Escuela de Magia del Agua], duplica el Potencia usado para este [:hechizo:].\n\n— O —\n\n:instant: Al lanzar un [:hechizo:] de [Magia del Agua], retira esta carta para ganar +5 Potencia.',
    effectES: 'Continuo: Al lanzar magia de agua, duplica el poder.\n\n— O —\n\nInstantáneo: Al lanzar magia de agua, retira esta carta para +5 poder.',
    duration: 'ongoing',
    discard: true,
    source: 'Conflux Expansion',
    notes: 'Verificado contra src/docs/artifacts/orb_of_driving_rain.md'
  },
  {
    id: 'helm_of_the_alabaster_unicorn',
    name: 'Helm of the Alabaster Unicorn',
    nameES: 'Yelmo del Unicornio Alabastro',
    rarity: 'Minor',
    effect: ':instant: Devuelve 1 [:hechizo:] de tu pila de descarte a tu mano.\n\n— O —\n\n:instant: Lanza un [:hechizo:] del tope del descarte del mazo de hechizos y retira esta carta.',
    effectES: 'Instantáneo: Devuelve 1 hechizo de descarte a mano.\n\n— O —\n\nLanza hechizo del descarte y retira esta carta.',
    duration: 'instant',
    discard: true,
    source: 'Tower Expansion',
    notes: 'Verificado contra src/docs/artifacts/helm_of_the_alabaster_unicorn.md'
  },
  {
    id: 'orb_of_inhibition',
    name: 'Orb of Inhibition',
    nameES: 'Orbe de Inhibición',
    rarity: 'Relic',
    effect: ':ongoing: Durante este combate, todos los [Hechizos] y [Especialidades] infligen 0 Herida. Retira esta carta en lugar de descartarla.\n\n— O —\n\n:ongoing: Durante esta ronda de combate, las [unidades] no pueden usar sus habilidades especiales.',
    effectES: 'Continuo: Hechizos y especialidades infligen 0 Heridas. Retira esta carta.\n\n— O —\n\nContinuo: Unidades no usan habilidades especiales.',
    duration: 'ongoing',
    discard: false,
    source: 'Tower Expansion',
    notes: 'Verificado contra src/docs/artifacts/orb_of_inhibition.md'
  },
  {
    id: 'equestrians_gloves',
    name: "Equestrian's Gloves",
    nameES: 'Guantes de Jinete',
    rarity: 'Minor',
    effect: ':ongoing: Durante este combate, tu [unidad] seleccionada gana +1 Iniciativa.\n\n— O —\n\n:instant: Tu [héroe] gana +1 :puntos_de_movimiento:.',
    effectES: 'Continuo: +1 iniciativa.\n\n— O —\n\nInstantáneo: +1 PM.',
    duration: 'ongoing',
    discard: true,
    source: 'Tower Expansion',
    notes: 'Verificado contra src/docs/artifacts/equestrians_gloves.md'
  },
  {
    id: 'greater_gnolls_flail',
    name: "Greater Gnoll's Flail",
    nameES: 'Mayal del Gnoll Superior',
    rarity: 'Minor',
    effect: ':instant: +2 Ataque. Continuo: Hasta fin de combate, esta [unidad] sufre -1 Defensa (mín 0).\n\n— O —\n\n:instant: +1 Ataque',
    effectES: 'Instantáneo: +2 ataque. Continuo: -1 defensa hasta fin de combate.\n\n— O —\n\n+1 ataque.',
    duration: 'instant',
    discard: true,
    source: 'Rampart Expansion',
    notes: 'Verificado contra src/docs/artifacts/greater_gnolls_flail.md'
  },
  {
    id: 'boots_of_polarity',
    name: 'Boots of Polarity',
    nameES: 'Botas de Polaridad',
    rarity: 'Relic',
    effect: ':instant: Juega tras que un enemigo lance un [hechizo]. Lanza 2 [dados de ataque] y elige uno. Con "+1", ignora el efecto del [:hechizo:].\n\n— O —\n\n:activation: Retira 1 efecto :continuo:.',
    effectES: 'Instantáneo: Tras hechizo enemigo, lanza 2 dados de ataque; con +1 ignora el hechizo.\n\n— O —\n\nActivación: Retira 1 efecto continuo.',
    duration: 'instant',
    discard: true,
    source: 'Tower Expansion',
    notes: 'Verificado contra src/docs/artifacts/boots_of_polarity.md'
  },
  {
    id: 'celestial_necklace_of_bliss',
    name: 'Celestial Necklace of Bliss',
    nameES: 'Collar Celestial de la Felicidad',
    rarity: 'Relic',
    effect: ':instant: Descarta X cartas de tu mano para ganar +X Ataque.\n\n— O —\n\n:instant: Retira esta carta, luego gana +4 Ataque.',
    effectES: 'Instantáneo: Descarta X cartas para ganar +X ataque.\n\n— O —\n\nRetira esta carta, luego +4 ataque.',
    duration: 'instant',
    discard: true,
    source: 'Regular Stretch Goals 2024',
    notes: 'Verificado contra src/docs/artifacts/celestial_necklace_of_bliss.md'
  },
  {
    id: 'ambassadors_sash',
    name: "Ambassador's Sash",
    nameES: 'Cinta del Embajador',
    rarity: 'Major',
    effect: ':map_effect: Por cada [Vivienda] que poseas, roba 1 carta de [Unidad Neutral] correspondiente. Puedes [Reclutar] una de estas unidades.\n\n— O —\n\n:instant: Vuelve a tirar un [dado].',
    effectES: 'Efecto de mapa: Por cada [Vivienda], roba 1 carta de [Unidad Neutral]. Puedes reclutar una.\n\n— O —\n\nInstantáneo: Vuelve a tirar un dado.',
    duration: 'map_effect',
    discard: true,
    source: 'Rampart Expansion',
    notes: 'Verificado contra src/docs/artifacts/ambassadors_sash.md'
  },
  {
    id: 'boots_of_speed',
    name: 'Boots of Speed',
    nameES: 'Botas de Velocidad',
    rarity: 'Minor',
    effect: ':instant: Tu [héroe] gana +1 :puntos_de_movimiento:.\n\n— O —\n\n:ongoing: Para este combate, tu [unidad] seleccionada gana +1 Iniciativa.',
    effectES: 'Instantáneo: Tu héroe gana +1 PM.\n\n— O —\n\nContinuo: Tu unidad gana +1 iniciativa.',
    duration: 'instant',
    discard: true,
    source: 'Inferno Expansion',
    notes: 'Verificado contra src/docs/artifacts/boots_of_speed.md'
  },
  {
    id: 'armor_of_wonder',
    name: 'Armor of Wonder',
    nameES: 'Armadura de la Maravilla',
    rarity: 'Minor',
    effect: ':instant: Draw 1 card and gain +1 :attack:.<br><br>— OR —<br><br>:instant: Draw 1 card and gain +1 :defense:.',
    effectES: 'Instantáneo: Roba 1 carta y gana +1 Ataque.\n\n— O —\n\nInstantáneo: Roba 1 carta y gana +1 Defensa.',
    duration: 'instant',
    discard: true,
    source: 'Core Game',
    notes: 'Obtenido de cofres o ruinas; no es permanente.'
  },
  {
    id: 'angel_wings',
    name: 'Angel Wings',
    nameES: 'Alas de Ángel',
    rarity: 'Relic',
    effect: ':map_effect: Chosen [Hero] gains +1 :movement_points: and can move through any fields without resolving them. The last visited field must be resolved normally.<br><br>— OR —<br><br>:instant: Draw a card.',
    effectES: 'Efecto de mapa: El [Héroe] elegido gana +1 :puntos_de_movimiento: y puede moverse a través de cualquier loseta sin resolverlas. La última loseta visitada debe resolverse normalmente.\n\n— O —\n\nInstantáneo: Roba 1 carta.',
    duration: 'map_effect',
    discard: true,
    source: 'Core Game',
    notes: 'Después de jugar, el héroe puede moverse a través de fronteras y losetas bloqueadas, pero no terminar en bloqueada.'
  },
  {
    id: 'arms_of_legion',
    name: 'Arms of Legion',
    nameES: 'Brazos de Legión',
    rarity: 'Major',
    effect: ':instant: Reduce the Recruitment or Reinforcement cost of a [unit] by 5 :gold: - to a minimum of 0.<br><br>— OR —<br><br>:instant: Gain 2 :building_materials:.',
    effectES: 'Instantáneo: Reduce el coste de Reclutamiento o Refuerzo de una [unidad] en 5 Oro (mínimo 0).\n\n— O —\n\nInstantáneo: Gana 2 :materiales_de_construcción:.',
    duration: 'instant',
    discard: true,
    source: 'Fortress Expansion',
    notes: 'Solo reduce coste de reclutamiento; no permite reclutamiento adicional si ya se hizo en la ronda.'
  },
  {
    id: 'blackshard_of_the_dead_knight',
    name: 'Blackshard of the Dead Knight',
    nameES: 'Astilla Negra del Caballero Muerto',
    rarity: 'Minor',
    effect: ':instant: +2 :attack: and discard 1 card. If the discarded card was a [spell], draw 1 card.<br><br>— OR —<br><br>:instant: +1 :attack:',
    effectES: 'Instantáneo: +2 Ataque y descarta 1 carta. Si la descartada era hechizo, roba 1 carta.\n\n— O —\n\nInstantáneo: +1 Ataque',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'bowstring_of_the_unicorns_mane',
    name: "Bowstring of the Unicorn's Mane",
    nameES: 'Cuerda del Arco de la Melena del Unicornio',
    rarity: 'Minor',
    effect: ':instant: Play this card before a [unit] activates. Activate one of your [:ranged_unit: units] that has not been activated this round.<br><br>— OR —<br><br>:instant: Use this after a [:ranged_unit: unit\'s] [Attack die] roll. Ignore 1 [Attack die].',
    effectES: 'Instantáneo: Juega antes de que una [unidad] se active. Activa una [Unidad a distancia] no activada esta ronda.\n\n— O —\n\nInstantáneo: Usa tras tirada de [dado de ataque] de [Unidad a distancia]; ignora 1 dado.',
    duration: 'instant',
    discard: true,
    source: 'Stronghold Expansion'
  },
  {
    id: 'breastplate_of_brimstone',
    name: 'Breastplate of Brimstone',
    nameES: 'Peto de Bruma',
    rarity: 'Major',
    effect: ':instant: **Search(2)** [:spell:].<br><br>— OR —<br><br>:instant: +1 :power:, then discard up to 3 cards from your hand to gain +1 :power: per card discarded.',
    effectES: 'Instantáneo: **Busca(2)** [Hechizos].\n\n— O —\n\nInstantáneo: +1 Potencia, luego descarta hasta 3 cartas para ganar +1 Potencia por carta.',
    duration: 'instant',
    discard: true,
    source: 'Inferno Expansion'
  },
  {
    id: 'buckler_of_the_gnoll_king',
    name: "Buckler of the Gnoll King",
    nameES: 'Escudo Pequeño del Rey de los Gnomos',
    rarity: 'Minor',
    effect: ':instant: +2 :defense: :ongoing: Until the end of the Combat, this [unit] suffers -1 :attack: (to a minimum of 0).<br><br>— OR —<br><br>:instant: +1 :defense:',
    effectES: 'Instantáneo: +2 Defensa. Continuo: Hasta fin de combate, esta [unidad] sufre -1 Ataque (mín 0).\n\n— O —\n\nInstantáneo: +1 Defensa',
    duration: 'ongoing',
    discard: true,
    source: 'Rampart Expansion'
  },
  {
    id: 'cape_of_velocity',
    name: 'Cape of Velocity',
    nameES: 'Capa de Velocidad',
    rarity: 'Major',
    effect: ':ongoing: Until the end of the Combat, this [unit] gains +2 :initiative:.<br><br>— OR —<br><br>:instant: Gain 2 :gold:.',
    effectES: 'Continuo: Hasta fin de combate, esta [unidad] gana +2 Iniciativa.\n\n— O —\n\nInstantáneo: Gana 2 Oro.',
    duration: 'ongoing',
    discard: true,
    source: 'Rampart Expansion'
  },
  {
    id: 'cards_of_prophecy',
    name: 'Cards of Prophecy',
    nameES: 'Cartas de Profecía',
    rarity: 'Major',
    effect: ':instant: Reroll any [die].<br><br>— OR —<br><br>:instant: Set a :resource_die: or :treasure_die: on the side of your choice.',
    effectES: 'Instantáneo: Vuelve a tirar cualquier [dado].\n\n— O —\n\nInstantáneo: Coloca un Dado de recurso o Dado de tesoro en la cara que elijas.',
    duration: 'instant',
    discard: true,
    source: 'Tower Expansion'
  },
  {
    id: 'centaurs_axe',
    name: "Centaur's Axe",
    nameES: 'Hacha de Centauro',
    rarity: 'Minor',
    effect: ':instant: Triple the [Attack die\'s] outcome.<br><br>— OR —<br><br>:instant: +1 :attack:',
    effectES: 'Instantáneo: Triplica el resultado del [dado de ataque].\n\n— O —\n\nInstantáneo: +1 Ataque',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'charm_of_mana',
    name: 'Charm of Mana',
    nameES: 'Amuleto de Maná',
    rarity: 'Minor',
    effect: ':instant: Discard 2 cards, then draw 3 cards.<br><br>— OR —<br><br>:instant: Draw 2 cards, then discard 1 card.',
    effectES: 'Instantáneo: Descarta 2 cartas, luego roba 3.\n\n— O —\n\nInstantáneo: Roba 2 cartas, luego descarta 1.',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'crest_of_valor',
    name: 'Crest of Valor',
    nameES: 'Cimera de Valor',
    rarity: 'Minor',
    effect: ':instant: Gain a :positive_morale: token.<br><br>— OR —<br><br>:map_effect: Ignore :negative_morale: effect from a field.',
    effectES: 'Instantáneo: Gana ficha de Moral positiva.\n\n— O —\n\nEfecto de mapa: Ignora efecto de Moral negativa de una loseta.',
    duration: 'instant',
    discard: true,
    source: 'Fortress Expansion'
  },
  {
    id: 'dragon_scale_armor',
    name: 'Dragon Scale Armor',
    nameES: 'Armadura de Escama de Dragón',
    rarity: 'Relic',
    effect: ':instant: +2 :attack:<br><br>— OR —<br><br>:instant: +2 :defense:',
    effectES: 'Instantáneo: +2 Ataque.\n\n— O —\n\nInstantáneo: +2 Defensa.',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'endless_bag_of_gold',
    name: 'Endless Bag of Gold',
    nameES: 'Bolsa Sin Fin de Oro',
    rarity: 'Major',
    effect: ':instant: Gain 3 :gold:.<br><br>— OR —<br><br>:instant: Remove this card, then gain 6 :gold:.',
    effectES: 'Instantáneo: Gana 3 Oro.\n\n— O —\n\nInstantáneo: Retira esta carta, luego gana 6 Oro.',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'endless_sack_of_gold',
    name: 'Endless Sack of Gold',
    nameES: 'Saco Sin Fin de Oro',
    rarity: 'Relic',
    effect: ':instant: Gain 5 :gold:.<br><br>— OR —<br><br>:instant: Remove this card, then gain 8 :gold:.',
    effectES: 'Instantáneo: Gana 5 Oro.\n\n— O —\n\nInstantáneo: Retira esta carta, luego gana 8 Oro.',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'eversmoking_ring_of_sulfur',
    name: 'Eversmoking Ring of Sulfur',
    nameES: 'Anillo Etersmoke de Azufre',
    rarity: 'Minor',
    effect: ':permanent: At the beginning of each Resources round, gain 1 :valuables:.<br><br>— OR —<br><br>:instant: Remove this card, then gain 2 :valuables:.',
    effectES: 'Permanente: Al inicio de cada ronda de Recursos, gana 1 :objeto_de_valor:.\n\n— O —\n\nInstantáneo: Retira esta carta, luego gana 2 :objetos_de_valor:.',
    duration: 'permanent',
    discard: false,
    source: 'Regular Stretch Goals 2024'
  },
  {
    id: 'glyph_of_gallantry',
    name: 'Glyph of Gallantry',
    nameES: 'Glifo de Gallardía',
    rarity: 'Minor',
    effect: ':instant: Gain a :positive_morale: token.<br><br>— OR —<br><br>:instant: +1 :defense:',
    effectES: 'Instantáneo: Gana ficha de Moral positiva.\n\n— O —\n\nInstantáneo: +1 Defensa',
    duration: 'instant',
    discard: true,
    source: 'Tower Expansion'
  },
  {
    id: 'golden_bow',
    name: 'Golden Bow',
    nameES: 'Arco de Oro',
    rarity: 'Major',
    effect: ':ongoing: During this Combat, your [:ranged_unit: units] ignore the combat penalty.<br><br>— OR —<br><br>:instant: A [:ranged_unit: unit] of your choice gains +2 :attack:.',
    effectES: 'Continuo: Durante este combate, tus [Unidades a distancia] ignoran la penalización de combate.\n\n— O —\n\nInstantáneo: Una [Unidad a distancia] de tu elección gana +2 Ataque.',
    duration: 'ongoing',
    discard: true,
    source: 'Rampart Expansion'
  },
  {
    id: 'head_of_legion',
    name: 'Head of Legion',
    nameES: 'Cabeza de Legión',
    rarity: 'Major',
    effect: ':instant: Reduce the Recruitment or Reinforcement cost of a [unit] by 6 :gold: - to a minimum of 0.<br><br>— OR —<br><br>:instant: Gain 3 :gold:.',
    effectES: 'Instantáneo: Reduce coste de Reclutamiento/Refuerzo de [unidad] en 6 Oro (mín 0).\n\n— O —\n\nInstantáneo: Gana 3 Oro.',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'hourglass_of_the_evil_hour',
    name: 'Hourglass of the Evil Hour',
    nameES: 'Reloj de Arena de la Hora Malvada',
    rarity: 'Minor',
    effect: ':instant: If the enemy has :positive_morale:, they gain :negative_morale:.<br><br>— OR —<br><br>:instant: Roll the [Attack die]. On a "0" result, you gain :positive_morale:.',
    effectES: 'Instantáneo: Si enemigo tiene Moral positiva, gana Moral negativa.\n\n— O —\n\nInstantáneo: Lanza [dado de ataque]; con "0" ganas Moral positiva.',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'inexhaustible_cart_of_ore',
    name: 'Inexhaustible Cart of Ore',
    nameES: 'Carro Sin Fin de Mineral',
    rarity: 'Minor',
    effect: ':permanent: At the beginning of each Resources round, gain 1 :building_materials:.<br><br>— OR —<br><br>:instant: Remove this card, then gain 3 :building_materials:.',
    effectES: 'Permanente: Al inicio de cada ronda de Recursos, gana 1 Material de construcción.\n\n— O —\n\nInstantáneo: Retira esta carta, luego gana 3 :materiales_de_construcción:.',
    duration: 'permanent',
    discard: false,
    source: 'Rampart Expansion'
  },
  {
    id: 'legs_of_legion',
    name: 'Legs of Legion',
    nameES: 'Piernas de Legión',
    rarity: 'Minor',
    effect: ':instant: Reduce the Recruitment or Reinforcement cost of a [unit] by 4 :gold: - to a minimum of 0.<br><br>— OR —<br><br>:instant: Gain 2 :gold:.',
    effectES: 'Instantáneo: Reduce coste Reclutamiento/Refuerzo de [unidad] en 4 Oro (mín 0).\n\n— O —\n\nInstantáneo: Gana 2 Oro.',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'mystic_orb_of_mana',
    name: 'Mystic Orb of Mana',
    nameES: 'Orbe Místico de Mana',
    rarity: 'Major',
    effect: ':instant: **Search(4)** your discard pile.<br><br>— OR —<br><br>:instant: Only if your discard pile is empty. Draw 2 cards.',
    effectES: 'Instantáneo: **Busca(4)** en tu pila de descarte.\n\n— O —\n\nInstantáneo: Solo si tu pila de descarte está vacía. Roba 2 cartas.',
    duration: 'instant',
    discard: true,
    source: 'Tower Expansion'
  },
  {
    id: 'red_dragon_flame_tongue',
    name: 'Red Dragon Flame Tongue',
    nameES: 'Lengua de Fuego del Dragón Rojo',
    rarity: 'Minor',
    effect: ':instant: +1 :defense:<br><br>— OR —<br><br>:instant: +1 :attack:',
    effectES: 'Instantáneo: +1 Defensa.\n\n— O —\n\nInstantáneo: +1 Ataque',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'rib_cage',
    name: 'Rib Cage',
    nameES: 'Jaula de Costillas',
    rarity: 'Minor',
    effect: ':instant: Select 1 Spell card from your discard pile and put it back into your hand. Then, shuffle your discard pile back into your deck of Might and Magic.<br><br>— OR —<br><br>:instant: +1 :power:',
    effectES: 'Instantáneo: Selecciona 1 carta de Hechizo de tu pila de descarte y ponla en tu mano. Luego baraja tu pila de descarte en tu mazo de Poder y Magia.\n\n— O —\n\nInstantáneo: +1 Potencia',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'shield_of_the_dwarven_lords',
    name: 'Shield of the Dwarven Lords',
    nameES: 'Escudo de los Señores Enanos',
    rarity: 'Minor',
    effect: ':instant: Use this after the [Attack die] roll. Ignore the [Attack die] and any additional effects it triggered.<br><br>— OR —<br><br>:instant: +1 :defense:',
    effectES: 'Instantáneo: Usa tras tirada de [dado de ataque]. Ignora el dado y efectos adicionales.\n\n— O —\n\nInstantáneo: +1 Defensa',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'shield_of_the_yawning_dead',
    name: 'Shield of the Yawning Dead',
    nameES: 'Escudo de los Muertos Bostezantes',
    rarity: 'Minor',
    effect: ':instant: Discard 1 card to gain +2 :defense:.<br><br>— OR —<br><br>:instant: +1 :defense:',
    effectES: 'Instantáneo: Descarta 1 carta para ganar +2 Defensa.\n\n— O —\n\nInstantáneo: +1 Defensa',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'speculum',
    name: 'Speculum',
    nameES: 'Espejismo',
    rarity: 'Minor',
    effect: ':instant: Discover any Map tile adjacent to the Map tile your [Hero] is currently on..<br><br>— OR —<br><br>:instant: Remove this card, then draw 1 card.',
    effectES: 'Instantáneo: Descubre cualquier loseta adyacente a la loseta del [Héroe].\n\n— O —\n\nInstantáneo: Retira esta carta, luego roba 1 carta.',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'sword_of_hellfire',
    name: 'Sword of Hellfire',
    nameES: 'Espada del Fuego Infernal',
    rarity: 'Major',
    effect: ':instant: +3 :attack:. This [unit] suffers 1 :damage:. This effect cannot be used on an enemy unit.<br><br>— OR —<br><br>:instant: +4 :attack:. This [unit] suffers 2 :damage:. This effect cannot be used on an enemy unit.',
    effectES: 'Instantáneo: +3 Ataque. Esta [unidad] sufre 1 Herida. No puede usarse en unidad enemiga.\n\n— O —\n\nInstantáneo: +4 Ataque. Esta [unidad] sufre 2 Herida. No puede usarse en unidad enemiga.',
    duration: 'instant',
    discard: true,
    source: 'Fortress Expansion'
  },
  {
    id: 'tome_of_air',
    name: 'Tome of Air',
    nameES: 'Tomo del Aire',
    rarity: 'Relic',
    effect: ':instant: Encuentra el primer [:hechizo:] de [Magia del Aire] en el mazo. Tómalo en tu mano o descártalo. Baraja el mazo.\n\n— O —\n\n:instant: Al lanzar [Magia del Aire], resuelve su efecto sin pagar Potencia.',
    effectES: 'Instantáneo: Encuentra primer hechizo de Aire. Tómalo o descártalo. Baraja.\n\n— O —\n\nAl lanzar magia de aire, resuelve sin pagar poder.',
    duration: 'instant',
    discard: true,
    source: 'Conflux Expansion',
    notes: 'Verificado contra src/docs/artifacts/tome_of_air.md'
  },
  {
    id: 'tome_of_earth',
    name: 'Tome of Earth',
    nameES: 'Tomo de la Tierra',
    rarity: 'Relic',
    effect: ':instant: Encuentra el primer [:hechizo:] de [Magia de la Tierra] en el mazo. Tómalo en tu mano o descártalo. Baraja el mazo.\n\n— O —\n\n:instant: Al lanzar [Magia de la Tierra], resuelve su efecto sin pagar Potencia.',
    effectES: 'Instantáneo: Encuentra primer hechizo de Tierra. Tómalo o descártalo. Baraja.\n\n— O —\n\nAl lanzar magia de tierra, resuelve sin pagar poder.',
    duration: 'instant',
    discard: true,
    source: 'Conflux Expansion',
    notes: 'Verificado contra src/docs/artifacts/tome_of_earth.md'
  },
  {
    id: 'tome_of_fire',
    name: 'Tome of Fire',
    nameES: 'Tomo del Fuego',
    rarity: 'Relic',
    effect: ':instant: Encuentra el primer [:hechizo:] de [Magia del Fuego] en el mazo. Tómalo en tu mano o descártalo. Baraja el mazo.\n\n— O —\n\n:instant: Al lanzar [Magia del Fuego], resuelve su efecto sin pagar Potencia.',
    effectES: 'Instantáneo: Encuentra primer hechizo de Fuego. Tómalo o descártalo. Baraja.\n\n— O —\n\nAl lanzar magia de fuego, resuelve sin pagar poder.',
    duration: 'instant',
    discard: true,
    source: 'Conflux Expansion',
    notes: 'Verificado contra src/docs/artifacts/tome_of_fire.md'
  },
  {
    id: 'tome_of_water',
    name: 'Tome of Water',
    nameES: 'Tomo del Agua',
    rarity: 'Relic',
    effect: ':instant: Encuentra el primer [:hechizo:] de [Magia del Agua] en el mazo. Tómalo en tu mano o descártalo. Baraja el mazo.\n\n— O —\n\n:instant: Al lanzar [Magia del Agua], resuelve su efecto sin pagar Potencia.',
    effectES: 'Instantáneo: Encuentra primer hechizo de Agua. Tómalo o descártalo. Baraja.\n\n— O —\n\nAl lanzar magia de agua, resuelve sin pagar poder.',
    duration: 'instant',
    discard: true,
    source: 'Conflux Expansion',
    notes: 'Verificado contra src/docs/artifacts/tome_of_water.md'
  },
  {
    id: 'trident_of_dominion',
    name: 'Trident of Dominion',
    nameES: 'Tridente del Dominio',
    rarity: 'Major',
    effect: ':instant: +2 Ataque.\n\n— O —\n\n:map_effect: Si este [Héroe] está en una [Loseta de Mar], roba 2 cartas.',
    effectES: 'Instantáneo: +2 ataque.\n\n— O —\n\nEfecto de mapa: Si el héroe está en mar, roba 2 cartas.',
    duration: 'instant',
    discard: true,
    source: 'Cove Expansion',
    notes: 'Verificado contra src/docs/artifacts/trident_of_dominion.md'
  },
  {
    id: 'titans_gladius',
    name: "Titan's Gladius",
    nameES: 'Espada del Titán',
    rarity: 'Relic',
    effect: ':instant: Descarta 1 carta para ganar +3 Ataque.\n\n— O —\n\n:instant: +2 Ataque.',
    effectES: 'Instantáneo: Descarta 1 carta para +3 ataque.\n\n— O —\n\n+2 ataque.',
    duration: 'instant',
    discard: true,
    source: 'Core Game',
    notes: 'Verificado contra src/docs/artifacts/titans_gladius.md'
  },
  {
    id: 'titans_cuirass',
    name: "Titan's Cuirass",
    nameES: 'Coraza del Titán',
    rarity: 'Relic',
    effect: ':instant: Descarta 1 carta para ganar +4 Potencia.\n\n— O —\n\n:instant: +2 Potencia.',
    effectES: 'Instantáneo: Descarta 1 carta para +4 poder.\n\n— O —\n\n+2 poder.',
    duration: 'instant',
    discard: true,
    source: 'Core Game',
    notes: 'Verificado contra src/docs/artifacts/titans_cuirass.md'
  },
  {
    id: 'thunder_helmet',
    name: 'Thunder Helmet',
    nameES: 'Yelmo del Trueno',
    rarity: 'Relic',
    effect: ':instant: Selecciona 1 carta de [Hechizo] de tu pila de descarte y ponla en tu mano.\n\n— O —\n\n:ongoing: Durante este combate, cada vez que juegues un [Hechizo], roba 1 carta de tu mazo de Poder y Magia. Al final del combate, retira esta carta.',
    effectES: 'Instantáneo: Recupera 1 hechizo del descarte.\n\n— O —\n\nContinuo: Cada hechizo jugado roba 1 carta; retira al final del combate.',
    duration: 'instant',
    discard: true,
    source: 'Stronghold Expansion',
    notes: 'Verificado contra src/docs/artifacts/thunder_helmet.md'
  },
  {
    id: 'targ_of_the_rampaging_ogre',
    name: 'Targ of the Rampaging Ogre',
    nameES: 'Escudo del Ogro Enfurecido',
    rarity: 'Major',
    effect: ':instant: Descarta 2 cartas para ganar +2 Defensa. Luego, en lugar de descartar, pon esta carta de vuelta en tu mano.\n\n— O —\n\n:instant: +1 Defensa.',
    effectES: 'Instantáneo: Descarta 2 cartas para +2 defensa; luego recupera esta carta.\n\n— O —\n\n+1 defensa.',
    duration: 'instant',
    discard: true,
    source: 'Core Game',
    notes: 'Verificado contra src/docs/artifacts/targ_of_the_rampaging_ogre.md'
  },
  {
    id: 'sword_of_judgement',
    name: 'Sword of Judgement',
    nameES: 'Espada del Juicio',
    rarity: 'Relic',
    effect: ':instant: Descarta X cartas de tu mano para ganar +X Ataque.\n\n— O —\n\n:instant: Descarta X cartas de tu mano para ganar +X Defensa.',
    effectES: 'Instantáneo: Descarta X cartas para +X ataque.\n\n— O —\n\nDescarta X cartas para +X defensa.',
    duration: 'instant',
    discard: true,
    source: 'Core Game',
    notes: 'Verificado contra src/docs/artifacts/sword_of_judgement.md'
  },
  {
    id: 'surcoat_of_counterpoise',
    name: 'Surcoat of Counterpoise',
    nameES: 'Sobreveste del Contrapeso',
    rarity: 'Major',
    effect: ':instant: Juega esta carta inmediatamente después de que un enemigo lance un [:hechizo:]. Si fue lanzado con 1 Potencia o menos, ignora el efecto del [:hechizo:].\n\n— O —\n\n:instant: Retira esta carta, luego **Busca(1)** :artifact:.',
    effectES: 'Instantáneo: Tras hechizo enemigo con 1 poder o menos, ignora su efecto.\n\n— O —\n\nRetira esta carta, luego Busca(1) artefacto.',
    duration: 'instant',
    discard: true,
    source: 'Tower Expansion',
    notes: 'Verificado contra src/docs/artifacts/surcoat_of_counterpoise.md'
  },
  {
    id: 'spirit_of_oppression',
    name: 'Spirit of Oppression',
    nameES: 'Espíritu de la Opresión',
    rarity: 'Minor',
    effect: ':ongoing: Durante este combate, ningún jugador puede usar la ficha Moral positiva ni volver a tirar [Dados de Ataque].\n\n— O —\n\n:instant: +1 Potencia.',
    effectES: 'Continuo: Ningún jugador usa moral positiva ni vuelve a tirar dados de ataque.\n\n— O —\n\n+1 poder.',
    duration: 'ongoing',
    discard: true,
    source: 'Fortress Expansion',
    notes: 'Verificado contra src/docs/artifacts/spirit_of_oppression.md'
  },
  {
    id: 'spellbinders_hat',
    name: "Spellbinder's Hat",
    nameES: 'Sombrero del Hechicero',
    rarity: 'Relic',
    effect: ':instant: Retira 1 carta de tu mano, luego **Busca(2)** en el mazo de la carta.\n\n— O —\n\n:instant: Retira esta carta y otra de tu mano o pila de descarte.',
    effectES: 'Instantáneo: Retira 1 carta, luego Busca(2) en su mazo.\n\n— O —\n\nRetira esta carta y otra de mano/descarte.',
    duration: 'instant',
    discard: true,
    source: 'Tower Expansion',
    notes: 'Verificado contra src/docs/artifacts/spellbinders_hat.md'
  },
  {
    id: 'skull_helmet',
    name: 'Skull Helmet',
    nameES: 'Yelmo de Calavera',
    rarity: 'Minor',
    effect: ':instant: Toma 1 carta que no sea Artefacto de tu pila de descarte y ponla en tu mano.\n\n— O —\n\n:instant: Si el enemigo tiene Moral positiva, gana Moral negativa.',
    effectES: 'Instantáneo: Recupera 1 carta no-artefacto del descarte.\n\n— O —\n\nSi enemigo tiene moral positiva, gana moral negativa.',
    duration: 'instant',
    discard: true,
    source: 'Regular Stretch Goals 2024',
    notes: 'Verificado contra src/docs/artifacts/skull_helmet.md'
  },
  {
    id: 'breastplate_of_petrified_wood', 
    name: 'Breastplate of Petrified Wood', 
    nameES: 'Peto de Madera Petrificada', 
    rarity: 'Minor',
    effect: ':instant: Draw 1 card. — OR — :instant: +1 :power:', 
    effectES: 'Instantáneo: Roba 1 carta.\n\n— O —\n\nInstantáneo: +1 poder.', 
    duration: 'instant', 
    discard: true, 
    source: 'Core Game', 
    notes: 'Verificado contra src/docs/artifacts/breastplate_of_petrified_wood.md'
  },
  {
    id: 'crown_of_dragontooth', name: 'Crown of Dragontooth', nameES: 'Corona de Colmillos de Dragón', rarity: 'Relic',
    effect: ':instant: Select 2 Spell cards from your discard pile and put them back into your hand. — OR — :instant: Remove 1 Spell from hand, then Search(2) Spells.', effectES: 'Instantáneo: Recupera 2 hechizos del descarte.\n\n— O —\n\nRetira 1 hechizo de tu mano y Busca(2) hechizos.', duration: 'instant', discard: true, source: 'Inferno Expansion', notes: 'Verificado contra src/docs/artifacts/crown_of_dragontooth.md'
  },
  {
    id: 'crown_of_the_five_seas', name: 'Crown of the Five Seas', nameES: 'Corona de los Cinco Mares', rarity: 'Major',
    effect: ':instant: Select 1 Spell card from your discard pile and put it back into your hand. — OR — :instant: If this Hero is on a Sea tile, look at the top 3 cards of your discard pile and take 1 into your hand.', effectES: 'Instantáneo: Recupera 1 hechizo del descarte.\n\n— O —\n\nSi el héroe está en una loseta de mar, mira las 3 primeras cartas del descarte y toma 1.', duration: 'instant', discard: true, source: 'Cove Expansion', notes: 'Verificado contra src/docs/artifacts/crown_of_the_five_seas.md'
  },
  {
    id: 'diplomats_ring', name: "Diplomat's Ring", nameES: 'Anillo del Diplomático', rarity: 'Major',
    effect: ':instant: Reroll any die or any roll. — OR — :map_effect: For every Dwelling you have, draw 1 corresponding Neutral Unit card. You can Recruit one.', effectES: 'Instantáneo: Repite cualquier dado o tirada.\n\n— O —\n\nEfecto de mapa: Por cada Vivienda, roba 1 carta de Unidad Neutral correspondiente y puedes reclutar una.', duration: 'instant', discard: true, source: 'Stronghold Expansion', notes: 'Verificado contra src/docs/artifacts/diplomats_ring.md'
  },
  {
    id: 'dragon_scale_shield', name: 'Dragon Scale Shield', nameES: 'Escudo de Escama de Dragón', rarity: 'Major',
    effect: ':instant: +2 :attack: — OR — :instant: +2 :defense:', effectES: 'Instantáneo: +2 ataque.\n\n— O —\n\nInstantáneo: +2 defensa.', duration: 'instant', discard: true, source: 'Core Game', notes: 'Verificado contra src/docs/artifacts/dragon_scale_shield.md'
  },
  {
    id: 'dragon_wing_tabard', name: 'Dragon Wing Tabard', nameES: 'Tabardo de Ala de Dragón', rarity: 'Minor',
    effect: ":instant: Discard 1 random card from the enemy's hand. — OR — :instant: +1 :power:", effectES: 'Instantáneo: Descarta 1 carta aleatoria de la mano enemiga.\n\n— O —\n\nInstantáneo: +1 poder.', duration: 'instant', discard: true, source: 'Core Game', notes: 'Verificado contra src/docs/artifacts/dragon_wing_tabard.md'
  },
  {
    id: 'endless_purse_of_gold', name: 'Endless Purse of Gold', nameES: 'Bolsa Sin Fin de Oro', rarity: 'Major',
    effect: ':instant: Gain 3 :gold:. — OR — :instant: Remove this card and discard 2 cards from your hand, then gain 8 :gold:.', effectES: 'Instantáneo: Gana 3 oro.\n\n— O —\n\nRetira esta carta y descarta 2 cartas para ganar 8 oro.', duration: 'instant', discard: true, source: 'Fortress Expansion', notes: 'Verificado contra src/docs/artifacts/endless_purse_of_gold.md'
  },
  {
    id: 'everflowing_crystal_cloak', name: 'Everflowing Crystal Cloak', nameES: 'Capa de Cristal Eterno', rarity: 'Major',
    effect: ':instant: Discard 3 cards to gain 2 :valuables:. — OR — :instant: Gain 1 :valuables:.', effectES: 'Instantáneo: Descarta 3 cartas para ganar 2 objetos de valor.\n\n— O —\n\nInstantáneo: Gana 1 objeto de valor.', duration: 'instant', discard: true, source: 'Core Game', notes: 'Verificado contra src/docs/artifacts/everflowing_crystal_cloak.md'
  },
  {
    id: 'everpouring_vial_of_mercury', name: 'Everpouring Vial of Mercury', nameES: 'Vial Eterno de Mercurio', rarity: 'Major',
    effect: ':instant: Gain 1 :valuables:. — OR — :instant: Remove this card, then gain 2 :valuables:.', effectES: 'Instantáneo: Gana 1 objeto de valor.\n\n— O —\n\nRetira esta carta y gana 2 objetos de valor.', duration: 'instant', discard: true, source: 'Core Game', notes: 'Verificado contra src/docs/artifacts/everpouring_vial_of_mercury.md'
  },
  {
    id: 'helm_of_heavenly_enlightenment', name: 'Helm of Heavenly Enlightenment', nameES: 'Yelmo de la Iluminación Celestial', rarity: 'Relic',
    effect: ':instant: Gain :expert:. — OR — :instant: Draw 2 cards.', effectES: 'Instantáneo: Gana experto.\n\n— O —\n\nInstantáneo: Roba 2 cartas.', duration: 'instant', discard: true, source: 'Fortress Expansion', notes: 'Verificado contra src/docs/artifacts/helm_of_heavenly_enlightenment.md'
  },
  {
    id: 'inexhaustible_cart_of_lumber', name: 'Inexhaustible Cart of Lumber', nameES: 'Carro Sin Fin de Madera', rarity: 'Minor',
    effect: ':instant: Gain 2 :building_materials:. — OR — :instant: Remove this card, then gain 4 :building_materials:.', effectES: 'Instantáneo: Gana 2 materiales de construcción.\n\n— O —\n\nRetira esta carta y gana 4 materiales de construcción.', duration: 'instant', discard: true, source: 'Core Game', notes: 'Verificado contra src/docs/artifacts/inexhaustible_cart_of_lumber.md'
  },
  {
    id: 'lions_shield_of_courage', name: "Lion's Shield of Courage", nameES: 'Escudo del Valor del León', rarity: 'Relic',
    effect: ':instant: Discard X cards from hand to gain +X :defense:. — OR — :instant: Remove this card, then gain +4 :defense:.', effectES: 'Instantáneo: Descarta X cartas para ganar +X defensa.\n\n— O —\n\nRetira esta carta y gana +4 defensa.', duration: 'instant', discard: true, source: 'Regular Stretch Goals 2024', notes: 'Verificado contra src/docs/artifacts/lions_shield_of_courage.md'
  },
  {
    id: 'loins_of_legion', name: 'Loins of Legion', nameES: 'Lomos de Legión', rarity: 'Minor',
    effect: ':instant: Reduce the Recruitment or Reinforcement cost of a unit by 5 :gold:. — OR — :instant: Gain 2 :gold:.', effectES: 'Instantáneo: Reduce en 5 oro el coste de Reclutamiento o Refuerzo de una unidad.\n\n— O —\n\nInstantáneo: Gana 2 oro.', duration: 'instant', discard: true, source: 'Core Game', notes: 'Verificado contra src/docs/artifacts/loins_of_legion.md'
  },
  {
    id: 'necklace_of_dragonteeth', name: 'Necklace of Dragonteeth', nameES: 'Collar de Colmillos de Dragón', rarity: 'Major',
    effect: ':instant: +2 :power:. — OR — :ongoing: During this Combat, you can cast 2 Spells per Combat round.', effectES: 'Instantáneo: +2 poder.\n\n— O —\n\nContinuo: Durante este combate puedes lanzar 2 hechizos por ronda.', duration: 'instant', discard: true, source: 'Regular Stretch Goals 2024', notes: 'Verificado contra src/docs/artifacts/necklace_of_dragonteeth.md'
  },
  {
    id: 'necklace_of_swiftness', name: 'Necklace of Swiftness', nameES: 'Collar de la Rapidez', rarity: 'Minor',
    effect: ':ongoing: During this Combat, the initiative of all your ground units is increased by 1. — OR — :activation: Move one of your units 1 space.', effectES: 'Continuo: Durante este combate, las unidades terrestres ganan +1 iniciativa.\n\n— O —\n\nActivación: Mueve 1 espacio una de tus unidades.', duration: 'ongoing', discard: true, source: 'Regular Stretch Goals 2024', notes: 'Verificado contra src/docs/artifacts/necklace_of_swiftness.md'
  },
  {
    id: 'ogres_club_of_havoc', name: "Ogre's Club of Havoc", nameES: 'Garrote del Caos del Ogro', rarity: 'Major',
    effect: ':instant: Discard 1 card to gain +2 :attack:. — OR — :instant: +1 :attack:', effectES: 'Instantáneo: Descarta 1 carta para ganar +2 ataque.\n\n— O —\n\nInstantáneo: +1 ataque.', duration: 'instant', discard: true, source: 'Core Game', notes: 'Verificado contra src/docs/artifacts/ogres_club_of_havoc.md'
  },
  {
    id: 'orb_of_silt', name: 'Orb of Silt', nameES: 'Orbe de Limo', rarity: 'Major',
    effect: ':ongoing: When casting an Earth Magic spell, double the power used. — OR — :instant: Remove this card to gain +5 :power:.', effectES: 'Continuo: Al lanzar magia de tierra, duplica el poder usado.\n\n— O —\n\nInstantáneo: Retira esta carta para ganar +5 poder.', duration: 'ongoing', discard: true, source: 'Conflux Expansion', notes: 'Verificado contra src/docs/artifacts/orb_of_silt.md'
  },
  {
    id: 'orb_of_tempestuous_fire', name: 'Orb of Tempestuous Fire', nameES: 'Orbe del Fuego Tempestuoso', rarity: 'Major',
    effect: ':ongoing: When casting a Fire Magic spell, double the power used. — OR — :instant: Remove this card to gain +5 :power:.', effectES: 'Continuo: Al lanzar magia de fuego, duplica el poder usado.\n\n— O —\n\nInstantáneo: Retira esta carta para ganar +5 poder.', duration: 'ongoing', discard: true, source: 'Conflux Expansion', notes: 'Verificado contra src/docs/artifacts/orb_of_tempestuous_fire.md'
  },
  {
    id: 'orb_of_the_firmament', name: 'Orb of the Firmament', nameES: 'Orbe del Firmamento', rarity: 'Major',
    effect: ':ongoing: When casting an Air Magic spell, double the power used. — OR — :instant: Remove this card to gain +5 :power:.', effectES: 'Continuo: Al lanzar magia de aire, duplica el poder usado.\n\n— O —\n\nInstantáneo: Retira esta carta para ganar +5 poder.', duration: 'ongoing', discard: true, source: 'Conflux Expansion', notes: 'Verificado contra src/docs/artifacts/orb_of_the_firmament.md'
  },
  {
    id: 'orb_of_vulnerability', name: 'Orb of Vulnerability', nameES: 'Orbe de Vulnerabilidad', rarity: 'Relic',
    effect: ':ongoing: During this Combat, negate all units special abilities related to Spells. — OR — :instant: +2 :power:', effectES: 'Continuo: Durante este combate, anula las habilidades de unidades relacionadas con hechizos.\n\n— O —\n\nInstantáneo: +2 poder.', duration: 'ongoing', discard: true, source: 'Rampart Expansion', notes: 'Verificado contra src/docs/artifacts/orb_of_vulnerability.md'
  },
  {
    id: 'pendant_of_courage', name: 'Pendant of Courage', nameES: 'Colgante del Valor', rarity: 'Major',
    effect: ':instant: Play immediately after a Search action and perform that action again. — OR — :instant: Gain 1 :expert:.', effectES: 'Instantáneo: Juega después de una acción de Buscar y repítela.\n\n— O —\n\nInstantáneo: Gana 1 experto.', duration: 'instant', discard: true, source: 'Regular Stretch Goals 2024', notes: 'Verificado contra src/docs/artifacts/pendant_of_courage.md'
  },
  {
    id: 'pendant_of_negativity', name: 'Pendant of Negativity', nameES: 'Colgante de la Negatividad', rarity: 'Major',
    effect: ':instant: Ignore the effect of an Air Magic spell. — OR — :ongoing: Ignore the effect of an Air Magic spell cast on this unit.', effectES: 'Instantáneo: Ignora el efecto de un hechizo de aire.\n\n— O —\n\nContinuo: Ignora el efecto de un hechizo de aire lanzado sobre esta unidad.', duration: 'ongoing', discard: true, source: 'Regular Stretch Goals 2024', notes: 'Verificado contra src/docs/artifacts/pendant_of_negativity.md'
  },
  {
    id: 'pendant_of_second_sight', name: 'Pendant of Second Sight', nameES: 'Colgante de la Segunda Visión', rarity: 'Major',
    effect: ':ongoing: Selected unit cannot gain paralysis during this Combat. — OR — :instant: Remove 1 paralysis token.', effectES: 'Continuo: La unidad elegida no puede ganar parálisis durante este combate.\n\n— O —\n\nInstantáneo: Retira 1 ficha de parálisis.', duration: 'ongoing', discard: true, source: 'Tower Expansion', notes: 'Verificado contra src/docs/artifacts/pendant_of_second_sight.md'
  },
  {
    id: 'plate_of_the_dying_light', name: 'Plate of the Dying Light', nameES: 'Placa de la Luz Moribunda', rarity: 'Relic',
    effect: ':instant: +1 :defense:, usable to reduce damage from Spells. — OR — :instant: +4 :defense:, usable to reduce damage from Spells, then Remove this card.', effectES: 'Instantáneo: +1 defensa, también para reducir daño de hechizos.\n\n— O —\n\n+4 defensa para reducir daño de hechizos; después retira esta carta.', duration: 'instant', discard: true, source: 'Cove Expansion', notes: 'Verificado contra src/docs/artifacts/plate_of_the_dying_light.md'
  },
  {
    id: 'quiet_eye_of_the_dragon', name: 'Quiet Eye of the Dragon', nameES: 'Ojo Tranquilo del Dragón', rarity: 'Minor',
    effect: ':ongoing: For this Combat, your selected unit gains +1 :attack:. — OR — :instant: +1 :defense:', effectES: 'Continuo: Durante este combate, la unidad elegida gana +1 ataque.\n\n— O —\n\nInstantáneo: +1 defensa.', duration: 'ongoing', discard: true, source: 'Stronghold Expansion', notes: 'Verificado contra src/docs/artifacts/quiet_eye_of_the_dragon.md'
  },
  {
    id: 'recanters_cloak', name: "Recanter's Cloak", nameES: 'Capa del Refractor', rarity: 'Major',
    effect: ':ongoing: During this Combat, no Hero can use Spells with Power 0. — OR — :ongoing: During this Combat, no Hero can use Spells. Remove this card after Combat.', effectES: 'Continuo: Durante este combate ningún héroe puede usar hechizos de poder 0.\n\n— O —\n\nNingún héroe puede usar hechizos; retira esta carta al terminar.', duration: 'ongoing', discard: true, source: 'Fortress Expansion', notes: 'Verificado contra src/docs/artifacts/recanters_cloak.md'
  },
  {
    id: 'ring_of_the_wayfarer', name: 'Ring of the Wayfarer', nameES: 'Anillo del Caminante', rarity: 'Minor',
    effect: ':ongoing: For this Combat, your selected unit gains +1 :initiative:. — OR — :instant: At start of Combat with Neutral Units, put a paralysis token on any unit except Azure tier.', effectES: 'Continuo: Durante este combate, la unidad elegida gana +1 iniciativa.\n\n— O —\n\nAl iniciar combate con neutrales, pon parálisis a una unidad que no sea de nivel Azur.', duration: 'ongoing', discard: true, source: 'Tower Expansion', notes: 'Verificado contra src/docs/artifacts/ring_of_the_wayfarer.md'
  },
  {
    id: 'royal_armor_of_nix', name: 'Royal Armor of Nix', nameES: 'Armadura Real de Nix', rarity: 'Major',
    effect: ':instant: +2 :power: — OR — :map_effect: If this Hero is on a Sea tile, Search(2) Spells.', effectES: 'Instantáneo: +2 poder.\n\n— O —\n\nEfecto de mapa: Si el héroe está en una loseta de mar, Busca(2) hechizos.', duration: 'instant', discard: true, source: 'Cove Expansion', notes: 'Verificado contra src/docs/artifacts/royal_armor_of_nix.md'
  },
  {
    id: 'sandals_of_the_saint', name: 'Sandals of the Saint', nameES: 'Sandalias del Santo', rarity: 'Relic',
    effect: ':instant: Discard X cards from hand to gain +X :power:. — OR — :instant: Remove this card, then gain +4 :power:.', effectES: 'Instantáneo: Descarta X cartas para ganar +X poder.\n\n— O —\n\nRetira esta carta y gana +4 poder.', duration: 'instant', discard: true, source: 'Regular Stretch Goals 2024', notes: 'Verificado contra src/docs/artifacts/sandals_of_the_saint.md'
  },
  {
    id: 'scales_of_the_greater_basilisk', name: 'Scales of the Greater Basilisk', nameES: 'Escamas del Basilisco Mayor', rarity: 'Minor',
    effect: ':instant: +3 :spell: — OR — :instant: +1 :spell:, then draw a card.', effectES: 'Instantáneo: +3 hechizo.\n\n— O —\n\nInstantáneo: +1 hechizo y después roba 1 carta.', duration: 'instant', discard: true, source: 'Fortress Expansion', notes: 'Verificado contra src/docs/artifacts/scales_of_the_greater_basilisk.md'
  },
  {
    id: 'sentinels_shield', name: "Sentinel's Shield", nameES: 'Escudo del Centinela', rarity: 'Relic',
    effect: ':instant: Discard 1 card to gain +3 :defense:. — OR — :instant: +2 :defense:', effectES: 'Instantáneo: Descarta 1 carta para ganar +3 defensa.\n\n— O —\n\nInstantáneo: +2 defensa.', duration: 'instant', discard: true, source: 'Core Game', notes: 'Verificado contra src/docs/artifacts/sentinels_shield.md'
  },
  {
    id: 'shackles_of_war', name: 'Shackles of War', nameES: 'Grilletes de Guerra', rarity: 'Major',
    effect: ':instant: If played at the start of Combat, the enemy Hero can neither Retreat nor Surrender. — OR — :instant: Draw 2 cards, choose 1 and discard the other.', effectES: 'Instantáneo: Si se juega al inicio del combate, el héroe enemigo no puede retirarse ni rendirse.\n\n— O —\n\nRoba 2 cartas, elige 1 y descarta la otra.', duration: 'instant', discard: true, source: 'Core Game', notes: 'Verificado contra src/docs/artifacts/shackles_of_war.md'
  },
  {
    id: 'shamans_puppet', name: "Shaman's Puppet", nameES: 'Títere del Chamán', rarity: 'Minor',
    effect: ':ongoing: Choose a unit. Until the end of its activation, for every attack it rolls 2 dice and resolves the lower result. — OR — :instant: Remove any effect or paralysis from the selected unit.', effectES: 'Continuo: Elige una unidad; hasta el final de su activación tira 2 dados por ataque y resuelve el resultado menor.\n\n— O —\n\nRetira cualquier efecto o parálisis de la unidad.', duration: 'ongoing', discard: true, source: 'Cove Expansion', notes: 'Verificado contra src/docs/artifacts/shamans_puppet.md'
  },
  {
    id: 'shield_of_naval_glory', name: 'Shield of Naval Glory', nameES: 'Escudo de la Gloria Naval', rarity: 'Major',
    effect: ':instant: +2 :defense: — OR — :map_effect: If this Hero is on a Sea tile, they gain +1 :movement_points: and draw 1 card.', effectES: 'Instantáneo: +2 defensa.\n\n— O —\n\nEfecto de mapa: Si el héroe está en una loseta de mar, gana +1 movimiento y roba 1 carta.', duration: 'instant', discard: true, source: 'Cove Expansion', notes: 'Verificado contra src/docs/artifacts/shield_of_naval_glory.md'
  },
  {
    id: 'shield_of_the_damned', name: 'Shield of the Damned', nameES: 'Escudo de los Condenados', rarity: 'Major',
    effect: ':instant: Target unit gains +3 :defense: and suffers 1 :damage:. It cannot target an enemy. — OR — :instant: Target unit gains +5 :defense: and suffers 2 :damage:. It cannot target an enemy.', effectES: 'Instantáneo: Una unidad gana +3 defensa y sufre 1 daño; no puede ser enemiga.\n\n— O —\n\nGana +5 defensa y sufre 2 daño; no puede ser enemiga.', duration: 'instant', discard: true, source: 'Inferno Expansion', notes: 'Verificado contra src/docs/artifacts/shield_of_the_damned.md'
  },
  {
    id: 'torso_of_legion', name: 'Torso of Legion', nameES: 'Torso de Legión', rarity: 'Minor',
    effect: ':instant: Reduce Recruitment or Reinforcement cost of a unit by 6 :gold:. — OR — :instant: Gain 1 :valuables: or 2 :building_materials:.', effectES: 'Instantáneo: Reduce en 6 oro el coste de Reclutamiento o Refuerzo de una unidad.\n\n— O —\n\nGana 1 objeto de valor o 2 materiales de construcción.', duration: 'instant', discard: true, source: 'Rampart Expansion', notes: 'Verificado contra src/docs/artifacts/torso_of_legion.md'
  },
  {
    id: 'tunic_of_the_cyclops_king',
    name: 'Tunic of the Cyclops King',
    nameES: 'Túnica del Rey Cíclope',
    rarity: 'Major',
    effect: ':instant: Draw 1 card and gain +1 :power:.<br><br>— OR —<br><br>:instant: +2 :power:',
    effectES: 'Instantáneo: Roba 1 carta y gana +1 Potencia.\n\n— O —\n\nInstantáneo: +2 Potencia',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'vial_of_lifeblood',
    name: 'Vial of Lifeblood',
    nameES: 'Frasco de Sangre Vital',
    rarity: 'Major',
    effect: ':instant: Remove up to 3 :damage: from one of your units.<br><br>— OR —<br><br>:ongoing: For this Combat, your selected [unit] gains +1 :health_points:.',
    effectES: 'Instantáneo: Retira hasta 3 Herida de una de tus unidades.\n\n— O —\n\nContinuo: Para este combate, tu [unidad] seleccionada gana +1 :puntos_de_vida:.',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  }
];

export function getArtifactById(id: string): Artifact | undefined {
  return ARTIFACTS_DATA.find(a => a.id === id);
}

export function getArtifactsByRarity(rarity: Artifact['rarity']): Artifact[] {
  return ARTIFACTS_DATA.filter(a => a.rarity === rarity);
}

export const ARTIFACTS_COUNT = ARTIFACTS_DATA.length;