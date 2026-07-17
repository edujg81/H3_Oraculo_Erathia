// Catálogo de las 32 Habilidades Secundarias oficiales de Heroes III: The
// Board Game. Extraído de SkillsBrowser.tsx para poder reutilizarse también
// como fuente de la base de conocimiento del oráculo Sandro (ver server.ts
// y src/data/knowledgeIndex.ts).

export interface BoardGameSkill {
  name: string;
  normal: string;
  expert: string;
  category: 'Combate' | 'Magia' | 'Aventura' | 'Economía' | 'Desarrollo' | 'Apoyo';
  description: string;
}

export const ALL_BOARD_GAME_SKILLS: BoardGameSkill[] = [
  {
    name: 'Magia de aire',
    normal: 'Permanente: +1 Poder para hechizos de la escuela de magia de aire.',
    expert: 'Cuando lances un Hechizo de la escuela de aire, puedes descartar esta carta y ganar +3 Poder.',
    category: 'Magia' as const,
    description: 'Afinidad elemental permanente que potencia los hechizos de la escuela de aire.'
  },
  {
    name: 'Magia de tierra',
    normal: 'Permanente: +1 Poder para hechizos de la escuela de magia de tierra.',
    expert: 'Cuando lances un Hechizo de la escuela de tierra, puedes descartar esta carta y ganar +3 Poder.',
    category: 'Magia' as const,
    description: 'Afinidad elemental permanente que potencia los hechizos de la escuela de tierra.'
  },
  {
    name: 'Magia de fuego',
    normal: 'Permanente: +1 Poder para hechizos de la escuela de magia de fuego.',
    expert: 'Cuando lances un Hechizo de la escuela de fuego, puedes descartar esta carta y ganar +3 Poder.',
    category: 'Magia' as const,
    description: 'Afinidad elemental permanente que potencia los hechizos de la escuela de fuego.'
  },
  {
    name: 'Magia de agua',
    normal: 'Permanente: +1 Poder para hechizos de la escuela de magia de agua.',
    expert: 'Cuando lances un Hechizo de la escuela de agua, puedes descartar esta carta y ganar +3 Poder.',
    category: 'Magia' as const,
    description: 'Afinidad elemental permanente que potencia los hechizos de la escuela de agua.'
  },
  {
    name: 'Magia básica del aire',
    normal: 'Permanente: En lugar de buscar en el mazo de hechizos, encuentra el primer Hechizo de magia de aire que haya en él y llévate el Hechizo a la mano.\nA continuación, vuelve a bajarar el mazo.',
    expert: 'Instantáneo: +3 Poder para un Hechizo de magia de aire.',
    category: 'Magia' as const,
    description: 'Conocimientos rudimentarios que facilitan la obtención y potenciación de hechizos de aire.'
  },
  {
    name: 'Magia básica de la tierra',
    normal: 'Permanente: En lugar de buscar en el mazo de hechizos, encuentra el primer Hechizo de magia de tierra que haya en él y llévate el Hechizo a la mano.\nA continuación, vuelve a bajarar el mazo.',
    expert: 'Instantáneo: +3 Potencia para un Hechizo de magia de tierra.',
    category: 'Magia' as const,
    description: 'Conocimientos rudimentarios que facilitan la obtención y potenciación de hechizos de tierra.'
  },
  {
    name: 'Magia básica del fuego',
    normal: 'Permanente: En lugar de buscar en el mazo de hechizos, encuentra el primer Hechizo de magia de fuego que haya en él y llévate el Hechizo a la mano.\nA continuación, vuelve a barajar el mazo.',
    expert: 'Instantáneo: +3 Potencia para un Hechizo de magia de fuego.',
    category: 'Magia' as const,
    description: 'Conocimientos rudimentarios que facilitan la obtención y potenciación de hechizos de fuego.'
  },
  {
    name: 'Magia básica del agua',
    normal: 'Permanente: En lugar de buscar en el mazo de hechizos, encuentra el primer Hechizo de magia de agua que haya en él y llévate el Hechizo a la mano.\nA continuación, vuelve a bajarar el mazo.',
    expert: 'Instantáneo: +3 Potencia para un Hechizo de magia de agua.',
    category: 'Magia' as const,
    description: 'Conocimientos rudimentarios que facilitan la obtención y potenciación de hechizos de agua.'
  },
  {
    name: 'Tiro con arco',
    normal: 'Continuo: Durante esta ronda de combate, tus unidades a distancia ganan +1 Ataque si el objetivo no es una unidad adyacente.',
    expert: 'Continuo: Hasta el final de la siguiente ronda de combate, todas tus unidades a distancia ganan +1 Iniciativa y +1 Ataque si el objetivo no es una unidad adyacente.',
    category: 'Combate' as const,
    description: 'Incrementa la letalidad, iniciativa y precisión táctica de tus unidades a distancia.'
  },
  {
    name: 'Armero',
    normal: 'Instantáneo: +1 Defensa.\nDespués, roba 1 carta.',
    expert: 'Instantáneo: +2 Defensa.\nDespués, roba 1 carta.',
    category: 'Combate' as const,
    description: 'Mejora la absorción de impactos físicos de tus tropas y repone tu mano táctica.'
  },
  {
    name: 'Artillería',
    normal: 'Instantáneo: Inflige 1 Herida a la unidad enemiga con menor Iniciativa.',
    expert: 'Instantáneo: Al utilizar la carta Balista, resuelve su efecto 3 veces contra el mismo objetivo.',
    category: 'Combate' as const,
    description: 'Domina el armamento pesado táctico para desatar ráfagas o golpes precisos contra las filas enemigas.'
  },
  {
    name: 'Balística',
    normal: 'Instantáneo: Juega esta carta durante un asedio.\nDestruya 1 muralla o puerta.',
    expert: 'Instantáneo: Juega esta carta durante un asedio.\nDestruye la Torre de arqueros.',
    category: 'Combate' as const,
    description: 'Optimiza los disparos de asedio para desmantelar las fortificaciones enemigas de forma letal.'
  },
  {
    name: 'Diplomacia',
    normal: 'Mapa: Por cada vivienda que tengas, roba 1 carta de la unidad neutral correspondiente.\nPodrás reclutar una de estas unidades si Pagas su coste de reclutamiento.',
    expert: 'Instantáneo: Ignora el combate con unidades neutrales en una zona cuya dificultad de la zona sea igual al nivel de tu héroe. Visita la zona. Tu héroe no gana experiencia.',
    category: 'Apoyo' as const,
    description: 'Facilita la asimilación pacífica de unidades salvajes y evita batallas costosas.'
  },
  {
    name: 'Vista de águila / Ojo de lince',
    normal: 'Instantáneo: Roba cartas del mazo de hechizos hasta que encuentres una carta de hechizo básico. Llévatela a la mano o descártala. Devuelve el resto de las cartas al mazo de hechizos y barájalo.',
    expert: 'Instantáneo: Roba cartas del mazo de hechizos hasta que encuentres una carta de hechizo avanzado. Llévatela a la mano o descártala. Devuelve el resto de las cartas al mazo de hechizos y barájalo.',
    category: 'Desarrollo' as const,
    description: 'Agudiza tus sentidos para asimilar y adquirir nuevos conjuros directamente del mazo.'
  },
  {
    name: 'Patrimonio',
    normal: 'Instantáneo: Gana 3 Oros.',
    expert: 'Instantáneo: Gana 6 Oros.',
    category: 'Economía' as const,
    description: 'Establece un cobro de tributos inmediato para inyectar capital de oro a tus arcas del reino.'
  },
  {
    name: 'Primeros auxilios',
    normal: 'Instantáneo: Retira 1 Herida de una de tus unidades.',
    expert: 'Instantáneo: Cuando utilices la carta Tienda de primeros auxilios, resuelve su efecto 3 veces contra el mismo objetivo.',
    category: 'Apoyo' as const,
    description: 'Sostiene la vitalidad de tus tropas de asalto sanando heridas críticas en el fragor de la batalla.'
  },
  {
    name: 'Inteligencia / Espionaje',
    normal: 'Instantáneo: Al comienzo de la ronda de combate, juega una carta de hechizo.\nDurante la ronda de combate sigues pudiendo jugar solo una carta de hechizo.',
    expert: 'Instantáneo: Al comienzo de la ronda de combate, juega una carta de hechizo.\nEste hechizo no cuenta para el límite de hechizos por ronda de combate.',
    category: 'Magia' as const,
    description: 'Otorga la capacidad táctica de adelantarse al orden de iniciativa lanzando magia de forma flexible.'
  },
  {
    name: 'Interferencia',
    normal: 'Instantáneo: +1 Defensa. Este efecto se puede utilizar para reducir el Daño de un Hechizo.',
    expert: 'Instantáneo: +2 Defensa. Este efecto se puede utilizar para reducir el Daño de un Hechizo.',
    category: 'Apoyo' as const,
    description: 'Crea una distorsión mágica defensiva que ampara a tus tropas de ataques y conjuros hostiles.'
  },
  {
    name: 'Liderazgo',
    normal: 'Instantáneo: Gana una ficha de Moral Positiva.',
    expert: 'Instantáneo: Roba 2 cartas.\nDespués, gana una ficha de Moral Positiva.',
    category: 'Combate' as const,
    description: 'Inculca valor supremo en el ejército, reponiendo opciones tácticas o ganando moral.'
  },
  {
    name: 'Aprendizaje',
    normal: 'Instantáneo: Juégala cuando el héroe esté a punto de subir de nivel. Aumenta su nivel de experiencia en medio nivel adicional.',
    expert: 'Instantáneo: Juégala cuando el héroe esté a punto de subir de nivel. Aumenta su nivel de experiencia en un nivel adicional y después retira esta carta.',
    category: 'Desarrollo' as const,
    description: 'Maximiza el provecho de tus hazañas para acelerar drásticamente el desarrollo de tu Héroe.'
  },
  {
    name: 'Logística',
    normal: 'Continuo: Al final de tu turno, mueve la miniatura de tu héroe a una zona vacía adyacente.',
    expert: 'Instantáneo: Tu héroe gana +1 de movimiento.',
    category: 'Aventura' as const,
    description: 'Incrementa el alcance y dinamismo de tus marchas tácticas sobre el mapa de aventura.'
  },
  {
    name: 'Suerte',
    normal: 'Continuo: Puedes volver a lanzar un dado de tesoro y de recurso una vez durante este turno.',
    expert: 'Continuo: Puedes volver a lanzar tantos dados como quieras una vez durante este turno.',
    category: 'Combate' as const,
    description: 'Invoca la buena fortuna para mitigar la aleatoriedad de los dados en momentos clave.'
  },
  {
    name: 'Misticismo',
    normal: 'Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En vez de descartar la carta de hechizo, devuélvela a tu mano.',
    expert: 'Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En vez de descartar la carta de Hechizo y el resto de las cartas que juegues con ella, devuélvelas a tu mano.',
    category: 'Magia' as const,
    description: 'Canalización sagaz de energía mágica que permite reciclar conjuros ya lanzados.'
  },
  {
    name: 'Nigromancia',
    normal: 'Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Refuerza una de tus unidades Bronce o Plata por la mitad del coste en Oro (redondeado hacia abajo).',
    expert: 'Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Refuerza cualquiera de tus unidades por la mitad del coste en Oro (redondeado hacia abajo).',
    category: 'Apoyo' as const,
    description: 'Anima los restos de las bajas enemigas para expandir tus propias filas de no-muertos a un precio ínfimo.'
  },
  {
    name: 'Ofensa',
    normal: 'Instantáneo: +1 Ataque\nDespués, roba 1 carta.',
    expert: 'Instantáneo: +2 Ataque\nDespués, roba 1 carta.',
    category: 'Combate' as const,
    description: 'Imbuye ferocidad temporal a tus ejércitos de choque y repone tus cartas tácticas.'
  },
  {
    name: 'Orientación',
    normal: 'Mapa: Este turno, tu héroe puede moverse por zonas con unidades neutrales y héroes enemigos, pero, si acaba en una de estas zonas, empezará el combate.',
    expert: 'Mapa: Tu héroe puede atravesar bordes amarillos y zonas bloqueadas, pero no puede acabar su movimiento en ellas.',
    category: 'Aventura' as const,
    description: 'Permite explorar y maniobrar a través de obstáculos terrestres y ejércitos enemigos pasivos.'
  },
  {
    name: 'Resistencia',
    normal: 'Instantáneo: Juega esta carta inmediatamente después de que el enemigo lance un hechizo. Si ha lanzado el hechizo con 1 Potencia o menos, ignora el efecto de la carta de hechizo.',
    expert: 'Instantáneo: Juega esta carta inmediatamente después de que el enemigo lance un hechizo. Ignora el efecto de la carta de hechizo.',
    category: 'Apoyo' as const,
    description: 'Anula o neutraliza la hostilidad de conjuros mágicos hostiles lanzados contra tus tropas.'
  },
  {
    name: 'Erudito',
    normal: 'Instantáneo: Elige 1 carta de tu descarte y añádela a tu mano.',
    expert: 'Mapa: Retira hasta 2 cartas de característica de tu mano o del descarte. Coge 2 cartas de característica potenciada y colócalas en la parte superior de tu descarte. Retira el Erudito.',
    category: 'Desarrollo' as const,
    description: 'Optimiza la baraja de tu héroe purgando cartas mediocres o recuperando recursos del descarte.'
  },
  {
    name: 'Exploración',
    normal: 'Instantáneo: Juega esta carta cuando vayas a buscar para buscar(3).',
    expert: 'Instantáneo: Juega esta carta cuando vayas a buscar para buscar(5).',
    category: 'Aventura' as const,
    description: 'Acelera el descubrimiento y expansión del mapa de aventura mediante búsquedas eficientes de losetas.'
  },
  {
    name: 'Hechicería',
    normal: 'Instantáneo: +1 Potencia\nDespués, roba 1 carta.',
    expert: 'Instantáneo: +2 Potencia\nDespués, roba 1 carta.',
    category: 'Magia' as const,
    description: 'Amplifica el poder bruto de todos tus conjuros activos durante un turno completo.'
  },
  {
    name: 'Táctica',
    normal: 'Instantáneo: Al comienzo del combate, intercambia la posición de 2 de tus unidades.',
    expert: 'Activación: Durante el combate, intercambia la posición de 2 de tus unidades.',
    category: 'Combate' as const,
    description: 'Otorga flexibilidad posicional absoluta a tus batallones antes o durante la liza.'
  },
  {
    name: 'Sabiduría',
    normal: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(3) en vez de buscar(2).',
    expert: 'Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. When compres hechizos de tu cofradía de magos, busca(4) en vez de buscar(2).',
    category: 'Desarrollo' as const,
    description: 'Abarata los gremios de magos y expande drásticamente las cartas de conjuros disponibles para tu héroe.'
  }
];

// Normaliza el nombre de la habilidad inicial de un héroe al nombre estándar
// de la carta de habilidad secundaria correspondiente.
export const NORMALIZE_SKILL_NAME: Record<string, string> = {
  'Liderazgo': 'Liderazgo',
  'Tiro con arco': 'Tiro con arco',
  'Artillería': 'Artillería',
  'Táctica': 'Táctica',
  'Armero': 'Armero',
  'Resistencia': 'Resistencia',
  'Interferencia': 'Interferencia',
  'Suerte': 'Suerte',
  'Sabiduría': 'Sabiduría',
  'Hechicería': 'Hechicería',
  'Misticismo': 'Misticismo',
  'Inteligencia': 'Inteligencia / Espionaje',
  'Espionaje': 'Inteligencia / Espionaje',
  'Nigromancia': 'Nigromancia',
  'Logística': 'Logística',
  'Exploración': 'Exploración',
  'Orientación': 'Orientación',
  'Patrimonio': 'Patrimonio',
  'Diplomacia': 'Diplomacia',
  'Primeros auxilios': 'Primeros auxilios',
  'Vista de águila': 'Vista de águila / Ojo de lince',
  'Ojo de lince': 'Vista de águila / Ojo de lince',
  'Erudito': 'Erudito',
  'Aprendizaje': 'Aprendizaje',
  'Ofensa': 'Ofensa',
  'Magia de aire': 'Magia de aire',
  'Magia de tierra': 'Magia de tierra',
  'Magia de fuego': 'Magia de fuego',
  'Magia de agua': 'Magia de agua',
  'Magia básica del fuego': 'Magia básica del fuego'
};
