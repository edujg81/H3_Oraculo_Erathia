export interface HeroStats {
  atk: number;
  def: number;
  power: number;
  knowledge: number;
}

export interface SkillDetails {
  name: string;
  normal: string;
  expert: string;
}

export interface SpecialtyCard {
  level: 1 | 4 | 6;
  name: string;
  effect: string;
}

export interface HeroDetails {
  name: string;
  type: 'Poder' | 'Magia';
  className: string;
  stats: HeroStats;
  initialSkill: SkillDetails;
  specialty: {
    name: string;
    cards: SpecialtyCard[];
  };
  lore: string;
  quote?: string;
}

export interface FactionHeroesData {
  [factionId: string]: HeroDetails[];
}

export const FACTION_HEROES: FactionHeroesData = {
  castillo: [
    {
      name: 'Catherine',
      type: 'Poder',
      className: 'Caballero (Knight)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Liderazgo (Leadership)',
        normal: 'Instantáneo: Gana una ficha de Moral Positiva.',
        expert: 'Instantáneo: Roba 2 cartas. Luego, gana una ficha de Moral Positiva.'
      },
      specialty: {
        name: 'Especialidad: Cruzados',
        cards: [
          { level: 1, name: 'Cruzados I', effect: 'Instantáneo: Tu unidad seleccionada gana +1 de Ataque\n— O —\nInstantáneo: Tu unidad seleccionada gana +1 de Defensa.\n______\nEl efecto se duplica para Cruzados.' },
          { level: 4, name: 'Cruzados IV', effect: 'Contínuo: Para este Combate, la Vida de tu unidad seleccionada aumenta en 1. El efecto se duplica para Cruzados.' },
          { level: 6, name: 'Cruzados VI', effect: 'Contínuo: Para este Combate, la Iniciativa de tu unidad seleccionada aumenta en 1. El efecto se duplica para Cruzados.' }
        ]
      },
      lore: 'La legítima soberana de Erathia, esposa del Rey Roland de Enroth, líder militar formidable que regresó a su tierra natal para expulsar a los invasores de Nighon y Eeofol tras la muerte de su padre.',
      quote: '¡Por Erathia y por la corona! No daremos ni un paso atrás frente a las huestes de la oscuridad.'
    },
    {
      name: 'Adelaide',
      type: 'Magia',
      className: 'Clérigo (Cleric)',
      stats: { atk: 1, def: 0, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Sabiduría (Wisdom)',
        normal: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(3) en lugar de Buscar(2).',
        expert: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(4) en lugar de Buscar(3).'
      },
      specialty: {
        name: 'Especialidad: Bendición de Fuerza',
        cards: [
          { level: 1, name: 'Anillo Helado I', effect: 'Instantáneo: Descarta 1 carta. Apunta a una casilla en el tablero de Combate. Todas las unidades adyacentes a esta casilla sufren 1 Herida.' },
          { level: 4, name: 'Anillo Helado IV', effect: 'Instantáneo: Elige 1 Hechizo o carta de Especialidad de tu pila de descarte y devuélvela a tu mano.' },
          { level: 6, name: 'Anillo Helado VI', effect: 'Instantáneo: Descarta 2 cartas. Apunta a una casilla en el tablero de Combate. Todas las unidades adyacentes a esta casilla sufren 2 Heridas.' }
        ]
      },
      lore: 'Una clérigo sumamente compasiva bendecida con un carisma celestial que calma incluso las voluntades más belicosas y propaga la armonía mística.',
      quote: 'La verdadera fuerza no reside en golpear con saña, sino en purificar el corazón de quienes combaten.'
    },
    {
      name: 'Valeska',
      type: 'Poder',
      className: 'Caballero (Knight)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Tiro con Arco (Archery)',
        normal: 'Continuo: Durante esta ronda de combate, tus unidades a distancia obtienen +1 Ataque si el objetivo es una unidad no adyacente .Tus unidades aliadas de ataque a distancia infligen +1 de daño físico.',
        expert: 'Continuo: Hasta el final de la siguiente ronda de combate, tus unidades de ataque a distancia obtienen +1 de Iniciativa y +1 Ataque si el objetivo es una unidad no adyacente.'
      },
      specialty: {
        name: 'Especialidad: Tiradores',
        cards: [
          { level: 1, name: 'Tiradores I', effect: 'Continuo: Para este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Tiradores.' },
          { level: 4, name: 'Tiradores IV', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa\nEl efecto se duplica para la unidad de Tiradores.' },
          { level: 6, name: 'Tiradores VI', effect: 'Activación: Activa una de tus unidades a distancia, incluso si esa unidad ya ha sido activada (después continúa con la activación de la unidad actual).\n— O —\nInstantáneo: Roba 2 cartas.' }
        ]
      },
      lore: 'Una oficial militar altamente disciplinada que comanda la infantería a distancia de los ejércitos de Erathia, célebre por su precisión táctica milimétrica.',
      quote: 'Asegurad la línea, tensad las cuerdas... ¡y disparad al unísono por el honor de la corona!'
    },
    {
      name: 'Ingham',
      type: 'Magia',
      className: 'Clérigo (Cleric)',
      stats: { atk: 1, def: 0, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Misticismo (Mysticism)',
        normal: 'Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En lugar de descartar la carta de Hechizo, vuelve a tu mano.',
        expert: 'Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En lugar de descartar la carta de Hechizo y todas las demás cartas jugadas junto con ella, llévalas de vuelta a tu mano.'
      },
      specialty: {
        name: 'Especialidad: Fanáticos',
        cards: [
          { level: 1, name: 'Fanáticos I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\nEl efecto se duplica para la unidad de Fanáticos.' },
          { level: 4, name: 'Fanáticos IV', effect: 'Contínuo: Para este combate, la Vida de lu unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Fanáticos.' },
          { level: 6, name: 'Fanáticos VI', effect: 'Contínuo: Para este Combate, tu unidad de fanáticos ignora las habilidades de Defensa de sus objetivos.\n— O —\nInstantáneo: Roba 1 carta.' }
        ]
      },
      lore: 'Un clérigo devoto cuyo fervor y misticismo inspiran a los Monjes de la orden sagrada de Erathia, canalizando oraciones que vigorizan y protegen a las huestes celestiales.',
      quote: 'La fe es nuestro escudo más impenetrable, y la devoción es la espada que rasgará las tinieblas.'
    },
    {
      name: 'Rion',
      type: 'Magia',
      className: 'Clérigo (Cleric)',
      stats: { atk: 1, def: 0, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Sabiduría (Wisdom)',
        normal: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(3) en lugar de Buscar(2).',
        expert: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(4) en lugar de Buscar(3).'
      },
      specialty: {
        name: 'Especialidad: Médico de Campo de Batalla',
        cards: [
          { level: 1, name: 'Médico de Campo de Batalla I', effect: 'Instantáneo: Retira 1 Herida de una de tus unidades, luego roba 1 carta.' },
          { level: 4, name: 'Médico de Campo de Batalla IV', effect: 'Instantáneo: Retira 1 Herida o Parálisis de una de tus unidades, luego roba 1 carta.' },
          { level: 6, name: 'Médico de Campo de Batalla VI', effect: 'Instantáneo: Retira hasta 2 Heridas o Parálisis de una de tus unidades, luego roba 2 cartas y descarta 1 carta de tu mano.' }
        ]
      },
      lore: 'Un clérigo sabio experto en el tratamiento de heridas en plena batalla y en la gestión de tiendas de campaña médicas, logrando sanar heridas fatales y levantar regimientos caídos.',
      quote: 'Ningún soldado de Erathia caerá mientras yo tenga aliento para invocar la luz de la sanación.'
    },
    {
      name: 'Lord Haart',
      type: 'Poder',
      className: 'Caballero (Knight)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Finanzas (States)',
        normal: 'Instantáneo: Gana 3 de Oro.',
        expert: 'Instantáneo: Gana 6 de Oro.'
      },
      specialty: {
        name: 'Especialidad: Finanzas',
        cards: [
          { level: 1, name: 'Finanzas I', effect: 'Instantáneo: Gana 2 de Oro.' },
          { level: 4, name: 'Finanzas IV', effect: 'Instantáneo: Gana 3 de Oro.' },
          { level: 6, name: 'Finanzas VI', effect: 'Instantáneo: Gana 5 de Oro.' }
        ]
      },
      lore: 'Un caballero noble de gran abolengo célebre por su pericia en la administración y finanzas feudales, así como por su letal maestría táctica en campaña militar.',
      quote: 'Una campaña se gana tanto con una contabilidad impecable en el campamento como con un acero afilado en el campo de batalla.'
    },
    {
      name: 'Tarnum',
      type: 'Poder',
      className: 'Caballero (Knight)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Artillería (Artillery)',
        normal: 'Instantáneo: Inflige 1 Herida a la unidad enemiga con menor Iniciativa.',
        expert: 'Instantáneo: Al usar la carta Ballesta, resuelve su efecto contra el mismo objetivo 3 veces.'
      },
      specialty: {
        name: 'Especialidad: Balista',
        cards: [
          { level: 1, name: 'Balista I', effect: 'Mapa: Paga 5 Oros para ganarr una balista.\n— O —\nInstantáneo: Activa tu balista (si tienes una).' },
          { level: 4, name: 'Balista IV', effect: 'Continuo: Puedes jugar esta carta al comienzo del combate. Para este combate, ganas una balista adicional, incluso si ya tienes una. Descarta la balista después de este combate\n— O —\nInstantáneo: Roba 1 carta.' },
          { level: 6, name: 'Balista VI', effect: 'Instantáneo: Elige 2 unidades enemigas.\nCada una de estas unidades sufre 2 Heridas.' }
        ]
      },
      lore: 'El Héroe Inmortal que ha luchado durante eones bajo diferentes formas para redimir sus pecados pasados, liderando con valor y carisma inquebrantable a las tropas de la corona.',
      quote: 'Los Ancestros me han condenado a vivir para siempre, pero lucharé cada segundo para demostrar que soy digno de su redención.'
    }
  ],
  necropolis: [
    {
      name: 'Lord Haart',
      type: 'Poder',
      className: 'Caballero de la Muerte (Death Knight)',
      stats: { atk: 1, def: 2, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Nigromancia (Necromancy)',
        normal: 'Mapa: Juega después de ganar un combate que no sea un combate rápido. Puedes reforzar una unidad Bronce o Plata de tu elección por la mitad del coste de Oro (redondeado hacia abajo).',
        expert: 'Mapa: Juega después de ganar un combate que no sea un combate rápido. Puedes reforzar cualquier unidad de tu elección por la mitad del coste de Oro (redondeado hacia abajo).'
      },
      specialty: {
        name: 'Especialidad: Caballeros del Terror',
        cards: [
          { level: 1, name: 'Caballeros del Terror I', effect: 'Instantáneo: Reduce el Daño del contraataque enemigo en 1.\nEste efecto se duplica para la unidad Caballeros del Terror.' },
          { level: 4, name: 'Caballeros del Terror IV', effect: 'Continuo: Para este combate, cuando un enemigo realice un contraataque contra esta unidad, lanza 2 dados de Ataque y resuelve el resultado más bajo.' },
          { level: 6, name: 'Caballeros del Terror VI', effect: 'Instantáneo: Reduce el Daño del contraataque enemigo en 2.\nEste efecto se duplica para la unidad Caballeros del Terror.' }
        ]
      },
      lore: 'El otrora noble caballero de Erathia que fue asesinado y alzado de entre los muertos como un temible oficial no-muerto al servicio de Deyja, comandando con frialdad a los jinetes espectrales.',
      quote: 'Mi espada una vez sirvió a la vida, pero en la inmortalidad del sepulcro he encontrado un propósito mucho más absoluto.'
    },
    {
      name: 'Moandor',
      type: 'Poder',
      className: 'Caballero de la Muerte (Death Knight)',
      stats: { atk: 1, def: 2, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Nigromancia (Necromancy)',
        normal: 'Mapa: Juega después de ganar un combate que no sea un combate rápido. Puedes reforzar una unidad Bronce o Plata de tu elección por la mitad del coste de Oro (redondeado hacia abajo).',
        expert: 'Mapa: Juega después de ganar un combate que no sea un combate rápido. Puedes reforzar cualquier unidad de tu elección por la mitad del coste de Oro (redondeado hacia abajo).'
      },
      specialty: {
        name: 'Especialidad: Liches',
        cards: [
          { level: 1, name: 'Liches I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de Liches.' },
          { level: 4, name: 'Liches IV', effect: 'Continuo: Para este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Liches.' },
          { level: 6, name: 'Liches VI', effect: 'Continuo: Para este combate, tu unidad de Liches inflige daño elemental.\n— O —\nInstantáneo: +2 Ataque.' }
        ]
      },
      lore: 'Un caballero de la muerte cuya obsesión por la lichería le llevó a fundirse con las energías del sepulcro, convirtiéndose en el protector absoluto de las órdenes de magos esqueléticos.',
      quote: 'La carne es un ropaje efímero y débil. El hueso y el alma inmortal son las únicas verdades que perduran.'
    },
    {
      name: 'Sandro',
      type: 'Magia',
      className: 'Nigromante (Necromancer)',
      stats: { atk: 1, def: 0, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Brujería (Sorcery)',
        normal: 'Instantáneo: +1 Potencia\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Potencia\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Capa del Rey No Muerto',
        cards: [
          { level: 1, name: 'Capa del Rey No Muerto I', effect: 'Coloca esta carta sobre la carta de Unidad Manada de Esqueletos; esto reemplaza las estadísticas de la carta. Cuando la Vida de la carta Capa del Rey No Muerto llegue a 0, descarta esta carta.\n- Horda de Esqueletos -\nAT: 3 - DF: 1 - PS: 2 - INI: 6' },
          { level: 4, name: 'Capa del Rey No Muerto IV', effect: 'Coloca esta carta sobre la carta de Unidad Manada de Zombis; esto reemplaza las estadísticas de la carta. Cuando la Vida de la carta Capa del Rey No Muerto llegue a 0, descarta esta carta.\n- Horda de Zombis -\nAT: 4 - DF: 1 - PS: 3 - INI: 5' },
          { level: 6, name: 'Capa del Rey No Muerto VI', effect: 'Coloca esta carta sobre la carta de Unidad de Esqueletos; esto reemplaza las estadísticas de la carta. Cuando la Vida de la carta Capa del Rey No Muerto llegue a 0, descarta esta carta.\n- Legión de Esqueletos -\nAT: 4 - DF: 1 - PS: 2 - INI: 6' }
        ]
      },
      lore: 'El nigromante más astuto y manipulador de Antagarich, quien mediante engaños logró reunir las piezas de la Capa del Rey No Muerto para someter continentes enteros bajo su yugo marchito.',
      quote: 'La muerte no es el final de vuestra servidumbre... es simplemente el inicio de vuestra lealtad eterna hacia mí.'
    },
    {
      name: 'Septienna',
      type: 'Magia',
      className: 'Nigromante (Necromancer)',
      stats: { atk: 1, def: 0, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Nigromancia (Necromancy)',
        normal: 'Mapa: Juega después de ganar un combate que no sea un combate rápido. Puedes reforzar una unidad Bronce o Plata de tu elección por la mitad del coste de Oro (redondeado hacia abajo).',
        expert: 'Mapa: Juega después de ganar un combate que no sea un combate rápido. Puedes reforzar cualquier unidad de tu elección por la mitad del coste de Oro (redondeado hacia abajo).'
      },
      specialty: {
        name: 'Especialidad: Onda de Muerte',
        cards: [
          { level: 1, name: 'Onda de Muerte I', effect: 'Activación: Las unidades Bronce enemigas sufren 1 Herida.\n— O —\nInstantáneo: +1 Potencia' },
          { level: 4, name: 'Onda de Muerte IV', effect: 'Activación: Las unidades Plata enemigas sufren 1 Herida.\n— O —\nInstantáneo: +1 Potencia' },
          { level: 6, name: 'Onda de Muerte VI', effect: 'Activación: Las unidades Oro y Azul enemigas sufren 2 Heridas.\n— O —\nInstantáneo: +2 Potencia' }
        ]
      },
      lore: 'Una nigromante implacable experta en canalizar la energía de la muerte directamente desde las almas de sus oponentes, marchitando regimientos enteros con su onda espectral.',
      quote: 'Vuestro aliento vital no se perderá; simplemente alimentará el resurgir de mi imperio eterno.'
    },
    {
      name: 'Tamika',
      type: 'Poder',
      className: 'Caballero de la Muerte (Death Knight)',
      stats: { atk: 1, def: 2, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Ofensiva (Offense)',
        normal: 'Instantáneo: +1 Ataque\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Caballeros del Terror',
        cards: [
          { level: 1, name: 'Caballeros del Terror I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEste efecto se duplica para la unidad Caballeros del Terror.' },
          { level: 4, name: 'Caballeros del Terror IV', effect: 'Continuo: Para este combate, la Vida de la unidad seleccionada aumenta en 1.\nEste efecto se duplica para la unidad Caballeros del Terror.' },
          { level: 6, name: 'Caballeros del Terror VI', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEste efecto se duplica para la unidad Caballeros del Terror.' }
        ]
      },
      lore: 'Una letal general de Deyja que adiestra a los jinetes negros con una disciplina sanguinaria, convirtiéndolos en la vanguardia más temida de las tierras baldías.',
      quote: 'El miedo es un veneno lento, pero los cascos de mis caballeros negros son rápidos y letales.'
    },
    {
      name: 'Vidomina',
      type: 'Magia',
      className: 'Nigromante (Necromancer)',
      stats: { atk: 1, def: 0, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Nigromancia (Necromancy)',
        normal: 'Mapa: Juega después de ganar un combate que no sea un combate rápido. Puedes reforzar una unidad Bronce o Plata de tu elección por la mitad del coste de Oro (redondeado hacia abajo).',
        expert: 'Mapa: Juega después de ganar un combate que no sea un combate rápido. Puedes reforzar cualquier unidad de tu elección por la mitad del coste de Oro (redondeado hacia abajo).'
      },
      specialty: {
        name: 'Especialidad: Nigromancia',
        cards: [
          { level: 1, name: 'Nigromancia I', effect: 'Mapa: Juega después de ganar un combate que no sea un combate rápido. Puedes reforzar una unidad Bronce o Plata de tu elección por la mitad del coste de Oro (redondeado hacia abajo).' },
          { level: 4, name: 'Nigromancia IV', effect: 'Coloca esta carta sobre la carta de Unidad Manada de Esqueletos; esto reemplaza las estadísticas de la carta. Cuando la Vida llegue a 0, descarta esta carta.\n- Horda de Esqueletos -\nAT: 3 - DF: 1 - PS: 2 - INI: 6' },
          { level: 6, name: 'Nigromancia VI', effect: 'Mapa: Juega después de ganar un combate que no sea un combate rápido. Puedes reforzar cualquier unidad de tu elección por la mitad del coste de Oro (redondeado hacia abajo).' }
        ]
      },
      lore: 'Una joven nigromante prodigiosa dotada de un talento espantoso para absorber la energía espiritual de los moribundos, multiplicando las filas de no-muertos.',
      quote: 'Puedo escuchar el susurro de vuestra fuerza vital extinguiéndose... y el glorioso crujido de vuestro alzamiento.'
    }
  ],
  mazmorra: [
    {
      name: 'Alamar',
      type: 'Magia',
      className: 'Brujo (Warlock)',
      stats: { atk: 0, def: 0, power: 3, knowledge: 2 },
      initialSkill: {
        name: 'Sabiduría (Wisdom)',
        normal: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(3) en lugar de Buscar(2).',
        expert: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(4) en lugar de Buscar(3).'
      },
      specialty: {
        name: 'Especialidad: Resurrección',
        cards: [
          { level: 1, name: 'Resurrección I', effect: 'Instantáneo: Cancela un ataque que vaya a reducir la Vida de tu unidad * a 0.\n· Potencia 1 - * Bronce\n· Potencia 2 - * Plata\n· Potencia 4 - * Oro' },
          { level: 4, name: 'Resurrección IV', effect: 'Instantáneo: Cancela un ataque que vaya a reducir la Vida de tu unidad * a 0.\n· Potencia 0 - * Bronce\n· Potencia 1 - * Plata\n· Potencia 3 - * Oro' },
          { level: 6, name: 'Resurrección VI', effect: 'Instantáneo: Cancela un ataque que vaya a reducir la Vida de tu unidad * a 0.\n· Potencia 0 - * Bronce\n· Potencia 0 - * Plata\n· Potencia 2 - * Oro' }
        ]
      },
      lore: 'Un erudito brujo de Nighon que dedicó décadas al estudio de la restauración celular y la retención del alma en los cuerpos. Cree firmemente que la magia de resurrección no es un milagro divino, sino una ciencia de precisión arcana que doblega las leyes de la muerte.',
      quote: 'La muerte no es más que una interrupción temporal en el gran diseño de la victoria.'
    },
    {
      name: 'Deemer',
      type: 'Magia',
      className: 'Brujo (Warlock)',
      stats: { atk: 0, def: 0, power: 3, knowledge: 2 },
      initialSkill: {
        name: 'Exploración (Scouting)',
        normal: 'Instantáneo: Juega esta carta antes de realizar una acción de Buscar, luego realiza Buscar(3) en su lugar.',
        expert: 'Instantáneo: Juega esta carta antes de realizar una acción de Buscar, luego realiza Buscar(5) in su lugar.'
      },
      specialty: {
        name: 'Especialidad: Lluvia de Meteoros',
        cards: [
          { level: 1, name: 'Lluvia de Meteoros I', effect: 'Instantáneo: Selecciona una unidad y 1 unidad adyacente a ella. Inflige * a ambas unidades seleccionadas.\n· Potencia 0 - 1 Herida\n· Potencia 2 - 2 Heridas\n· Potencia 4 - 3 Heridas' },
          { level: 4, name: 'Lluvia de Meteoros IV', effect: 'Instantáneo: +1 Potencia\n— O —\nInstantáneo: Baraja tu pila de descartes de nuevo en tu mazo, luego roba 1 carta.' },
          { level: 6, name: 'Lluvia de Meteoros VI', effect: 'Instantáneo: Selecciona una unidad y 2 unidades adyacentes a ella. Inflige * a todas las unidades seleccionadas.\n· Potencia 0 - 1 Herida\n· Potencia 2 - 2 Heridas\n· Potencia 4 - 3 Heridas' }
        ]
      },
      lore: 'Un perturbado pero brillante brujo de mente inestable obsesionado con la piromancia y la caída de bólidos celestes. Es temido tanto por sus enemigos como por sus aliados por su tendencia a invocar lluvias de meteoros devastadoras sin importarle las consecuencias.',
      quote: '¿Habéis visto alguna vez caer una estrella del cielo? Es un espectáculo... abrasador.'
    },
    {
      name: 'Jeddite',
      type: 'Magia',
      className: 'Brujo (Warlock)',
      stats: { atk: 0, def: 0, power: 3, knowledge: 2 },
      initialSkill: {
        name: 'Brujería (Sorcery)',
        normal: 'Instantáneo: +1 Potencia\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Potencia\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Hechicería Misteriosa',
        cards: [
          { level: 1, name: 'Hechicería Misteriosa I', effect: 'Instantáneo: Roba hasta 3 cartas de tu mazo, toma cualquier carta de Hechizo y Especialidad y agrégalas a tu mano. Descarta las cartas restantes.' },
          { level: 4, name: 'Hechicería Misteriosa IV', effect: 'Instantáneo: Cancela un ataque que vaya a reducir la Vida de tu unidad * a 0.\n· Potencia 0 - * Bronce\n· Potencia 1 - * Plata\n· Potencia 2 - * Oro' },
          { level: 6, name: 'Hechicería Misteriosa VI', effect: 'Instantáneo: Roba hasta 4 cartas de tu mazo, toma cualquier carta de Hechizo y Especialidad y agrégalas a tu mano. Descarta las cartas restantes.' }
        ]
      },
      lore: 'Un místico subterráneo originario de Bracada que huyó a las cuevas de Nighon para estudiar las artes arcanas prohibidas de la hechicería de sangre sin las asfixiantes restricciones de los magos de la superficie. Busca desentrañar los secretos más profundos de la manipulación del maná.',
      quote: 'Las restricciones de la superficie solo limitan el verdadero potencial de la magia pura.'
    },
    {
      name: 'Lorelei',
      type: 'Poder',
      className: 'Cacique (Overlord)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Exploración (Scouting)',
        normal: 'Instantáneo: Juega esta carta antes de realizar una acción de Buscar, luego realiza Buscar(3) en su lugar.',
        expert: 'Instantáneo: Juega esta carta antes de realizar una acción de Buscar, luego realiza Buscar(5) en su lugar.'
      },
      specialty: {
        name: 'Especialidad: Arpías',
        cards: [
          { level: 1, name: 'Arpías I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de Arpías.' },
          { level: 4, name: 'Arpías IV', effect: 'Continuo: Para este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Arpías.' },
          { level: 6, name: 'Arpías VI', effect: 'Continuo: La unidad seleccionada gana +2 Ataque.\nEl efecto se duplica para la unidad de Arpías.' }
        ]
      },
      lore: 'Una cruel, pragmática y experimentada comandante de Nighon que adiestra a las arpías de las profundidades para convertirlas en garras implacables de asalto. Su liderazgo convierte a estas criaturas salvajes en una fuerza militar organizada y letal.',
      quote: 'Mis arpías huelen vuestra debilidad desde la oscuridad; vuestro fin vendrá desde el aire.'
    },
    {
      name: 'Mutare',
      type: 'Poder',
      className: 'Cacique (Overlord)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Tácticas (Tactics)',
        normal: 'Instantáneo: Al comienzo del combate, puedes intercambiar la posición de dos de tus unidades.',
        expert: 'Activación: Durante el combate, puedes intercambiar la posición de dos de tus unidades.'
      },
      specialty: {
        name: 'Especialidad: Dragones',
        cards: [
          { level: 1, name: 'Dragones I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEste effecto se duplica para una unidad de Dragones.' },
          { level: 4, name: 'Dragones IV', effect: 'Continuo: Para este combate, la Vida de la unidad seleccionada aumenta en 1.\nEste efecto se duplica para una unidad de Dragones.' },
          { level: 6, name: 'Dragones VI', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEste efecto se duplica para una unidad de Dragones.' }
        ]
      },
      lore: 'Consumida por un ansia insaciable de dominación absoluta, Mutare bebió la sangre de un dragón mitológico en un ritual arcano para transformarse en una temible y legendaria señora de dragones, gobernando Nighon con puño de hierro y fuego.',
      quote: 'La sangre de los dragones corre por mis venas. Arrodillaos ante vuestra verdadera reina.'
    },
    {
      name: 'Sephinroth',
      type: 'Magia',
      className: 'Brujo (Warlock)',
      stats: { atk: 0, def: 0, power: 3, knowledge: 2 },
      initialSkill: {
        name: 'Inteligencia (Intelligence)',
        normal: 'Instantáneo: Durante el combate, antes de que se active cualquier unidad, juega una carta de Hechizo. Solo puedes jugar una carta de Hechizo durante una ronda de combate.',
        expert: 'Instantáneo: Durante el combate, antes de que se active cualquier unidad, juega una carta de Hechizo. Este Hechizo no cuenta para tu límite de hechizos por ronda de combate.'
      },
      specialty: {
        name: 'Especialidad: Objetos de Valor',
        cards: [
          { level: 1, name: 'Objetos de Valor I', effect: 'Mapa: Paga 1 Oro para ganar 1 Objeto de Valor.\n— O —\nInstantáneo: Roba 1 carta.' },
          { level: 4, name: 'Objetos de Valor IV', effect: 'Mapa: Gana 1 Objeto de Valor.\n— O —\nInstantáneo: +2 Potencia.' },
          { level: 6, name: 'Objetos de Valor VI', effect: 'Mapa: Gana 2 Objetos de Valor.\n— O —\nInstantáneo: Roba 2 cartas.' }
        ]
      },
      lore: 'Una enigmática bruja nacida en la realeza de Bracada que desertó a las profundidades de Nighon. Utiliza sus formidables dotes matemáticas y lógicas para transmutar rocas ordinarias en gemas preciosas y cristales raros, financiando las inmensas campañas bélicas del inframundo.',
      quote: 'Incluso el caos de la guerra sigue una ecuación matemática perfecta que yo ya he resuelto.'
    },
    {
      name: 'Tarnum',
      type: 'Poder',
      className: 'Cacique (Overlord)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Finanzas (States)',
        normal: 'Instantáneo: Gana 3 de Oro.',
        expert: 'Instantáneo: Gana 6 de Oro.'
      },
      specialty: {
        name: 'Especialidad: Dragones',
        cards: [
          { level: 1, name: 'Dragones I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para una unidad de Dragones.' },
          { level: 4, name: 'Dragones IV', effect: 'Instantáneo: Elige una fila (línea recta de 5 espacios consecutivos). Cada unidad en esa fila sufre 2 Heridas.' },
          { level: 6, name: 'Dragones VI', effect: 'Instantáneo: Retira un cubo negro de una unidad de Dragones o colócalo sobre ella.\n— O —\nInstantáneo: La unidad seleccionada gana +2 Ataque.' }
        ]
      },
      lore: 'El héroe inmortal condenado por los Ancestros que, en una de sus múltiples reencarnaciones, lideró como un despiadado Caudillo (Overlord) de Nighon. Bajo este manto, unió y dominó a los dragones del inframundo para enfrentarse a su propio y trágico destino.',
      quote: 'Los Ancestros me niegan el descanso, pero las bestias de las profundidades obedecen mi llamado.'
    }
  ],
  rampart: [
    {
      name: 'Clancy',
      type: 'Poder',
      className: 'Explorador (Ranger)',
      stats: { atk: 1, def: 3, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Orientación (Pathfinding)',
        normal: 'Mapa: En este turno, tu Héroe puede moverse a través de lugares con Unidades Neutrales y Héroes Enemigos, pero si termina su movimiento en uno de estos lugares, comienza el Combate.',
        expert: 'Mapa: Tu héroe puede moverse sobre el borde amarillo y los lugares bloqueados, pero no puede finalizar su movimiento sobre ellos.'
      },
      specialty: {
        name: 'Especialidad: Unicornios',
        cards: [
          { level: 1, name: 'Crines de Luz I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEste efecto se duplica para la unidad Unicornios.' },
          { level: 4, name: 'Halo de Pureza IV', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEste efecto se duplica para la unidad Unicornios.' },
          { level: 6, name: 'Carga Radiante VI', effect: 'Continuo: Para este combate, la unidad seleccionada reduce cualquier Daño realizado por Hechizos en 1, hasta un mínimo de 0.\nEste efecto se duplica para la unidad Unicornios.' }
        ]
      },
      lore: 'Un explorador enano que posee una afinidad mística inigualable con los unicornios de AvLee, liderándolos con presteza y elegancia divina en defensa de los claros sagrados.',
      quote: 'La luz de los unicornios disipará la oscuridad de cualquier invasor que ose profanar el suelo sagrado de AvLee.'
    },
    {
      name: 'Gelu',
      type: 'Poder',
      className: 'Explorador (Ranger)',
      stats: { atk: 1, def: 3, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Tiro con Arco (Archery)',
        normal: 'Continuo: Durante esta ronda de combate, tus unidades a distancia obtienen +1 Ataque si el objetivo es una unidad no adyacente .Tus unidades aliadas de ataque a distancia infligen +1 de daño físico.',
        expert: 'Continuo: Hasta el final de la siguiente ronda de combate, tus unidades de ataque a distancia obtienen +1 de Iniciativa y +1 Ataque si el objetivo es una unidad no adyacente.'
      },
      specialty: {
        name: 'Especialidad: Tiradores',
        cards: [
          { level: 1, name: 'Tiradores I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEste efecto se duplica para las unidades Elfos y Tiradores.' },
          { level: 4, name: 'Tiradores IV', effect: 'Mapa: Si tienes una carta de Unidad Manada de Elfos, descártala. Luego, busca en el mazo de Unidad Neutral Plata la carta Tiradores y añádela a tu mazo de Unidades. Sólo puedes controlar 1 unidad de Tiradores al mismo tiempo.\n— O —\nInstantáneo: Roba una carta.' },
          { level: 6, name: 'Tiradores VI', effect: 'Continuo: Durante este Combate, la Iniciativa de tu unidad seleccionada se incrementa en 2.\nEste efecto se duplica para las unidades Elfos y Tiradores.' }
        ]
      },
      lore: 'Un héroe legendario de sangre mestiza, capitán de la prestigiosa Guardia Forestal de AvLee y custodio designado de la devastadora Espada de Armagedón.',
      quote: 'Nuestras flechas no viajan con el viento, viajan impulsadas por la justicia de los bosques ancestrales.'
    },
    {
      name: 'Gem',
      type: 'Magia',
      className: 'Druida (Druid)',
      stats: { atk: 0, def: 2, power: 1, knowledge: 2 },
      initialSkill: {
        name: 'Primeros Auxilios (First Aid)',
        normal: 'Instantáneo: Retira 1 Herida de una de tus unidades.',
        expert: 'Instantáneo: Al usar la carta de Primeros Auxilios, resuelve su efecto contra el mismo objetivo 3 veces.'
      },
      specialty: {
        name: 'Especialidad: Primeros Auxilios',
        cards: [
          { level: 1, name: 'Primeros Auxilios I', effect: 'Instantáneo: Coge una carta Tienda de Primeros Auxilios del mazo de Máquinas de Guerra sin coste.\n— O —\nInstantáneo: Si tienes una Tienda de Primeros Auxilios, roba 1 carta.' },
          { level: 4, name: 'Primeros Auxilios IV', effect: 'Instantáneo: Retira 2 Heridas de una de tus unidades.' },
          { level: 6, name: 'Primeros Auxilios VI', effect: 'Continuo: Durante este Combate, duplica el efecto de tu Tienda de Primeros Auxilios.' }
        ]
      },
      lore: 'Una valiente hechicera refugiada de Enroth que abrazó las enseñanzas pacifistas de los druidas en AvLee, sanando las heridas físicas y espirituales del campo de batalla.',
      quote: 'El bosque cura a quienes lo protegen con devoción, pero puede reclamar la vida de aquellos que traen el caos consigo.'
    },
    {
      name: 'Ivor',
      type: 'Poder',
      className: 'Explorador (Ranger)',
      stats: { atk: 1, def: 3, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Ofensiva (Offence)',
        normal: 'Instantáneo: +1 Ataque\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Elfos',
        cards: [
          { level: 1, name: 'Elfos I', effect: 'Instantáneo: Pon todos los dados de la siguiente tirada de ataque en <<0>>.' },
          { level: 4, name: 'Elfos IV', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\nEl efecto se duplica para una unidad a distancia.' },
          { level: 6, name: 'Elfos VI', effect: 'Continuo: Para este combate, la Vida de la unidad seleccionada aumenta en 2.\n— O —\nInstantáneo: En lugar de tirar los dados, coloca todos los dados de tu turada en los valores que elijas.' }
        ]
      },
      lore: 'Un curtido y astuto explorador elfo que comanda las huestes de arqueros de AvLee, dotado de un ojo infalible y reflejos felinos inigualables.',
      quote: 'Antes de que alcances a escuchar el silbido de la cuerda de mi arco, el destino de la batalla ya habrá sido sellado.'
    },
    {
      name: 'Melodia',
      type: 'Magia',
      className: 'Druida (Druid)',
      stats: { atk: 0, def: 2, power: 1, knowledge: 2 },
      initialSkill: {
        name: 'Suerte (Luck)',
        normal: 'Continuo: Puedes volver a tirar un dado de Tesoro y un dado de Recursos una vez durante este turno.',
        expert: 'Continuo: Puedes volver a tirar cualquier dado una vez durante este turno.'
      },
      specialty: {
        name: 'Especialidad: Fortuna',
        cards: [
          { level: 1, name: 'Fortuna I', effect: 'Instantáneo: Gana Moral Positiva y 1 Oro.' },
          { level: 4, name: 'Fortuna IV', effect: 'Instantáneo: Tira 2 dados de Recursos y resuelve uno de ellos.\nGana 1 Oro.' },
          { level: 6, name: 'Fortuna VI', effect: 'Mapa: Durante este turno, la cantidad de dados que tiras y resuelves en los lugares aumenta en 1. Gana 1 Oro.' }
        ]
      },
      lore: 'Una druida cantarína y mística cuyo espíritu está en perfecta sintonía con las hadas de la fortuna, infundiendo un entusiasmo mágico e invencible en sus tropas.',
      quote: 'El destino canta en armonía con la brisa de la espesura; solo quienes tienen el alma limpia pueden escuchar su melodía de victoria.'
    },
    {
      name: 'Mephala',
      type: 'Poder',
      className: 'Explorador (Ranger)',
      stats: { atk: 1, def: 3, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Liderazgo (Leadership)',
        normal: 'Instantáneo: Gana una ficha de Moral Positiva.',
        expert: 'Instantáneo: Roba 2 cartas. Luego, gana una ficha de Moral Positiva.'
      },
      specialty: {
        name: 'Especialidad: Armadura',
        cards: [
          { level: 1, name: 'Armadura I', effect: 'Instantáneo: +2 Defensa.' },
          { level: 4, name: 'Armadura IV', effect: 'Instantáneo: +3 Defensa.' },
          { level: 6, name: 'Armadura VI', effect: 'Instantáneo: +4 Defensa.' }
        ]
      },
      lore: 'Una comandante defensiva sumamente brillante y analítica, cuyas inquebrantables tácticas de bloqueo y desgaste agotan hasta al atacante más fiero.',
      quote: 'Que ataquen con toda su ira. Nuestras murallas de madera viva y nuestras voluntades de hierro jamás cederán un solo milímetro.'
    },
    {
      name: 'Tarnum',
      type: 'Poder',
      className: 'Explorador (Ranger)',
      stats: { atk: 1, def: 3, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Liderazgo (Leadership)',
        normal: 'Instantáneo: Gana una ficha de Moral Positiva.',
        expert: 'Instantáneo: Roba 2 cartas. Luego, gana una ficha de Moral Positiva.'
      },
      specialty: {
        name: 'Especialidad: Tiradores certeros',
        cards: [
          { level: 1, name: 'Tiradores certeros I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de Elfos o Tiradores certeros.' },
          { level: 4, name: 'Tiradores certeros IV', effect: 'Continuo: Para este Combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Elfos o Tiradores certeros.' },
          { level: 6, name: 'Tiradores certeros VI', effect: 'Instantáneo: Juega esta carta al comienzo del combate. Busca una unidad de Tiradores certeros en el mazo de unidades neutrales Plata (o su pila de descarte) y añádela a tu ejército para este combate (descártala después)\n— O —\nInstantáneo: Roba 1 carta.' }
        ]
      },
      lore: 'El legendario Héroe Inmortal que en esta encarnación asume el manto de explorador de AvLee para proteger a los elfos y forjar a los más letales francotiradores forestales.',
      quote: 'He vivido mil vidas y cometido mil errores, pero defender la pureza y libertad de AvLee es el deber más sagrado que jamás he jurado.'
    }
  ],
  torre: [
    {
      name: 'Cyra',
      type: 'Magia',
      className: 'Mago (Wizard)',
      stats: { atk: 0, def: 0, power: 2, knowledge: 3 },
      initialSkill: {
        name: 'Diplomacia (Diplomacy)',
        normal: 'Mapa: Por cada Vivienda que tengas, roba 1 carta de Unidad Neutral correspondiente. Puedes reclutar una de estas unidades si Pagas su coste de reclutamiento.',
        expert: 'Instantáneo: Omite el combate con unidades neutrales en un lugar cuya dificultad sea igual al nivel de tu héroe. Visita el lugar. Este héroe no gana experiencia.'
      },
      specialty: {
        name: 'Especialidad: Celeridad',
        cards: [
          { level: 1, name: 'Celeridad I', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 3.' },
          { level: 4, name: 'Celeridad IV', effect: 'Continuo: La unidad seleccionada obtiene +1 Ataque.\nEl efecto se duplica si la unidad atacada tiene mayor Iniciativa.' },
          { level: 6, name: 'Celeridad VI', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 3.\nEsta unidad gana +1 Defensa contra ataques realizados por unidades con menor Iniciativa.' }
        ]
      },
      lore: 'Una maga de Bracada dotada de un carisma deslumbrante que convence a monstruos errantes de unirse a su causa, acelerando el paso de sus tropas con magia de aire.',
      quote: 'El viento sopla a favor de los audaces, y mi voz guiará a las criaturas más reacias a sumarse a nuestra marcha.'
    },
    {
      name: 'Dracon',
      type: 'Magia',
      className: 'Mago (Wizard)',
      stats: { atk: 0, def: 0, power: 2, knowledge: 3 },
      initialSkill: {
        name: 'Sabiduría (Wisdom)',
        normal: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(3) en lugar de Buscar(2).',
        expert: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(4) en lugar de Buscar(3).'
      },
      specialty: {
        name: 'Especialidad: Encantadores',
        cards: [
          { level: 1, name: 'Encantadores I', effect: 'Instantáneo: Tu unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: Tu unidad seleccionada gana +1 Defensa.\n______\nEste efecto se duplica para Magos y Encantadores.' },
          { level: 4, name: 'Encantadores IV', effect: 'Mapa: Si tienes una carta de Manada de Magos, descártala. Luego, busca en el mazo de Unidad Neutral Oro la carta Encantadores y añádela a tu mazo de Ejército. Sólo puedes controlar 1 unidad de Encantadores a la vez.\n— O —\nInstantáneo: Roba una carta.' },
          { level: 6, name: 'Encantadores VI', effect: 'Continuo: Para este combate, la Iniciativa de tu unidad seleccioanda aumenta en 2.\nEste efecto se duplica para Magos y Encantadores.' }
        ]
      },
      lore: 'Un talentoso mago de Bracada célebre por su obsesión de convertirse en el mayor cazador de dragones de la historia, adiestrando a los Encantadores más poderosos.',
      quote: 'Los dragones creen gobernar el cielo con su aliento de fuego, pero mis encantadores les enseñarán el verdadero peso de la alta magia.'
    },
    {
      name: 'Iona',
      type: 'Poder',
      className: 'Alquimista (Alchemist)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Inteligencia (Intelligence)',
        normal: 'Instantáneo: Durante el combate, antes de que se active cualquier unidad, juega una carta de Hechizo. Solo puedes jugar una carta de Hechizo durante una ronda de combate.',
        expert: 'Instantáneo: Durante el combate, antes de que se active cualquier unidad, juega una carta de Hechizo. Este Hechizo no cuenta para tu límite de hechizos por ronda de combate.'
      },
      specialty: {
        name: 'Especialidad: Genios',
        cards: [
          { level: 1, name: 'Genios I', effect: 'Continuo: Para este combate, la Vida de tu unidad seleccioanda aumenta en 1.\nEste efecto se duplica para la unidad Genios.' },
          { level: 4, name: 'Genios IV', effect: 'Instantáneo: Tu unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: Tu unidad seleccionada gana +1 Defensa.\n______\nEste efecto se duplica para la unidad Genios.' },
          { level: 6, name: 'Genios VI', effect: 'Instantáneo: Tu unidad seleccionada gana +2 Defensa.\nEste efecto se duplica para la unidad Genios.' }
        ]
      },
      lore: 'Una alquimista experta en la contención de energías elementales que mantiene una estrecha alianza con los Genios de Bracada.',
      quote: 'Los genios no son simples sirvientes de lámpara; son la encarnación de la tormenta, y yo he aprendido a dirigir su tempestad.'
    },
    {
      name: 'Josephine',
      type: 'Poder',
      className: 'Alquimista (Alchemist)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Brujería (Sorcery)',
        normal: 'Instantáneo: +1 Potencia\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Potencia\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Golems',
        cards: [
          { level: 1, name: 'Golems I', effect: 'Continuo: Para este combate, la Vida de tu unidad seleccioanda aumenta en 1.\nEste efecto se duplica para la unidad Golems.' },
          { level: 4, name: 'Golems IV', effect: 'Instantáneo: Tu unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: Tu unidad seleccionada gana +1 Defensa.\n______\nEste efecto se duplica para la unidad Golems.' },
          { level: 6, name: 'Golems VI', effect: 'Instantáneo: Tu unidad seleccionada gana +2 Ataque.\nEste efecto se duplica para la unidad Golems.' }
        ]
      },
      lore: 'Una brillante alquimista con una destreza sin parangón para esculpir y animar autómatas de piedra y metal en Bracada, potenciando su resistencia.',
      quote: 'La carne se cansa, sangra y duda. Mis creaciones de piedra y metal marchan sin descanso, uniendo la voluntad del creador con la eternidad.'
    },
    {
      name: 'Solmyr',
      type: 'Magia',
      className: 'Mago (Wizard)',
      stats: { atk: 0, def: 0, power: 2, knowledge: 3 },
      initialSkill: {
        name: 'Brujería (Sorcery)',
        normal: 'Instantáneo: +1 Potencia\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Potencia\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Relámpago en Cadena',
        cards: [
          { level: 1, name: 'Relámpago en Cadena I', effect: 'Activación: Selecciona una unidad y las otras 2 unidades más cercanas a ella. Asigna 1/1/0 Heridas, comenzando con la primera unidad seleccionada.' },
          { level: 4, name: 'Relámpago en Cadena IV', effect: 'Instantáneo: Descarta hasta 3 cartas de tu mazo de Poder y Magia y devuelve 1 de ellas a tu mano.' },
          { level: 6, name: 'Relámpago en Cadena VI', effect: 'Activación: Selecciona una unidad y las otras 2 unidades más cercanas a ella. Asigna 2/1/1 Heridas, comenzando con la primera unidad seleccionada.' }
        ]
      },
      lore: 'Un noble e inmensamente poderoso genio de aire que juró lealtad incondicional al Rey Gavin Magnus de Bracada tras ser liberado de una prisión milenaria.',
      quote: 'He presenciado la caída de dinastías enteras. Vuestra efímera existencia se desvanecerá bajo mi relámpago azul.'
    },
    {
      name: 'Torosar',
      type: 'Poder',
      className: 'Alquimista (Alchemist)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Misticismo (Mysticism)',
        normal: 'Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En lugar de descartar la carta de Hechizo, vuelve a tu mano.',
        expert: 'Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En lugar de descartar la carta de Hechizo y todas las demás cartas jugadas junto con ella, llévalas de vuelta a tu mano.'
      },
      specialty: {
        name: 'Especialidad: Balista',
        cards: [
          { level: 1, name: 'Balista I', effect: 'Mapa: Paga 5 Oros para ganar una balista.\n— O —\nInstantáneo: Activa tu balista (si tienes una).' },
          { level: 4, name: 'Balista IV', effect: 'Mapa: Hasta el final de la ronda, gana una balista adicional durante el combate.\nCuando se juega, esta carta cuenta como una balista.' },
          { level: 6, name: 'Balista VI', effect: 'Instantáneo: Para este combate, gana una balista adicional. Ya puedes activar todas tus balistas.\nCuando se juega, esta carta cuenta como una balista.' }
        ]
      },
      lore: 'Un pragmático alquimista especializado en ingeniería militar de Bracada, partidario de las máquinas estables antes que los caprichosos conjuros.',
      quote: 'Dejad que los magos reciten sus caprichosos silogismos. El ángulo exacto de una balista bien calibrada nunca falla.'
    }
  ],
  infierno: [
    {
      name: 'Ash',
      type: 'Magia',
      className: 'Hereje (Heretic)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Ojo de Águila (Eagle Eye)',
        normal: 'Instantáneo: Roba cartas del mazo de hechizos hasta que encuentres una carta de Hechizo Básico. Tómala en tu mano o descártala. Baraja el resto de las cartas y devuélvelas al mazo de hechizos.',
        expert: 'Instantáneo: Roba cartas del mazo de hechizos hasta que encuentres una carta de Hechizo Experto. Tómala en tu mano o descártala. Baraja el resto de las cartas y devuélvelas al mazo de hechizos.'
      },
      specialty: {
        name: 'Especialidad: Ansia de Sangre',
        cards: [
          { level: 1, name: 'Ansia de Sangre I', effect: 'Instantáneo: La unidad melé o voladora seleccionada gana +2 Ataque. Coloca un cubo negro sobre esta unidad.' },
          { level: 4, name: 'Ansia de Sangre IV', effect: 'Continuo: Para este combate, el Ataque de la unidad melé o voladora seleccionada aumenta en 2 y su Iniciativa en 1. Coloca un cubo negro sobre esta unidad.' },
          { level: 6, name: 'Ansia de Sangre VI', effect: 'Instantáneo: La unidad melé o voladora seleccionada gana +3 Ataque e ignora los contraataques. Coloca un cubo negro sobre esta unidad.' }
        ]
      },
      lore: 'Una hereje con visiones obsesivas de derramamiento de sangre, experta en transmitir un frenesí despiadado y una sed insaciable de combate a todos sus ejércitos.',
      quote: 'El olor de la sangre es la única brújula que necesito. Corred o uníos a nuestro festín abisal.'
    },
    {
      name: 'Fiona',
      type: 'Poder',
      className: 'Demonio (Demoniac)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Orientación (Pathfinding)',
        normal: 'Mapa: En este turno, tu Héroe puede moverse a través de lugares con Unidades Neutrales y Héroes Enemigos, pero si termina su movimiento en uno de estos lugares, comienza el Combate.',
        expert: 'Mapa: Tu héroe puede moverse sobre el borde amarillo y los lugares bloqueados, pero no puede finalizar su movimiento sobre ellos.'
      },
      specialty: {
        name: 'Especialidad: Cerberos',
        cards: [
          { level: 1, name: 'Cerberos I', effect: 'Instantáneo: Tu unidad seleccionada gana +1 de Ataque.\n— O —\nInstantáneo: Tu unidad seleccionada gana +1 Defensa.\n______\nEste efecto se duplica para la unidad Cerberos.' },
          { level: 4, name: 'Cerberos IV', effect: 'Continuo: Para este Combate, la Vida de tu unidad seleccionada aumenta en 1.\nEste efecto se duplica para la unidad Cerberos.' },
          { level: 6, name: 'Cerberos VI', effect: 'Instantáneo: Tu unidad seleccionada gana +2 de Ataque.\nEste effecto se duplica para la unidad Cerberos.' }
        ]
      },
      lore: 'Una domadora de bestias infernales que entrena a los temibles sabuesos de tres cabezas para desgarrar las líneas de vanguardia enemigas con feroz precisión.',
      quote: 'Mis sabuesos no ladran antes de morder. Solo escuchas el crujir de los huesos y el calor de las cenizas.'
    },
    {
      name: 'Octavia',
      type: 'Poder',
      className: 'Demonio (Demoniac)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Aprendizaje (Learning)',
        normal: 'Instantáneo: Elige 1 carta de tu pila de descarte y añádela a tu mano.',
        expert: 'Mapa: Retira hasta 2 cartas de Característica de tu mano o pila de descarte. Toma hasta 2 cartas de Característica Mejorada diferentes y colócalas encima de tu pila de descarte. Retira Aprendizaje.'
      },
      specialty: {
        name: 'Especialidad: Oro',
        cards: [
          { level: 1, name: 'Oro I', effect: 'Instantáneo: Juega esta carta después de sacar al menos 1 dado de Recursos para establecer 1 dado de Recursos a <<6 Oros>>.\n— O —\nInstantáneo: Roba 1 carta.' },
          { level: 4, name: 'Oro IV', effect: 'Instantáneo: Tira y resuelve 1 dado de Recursos.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Ataque.' },
          { level: 6, name: 'Oro VI', effect: 'Instantáneo: Tira 2 dados de Recursos y resuelve uno de ellos.\n— O —\nInstantáneo: Roba 2 cartas.' }
        ]
      },
      lore: 'Una calculadora oficial de las legiones de Sheogh, experta en la recaudación tributaria de almas y la eficiente administración del tesoro de azufre.',
      quote: 'Incluso en el Caos hay un balance de cuentas. Vuestras vidas no son más que un tributo que ha vencido su plazo.'
    },
    {
      name: 'Rashka',
      type: 'Poder',
      className: 'Demonio (Demoniac)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Aprendizaje (Learning)',
        normal: 'Instantáneo: Elige 1 carta de tu pila de descarte y añádela a tu mano.',
        expert: 'Mapa: Retira hasta 2 cartas de Característica de tu mano o pila de descarte. Toma hasta 2 cartas de Característica Mejorada diferentes y colócalas encima de tu pila de descarte. Retira Aprendizaje.'
      },
      specialty: {
        name: 'Especialidad: Efreets',
        cards: [
          { level: 1, name: 'Efreets I', effect: 'Instantáneo: Tu unidad seleccionada gana +1 de Ataque.\n— O —\nInstantáneo: Tu unidad seleccionada gana +1 Defensa.\n______\nEste efecto se duplica para la unidad Efreets.' },
          { level: 4, name: 'Efreets IV', effect: 'Continuo: Hasta el final del Combate, cuando tu unidad seleccionada sea atacada por una unidad terrestre o voladora, el atacante sufre 1 Herida.' },
          { level: 6, name: 'Efreets VI', effect: 'Continuo: Hasta el final del Combate, cuando tu unidad seleccionada sea atacada por una unidad terrestre o voladora, el atacante sufre 1 Herida.\nEste efecto se duplica para la unidad Efreets.' }
        ]
      },
      lore: 'Un brutal y colérico demonio que somete a los efreets más salvajes a su estricta disciplina militar, convirtiéndolos en escudos vivientes de fuego.',
      quote: 'El fuego no obedece a los débiles. Mis efreets os consumirán antes de que podáis implorar clemencia.'
    },
    {
      name: 'Xyron',
      type: 'Magia',
      className: 'Hereje (Heretic)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Sabiduría (Wisdom)',
        normal: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(3) en lugar de Buscar(2).',
        expert: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(4) en lugar de Buscar(3).'
      },
      specialty: {
        name: 'Especialidad: Infierno',
        cards: [
          { level: 1, name: 'Infierno I', effect: 'Activación: Descarta 2 cartas. Luego selecciona un espacio. Todas las unidades en este y los espacios adyacentes reciben 1 Herida.' },
          { level: 4, name: 'Infierno IV', effect: 'Activación: Descarta 1 carta. Luego selecciona un espacio. Todas las unidades en este y los espacios adyacentes reciben 1 Herida.' },
          { level: 6, name: 'Infierno VI', effect: 'Activación: Selecciona un espacio. Todas las unidades en este y los espacios adyacentes reciben 1 Herida.' }
        ]
      },
      lore: 'Un conjurador proscrito obsesionado con desatar fuegos eternos, capaz de fundir ejércitos con la devastación absoluta de su tormenta de fuego abisal.',
      quote: 'Dejad que las llamas del abismo os abracen. Del polvo venís y en cenizas os fundiré.'
    },
    {
      name: 'Zydar',
      type: 'Magia',
      className: 'Hereje (Heretic)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Brujería (Sorcery)',
        normal: 'Instantáneo: +1 Potencia\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Potencia\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Brujería',
        cards: [
          { level: 1, name: 'Brujería I', effect: 'Instantáneo: Juega esta carta después de lanzar un Hechizo, luego roba 1 carta.\n— O —\nInstantáneo: +1 Potencia.' },
          { level: 4, name: 'Brujería IV', effect: 'Instantáneo: El próximo Hechizo que lances no cuenta para el límite.\n— O —\nInstantáneo: +2 Potencia.' },
          { level: 6, name: 'Brujería VI', effect: 'Continuo: Hasta el final de la ronda de Combate, después de lanzar un Hechizo, roba 1 carta.\nInstantáneo: +2 Potencia.' }
        ]
      },
      lore: 'Un refinado y calculador hereje que extrae poder místico directamente del núcleo del caos, amplificando cada conjuro con efectos corrosivos de gran intensidad.',
      quote: 'Vuestra magia se desvanece ante el poder corrosivo del azufre. Contemplad el verdadero arte del tormento.'
    }
  ],
  stronghold: [
    {
      name: 'Crag Hack',
      type: 'Poder',
      className: 'Bárbaro (Barbarian)',
      stats: { atk: 4, def: 0, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Ofensiva (Offense)',
        normal: 'Instantáneo: +1 Ataque\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Ofensa',
        cards: [
          { level: 1, name: 'Ofensa I', effect: 'Continuo: Para este combate, la unidad seleccionada obtiene +1 Ataque.' },
          { level: 4, name: 'Ofensa IV', effect: 'Continuo: La unidad seleccionada gana +1 Ataque. Puedes descartar 1 carta adicional para ganar +1 Ataque adicional.' },
          { level: 6, name: 'Ofensa VI', effect: 'Continuo: Para este combate, cada carta que juegues puede otorgar "Instantáneo: +1 Ataque" en lugar de su efecto normal.' }
        ]
      },
      lore: 'El bárbaro más famoso de Antagarich, un guerrero temerario que confía únicamente en la fuerza de su brazo y el filo de su hacha.',
      quote: '¡La mejor defensa es enterrar profundamente tu hacha en el enemigo antes de que pueda armarse!'
    },
    {
      name: 'Dessa',
      type: 'Magia',
      className: 'Mago de Batalla (Battle Mage)',
      stats: { atk: 2, def: 1, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Logística (Logistics)',
        normal: 'Continuo: Al final de tu turno, mueve la miniatura de tu Héroe a un lugar vacío adyacente.',
        expert: 'Instantáneo: Tu héroe gana +1 Punto de Movimiento.'
      },
      specialty: {
        name: 'Especialidad: Logística',
        cards: [
          { level: 1, name: 'Logística I', effect: 'Instantáneo: Extiende tu combate contra un ejército neutral durante otra ronda (sin gastar PM).' },
          { level: 4, name: 'Logística IV', effect: 'Mapa: Tu héroe principal gana 1 PM.\n— O —\nContinuo: Para este combate, la Iniciativa de todas tus unidades aumenta en 1.' },
          { level: 6, name: 'Logística VI', effect: 'Mapa: Tu héroe principal gana 1 PM y puede moverse a través de zonas bloqueadas durante este turno.\n— O —\nInstantáneo: Roba 2 cartas.' }
        ]
      },
      lore: 'Un chamán de Krewlod dotado de una sintonía profunda con las corrientes tectónicas, permitiéndole acelerar el avance de sus tropas.',
      quote: 'El camino se dobla ante nuestra voluntad. ¡Acelerad el paso!'
    },
    {
      name: 'Gundula',
      type: 'Magia',
      className: 'Mago de Batalla (Battle Mage)',
      stats: { atk: 2, def: 1, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Sabiduría (Wisdom)',
        normal: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(3) en lugar de Buscar(2).',
        expert: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(4) en lugar de Buscar(3).'
      },
      specialty: {
        name: 'Especialidad: Lentitud',
        cards: [
          { level: 1, name: 'Lentitud I', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada se reduce en 2, hasta un mínimo de 1.' },
          { level: 4, name: 'Lentitud IV', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\nEl efecto se duplica si la Iniciativa de la unidad es mayor que la Iniciativa de la unidad atacada.' },
          { level: 6, name: 'Lentitud VI', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada se reduce en 4, hasta un mínimo de 1.' }
        ]
      },
      lore: 'Una estratega bárbara de intelecto gélido, famosa por ralentizar el ímpetu de las cargas enemigas y asfixiar su movilidad antes de desatar la furia de su tribu.',
      quote: 'El pánico nubla la mente y frena los pies. Vuestro ímpetu morirá antes de tocar nuestras filas.'
    },
    {
      name: 'Shiva',
      type: 'Poder',
      className: 'Bárbaro (Barbarian)',
      stats: { atk: 4, def: 0, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Exploración (Scouting)',
        normal: 'Instantáneo: Juega esta carta antes de realizar una acción de Buscar, luego realiza Buscar(3) en su lugar.',
        expert: 'Instantáneo: Juega esta carta antes de realizar una acción de Buscar, luego realiza Buscar(5) en su lugar.'
      },
      specialty: {
        name: 'Especialidad: Aves de Trueno',
        cards: [
          { level: 1, name: 'Aves de Trueno I', effect: 'Instantáneo: La unidad seleccionada gana +1 de Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de Aves de Trueno.' },
          { level: 4, name: 'Aves de Trueno IV', effect: 'Continuo: Para este combate, la unidad seleccionada gana +1 Vida.\nEl efecto se duplica para la unidad de Aves de Trueno.' },
          { level: 6, name: 'Aves de Trueno VI', effect: 'Continuo: Para este combate, la unidad seleccionada gana +2 Iniciativa.\nEl efecto se duplica para la unidad de Aves de Trueno.' }
        ]
      },
      lore: 'Una jinete bárbara indómita criada en las cimas escarpadas de Krewlod, capaz de silbar en la frecuencia de las tormentas y guiar a las colosales Aves del Trueno.',
      quote: '¿Escucháis el trueno en las alturas? No es el clima, es el eco de vuestra inminente caída.'
    },
    {
      name: 'Tarnum',
      type: 'Poder',
      className: 'Bárbaro (Barbarian)',
      stats: { atk: 4, def: 0, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Ofensiva (Offense)',
        normal: 'Instantáneo: +1 Ataque\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Ofensa',
        cards: [
          { level: 1, name: 'Ofensa I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: Roba 1 carta.' },
          { level: 4, name: 'Ofensa IV', effect: 'Continuo: Para este combate, la unidad seleccionada gana +1 Ataque.' },
          { level: 6, name: 'Ofensa VI', effect: 'Instantáneo: La unidad seleccionada gana +3 Ataque.' }
        ]
      },
      lore: 'El legendario Héroe Inmortal que comenzó su eterno camino de redención como el indomable tirano bárbaro de Krewlod, empuñando la espada de la liberación.',
      quote: 'He vivido mil vidas y luchado en mil guerras. Vuestro acero no puede extinguir un fuego que los propios ancestros encendieron.'
    },
    {
      name: 'Yog',
      type: 'Poder',
      className: 'Bárbaro (Barbarian)',
      stats: { atk: 4, def: 0, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Ofensiva (Offense)',
        normal: 'Instantáneo: +1 Ataque\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Cíclopes',
        cards: [
          { level: 1, name: 'Cíclopes I', effect: 'Instantáneo: La unidad seleccionada gana +1 de Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de Cíclopes.' },
          { level: 4, name: 'Cíclopes IV', effect: 'Continuo: Para este Combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Cíclopes..' },
          { level: 6, name: 'Cíclopes VI', effect: 'Continuo: Para este Combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Cíclopes.' }
        ]
      },
      lore: 'Nacido de una madre genio de Bracada y un padre bárbaro de Krewlod, Yog renunció por completo a sus refinados estudios mágicos para abrazar la gloriosa y salvaje senda de la fuerza.',
      quote: 'Dejad los trucos de magia y los conjuros para los débiles. El rugido de un cíclope y la fuerza bruta deciden el destino del campo de batalla.'
    }
  ],
  fortaleza: [
    {
      name: 'Adrienne',
      type: 'Magia',
      className: 'Bruja (Witch)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Sabiduría (Wisdom)',
        normal: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(3) en lugar de Buscar(2).',
        expert: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(4) en lugar de Buscar(3).'
      },
      specialty: {
        name: 'Especialidad: Magia de Fuego',
        cards: [
          { level: 1, name: 'Llama del Pantano I', effect: 'Comienzas el juego con un hechizo de Fuego memorizado de forma gratuita. Su coste de Maná disminuye en 1.' },
          { level: 4, name: 'Llama del Pantano IV', effect: 'Tus hechizos de Fuego causan +1 de daño místico adicional y aplican Quemadura (quita 1 HP al inicio del turno).' },
          { level: 6, name: 'Llama del Pantano VI', effect: 'Una vez por combate, puedes relanzar un hechizo de Fuego fallido de tu pila de descartes sin coste de Maná.' }
        ]
      },
      lore: 'Una bruja única de Tatalia que rompió los tabúes de su pueblo para dominar la magia del fuego, utilizándola para defender su hogar.',
      quote: 'El fuego también puede florecer en la ciénaga. Dejad que consuma a nuestros invasores.'
    },
    {
      name: 'Bron',
      type: 'Poder',
      className: 'Señor de las Bestias (Beastmaster)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Resistencia (Resistance)',
        normal: 'Otorga +1 de Defensa mística a tus tropas frente a cualquier daño de hechizo enemigo.',
        expert: 'Gasta 1 Corona para cancelar por completo un hechizo enemigo de nivel 1 o 2 lanzado en esta ronda.'
      },
      specialty: {
        name: 'Especialidad: Basiliscos',
        cards: [
          { level: 1, name: 'Fiebre de Basilisco I', effect: 'Tus Basiliscos y Basiliscos Grandes obtienen +1 de Defensa y +1 de Iniciativa.' },
          { level: 4, name: 'Fiebre de Basilisco IV', effect: 'Tus Basiliscos tienen una probabilidad aumentada de aturdir e inmovilizar por completo a su objetivo durante 1 ronda.' },
          { level: 6, name: 'Fiebre de Basilisco VI', effect: 'Una vez por combate, tus Basiliscos pueden petrificar instantáneamente a una unidad enemiga de nivel bronce o plata.' }
        ]
      },
      lore: 'Un célebre domador de bestias capaz de guiar a los basiliscos salvajes del pantano para que petrifiquen a ejércitos enteros.'
    },
    {
      name: 'Gerwulf',
      type: 'Poder',
      className: 'Señor de las Bestias (Beastmaster)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Armero (Armorer)',
        normal: 'Tus unidades aliadas de nivel bronce reducen en 1 todo daño físico recibido.',
        expert: 'Tus unidades aliadas de nivel bronce y plata reducen en 1 todo daño físico recibido.'
      },
      specialty: {
        name: 'Especialidad: Balista',
        cards: [
          { level: 1, name: 'Balista I', effect: 'Mapa: Paga 5 Oros para ganar una balista.\n— O —\nInstantáneo: Activa tu balista (si tienes una).' },
          { level: 4, name: 'Balista IV', effect: 'Continuo: La unidad seleccionada sufre 1 Herida.\nInstantáneo: Descarta tu balista para inflingir 2 Heridas en la unidad seleccionada.' },
          { level: 6, name: 'Balista VI', effect: 'Continuo: Puedes jugar esta carta al comienzo del combate. Para este combate, puedes elegir objetivos para tu balista (si tienes una).\nInstantáneo: Descarta tu balista para inflingir 3 Heridas en la unidad seleccionada.' }
        ]
      },
      lore: 'Gerwulf es un experto en maquinaria de guerra que prefiere la potencia de las balistas portátiles sobre los conjuros arcanos.'
    },
    {
      name: 'Merist',
      type: 'Magia',
      className: 'Bruja (Witch)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Primeros Auxilios (First Aid)',
        normal: 'Instantáneo: Retira 1 Herida de una de tus unidades.',
        expert: 'Instantáneo: Al usar la carta de Primeros Auxilios, resuelve su efecto contra el mismo objetivo 3 veces.'
      },
      specialty: {
        name: 'Especialidad: Piel de piedra',
        cards: [
          { level: 1, name: 'Piel de piedra I', effect: 'Instantáneo: La unidad seleccionada gana +1 Defensa y +1 Defensa adicional si está adyacente al atacante.' },
          { level: 4, name: 'Piel de piedra IV', effect: 'Activación: Todas tus unidades ganan una ficha de defensa.' },
          { level: 6, name: 'Piel de piedra VI', effect: 'Continuo: Para este combate, tus fichas de defensa proporcionan la Defensa extra en una tirada de <<0>> o <<1>>. Cuando se juega esta carta, coloca una ficha de defensa en todas tus unidades.' }
        ]
      },
      lore: 'Una bruja compasiva y mística del pantano, experta en hechizos protectores de la tierra y en el cuidado de los heridos en combate.'
    },
    {
      name: 'Tarnum',
      type: 'Poder',
      className: 'Señor de las Bestias (Beastmaster)',
      stats: { atk: 1, def: 3, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Armero (Armorer)',
        normal: 'Tus unidades aliadas de nivel bronce reducen en 1 todo daño físico recibido.',
        expert: 'Tus unidades aliadas de nivel bronce y plata reducen en 1 todo daño físico recibido.'
      },
      specialty: {
        name: 'Especialidad: Basiliscos',
        cards: [
          { level: 1, name: 'Basiliscos I', effect: 'Instantáneo: La unidad seleccionada gana +1 de Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de Basiliscos.' },
          { level: 4, name: 'Basiliscos IV', effect: 'Continuo: Para este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Basiliscos.' },
          { level: 6, name: 'Basiliscos VI', effect: 'Instantáneo: La unidad seleccionada usa su habilidad especial independientemente del resultado requerido de la tirada.\n— O —\nInstantáneo: La unidad seleccionada gana +2 Ataque.' }
        ]
      },
      lore: 'En su encarnación como Señor de las Bestias, Tarnum lideró a los oprimidos de Mudland para conquistar su libertad en las ciénagas.'
    },
    {
      name: 'Tazar',
      type: 'Poder',
      className: 'Señor de las Bestias (Beastmaster)',
      stats: { atk: 1, def: 4, power: 1, knowledge: 0 },
      initialSkill: {
        name: 'Armero (Armorer)',
        normal: 'Tus unidades aliadas de nivel bronce reducen en 1 todo daño físico recibido.',
        expert: 'Tus unidades aliadas de nivel bronce y plata reducen en 1 todo daño físico recibido.'
      },
      specialty: {
        name: 'Especialidad: Héroe de Guerra',
        cards: [
          { level: 1, name: 'Defensa Absoluta I', effect: 'Toda unidad aliada obtiene +1 de Defensa física mientras defienda una posición.' },
          { level: 4, name: 'Defensa Absoluta IV', effect: 'Reduce todo daño de combate recibido por tus unidades aliadas en un 50% en la primera ronda.' },
          { level: 6, name: 'Defensa Absoluta VI', effect: 'Una vez por combate, puedes declarar una ronda de inmunidad total al daño físico para una de tus unidades aliadas de nivel plata u oro.' }
        ]
      },
      lore: 'Un veterano y taciturno estratega de Tatalia, célebre por su capacidad de defensa inexpugnable, considerado un auténtico héroe de guerra.',
      quote: 'Que vengan con todo lo que tengan. El pantano de Tatalia devorará sus filas.'
    },
    {
      name: 'Wystan',
      type: 'Poder',
      className: 'Señor de las Bestias (Beastmaster)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Tiro con Arco (Archery)',
        normal: 'Continuo: Durante esta ronda de combate, tus unidades a distancia obtienen +1 Ataque si el objetivo es una unidad no adyacente .Tus unidades aliadas de ataque a distancia infligen +1 de daño físico.',
        expert: 'Continuo: Hasta el final de la siguiente ronda de combate, tus unidades de ataque a distancia obtienen +1 de Iniciativa y +1 Ataque si el objetivo es una unidad no adyacente.'
      },
      specialty: {
        name: 'Especialidad: Hombres Lagarto',
        cards: [
          { level: 1, name: 'Arco del Pantano I', effect: 'Tus Guerreros Lagarto obtienen +1 de Ataque a distancia y +1 de Iniciativa.' },
          { level: 4, name: 'Arco del Pantano IV', effect: 'Los disparos de tus Guerreros Lagarto aplican Veneno (pierden 1 HP por turno al inicio de cada ronda táctica).' },
          { level: 6, name: 'Arco del Pantano VI', effect: 'Una vez por combate, tus Guerreros Lagarto pueden disparar a todos los enemigos adyacentes a un obstáculo con daño completo.' }
        ]
      },
      lore: 'Un sigiloso oficial de la Fortaleza que comanda a los mejores batallones de arqueros lagarto de las marismas.'
    }
  ],
  confluencia: [
    {
      name: 'Ciele',
      type: 'Magia',
      className: 'Conjuradora (Elementalist)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Magia de Agua (Water Magic)',
        normal: 'Tus hechizos de la escuela de Agua cuestan 1 punto menos de Maná (mínimo 1).',
        expert: 'Tus hechizos de Agua cuestan 1 punto menos y curan +1 de HP o infligen +1 de daño adicional.'
      },
      specialty: {
        name: 'Especialidad: Flecha mágica',
        cards: [
          { level: 1, name: 'Flecha mágica I', effect: 'Instantáneo: Toma un hechizo de Flecha mágica de tu pila de descarte y llévalo a la mano.\n— O —\nInstantáneo: +1 Potencia.' },
          { level: 4, name: 'Flecha mágica IV', effect: 'Instantáneo: Toma un hechizo de Flecha mágica de tu pila de descarte y lánzalo. Este hechizo no cuenta para tu límite de hechizos por ronda de combate.\n— O —\nInstantáneo: +1 Potencia.' },
          { level: 6, name: 'Flecha mágica VI', effect: 'Instantáneo: La unidad seleccionada sufre 2 Heridas.\n— O —\nInstantáneo: +2 Potencia.' }
        ]
      },
      lore: 'Una elfa mística que sintonizó su espíritu con la pureza y fluidez de las corrientes de agua elementales.'
    },
    {
      name: 'Erdamon',
      type: 'Poder',
      className: 'Viajero (Planeswalker)',
      stats: { atk: 1, def: 3, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Finanzas (States)',
        normal: 'Instantáneo: Gana 3 de Oro.',
        expert: 'Instantáneo: Gana 6 de Oro.'
      },
      specialty: {
        name: 'Especialidad: Elementales de magma',
        cards: [
          { level: 1, name: 'Elementales de magma I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de Elementales de magma.' },
          { level: 4, name: 'Elementales de magma IV', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Elementales de magma.' },
          { level: 6, name: 'Elementales de magma VI', effect: 'Instantáneo: La unidad seleccionada gana +2 Ataque.\n— O —\nContinuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 3.' }
        ]
      },
      lore: 'Un viajero rústico de constitución mineral que lidera a los seres de tierra y magma del plano elemental de Confluencia.'
    },
    {
      name: 'Luna',
      type: 'Magia',
      className: 'Conjuradora (Elementalist)',
      stats: { atk: 1, def: 1, power: 3, knowledge: 1 },
      initialSkill: {
        name: 'Magia de Fuego (Fire Magic)',
        normal: 'Tus hechizos de la escuela de Fuego infligen +1 de daño místico y aplican quemaduras.',
        expert: 'Tus hechizos de Fuego cuestan 1 punto menos de Maná y aumentan su área de efecto táctico.'
      },
      specialty: {
        name: 'Especialidad: Muro de Fuego',
        cards: [
          { level: 1, name: 'Muro de Fuego I', effect: 'Continuo: Para este Combate, coloca esta carta o una ficha de muro de fuego en un espacio vacío del tablero de combate. Aplica 1 Herida a cualquier unidad que comience su turno aquí o que se detenga aquí, y a cualquier unidad melé o a distancia que lo atraviese.' },
          { level: 4, name: 'Muro de Fuego IV', effect: 'Instantáneo: Toma una carta de tu pila de descarte y llévatela a la mano.\n— O —\nInstantáneo: +2 Potencia.' },
          { level: 6, name: 'Muro de Fuego VI', effect: 'Continuo: Para este Combate, coloca esta carta o una ficha de muro de fuego en un espacio vacío del tablero de combate. Aplica 3 Heridas a cualquier unidad que comience su turno aquí o que se detenga aquí, y a cualquier unidad melé o a distancia que lo atraviese.' }
        ]
      },
      lore: 'Una temperamental hechicera que domina las esferas ígneas y los muros incandescentes de Confluencia.'
    },
    {
      name: 'Monere',
      type: 'Poder',
      className: 'Viajero (Planeswalker)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Logística (Logistics)',
        normal: 'Continuo: Al final de tu turno, mueve la miniatura de tu Héroe a un lugar vacío adyacente.',
        expert: 'Instantáneo: Tu héroe gana +1 Punto de Movimiento.'
      },
      specialty: {
        name: 'Especialidad: Elementales mágicos',
        cards: [
          { level: 1, name: 'Elementales mágicos I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de Elementales mágicos.' },
          { level: 4, name: 'Elementales mágicos IV', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Elementales mágicos.' },
          { level: 6, name: 'Elementales mágicos VI', effect: 'Instantáneo: La unidad seleccionada gana +2 Ataque.\n— O —\nInstantáneo: +2 Potencia.' }
        ]
      },
      lore: 'Un enigmático explorador planar que viaja a través de los vórtices de energía elemental de Confluencia.'
    },
    {
      name: 'Pasis',
      type: 'Poder',
      className: 'Viajero (Planeswalker)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Artillería (Artillery)',
        normal: 'Instantáneo: Inflige 1 Herida a la unidad enemiga con menor Iniciativa.',
        expert: 'Instantáneo: Al usar la carta Ballesta, resuelve su efecto contra el mismo objetivo 3 veces.'
      },
      specialty: {
        name: 'Especialidad: Elementales',
        cards: [
          { level: 1, name: 'Elementales I', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Elementales.' },
          { level: 4, name: 'Elementales IV', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de Elementales.' },
          { level: 6, name: 'Elementales VI', effect: 'Continuo: Para este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Elementales.' }
        ]
      },
      lore: 'Una decidida viajera que lidera a los seres psíquicos de Confluencia mediante proyecciones de su propia mente.'
    },
    {
      name: 'Tarnum',
      type: 'Magia',
      className: 'Conjurador (Elementalist)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Sabiduría (Wisdom)',
        normal: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(3) en lugar de Buscar(2).',
        expert: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(4) en lugar de Buscar(3).'
      },
      specialty: {
        name: 'Especialidad: Encantadores',
        cards: [
          { level: 1, name: 'Encantadores I', effect: 'Instantáneo: Busca(1) Hechizo. Puedes retirar esta carta en lugar de llevártela a la mano.' },
          { level: 4, name: 'Encantadores IV', effect: 'Mapa: Paga 10 Oros. Luego busca la carta de Encantadores en el mazo de unidades neutrales Oro y añádela a tu mazo de unidades. Solo puedes controlar 1 unidad de Encantadores a la vez.\n— O —\nInstantáneo: Roba 1 carta.' },
          { level: 6, name: 'Encantadores VI', effect: 'Instantáneo: Busca(1) Hechizo dos veces. Si su tipo lo permite y tienes suficiente Potencia disponible, puedes lanzar inmediatamente uno de estos hechizos o ambos, incluso si ya lanzaste un hechizo en esta ronda.\nColoca cada hechizo que uses de esta manera en la parte superior del mazo de hechizos o en su pila de descarte en cualquier orden.' }
        ]
      },
      lore: 'En su encarnación como Elementalista, Tarnum buscó el dominio de las fuerzas arcanas de los planos para guiar a los Enchanters y redimir sus antiguas faltas.'
    }
  ],
  cove: [
    {
      name: 'Astra',
      type: 'Magia',
      className: 'Navegante (Navigator)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Suerte (Luck)',
        normal: 'Continuo: Puedes volver a tirar un dado de Tesoro y un dado de Recursos una vez durante este turno.',
        expert: 'Continuo: Puedes volver a tirar cualquier dado una vez durante este turno.'
      },
      specialty: {
        name: 'Especialidad: Curación',
        cards: [
          { level: 1, name: 'Curación I', effect: 'Instantáneo: Retira cualquier efecto o Parálisis de la unidad seleccionada y después roba 1 carta.' },
          { level: 4, name: 'Curación IV', effect: 'Instantáneo: Retira cualquier efecto o Parálisis, así como hasta 2 Heridas de la unidad seleccionada.' },
          { level: 6, name: 'Curación VI', effect: 'Instantáneo: Retira hasta 3 Heridas de la unidad seleccionada.' }
        ]
      },
      lore: 'Una navegante que canaliza el rocío sagrado del océano para bendecir y sanar a sus guerreros en plena tormenta.'
    },
    {
      name: 'Casmetra',
      type: 'Magia',
      className: 'Navegante (Navigator)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Sabiduría (Wisdom)',
        normal: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(3) en lugar de Buscar(2).',
        expert: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(4) en lugar de Buscar(3).'
      },
      specialty: {
        name: 'Especialidad: Hechiceras',
        cards: [
          { level: 1, name: 'Canto de Sirena I', effect: 'Tus Hechiceras obtienen +1 de Ataque y +1 de Iniciativa.' },
          { level: 4, name: 'Canto de Sirena IV', effect: 'Tus Hechiceras reducen la defensa mística de sus objetivos en 1 al atacar.' },
          { level: 6, name: 'Canto de Sirena VI', effect: 'Una vez por combate, tus Hechiceras pueden aturdir a una unidad enemiga de nivel bronce o plata mediante su ataque mágico.' }
        ]
      },
      lore: 'Una de las navegantes más respetadas, experta en coordinar a las hechiceras de Regnan para debilitar la mente del enemigo.'
    },
    {
      name: 'Cassiopeia',
      type: 'Poder',
      className: 'Capitán (Captain)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Táctica (Tactics)',
        normal: 'Permite recolocar 1 de tus unidades en tu zona de inicio del combate antes de que empiece la primera ronda.',
        expert: 'Gasta 1 Corona para recolocar hasta 3 unidades de inicio y sumarles +1 a la Iniciativa durante la primera ronda.'
      },
      specialty: {
        name: 'Especialidad: Oceánidas',
        cards: [
          { level: 1, name: 'Llamado del Océano I', effect: 'Tus Oceánidas obtienen +1 de Ataque y +1 de Iniciativa.' },
          { level: 4, name: 'Llamado del Océano IV', effect: 'Tus Oceánidas ganan +1 de Defensa y sus ataques cuerpo a cuerpo ignoran las represalias enemigas.' },
          { level: 6, name: 'Llamado del Océano VI', effect: 'Una vez por combate, tus Oceánidas pueden realizar una carga rápida de movimiento libre que duplica su daño físico en esta ronda.' }
        ]
      },
      lore: 'Una intrépida capitana pirata que cabalga las olas junto a las veloces ninfas oceánidas, liderando asaltos coordinados en la costa.'
    },
    {
      name: 'Jeremy',
      type: 'Poder',
      className: 'Capitán (Captain)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Ofensiva (Offense)',
        normal: 'Instantáneo: +1 Ataque\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Cañón',
        cards: [
          { level: 1, name: 'Puntería de Cañón I', effect: 'Tu Cañón de asalto aliado inflige +1 de daño de asedio y tiene precisión perfecta.' },
          { level: 4, name: 'Puntería de Cañón IV', effect: 'Tu Cañón puede disparar una segunda vez en la ronda si se descarta 1 carta de Ataque.' },
          { level: 6, name: 'Puntería de Cañón VI', effect: 'Una vez por combate, el Cañón realiza un disparo explosivo que causa 2 de daño físico a la unidad seleccionada y a todos sus adyacentes.' }
        ]
      },
      lore: 'Un artillero legendario de la armada pirata que confía plenamente en la pólvora y el retumbar de los cañones pesados de Regnan.'
    },
    {
      name: 'Miriam',
      type: 'Poder',
      className: 'Capitán (Captain)',
      stats: { atk: 2, def: 1, power: 1, knowledge: 2 },
      initialSkill: {
        name: 'Logística (Logistics)',
        normal: 'Continuo: Al final de tu turno, mueve la miniatura de tu Héroe a un lugar vacío adyacente.',
        expert: 'Instantáneo: Tu héroe gana +1 Punto de Movimiento.'
      },
      specialty: {
        name: 'Especialidad: Exploración',
        cards: [
          { level: 1, name: 'Exploración I', effect: 'Instantáneo: Retira 1 carta de habilidad de tu mano para Buscar(2) en el mazo de habilidades. A continuación, puedes retirar esta carta de especialidad.' },
          { level: 4, name: 'Exploración IV', effect: 'Instantáneo: Retira 1 carta de habilidad, artefacto o hechizo de tu mano para Buscar(2) en el mazo correspondiente. A continuación, puedes retirar esta carta de especialidad.' },
          { level: 6, name: 'Exploración VI', effect: 'Instantáneo: Retira 1 carta de habilidad, artefacto o hechizo de tu mano para Buscar(4) en el mazo correspondiente. A continuación, puedes retirar esta carta de especialidad.' }
        ]
      },
      lore: 'Una astuta exploradora marina encargada del reconocimiento cartográfico de costas y del contrabando en Bahía.'
    },
    {
      name: 'Zilare',
      type: 'Magia',
      className: 'Navegante (Navigator)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Interferencia (Interference)',
        normal: 'Reduce el poder mágico del héroe rival en 1 cuando lanza un hechizo en tu presencia.',
        expert: 'Reduce el poder mágico del héroe rival en 2. Además, gasta 1 Corona para anular el daño místico extra de un hechizo enemigo.'
      },
      specialty: {
        name: 'Especialidad: Olvido',
        cards: [
          { level: 1, name: 'Niebla Mental I', effect: 'Comienzas con el hechizo "Olvido" memorizado de forma gratuita. Reduce el rango de ataque de 1 arquero en -1.' },
          { level: 4, name: 'Niebla Mental IV', effect: 'Tu hechizo "Olvido" afecta a todos los arqueros enemigos en el tablero, impidiéndoles disparar a distancia por 1 ronda.' },
          { level: 6, name: 'Niebla Mental VI', effect: 'Una vez por combate, puedes silenciar completamente las habilidades especiales de 1 unidad enemiga de plata u oro durante 2 rondas.' }
        ]
      },
      lore: 'Un enigmático navegante que conoce los secretos del hipnotismo de las profundidades, sumiendo la mente de los arqueros rivales en el olvido.'
    }
  ]
};

export const FACTION_THEMES: {
  [factionId: string]: {
    primary: string;
    border: string;
    text: string;
    glow: string;
    bgGradient: string;
    badge: string;
    accent: string;
  };
} = {
  castillo: {
    primary: 'from-blue-900 to-slate-950',
    border: 'border-blue-700/85',
    text: 'text-blue-300',
    glow: 'shadow-blue-500/20',
    bgGradient: 'radial-gradient(circle at top, #1e3a8a 0%, #020617 100%)',
    badge: 'bg-blue-950/80 border-blue-900 text-blue-300',
    accent: 'bg-blue-500 text-white'
  },
  necropolis: {
    primary: 'from-stone-900 to-slate-950',
    border: 'border-slate-800',
    text: 'text-amber-200',
    glow: 'shadow-purple-500/10',
    bgGradient: 'radial-gradient(circle at top, #1c1917 0%, #0c0a09 100%)',
    badge: 'bg-stone-950/80 border-stone-800 text-amber-200',
    accent: 'bg-stone-700 text-amber-200'
  },
  mazmorra: {
    primary: 'from-purple-900 to-slate-950',
    border: 'border-purple-800/85',
    text: 'text-purple-350',
    glow: 'shadow-purple-500/20',
    bgGradient: 'radial-gradient(circle at top, #3b0764 0%, #03001c 100%)',
    badge: 'bg-purple-950/80 border-purple-900 text-purple-300',
    accent: 'bg-purple-600 text-white'
  },
  rampart: {
    primary: 'from-emerald-900 to-stone-950',
    border: 'border-emerald-800/85',
    text: 'text-emerald-350',
    glow: 'shadow-emerald-500/20',
    bgGradient: 'radial-gradient(circle at top, #022c22 0%, #0c0a09 100%)',
    badge: 'bg-emerald-950/80 border-emerald-900 text-emerald-300',
    accent: 'bg-emerald-600 text-white'
  },
  torre: {
    primary: 'from-cyan-900 to-slate-950',
    border: 'border-cyan-800/85',
    text: 'text-cyan-330',
    glow: 'shadow-cyan-500/20',
    bgGradient: 'radial-gradient(circle at top, #083344 0%, #020617 100%)',
    badge: 'bg-cyan-950/80 border-cyan-900 text-cyan-300',
    accent: 'bg-cyan-500 text-white'
  },
  infierno: {
    primary: 'from-red-950 to-stone-950',
    border: 'border-red-900/85',
    text: 'text-red-400',
    glow: 'shadow-red-500/20',
    bgGradient: 'radial-gradient(circle at top, #450a0a 0%, #0c0a09 100%)',
    badge: 'bg-red-950/80 border-red-900 text-red-400',
    accent: 'bg-red-600 text-white'
  },
  stronghold: {
    primary: 'from-amber-900 to-orange-950',
    border: 'border-amber-800/75',
    text: 'text-amber-400',
    glow: 'shadow-amber-500/20',
    bgGradient: 'radial-gradient(circle at top, #451a03 0%, #0c0a09 100%)',
    badge: 'bg-amber-950/80 border-amber-900 text-amber-400',
    accent: 'bg-amber-600 text-white'
  },
  fortaleza: {
    primary: 'from-teal-900 to-emerald-950',
    border: 'border-teal-850',
    text: 'text-teal-300',
    glow: 'shadow-teal-500/20',
    bgGradient: 'radial-gradient(circle at top, #0f4c46 0%, #021a17 100%)',
    badge: 'bg-teal-950/80 border-teal-900 text-teal-300',
    accent: 'bg-teal-600 text-white'
  },
  confluencia: {
    primary: 'from-indigo-900 to-violet-950',
    border: 'border-indigo-850',
    text: 'text-indigo-300',
    glow: 'shadow-indigo-500/25',
    bgGradient: 'radial-gradient(circle at top, #1e1b4b 0%, #020617 100%)',
    badge: 'bg-indigo-950/80 border-indigo-900 text-indigo-300',
    accent: 'bg-indigo-600 text-white'
  },
  cove: {
    primary: 'from-sky-900 to-slate-950',
    border: 'border-sky-850',
    text: 'text-sky-300',
    glow: 'shadow-sky-500/20',
    bgGradient: 'radial-gradient(circle at top, #075985 0%, #020617 100%)',
    badge: 'bg-sky-950/80 border-sky-900 text-sky-300',
    accent: 'bg-sky-500 text-white'
  }
};
