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
    id: 'armor_of_wonder',
    name: 'Armor of Wonder',
    nameES: 'Armadura de la Maravilla',
    rarity: 'Minor',
    effect: ':instant: Draw 1 card and gain +1 :attack:.<br><br>— OR —<br><br>:instant: Draw 1 card and gain +1 :defense:.',
    effectES: 'Instantáneo: Roba 1 carta y gana +1 :ataque:. — O — Instantáneo: Roba 1 carta y gana +1 :defensa:.',
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
    effectES: 'Efecto de mapa: El [Héroe] elegido gana +1 :puntos_de_movimiento: y puede moverse a través de cualquier loseta sin resolverlas. La última loseta visitada debe resolverse normalmente. — O — Instantáneo: Roba 1 carta.',
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
    effectES: 'Instantáneo: Reduce el coste de Reclutamiento o Refuerzo de una [unidad] en 5 :oro: (mínimo 0). — O — Instantáneo: Gana 2 :materiales_de_construcción:.',
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
    effectES: 'Instantáneo: +2 :ataque: y descarta 1 carta. Si la descartada era hechizo, roba 1 carta. — O — Instantáneo: +1 :ataque:',
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
    effectES: 'Instantáneo: Juega antes de que una [unidad] se active. Activa una [:unidad_a_distancia:] no activada esta ronda. — O — Instantáneo: Usa tras tirada de [dado de ataque] de [:unidad_a_distancia:]; ignora 1 dado.',
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
    effectES: 'Instantáneo: **Busca(2)** [:hechizos:]. — O — Instantáneo: +1 :poder:, luego descarta hasta 3 cartas para ganar +1 :poder: por carta.',
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
    effectES: 'Instantáneo: +2 :defensa:. Continuo: Hasta fin de combate, esta [unidad] sufre -1 :ataque: (mín 0). — O — Instantáneo: +1 :defensa:',
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
    effectES: 'Continuo: Hasta fin de combate, esta [unidad] gana +2 :iniciativa:. — O — Instantáneo: Gana 2 :oro:.',
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
    effectES: 'Instantáneo: Vuelve a tirar cualquier [dado]. — O — Instantáneo: Coloca un :dado_de_recurso: o :dado_de_tesoro: en la cara que elijas.',
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
    effectES: 'Instantáneo: Triplica el resultado del [dado de ataque]. — O — Instantáneo: +1 :ataque:',
    duration: 'instant',
    discard: true,
    source: 'Core Game'
  },
  {
    id: 'charm_of_mana',
    name: 'Charm of Mana',
    nameES: 'Amuento de Mana',
    rarity: 'Minor',
    effect: ':instant: Discard 2 cards, then draw 3 cards.<br><br>— OR —<br><br>:instant: Draw 2 cards, then discard 1 card.',
    effectES: 'Instantáneo: Descarta 2 cartas, luego roba 3. — O — Instantáneo: Roba 2 cartas, luego descarta 1.',
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
    effectES: 'Instantáneo: Gana ficha de :moral_positiva:. — O — Efecto de mapa: Ignora efecto de :moral_negativa: de una loseta.',
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
    effectES: 'Instantáneo: +2 :ataque:. — O — Instantáneo: +2 :defensa:.',
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
    effectES: 'Instantáneo: Gana 3 :oro:. — O — Instantáneo: Retira esta carta, luego gana 6 :oro:.',
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
    effectES: 'Instantáneo: Gana 5 :oro:. — O — Instantáneo: Retira esta carta, luego gana 8 :oro:.',
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
    effectES: 'Permanente: Al inicio de cada ronda de Recursos, gana 1 :objeto_de_valor:. — O — Instantáneo: Retira esta carta, luego gana 2 :objetos_de_valor:.',
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
    effectES: 'Instantáneo: Gana ficha de :moral_positiva:. — O — Instantáneo: +1 :defensa:',
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
    effectES: 'Continuo: Durante este combate, tus [:unidades_a_distancia:] ignoran la penalización de combate. — O — Instantáneo: Una [:unidad_a_distancia:] de tu elección gana +2 :ataque:.',
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
    effectES: 'Instantáneo: Reduce coste de Reclutamiento/Refuerzo de [unidad] en 6 :oro: (mín 0). — O — Instantáneo: Gana 3 :oro:.',
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
    effectES: 'Instantáneo: Si enemigo tiene :moral_positiva:, gana :moral_negativa:. — O — Instantáneo: Lanza [dado de ataque]; con "0" ganas :moral_positiva:.',
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
    effectES: 'Permanente: Al inicio de cada ronda de Recursos, gana 1 :material_de_construcción:. — O — Instantáneo: Retira esta carta, luego gana 3 :materiales_de_construcción:.',
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
    effectES: 'Instantáneo: Reduce coste Reclutamiento/Refuerzo de [unidad] en 4 :oro: (mín 0). — O — Instantáneo: Gana 2 :oro:.',
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
    effectES: 'Instantáneo: **Busca(4)** en tu pila de descarte. — O — Instantáneo: Solo si tu pila de descarte está vacía. Roba 2 cartas.',
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
    effectES: 'Instantáneo: +1 :defensa:. — O — Instantáneo: +1 :ataque:',
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
    effectES: 'Instantáneo: Selecciona 1 carta de Hechizo de tu pila de descarte y ponla en tu mano. Luego baraja tu pila de descarte en tu mazo de Poder y Magia. — O — Instantáneo: +1 :poder:',
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
    effectES: 'Instantáneo: Usa tras tirada de [dado de ataque]. Ignora el dado y efectos adicionales. — O — Instantáneo: +1 :defensa:',
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
    effectES: 'Instantáneo: Descarta 1 carta para ganar +2 :defensa:. — O — Instantáneo: +1 :defensa:',
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
    effectES: 'Instantáneo: Descubre cualquier loseta adyacente a la loseta del [Héroe]. — O — Instantáneo: Retira esta carta, luego roba 1 carta.',
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
    effectES: 'Instantáneo: +3 :ataque:. Esta [unidad] sufre 1 :daño:. No puede usarse en unidad enemiga. — O — Instantáneo: +4 :ataque:. Esta [unidad] sufre 2 :daño:. No puede usarse en unidad enemiga.',
    duration: 'instant',
    discard: true,
    source: 'Fortress Expansion'
  },
  {
    id: 'tunic_of_the_cyclops_king',
    name: 'Tunic of the Cyclops King',
    nameES: 'Túnica del Rey Cíclopo',
    rarity: 'Major',
    effect: ':instant: Draw 1 card and gain +1 :power:.<br><br>— OR —<br><br>:instant: +2 :power:',
    effectES: 'Instantáneo: Roba 1 carta y gana +1 :poder:. — O — Instantáneo: +2 :poder:',
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
    effectES: 'Instantáneo: Retira hasta 3 :daño: de una de tus unidades. — O — Continuo: Para este combate, tu [unidad] seleccionada gana +1 :puntos_de_vida:.',
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