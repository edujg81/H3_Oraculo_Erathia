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
      className: 'Caballera',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Liderazgo',
        normal: 'Instantáneo: Gana una ficha de Moral Positiva.',
        expert: 'Instantáneo: Roba 2 cartas.\nDespués, gana una ficha de Moral Positiva.'
      },
      specialty: {
        name: 'Especialidad: Cruzados',
        cards: [
          { level: 1, name: 'Cruzados I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de cruzados.' },
          { level: 4, name: 'Cruzados IV', effect: 'Contínuo: Durante este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de cruzados.' },
          { level: 6, name: 'Cruzados VI', effect: 'Contínuo: Durante este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de cruzados.' }
        ]
      },
      lore: 'La legítima soberana de Erathia, esposa del Rey Roland de Enroth, líder militar formidable que regresó a su tierra natal para expulsar a los invasores de Nighon y Eeofol tras la muerte de su padre.',
      quote: '¡Por Erathia y por la corona! No daremos ni un paso atrás frente a las huestes de la oscuridad.'
    },
    {
      name: 'Adelaide',
      type: 'Magia',
      className: 'Clériga',
      stats: { atk: 1, def: 0, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Sabiduría',
        normal: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(3) en vez de buscar(2).',
        expert: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(4) en vez de buscar(2).'
      },
      specialty: {
        name: 'Especialidad: Anillo gélido',
        cards: [
          { level: 1, name: 'Anillo gélido I', effect: 'Instantáneo: Descarta 1 carta. Elige como objetivo un espacio en el tablero de combate. Todas las unidades adyacentes a este espacio sufren 1 Herida.' },
          { level: 4, name: 'Anillo gélido IV', effect: 'Instantáneo: Selecciona 1 carta de hechizo o especialidad de tu descarte y devuélvela a tu mano.' },
          { level: 6, name: 'Anillo gélido VI', effect: 'Instantáneo: Descarta 2 cartas. Elige como objetivo un espacio en el tablero de combate. Todas las unidades adyacentes a este espacio sufren 2 Heridas.' }
        ]
      },
      lore: 'Una clérigo sumamente compasiva bendecida con un carisma celestial que calma incluso las voluntades más belicosas y propaga la armonía mística.',
      quote: 'La verdadera fuerza no reside en golpear con saña, sino en purificar el corazón de quienes combaten.'
    },
    {
      name: 'Valeska',
      type: 'Poder',
      className: 'Caballero',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Tiro con arco',
        normal: 'Continuo: Durante esta ronda de combate, tus unidades a distancia ganan +1 Ataque si el objetivo no es una unidad adyacente.',
        expert: 'Continuo: Hasta el final de la siguiente ronda de combate, todas tus unidades a distancia ganan +1 Iniciativa y +1 Ataque si el objetivo no es una unidad adyacente.'
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
      className: 'Clérigo',
      stats: { atk: 1, def: 0, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Misticismo',
        normal: 'Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En vez de descartar la carta de hechizo, devuélvela a tu mano.',
        expert: 'Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En vez de descartar la carta de Hechizo y el resto de las cartas que juegues con ella, devuélvelas a tu mano.'
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
      className: 'Clérigo',
      stats: { atk: 1, def: 0, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Sabiduría',
        normal: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(3) en vez de buscar(2).',
        expert: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(4) en vez de buscar(2).'
      },
      specialty: {
        name: 'Especialidad: Médico de campaña',
        cards: [
          { level: 1, name: 'Médico de campaña I', effect: 'Instantáneo: Retira 1 Herida de una de tus unidades y después roba 1 carta.' },
          { level: 4, name: 'Médico de campaña IV', effect: 'Instantáneo: Retira 1 Herida o Parálisis de una de tus unidades y después roba 1 carta.' },
          { level: 6, name: 'Médico de campaña VI', effect: 'Instantáneo: Retira hasta 2 Heridas o Parálisis de una de tus unidades y después roba 2 cartas y descarta 1 carta de tu mano.' }
        ]
      },
      lore: 'Un clérigo sabio experto en el tratamiento de heridas en plena batalla y en la gestión de tiendas de campaña médicas, logrando sanar heridas fatales y levantar regimientos caídos.',
      quote: 'Ningún soldado de Erathia caerá mientras yo tenga aliento para invocar la luz de la sanación.'
    },
    {
      name: 'Lord Haart',
      type: 'Poder',
      className: 'Caballero',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Patrimonio',
        normal: 'Instantáneo: Gana 3 Oros.',
        expert: 'Instantáneo: Gana 6 Oros.'
      },
      specialty: {
        name: 'Especialidad: Patrimonio',
        cards: [
          { level: 1, name: 'Patrimonio I', effect: 'Instantáneo: Gana 2 Oros.' },
          { level: 4, name: 'Patrimonio IV', effect: 'Instantáneo: Gana 3 Oros.' },
          { level: 6, name: 'Patrimonio VI', effect: 'Instantáneo: Gana 5 Oros.' }
        ]
      },
      lore: 'Un caballero noble de gran abolengo célebre por su pericia en la administración y finanzas feudales, así como por su letal maestría táctica en campaña militar.',
      quote: 'Una campaña se gana tanto con una contabilidad impecable en el campamento como con un acero afilado en el campo de batalla.'
    },
    {
      name: 'Tarnum',
      type: 'Poder',
      className: 'Caballero',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Artillería',
        normal: 'Instantáneo: Inflige 1 Herida a la unidad enemiga con menor Iniciativa.',
        expert: 'Instantáneo: Al utilizar la carta Balista, resuelve su efecto 3 veces contra el mismo objetivo.'
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
      className: 'Caballero de la muerte',
      stats: { atk: 1, def: 2, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Nigromancia',
        normal: 'Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Refuerza una de tus unidades Bronce o Plata por la mitad del coste en Oro (redondeado hacia abajo).',
        expert: 'Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Refuerza cualquiera de tus unidades por la mitad del coste en Oro (redondeado hacia abajo).'
      },
      specialty: {
        name: 'Especialidad: Caballeros del terror',
        cards: [
          { level: 1, name: 'Caballeros del terror I', effect: 'Instantáneo: Reduce en 1 el Daño de los contraataques del enemigo.\nEl efecto se duplica para la unidad de caballeros del terror.' },
          { level: 4, name: 'Caballeros del terror IV', effect: 'Continuo: Durante este combate, cuando una unidad enemiga contraataque a esta unidad, lanza 2 dados de ataque y resuelve el resultado más bajo.' },
          { level: 6, name: 'Caballeros del terror VI', effect: 'Instantáneo: Reduce en 2 el Daño de los contraataque del enemigo.\nEl efecto se duplica para la unidad de caballeros del terror.' }
        ]
      },
      lore: 'El otrora noble caballero de Erathia que fue asesinado y alzado de entre los muertos como un temible oficial no-muerto al servicio de Deyja, comandando con frialdad a los jinetes espectrales.',
      quote: 'Mi espada una vez sirvió a la vida, pero en la inmortalidad del sepulcro he encontrado un propósito mucho más absoluto.'
    },
    {
      name: 'Moandor',
      type: 'Poder',
      className: 'Caballero de la Muerte',
      stats: { atk: 1, def: 2, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Nigromancia',
        normal: 'Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Refuerza una de tus unidades Bronce o Plata por la mitad del coste en Oro (redondeado hacia abajo).',
        expert: 'Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Refuerza cualquiera de tus unidades por la mitad del coste en Oro (redondeado hacia abajo).'
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
      className: 'Nigromante',
      stats: { atk: 1, def: 0, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Hechicería',
        normal: 'Instantáneo: +1 Potencia\nDespués, roba 1 carta.',
        expert: 'Instantáneo: +2 Potencia\nDespués, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Capa del rey no muerto',
        cards: [
          { level: 1, name: 'Capa del rey no muerto I', effect: 'Coloca esta carta sobre la manada de esqueletos para sustituir sus características. Cuando los Puntos de Salud de la Capa del rey no muerto alcancen 0, descártala.\n- Horda de Esqueletos -\nAT: 3 - DF: 1 - PS: 2 - INI: 6' },
          { level: 4, name: 'Capa del rey no muerto IV', effect: 'Coloca esta carta sobre la manada de zombis para sustituir sus características. Cuando los Puntos de Salud de la Capa del rey no muerto alcancen 0, descártala.\n- Horda de Zombis -\nAT: 4 - DF: 1 - PS: 3 - INI: 5' },
          { level: 6, name: 'Capa del rey no muerto VI', effect: 'Coloca esta carta sobre los esqueletos para sustituir sus características. Cuando los Puntos de Salud de la Capa del rey no muerto alcancen 0, descártala.\n- Legión de Esqueletos -\nAT: 4 - DF: 1 - PS: 2 - INI: 6' }
        ]
      },
      lore: 'El nigromante más astuto y manipulador de Antagarich, quien mediante engaños logró reunir las piezas de la Capa del Rey No Muerto para someter continentes enteros bajo su yugo marchito.',
      quote: 'La muerte no es el final de vuestra servidumbre... es simplemente el inicio de vuestra lealtad eterna hacia mí.'
    },
    {
      name: 'Septienna',
      type: 'Magia',
      className: 'Nigromante',
      stats: { atk: 1, def: 0, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Nigromancia',
        normal: 'Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Refuerza una de tus unidades Bronce o Plata por la mitad del coste en Oro (redondeado hacia abajo).',
        expert: 'Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Refuerza cualquiera de tus unidades por la mitad del coste en Oro (redondeado hacia abajo).'
      },
      specialty: {
        name: 'Especialidad: Onda de muerte',
        cards: [
          { level: 1, name: 'Onda de muerte I', effect: 'Activación: Las unidades Bronce enemigas sufren 1 Herida.\n— O —\nInstantáneo: +1 Potencia' },
          { level: 4, name: 'Onda de muerte IV', effect: 'Activación: Las unidades Plata enemigas sufren 1 Herida.\n— O —\nInstantáneo: +1 Potencia' },
          { level: 6, name: 'Onda de muerte VI', effect: 'Activación: Las unidades Oro y Azul enemigas sufren 2 Heridas.\n— O —\nInstantáneo: +2 Potencia' }
        ]
      },
      lore: 'Una nigromante implacable experta en canalizar la energía de la muerte directamente desde las almas de sus oponentes, marchitando regimientos enteros con su onda espectral.',
      quote: 'Vuestro aliento vital no se perderá; simplemente alimentará el resurgir de mi imperio eterno.'
    },
    {
      name: 'Tamika',
      type: 'Poder',
      className: 'Caballera de la muerte',
      stats: { atk: 1, def: 2, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Ofensa',
        normal: 'Instantáneo: +1 Ataque\nDespués, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nDespués, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Caballeros del terror',
        cards: [
          { level: 1, name: 'Caballeros del terror I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de caballeros del terror.' },
          { level: 4, name: 'Caballeros del terror IV', effect: 'Continuo: Durante este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de caballeros del terror.' },
          { level: 6, name: 'Caballeros del terror VI', effect: 'Continuo: Durante este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de caballeros del terror.' }
        ]
      },
      lore: 'Una letal general de Deyja que adiestra a los jinetes negros con una disciplina sanguinaria, convirtiéndolos en la vanguardia más temida de las tierras baldías.',
      quote: 'El miedo es un veneno lento, pero los cascos de mis caballeros negros son rápidos y letales.'
    },
    {
      name: 'Vidomina',
      type: 'Magia',
      className: 'Nigromante',
      stats: { atk: 1, def: 0, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Nigromancia',
        normal: 'Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Refuerza una de tus unidades Bronce o Plata por la mitad del coste en Oro (redondeado hacia abajo).',
        expert: 'Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Refuerza cualquiera de tus unidades por la mitad del coste en Oro (redondeado hacia abajo).'
      },
      specialty: {
        name: 'Especialidad: Nigromancia',
        cards: [
          { level: 1, name: 'Nigromancia I', effect: 'Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Puedes reforzar una unidad Bronce o Plata de tu elección por la mitad del coste en Oro (redondeado hacia abajo).' },
          { level: 4, name: 'Nigromancia IV', effect: 'Instantáneo: Pon esta carta en la carta de la manada de esqueletos para sustituir sus características. Guarda la carta hasta que los Puntos de Salud lleguen a 0, y después descártala.\n- Horda de Esqueletos -\nAT: 3 - DF: 1 - PS: 2 - INI: 6' },
          { level: 6, name: 'Nigromancia VI', effect: 'Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Puedes reforzar cualquier unidad por la mitad del coste en Oro (redondeado hacia abajo).' }
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
      className: 'Brujo',
      stats: { atk: 0, def: 0, power: 3, knowledge: 2 },
      initialSkill: {
        name: 'Sabiduría',
        normal: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(3) en vez de buscar(2).',
        expert: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(4) en vez de buscar(2).'
      },
      specialty: {
        name: 'Especialidad: Resurrección',
        cards: [
          { level: 1, name: 'Resurrección I', effect: 'Instantáneo: Cancela un ataque que vaya a reducir los Puntos de Salud de tu unidad * a 0.\n· Potencia 1 - * Bronce\n· Potencia 2 - * Plata\n· Potencia 4 - * Oro' },
          { level: 4, name: 'Resurrección IV', effect: 'Instantáneo: Cancela un ataque que vaya a reducir los Puntos de Salud de tu unidad * a 0.\n· Potencia 0 - * Bronce\n· Potencia 1 - * Plata\n· Potencia 3 - * Oro' },
          { level: 6, name: 'Resurrección VI', effect: 'Instantáneo: Cancela un ataque que vaya a reducir los Puntos de Salud de tu unidad * a 0.\n· Potencia 0 - * Bronce\n· Potencia 0 - * Plata\n· Potencia 2 - * Oro' }
        ]
      },
      lore: 'Un erudito brujo de Nighon que dedicó décadas al estudio de la restauración celular y la retención del alma en los cuerpos. Cree firmemente que la magia de resurrección no es un milagro divino, sino una ciencia de precisión arcana que doblega las leyes de la muerte.',
      quote: 'La muerte no es más que una interrupción temporal en el gran diseño de la victoria.'
    },
    {
      name: 'Deemer',
      type: 'Magia',
      className: 'Brujo',
      stats: { atk: 0, def: 0, power: 3, knowledge: 2 },
      initialSkill: {
        name: 'Exploración',
        normal: 'Instantáneo: Juega esta carta cuando vayas a buscar para buscar(3).',
        expert: 'Instantáneo: Juega esta carta cuando vayas a buscar para buscar(5).'
      },
      specialty: {
        name: 'Especialidad: Lluvia de meteoros',
        cards: [
          { level: 1, name: 'Lluvia de meteoros I', effect: 'Instantáneo: Selecciona una unidad y una unidad adyacente a ella. Inflige * a ambas unidades.\n· Potencia 0 - 1 Herida\n· Potencia 2 - 2 Heridas\n· Potencia 4 - 3 Heridas' },
          { level: 4, name: 'Lluvia de meteoros IV', effect: 'Instantáneo: +1 Potencia\n— O —\nInstantáneo: Baraja tu descartes con el resto de tu mazo y roba 1 carta.' },
          { level: 6, name: 'Lluvia de meteoros VI', effect: 'Instantáneo: Selecciona una unidad y 2 unidades adyacentes a ella. Inflige * a todas las unidades seleccionadas.\n· Potencia 0 - 1 Herida\n· Potencia 2 - 2 Heridas\n· Potencia 4 - 3 Heridas' }
        ]
      },
      lore: 'Un perturbado pero brillante brujo de mente inestable obsesionado con la piromancia y la caída de bólidos celestes. Es temido tanto por sus enemigos como por sus aliados por su tendencia a invocar lluvias de meteoros devastadoras sin importarle las consecuencias.',
      quote: '¿Habéis visto alguna vez caer una estrella del cielo? Es un espectáculo... abrasador.'
    },
    {
      name: 'Jeddite',
      type: 'Magia',
      className: 'Brujo',
      stats: { atk: 0, def: 0, power: 3, knowledge: 2 },
      initialSkill: {
        name: 'Hechicería',
        normal: 'Instantáneo: +1 Potencia\nDespués, roba 1 carta.',
        expert: 'Instantáneo: +2 Potencia\nDespués, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Brujo misterioso',
        cards: [
          { level: 1, name: 'Brujo misterioso I', effect: 'Instantáneo: Roba hasta 3 cartas de tu mazo y añade a tu mano cualquier carta de hechizo y especialidad. Descarta las cartas restantes.' },
          { level: 4, name: 'Brujo misterioso IV', effect: 'Instantáneo: Cancela un ataque que vaya a reducir los Puntos de Salud de tu unidad * a 0.\n· Potencia 0 - * Unidad Bronce\n· Potencia 1 - * Unidad Plata\n· Potencia 2 - * Unidad Oro' },
          { level: 6, name: 'Brujo misterioso VI', effect: 'Instantáneo: Roba hasta 4 cartas de tu mazo y añade a tu mano cualquier carta de hechizo y especialidad. Descarta las cartas restantes.' }
        ]
      },
      lore: 'Un místico subterráneo originario de Bracada que huyó a las cuevas de Nighon para estudiar las artes arcanas prohibidas de la hechicería de sangre sin las asfixiantes restricciones de los magos de la superficie. Busca desentrañar los secretos más profundos de la manipulación del maná.',
      quote: 'Las restricciones de la superficie solo limitan el verdadero potencial de la magia pura.'
    },
    {
      name: 'Lorelei',
      type: 'Poder',
      className: 'Adalid',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Exploración',
        normal: 'Instantáneo: Juega esta carta cuando vayas a buscar para buscar(3).',
        expert: 'Instantáneo: Juega esta carta cuando vayas a buscar para buscar(5).'
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
      className: 'Adalid',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Táctica',
        normal: 'Instantáneo: Al comienzo del combate, intercambia la posición de 2 de tus unidades.',
        expert: 'Activación: Durante el combate, intercambia la posición de 2 de tus unidades.'
      },
      specialty: {
        name: 'Especialidad: Dragones',
        cards: [
          { level: 1, name: 'Dragones I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl effecto se duplica para la unidad de dragones.' },
          { level: 4, name: 'Dragones IV', effect: 'Continuo: Durante este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de dragones.' },
          { level: 6, name: 'Dragones VI', effect: 'Continuo: Durante este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de dragones.' }
        ]
      },
      lore: 'Consumida por un ansia insaciable de dominación absoluta, Mutare bebió la sangre de un dragón mitológico en un ritual arcano para transformarse en una temible y legendaria señora de dragones, gobernando Nighon con puño de hierro y fuego.',
      quote: 'La sangre de los dragones corre por mis venas. Arrodillaos ante vuestra verdadera reina.'
    },
    {
      name: 'Sephinroth',
      type: 'Magia',
      className: 'Brujo',
      stats: { atk: 0, def: 0, power: 3, knowledge: 2 },
      initialSkill: {
        name: 'Inteligencia',
        normal: 'Instantáneo: Al comienzo de la ronda de combate, juega una carta de hechizo.\nDurante la ronda de combate sigues pudiendo jugar solo una carta de hechizo.',
        expert: 'Instantáneo: Al comienzo de la ronda de combate, juega una carta de hechizo.\nEste hechizo no cuenta para el límite de hechizos por ronda de combate.'
      },
      specialty: {
        name: 'Especialidad: Objetos de valor',
        cards: [
          { level: 1, name: 'Objetos de valor I', effect: 'Mapa: Paga 1 Oro para ganar 1 Objeto de Valor.\n— O —\nInstantáneo: Roba 1 carta.' },
          { level: 4, name: 'Objetos de valor IV', effect: 'Mapa: Gana 1 Objeto de Valor.\n— O —\nInstantáneo: +2 Potencia.' },
          { level: 6, name: 'Objetos de valor VI', effect: 'Mapa: Gana 2 Objetos de Valor.\n— O —\nInstantáneo: Roba 2 cartas.' }
        ]
      },
      lore: 'Una enigmática bruja nacida en la realeza de Bracada que desertó a las profundidades de Nighon. Utiliza sus formidables dotes matemáticas y lógicas para transmutar rocas ordinarias en gemas preciosas y cristales raros, financiando las inmensas campañas bélicas del inframundo.',
      quote: 'Incluso el caos de la guerra sigue una ecuación matemática perfecta que yo ya he resuelto.'
    },
    {
      name: 'Tarnum',
      type: 'Poder',
      className: 'Adalid',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Patrimonio',
        normal: 'Instantáneo: Gana 3 Oros.',
        expert: 'Instantáneo: Gana 6 Oros.'
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
  murallas: [
    {
      name: 'Clancy',
      type: 'Poder',
      className: 'Guardabosques',
      stats: { atk: 1, def: 3, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Orientación',
        normal: 'Mapa: Este turno, tu héroe puede moverse por zonas con unidades neutrales y héroes enemigos, pero, si acaba en una de estas zonas, empezará el combate.',
        expert: 'Mapa: Tu héroe puede atravesar bordes amarillos y zonas bloqueadas, pero no puede acabar su movimiento en ellas.'
      },
      specialty: {
        name: 'Especialidad: Unicornios',
        cards: [
          { level: 1, name: 'Unicornios I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de unicornios.' },
          { level: 4, name: 'Unicornios IV', effect: 'Continuo: Durante este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de unicornios.' },
          { level: 6, name: 'Unicornios VI', effect: 'Continuo: Durante este combate, la unidad seleccionada reduce en 1 cualquier Daño recibido de hechizos (hasta un mínimo de 0).\nEl efecto se duplica para la unidad de unicornios.' }
        ]
      },
      lore: 'Un explorador enano que posee una afinidad mística inigualable con los unicornios de AvLee, liderándolos con presteza y elegancia divina en defensa de los claros sagrados.',
      quote: 'La luz de los unicornios disipará la oscuridad de cualquier invasor que ose profanar el suelo sagrado de AvLee.'
    },
    {
      name: 'Gelu',
      type: 'Poder',
      className: 'Guardabosques',
      stats: { atk: 1, def: 3, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Tiro con arco',
        normal: 'Continuo: Durante esta ronda de combate, tus unidades a distancia ganan +1 Ataque si el objetivo no es una unidad adyacente.',
        expert: 'Continuo: Hasta el final de la siguiente ronda de combate, todas tus unidades a distancia ganan +1 Iniciativa y +1 Ataque si el objetivo no es una unidad adyacente.'
      },
      specialty: {
        name: 'Especialidad: Tiradores certeros',
        cards: [
          { level: 1, name: 'Tiradores certeros I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEDuplica el efecto para los elfos y la unidad de tiradores certeros.' },
          { level: 4, name: 'Tiradores certeros IV', effect: 'Mapa: Si tienes la carta de la manada de elfos, descártala. Busca en el mazo de unidades neutrales Plata una carta Francotiradores y añádela a tu mazo de unidades. Sólo puedes controlar 1 unidad de este tipo.\n— O —\nInstantáneo: Roba una carta.' },
          { level: 6, name: 'Tiradores certeros VI', effect: 'Continuo: Durante este Combate, la Iniciativa de la unidad seleccionada aumenta en 2.\nDuplica el efecto para los elfos y la unidad de tiradores certeros.' }
        ]
      },
      lore: 'Un héroe legendario de sangre mestiza, capitán de la prestigiosa Guardia Forestal de AvLee y custodio designado de la devastadora Espada de Armagedón.',
      quote: 'Nuestras flechas no viajan con el viento, viajan impulsadas por la justicia de los bosques ancestrales.'
    },
    {
      name: 'Gem',
      type: 'Magia',
      className: 'Druida',
      stats: { atk: 0, def: 2, power: 1, knowledge: 2 },
      initialSkill: {
        name: 'Primeros auxilios',
        normal: 'Instantáneo: Retira 1 Herida de una de tus unidades.',
        expert: 'Instantáneo: Cuando utilices la carta Tienda de primeros auxilios, resuelve su efecto 3 veces contra el mismo objetivo.'
      },
      specialty: {
        name: 'Especialidad: Primeros auxilios',
        cards: [
          { level: 1, name: 'Primeros auxilios I', effect: 'Instantáneo: Recibe una carta Tienda de primeros auxilios del mazo de máquinas de guerra gratis.\n— O —\nInstantáneo: Si ya tienes una Tienda de primeros auxilios, roba 1 carta.' },
          { level: 4, name: 'Primeros auxilios IV', effect: 'Instantáneo: Retira 2 Heridas de una de tus unidades.' },
          { level: 6, name: 'Primeros auxilios VI', effect: 'Continuo: Durante este combate, duplica el efecto de tu Tienda de primeros auxilios.' }
        ]
      },
      lore: 'Una valiente hechicera refugiada de Enroth que abrazó las enseñanzas pacifistas de los druidas en AvLee, sanando las heridas físicas y espirituales del campo de batalla.',
      quote: 'El bosque cura a quienes lo protegen con devoción, pero puede reclamar la vida de aquellos que traen el caos consigo.'
    },
    {
      name: 'Ivor',
      type: 'Poder',
      className: 'Guardabosques',
      stats: { atk: 1, def: 3, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Ofensa',
        normal: 'Instantáneo: +1 Ataque\nDespués, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nDespués, roba 1 carta.'
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
      className: 'Druida',
      stats: { atk: 0, def: 2, power: 1, knowledge: 2 },
      initialSkill: {
        name: 'Suerte',
        normal: 'Continuo: Puedes volver a lanzar un dado de tesoro y de recurso una vez durante este turno.',
        expert: 'Continuo: Puedes volver a lanzar tantos dados como quieras una vez durante este turno.'
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
      className: 'Guardabosques',
      stats: { atk: 1, def: 3, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Liderazgo',
        normal: 'Instantáneo: Gana una ficha de Moral Positiva.',
        expert: 'Instantáneo: Roba 2 cartas.\nDespués, gana una ficha de Moral Positiva.'
      },
      specialty: {
        name: 'Especialidad: Armera',
        cards: [
          { level: 1, name: 'Armera I', effect: 'Instantáneo: +2 Defensa.' },
          { level: 4, name: 'Armera IV', effect: 'Instantáneo: +3 Defensa.' },
          { level: 6, name: 'Armera VI', effect: 'Instantáneo: +4 Defensa.' }
        ]
      },
      lore: 'Una comandante defensiva sumamente brillante y analítica, cuyas inquebrantables tácticas de bloqueo y desgaste agotan hasta al atacante más fiero.',
      quote: 'Que ataquen con toda su ira. Nuestras murallas de madera viva y nuestras voluntades de hierro jamás cederán un solo milímetro.'
    },
    {
      name: 'Tarnum',
      type: 'Poder',
      className: 'Guardabosques',
      stats: { atk: 1, def: 3, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Liderazgo',
        normal: 'Instantáneo: Gana una ficha de Moral Positiva.',
        expert: 'Instantáneo: Roba 2 cartas.\nDespués, gana una ficha de Moral Positiva.'
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
      className: 'Hechicero',
      stats: { atk: 0, def: 0, power: 2, knowledge: 3 },
      initialSkill: {
        name: 'Diplomacia',
        normal: 'Mapa: Por cada vivienda que tengas, roba 1 carta de la unidad neutral correspondiente.\nPodrás reclutar una de estas unidades si Pagas su coste de reclutamiento.',
        expert: 'Instantáneo: Ignora el combate con unidades neutrales en una zona cuya dificultad de la zona sea igual al nivel de tu héroe. Visita la zona. Tu héroe no gana experiencia.'
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
      className: 'Mago',
      stats: { atk: 0, def: 0, power: 2, knowledge: 3 },
      initialSkill: {
        name: 'Sabiduría',
        normal: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(3) en vez de buscar(2).',
        expert: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(4) en vez de buscar(2).'
      },
      specialty: {
        name: 'Especialidad: Hechiceros',
        cards: [
          { level: 1, name: 'Hechiceros I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica en unidades de magos y hechiceros.' },
          { level: 4, name: 'Hechiceros IV', effect: 'Mapa: Si tienes una manada de hechiceros, descarta su carta. A continuación, busca en el mazo de unidades neutrales Oro una carta Hechiceros y añádela a tu mazo de unidades. Sólo puedes controlar 1 unidad de hechiceros.\n— O —\nInstantáneo: Roba una carta.' },
          { level: 6, name: 'Hechiceros VI', effect: 'Continuo: Durante este combate, la Iniciativa de la unidad que selecciones aumenta en 2.\nEl efecto se duplica en unidades de magos y hechiceros.' }
        ]
      },
      lore: 'Un talentoso mago de Bracada célebre por su obsesión de convertirse en el mayor cazador de dragones de la historia, adiestrando a los Encantadores más poderosos.',
      quote: 'Los dragones creen gobernar el cielo con su aliento de fuego, pero mis encantadores les enseñarán el verdadero peso de la alta magia.'
    },
    {
      name: 'Iona',
      type: 'Poder',
      className: 'Alquimista',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Espionaje',
        normal: 'Instantáneo: Durante el combate, antes de que se active ninguna unidad, juega una carta de hechizo. Durante la ronda de combate sigues pudiendo jugar solo 1 carta de hechizo.',
        expert: 'Instantáneo: Durante el combate, antes de que se active ninguna unidad, juega una carta de hechizo. Este hechizo no cuenta para el límite de hechizos por ronda de combate.'
      },
      specialty: {
        name: 'Especialidad: Genios',
        cards: [
          { level: 1, name: 'Genios I', effect: 'Continuo: Durante este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de genios.' },
          { level: 4, name: 'Genios IV', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de genios.' },
          { level: 6, name: 'Genios VI', effect: 'Instantáneo: La unidad que selecciones gana +2 Defensa.\nEl efecto se duplica para la unidad de genios.' }
        ]
      },
      lore: 'Una alquimista experta en la contención de energías elementales que mantiene una estrecha alianza con los Genios de Bracada.',
      quote: 'Los genios no son simples sirvientes de lámpara; son la encarnación de la tormenta, y yo he aprendido a dirigir su tempestad.'
    },
    {
      name: 'Josephine',
      type: 'Poder',
      className: 'Alquimista',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Hechicería',
        normal: 'Instantáneo: +1 Potencia\nDespués, roba 1 carta.',
        expert: 'Instantáneo: +2 Potencia\nDespués, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Gólems',
        cards: [
          { level: 1, name: 'Gólems I', effect: 'Continuo: Durante este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para cualquier unidad de gólems.' },
          { level: 4, name: 'Gólems IV', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para cualquier unidad de gólems.' },
          { level: 6, name: 'Gólems VI', effect: 'Instantáneo: La unidad que selecciones gana +2 Ataque.\nEl efecto se duplica para cualquier unidad de gólems.' }
        ]
      },
      lore: 'Una brillante alquimista con una destreza sin parangón para esculpir y animar autómatas de piedra y metal en Bracada, potenciando su resistencia.',
      quote: 'La carne se cansa, sangra y duda. Mis creaciones de piedra y metal marchan sin descanso, uniendo la voluntad del creador con la eternidad.'
    },
    {
      name: 'Solmyr',
      type: 'Magia',
      className: 'Mago',
      stats: { atk: 0, def: 0, power: 2, knowledge: 3 },
      initialSkill: {
        name: 'Hechicería',
        normal: 'Instantáneo: +1 Potencia\nDespués, roba 1 carta.',
        expert: 'Instantáneo: +2 Potencia\nDespués, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Rayo en cadena',
        cards: [
          { level: 1, name: 'Rayo en cadena I', effect: 'Activación: Selecciona una unidad y las otras 2 unidades más cercanas a ella. Distribuye 1/1/0 Heridas, empezando por la primera unidad seleccionada.' },
          { level: 4, name: 'Rayo en cadena IV', effect: 'Instantáneo: Descarta hasta 3 cartas de tu mazo de fuerza y magia y llévate 1 de ellas a tu mano.' },
          { level: 6, name: 'Rayo en cadena VI', effect: 'Activación: Selecciona una unidad y las otras 2 unidades más cercanas a ella. Distribuye 2/1/1 Heridas, empezando por la primera unidad seleccionada.' }
        ]
      },
      lore: 'Un noble e inmensamente poderoso genio de aire que juró lealtad incondicional al Rey Gavin Magnus de Bracada tras ser liberado de una prisión milenaria.',
      quote: 'He presenciado la caída de dinastías enteras. Vuestra efímera existencia se desvanecerá bajo mi relámpago azul.'
    },
    {
      name: 'Torosar',
      type: 'Poder',
      className: 'Alquimista',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Misticismo',
        normal: 'Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En vez de descartar la carta de hechizo, devuélvela a tu mano.',
        expert: 'Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En vez de descartar la carta de Hechizo y el resto de las cartas que juegues con ella, devuélvelas a tu mano.'
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
  inferno: [
    {
      name: 'Ash',
      type: 'Magia',
      className: 'Hereje',
      stats: { atk: 1, def: 1, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Vista de águila',
        normal: 'Instantáneo: Roba cartas del mazo de hechizos hasta que encuentres una carta de hechizo básico. Llévatela a la mano o descártala. Devuelve el resto de las cartas al mazo de hechizos y barájalo.',
        expert: 'Instantáneo: Roba cartas del mazo de hechizos hasta que encuentres una carta de hechizo avanzado. Llévatela a la mano o descártala. Devuelve el resto de las cartas al mazo de hechizos y barájalo.'
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
      className: 'Demoníaca',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Exploración',
        normal: 'Instantáneo: Juega esta carta cuando vayas a buscar para buscar (3).',
        expert: 'Instantáneo: Juega esta carta cuando vayas a buscar para buscar (5).'
      },
      specialty: {
        name: 'Especialidad: Cerberos',
        cards: [
          { level: 1, name: 'Cerberos I', effect: 'Instantáneo: Tu unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: Tu unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de cerberos.' },
          { level: 4, name: 'Cerberos IV', effect: 'Continuo: Durante este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de cerberos.' },
          { level: 6, name: 'Cerberos VI', effect: 'Instantáneo: Tu unidad que selecciones gana +2 Ataque.\nEl efecto se duplica para la unidad de cerberos.' }
        ]
      },
      lore: 'Una domadora de bestias infernales que entrena a los temibles sabuesos de tres cabezas para desgarrar las líneas de vanguardia enemigas con feroz precisión.',
      quote: 'Mis sabuesos no ladran antes de morder. Solo escuchas el crujir de los huesos y el calor de las cenizas.'
    },
    {
      name: 'Octavia',
      type: 'Poder',
      className: 'Demoníaco',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Erudito',
        normal: 'Instantáneo: Elige 1 carta de tu descarte y añádela a tu mano.',
        expert: 'Mapa: Retira hasta 2 cartas de característica de tu mano o del descarte. Coge 2 cartas de característica potenciada y colócalas en la parte superior de tu descarte. Retira el Erudito.'
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
      className: 'Demoníaco',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Erudito',
        normal: 'Instantáneo: Elige 1 carta de tu descarte y añádela a tu mano.',
        expert: 'Mapa: Retira hasta 2 cartas de característica de tu mano o del descarte. Coge 2 cartas de característica potenciada y colócalas en la parte superior de tu descarte. Retira el Erudito.'
      },
      specialty: {
        name: 'Especialidad: Efrits',
        cards: [
          { level: 1, name: 'Efrits I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de efrits.' },
          { level: 4, name: 'Efrits IV', effect: 'Continuo: Hasta el final del combate, cuando la unidad seleccionada sea atacada por una unidad Melé o Voladora, el atacante sufre 1 Herida.' },
          { level: 6, name: 'Efrits VI', effect: 'Continuo: Hasta el final del Combate, cuando la unidad seleccionada sea atacada por una unidad Melé o Voladora, el atacante sufre 1 Herida.\nEl efecto se duplica para la unidad de efrits.' }
        ]
      },
      lore: 'Un brutal y colérico demonio que somete a los efreets más salvajes a su estricta disciplina militar, convirtiéndolos en escudos vivientes de fuego.',
      quote: 'El fuego no obedece a los débiles. Mis efreets os consumirán antes de que podáis implorar clemencia.'
    },
    {
      name: 'Xyron',
      type: 'Magia',
      className: 'Hereje',
      stats: { atk: 1, def: 1, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Sabiduría',
        normal: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(3) en vez de buscar(2).',
        expert: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(4) en vez de buscar(2).'
      },
      specialty: {
        name: 'Especialidad: Inferno',
        cards: [
          { level: 1, name: 'Inferno I', effect: 'Activación: Descarta 2 cartas. Después selecciona un espacio. Todas las unidades de la zona y zonas adyacentes sufren 1 Herida.' },
          { level: 4, name: 'Inferno IV', effect: 'Activación: Descarta 1 carta. Después selecciona un espacio. Todas las unidades de la zona y zonas adyacentes sufren 1 Herida.' },
          { level: 6, name: 'Inferno VI', effect: 'Activación: Selecciona un espacio. Todas las unidades de la zona y zonas adyacentes sufren 1 Herida.' }
        ]
      },
      lore: 'Un conjurador proscrito obsesionado con desatar fuegos eternos, capaz de fundir ejércitos con la devastación absoluta de su tormenta de fuego abisal.',
      quote: 'Dejad que las llamas del abismo os abracen. Del polvo venís y en cenizas os fundiré.'
    },
    {
      name: 'Zydar',
      type: 'Magia',
      className: 'Hereje',
      stats: { atk: 1, def: 1, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Hechicería',
        normal: 'Instantáneo: +1 Potencia\nDespués, roba 1 carta.',
        expert: 'Instantáneo: +2 Potencia\nDespués, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Hechicería',
        cards: [
          { level: 1, name: 'Hechicería I', effect: 'Instantáneo: Juega esta carta después de lanzar un Hechizo, y a continuación roba 1 carta.\n— O —\nInstantáneo: +1 Potencia.' },
          { level: 4, name: 'Hechicería IV', effect: 'Instantáneo: El próximo Hechizo que lances no cuenta para el límite.\n— O —\nInstantáneo: +2 Potencia.' },
          { level: 6, name: 'Hechicería VI', effect: 'Continuo: Hasta el final de la ronda de combate, después de lanzar un Hechizo, roba 1 carta.\nInstantáneo: +2 Potencia.' }
        ]
      },
      lore: 'Un refinado y calculador hereje que extrae poder místico directamente del núcleo del caos, amplificando cada conjuro con efectos corrosivos de gran intensidad.',
      quote: 'Vuestra magia se desvanece ante el poder corrosivo del azufre. Contemplad el verdadero arte del tormento.'
    }
  ],
  bastion: [
    {
      name: 'Crag Hack',
      type: 'Poder',
      className: 'Bárbaro',
      stats: { atk: 4, def: 0, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Ofensa',
        normal: 'Instantáneo: +1 Ataque\nDespués, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nDespués, roba 1 carta.'
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
      className: 'Taumaturgo',
      stats: { atk: 2, def: 1, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Logística',
        normal: 'Continuo: Al final de tu turno, mueve la miniatura de tu héroe a una zona vacía adyacente.',
        expert: 'Instantáneo: Tu héroe gana +1 de movimiento.'
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
      className: 'Taumaturgo',
      stats: { atk: 2, def: 1, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Sabiduría',
        normal: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(3) en vez de buscar(2).',
        expert: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(4) en vez de buscar(2).'
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
      className: 'Bárbaro',
      stats: { atk: 4, def: 0, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Exploración',
        normal: 'Instantáneo: Juega esta carta cuando vayas a buscar para buscar(3).',
        expert: 'Instantáneo: Juega esta carta cuando vayas a buscar para buscar(5).'
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
      className: 'Bárbaro',
      stats: { atk: 4, def: 0, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Ofensa',
        normal: 'Instantáneo: +1 Ataque\nDespués, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nDespués, roba 1 carta.'
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
      className: 'Bárbaro',
      stats: { atk: 4, def: 0, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Ofensa',
        normal: 'Instantáneo: +1 Ataque\nDespués, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nDespués, roba 1 carta.'
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
      className: 'Bruja',
      stats: { atk: 0, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Sabiduría',
        normal: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(3) en vez de buscar(2).',
        expert: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(4) en vez de buscar(2).'
      },
      specialty: {
        name: 'Especialidad: Magia de fuego',
        cards: [
          { level: 1, name: 'Magia de fuego I', effect: 'Continuo: Durante este combate, todos tus hechizos de la escuela de magia de fuego reciben +1 Potencia.' },
          { level: 4, name: 'Magia de fuego IV', effect: 'Instantáneo: Busca(3) en tu mazo y después devuelve las cartas del descarte al mazo y barájalo.' },
          { level: 6, name: 'Magia de fuego VI', effect: 'Continuo: Durante este combate, todos tus hechizos de la escuela de magia de fuego reciben +2 Potencia.' }
        ]
      },
      lore: 'Una bruja única de Tatalia que rompió los tabúes de su pueblo para dominar la magia del fuego, utilizándola para defender su hogar.',
      quote: 'El fuego también puede florecer en la ciénaga. Dejad que consuma a nuestros invasores.'
    },
    {
      name: 'Bron',
      type: 'Poder',
      className: 'Amaestrador',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Resistencia',
        normal: 'Instantáneo: Juega esta carta inmediatamente después de que el enemigo lance un hechizo. Si ha lanzado el hechizo con 1 Potencia o menos, ignora el efecto de la carta de hechizo.',
        expert: 'Instantáneo: Juega esta carta inmediatamente después de que el enemigo lance un hechizo. Ignora el efecto de la carta de hechizo.'
      },
      specialty: {
        name: 'Especialidad: Basiliscos',
        cards: [
          { level: 1, name: 'Basiliscos I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de basiliscos.' },
          { level: 4, name: 'Basiliscos IV', effect: 'Continuo: Durante este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de basiliscos.' },
          { level: 6, name: 'Basiliscos VI', effect: 'Continuo: Durante este combate, la Iniciativa de la unidad seleccionada aumenta en 2.\nEl efecto se duplica para la unidad de basiliscos.' }
        ]
      },
      lore: 'Un célebre domador de bestias capaz de guiar a los basiliscos salvajes del pantano para que petrifiquen a ejércitos enteros.',
      quote: 'La mirada de un basilisco convierte el coraje más firme en piedra fría. Mantened la formación mientras ellos se quiebran.'
    },
    {
      name: 'Gerwulf',
      type: 'Poder',
      className: 'Amaestrador',
      stats: { atk: 0, def: 4, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Armero',
        normal: 'Instantáneo: +1 Defensa.\nDespués, roba 1 carta.',
        expert: 'Instantáneo: +2 Defensa.\nDespués, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Balista',
        cards: [
          { level: 1, name: 'Balista I', effect: 'Mapa: Paga 5 Oros para ganar una balista.\n— O —\nInstantáneo: Activa tu balista (si tienes una).' },
          { level: 4, name: 'Balista IV', effect: 'Continuo: La unidad seleccionada sufre 1 Herida.\nInstantáneo: Descarta tu balista para inflingir 2 Heridas en la unidad seleccionada.' },
          { level: 6, name: 'Balista VI', effect: 'Continuo: Puedes jugar esta carta al comienzo del combate. Para este combate, puedes elegir objetivos para tu balista (si tienes una).\nInstantáneo: Descarta tu balista para inflingir 3 Heridas en la unidad seleccionada.' }
        ]
      },
      lore: 'Gerwulf es un experto en maquinaria de guerra que prefiere la potencia de las balistas portátiles sobre los conjuros arcanos.',
      quote: 'Un conjuro puede fallar si tiembla la voz del mago, pero la tensión mecánica de una balista siempre responde con absoluta precisión.'
    },
    {
      name: 'Merist',
      type: 'Magia',
      className: 'Bruja',
      stats: { atk: 0, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Primeros auxilios',
        normal: 'Instantáneo: Retira 1 Herida de una de tus unidades.',
        expert: 'Instantáneo: Cuando utilices la carta Tienda de primeros auxilios, resuelve su efecto 3 veces contra el mismo objetivo.'
      },
      specialty: {
        name: 'Especialidad: Piel de piedra',
        cards: [
          { level: 1, name: 'Piel de piedra I', effect: 'Instantáneo: La unidad seleccionada gana +1 Defensa y +1 Defensa adicional si está adyacente al atacante.' },
          { level: 4, name: 'Piel de piedra IV', effect: 'Activación: Todas tus unidades ganan una ficha de defensa.' },
          { level: 6, name: 'Piel de piedra VI', effect: 'Continuo: Para este combate, tus fichas de defensa proporcionan la Defensa extra en una tirada de <<0>> o <<1>>. Cuando se juega esta carta, coloca una ficha de defensa en todas tus unidades.' }
        ]
      },
      lore: 'Una bruja compasiva y mística del pantano, experta en hechizos protectores de la tierra y en el cuidado de los heridos en combate.',
      quote: 'La ciénaga nos nutre y nos protege. La tierra misma se alzará como un escudo impenetrable para resguardar a sus hijos.'
    },
    {
      name: 'Tarnum',
      type: 'Poder',
      className: 'Amaestrador',
      stats: { atk: 0, def: 4, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Armero',
        normal: 'Instantáneo: +1 Defensa.\nDespués, roba 1 carta.',
        expert: 'Instantáneo: +2 Defensa.\nDespués, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Basiliscos',
        cards: [
          { level: 1, name: 'Basiliscos I', effect: 'Instantáneo: La unidad seleccionada gana +1 de Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de basiliscos.' },
          { level: 4, name: 'Basiliscos IV', effect: 'Continuo: Para este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de basiliscos.' },
          { level: 6, name: 'Basiliscos VI', effect: 'Instantáneo: La unidad seleccionada usa su habilidad especial independientemente del resultado requerido de la tirada.\n— O —\nInstantáneo: La unidad seleccionada gana +2 Ataque.' }
        ]
      },
      lore: 'En su encarnación como Señor de las Bestias, Tarnum lideró a los oprimidos de Mudland para conquistar su libertad en las ciénagas.',
      quote: 'Los Ancestros me guiaron a estas ciénagas no para ocultarme, sino para alzar un ejército de garras y escamas que rompa vuestras cadenas.'
    },
    {
      name: 'Tazar',
      type: 'Poder',
      className: 'Amaestrador',
      stats: { atk: 0, def: 4, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Armero',
        normal: 'Instantáneo: +1 Defensa.\nDespués, roba 1 carta.',
        expert: 'Instantáneo: +2 Defensa.\nDespués, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Héroe de guerra',
        cards: [
          { level: 1, name: 'Héroe de guerra I', effect: 'Instantáneo: +2 Ataque.' },
          { level: 4, name: 'Héroe de guerra IV', effect: 'Continuo: Durante este combate, la unidad seleccionada gana +1 Ataque.' },
          { level: 6, name: 'Héroe de guerra VI', effect: 'Mapa: Retira 1 carta/descarta 3 cartas de tu mano para robar una carta de artefacto de la parte superior del mazo de artefactos.' }
        ]
      },
      lore: 'Un veterano y taciturno estratega de Tatalia, célebre por su capacidad de defensa inexpugnable, considerado un auténtico héroe de guerra.',
      quote: 'Que vengan con todo lo que tengan. El pantano de Tatalia devorará sus filas.'
    },
    {
      name: 'Wystan',
      type: 'Poder',
      className: 'Amaestrador',
      stats: { atk: 0, def: 4, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Tiro con arco',
        normal: 'Continuo: Durante esta ronda de combate, tus unidades a distancia ganan +1 Ataque si el objetivo no es una unidad adyacente.',
        expert: 'Continuo: Hasta el final de la siguiente ronda de combate, todas tus unidades a distancia ganan +1 Iniciativa y +1 Ataque si el objetivo no es una unidad adyacente.'
      },
      specialty: {
        name: 'Especialidad: Hombres lagarto',
        cards: [
          { level: 1, name: 'Hombres lagarto I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de hombres lagarto.' },
          { level: 4, name: 'Hombres lagarto IV', effect: 'Continuo: Durante este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de hombres lagarto.' },
          { level: 6, name: 'Hombres lagarto VI', effect: 'Continuo: Durante este combate, la Iniciativa de la unidad seleccionada aumenta en 2.\nEl efecto se duplica para la unidad de hombres lagarto.' }
        ]
      },
      lore: 'Un sigiloso oficial de la Fortaleza que comanda a los mejores batallones de arqueros lagarto de las marismas.',
      quote: 'Nuestras flechas vuelan silenciosas a través de la densa niebla del pantano. Para cuando nos escuchéis, ya estaréis condenados.'
    }
  ],
  conflujo: [
    {
      name: 'Ciele',
      type: 'Magia',
      className: 'Elementalista',
      stats: { atk: 0, def: 0, power: 2, knowledge: 3 },
      initialSkill: {
        name: 'Magia de agua',
        normal: 'Permanente: +1 Potencia para hechizos de la escuela de magia de agua.',
        expert: 'Instantáneo: Al lanzar un Hechizo de la escuela de agua, puedes descartar esta carta y ganar +3 Potencia.'
      },
      specialty: {
        name: 'Especialidad: Flecha mágica',
        cards: [
          { level: 1, name: 'Flecha mágica I', effect: 'Instantáneo: Toma un hechizo de Flecha mágica de tu pila de descarte y llévalo a la mano.\n— O —\nInstantáneo: +1 Potencia.' },
          { level: 4, name: 'Flecha mágica IV', effect: 'Instantáneo: Toma un hechizo de Flecha mágica de tu pila de descarte y lánzalo. Este hechizo no cuenta para tu límite de hechizos por ronda de combate.\n— O —\nInstantáneo: +1 Potencia.' },
          { level: 6, name: 'Flecha mágica VI', effect: 'Instantáneo: La unidad seleccionada sufre 2 Heridas.\n— O —\nInstantáneo: +2 Potencia.' }
        ]
      },
      lore: 'Una elfa mística que sintonizó su espíritu con la pureza y fluidez de las corrientes de agua elementales.',
      quote: 'El agua se adapta a cualquier forma, pero posee la fuerza implacable para erosionar la roca más dura y congelar el alma enemiga.'
    },
    {
      name: 'Erdamon',
      type: 'Poder',
      className: 'Caminante de planos',
      stats: { atk: 3, def: 1, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Patrimonio',
        normal: 'Instantáneo: Gana 3 Oros.',
        expert: 'Instantáneo: Gana 6 Oros.'
      },
      specialty: {
        name: 'Especialidad: Elementales de magma',
        cards: [
          { level: 1, name: 'Elementales de magma I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de Elementales de magma.' },
          { level: 4, name: 'Elementales de magma IV', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Elementales de magma.' },
          { level: 6, name: 'Elementales de magma VI', effect: 'Instantáneo: La unidad seleccionada gana +2 Ataque.\n— O —\nContinuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 3.' }
        ]
      },
      lore: 'Un viajero rústico de constitución mineral que lidera a los seres de tierra y magma del plano elemental de Confluencia.',
      quote: 'El suelo que pisáis no es vuestro, obecece a mi llamado. Sentid la furia de la tierra agrietándose bajo vuestros pies.'
    },
    {
      name: 'Luna',
      type: 'Magia',
      className: 'Elementalista',
      stats: { atk: 0, def: 0, power: 2, knowledge: 3 },
      initialSkill: {
        name: 'Magia básica del fuego',
        normal: 'Permanente: En lugar de buscar en el mazo de hechizos, encuentra el primer Hechizo de magia de fuego que haya en él y llévate el Hechizo a la mano.\nA continuación, vuelve a barajar el mazo.',
        expert: 'Instantáneo: +3 Potencia para un Hechizo de magia de fuego.'
      },
      specialty: {
        name: 'Especialidad: Muro de fuego',
        cards: [
          { level: 1, name: 'Muro de fuego I', effect: 'Continuo: Para este Combate, coloca esta carta o una ficha de muro de fuego en un espacio vacío del tablero de combate. Aplica 1 Herida a cualquier unidad que comience su turno aquí o que se detenga aquí, y a cualquier unidad melé o a distancia que lo atraviese.' },
          { level: 4, name: 'Muro de fuego IV', effect: 'Instantáneo: Toma una carta de tu pila de descarte y llévatela a la mano.\n— O —\nInstantáneo: +2 Potencia.' },
          { level: 6, name: 'Muro de fuego VI', effect: 'Continuo: Para este Combate, coloca esta carta o una ficha de muro de fuego en un espacio vacío del tablero de combate. Aplica 3 Heridas a cualquier unidad que comience su turno aquí o que se detenga aquí, y a cualquier unidad melé o a distancia que lo atraviese.' }
        ]
      },
      lore: 'Una temperamental hechicera que domina las esferas ígneas y los muros incandescentes de Confluencia.',
      quote: 'Las llamas son la expresión más pura de la energía. Quienes osen cruzar mi muro de fuego solo encontrarán cenizas y olvido.'
    },
    {
      name: 'Monere',
      type: 'Poder',
      className: 'Caminante de planos',
      stats: { atk: 3, def: 1, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Logística',
        normal: 'Continuo: Al final de tu turno, mueve la miniatura de tu héroe a una zona vacía adyacente.',
        expert: 'Instantáneo: Tu héroe gana +1 de movimiento.'
      },
      specialty: {
        name: 'Especialidad: Elementales mágicos',
        cards: [
          { level: 1, name: 'Elementales mágicos I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de Elementales mágicos.' },
          { level: 4, name: 'Elementales mágicos IV', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Elementales mágicos.' },
          { level: 6, name: 'Elementales mágicos VI', effect: 'Instantáneo: La unidad seleccionada gana +2 Ataque.\n— O —\nInstantáneo: +2 Potencia.' }
        ]
      },
      lore: 'Un enigmático explorador planar que viaja a través de los vórtices de energía elemental de Confluencia.',
      quote: 'Los límites físicos entre los planos no son más que ilusiones. La verdadera velocidad reside en comprender el flujo del espacio.'
    },
    {
      name: 'Pasis',
      type: 'Poder',
      className: 'Caminante de planos',
      stats: { atk: 3, def: 1, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Artillería',
        normal: 'Instantáneo: Inflige 1 Herida a la unidad enemiga con menor Iniciativa.',
        expert: 'Instantáneo: Al utilizar la carta Balista, resuelve su efecto 3 veces contra el mismo objetivo.'
      },
      specialty: {
        name: 'Especialidad: Elementales',
        cards: [
          { level: 1, name: 'Elementales I', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Elementales.' },
          { level: 4, name: 'Elementales IV', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de Elementales.' },
          { level: 6, name: 'Elementales VI', effect: 'Continuo: Para este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Elementales.' }
        ]
      },
      lore: 'Una decidida viajera que lidera a los seres psíquicos de Confluencia mediante proyecciones de su propia mente.',
      quote: 'La mente es el catalizador que une los elementos. Mis pensamientos guiarán vuestros golpes con el poder de una tormenta psíquica.'
    },
    {
      name: 'Tarnum',
      type: 'Magia',
      className: 'Elementalista',
      stats: { atk: 0, def: 0, power: 2, knowledge: 3 },
      initialSkill: {
        name: 'Sabiduría',
        normal: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(3) en vez de buscar(2).',
        expert: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(4) en vez de buscar(2).'
      },
      specialty: {
        name: 'Especialidad: Encantadores',
        cards: [
          { level: 1, name: 'Encantadores I', effect: 'Instantáneo: Busca(1) Hechizo. Puedes retirar esta carta en lugar de llevártela a la mano.' },
          { level: 4, name: 'Encantadores IV', effect: 'Mapa: Paga 10 Oros. Luego busca la carta de Encantadores en el mazo de unidades neutrales Oro y añádela a tu mazo de unidades. Solo puedes controlar 1 unidad de Encantadores a la vez.\n— O —\nInstantáneo: Roba 1 carta.' },
          { level: 6, name: 'Encantadores VI', effect: 'Instantáneo: Busca(1) Hechizo dos veces. Si su tipo lo permite y tienes suficiente Potencia disponible, puedes lanzar inmediatamente uno de estos hechizos o ambos, incluso si ya lanzaste un hechizo en esta ronda.\nColoca cada hechizo que uses de esta manera en la parte superior del mazo de hechizos o en su pila de descarte en cualquier orden.' }
        ]
      },
      lore: 'En su encarnación como Elementalista, Tarnum buscó el dominio de las fuerzas arcanas de los planos para guiar a los Enchanters y redimir sus antiguas faltas.',
      quote: 'Los elementos son fuerzas salvajes que requieren un alma firme para ser dirigidas. Yo seré el puente entre sus mundos y la redención.'
    }
  ],
  cala: [
    {
      name: 'Astra',
      type: 'Magia',
      className: 'Navegador',
      stats: { atk: 2, def: 0, power: 1, knowledge: 2 },
      initialSkill: {
        name: 'Suerte',
        normal: 'Continuo: Puedes volver a lanzar un dado de tesoro y de recurso una vez durante este turno.',
        expert: 'Continuo: Puedes volver a lanzar tantos dados como quieras una vez durante este turno.'
      },
      specialty: {
        name: 'Especialidad: Curación',
        cards: [
          { level: 1, name: 'Curación I', effect: 'Instantáneo: Retira cualquier efecto o Parálisis de la unidad seleccionada y después roba 1 carta.' },
          { level: 4, name: 'Curación IV', effect: 'Instantáneo: Retira cualquier efecto o Parálisis, así como hasta 2 Heridas de la unidad seleccionada.' },
          { level: 6, name: 'Curación VI', effect: 'Instantáneo: Retira hasta 3 Heridas de la unidad seleccionada.' }
        ]
      },
      lore: 'Una navegante que canaliza el rocío sagrado del océano para bendecir y sanar a sus guerreros en plena tormenta.',
      quote: 'El océano exige su tributo de sangre, pero yo os bendigo con su marea de vida para que sigáis combatiendo bajo la tormenta.'
    },
    {
      name: 'Casmetra',
      type: 'Magia',
      className: 'Navegador',
      stats: { atk: 2, def: 0, power: 1, knowledge: 2 },
      initialSkill: {
        name: 'Sabiduría',
        normal: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(3) en vez de buscar(2).',
        expert: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(4) en vez de buscar(2).'
      },
      specialty: {
        name: 'Especialidad: Hechiceras',
        cards: [
          { level: 1, name: 'Hechiceras I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de Hechiceras.' },
          { level: 4, name: 'Hechiceras IV', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Hechiceras.' },
          { level: 6, name: 'Hechiceras VI', effect: 'Instantáneo: La unidad seleccionada gana +2 Ataque.\n— O —\nContinuo: Coloca una ficha de debilidad <<-2>> sobre cualquier unidad durante 2 rondas de combate.' }
        ]
      },
      lore: 'Una de las navegantes más respetadas, experta en coordinar a las hechiceras de Regnan para debilitar la mente del enemigo.',
      quote: 'Escuchad el susurro del abismo... vuestra voluntad se desvanece con la marea, y vuestro acero se vuelve tan frágil como la arena.'
    },
    {
      name: 'Cassiopeia',
      type: 'Poder',
      className: 'Capitán',
      stats: { atk: 3, def: 0, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Táctica',
        normal: 'Instantáneo: Al comienzo del combate, intercambia la posición de 2 de tus unidades.',
        expert: 'Activación: Durante el combate, intercambia la posición de 2 de tus unidades.'
      },
      specialty: {
        name: 'Especialidad: Oceánidos',
        cards: [
          { level: 1, name: 'Oceánidos I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad de Oceánidos.' },
          { level: 4, name: 'Oceánidos IV', effect: 'Continuo: Para este combate, la Iniciativa de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad de Oceánidos.' },
          { level: 6, name: 'Oceánidos VI', effect: 'Continuo: La unidad seleccionada gana +2 Ataque.\nEl efecto se duplica para la unidad de Oceánidos.' }
        ]
      },
      lore: 'Una intrépida capitana pirata que cabalga las olas junto a las veloces ninfas oceánidas, liderando asaltos coordinados en la costa.',
      quote: 'Las ninfas bailan al son de la tempestad, y mi sable cortará el viento para guiar el asalto. ¡No dejéis ni un cofre sin reclamar!'
    },
    {
      name: 'Jeremy',
      type: 'Poder',
      className: 'Capitán',
      stats: { atk: 3, def: 0, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Ofensa',
        normal: 'Instantáneo: +1 Ataque\nDespués, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nDespués, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Cañón',
        cards: [
          { level: 1, name: 'Cañón I', effect: 'Mapa: Paga 7 Oros para ganar un cañón.\n— O —\nInstantáneo: Aplica 1 Herida a una unidad enemiga.' },
          { level: 4, name: 'Cañón IV', effect: 'Instantáneo: Puedes usar el cañón inmediatamente una vez sin gastar Corona. No cuenta para el límite de rondas del cañón.\n— O —\nInstantáneo: Roba 1 carta.' },
          { level: 6, name: 'Cañón VI', effect: 'Instantáneo: Puedes usar el cañón inmediatamente una vez sin gastar Corona. No cuenta para el límite de rondas del cañón.\n— O —\nInstantáneo: Roba 2 cartas.' }
        ]
      },
      lore: 'Un artillero legendario de la armada pirata que confía plenamente en la pólvora y el retumbar de los cañones pesados de Regnan.',
      quote: 'Dejad que los eruditos reciten sus conjuros. La voz de mi cañón de bronce habla con más fuerza y sepulta a todos los reyes de la tierra.'
    },
    {
      name: 'Miriam',
      type: 'Poder',
      className: 'Capitán',
      stats: { atk: 3, def: 0, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Logística',
        normal: 'Continuo: Al final de tu turno, mueve la miniatura de tu héroe a una zona vacía adyacente.',
        expert: 'Instantáneo: Tu héroe gana +1 de movimiento.'
      },
      specialty: {
        name: 'Especialidad: Exploración',
        cards: [
          { level: 1, name: 'Exploración I', effect: 'Instantáneo: Retira 1 carta de habilidad de tu mano para Buscar(2) en el mazo de habilidades. A continuación, puedes retirar esta carta de especialidad.' },
          { level: 4, name: 'Exploración IV', effect: 'Instantáneo: Retira 1 carta de habilidad, artefacto o hechizo de tu mano para Buscar(2) en el mazo correspondiente. A continuación, puedes retirar esta carta de especialidad.' },
          { level: 6, name: 'Exploración VI', effect: 'Instantáneo: Retira 1 carta de habilidad, artefacto o hechizo de tu mano para Buscar(4) en el mazo correspondiente. A continuación, puedes retirar esta carta de especialidad.' }
        ]
      },
      lore: 'Una astuta exploradora marina encargada del reconocimiento cartográfico de costas y del contrabando en Bahía.',
      quote: 'Ninguna costa es demasiado escarpada ni ningún puerto demasiado seguro si Miriam decide trazar un rumbo a través de ellos.'
    },
    {
      name: 'Zilare',
      type: 'Magia',
      className: 'Navegador',
      stats: { atk: 2, def: 0, power: 1, knowledge: 2 },
      initialSkill: {
        name: 'Interferencia',
        normal: 'Instantáneo: +1 Defensa. Este efecto se puede utilizar para reducir el Daño de un Hechizo.',
        expert: 'Instantáneo: +2 Defensa. Este efecto se puede utilizar para reducir el Daño de un Hechizo.'
      },
      specialty: {
        name: 'Especialidad: Olvido',
        cards: [
          { level: 1, name: 'Olvido I', effect: 'Continuo: Durante su siguiente activación, una unidad a distancia de nivel Bronce o Plata no puede atacar.\n— O —\nInstantáneo: Roba 1 carta.' },
          { level: 4, name: 'Olvido IV', effect: 'Continuo: Durante su siguiente activación, una unidad a distancia de nivel Bronce, Plata u Oro no puede atacar.\n— O —\nInstantáneo: +2 Potencia.' },
          { level: 6, name: 'Olvido VI', effect: 'Continuo: Durante su siguiente activación, una unidad Bronce, Plata u Oro no puede atacar.\n— O —\nInstantáneo: +2 Potencia.' }
        ]
      },
      lore: 'Un enigmático navegante que conoce los secretos del hipnotismo de las profundidades, sumiendo la mente de los arqueros rivales en el olvido.',
      quote: 'Mirad fijamente el abismo marino... olvidará el arquero su flecha, olvidará el guerrero su espada, y solo reinará el silencio de las profundidades.'
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
    primary: 'from-sky-950 to-slate-950',
    border: 'border-sky-500/40',
    text: 'text-sky-400',
    glow: 'shadow-sky-500/15',
    bgGradient: 'radial-gradient(circle at top, #0c4a6e 0%, #030712 100%)',
    badge: 'bg-sky-950/80 border-sky-900 text-sky-400',
    accent: 'bg-sky-500 text-white'
  },
  necropolis: {
    primary: 'from-zinc-950 to-stone-950',
    border: 'border-zinc-700/50',
    text: 'text-zinc-400',
    glow: 'shadow-zinc-500/10',
    bgGradient: 'radial-gradient(circle at top, #1e1e24 0%, #07070a 100%)',
    badge: 'bg-zinc-900/80 border-zinc-800 text-zinc-400',
    accent: 'bg-zinc-700 text-zinc-250'
  },
  mazmorra: {
    primary: 'from-purple-950 to-stone-950',
    border: 'border-purple-500/40',
    text: 'text-purple-400',
    glow: 'shadow-purple-500/15',
    bgGradient: 'radial-gradient(circle at top, #581c87 0%, #030712 100%)',
    badge: 'bg-purple-950/80 border-purple-900 text-purple-400',
    accent: 'bg-purple-600 text-white'
  },
  murallas: {
    primary: 'from-green-950 to-stone-950',
    border: 'border-lime-500/30',
    text: 'text-lime-400',
    glow: 'shadow-lime-500/15',
    bgGradient: 'radial-gradient(circle at top, #22c55e 0%, #15803d 40%, #0c0a09 100%)',
    badge: 'bg-lime-950/80 border-lime-900 text-lime-400',
    accent: 'bg-lime-600 text-white'
  },
  torre: {
    primary: 'from-slate-900 to-slate-950',
    border: 'border-cyan-100/35',
    text: 'text-cyan-50',
    glow: 'shadow-cyan-200/20',
    bgGradient: 'radial-gradient(circle at top, #93c5fd 0%, #1e293b 45%, #020617 100%)',
    badge: 'bg-slate-900/80 border-slate-700 text-cyan-50',
    accent: 'bg-cyan-500 text-white'
  },
  inferno: {
    primary: 'from-red-950 to-stone-950',
    border: 'border-red-500/40',
    text: 'text-red-500',
    glow: 'shadow-red-500/20',
    bgGradient: 'radial-gradient(circle at top, #991b1b 0%, #1c1917 100%)',
    badge: 'bg-red-950/80 border-red-900 text-red-400',
    accent: 'bg-red-600 text-white'
  },
  bastion: {
    primary: 'from-amber-950 to-stone-950',
    border: 'border-amber-600/40',
    text: 'text-amber-500',
    glow: 'shadow-amber-500/15',
    bgGradient: 'radial-gradient(circle at top, #7c2d12 0%, #1c1917 100%)',
    badge: 'bg-amber-950/80 border-amber-900 text-amber-500',
    accent: 'bg-amber-600 text-white'
  },
  fortaleza: {
    primary: 'from-[#151c12] to-neutral-950',
    border: 'border-[#415436]/40',
    text: 'text-[#94ad82]',
    glow: 'shadow-[#415436]/15',
    bgGradient: 'radial-gradient(circle at top, #25331e 0%, #070a05 100%)',
    badge: 'bg-[#11160e]/80 border-[#25331e] text-[#94ad82]',
    accent: 'bg-[#415436] text-[#94ad82]'
  },
  conflujo: {
    primary: 'from-pink-950 to-slate-950',
    border: 'border-pink-500/40',
    text: 'text-pink-400',
    glow: 'shadow-pink-500/15',
    bgGradient: 'radial-gradient(circle at top, #9d174d 0%, #090d16 100%)',
    badge: 'bg-pink-950/80 border-pink-900 text-pink-400',
    accent: 'bg-pink-600 text-white'
  },
  cala: {
    primary: 'from-teal-950 to-slate-950',
    border: 'border-teal-500/40',
    text: 'text-teal-400',
    glow: 'shadow-teal-500/15',
    bgGradient: 'radial-gradient(circle at top, #115e59 0%, #030712 100%)',
    badge: 'bg-teal-950/80 border-teal-900 text-teal-400',
    accent: 'bg-teal-500 text-white'
  }
};
