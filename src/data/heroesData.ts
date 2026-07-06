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
          { level: 1, name: 'Tiradores I', effect: 'Continuo: Para este combate, la Vida de la unidad seleccionada se incrementa en 1.\nEl efecto se duplica para la unidad de Tiradores.' },
          { level: 4, name: 'Tiradores IV', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa\nEl efecto se duplica para la unidad de Tiradores.' },
          { level: 6, name: 'Tiradores VI', effect: 'Activación: Activa una de tus unidades a distancia, incluso si esa unidad ya ha sido activada.\n— O —\nInstantáneo: Roba 2 cartas.\n______\nEl efecto se duplica para la unidad de Tiradores.' }
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
          { level: 1, name: 'Fanáticos I', effect: 'Instantáneo: Tu unidad seleccionada gana +1 de Ataque o +1 de Defensa. El efecto se duplica para Fanáticos.' },
          { level: 4, name: 'Fanáticos IV', effect: 'Contínuo: Para este Combate, la Vida de tu unidad seleccionada aumenta en 1. El efecto se duplica para Fanáticos.' },
          { level: 6, name: 'Fanáticos VI', effect: 'Contínuo: Para este Combate, tu unidad seleccionada ignora la Defensa de sus objetivos.\n— O —\nInstantáneo: Roba 1 carta.' }
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
        name: 'Especialidad: Balística',
        cards: [
          { level: 1, name: 'Balística I', effect: 'Mapa: Paga 5 Oros para obtener una Ballesta.\n— O —\nInstantáneo: Activa tu Ballesta (si tienes una).' },
          { level: 4, name: 'Balística IV', effect: 'Continuo: Puedes jugar esta carta al inicio del Combate. Para este Combate, obtienes una Ballesta adicional, incluso si ya tienes una. Descarta la Ballesta después de este Combate\n— O —\nInstantáneo: Roba 1 carta.' },
          { level: 6, name: 'Balística VI', effect: 'Instantáneo: Elige 2 unidades enemigas. Cada una de estas unidades sufre 2 Heridas.' }
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
          { level: 1, name: 'Liches I', effect: 'Instantáneo: La unidad seleccionada gana +1 Ataque.\n— O —\nInstantáneo: La unidad seleccionada gana +1 Defensa.\n______\nEl efecto se duplica para la unidad Liches.' },
          { level: 4, name: 'Liches IV', effect: 'Continuo: Para este combate, la Vida de la unidad seleccionada aumenta en 1.\nEl efecto se duplica para la unidad Liches.' },
          { level: 6, name: 'Liches VI', effect: 'Continuo: En este combate, tu unidad de Liches inflige daño elemental.\nInstantáneo: +2 Ataque.' }
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
          { level: 1, name: 'Onda de Muerte I', effect: 'Activación: Las unidades enemigas Bronce sufren 1 Herida.\n— O —\nInstantáneo: +1 Potencia' },
          { level: 4, name: 'Onda de Muerte IV', effect: 'Activación: Las unidades enemigas Bronce sufren 1 Herida.\n— O —\nInstantáneo: +1 Potencia' },
          { level: 6, name: 'Onda de Muerte VI', effect: 'Activación: Las unidades enemigas Oro y Azul sufren 2 Heridas.\n— O —\nInstantáneo: +2 Potencia' }
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
      stats: { atk: 1, def: 1, power: 3, knowledge: 1 },
      initialSkill: {
        name: 'Sabiduría (Wisdom)',
        normal: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(3) en lugar de Buscar(2).',
        expert: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(4) en lugar de Buscar(3).'
      },
      specialty: {
        name: 'Especialidad: Resurrección',
        cards: [
          { level: 1, name: 'Plegaria Subterránea I', effect: 'Tus hechizos de "Resurrección" cuestan 1 punto menos de Maná (mínimo 1).' },
          { level: 4, name: 'Resurgir de la Roca IV', effect: 'Tu hechizo de Resurrección puede revivir a una unidad de nivel plata de forma permanente con 2 HP.' },
          { level: 6, name: 'Milagro del Abismo VI', effect: 'Una vez por combate, puedes lanzar un hechizo de Resurrección gratuito que revive a una unidad de nivel bronce con HP completo.' }
        ]
      },
      lore: 'Un erudito brujo de Nighon que dedicó décadas al estudio de la restauración celular y la retención del alma en los cuerpos.'
    },
    {
      name: 'Deemer',
      type: 'Magia',
      className: 'Brujo (Warlock)',
      stats: { atk: 1, def: 0, power: 3, knowledge: 2 },
      initialSkill: {
        name: 'Exploración (Scouting)',
        normal: 'Puedes revelar 1 loseta de mapa adyacente extra al explorar.',
        expert: 'Puedes revelar hasta 2 losetas de mapa adyacentes extra y obtener +1 de movimiento táctico verde.'
      },
      specialty: {
        name: 'Especialidad: Lluvia de Meteoros',
        cards: [
          { level: 1, name: 'Lluvia Centelleante I', effect: 'Tu hechizo "Lluvia de Meteoros" aumenta su daño en +1 y cuesta 1 de Maná menos.' },
          { level: 4, name: 'Impacto Profundo IV', effect: 'Tus hechizos destructivos de área aturden a las unidades afectadas si sacas un resultado de +1 en el dado.' },
          { level: 6, name: 'Tormenta de Piedra VI', effect: 'Una vez por combate, puedes gastar 3 de Maná para lanzar una lluvia de meteoros instantánea de 3 de daño místico.' }
        ]
      },
      lore: 'Un brujo de mente inestable obsesionado con la piromancia y la caída de bólidos celestes, famoso por descubrir yacimientos a gran distancia.'
    },
    {
      name: 'Jeddite',
      type: 'Magia',
      className: 'Brujo (Warlock)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Brujería (Sorcery)',
        normal: 'Instantáneo: +1 Potencia\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Potencia\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Hechicería Misteriosa',
        cards: [
          { level: 1, name: 'Canalización Sutil I', effect: 'Ganas 1 punto de Maná cada vez que un hechizo enemigo sea cancelado o resista.' },
          { level: 4, name: 'Fuerza Secreta IV', effect: 'El coste de tus hechizos de la escuela de Tierra disminuye en 1 punto de Maná (mínimo 1).' },
          { level: 6, name: 'Hechicería Suprema VI', effect: 'Una vez por combate, puedes duplicar el efecto de un hechizo de nivel 1 que hayas lanzado en esta ronda.' }
        ]
      },
      lore: 'Un místico subterráneo de Bracada que huyó a las cuevas de Nighon para estudiar las artes arcanas prohibidas de la hechicería de sangre sin restricciones.'
    },
    {
      name: 'Lorelei',
      type: 'Poder',
      className: 'Cacique (Overlord)',
      stats: { atk: 3, def: 1, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Exploración (Scouting)',
        normal: 'Puedes revelar 1 loseta de mapa adyacente extra al explorar.',
        expert: 'Puedes revelar hasta 2 losetas de mapa adyacentes extra y obtener +1 de movimiento táctico verde.'
      },
      specialty: {
        name: 'Especialidad: Arpías',
        cards: [
          { level: 1, name: 'Filo de Garra I', effect: 'Tus unidades de Arpías obtienen +1 de Ataque y +1 de Iniciativa.' },
          { level: 4, name: 'Ataque Fugaz IV', effect: 'Tus Arpías Brujas pueden atacar y regresar inmediatamente a su casilla de inicio sin sufrir represalias.' },
          { level: 6, name: 'Torbellino de Plumas VI', effect: 'Al inicio del combate, tus Arpías aturden a una unidad enemiga de nivel bronce o plata durante la primera ronda.' }
        ]
      },
      lore: 'Una cruel y experimentada comandante de Nighon que adiestra a las arpías subterráneas para convertirlas en garras implacables de asalto.'
    },
    {
      name: 'Mutare',
      type: 'Poder',
      className: 'Cacique (Overlord)',
      stats: { atk: 2, def: 1, power: 1, knowledge: 2 },
      initialSkill: {
        name: 'Tácticas (Tactics)',
        normal: 'Permite recolocar 1 de tus unidades en tu zona de inicio del combate antes de que empiece la primera ronda.',
        expert: 'Gasta 1 Corona para recolocar hasta 3 unidades de inicio y sumarles +1 a la Iniciativa durante la primera ronda.'
      },
      specialty: {
        name: 'Especialidad: Dragones',
        cards: [
          { level: 1, name: 'Aliento de Fuego I', effect: 'Tus unidades de tipo Dragones obtienen +1 de Ataque y +1 de Iniciativa.' },
          { level: 4, name: 'Escamas de Acero IV', effect: 'Los Dragones aliados reducen en 1 todo daño físico recibido y aumentan su HP máximo en +1.' },
          { level: 6, name: 'Furia Volcánica VI', effect: 'Una vez por combate, un Dragón aliado puede golpear a su objetivo e infligir daño completo a otra unidad adyacente.' }
        ]
      },
      lore: 'Consumida por el ansia de dominación absoluta, Mutare bebió la sangre de un dragón mitológico para transformarse en una temible señora de dragones.'
    },
    {
      name: 'Sephinroth',
      type: 'Magia',
      className: 'Brujo (Warlock)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Inteligencia (Intelligence)',
        normal: 'Al inicio de la partida, roba 1 carta de Conocimiento extra para tu mano.',
        expert: 'Tu límite de cartas de Conocimiento en mano aumenta en +1. Una vez por combate, puedes robar 2 cartas de Conocimiento descartando 1.'
      },
      specialty: {
        name: 'Especialidad: Recursos',
        cards: [
          { level: 1, name: 'Cristalización I', effect: 'Generas +1 de Cristal al inicio de cada ronda de recursos de manera pasiva.' },
          { level: 4, name: 'Mercado Negro IV', effect: 'Puedes intercambiar recursos con una tasa favorable de 1:1 en tu turno.' },
          { level: 6, name: 'Riqueza Mineral VI', effect: 'Inmediatamente ganas 3 de Oro y 1 de Madera o Cristal de la reserva.' }
        ]
      },
      lore: 'Una bruja misteriosa nacida de la realeza de Bracada que desertó a las profundidades de Nighon, usando sus poderes matemáticos para transmutar rocas en gemas y cristales raros.'
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
          { level: 1, name: 'Sangre de Sierpe I', effect: 'Tus unidades de tipo Dragón obtienen +1 de Defensa y +1 de HP.' },
          { level: 4, name: 'Rugido Ancestral IV', effect: 'Al inicio de la ronda de combate, tus Dragones aturden a una unidad de bronce enemiga.' },
          { level: 6, name: 'Legado del Caudillo VI', effect: 'Una vez por combate, tu unidad de Dragones realiza un ataque gratis con +2 de Ataque.' }
        ]
      },
      lore: 'El héroe inmortal que en una de sus múltiples encarnaciones lideró como Caudillo (Overlord) de Nighon para dominar a los dragones del inframundo.'
    }
  ],
  rampart: [
    {
      name: 'Clancy',
      type: 'Poder',
      className: 'Explorador (Ranger)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Logística (Logistics)',
        normal: 'Tus héroes ganan +1 Punto de Movimiento (PM) al iniciar su turno si están en losetas de camino.',
        expert: 'Gasta 1 Corona para añadir +2 PM incondicionales al movimiento terrestre del héroe en este turno.'
      },
      specialty: {
        name: 'Especialidad: Unicornios',
        cards: [
          { level: 1, name: 'Crines de Luz I', effect: 'Tus Unicornios obtienen +1 de Defensa y +1 de Iniciativa.' },
          { level: 4, name: 'Halo de Pureza IV', effect: 'Tus Unicornios otorgan inmunidad a hechizos de nivel 1 y 2 a todas las unidades aliadas adyacentes.' },
          { level: 6, name: 'Carga Radiante VI', effect: 'Una vez por combate, tus Unicornios pueden cargar infligiendo +2 de daño y aplicando ceguera.' }
        ]
      },
      lore: 'Un explorador elfo que posee una afinidad mística con los unicornios de AvLee, liderándolos con presteza y elegancia.'
    },
    {
      name: 'Gelu',
      type: 'Poder',
      className: 'Explorador (Ranger)',
      stats: { atk: 3, def: 1, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Tiro con Arco (Archery)',
        normal: 'Continuo: Durante esta ronda de combate, tus unidades a distancia obtienen +1 Ataque si el objetivo es una unidad no adyacente .Tus unidades aliadas de ataque a distancia infligen +1 de daño físico.',
        expert: 'Continuo: Hasta el final de la siguiente ronda de combate, tus unidades de ataque a distancia obtienen +1 de Iniciativa y +1 Ataque si el objetivo es una unidad no adyacente.'
      },
      specialty: {
        name: 'Especialidad: Tiradores de Élite',
        cards: [
          { level: 1, name: 'Entrenamiento del Bosque I', effect: 'Puedes gastar 1 de Oro para transformar a tus Elfos de tu ejército en letales Tiradores de Élite.' },
          { level: 4, name: 'Disparo Silencioso IV', effect: 'Tus Tiradores de Élite ganan +1 de Iniciativa y sus ataques ignoran cualquier obstáculo físico.' },
          { level: 6, name: 'Salva Letal VI', effect: 'Una vez por combate, designa un objetivo. Tus Tiradores de Élite disparan dos veces consecutivas sin represalias.' }
        ]
      },
      lore: 'Un héroe legendario de sangre mestiza, capitán de la Guardia Forestal de AvLee y custodio de la devastadora Espada de Armagedón.',
      quote: 'Nuestras flechas no viajan con el viento, viajan impulsadas por la justicia de los bosques ancestrales.'
    },
    {
      name: 'Gem',
      type: 'Magia',
      className: 'Druida (Druid)',
      stats: { atk: 1, def: 0, power: 2, knowledge: 3 },
      initialSkill: {
        name: 'Primeros Auxilios (First Aid)',
        normal: 'Al final de un combate, sana 1 herida a una de tus unidades sobrevivientes.',
        expert: 'Al final de un combate, sana hasta 2 heridas repartidas entre tus unidades sobrevivientes o revive una unidad de nivel bronce destruida.'
      },
      specialty: {
        name: 'Especialidad: Primeros Auxilios',
        cards: [
          { level: 1, name: 'Tienda Druídica I', effect: 'Tu Tienda de Primeros Auxilios recupera +2 HP en lugar de 1 y puede usarse dos veces por ronda.' },
          { level: 4, name: 'Aura Sanadora IV', effect: 'Al inicio del combate, todas tus unidades de nivel bronce recuperan 1 HP perdido.' },
          { level: 6, name: 'Rejuvenecer VI', effect: 'Gasta 3 de Maná para revivir una unidad destruida de nivel bronce o plata con 2 HP.' }
        ]
      },
      lore: 'Una hechicera refugiada de Enroth que abrazó las enseñanzas pacifistas de los druidas en AvLee, sanando las heridas del campo de batalla.'
    },
    {
      name: 'Ivor',
      type: 'Poder',
      className: 'Explorador (Ranger)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Ofensiva (Offence)',
        normal: 'Instantáneo: +1 Ataque\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Elfos',
        cards: [
          { level: 1, name: 'Disparo Veloz I', effect: 'Tus Elfos y Grandes Elfos obtienen +1 de Ataque y +1 de Iniciativa.' },
          { level: 4, name: 'Flechas de Plata IV', effect: 'Tus Elfos ignoran 1 punto de Defensa física de la unidad enemiga al disparar.' },
          { level: 6, name: 'Fuego de Cobertura VI', effect: 'Una vez por combate, cuando una unidad enemiga cargue hacia una de tus tropas, tus Elfos realizan un ataque inmediato gratuito.' }
        ]
      },
      lore: 'Un experimentado explorador elfo que comanda las fuerzas de arqueros de AvLee, con un ojo infalible y reflejos felinos.'
    },
    {
      name: 'Melodia',
      type: 'Magia',
      className: 'Druida (Druid)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Suerte (Luck)',
        normal: 'Te permite re-lanzar un dado de ataque una vez por combate.',
        expert: 'Te permite re-lanzar hasta dos dados de ataque o defensa por combate, y ganas una ficha de Moral Positiva.'
      },
      specialty: {
        name: 'Especialidad: Fortuna',
        cards: [
          { level: 1, name: 'Aura de Fortuna I', effect: 'Todas tus tropas aliadas ganan inmunidad a la Moral Negativa.' },
          { level: 4, name: 'Suerte del Destino IV', effect: 'Cada vez que lances un hechizo de Luz o Agua, una unidad aliada obtiene +1 de Iniciativa en esta ronda.' },
          { level: 6, name: 'Canto Melódico VI', effect: 'Una vez por combate, tu unidad seleccionada causa daño crítico automático en su ataque sin necesidad de lanzar dado.' }
        ]
      },
      lore: 'Una druida cantarína cuyo espíritu está en sintonía con las hadas y los elfos de la fortuna, llenando de entusiasmo místico a las tropas de AvLee.'
    },
    {
      name: 'Mephala',
      type: 'Poder',
      className: 'Explorador (Ranger)',
      stats: { atk: 1, def: 3, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Liderazgo (Leadership)',
        normal: 'Tus unidades aliadas son inmunes a los efectos de Moral Negativa.',
        expert: 'Tus unidades aliadas son inmunes a Moral Negativa. Además, gana una ficha de Moral Positiva al inicio de cualquier combate.'
      },
      specialty: {
        name: 'Especialidad: Armadura',
        cards: [
          { level: 1, name: 'Escudo Arbóreo I', effect: 'Tus unidades de tipo Enanos y Dendroides obtienen +1 de Defensa y +1 de HP.' },
          { level: 4, name: 'Pared de Escudos IV', effect: 'Una vez por combate, designa una unidad. Toda herida física que sufra se reduce a un máximo de 1 daño.' },
          { level: 6, name: 'Fortaleza Viviente VI', effect: 'Tus tropas de nivel bronce obtienen inmunidad a los ataques mágicos de nivel 1 durante todo el combate.' }
        ]
      },
      lore: 'Una comandante defensiva sumamente fría y analítica, cuyas tácticas de bloqueo y resistencia agotan a los atacantes.'
    },
    {
      name: 'Tarnum',
      type: 'Poder',
      className: 'Explorador (Ranger)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Liderazgo (Leadership)',
        normal: 'Tus unidades aliadas son inmunes a los efectos de Moral Negativa.',
        expert: 'Gasta 1 Corona al inicio del combate para añadir una ficha de Moral Positiva a todas tus unidades.'
      },
      specialty: {
        name: 'Especialidad: Tiradores de Élite',
        cards: [
          { level: 1, name: 'Instinto del Bosque I', effect: 'Tus arqueros ganan +1 de Defensa física y sus disparos ignoran la penalización por distancia.' },
          { level: 4, name: 'Guía de Francotirador IV', effect: 'Tus arqueros aliados obtienen +1 de Iniciativa y se mueven una casilla extra.' },
          { level: 6, name: 'Salva Implacable VI', effect: 'Una vez por combate, tus arqueros pueden disparar un tiro de penetración gratis infligiendo daño místico.' }
        ]
      },
      lore: 'El héroe inmortal que en esta encarnación asume el manto de un ágil explorador de AvLee para proteger a los elfos y adiestrar a los mejores tiradores forestales.'
    }
  ],
  torre: [
    {
      name: 'Cyra',
      type: 'Magia',
      className: 'Mago (Wizard)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Diplomacia (Diplomacy)',
        normal: 'Reduce el coste de reclutamiento de unidades neutrales o de facción en 1 de Oro.',
        expert: 'Reduce el coste de reclutamiento en 1 de Oro y te permite reclutar 1 unidad neutral directamente de losetas de mapa adyacentes.'
      },
      specialty: {
        name: 'Especialidad: Prisa',
        cards: [
          { level: 1, name: 'Aura de Celeridad I', effect: 'Tu hechizo "Prisa" cuesta 1 punto menos de Maná e inflige +1 de movimiento táctico verde.' },
          { level: 4, name: 'Viento Conductor IV', effect: 'Toda unidad aliada bajo el efecto de Prisa gana +1 de Iniciativa y ignora el penalizador de terreno difícil.' },
          { level: 6, name: 'Torbellino Temporal VI', effect: 'Una vez por combate, puedes lanzar un hechizo de Prisa masivo que afecta a todas tus tropas terrestres.' }
        ]
      },
      lore: 'Una maga de Bracada dotada de un carisma deslumbrante que convence a monstruos errantes de unirse a su causa, acelerando el paso de sus tropas con magia de aire.'
    },
    {
      name: 'Dracon',
      type: 'Magia',
      className: 'Mago (Wizard)',
      stats: { atk: 1, def: 0, power: 3, knowledge: 2 },
      initialSkill: {
        name: 'Sabiduría (Wisdom)',
        normal: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(3) en lugar de Buscar(2).',
        expert: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(4) en lugar de Buscar(3).'
      },
      specialty: {
        name: 'Especialidad: Encantadores',
        cards: [
          { level: 1, name: 'Aura Mística I', effect: 'Puedes gastar 1 de Oro para transformar a tus Monjes o Magos en poderosos Encantadores.' },
          { level: 4, name: 'Conjuro de Encantador IV', effect: 'Tus Encantadores lanzan un hechizo aleatorio de nivel 1 gratuito al inicio de cada ronda de combate.' },
          { level: 6, name: 'Barrera del Sabio VI', effect: 'Una vez por combate, tus Encantadores son inmunes al primer ataque místico o físico de esta ronda.' }
        ]
      },
      lore: 'Un talentoso mago de Bracada célebre por su obsesión de convertirse en el mayor cazador de dragones de la historia, adiestrando a los Encantadores más poderosos.'
    },
    {
      name: 'Iona',
      type: 'Poder',
      className: 'Alquimista (Alchemist)',
      stats: { atk: 2, def: 1, power: 1, knowledge: 2 },
      initialSkill: {
        name: 'Inteligencia (Intelligence)',
        normal: 'Al inicio de la partida, roba 1 carta de Conocimiento extra para tu mano.',
        expert: 'Tu límite de cartas de Conocimiento en mano aumenta en +1. Una vez por combate, puedes robar 2 cartas de Conocimiento descartando 1.'
      },
      specialty: {
        name: 'Especialidad: Genios',
        cards: [
          { level: 1, name: 'Viento Planar I', effect: 'Tus Genios y Genios Maestros obtienen +1 de Ataque y +1 de Iniciativa.' },
          { level: 4, name: 'Deseo de Genio IV', effect: 'Tus Genios pueden lanzar un hechizo benéfico gratuito de nivel 1 sobre un aliado una vez por combate.' },
          { level: 6, name: 'Tempestad Espiritual VI', effect: 'Una vez por combate, tus Genios infligen +2 de daño místico al golpear a un enemigo vivo.' }
        ]
      },
      lore: 'Una alquimista experta en la contención de energías elementales que mantiene una estrecha alianza con los Genios de Bracada.'
    },
    {
      name: 'Josephine',
      type: 'Poder',
      className: 'Alquimista (Alchemist)',
      stats: { atk: 2, def: 1, power: 1, knowledge: 2 },
      initialSkill: {
        name: 'Brujería (Sorcery)',
        normal: 'Instantáneo: +1 Potencia\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Potencia\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Golems',
        cards: [
          { level: 1, name: 'Golems Reforzados I', effect: 'Tus Golems ganan +1 de Defensa y +2 de HP máximo.' },
          { level: 4, name: 'Chispa de Animación IV', effect: 'Al inicio del combate, si tienes Golems aliados, ganan +1 de Iniciativa y se mueven 1 casilla extra.' },
          { level: 6, name: 'Giga Golem VI', effect: 'Una vez por combate, puedes gastar 2 de Oro para revivir inmediatamente una unidad de Golems destruida.' }
        ]
      },
      lore: 'Una brillante alquimista con una destreza sin parangón para esculpir y animar autómatas de piedra y metal en Bracada, potenciando su resistencia.'
    },
    {
      name: 'Solmyr',
      type: 'Magia',
      className: 'Mago (Wizard)',
      stats: { atk: 0, def: 0, power: 4, knowledge: 2 },
      initialSkill: {
        name: 'Brujería (Sorcery)',
        normal: 'Instantáneo: +1 Potencia\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Potencia\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Relámpago en Cadena',
        cards: [
          { level: 1, name: 'Chispa Conductora I', effect: 'Comienzas la partida con el hechizo "Relámpago en Cadena" ya memorizado. Causa +1 de daño místico.' },
          { level: 4, name: 'Arco Eléctrico IV', effect: 'Tu Relámpago en Cadena rebota en 1 objetivo adicional sin reducir su potencia.' },
          { level: 6, name: 'Furia de las Nubes VI', effect: 'Una vez por combate, reduce el coste de tu Relámpago en Cadena en 2 puntos de Maná (mínimo 1).' }
        ]
      },
      lore: 'Un noble e inmensamente poderoso genio de aire que juró lealtad incondicional al Rey Gavin Magnus de Bracada tras ser liberado de una prisión milenaria.',
      quote: 'He presenciado la caída de dinastías enteras. Vuestra efímera existencia se desvanecerá bajo mi relámpago azul.'
    },
    {
      name: 'Torosar',
      type: 'Poder',
      className: 'Alquimista (Alchemist)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Misticismo (Mysticism)',
        normal: 'Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En lugar de descartar la carta de Hechizo, vuelve a tu mano.',
        expert: 'Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En lugar de descartar la carta de Hechizo y todas las demás cartas jugadas junto con ella, llévalas de vuelta a tu mano.'
      },
      specialty: {
        name: 'Especialidad: Balística',
        cards: [
          { level: 1, name: 'Disparo de Alquimista I', effect: 'Tus Golems de Hierro aliados obtienen +1 de Defensa y tu Balista causa +1 de daño físico.' },
          { level: 4, name: 'Ingeniería Mecánica IV', effect: 'Tu Balista ignora el escudo de defensa física de las unidades enemigas.' },
          { level: 6, name: 'Bomba de Alquimia VI', effect: 'Una vez por combate, tu Balista puede disparar una bomba que causa 2 de daño físico a todas las tropas adyacentes al objetivo.' }
        ]
      },
      lore: 'Un pragmático alquimista especializado en ingeniería militar de Bracada, partidario de las máquinas estables antes que los caprichosos conjuros.'
    }
  ],
  infierno: [
    {
      name: 'Ash',
      type: 'Magia',
      className: 'Hereje (Heretic)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Ojo de Águila (Eagle Eye)',
        normal: 'Al inicio de la partida, puedes robar 1 carta adicional de tu mazo de magia de forma gratuita.',
        expert: 'Gasta 1 Corona para copiar un hechizo que acaba de lanzar tu oponente (lo memorizas de forma temporal durante este combate).'
      },
      specialty: {
        name: 'Especialidad: Sed de Sangre',
        cards: [
          { level: 1, name: 'Furia de Combate I', effect: 'Tus unidades de combate cuerpo a cuerpo infligen +1 de daño físico si están bajo los efectos del hechizo Sed de Sangre.' },
          { level: 4, name: 'Sed de Sangre Masiva IV', effect: 'El coste del hechizo Sed de Sangre se reduce en 1 de Maná (mínimo 1). Además, afecta a todas las unidades en tu zona de despliegue.' },
          { level: 6, name: 'Frenesí Sanguinario VI', effect: 'Una vez por combate, puedes lanzar el hechizo Sed de Sangre de forma gratuita. La unidad seleccionada gana +1 de Iniciativa y puede atacar dos veces.' }
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
        name: 'Exploración (Pathfinding)',
        normal: 'Tu héroe obtiene +1 Punto de Movimiento (PM) verde extra en el mapa táctico.',
        expert: 'Tu héroe obtiene +1 Punto de Movimiento (PM) verde extra en el mapa táctico. Además, ignora los penalizadores de terreno difícil en la exploración.'
      },
      specialty: {
        name: 'Especialidad: Cerberos',
        cards: [
          { level: 1, name: 'Colmillos de Cerbero', effect: 'Tus unidades de Sabuesos de las Tinieblas y Cerberos ganan +1 de Ataque y +1 de Iniciativa.' },
          { level: 4, name: 'Ataque de Tres Cabezas', effect: 'Tus Cerberos atacan simultáneamente al objetivo y a dos unidades adyacentes a este sin sufrir represalias.' },
          { level: 6, name: 'Mordisco de Cérbero', effect: 'Los ataques de tus Cerberos causan la dolencia "Hemorragia", infligiendo 1 daño físico al inicio de la siguiente ronda táctica.' }
        ]
      },
      lore: 'Una domadora de bestias infernales que entrena a los temibles sabuesos de tres cabezas para desgarrar las líneas de vanguardia enemigas.'
    },
    {
      name: 'Octavia',
      type: 'Poder',
      className: 'Demonio (Demoniac)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Aprendizaje (Learning)',
        normal: 'Al inicio de la partida o al subir de nivel, puedes robar 1 carta adicional de tu mazo y luego descartar 1.',
        expert: 'Gasta 1 Corona para buscar en tu mazo de cartas de habilidad una carta de nivel 1 o 2 y añadirla directamente a tu mano.'
      },
      specialty: {
        name: 'Especialidad: Patrimonio',
        cards: [
          { level: 1, name: 'Tributo de Almas I', effect: 'Generas +1 de Oro al inicio de cada Fase de Recursos de forma pasiva.' },
          { level: 4, name: 'Impuesto de Sheogh IV', effect: 'El coste de reclutamiento de tus unidades aliadas de Inferno se reduce en 1 de Oro.' },
          { level: 6, name: 'Riqueza Imperial VI', effect: 'Una vez por ronda de mapa, puedes gastar 2 de Oro para construir inmediatamente cualquier edificio de tu ciudad sin coste de madera o piedra.' }
        ]
      },
      lore: 'Una calculadora oficial de las legiones de Sheogh experta en la recaudación tributaria y la logística material de la campaña del Caos.'
    },
    {
      name: 'Rashka',
      type: 'Poder',
      className: 'Demonio (Demoniac)',
      stats: { atk: 3, def: 1, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Aprendizaje (Learning)',
        normal: 'Al inicio de la partida o al subir de nivel, puedes robar 1 carta adicional de tu mazo y luego descartar 1.',
        expert: 'Gasta 1 Corona para buscar en tu mazo de cartas de habilidad una carta de nivel 1 o 2 y añadirla directamente a tu mano.'
      },
      specialty: {
        name: 'Especialidad: Efreets',
        cards: [
          { level: 1, name: 'Escudo de Llamas', effect: 'Tus Efreets y Sultanes de Efreet ganan +1 de Defensa y +1 de Iniciativa.' },
          { level: 4, name: 'Cuerpo Incandescente', effect: 'El escudo de llamas de tus Efreets devuelve +1 herida física a cualquier atacante cuerpo a cuerpo.' },
          { level: 6, name: 'Torbellino de Fuego', effect: 'Una vez por combate, un Efreet aliado puede explotar en llamas infligiendo 2 de daño físico a todas las tropas enemigas adyacentes.' }
        ]
      },
      lore: 'Un brutal y colérico señor del fuego que somete a los efreets más salvajes a su estricta disciplina militar.'
    },
    {
      name: 'Xyron',
      type: 'Magia',
      className: 'Hereje (Heretic)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Sabiduría (Wisdom)',
        normal: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(3) en lugar de Buscar(2).',
        expert: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(4) en lugar de Buscar(3).'
      },
      specialty: {
        name: 'Especialidad: Infierno',
        cards: [
          { level: 1, name: 'Fuego Infernal I', effect: 'Comienzas el juego con el hechizo "Infierno" memorizado de forma gratuita. Causa +1 de daño místico.' },
          { level: 4, name: 'Llamas Azotadoras IV', effect: 'Tu hechizo "Infierno" inflige +2 de daño místico y aplica un penalizador de -1 a la defensa física del objetivo.' },
          { level: 6, name: 'Lluvia de Fuego del Foso VI', effect: 'Una vez por combate, puedes lanzar el hechizo "Infierno" pagando 2 de Maná menos (mínimo 1).' }
        ]
      },
      lore: 'Un conjurador proscrito obsesionado con desatar fuegos eternos, capaz de fundir ejércitos con un devastador hechizo de tormenta de fuego abisal.'
    },
    {
      name: 'Zydar',
      type: 'Magia',
      className: 'Hereje (Heretic)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Brujería (Sorcery)',
        normal: 'Instantáneo: +1 Potencia\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Potencia\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Brujería',
        cards: [
          { level: 1, name: 'Amplificación Arcana I', effect: 'Tus hechizos destructivos que causan daño místico infligen +1 de daño adicional.' },
          { level: 4, name: 'Canalización de Azufre IV', effect: 'Cada vez que tu héroe lance un hechizo místico de nivel 1 o 2, recupera 1 punto de Maná de forma instantánea.' },
          { level: 6, name: 'Torrente Destructivo VI', effect: 'Una vez por combate, puedes relanzar un hechizo místico de tu pila de descartes pagando la mitad de su coste de Maná.' }
        ]
      },
      lore: 'Un refinado y calculador hereje que extrae poder místico directamente del núcleo del caos, amplificando cada conjuro con efectos corrosivos de gran intensidad.'
    }
  ],
  stronghold: [
    {
      name: 'Crag Hack',
      type: 'Poder',
      className: 'Bárbaro (Barbarian)',
      stats: { atk: 3, def: 1, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Ofensiva (Offense)',
        normal: 'Instantáneo: +1 Ataque\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Ofensiva',
        cards: [
          { level: 1, name: 'Ataque Implacable I', effect: 'Tus tropas de combate cuerpo a cuerpo infligen +1 de daño físico.' },
          { level: 4, name: 'Ataque Implacable IV', effect: 'Tus tropas cuerpo a cuerpo infligen +2 de daño físico y ganan +1 de Iniciativa.' },
          { level: 6, name: 'Ataque Implacable VI', effect: 'Una vez por combate, puedes relanzar todos los dados de ataque fallidos de tus unidades cuerpo a cuerpo.' }
        ]
      },
      lore: 'El bárbaro más famoso de Antagarich, un guerrero temerario que confía únicamente en la fuerza de su brazo y el filo de su hacha.',
      quote: '¡La mejor defensa es enterrar profundamente tu hacha en el enemigo antes de que pueda armarse!'
    },
    {
      name: 'Dessa',
      type: 'Magia',
      className: 'Mago de Batalla (Battle Mage)',
      stats: { atk: 2, def: 1, power: 1, knowledge: 2 },
      initialSkill: {
        name: 'Logística (Logistics)',
        normal: 'Tu héroe obtiene +1 Punto de Movimiento (PM) verde extra en el mapa de exploración.',
        expert: 'Tu héroe obtiene +1 Punto de Movimiento (PM) verde extra. Además, ignora los penalizadores de fango o desierto en la exploración.'
      },
      specialty: {
        name: 'Especialidad: Logística',
        cards: [
          { level: 1, name: 'Paso Veloz I', effect: 'Tu héroe obtiene +1 de movimiento extra en el mapa táctico de combate.' },
          { level: 4, name: 'Paso Veloz IV', effect: 'El coste de movimiento de tus unidades para cruzar terrenos difíciles se reduce a la mitad.' },
          { level: 6, name: 'Paso Veloz VI', effect: 'Una vez por ronda de mapa, tu héroe puede teletransportarte inmediatamente a cualquier casilla explorada a 3 de distancia.' }
        ]
      },
      lore: 'Un chamán de Krewlod dotado de una sintonía profunda con las corrientes tectónicas, permitiéndole acelerar el avance de sus tropas.',
      quote: 'El camino se dobla ante nuestra voluntad. ¡Acelerad el paso!'
    },
    {
      name: 'Gundula',
      type: 'Magia',
      className: 'Mago de Batalla (Battle Mage)',
      stats: { atk: 2, def: 1, power: 2, knowledge: 1 },
      initialSkill: {
        name: 'Sabiduría (Wisdom)',
        normal: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(3) en lugar de Buscar(2).',
        expert: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(4) en lugar de Buscar(3).'
      },
      specialty: {
        name: 'Especialidad: Ralentizar',
        cards: [
          { level: 1, name: 'Inercia Arcana I', effect: 'Comienzas el juego con el hechizo "Ralentizar" memorizado de forma gratuita. Reduce la iniciativa de 1 unidad enemiga en -1.' },
          { level: 4, name: 'Inercia Arcana IV', effect: 'Tu hechizo "Ralentizar" ahora reduce la iniciativa de 2 unidades enemigas en -2 y les quita 1 PM táctico.' },
          { level: 6, name: 'Inercia Arcana VI', effect: 'Una vez por combate, puedes lanzar el hechizo "Ralentizar" de forma masiva afectando a todo el ejército enemigo sin coste de Maná.' }
        ]
      },
      lore: 'Una estratega bárbara de intelecto gélido, famosa por ralentizar el ímpetu de las cargas enemigas antes de desatar la furia de su tribu.'
    },
    {
      name: 'Shiva',
      type: 'Poder',
      className: 'Bárbaro (Barbarian)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Búsqueda (Scouting)',
        normal: 'Tu héroe obtiene +1 de movimiento extra y revela 1 loseta oculta adyacente al inicio de su turno.',
        expert: 'Tu héroe obtiene +2 de movimiento extra y revela hasta 2 losetas ocultas adyacentes al inicio de su turno.'
      },
      specialty: {
        name: 'Especialidad: Aves del Trueno',
        cards: [
          { level: 1, name: 'Nido de Tormentas I', effect: 'Tus Rocs y Aves del Trueno ganan +1 de Defensa y +1 de Iniciativa.' },
          { level: 4, name: 'Nido de Tormentas IV', effect: 'Tus Rocs y Aves del Trueno causan +1 daño físico adicional y aplican parálisis temporal al atacar.' },
          { level: 6, name: 'Nido de Tormentas VI', effect: 'Una vez por combate, tus Aves del Trueno convocan un rayo que inflige 2 de daño místico directo al objetivo.' }
        ]
      },
      lore: 'Una jinete bárbara indómita criada en las cimas escarpadas, capaz de silbar en la frecuencia de las tormentas de montaña.'
    },
    {
      name: 'Tarnum',
      type: 'Poder',
      className: 'Bárbaro (Barbarian)',
      stats: { atk: 3, def: 1, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Ofensiva (Offense)',
        normal: 'Instantáneo: +1 Ataque\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Ofensiva',
        cards: [
          { level: 1, name: 'Furia de Krewlod I', effect: 'Tus unidades cuerpo a cuerpo infligen +1 de daño físico.' },
          { level: 4, name: 'Furia de Krewlod IV', effect: 'Tus unidades de nivel bronce ganan +1 de Iniciativa y son inmunes al miedo o moral negativa.' },
          { level: 6, name: 'Furia de Krewlod VI', effect: 'Una vez por combate, cuando una unidad aliada ataque, puedes duplicar su daño físico en esta ronda.' }
        ]
      },
      lore: 'El Héroe Inmortal que comenzó sus andanzas como el temido tirano bárbaro de Krewlod, empuñando la espada de la liberación.'
    },
    {
      name: 'Yog',
      type: 'Poder',
      className: 'Bárbaro (Barbarian)',
      stats: { atk: 2, def: 2, power: 1, knowledge: 1 },
      initialSkill: {
        name: 'Ofensiva (Offense)',
        normal: 'Instantáneo: +1 Ataque\nLuego, roba 1 carta.',
        expert: 'Instantáneo: +2 Ataque\nLuego, roba 1 carta.'
      },
      specialty: {
        name: 'Especialidad: Cíclopes',
        cards: [
          { level: 1, name: 'Fuerza Monstruosa I', effect: 'Tus Cíclopes obtienen +1 de Ataque a distancia y +1 de Iniciativa.' },
          { level: 4, name: 'Fuerza Monstruosa IV', effect: 'Los ataques de tus Cíclopes infligen +1 de daño de asedio adicional contra murallas u obstáculos.' },
          { level: 6, name: 'Fuerza Monstruosa VI', effect: 'Una vez por combate, tus Cíclopes pueden disparar a dos objetivos diferentes en el mismo turno táctico.' }
        ]
      },
      lore: 'Nacido de un genio de Bracada y una bárbara de Krewlod, Yog renunció por completo al uso de la magia para abrazar su herencia de guerrero.'
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
          { level: 1, name: 'Puntería de Balista I', effect: 'Tu Balista aliada causa +1 de daño físico e ignora la defensa del rival.' },
          { level: 4, name: 'Puntería de Balista IV', effect: 'Tu Balista aliada puede disparar dos veces en su turno si descartas 1 carta de Ataque.' },
          { level: 6, name: 'Puntería de Balista VI', effect: 'Una vez por combate, tu Balista realiza un disparo pesado de precisión que elimina instantáneamente una miniatura de bronce.' }
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
        normal: 'Al final de un combate, recuperas una miniatura de nivel bronce de tu ejército destruida de forma gratuita.',
        expert: 'Tu tienda de primeros auxilios puede curar 2 HP a cualquier unidad aliada durante el combate una vez por ronda.'
      },
      specialty: {
        name: 'Especialidad: Piel de Piedra',
        cards: [
          { level: 1, name: 'Protección Rocosa I', effect: 'Comienzas el juego con el hechizo "Piel de Piedra" memorizado. Otorga +1 de Defensa adicional.' },
          { level: 4, name: 'Protección Rocosa IV', effect: 'Tu hechizo "Piel de Piedra" cuesta 1 de Maná menos (mínimo 1) y afecta a todas las unidades de bronce aliadas.' },
          { level: 6, name: 'Protección Rocosa VI', effect: 'Una vez por combate, puedes lanzar "Piel de Piedra" de forma gratuita. Otorga +2 de Defensa y regenera 1 HP a las unidades afectadas al inicio de su turno.' }
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
          { level: 1, name: 'Escudo del Fango I', effect: 'Tus Basiliscos ganan +1 de Defensa y +1 de HP.' },
          { level: 4, name: 'Escudo del Fango IV', effect: 'Tus Basiliscos ganan +1 de movimiento táctico e inmunidad a los efectos de veneno.' },
          { level: 6, name: 'Escudo del Fango VI', effect: 'Una vez por combate, tu unidad de Basiliscos aliada puede atacar sin provocar represalia enemiga en esta ronda.' }
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
        name: 'Especialidad: Flecha Mágica',
        cards: [
          { level: 1, name: 'Saeta Arcana I', effect: 'Tu hechizo "Flecha Mágica" inflige +1 de daño místico y su coste de Maná se reduce en 1.' },
          { level: 4, name: 'Saeta Arcana IV', effect: 'Tu hechizo "Flecha Mágica" inflige +2 de daño místico y reduce la defensa mística del rival en 1.' },
          { level: 6, name: 'Saeta Arcana VI', effect: 'Una vez por combate, puedes lanzar "Flecha Mágica" de forma gratuita. El proyectil rebota e inflige daño completo a un segundo enemigo.' }
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
        name: 'Especialidad: Elementales de Magma',
        cards: [
          { level: 1, name: 'Fuerza de Magma I', effect: 'Tus Elementales de Magma obtienen +1 de Ataque y +1 de Defensa.' },
          { level: 4, name: 'Fuerza de Magma IV', effect: 'Tus Elementales de Magma tienen +2 de HP máximo e infligen +1 de daño de fuego al contraatacar.' },
          { level: 6, name: 'Fuerza de Magma VI', effect: 'Una vez por combate, tus Elementales de Magma pueden desatar una erupción que inflige 2 de daño físico a todas las tropas adyacentes.' }
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
          { level: 1, name: 'Llamas Sagradas I', effect: 'Tu hechizo "Muro de Fuego" inflige +2 de daño místico adicional a cualquier enemigo que lo cruce.' },
          { level: 4, name: 'Llamas Sagradas IV', effect: 'Tus hechizos de Fuego aumentan su potencia en +1 por cada Fénix aliado presente.' },
          { level: 6, name: 'Llamas Sagradas VI', effect: 'Una vez por combate, puedes invocar un "Muro de Fuego" gratuito en cualquier fila del tablero táctico.' }
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
        normal: 'Tu héroe obtiene +1 Punto de Movimiento (PM) verde en el mapa.',
        expert: 'Tu héroe obtiene +1 de movimiento extra en el mapa y puede ignorar penalizaciones de terreno en un turno.'
      },
      specialty: {
        name: 'Especialidad: Elementales de Magia',
        cards: [
          { level: 1, name: 'Flujo Mágico I', effect: 'Tus Elementales de Magia obtienen +1 de Defensa y son inmunes a hechizos de nivel 1.' },
          { level: 4, name: 'Flujo Mágico IV', effect: 'Tus Elementales de Magia ganan +1 de Iniciativa y reducen el coste de tus hechizos mágicos en 1.' },
          { level: 6, name: 'Flujo Mágico VI', effect: 'Una vez por combate, tus Elementales de Magia pueden absorber el maná de un hechizo lanzado por el oponente para curarse por completo.' }
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
          { level: 1, name: 'Vórtice Elemental I', effect: 'Todos tus elementales aliados obtienen +1 de Ataque durante la primera ronda de combate.' },
          { level: 4, name: 'Vórtice Elemental IV', effect: 'Todos tus elementales aliados obtienen +1 de Defensa y reducen a la mitad el daño místico recibido.' },
          { level: 6, name: 'Vórtice Elemental VI', effect: 'Una vez por combate, puedes invocar de forma instantánea un grupo temporal de Elementales de Tormenta sin coste alguno.' }
        ]
      },
      lore: 'Una decidida viajera que lidera a los seres psíquicos de Confluencia mediante proyecciones de su propia mente.'
    },
    {
      name: 'Tarnum',
      type: 'Magia',
      className: 'Conjuradora (Elementalist)',
      stats: { atk: 1, def: 1, power: 2, knowledge: 2 },
      initialSkill: {
        name: 'Sabiduría (Wisdom)',
        normal: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(3) en lugar de Buscar(2).',
        expert: 'Instantáneo: El coste de comprar Hechizos en la Ciudad se reduce en 2 Oros. Al comprar Hechizos de tu Gremio de Magos, usa Buscar(4) en lugar de Buscar(3).'
      },
      specialty: {
        name: 'Especialidad: Encantadores',
        cards: [
          { level: 1, name: 'Esencia Arcana I', effect: 'Tus Encantadores obtienen +1 de Ataque y +1 de Iniciativa.' },
          { level: 4, name: 'Esencia Arcana IV', effect: 'Tus Encantadores lanzan un hechizo protector aleatorio gratuito sobre tus tropas al inicio de cada ronda táctica.' },
          { level: 6, name: 'Esencia Arcana VI', effect: 'Una vez por combate, tus Encantadores pueden duplicar el daño de su ataque mágico durante una ronda completa.' }
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
        normal: 'Tus unidades tienen probabilidad de obtener +1 daño físico si sacas un resultado positivo de moral.',
        expert: 'Gasta 1 Corona para que la unidad activa obtenga un golpe crítico automático en su siguiente ataque.'
      },
      specialty: {
        name: 'Especialidad: Curar',
        cards: [
          { level: 1, name: 'Rocío Marino I', effect: 'Comienzas con el hechizo "Curar" memorizado de forma gratuita. Recupera 2 HP en lugar de 1.' },
          { level: 4, name: 'Rocío Marino IV', effect: 'Tu hechizo "Curar" cuesta 1 de Maná menos (mínimo 1) y elimina cualquier estado alterado (parálisis, veneno).' },
          { level: 6, name: 'Rocío Marino VI', effect: 'Una vez por combate, puedes lanzar "Curar" de forma masiva para restaurar 2 HP a todas tus unidades aliadas.' }
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
        normal: 'Tu héroe obtiene +1 Punto de Movimiento (PM) verde en el mapa de exploración.',
        expert: 'Tu héroe obtiene +1 de movimiento extra en el mapa y puede ignorar penalizaciones de terreno en un turno.'
      },
      specialty: {
        name: 'Especialidad: Exploración',
        cards: [
          { level: 1, name: 'Vanguardia I', effect: 'Revela 1 loseta inexplorada adyacente al inicio de tu turno táctico sin coste de movimiento.' },
          { level: 4, name: 'Vanguardia IV', effect: 'Ganas +1 de Oro al explorar una nueva loseta de mapa de manera incondicional.' },
          { level: 6, name: 'Vanguardia VI', effect: 'Una vez por ronda de mapa, puedes teletransportarte directamente a cualquier loseta explorada a 4 casillas de distancia.' }
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
