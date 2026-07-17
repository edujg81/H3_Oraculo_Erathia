import { RuleSection } from '../types';

export const rulesKB: RuleSection[] = [
  {
    id: "overview",
    title: "1. Descripción General del Juego",
    category: "general",
    content: `Heroes of Might and Magic III: El Juego de Mesa emula con absoluta precisión el espíritu y las mecánicas del legendario videojuego original de 1999. Es un juego de alta estrategia en el que cada jugador asume el control de una facción mítica y su Héroe Principal, explorando el terreno a través de losetas de mapa hexagonales, gestionando una economía de recursos triple, desarrollando su metrópolis natal en tres niveles de construcción, adquiriendo cartas de hechizo u objetos mágicos, y resolviendo combates tácticos en un tablero separado de 20 casillas (reja de 4x5). Atendiendo a las expansiones, el juego permite un rango dinámico desde el juego solitario hasta batallas masivas por parejas (2 vs 2), asedios detallados con castillos amurallados y asaltos anfibios.`
  },
  {
    id: "factions_detailed",
    title: "2. Las 10 Facciones de Erathia",
    category: "general",
    content: `El juego cuenta con un total de 10 facciones asimétricas oficiales que comprenden el juego base y todas las expansiones:
1. Castillo (Castle - Borde Azul): Fuerte presencia militar convencional basada en caballeros, campeones pesados y la moral alta del orden divino.
2. Necrópolis (Necropolis - Borde Gris): Huestes de no-muertos comandadas por nigromantes. Poseen inmunidad absoluta a los efectos de moral positiva/negativa y pueden alistar tropas de las bajas sufridas en batalla.
3. Mazmorra (Dungeon - Borde Morado): Hechicería oscura destructiva y monstruos temibles de las cavernas como contempladores, harpías y los indestructibles dragones negros.
4. Murallas (Rampart - Borde Verde): Elfos, centauros y dragones dorados en comunión con las fuerzas forestales. Poseen gran agilidad y ventajas en el terreno de bosque.
5. Torre (Tower - Borde Celeste): Magos arcanos, titanes de tormenta y golems mecánicos. Excelente manipulación de artefactos y cofradías de magos potenciadas.
6. Infierno (Inferno - Borde Rojo): Demonios, archidiablos e imps surgidos de los fuegos del Abismo. Sus tácticas se basan en el fuego destructor y el sacrificio.
7. Bastión (Stronghold - Borde Naranja): Salvajes orcos, ogros y cíclopes. Fuerte dependencia de la fuerza física bruta, inmunidad a ciertas magias y rabia de combate.
8. Fortaleza (Fortress - Borde Marrón): Criaturas del pantano como hidras de caos, basiliscos y reptadores. Poseen defensas impenetrables y manipulación de efectos de terreno.
9. Confluencia (Conflux - Borde Magenta): Seres de energía pura constituidos por elementales de fuego, tierra, agua y aire, coronados por los fénix resucitados.
10. Bahía (Cove - Borde Turquesa): Piratas, corsarios y serpientes marinas del océano. Facilidad absoluta para la navegación costera, astilleros ágiles y contrabando de recursos.`
  },
  {
    id: "rules_components_resources",
    title: "3. Lista de Componentes, Recursos e Iconografía",
    category: "components",
    content: `Componentes Esenciales:
• Losetas de Mapa: Losetas de cartón hexagonales clasificadas según el nivel numérico de los encuentros (I a VII).
• Tablero de Batalla (4x5): Una grilla para colocar tropas aliadas y hostiles.
• Los Tres Recursos del Imperio (Representados en el track de Ciudad):
  - Oro (): Moneda elemental de Erathia. Financia la adquisición de tropas, la contratación de héroes y compras de hechizos.
  - Materiales de construcción (): Agrupa la madera y el mineral de hierro indispensables para la expansión urbana.
  - Objetos de valor (): Representa divisas místicas escasas (mercurio, azufre, gemas, cristales) necesarias para invocar criaturas de nivel legendario (Tier III/Oro y Azur) o erigir santuarios mágicos.`
  },
  {
    id: "dice_mechanics_detailed",
    title: "4. Dados del Juego: Dados de Recursos, Combate y Tesoro",
    category: "components",
    content: `El juego incorpora tres tipos de dados de seis caras (d6) especiales reglamentarios para definir la fortuna, las tácticas y las recompensas (no existen dados de asedio específicos en el juego de mesa, todos los asaltos y catapultas se resuelven empleando el dado de combate estándar):

1. DADO DE RECURSOS (Resource Die):
Se utiliza al explorar ciertos enclaves arcanos o durante la fase de recursos para añadir fortuna. Sus caras son:
• Cara 1: +1 Moneda de Oro ()
• Cara 2: +2 Monedas de Oro ()
• Cara 3: +1 Unidad de Madera o Mineral ()
• Cara 4: +2 Unidades de Madera o Mineral ()
• Cara 5: +1 Objeto de Valor (Sulfur/Gemas/Mercury/Cristal) ()
• Cara 6: Vacío / Fallo (Sin ganancia)

2. DADO DE COMBATE / ATAQUE (Combat/Attack Die):
Se lanza obligatoriamente en cada ataque o contraataque (represalia) en la grilla táctica para modificar el daño final en heridas. Este dado cuenta únicamente con tres tipos de valores distribuidos equitativamente en sus caras:
• Caras con valor de -1: Reduce el daño final en 1 herida (con un mínimo absoluto de 0 heridas infligidas).
• Caras con valor de 0: Sin variación (se inflige el daño base de la unidad).
• Caras con valor de +1: Aumenta el ataque sumando +1 herida al total infligido.

No existen caras que otorguen +2, daño directo ignorando defensa ni represalias extra. Los resultados posibles son estrictamente -1, 0 y +1.

3. DADO DE TESORO (Treasure Die - Representado con <treasure>):
Se utiliza principalmente como botín o recompensa (como al vencer en el Templo del Mar o rescatar a un Náufrago Superviviente). Se lanza para recibir valiosas mejoras para el Héroe o la economía:
• Caras 1 y 2: Medio Nivel de Experiencia () - El Héroe Principal del jugador gana medio nivel de experiencia de forma inmediata.
• Caras 3 y 4: Búsqueda de Artefacto (Search 2) () - Roba 2 cartas del mazo de Artefactos, quédate con una de ellas en la mano y descarta la otra.
• Cara 5: Lanzar Dado de Recursos () - Lanza y resuelve de inmediato 1 Dado de Recursos.
• Cara 6: Elegir Dado de Recursos () - Lanza 2 Dados de Recursos y elige uno de los dos resultados para resolverlo.`
  },
  {
    id: "special_tokens_mechanics",
    title: "5. Fichas Especiales de Juego y sus Reglamentos",
    category: "components",
    content: `Para regular diversos efectos atmosféricos, tácticos y limitaciones, el juego de mesa utiliza fichas dedicadas:
1. Fichas de Tiempo (Time Tokens): Se colocan en el tablero de ronda de escenario o pista de campaña. Actúan como una cuenta atrás fija. Además, limitan las visitas a ciertos lugares raros, indicando cuándo se reactivan o cuándo spawnearán ejércitos neutrales en el mapa de aventura.
2. Cartas de Hechizo en Pergamino (Spell Scroll Cards): Cartas que representan pergaminos arcanos. En el juego base contienen un hechizo específico imprimado, permitiendo a cualquier héroe lanzar ese hechizo en combate (o mapa) sin poseer el Libro de Hechizos ni el nivel requerido, descartándose tras su uso. En la expansión de Confluencia, los pergaminos se cargan con dos hechizos boca abajo del mazo, actuando bajo reglas especiales asimétricas de límite, poder más débil y venta (ver sección 20 para más detalles).
3. Fichas de Arenas Movedizas (Quicksand Spell Tokens): Fichas de obstáculo provisional que se sitúan sobre la reja de combatetactico (4x5) tras conjurar el hechizo homónimo de tierra. Cualquier unidad terrestre que camine hacia esta casilla debe cesar su movimiento de forma fulminante en ella, perdiendo su ataque en ese turno.
4. Fichas de Ataque (Attack Tokens): Indicadores circulares temporales que se colocan sobre la carta de regimiento para reflejar bufos mágicos de bendición (+1 al ataque) o debuffs (-1 al ataque), alterando directamente los dados de combate rojos tirados.
5. Fichas de Corrosión (Corrosion Tokens): Representan la destrucción ácida de protecciones o el hechizo "Corrosión". Reducen la estadística de defensa física de la criatura objetivo en -1 o -2 puntos de forma persistente hasta que finalice el combate táctico en curso o la unidad perezca.
6. Fichas de Campo de Fuerza (Force Field Tokens): Marcadores que se despliegan en el tablero de combate táctico (4x5) cubriendo 2 hexágonos contiguos de ancho tras conjurar el hechizo de agua "Campo de Fuerza". Bloquean por completo el avance cuerpo a cuerpo de tropas terrestres aliadas y enemigas. Sin embargo, no imponen ningún tipo de obstáculo al vuelo o a la línea de visión de los Rangers de ataque a distancia, quienes pueden disparar a través de la barrera con total normalidad.
7. Fichas de Minas Terrestres (Land Mine Spell Tokens): Fichas colocadas en el tablero de batalla por el hechizo de fuego "Mina Terrestre". Actúan como trampas explosivas pasivas. La primera unidad de combate que cruce o se posicione encima de una casilla minada detiene su movimiento de forma instantánea, detona el marcador y sufre d3 a d6 heridas de daño de fuego directo (según el nivel de poder del héroe), tras lo cual se remueve la mina de la reja.`
  },
  {
    id: "card_types_detailed",
    title: "6. Tipología y Uso de las Cartas del Compendio",
    category: "components",
    content: `El juego procesa múltiples tipos de cartas con funciones operativas rígidas sobre el mantel:
1. Cartas de Hechizo (Spell): Coleccionables en la Cofradía de Magos o en Santuarios. Poseen un coste de Maná impreso y se dividen en Magias de Combate (causan daño directo u otorgan bufos físicos instantáneos) y Hechizos de Mapa (ej. Volar, Caminar sobre el Agua - jugables gastando PM durante la exploración).
2. Cartas de Artefacto (Artifact): Obtenibles de túmulos, cofres o tras vencer custodios difíciles. A diferencia de otras cartas arcanas, siempre que se consigue una carta de artefacto (incluyendo el bonus inicial de la partida), esta va DIRECTAMENTE A LA MANO del jugador y no a su mazo. Son cartas que forman parte de tu mazo de Poder y Magia; no se juegan ni se equipan de forma permanente en la mesa, salvo que se trate de cartas marcadas de forma explícita como permanentes (las cuales siguen el reglamento normal de permanentes). Una vez jugada la carta de artefacto, se coloca en la pila de descartes de tu mazo y se integra normalmente en él en los siguientes barajados.
3. Cartas de Especialidad (Specialty): Cartas exclusivas que caracterizan la asimetría del héroe elegido. Se incorporan de forma gratuita a nuestra mano activa al subir a un nivel dorado del track de experiencia (Niveles IV y VI).
4. Cartas de Habilidad (Ability): Cartas del mazo de progresión que el Héroe adquiere cada vez que aumenta su nivel de experiencia a un rango plateado (Niveles II, III, V, VII). Se eligen realizando un 'Draft' de las dos primeras cartas del mazo común.
5. Cartas de Característica (Stat): Representan el Poder (fuerza de hechizo), Conocimiento (cantidad de hechizos usables), Ataque físico y Defensa militar del héroe. Forman el esqueleto del mazo de Fuerza y Magia para potenciar acciones.
6. Cartas de Unidad / Tropas: Indican la salud, iniciativa, ataque y defensa de tus fuerzas. Se colocan delante del jugador y se despliegan en el tablero táctico. Tienen dos caras: Básica y Élite.
7. Cartas de Ciudad (Town Cards): Estas cartas sirven para representar y gestionar la infraestructura y construcciones disponibles de tu Metrópolis natal. En lugar de ocupar un tablero o mazo dinámico de mano, actúan como un registro activo/pasivo de los distritos de tu Castillo (como la Cofradía de Magos, el Ayuntamiento o las viviendas), indicando sus costes específicos de ampliación, su producción y los límites de reclutamiento aplicables de forma asimétrica.
8. Cartas de Caja de Pandora (Pandora's Box Cards): Representan encuentros especiales de gran peligro y altísima recompensa. Al interactuar con el hexágono de la Caja de Pandora en el mapa, se roba esta carta que detona una batalla de emboscada inmediata contra regimientos neutrales potenciados. La recompensa por la supervivencia del héroe incluye inmensas fortunas de Oro, maestrías gratuitas, reliquias míticas o el aprendizaje instantáneo de hechizos de nivel experto.`
  },
  {
    id: "grail_and_artifacts",
    title: "7. Tipos de Artefactos y el Grial de Erathia",
    category: "components",
    content: `Los artefactos son cartas especiales de tu mazo de Poder y Magia que otorgan potentes efectos tácticos y aumentos de estadísticas. Se clasifican en 4 niveles de poder y se juegan directamente desde la mano:

1. ARTEFACTOS MENORES (Minor - Borde Azul):
Se obtienen de ejércitos de bronce de niveles I-III. Ofrecen pequeñas ventajas estables (+1 oro por turno, +1 iniciativa a arqueros; ej. la Capa del Centelleo, Medalla del Valor, Anillo de Fuerza Vital).

2. ARTEFACTOS MAYORES (Major - Borde Dorado):
Protegidos por guarniciones de plata de niveles IV-V. Ofrecen ventajas estratégicas notables (resistencia mágica básica, +1 material por turno, o aumentos directos de fuerza; ej. la Espada del Juicio, Escudo del Dragón).

3. RELIQUIAS (Relics - Borde Púrpura):
Custodiados por ejércitos de oro de nivel VI o jefes de mazmorra. Tienen efectos colosales en combate, como resucitar regimientos caídos de forma automática, lanzar hechizos de nivel experto gratis o duplicar el límite de cartas de mano de tu Héroe (ej. la Armadura del Condenado, Alianza del Rey Dragón, Tomo de Fuego).

4. EL GRIAL (Grail Artifact - Borde Verde Esmeralda):
El artefacto más poderoso. Está enterrado en el mapa de aventura. Se desvela visitando Obeliscos antiguos, lo que descarta casillas de un plano de coordenadas. Cavar (usando 1 PM) en la casilla exacta permite desenterrarlo. Llevarlo a salvo a la ciudad capital permite erigir la "Estructura del Grial", la cual concede un incremento masivo permanente de +20 de Oro por turno (en cada Fase de Recursos) y una habilidad mítica exclusiva según tu facción.`
  },
  {
    id: "artifacts_rules_faq",
    title: "8. Reglamento Detallado de Artefactos y FAQs",
    category: "faq",
    content: `Esta sección detalla de forma exhaustiva las reglas oficiales del juego de mesa y aclaraciones de FAQs para el uso de las cartas de Artefacto (Menores, Mayores, Reliquias, Grial y Pergaminos) en Heroes of Might and Magic III: El Juego de Mesa.

1. NATURALEZA Y FLUJO DE LAS CARTAS DE ARTEFACTO EN EL MAZO:
• Integración total en el mazo: Los artefactos son cartas que forman parte del mazo de Poder y Magia de tu Héroe (Might & Magic Deck) exactamente igual que los hechizos, habilidades o características. No son "equipo" físico externo ni se bajan de forma permanente a la mesa.
• Regla Sagrada de Adquisición (Directo a la mano): A diferencia de cualquier otra carta que se añada a tu pila de descarte al ser comprada o aprendida, SIEMPRE que obtengas una carta de artefacto (ya sea derrotando un ejército neutral, explorando un enclave como tumbas, barcos naufragados, cofres, o mediante el bonus de dificultad de inicio de partida), esta se añade DIRECTAMENTE A TU MANO, evitando la pila de descarte.
• Regla de Uso (Al descarte): Una vez que decides jugar una carta de Artefacto desde tu mano para activar uno de sus efectos en combate o mapa de aventura, se ejecuta su efecto y la carta se coloca de inmediato en la PILA DE DESCARTES de tu mazo de Héroe (como cualquier otra carta ordinaria).
• Reincorporación por barajado: Cuando tu mazo de Poder y Magia se agote y debas barajar tu pila de descartes para formar un nuevo mazo de robo, tus cartas de artefacto se barajan y se integran en él por completo. A partir de ese momento, se roban de manera normal durante la fase de reponer mano y se vuelven a jugar de la misma forma.

2. CARTAS DE ARTEFACTO PERMANENTES VS. ORDINARIAS:
• Artefactos Ordinarios: La gran mayoría de los artefactos se juegan desde la mano, aplican un efecto instantáneo en el combate o exploración y se descartan a la pila de descartes del Héroe.
• Artefactos Permanentes (Permanent Cards): Únicamente si la carta de artefacto posee la etiqueta de "Permanente" (Permanent, indicada con un candado o símbolo afín), esta permanecerá boca arriba sobre la mesa al jugarse para conferir su efecto continuo. Sigue las reglas de cartas permanentes estándar: solo puede haber un número limitado de cartas de este tipo activas simultáneamente en la mesa, y jugar una nueva carta permanente obliga a descartar la anterior a menos que un efecto lo impida.

3. TRANSFERENCIAS, COMERCIO Y ALIANZA:
• Transferencia entre Héroes: Un Héroe Secundario adyacente en el mapa de aventura al Héroe Principal puede transferirle cartas de artefacto de su mano de forma totalmente gratuita (sin coste de PM ni acción).
• Comercio y Venta: Visitar un Puesto de Comercio o erigir un Mercado permite vender cartas de artefacto desde tu mano activa o tu pila de descartes para canjearlas por Oro u otros recursos.
• Altar de Confluencia: Permite sacrificar artefactos menores que tengas en tu mano activa para transmutarlos en Puntos de Experiencia (Exp) directa o valiosos Objetos de Valor ().

--- PREGUNTAS FRECUENTES (FAQs) OFICIALES SOBRE ARTEFACTOS ---

P: ¿Puedo equipar un artefacto en una cuadrícula o ranura de personaje (como casco, torso o arma)?
R: No. En el juego de mesa no existe el concepto de "equipar" artefactos en ranuras ni de colocarlos en la mesa boca arriba para que tengan efectos pasivos automáticos continuos en cada ronda (salvo que sea una carta expresamente calificada como "Permanente"). Son cartas que se juegan desde la mano, se resuelven y se descartan a tu pila de descartes.

P: ¿Qué ocurre con los Pergaminos de Hechizo (Scrolls)?
R: En el juego base, se tratan como cartas de un solo uso que se descartan permanentemente tras lanzarse. Sin embargo, en la expansión de Confluencia se introducen 20 cartas de pergamino de hechizos con un mazo propio (y 10 barajadas en el mazo de artefactos). Al obtenerse uno, se le colocan 2 hechizos boca abajo encima. El pergamino se puede jugar (usando el poder más débil de sus hechizos, sin contar para el límite de hechizos, ni pudiendo usarse para potenciar otros), o venderse en mercadillos por 2 Oros por cada hechizo restante en él. Se limita a un máximo de 2 pergaminos activos por héroe a la vez (si se obtiene un tercero, se descarta uno de los pergaminos activos). Al agotarse o venderse, las cartas de hechizo se remueven y la carta de pergamino vuelve al mazo de pergaminos.

P: ¿Cómo funciona el bonus inicial de artefacto de la preparación (por dificultad)?
R: Si la dificultad seleccionada te otorga un artefacto inicial, debes buscarlo en el mazo de artefactos correspondiente y colocarlo directamente en tu mano inicial, no en tu mazo de robo ni en la pila de descarte.

P: ¿Los artefactos se pierden si mi Héroe es derrotado en combate?
R: No. Tus cartas de artefacto que se encuentren en tu mano, mazo de robo o pila de descartes permanecen en tu poder. El Héroe derrotado pierde todas las tropas asignadas, su Oro acumulado y reaparece en la ciudad capital con su mazo de Poder y Magia intacto.`
  },
  {
    id: "setup_detailed_scenarios",
    title: "9. Preparación de las Partidas y Selección de Dificultad",
    category: "setup",
    content: `A continuación se detallan las reglas oficiales para preparar una partida y las bonificaciones que los jugadores reciben al seleccionar el nivel de dificultad en el paso 16 de la preparación:

I. BONOS DE INICIO SEGÚN LA DIFICULTAD ELEGIDA:
• Fácil (Easy): El jugador lanza 2 dados de Recursos y recibe los recursos de ambos – O – Busca (2) en el mazo de Artefactos, dos veces (elige uno y descarta el otro en cada búsqueda).
• Normal (Normal): El jugador lanza 2 dados de Recursos y recibe los recursos de uno de ellos – O – Busca (2) en el mazo de Artefactos (toma uno y descarta el restante).
• Difícil (Hard): El jugador lanza 1 dado de Recursos y recibe los recursos indicados en él – O – Revela cartas de la parte superior del mazo de Artefactos una a una hasta encontrar 1 Artefacto Menor (Minor) y lo añade a su mano (descartando el resto de cartas reveladas).
• Imposible (Impossible): No se recibe ningún tipo de bonificación o recurso inicial en la preparación.

Nota sobre Campañas: Las misiones de campaña tienen bonus únicos y específicos descritos en su propio libro que sustituyen por completo al bonus inicial de dificultad ordinario.

II. COMPENDIO DE ESCENARIOS OFICIALES Y EXPANSIONES:
1. "El Fin del Mundo" (The End of the World - PvP): Escenario competitivo de 7 rondas para 2 héroes. El objetivo principal es explorar y reclamar la loseta central VII para acumular el mayor índice de recursos antes de que expire el tiempo cósmico.
2. "Los Campeones de Gelea" (Champions of Gelea - Coop): Los ejércitos unen sus fuerzas tácticas para depositar un marcador de control del reino en la Utopía de los Dragones central, completando de esta forma la misión antes de la Ronda 11.
3. "Utopía Esmeralda" (Emerald Utopia - PvP): Escenario temático enfocado en la caza de grandes sierpes. El primer jugador que asalte de manera exitosa la Utopía del Dragón y derrote sus custodios arcanos es coronado monarca.
4. "Misión Maldita" (Cursed Quest - Coop / Solo): Limpieza completa del mapa de focos de corrupción no-muerta. Permite regular la dificultad de juego mediante la cantidad de rondas disponibles (Fácil: 8, Normal: 10, Difícil: 12, Imposible: 14).
5. "La Búsqueda del Grial" (The Hunt for the Holy Grail - Mixto): Los héroes deben visitar los obeliscos del mapa de aventura para desvelar el plano del Grial. El primero en excavar y transportar la reliquia a su castillo inicial gana la partida.
6. "War of the Mighty" (La Guerra de los Poderosos - Escaramuza PvP 2v2): Choque por parejas en el que los integrantes pueden transferirse Oro y Materiales de construcción gratis. El objetivo es sitiar y destruir el castillo central de cualquier miembro del equipo contrario.
7. "Guardián de la Mazmorra" (Dungeon Guardian - Coop): Duración fija de 12 rondas. Los jugadores se sumergen en las losetas subterráneas con el fin de localizar, desafiar y abatir a la Sierpe de Azur que protege el trono subterraneo.
8. "Ascensión" (Ascending Ascent - PvP / Solo): Mapa en bento-grid de montaña. Los jugadores avanzan en vertical enfrentando ejércitos neutrales en cada meseta autónoma. El jugador que logre erigir la Cofradía de Magos al máximo nivel absoluto y lance el Portal Dimensional se corona vencedor de forma espiritual.
9. "Islas Esmeralda" (Emerald Isles - PvP Marítimo): Introduce astilleros y naves marítimas. Exige poseer el mazo de Bahía o Confluencia. Vence el jugador que logre conectar por puentes y boyas marítimas tres archipiélagos aislados.
10. "Realm of Chaos" (El Reino del Caos - Mixto): Los asaltos de plagas se triplican. Un mapa laberíntico asimétrico donde abundan losetas de magma de Inferno. Cada héroe debe vencer en combate a un "Señor del Abismo" para reclamar las tejas centrales.
11. "Inocencia Perdida" (Lost Innocence - Campaña Solitario): Escenario asimétrico donde el héroe principal inicia con moral de valor negativa e infectado de corrupción ácida. Debe limpiar templos para restaurar su moral antes de enfrentar el asedio del Castillo de la IA.
12. "Crimson and Clover" (Trébol Carmesí - Escaramuza): Un clásico de 4 jugadores PvP libre donde las losetas fluviales dividen los territorios. La posesión de Establos y la correcta gestión de los PM en los caminos determinan la supremacía mercantil.`
  },
  {
    id: "official_difficulty_and_trade_tables",
    title: "10. Tablas del Reglamento Oficial, Dificultades y Comercio",
    category: "general",
    content: `A continuación se detallan las tablas numéricas definitivas para la toma de decisiones rápidas sobre la mesa:

I. TABLA DE DIFICULTAD DE ZONAS (Nivel de Ejércitos Neutrales según Loseta)
El nivel romano impreso en el reverso de la loseta dictamina el número y tipo de ejércitos representados por las barajas neutrales de Bronce, Plata y Oro que custodia la IA:
• Loseta de Nivel I:
  - Fácil: 1 de Bronce.
  - Normal: 1 de Bronce.
  - Difícil: 2 de Bronce.
  - Imposible: 3 de Bronce.
• Loseta de Nivel II:
  - Fácil: 2 de Bronce.
  - Normal: 2 de Bronce.
  - Difícil: 3 de Bronce.
  - Imposible: 2 de Bronce, 1 de Plata.
• Loseta de Nivel III:
  - Fácil: 1 de Bronce, 1 de Plata.
  - Normal: 2 de Bronce, 1 de Plata.
  - Difícil: 1 de Bronce, 2 de Plata.
  - Imposible: 3 de Plata.
• Loseta de Nivel IV:
  - Fácil: 2 de Bronce, 1 de Plata.
  - Normal: 1 de Bronce, 2 de Plata.
  - Difícil: 3 de Plata.
  - Imposible: 2 de Plata, 1 de Oro.
• Loseta de Nivel V:
  - Fácil: 2 de Bronce, 1 de Plata, 1 de Oro.
  - Normal: 1 de Bronce, 2 de Plata, 1 de Oro.
  - Difícil: 2 de Plata, 2 de Oro.
  - Imposible: 1 de Plata, 3 de Oro.
• Loseta de Nivel VI:
  - Fácil: 2 de Bronce, 2 de Plata, 1 de Oro.
  - Normal: 1 de Bronce, 2 de Plata, 2 de Oro.
  - Difícil: 2 de Plata, 3 de Oro.
  - Imposible: 1 de Plata, 4 de Oro.
• Loseta de Nivel VII (Utopía/Reliquias):
  - Fácil: 1 Tropa de rango Azur (Extrema).
  - Normal: 2 Tropas de rango Azur.
  - Difícil: 2 Tropas de rango Azur, 1 de Oro.
  - Imposible: 2 Tropas de rango Azur, 2 de Oro.

II. TABLA OFICIAL DE COMERCIO (Intercambio en Mercadillos y Puestos de Comercio)
Las transacciones de recursos siguen tasas de conversión fijas y asimétricas dependiendo de lo que vendas y compres de acuerdo con el manual oficial:
• Vendo Oro ():
  - Para comprar un Objeto de Valor (): Pagas 6 de Oro para recibir 1 Objeto de Valor (Relación 6:1).
  - Para comprar un Material de Construcción (): Pagas 2 de Oro para recibir 1 Material (Relación 2:1).
• Vendo Objeto de Valor ():
  - Para comprar Oro (): Vendes 1 Objeto de Valor para recibir 3 de Oro (Relación 1:3).
  - Para comprar Materiales (): Vendes 1 Objeto de Valor para recibir 2 Materiales de Construcción (Relación 1:2).
• Vendo Material de Construcción ():
  - Para comprar Oro (): Vendes 1 Material para recibir 1 de Oro (Relación 1:1).
  - Para comprar un Objeto de Valor (): Pagas 3 Materiales por 1 Objeto de Valor (Relación 3:1).

• Reciclaje de Cartas redundantes: Visitar un Mercadillo te permite descartar permanentemente un máximo de 1 carta redundante de tu mano activa (exceptuando Especialidades iniciales, Características iniciales, Habilidades iniciales y Flechas Mágicas iniciales) para canjearla por 1 de Oro.`
  },
  {
    id: "turn_flow_and_phases",
    title: "11. Estructura Exacta del Turno e Inicio Global",
    category: "general",
    content: `Cada ronda de juego se divide en tres fases rígidas para asegurar la fluidez de la mesa de control:

I. FASE DE INICIO GLOBAL (Común a todos los jugadores)
1. Determinación de la Ronda:
   - Si la ronda actual es Impar (Rondas 1, 3, 5, 7, etc.), se activa la Ronda de Recursos. Todos los imperios cobran ingresos según la producción de su track de metrópolis más las minas y asentamientos señalizados con sus cubos. 
     *Excepción Absoluta: En la Ronda 1 inicial no se cobra producción de recursos.
   - Si la ronda actual es Par (Rondas 2, 4, 6, 8, etc.), se activa la Ronda Astrológica. El jugador inicial roba una carta del mazo de Anuncios Astrológicos (p. ej. Semana de la Gema, Mes de la Plaga) y aplica su efecto en voz alta. Su modificador se mantiene hasta el final de la ronda actual de juego para toda la mesa.
2. Resolución de Eventos de Escenario (Mazo de Eventos):
   Inmediatamente después, se verifica el libro o se roba del mazo de Eventos de Escenario. Son independientes de las cartas astrológicas: colocan monstruos fijos, desatan plagas que restan recursos de producción o introducen caminos cortados temporales.

II. TURNOS INDIVIDUALES DE JUGADOR (En sentido horario)
Cada jugador ejecuta sus acciones siguiendo este orden riguroso de fases por turno:
1. Fase de Suministro y Ajuste de Mano:
   - Ajusta su mano de cartas de su mazo de Fuerza y Magia. Roba o descarta hasta alcanzar su límite de mano correspondiente (determinado por su experiencia actual en el track de Héroe).
   - Repone y voltea boca arriba sus 3 fichas de Puntos de Movimiento (PM) verdes y activa las coronas de habilidades que hubiera consumido en el turno previo.
2. Fase de Movimiento y Exploración:
   - Gasta libremente sus 3 PM para desplazarse en el mapa, descubrir losetas de aventura, pelear con ejércitos neutrales de custodios, o visitar edificios mágicos.
   - Se permite alternar movimientos del Héroe Principal (3 PM) con el Héroe Secundario (2 PM), pero sus reservas tácticas deben computarse de forma totalmente independiente.
3. Acción de Ciudad (Límite de 1 por Turno):
   - El jugador puede realizar uno de los siguientes procesos técnicos:
     * Construir un nuevo edificio abonando Oro y Materiales.
     * Reclutar regimientos de criaturas de bronce, plata u oro.
     * Mejorar (Upgrade) regimientos de criaturas básicas a su rango de Élite.
     * Adquirir cartas de Hechizo en la Cofradía de Magos activa.

III. FASE DE FIN DEL TURNO
El jugador puede descartar voluntariamente cartas de su mano si lo desea y cede el turno en sentido de las agujas del reloj.`
  },
  {
    id: "town_development_and_recruitment",
    title: "12. Desarrollo Urbano, Comercio y Población de Criaturas",
    category: "town",
    content: `El desarrollo de la capital determina el músculo logístico y militar del reino:
• Construcción de Edificios: Se realiza mediante la ficha de Metrópolis (1 por turno). Los costes fijos de herencia son:
  - Pozo Municipal (Town Well): Preconstruido por defecto con coste cero.
  - Ayuntamiento (Town Hall): Cuesta 10 de Oro y 2 Materiales. Suma de inmediato +5 de Oro a tus ingresos fijos de la ronda.
  - Vivienda Tier I (Bronce): Preconstruida por defecto en tu loseta inicial de Ciudad.
  - Vivienda Tier II (Plata): Cuesta 10 de Oro y 3 Materiales de construcción.
  - Vivienda Tier III (Oro/Fuerte): Cuesta 15 de Oro, 4 Materiales de construcción y 2 Objetos de valor.
  - Cofradía de Magos Nivel 1: Cuesta 5 de Oro. Te entrega el Libro de Hechizos indispensable para memorizar cualquier magia.
  - Cofradía de Magos Nivel 2 (Cofradía Avanzada): Cuesta 10 de Oro y 1 Objeto de valor. Habilita magias de categoría avanzada.

• Reclutamiento y Población de Criaturas:
  - Utiliza la ficha de población de criaturas una vez por turno de Ciudad.
  - Solo se pueden reclutar tropas en viviendas que hayan sido erigidas en el castillo. El coste viene indicado en la carta de la criatura.
  - Límite de Vivienda (Dwellings Limit): Solo puedes alistar de forma directa un número de cartas de criatura por turno igual o inferior a los distritos construidos afines.
  - Ascensos de Tropas / Upgrade (Reinforce): Volteando la carta de unidad y abonando el coste de refuerzo (la mitad de su coste de reclutamiento original redondeado hacia arriba, y gratis si eres el primero en señalizar el Asentamiento respectivo), puedes transformar una unidad básica (Few) en su versión Élite (Pack).
  - Nota de Pérdida de Unidades: Si todas las unidades de tu mazo de unidades son destruidas, reemplázalas de inmediato con las unidades iniciales asignadas en la preparación del escenario de forma gratuita.

• Tabla de Comercio (Tablero de Mercadillos del Mapa):
  - Al visitar un Mercadillo en el mapa, puedes intercambiar recursos o vender cartas no deseadas de tu mano activa para conseguir Oro.`
  },
  {
    id: "faction_buildings_catalog",
    title: "13. Catálogo Oficial de Edificios de Facción y Construcciones",
    category: "town",
    content: `El desarrollo de tu metrópolis se representa mediante Cartas de Ciudad (Town Cards) y losetas de edificación que se sitúan sobre tu Tablero de Ciudad:

1. EDIFICIOS DE PRODUCCIÓN E INGRESOS:
• Ayuntamiento (Town Hall): Cuesta 10 Oro. Genera +10 Oro en cada Fase de Recursos (marcado en el track).
• Almacén de Recursos (Resource Silo): Añade la producción constante de +1 Madera/Mineral o +1 Objeto de Valor según las especificaciones del escenario o facción.

2. EDIFICIOS MILITARES Y RECLUTAMIENTO:
• Viviendas de Criaturas (Dwellings): Permiten el alistamiento de tropas de Tier I (Bronce), II (Plata) y III (Oro) pagando su coste en Oro. Se actualizan a su versión de Élite erigiendo la Ciudadela.
• Ciudadela (Citadel): Cuesta Oro y recursos. Permite reforzar unidades y añade defensas pasivas automáticas a tu ciudad en caso de asedio de las murallas.

3. EDIFICIOS MÍSTICOS Y LOGÍSTICOS:
• Cofradía de Magos (Mage Guild): Niveles I al IV. Permiten al Héroe aprender hechizos de mayor poder y almacenar Maná de forma temporal.
• Astillero (Shipyard): Permite construir un Barco de madera por 10 de Oro o Madera para navegar por losetas fluviales u oceánicas.
• Estructura del Grial (Grail Structure): Requiere el Grial desenterrado. Da ingresos colosales de +20 Oro por turno y otorga la habilidad pasiva asimétrica de tu facción.`
  },
  {
    id: "tile_types_detailed",
    title: "14. Tipologías de Losetas de Terreno (Atlas de Erathia)",
    category: "map",
    content: `El mapa de aventura se divide en losetas hexagonales clasificadas por su reverso numérico que gradúan la dificultad del juego de mesa:
• Losetas Iniciales (Nivel I): Contienen el punto de reaparición o capital de cada facción, minas básicas desprotegidas y caminos sencillos de transitar.
• Losetas Lejanas (Niveles II-III): Configuran el anillo de exploración inicial. Albergan minas de materiales, establos y custodios de bronce o bronce/plata simples.
• Losetas Cercanas (Niveles IV-VI): Representan la frontera intermedia y avanzada. Densamente custodiadas por ejércitos de plata y oro. Aquí se localizan los mercados principales, santuarios y reductos de experiencia avanzada.
• Losetas Centrales (Nivel VII): El epicentro estratégico. Contienen la 'Utopía de los Dragones', custodios de rango Azur definitivos y las tumbas de reyes y reliquias míticas que otorgan victoria instantánea en ciertos escenarios.
• Losetas Subterráneas (Underground Map Tiles): Capa secundaria de diseño cavernoso. Solo son transitables ingresando por un hexágono con la etiqueta 'Puerta Subterránea' (Subterranean Gate) o mediante el hechizo "Portal de Ciudad" (Town Portal). No se pueden descubrir losetas subterráneas si estás en la superficie y viceversa.
• Losetas de Mar (Sea Map Tiles): Integradas en las expansiones marítimas de Cove. Presentan aguas de océano continuo. En estas losetas solo pueden detenerse héroes que hayan embarcado usando un Barco, lo que consume todos los puntos de movimiento de ese turno al embarcar.`
  },
  {
    id: "map_locations_compendium",
    title: "15. Compendio Completo de Lugares del Mapa y Efectos",
    category: "map",
    content: `Los lugares en el mapa de aventura de Heroes III pertenecen a cuatro grandes categorías de interacción con reglas precisas:

1. VISITABLES (Colocan un cubo negro tras visitarse; quedan inutilizadas a menos que el escenario asigne retirar los cubos):
• Piedra de Aprendizaje (Learning Stone): El héroe gana inmediatamente 1 punto de Exp.
• Templo (Temple): Otorga una ficha de moral positiva temporal al héroe.
• Santuario del Gesto Mágico / Santuario del Encantamiento (Magic Shrine): Permite buscar (2) cartas en el mazo de hechizos pagando su costo correspondiente.
• Jardín Místico (Mystical Garden): Elige de forma inmediata entre ganar 2 Oro o 1 Objeto de valor.
• Tumba del Guerrero (Warrior's Tomb): Permite buscar (2) en el mazo de artefactos dos veces, pero asigna al héroe moral negativa de forma inmediata por profanación.
• Árbol del Conocimiento (Tree of Knowledge): El héroe puede pagar 3 Objetos de valor o 10 de Oro para subir 2 rangos de Exp al instante.
• Molino (Windmill): Entrega 1 Objeto de valor de forma gratuita de un tipo determinado.
• Molino de Agua (Waterwheel): Entrega 3 de Oro de forma inmediata al héroe.
• Choza de la Bruja (Witch Hut): El héroe puede adquirir de forma aleatoria una carta de Habilidad de la baraja principal pagando 5 de Oro, sin consumir nivel de experiencia.

2. REVISITABLES (Puedes regresar múltiples veces, sea moviéndote o pagando 1 PM si te encuentras ya ahí):
• Mercadillo (Trading Post): Te permite intercambiar u ofrecer recursos según la Tabla de Comercio oficial, o destruir una carta innecesaria de tu mano (excluyendo cartas iniciales o flechas mágicas) a cambio de 1 de Oro.
• Santuario (Sanctuary): Los héroes situados en este hexágono están resguardados y no pueden ser atacados por otros héroes. Un héroe rival puede atravesar este campo solo si no se detiene en él.
• Establos (Stables): El héroe que entre ahí gana +1 punto de movimiento (PM) adicional que debe consumir exclusivamente durante este turno de aventura.
• Universidad Militar (War Academy): Permite destruir cualquier carta de Habilidad de la mano pagando 10 de Oro para realizar un draft libre de una nueva habilidad.

3. SEÑALIZABLES (Se capturan de forma permanente colocando un cubo de color de tu facción):
• Minas (Mine - Oro, Mineral, Madera, Cristal, Alquimista): Incrementan de forma fija la producción correspondiente en tu tablero de ciudad en cada Ronda de Recursos. La primera captura otorga la producción inmediata de la mina de forma gratuita. Los rivales pueden capturarlas sustituyendo el cubo.
• Asentamiento (Settlement): Otorga bonificaciones a elegir (ej. expandir ingresos) y entrega un recurso inmediato. Puede habilitar el reclutamiento a distancia a los héroes o habilitar la acción de reforzar regimientos por la mitad de su coste.`
  },
  {
    id: "navigation_and_subterranean",
    title: "16. Logística de Navegación, Astilleros y Subterráneo",
    category: "map",
    content: `La exploración del mapa avanzado introduce dos sistemas de movimiento bidimensionales e independientes:

I. LOGÍSTICA DE NAVEGACIÓN Y BARCOS
Para escenarios de exploración con zonas de mares o losetas de agua (Cove):
• Para construir barcos, tu facción debe edificar un Astillero (Shipyard) en ciudades dotadas con el símbolo de ancla (coste: 10 de Oro y 2 Materiales).
• Una vez edificado, cualquier Héroe situado adyacente al Astillero puede comprar una miniatura de Barco abonando 10 de Oro.
• Regla Sagrada de Embarque (Embarking Penalty): Entrar en un Barco (casilla de agua) desde una linde de tierra firme consume de forma fulminante e irreversible LA TOTALIDAD de los puntos de movimiento restantes del Héroe para ese turno. Su movimiento cesa de inmediato.
• Regla Sagrada de Desembarque (Disembarking Penalty): Igualmente, abandonar el Barco para retornar a un nudo de tierra firme consume de inmediato todos los PM restantes del track de movimiento del Héroe para ese día.

II. EXPEDICIONES AL INFRAMUNDO SUBTERRÁNEO
• Ciertos mapas se dividen en dos niveles independientes (La Superficie y la Capa Subterránea), conectándose exclusivamente por las losetas con el icono de la "Puerta Subterránea" (Subterranean Gate) o mediante portales místicos.
• Cambiar de dimensión para reaparecer en la loseta de la capa opuesta consume el coste básico del hexágono destino de llegada más un recargo impositivo de 1 Punto de Movimiento (PM) de penalización extra de salto vertical.`
  },
  {
    id: "combat_mechanics_and_obstacles",
    title: "17. Inmersión de Combates, Obstáculos y Asedios",
    category: "combat",
    content: `El combate táctico en las expansiones recibe un tratado físico tridimensional e indestructible sumamente riguroso:

I. EL CAMPO DE BATALLA DINÁMICO (Cartas de Obstáculo)
Antes del despliegue convencional, se revela una carta de Terreno para poblar la grilla de combate táctico (4x5):
• Arbustos / Troncos Caídos (Obstáculos Ligeros): Cruzar esta casilla consume +1 punto de movimiento para tropas terrestres convencionales. No interfieren ni bloquean en absoluto la línea de visión (disparos) de las unidades de rango a distancia.
• Rocas / Muros de Piedra (Obstáculos Pesados): Configuran un bloqueo físico rígido absoluto. Las tropas terrestres deben flanquearlos obligatoriamente; asimismo, interceptan la trayectoria de los proyectiles de forma absoluta, imposibilitando que los arqueros disparen a través de estas casillas.
• Tierra Maldita (Cursed Ground): Nulidad arcana absoluta. Ningún jugador ni unidad combatiente puede invocar hechizos o cartas de magia mientras persistan regimientos enemigos ubicados en esta zona táctica sagrada.
• Campo de Tréboles (Clover Field): Otorga de forma instantánea una ficha de moral positiva a la primera unidad de melé que finalice su movimiento táctico en él.

II. LOGÍSTICA SOBERANA DE ASEDIOS DE CASTILLO
Cuando asaltas una ciudad amurallada protegida por fortificación erigida, se activan las reglas de Sitio:
• Muros, Fosos y Puertas: Bloquean el curso terrestre convencional. Mientras permanezcan intactos, las tropas defensoras se encuentran resguardadas de ataques directos a corta distancia y obtienen protección extra pasiva (+1 defensa) frente a proyectiles lejanos de arqueros o Rangers.
• La Catapulta de Asedio: Ingenio indestructible del bando atacante que dispara de forma imperativa al abrirse cada ronda de combate completo. Para resolver el disparo, el atacante lanza el dado de combate estándar (cuyas caras son estrictamente -1, 0, +1):
  - Resultado de '+1': Impacta en una sección de Muro (Wall) de tu elección, causándole 1 punto de daño.
  - Resultado de '0': Golpea la Puerta (Gate) central, causándole 1 punto de daño.
  - Resultado de '-1': El disparo resulta errado / fallo, sin consecuencias para la estructura defensiva.
• Foso de Combate (Castle Moat): Si cualquier unidad terrestre entra o es empujada hacia la franja del foso defensivo, debe finalizar de forma inmediata y obligatoria todo su movimiento para el resto de la ronda, sufriendo un penalizador permanente de -2 a su estadística defensiva mientras yazca en él.`
  },
  {
    id: "war_machines_detailed",
    title: "18. Catálogo y Uso de Máquinas de Guerra Oficiales",
    category: "combat",
    content: `Las Máquinas de Guerra son aditamentos de combate táctico que actúan como cartas permanentes y no ocupan espacio en el límite habitual de unidades terrestres:
1. Catapulta (Catapult): Obligatoria e instrumental en escenarios de Asedio de Castillo. Es indestructible y actúa automáticamente al inicio de cada ronda de combate. Se lanza el dado de combate estándar para resolver el impacto: -1 es fallo (sin consecuencia), 0 golpea la Puerta central (1 punto de daño) y +1 golpea un Muro (1 punto de daño).
2. Balista (Ballista): Carta permanente de artillería. Se activa de forma automática al inicio de cada ronda de combate para infligir exactamente 1 herida de daño físico a la unidad enemiga que tenga la menor iniciativa de todas en el grid táctico.
3. Carro de Munición (Ammo Cart): Carta permanente de soporte. Al inicio de cada ronda de combate, permite elegir una unidad aliada de ataque a distancia (Rangers). Dicha unidad ignora por completo tanto el penalizador por distancia (Range Penalty) como el penalizador de cuerpo a cuerpo (Melee Penalty) durante el resto de la ronda.
4. Tienda de Primeros Auxilios (First Aid Tent): Carta permanente médica. Al final de cada ronda de combate, remueve/sana de forma automática 1 herida de la unidad aliada que tenga la menor iniciativa y que esté dañada.
5. Cañón (Cannon): Carta permanente exclusiva de la facción de Bahía (Cove). Se activa de forma automática al inicio de cada ronda de combate. Eliges una unidad o estructura enemiga y lanzas el dado de combate estándar: -1 inflige 1 herida / daño, 0 inflige 2 heridas / daños y +1 inflige 3 heridas / daños.`
  },
  {
    id: "schools_of_magic_treatise",
    title: "19. Tratado de las Cuatro Escuelas de Magia",
    category: "magic",
    content: `La magia se clasifica en cuatro Escuelas elementales rígidas, cada una gobernada por una habilidad específica del mazo de progresión de tu héroe. Obtener el rango 'Experto' en una escuela potencia de forma brutal tanto el rango de efecto como la letalidad o utilidad del conjuro:

1. Escuela de Magia de FUEGO (Fire Magic):
• Rol Primario: Daño destructivo absoluto, furia de combate e imposición de trampas de área.
• Hechizos Clave:
  - Bola de Fuego (Fireball): Inflige daño por fuego en una reja de hexágonos tácticos adyacentes.
  - Armagedón (Armageddon): Daña masivamente a TODAS las criaturas del tablero táctico (incluyendo aliadas, excepto dragones negros o inmunes).
  - Mina Terrestre (Land Mine): Coloca fichas de mina explosivas que detonan al contacto de unidades terrestres.
  - Sed de Sangre (Bloodlust): Aumenta de forma radical los dados de combate ofensivos en melé.

2. Escuela de Magia de AGUA (Water Magic):
• Rol Primario: Curación de tropas, control estricto del espacio de batalla y teletransporte logístico.
• Hechizos Clave:
  - Campo de Fuerza (Force Field): Coloca obstáculos físicos indestructibles para resguardar rangers y bloquear cargas terrestres.
  - Teleportar (Teleport): Desplaza instantáneamente un regimiento aliado pesado a cualquier hexágono libre de la grilla táctica.
  - Curación (Cure): Remueve fichas de daño e inmuniza contra toxinas de corrosión.
  - Clonar (Clone): Invoca una copia espectral de una tropa que desaparece al recibir cualquier impacto.

3. Escuela de Magia de TIERRA (Earth Magic):
• Rol Primario: Resistencia militar impenetrable, reanimación de bajas y ralentización del avance rival.
• Hechizos Clave:
  - Lentitud (Slow): Reduce drásticamente el rango de movimiento e iniciativa táctica de las fuerzas hostiles.
  - Reanimar No-Muerto (Animate Dead) / Escudo (Shield): Resucita regimientos caídos u otorga bonos fijos de defensa física para amortiguar los dados enemigos.
  - Arenas Movedizas (Quicksand): Despliega trampas de fango que detienen en seco el movimiento terrestre de la tropa que asalte el hexágono.
  - Implosión (Implosion): Proporciona un altísimo daño de impacto gravitatorio contra una criatura singular de gran rango.

4. Escuela de Magia de AIRE (Air Magic):
• Rol Primario: Velocidad de maniobra de tropas, protección extrema ante arqueros de distancia y descargas voltaicas de precisión.
• Hechizos Clave:
  - Volar (Fly) / Portal Dimensional (Dimension Door): Permiten cruzar montañas, bosques y lagos o saltar losetas de mapa completas en el atlas con tu miniatura, ignorando enemigos.
  - Relámpago (Lightning Bolt): Descarga energía de alto daño de precisión ignorando obstáculos pesados de cobertura en el tablero.
  - Escudo de Aire (Air Shield): Otorga gran reducción de daño contra proyectiles o Rangers.
  - Precisión (Precision): Incrementa la puntería y daño asestado por regimientos a distancia y balistas aliadas de campaña.`
  },
  {
    id: "conflux_elemental_rules",
    title: "20. Losetas Elementales, Invocaciones y Daño Elemental",
    category: "magic",
    content: `La expansión Confluencia (Conflux) introduce dimensiones místicas de energía pura y leyes físicas adaptativas para la batalla:

1. Losetas de Mapa Elementales (Elemental Planes Tiles):
Losetas exclusivas de reverso cian que representan fragmentos colisionados en Erathia de los Planos Elementales:
• Plano Astral / Fuego (Fire Rift): Cruzar o culminar el movimiento táctico en esta loseta confiere +2 PM gratuitos si tu facción activa es Confluencia o Inferno. Duplica además el daño infligido de cualquier hechizo elemental de fuego lanzado desde ella.
• Plano de Agua (Water Rift): Caminar por él no genera penalización de fango o nieve, y permite el embarque automático sin penalización de fin de turno.
• Plano de Tierra y Aire (Earth & Air Rift): Otorga +1 a la Defensa Física o +1 a la Iniciativa de los regimientos de campaña asentados respectivamente.

2. Tratado de Invocaciones de Combate (Invocations):
Mediante la magia correspondiente (Invocación Elemental), un héroe puede conjurar regimientos de Elementales de Tierra, Aire, Agua o Fuego en hexágonos desocupados de la grilla táctica:
• Invocaciones Temporales: Estas criaturas actúan con iniciativa propia y atacan con daño elemental puro. Al finalizar el asalto, estas unidades se desintegran por completo, por lo que no se agregan a la mano activa ni consumen límite de ranura de ejército del héroe.
• Regla de Disipación: Los hechizos de Desterrar o Disipar Magia destruyen inmediatamente toda unidad invocada sobre la reja táctica.

3. Daño Elemental Puro (Elemental Damage):
• El daño de descargas arcanas puras (como Rayo de Hielo o Relámpago) ignora de forma absoluta el valor numérico de Defensa física de la criatura defensora, aplicando de forma directa las heridas al marcador de salud.
• Inmunidades Innatas: No es reducible excepto mediante inmunidades absolutas especificadas en las cartas de Criatura Élite (por ejemplo, los Dragones Negros son completamente inmunes a toda la magia, los Fénix son inmunes al daño de Fuego, y los Elementales de Tierra ignoran el daño de Implosión o Lentitud).

4. Cartas de Pergamino de Hechizos (Spell Scroll Cards - Expansión Confluencia):
La expansión de Conflujo trae un conjunto de 20 cartas de pergamino de hechizos. Durante la preparación del juego se barajan 10 de estas cartas en el mazo de artefactos y el resto se deja a un lado como mazo de pergaminos (algunos eventos o lugares pueden hacer uso de ellos más adelante).
Cuando se obtenga una carta de pergamino de hechizos se coloca junto a la ficha del héroe, luego se roban dos cartas del mazo de hechizos y se colocan boca abajo sobre la carta de pergamino. En adelante se tratarán como una sola carta que se podrá usar como cualquier otro hechizo con las siguientes excepciones:
• Un hechizo jugado desde un pergamino no cuenta para el límite de hechizos.
• Solo se puede usar el poder más débil del hechizo (no se pueden potenciar).
• No se puede usar para potenciar otro hechizo.
• Se puede vender el pergamino en un mercadillo por 2 Oros por cada hechizo que contenga el pergamino.

Límite en Juego: Solo se pueden tener 2 pergaminos en juego a la vez. Si se consigue un tercero, se roban los nuevos hechizos y se descarta uno de los pergaminos (el nuevo o uno de los anteriores). Cuando se agota un pergamino o se vende, las cartas de hechizos se retiran y la carta de pergamino se coloca en el mazo de pergaminos.`
  },
  {
    id: "scenario_modes_and_end_conditions",
    title: "Tipos de Escenarios (Enfrentamiento, Campaña, Alianza, Cooperativo) y Fin de Escenario",
    category: "modes",
    content: `Cada partida de Heroes III se juega utilizando un Escenario de Los Libros de Misiones. Hay cuatro tipos de Escenarios oficiales:

1. ENFRENTAMIENTO (Clash):
• Un modo totalmente competitivo para 2-3 jugadores, donde cada facción lucha por la supremacía absoluta del mapa y sus recursos.

2. CAMPAÑA:
• Un modo para un jugador de Escenarios conectados contra una IA enemiga.
• Para las reglas exclusivas del Modo Solitario, ver las reglas con IA y Fin de Escenario. En los Libros de Misiones de Campaña se detallan otros cambios en las reglas.
• Transición de Campaña en Solitario: Al acabar un escenario de Campaña en Solitario, restablece el Nivel de Experiencia de tu Héroe a 1, y prepara el mazo inicial para la siguiente campaña. Este mazo consistirá en:
  - Las cartas de Característica del mazo.
  - El nivel 1 de tu Carta Especialidad.
  - 5 cartas no especiales a elección de tu mazo.
• Sáltate los pasos de Configuración del Mazo durante la Preparación para el siguiente escenario de la campaña.

3. ALIANZA:
• Un modo por equipos de 2 contra 2. Al jugar en este modo se aplican las siguientes reglas:
  - Determinación de Alianza: Una alianza es un equipo de 2 jugadores que se determina al comienzo del juego y dura tanto como el escenario elegido.
  - Elección de Facción: Cada jugador elige su facción al comienzo del escenario.
  - Intercambio de Artefactos: Jugadores aliados pueden intercambiar cartas de artefacto entre ellos. Para ello, es necesario que sus héroes ocupen zonas adyacentes del mapa de aventura.
  - Intercambio de Recursos: Los recursos se pueden intercambiar libremente sin necesidad de que los héroes de ambos jugadores ocupen zonas adyacentes. Los miembros de una alianza pueden intercambiar recursos libremente durante el turno de cualquiera de los jugadores del equipo.
  - Bloqueo de Señalización: Los jugadores de una alianza no pueden señalizar lugares (flaggear) que ya estén señalizados por otro jugador de la misma alianza.
  - Victoria Compartida: En el modo Alianza, los jugadores aliados comparten en su totalidad las condiciones de victoria y derrota. No existe ningún paso adicional para comparar quién lo hizo mejor en una partida ni quién contribuyó más a la victoria.

4. COOPERATIVO:
• Un modo cooperativo para 2-3 jugadores en el que todos comparten el mismo objetivo:
  - Unidad de Alianza: En todas las partidas cooperativas, todos los jugadores son aliados y juegan juntos para superar el escenario.
  - Combate con Neutrales: Al controlar unidades neutrales que defienden un hexágono o casilla, se utilizan las reglas de combate para el modo Solitario (consulta "Combate de IA").
  - Regla Especial del Mercadillo (Trading Post): Cuando tu héroe visita un mercadillo, aparte de aprovechar los efectos normales de comercio de ese lugar (ver "Tabla de comercio"), también puedes usarlo para transferir recursos directamente a cualquier otro jugador aliado.
  - Condiciones de Victoria Cooperativas: Pueden incluir derrotar un número específico de unidades neutrales o tomar el control de lugares específicos. Si algún jugador cumple la condición de victoria de un escenario (a menos que se indique lo contrario), la partida termina inmediatamente y todos los jugadores ganan el escenario.

FIN DE ESCENARIO Y REGLAS DE ELIMINACIÓN:
Todos los escenarios tienen sus Condiciones de Victoria descritas en el Libro de Escenario. Además, siempre es posible ser Eliminado de cualquier Escenario de las siguientes maneras:
• Sin Ciudad ni Asentamiento: Jugar 3 rondas completas sin controlar ninguna ciudad o asentamiento.
• Derrota de Héroe Principal sin Base: Perder un Combate con tu Héroe Principal cuando no te queden Ciudades o Asentamientos en el mapa, incluyendo cuando defiendas tu última Ciudad o Asentamiento.

Consecuencias de la Eliminación:
• Los jugadores eliminados son retirados inmediatamente de la partida.
• Se descartan de forma definitiva sus Cubos de Facción y figuras de Héroe del Mapa de Juego.
• Las cartas de su Mazo se tratan como Retiradas del juego para el resto del Escenario.
• Si eres Eliminado, aún puedes participar de forma activa en el juego controlando las Unidades Neutrales que atacan a los jugadores sobrevivientes en la reja de batalla.

Victoria por Eliminación:
• Si eliminas todas las facciones enemigas ganas el escenario.
• En escenarios con tres o más jugadores, recoger un Cubo de Facción de cada jugador enemigo te hace ganar inmediatamente la partida. Otras reglas específicas del Escenario también pueden modificar el resultado de la recogida de Cubos de Facción.`
  },
  {
    id: "ai_rules_compendium",
    title: "21. Reglamento Detallado de la Inteligencia Artificial (IA)",
    category: "modes",
    content: `En campañas cooperativas y solitarios, la IA enemiga sigue algoritmos fijos, simplificados y sin azar para sus turnos de exploración y combate:

1. PRIORIDADES TÁCTICAS DE COMBATE DE LA IA:
• Unidades Terrestres (Ground) y Aéreas (Flying):
  Al activarse una miniatura de la IA, prioriza atacar a la unidad enemiga que posea su mismo Tier de poder (ej. Tropa de bronce de la IA busca tropa de bronce del jugador). Si es imposible, busca un Tier inferior (en orden descendente de poder hasta bronce). Si sigue siendo imposible, busca un Tier superior (en orden ascendente).
  - Prioridad de Criaturas de Bancos: Si tu mazo tiene criaturas obtenidas de Bancos de Criaturas, la IA ataca siempre primero a todas las unidades convencionales del jugador, y deja para el final a las unidades procedentes de Bancos.
• Unidades a Distancia (Ranged):
  Priorizan atacar a otros tiradores (Ranged) del jugador siguiendo el mismo orden de prioridad de Tiers. Si no existen tiradores, atacan a tropas de tierra (Ground) o voladoras (Flying) según el Tier prioritario.
• Regla de Cercanía y Empates: En cualquier caso, si hay múltiples objetivos con la misma prioridad de Tier, la IA dirige su ataque contra el objetivo físico que se encuentre más cercano. Si hay un empate absoluto de distancia, el jugador decide cuál de sus unidades es golpeada. De forma nativa, las unidades de la IA nunca toman la acción de Defenderse en mesa.

2. ALGORITMOS DE ASEDIO PARA LA IA (AI SIEGE):
• Al asediar una fortaleza enemiga del jugador, la IA coloca la Puerta principal frente a su unidad dotada con el mayor valor de iniciativa. Las tropas terrestres de la IA nunca dirigen sus ataques físicos a los muros o puertas de forma voluntaria; prefieren esperar en defensa o volar sobre ellos. Las unidades voladoras saltan los muros directo a su prioridad.
• Para el cálculo de ataques del Torreón de Arqueros automático: la IA lo trata como un defensor de rango plata. Al atacar con el Torreón de Arqueros, la IA escoge de forma imperativa como blanco al atacante del jugador que tenga la menor cantidad de puntos de vida restantes en ese instante para asegurar una baja militar.

3. PRIORIDADES DE MOVIMIENTO EN EL MAPA (AI HERO TURNS):
Los Héroes de la IA disponen de un mazo simplificado sin recursos ni tablero de ciudad, operando con 3 PM fijos en cada turno que consumen en estricto orden de prioridades descendentes:
• Prioridad 1: Si un Héroe del jugador se ubica en la misma loseta que el Héroe de la IA, este gasta la totalidad de sus PM restantes para marchar directo hacia él e iniciar combate bélico inmediato.
• Prioridad 2: Si no hay héroes enemigos, la IA marcha hacia la Mina o Asentamiento que pueda capturar/flaggear que esté más cercano dentro de la loseta de exploración actual.
• Prioridad 3: En cualquier otro caso, la IA consume su movimiento desplazándose por el camino más corto posible en dirección a la capital natal del jugador humano.
• Combates contra Neutrales: La IA gana de forma automática y matemática cualquier encuentro contra criaturas salvajes neutrales, visitando y flaggeando de inmediato los enclaves sin sufrir bajas físicas. El Héroe de la IA gasta 1 PM para descubrir losetas boca abajo igual que los humanos, y el jugador escoge la orientación física de la loseta descubierta.

4. CONTROL DE MAZOS DE IA Y TIMING:
• Mazo de Hechizos de la IA: Siempre que se robe una carta del mazo que indique un Hechizo (Magic), la IA roba inmediatamente la carta superior de su Mazo de Conjuros específico (AI Spell Deck) y lo conjura sin consumir puntos de Maná o Conocimiento. Las magias se descartan en su propia pila.
• Mazo de Habilidades (Skills): Al robar una carta de habilidad asignada en setup, la IA ejecuta su efecto correspondiente y la conserva al lado de su tablero para reiterar su uso cada vez que sea instruida por la baraja de IA, sin descartarla.

5. GUÍA DE LANZAMIENTO DE CONJUROS COMPLEJOS POR LA IA:
• Conjuros Multi-objetivo (p. ej. Fireball, Chain Lightning): Apuntan al regimiento del jugador que tenga unidades contiguas adyacentes, priorizando agrupaciones con tropas de Tier alto. En caso de empate, ataca al grupo con la menor salud actual. Si no hay agrupaciones viables, apunta a unidades individuales que estén lejanas de tropas de la IA. Si es imposible, se cancela el hechizo, se sitúa al final del mazo de IA y se baraja de nuevo.
• Conjuros de Defensa Instantánea (p. ej. Stone Skin): Coloca una ficha de defensa física sobre la criatura aliada de la IA que ostente la estadística de Defensa más alta de la mesa. Si ya dispone de una, se sitúa sobre la segunda más alta.
• Conjuros de Sanación (p. ej. Cure): Remueve marcadores de herida de la unidad de la IA que tenga el mayor volumen de daño acumulado, empezando por las tropas de Tier más alto disponibles en mesa. Si ninguna unidad de la IA tiene heridas, el hechizo se cancela y se traslada al fondo de la baraja.
• Conjuros de Debilitamiento (p. ej. Weakness): Se conjura exclusivamente sobre la tropa del jugador humano que esté a punto de propiciar un contraataque (contraataque/represalia) inminente tras el ataque de la IA para amortiguar el golpe. Si la acción de la IA no suscita represalias, el hechizo se cancela y se traslada al final del mazo de IA.
• Conjuros de Bufos de Una Ronda (p. ej. Fire Shield): Verifica la unidad de la IA a beneficiar. Si más de la mitad de las tropas del mismo Tier o superior ya se han activado en la ronda actual, la IA pospone el lanzamiento del escudo hasta el inicio de la siguiente ronda táctica, acumulándolo.`
  },
  {
    id: "campaign_chronological",
    title: "22. Modo Campaña Oficial y su Cronología de Misiones",
    category: "modes",
    content: `El Modo Campaña (diseñado de forma cooperativa o solitaria) sigue una estructura narrativa estricta e histórica representando la Restoration of Erathia y sus campañas accesorias:

1. Misión I: "La Liberación de las Cuevas" (The Cave Liberation)
• Objetivo: Localizar la loseta de Puerta Subterránea (Nivel II) e infiltrarse en el inframundo. Derrotar al ejército de Bronce liderado por el héroe de la IA en menos de 8 rondas. No se permite la construcción del Ayuntamiento en esta ronda.

2. Misión II: "Bajo el Ojo del Dragón" (Under the Dragon's Eye)
• Objetivo: Cruzar el continente y derrotar a las tres familias de dragones menores (Bronce/Plata) para recuperar la reliquia "Ojo del Dragón". Expira en la Ronda 10 por límite de tiempo.

3. Misión III: "Guardián de la Mazmorra" (Dungeon Guardian)
• Objetivo: Descender de forma rigurosa al Subterráneo para combatir a la criatura jefe "Sierpe Roja" custodiada por imps e hidras. La IA posee duplicidad de maná para hechizos ígneos de área.

4. Misión IV: "La Guerra de los Poderosos" (War of the Mighty)
• Objetivo: Clímax de campaña de Erathia. Los ejércitos coaligados asedian una ciudadela de la facción Infierno usando el tablero de asedio táctico completo y catapultas automáticas. Límite de 14 rondas máximo.

5. Misión V: "La Búsqueda del Grial" (The Hunt for the Holy Grail)
• Objetivo: Excavación masiva interactiva. Requiere descifrar pistas visitando 4 Obeliscos esparcidos por los niveles terrestres y marítimos antes de que el mazo de IA complete su mazo de tiempo de aventura.

6. Misión VI: "Un Plan Diabólico" (A Devilish Plan - Campaña de Inferno)
• Objetivo: Un relato asimétrico del bando opuesto. El jugador asume tropas de Inferno y debe capturar de forma forzosa capitales de Castillo en el norte del mapa en menos de 9 rondas, sembrando portales de fuego de Azufre.

7. Misión VII: "Golpea el Hierro mientras esté Frío" (Strike while the Iron is Cold - Campaña Confluencia)
• Objetivo: Invasión de elementales. El héroe debe canalizar e interceptar losetas elementales controladas por criaturas míticas nativas del Plano del Caos antes de que consigan reclutar elementales de oro.

8. Misión VIII: "Keepers of Sorrows" (Custodios de las Penas - Campaña Necrópolis)
• Objetivo: La horda no-muerta sitia de forma sistemática santuarios asediados de Murallas. Se debe transmutar un Artefacto legendario en el "Sudario del Vampiro" sacrificando unidades de Élite propias en altares sagrados.`
  },
  {
    id: "faction_mission_books_compendium",
    title: "23. Compendio de Libros de Misiones de Facciones (Faction Mission Books)",
    category: "modes",
    content: `Cada una de las 10 facciones cuenta con su libro de misiones oficial (Mission Book) que describe sus escenarios únicos (Clash / Cooperativo / Alianza) y su campaña histórica asimétrica:

--- JUEGO BASE (The Restoration of Erathia) ---

1. CASTILLO (Castle) - Libro de Misiones de "¡Larga Vida a la Reina!":
• Mapas Únicos: "Land Grab" (Reclamación de Tierras - 2P Clash), "Resource War" (Guerra de Recursos - 2-3P Clash), "The Holy Grail" (El Santo Grial - 2-3P Clash), "Allied Front" (Frente Aliado - 3-4P Alianza).
• Misión de Campaña I: "Una Nueva Alianza" (A New Alliance): Pacta con las colonias de Grifos en las altas cumbres para consolidar tropas imperiales.
• Misión de Campaña II: "Limpiando la Frontera" (Clearing the Border): Pacifica los caminos del east, derrotando rebeldes antes de la Ronda 12.
• Misión de Campaña III: "Fiebre del Oro" (Gold Rush): Amasa una fortuna inmensa de oro en los valles templados para financiar el asedio real.

2. MAZMORRA (Dungeon) - Libro de Misiones de "Los Señores de Nighon":
• Mapas Únicos: "Tomb Raiders" (Saqueadores de Tumbas - 2P Clash), "Clash of Queens" (Duelo de Reinas - 2P Clash asimétrico Superficie/Subterráneo).
• Misión de Campaña I: "Infiltración Profunda" (Deep Infiltration): Cruza pasajes subterráneos eludiendo patrullas imperiales para abrir un portal secundario.
• Misión de Campaña II: "Los Túneles del Oro" (Gold Tunnels): Captura y flaggea ricas minas de oro subterráneas defendidas por temibles contempladores.
• Misión de Campaña III: "Guardián de la Mazmorra" (Dungeon Guardian): Despierta al Dragón Negro ancestral en el foso volcánico central para aniquilar las fuerzas arcanas.

3. NECRÓPOLIS (Necropolis) - Libro de Misiones de "La Sombra de Sandro":
• Mapas Únicos: "The Hunt" (La Caza - 1-2P Solo/Coop contra Dragón), "Brave New World" (Un Mundo Feliz - 2P Coop para colonizar archipiélago).
• Misión de Campaña I: "La Ambición de Sandro" (Sandro's Ambition): Reúne fragmentos malditos y llévalos a la Colina del Esqueleto para forjar la Capa del Rey No-Muerto.
• Misión de Campaña II: "La Cosecha Nocturna" (Night Harvest): Invade enclaves agrarios neutrales para levantar regimientos masivos de esqueletos de forma automática.
• Misión de Campaña III: "El Trono del Rey Esqueleto" (The Skeletal Throne): Enfréntate y vence a los Caballeros de la Muerte disidentes para consolidar el control de Deyja.

--- FACCIONES DE EXPANSIONES ---

4. MURALLAS (Rampart) - Libro de Misiones de "Valles Élficos":
• Mapas Únicos: "Clear the Woods" (Despejar Bosques - 2P Clash), "The Dragon's Eye" (El Ojo del Dragón - 2P Coop por gemas de dragón verde).
• Misión de Campaña I: "El Despertar" (The Awakening): Defiende los claros sagrados de AvLee ante patrullas de Necrópolis; erige viviendas élficas antes de la ronda 9.
• Misión de Campaña II: "La Cacería del Unicornio" (Unicorn Hunt): Encuentra y amansa al Unicornio Sagrado para purificar los valles infectados de plaga necromántica.
• Misión de Campaña III: "El Bastión de las Hojas" (Leaf Bastion): Fortifica la ciudad con Acantilados de Dragón Dorado para resistir un violento asedio de Mazmorra.

5. FORTALEZA (Fortress) - Libro de Misiones de "Domando la Ciénaga":
• Mapas Únicos: "Swamp Skirmish" (Escaramuza - 2P Clash en lodo), "Taming the Beast" (Domando la Bestia - 2P Coop para pacificar Hidras salvajes).
• Misión de Campaña I: "La Rebelión del Pantano" (Swamp Revolt): Tazar une a gnolls y lizardmen para destruir las alcabalas e interceptores de Castillo.
• Misión de Campaña II: "Entre Dos Fuegos" (Between Two Fires): Resiste en tu metrópolis el asalto de pinza simultáneo de dos ejércitos de la IA (Castillo e Inferno).
• Misión de Campaña III: "La Guarida de las Hidras de Caos": Navega el río central y desciende al Templo Olvidado para reclamar la Hidra de Caos como unidad legendaria.

6. TORRE (Tower) - Libro de Misiones de "El Ascenso Alquímico":
• Mapas Únicos: "Alchemical Duel" (Duelo Alquímico - 2P Clash por mercurio), "Arcane Secrets" (Secretos Arcanos - 2P Coop descifrando manuscritos helados).
• Misión de Campaña I: "Nubes de Magos" (Mage Clouds): Junta riquezas de Oro para construir la Cofradía de Magos Nivel IV e invocar Titanes arcanos.
• Misión de Campaña II: "El Secreto del Alquimista" (The Alchemist's Secret): Consigue azufre y mercurio en glaciares para reactivar Gólems de Hierro inmunes a conjuros.
• Misión de Campaña III: "El Portal de las Tormentas" (The Storm Portal): Defiende el portal de transmutación durante 5 rondas contra hordas elementales enfurecidas.

7. INFIERNO (Inferno) - Libro de Misiones de "Dominio del Inframundo":
• Mapas Únicos: "Hellish Incursion" (Incursión - 2P Clash en baldosa inflamable), "Devilish Pact" (Pacto Diabólico - 2P Coop para corromper templos de Castillo).
• Misión de Campaña I: "Invasión de Azufre" (Sulfur Incursion): Abre 3 Portales del Abismo en fronteras humanas para invocar hordas de diablillos en la ronda 9.
• Misión de Campaña II: "Cosecha de Almas" (Soul Harvest): Asalta villas y consagra prisioneros para saciar la sed de recursos de los Archidiablos.
• Misión de Campaña III: "El Trono de Fuego Infernal" (Hellfire Throne): Lucha contra el Arcángel Guardián guiando a tus tropas sobre ríos de lava ardiente destructivos.

8. BASTIÓN (Stronghold) - Libro de Misiones de "El Festival de la Vida":
• Mapas Únicos: "Savage Lands" (Tierras Salvajes - 2P Clash de ataque potenciado), "Tribal Unity" (Unidad Tribal - 2P Coop para unificar clanes orcos).
• Misión de Campaña I: "Rito Salvaje" (Wild Rite): Kilgor rastrea y desafía cuerpo a cuerpo a un Behemoth alfa neutral en menos de 9 rondas de campaña.
• Misión de Campaña II: "El Sendero del Cazador" (Hunter's Path): Captura las guaridas de los cíclopes para reclutar estas letales bestias de melé pesada.
• Misión de Campaña III: "El Triunfo de Kilgor" (Kilgor's Triumph): Une por la fuerza los clanes bárbaros de Krewlod venciendo a generales bárbaros rivales.

9. CONFLUENCIA (Conflux) - Libro de Misiones de "El Balance Elemental":
• Mapas Únicos: "Elemental Skirmish" (Escaramuza - 2P Clash de inmunidad cambiante), "Astral Convergence" (Convergencia - 2P Coop defendiendo pilares).
• Misión de Campaña I: "Sellando las Grietas" (Sealing the Rifts): Cierra los rifts elementales corruptores mediante pergaminos de exorcismo antes de la ronda 10.
• Misión de Campaña II: "La Forja de los Elementos" (Elemental Forge): Une esencias puras en la forja rúnica para alistar poderosos Elementales de Tormenta.
• Misión de Campaña III: "Armonía Astral" (Astral Harmony): Combate espíritus de dragones caídos en el nexo cósmico, donde el daño físico básico está anulado.

10. BAHÍA (Cove) - Libro de Misiones de "Savage Seas":
• Mapas Únicos: "Isles of Regna" (Islas de Regna - 2-3P Clash marítimo e insular), "The Lost Fleet" (La Flota Perdida - 2P Coop salvando galeones).
• Misión de Campaña I: "Herrumbre y Polvo" (Rust and Dust): Jeremy despeja canales de boyas fantasmas y esqueletos piratas en 10 rondas usando barcos y astilleros.
• Misión de Campaña II: "Bajo la Bandera Alegre" (Under the Jolly Roger): Une tripulaciones libres asaltando guarniciones de Castillo y protegiendo al náufrago.
• Misión de Campaña III: "El Cuerno del Abismo" (Horn of the Abyss): Bidley viaja al foso volcánico marino para derrotar a la Serpiente Marina y reclamar la reliquia.`
  },
  {
    id: "tournament_rules_and_draft",
    title: "24. Opciones Avanzadas, Modo Torneo y Ajustes de Competición",
    category: "modes",
    content: `Para potenciar la simetría y profundidad competitiva del juego de mesa, se pueden activar las siguientes reglas reglamentarias avanzadas opcionales acordadas en la preparación:

1. Niebla de Guerra Dinámica (Tactical Fog of War):
Para juegos competitivos extremos. Las losetas colindantes a las adyacentes permanecen ocultas boca abajo. Solo al detener al héroe en los lindes de una loseta revelada se puede voltear la siguiente. Las habilidades de Exploración (Pathfinding) o el hechizo Ojo de Águila permiten revelar hasta 2 losetas de distancia de manera anticipada.

2. Reglas Oficiales de Torneo de Erathia (Tournament Pick & Ban):
• Veto de Facción: En fase de inicio, cada jugador veta 1 facción enemiga de la bolsa común.
• Draft de Héroes: Se barajan las cartas de Héroes de las facciones autorizadas, distribuyendo 3 al azar a cada jugador. Estos eligen 1 como Principal, descartan otro y pasan el restante al jugador de su derecha.
• Compensación Geográfica: El segundo jugador del orden de turno comienza con una ficha de movimiento inactiva adicional de Establos gratis en su capital para equilibrar la ventaja de movimiento inicial del primer jugador.

3. Logística de Relevo y Cadena de Suministro:
Un héroe secundario que finalice su PM en un nudo de camino o puente adyacente a un héroe principal de su misma facción puede transferirle de forma gratuita y sin coste de acción cualquier cantidad de monedas de oro, artefactos o regimientos de criaturas de su mano, permitiendo prolongar turnos militares de ataque complejos en las líneas enemigas.

4. Modo de Tiempo de Turno Reglamentario (Turn Timers):
En torneos con cronómetro táctico, cada jugador dispone de un pool de 3 minutos por turno. El exceso de tiempo consumido penaliza el siguiente turno de aventura restando de forma inmediata 1 Ficha de Movimiento en el atlas.`
  },
  {
    id: "rule_variants",
    title: "25. Variantes de Reglas Oficiales (Chaos, Draft, Split Decks y Gold Pool)",
    category: "modes",
    content: `Los creadores del juego de mesa sugieren variantes oficiales para ajustar la dificultad, reducir el azar o enriquecer la profundidad estratégica de las partidas de Heroes III:

1. CARTAS DE CAOS (Chaos Cards):
• Cada vez que un jugador vaya a descartar una carta de mano, debe removerla por completo del juego en su lugar. Acto seguido, roba la primera carta del mazo correspondiente y la sitúa directamente en su pila de descarte. (Las cartas de Estadística y Especialidad se descartan normalmente sin verse afectadas por esta variante).

2. EJÉRCITO NEUTRAL (Neutral Army):
• Al reclutar de forma ordinaria, en lugar de alistar tus tropas normales de facción, para cada vivienda que poseas edificada robas 2 cartas de unidad del mazo de Neutrales. Puedes alistar la cantidad que desees pagando su coste en Oro equivalente; el resto de cartas se descartan de forma definitiva.

3. INICIO CON DRAFT (Draft Start):
• Variante recomendada para 3 o más jugadores que sustituye los mazos de inicio fijos. Se aparta la habilidad inicial del héroe y su especialidad de nivel I. Se barajan de forma independiente los mazos de Artefacto, Hechizo y Habilidad. Cada jugador roba 2 cartas de cada uno, elige una para conservar y pasa el resto al jugador de la izquierda. Se repite alternando izquierda y derecha hasta formar un pool de 12 cartas drafteadas. Se añaden las cartas de Estadística según el tablero para sumar un mazo de 18 (Might) o 17 (Magic), del cual se eligen 7 cartas (descartando el resto) para juntar con las 2 iniciales apartadas y constituir la mano inicial de 9 cartas lista.

4. SEPARACIÓN DE DECK DE ARTEFACTOS Y HECHIZOS (Split Decks):
• Variante estándar para el Modo Torneo. Los artefactos se dividen en tres mazos físicos independientes (Menores, Mayores y Reliquias), y los Hechizos en dos mazos (Básicos y Expertos). Al conseguir un objeto o conjuro, el mazo elegible depende de la posición del Héroe Principal en el mapa:
  - Losetas I, II-III (Zonas iniciales/lejanas): Mazo de Artefactos Menores y Hechizos Básicos.
  - Losetas IV-V (Zonas intermedias): Mazo de Artefactos Menores o Mayores, y Hechizos Básicos o Expertos.
  - Losetas VI-VII (Zonas centrales/avanzadas): Mazo de Artefactos Menores, Mayores o Reliquias, y Hechizos Básicos o Expertos.

5. RESERVA DE ORO (Gold Pool):
• En partidas competitivas dinámicas, el pool de recursos se denomina 'Pool no gastado'. Al reclutar o reforzar regimientos, el Oro y los objetos de valor gastados se trasladan a una 'Reserva Reservada' especial al lado del mazo de tropa del jugador en lugar de retornar a la caja común. Al vender o perecer tropas en combate, el coste invertido en ellas retorna íntegro de la Reserva Reservada al Pool no gastado del jugador, mitigando el impacto devastador de bajas militares tempranas. Al rebajarse una tropa de Élite (Pack) a Básica (Few) por daño, el jugador recupera inmediatamente el coste de mejora.

6. TABLA DE REGLAS OPCIONALES (Dificultad Dinámica):
• Aumentar dificultad: Las ciudades enemigas conquistadas no producen ingresos al ser capturadas (solo habilitan sus edificios); prohibido relanzar dados; los dados de tesoro/recursos dan solo 1 de recurso; se elimina todo botín de inicio.
• Reducir dificultad: Iniciar con un Héroe Secundario gratuito; cada ataque inflige al menos 1 herida garantizada; producción duplicada en minas y asentamientos; Mercadillos visitables regalan 1 carta del mazo de Artefacto de inmediato; extender combate contra neutrales no consume PM.
• Variantes de Sistema: El dado de combate rojo no influye en las heridas (solo activa habilidades); se roba un anuncio astrológico al inicio de las rondas de recursos; eliminación completa de anuncios astrológicos en la partida; los cubos negros de enclaves visitados se remueven en las Rondas 4, 8 y 12.`
  },
  {
    id: "cove_maritime_locations",
    title: "26. Lugares Marítimos y de Expansión Cove (Savage Seas)",
    category: "map",
    content: `Las losetas de mar introducidas en la expansión Cove (Savage Seas) incorporan un conjunto propio de lugares visitables y obstáculos interactivos únicos:

1. TEMPLO DEL MAR (Sea Temple):
Custodiado por regimientos de Elementales de Agua y Serpientes Marinas de oro. Vencer al guardián confiere +1 Hechizo de Agua aleatorio experto de forma gratuita y un Botín del Dado de Tesoro.

2. NÁUFRAGO SUPERVIVIENTE (Shipwreck Survivor):
Enclave visitable de una sola vez. Al interactuar con él, el Héroe lanza el Dado de Tesoro. Si obtiene un éxito, añade un Artefacto Menor a su mano; si falla, gana +5 de Oro por el agradecimiento del marinero rescatado.

3. BOYA (Buoy):
Casilla que ayuda en la navegación. Pasar por una Boya restablece instantáneamente +1 Punto de Movimiento (PM) al Héroe de navegación por este turno.

4. REMOLINO (Whirlpool):
Obstáculo peligroso. Entrar en un Remolino cuesta un fin de movimiento inmediato. Además, debes lanzar un dado de combate: si se obtiene "-1", pierdes tu tropa de nivel más bajo en el naufragio. Conecta con otro Remolino del mapa como portal de teletransporte rápido.

5. RESTOS DE NAUFRAGIO (Shipwreck Lots):
Se asimilan a las criptas terrestres. Contienen tesoros guardados por fantasmas y piratas no-muertos. Ofrecen abundantes Objetos de Valor () y Dados de Tesoro.`
  },
  {
    id: "elemental_locations_conflux",
    title: "27. Lugares Elementales y Expansión Conflux",
    category: "map",
    content: `La expansión de Confluencia (Conflux) añade lugares de energía elemental pura para el mapa de aventura de Erathia:

1. PORTAL DE LOS ELEMENTOS (Elemental Portal):
Permite reclutar de forma directa elementales de Aire, Agua, Fuego o Tierra pagando Oro o el recurso elemental homónimo, sin necesidad de regresar a tu capital.

2. RIFTS ELEMENTALES (Rifts / Rifts de Fuego, Tierra, Aire, Agua):
Santuarios de dimensión paralela. El Héroe puede interactuar gastando 1 Acción para enfrentar una prueba de Hechicería (Poder) de nivel III. El éxito concede inmunidades elementales pasivas para su ejército o un pergamino místico.

3. ALTAR DE LA CONFLUENCIA (Conflux Altar):
Permite sacrificar cartas de Hechizo o Artefactos menores no deseados de tu mano para obtener Puntos de Experiencia (Exp) directa para tu Héroe u Objetos de Valor ().`
  },
  {
    id: "battlefield_expansion",
    title: "28. Expansión de Campo de Batalla (Battlefield Expansion)",
    category: "modes",
    content: `La Expansión de Campo de Batalla introduce un tablero gigante (Battlefield Board) y dos modos de juego enfocados puramente en combate táctico prescindiendo del mapa de exploración habitual, además de cambios en las reglas para partidas estándar:

1. MODOS DE JUEGO EXCLUSIVOS (1 vs. 1):
• Modo Aventura (Adventure Mode): Los jugadores experimentan una fase previa de aventura guiada por cartas de Aventura antes de un combate final decisivo. Se elige una duración de ronda fija:
  - Juego Corto: 9 Rondas.
  - Juego Medio: 13 Rondas.
  - Juego Largo: 16 Rondas.
  Durante las Rondas de Recursos se cobran ingresos de Ciudad, y en las Rondas Astrológicas se aumentan los tracks de ingresos de recursos a preferencia de los jugadores. Se roban cartas de Aventura tipo Evento o Combate. Para resolver cartas de Combate, los jugadores declaran un nivel de poder y calculan su Fuerza de Combate sumando valores de unidades más tiradas de dados rojos de ataque para ganar recompensas. Las cartas útiles solo para combate van directo al mazo de combate final; las de recursos/descuentos se apartan para un solo uso.
• Modo Escaramuza (Skirmish Mode): Se omite la fase de aventura. Los jugadores preparan directamente sus mazos y ejércitos de forma preconstruida según la duración acordada (Corto: Nivel III, Medio: Nivel V, Largo: Nivel VII, recibiendo unidades, habilidades, artefactos y hechizos preestablecidos por tabla) y entablan el Combate final.

2. REGLAS DE COMBATE DE CAMPO DE BATALLA (BATTLEFIELD COMBAT):
• Movimiento basado en Iniciativa: El rango de movimiento de cada miniatura sobre los hexágonos del tablero gigante es igual a su valor de Iniciativa (ej. Iniciativa 8 permite moverse hasta 8 hexágonos).
• Movimiento a Distancia (Ranged): Las unidades de ataque a distancia (Ranged) pueden moverse o disparar, pero nunca realizar ambas acciones en el mismo turno de activación.
• Penalización de Combate (Combat Penalty) para Arqueros: Los arqueros sufren penalización en sus dados de ataque si el objetivo está directamente adyacente O si se encuentra a una distancia de 8 o más hexágonos en el tablero gigante.
• Desempates de Iniciativa (Initiative Tie): En caso de empate de iniciativa entre unidades aliadas y hostiles, el jugador que posea la "Ficha de Iniciativa" activa una de sus unidades primero. Luego se alternan una a una. Al finalizar, la ficha pasa al oponente.
• Regresión de Turno: Al final de cada ronda completa de combate en estos modos, los jugadores recuperan un efecto Experto usado y roban 2 cartas de su mazo de combate.

3. INTEGRACIÓN EN EL JUEGO REGULAR:
• El tablero de Campo de Batalla puede usarse en partidas normales en sustitución del tablero táctico de 4x5.
• En duelos jugador contra jugador se permite desplegar hasta un máximo de 7 unidades (en lugar de 5). El atacante recibe la Ficha de Iniciativa al inicio del despliegue.
• Asedios con Murallas y Puertas: Se colocan los obstáculos en posiciones fijas como indica el reglamento. Las tropas defensoras solo pueden cruzar la puerta a través de los dos hexágonos centrales impresos en la ficha, mientras que el atacante puede golpear la puerta desde cualquiera de los cuatro hexágonos adyacentes.`
  },
  {
    id: "creature_banks",
    title: "29. Bancos de Criaturas (Creature Banks) y Fichas de Apilamiento (Stack Tokens)",
    category: "combat",
    content: `Los Bancos de Criaturas son lugares de batalla místicos añadidos por las expansiones que se sitúan sobre las losetas lejanas (II-III) o cercanas (IV-V) en sus casillas de obstáculo bloqueadas.

1. REGLAMENTO DE ASALTO Y DESPLIEGUE:
• Combate Estricto: Al entrar a un Banco de Criaturas, se debe derrotar a la guarnición fija del enclave. Estas zonas carecen de nivel de dificultad estándar, por lo que nunca admiten el "Combate Rápido" (Quick Combat). No existe límite de rondas para pelear y extender el combate no cuesta puntos de movimiento (PM). Tampoco se obtiene experiencia al ganar.
• Despliegue de Tropas: Se sitúan las tropas en una cuadrícula fija donde el bando jugador ocupa las líneas centrales de despliegue (P) y las criaturas guardianas del banco se despliegan rodeando los extremos de la reja táctica en las zonas defensivas marcadas (N).

2. FICHAS DE APILAMIENTO (STACK TOKENS) Y MECÁNICA DE PILAS:
• Durante la preparación, según la dificultad elegida para el escenario, se roban de 1 a 4 "Fichas de Apilamiento" (Stack Tokens) de forma aleatoria y se colocan boca abajo sobre las cartas de los defensores del Banco (Fácil: 1 ficha, Normal: 2 fichas, Difícil: 3 fichas, Imposible: 4 fichas).
• Modificadores de Estadística: Cada ficha de apilamiento volteada sobre un defensor altera sus capacidades:
  - Ficha de Espadas: +1 al Ataque.
  - Ficha de Escudo: +1 a la Defensa.
  - Ficha de Corazón: +1 a los Puntos de Vida (HP).
  - Ficha de Botas: +2 a la Iniciativa de combate.
• Regla de Unidad Apilada (Stacked Unit): Una criatura dotada con un Stack Token emula a un regimiento Élite. Al recibir un volumen de daño acumulado igual o superior a su vitalidad máxima, en lugar de ser eliminada de la reja, se descarta una ficha de apilamiento asignada y se absorbe el daño restante, deduciéndolo de su nueva vida. Las criaturas sin fichas de apilamiento mueren normalmente.

3. LISTADO DE ENCLAVES DE BANCOS DE CRIATURAS Y RECOMPENSAS:
• Far Map Tiles (Losetas II-III):
  - Reserva de Diablillos (Imp Cache): Custodiada por 4 Familiars. Recompensa: 3 de Oro. Extra: +1 de Oro por cada unidad apilada vencida.
  - Cripta (Crypt): Custodiada por 1 Skeletons, 1 Zombies, 1 Wraiths y 1 Vampires. Recompensa: 6 de Oro. Extra: +2 de Oro por unidad apilada vencida.
  - Tesorería Enana (Dwarven Treasury): Custodiada por 4 Dwarves. Recompensa: 7 de Oro. Extra: +3 de Oro por unidad apilada.
  - Almacén de Medusas (Medusa Stores): Custodiada por 4 Medusas. Recompensa: 6 de Oro, 1 Objeto de valor. Extra: +3 de Oro y +1 de Objeto de valor por unidad apilada.
  - Colmena de Moscas de Dragón (Dragon Fly Hive): Custodiada por 4 Dragon Flies. Recompensa: 1 carta de Dragon Flies. Extra: Las Dragon Flies obtenidas se reciben en rango Élite (Stacked) si se derrotaron al menos 2 unidades apiladas en el asalto.
  - Naufragio (Shipwreck): Custodiada por 4 Wraiths. Recompensa: Ficha de moral negativa y 5 de Oro. Extra: +2 de Oro y realizar una búsqueda (X) en el mazo de Artefactos.
• Near Map Tiles (Losetas IV-V):
  - Barco Derrelicto (Derelict Ship): Custodiada por 4 Wraiths. Recompensa: Ficha de moral negativa y 5 de Oro. Extra: +2 de Oro y búsqueda (X) de Artefactos.
  - Pirámide (Pyramid): Custodiada por 1 Gólem de oro, 1 Gólem de diamante y momias. Recompensa: Búsqueda (5) de Hechizos. Extra: Permite remover hasta X cartas redundantes de tu descarte para buscar (5) en los mazos correspondientes.
  - Conservatorio de Grifos (Griffin Conservatory): Custodiada por 4 Griffins. Recompensa: 1 unidad de Griffins. Extra: Se reciben en rango Stacked si se derrotaron al menos 2 unidades apiladas en el combate.
  - Banco de Nagas (Naga Bank): Custodiada por 4 Nagas. Recompensa: 6 de Oro, 2 Objetos de valor. Extra: +6 de Oro y +1 de Objeto de valor por unidad apilada.
  - Almacén de Cíclopes (Cyclops Stockpile): Custodiada por 4 Cyclopes. Recompensa: 8 de Oro, 2 Objetos de valor. Extra: +2 de Oro y +1 de Objeto de valor por unidad apilada.
  - Utopía de Dragones (Dragon Utopia): Custodiada por 1 Black Dragons, 1 Gold Dragons, 1 Faerie Dragons, 1 Crystal Dragons. Recompensa: 40 de Oro y búsqueda (3) en el mazo de Artefactos. Extra: X búsquedas (5) en los mazos de Artefactos o Hechizos.`
  },
  {
    id: "card_keywords_tokens",
    title: "30. Palabras Clave de Efectos de Cartas y Fichas en Unidades",
    category: "combat",
    content: `Las expansiones agregan palabras clave operativas y fichas de estado temporales o permanentes que alteran la física de las tropas en el tablero táctico:

1. PALABRAS CLAVE DE CONJUROS Y HECHIZOS:
• Clonar (Clone Token): Al conjurar el hechizo Clone en un regimiento aliado, se sitúa una ficha pequeña de clon en el regimiento y un token grande del mismo color en una casilla libre contigua. El clon hereda de forma idéntica todas las estadísticas pasivas básicas de la carta original, pero excluye cualquier bufo activo aplicado sobre ella. Si el clon recibe al menos 1 de daño de cualquier fuente O es el objetivo de un ataque directo (aunque inflija 0 heridas), sufre muerte automática y se remueve de la mesa. Desaparece si la tropa original es eliminada.
• Arenas Movedizas (Quicksand Token): Tras conjurar el hechizo de tierra, se sitúan de 2 a 6 fichas de arena movediza boca abajo en el tablero (la mitad vacías, la mitad con el icono de fango). Al entrar un regimiento en la casilla se voltea la ficha: si contiene el icono de fango, el movimiento y activación de la unidad cesan de forma fulminante en esa casilla en esta ronda. Dos arenas de distintos colores de jugador pueden ocupar la misma casilla.
• Mina Terrestre (Land Mine Token): Se sitúan de 2 a 6 fichas boca abajo en el tablero (la mitad vacías, la mitad con icono de explosión de 2 de daño). Al pisarse, detiene el movimiento de la unidad. Si muestra el icono de explosión, inflige 2 de daño directo por fuego a la unidad. Si esta sobrevive, continúa su activación.
• Campo de Fuerza (Force Field Token): Crea un obstáculo rectangular indestructible que cubre 1 espacio en tableros normales o 2 espacios en Campo de Batalla. Solo las unidades aéreas (Flying) pueden cruzar o volar sobre él; las unidades terrestres sufren bloqueo físico completo.
• Muro de Fuego (Fire Wall Token): Creado por el hechizo homónimo de fuego o por las cartas de Especialidad I y VI del héroe Luna (Confluencia). Inflige daño de fuego puro de área al inicio de la activación de cualquier regimiento enemigo que comience o transite por las casillas de fuego rúnico.

2. MECÁNICAS DE INVOCACIÓN (SUMMONING):
• Invocación Elemental (Summon Elementals): Los conjuros elementales añaden elementales de aire, tierra, agua o fuego en casillas libres del combate. Estas unidades aliadas operan de forma temporal bajo tu control. Si su iniciativa es inferior o igual a la de la unidad activa del turno actual, se activan en esta misma ronda; en caso contrario, se consideran ya activadas. Nunca se añaden de forma permanente a tu mazo de unidades al concluir la contienda; se disipan por completo.
• Invocación de Demonios (Summon Demons): Las unidades de Señores del Abismo (Pit Lords) de Inferno pueden usar su habilidad activa especial (icono de espiral) para resucitar o invocar unidades de "Demons" de forma gratuita a partir de bajas sufridas por otras unidades aliadas en combate. Si las tropas resucitadas sobreviven al concluir el combate, estas cartas de Demons SÍ se agregan de forma permanente al mazo de unidades del jugador como nuevas reclutas.

3. FICHAS DE ESTADO EN UNIDADES (TOKENS ON UNITS):
• Ficha de Debilidad (Weakness Token - Cove/SG2): Aplica un penalizador de -1 o -2 a la estadística de Ataque físico del regimiento afectado según la cara de la ficha mostrada. Colocada por habilidades de unidades de apoyo como las Hechiceras (Sorceresses). Límite de una ficha por regimiento.
• Ficha de Ataque (Attack Token - Stronghold/SG2): Incrementa la fuerza de ataque en +1 o +2 según la cara mostrada. Es otorgada por unidades de primera línea como los Ogros mediante su grito de batalla rúnico.
• Ficha de Corrosión (Corrosion Token - Stronghold): Reduce de forma permanente la estadística de defensa del regimiento objetivo en -1 punto (hasta un mínimo absoluto de 0 defensa). Una unidad solo puede albergar una ficha de corrosión activa. No se elimina al concluir los turnos individuales de combate; dura hasta el fin de la contienda táctica en curso. Colocada por bestias feroces como los Behemoths.`
  },
  {
    id: "wiki_cards_components",
    title: "31. Compendio de Cartas y Componentes (es.homm3bg.wiki)",
    category: "components",
    content: `De acuerdo con la base de datos comunitaria (https://es.homm3bg.wiki/), el juego se vertebra sobre un compendio robusto de cartas y elementos físicos diseñados para emular la jugabilidad del clásico del 99:

1. CARTAS DEL COMPENDIO Y SU FUNCIONAMIENTO:
• Cartas de Unidad / Tropas: Cada facción cuenta con sus unidades terrestres de rango Bronce, Plata y Oro. Tienen doble cara (Rango Básico y Rango Élite). Indican: Vida (Puntos de Herida), Iniciativa de Combate, Ataque Físico, Defensa Militar, Rango de Movimiento/Alcance y Habilidades Especiales pasivas/activas.
• Cartas de Hechizo (Spell Cards): Se adquieren principalmente en la Cofradía de Magos o en Santuarios. Requieren Conocimiento para estar en la mano y Maná para lanzarse. Se dividen en Hechizos de Combate (bufos, debufs, daño directo) y Hechizos de Mapa de Aventura (ej. Volar, Dimension Door).
• Cartas de Habilidad (Ability Cards): Representan la progresión del Héroe. Al subir de nivel a un rango Plata (II, III, V, VII), se draftea de un mazo común. Poseen un efecto Básico (gratis) y un efecto Experto (requiere gastar un contador de Experto para activarse en el turno).
• Cartas de Especialidad (Specialty Cards): Únicas e intransferibles de cada Héroe. Se obtienen automáticamente al alcanzar el rango Dorado (niveles IV y VI). Potencian de forma asimétrica la estrategia natal o el rasgo icónico del Héroe.
• Cartas de Artefacto (Artifact Cards): Se clasifican en Menores, Mayores y Reliquias. Siempre que se obtienen, van DIRECTAMENTE A LA MANO (no al mazo). Se juegan descartándose en tu mazo de Poder y Magia, excepto si indican expresamente ser Permanentes. El Grial es una Reliquia Mítica única que permite fundar la estructura máxima en tu metrópolis.
• Cartas de Ciudad (Town Cards): Tarjetas de referencia y control de tu Metrópolis. Rigen de forma asimétrica qué edificios se han construido (Ayuntamiento, Cofradía de Magos, Viviendas), sus costes de construcción y la producción pasiva de recursos.
• Cartas de Caja de Pandora (Pandora's Box): Detonan batallas instantáneas de emboscada contra neutrales potenciados a cambio de gigantescas sumas de oro, maestrías o reliquias místicas directas.

2. OTROS COMPONENTES REGLAMENTARIOS INDEXADOS:
• Dados Especiales (d6): El Dado de Recursos (otorga Oro, Madera/Mineral, Objetos de Valor o cara en blanco) y el Dado de Combate (-1, 0 o +1 de modificador al daño).
• Losetas de Mapa de Aventura: Losetas de cartón hexagonales numeradas de I a VII que modulan la dificultad de los encuentros y enclaves neutrales.
• Fichas de Control y Estado: Fichas de Tiempo (rondas de escenario), Fichas de Mina Terrestre, Fichas de Campo de Fuerza, Fichas de Arenas Movedizas, y modificadores como Fichas de Ataque, Debilidad o Corrosión.`
  },
  {
    id: "wiki_heroes_specialties",
    title: "32. Tarjetas de Héroes: Características y Especialidades (las 10 Facciones)",
    category: "combat",
    content: `La wiki oficial de la comunidad detalla exhaustivamente las características iniciales, habilidades primarias de salida y especialidades de los Héroes oficiales para las 10 facciones asimétricas del juego:

1. CASTILLO (CASTLE):
• Catherine (Poder - Knight): Habilidad Inicial: Liderazgo (Leadership) | Especialidad: Cruzados (Crusaders). Otorga ventajas ofensivas masivas a los Espadachines y Cruzados de Erathia.
• Valeska (Poder - Knight): Habilidad Inicial: Arquería (Archery) | Especialidad: Arqueros (Marksmen). Potencia el ataque a distancia de los Arqueros y Ballesteros.
• Lord Haart (Poder - Knight): Habilidad Inicial: Finanzas (Estates) | Especialidad: Finanzas (Estates). Genera oro adicional pasivo para la metrópolis.
• Christian (Poder - Knight): Habilidad Inicial: Artillería (Artillery) | Especialidad: Balista (Ballista). Comienza con una Balista en su mazo y duplica su efectividad ofensiva.
• Adelaide (Magia - Cleric): Habilidad Inicial: Sabiduría (Wisdom) | Especialidad: Anillo Helado (Frost Ring). Capacidad arcana para conjurar un anillo helado que inflige daño y congela a las unidades enemigas adyacentes.
• Rion (Magia - Cleric): Habilidad Inicial: Sabiduría (Wisdom) | Especialidad: Médico de Campaña (Battlefield Medic). Potencia las curaciones de tus tropas en batalla.
• Ingham (Magia - Cleric): Habilidad Inicial: Misticismo (Mysticism) | Especialidad: Fanáticos (Zealots). Potencia las capacidades de los Fanáticos en combate.

2. NECRÓPOLIS (NECROPOLIS):
• Tamika (Poder - Death Knight): Habilidad Inicial: Ataque (Offense) | Especialidad: Caballeros del Pavor (Dread Knights). Potencia las estadísticas de ataque y daño de los Caballeros del Pavor.
• Moandor (Poder - Death Knight): Habilidad Inicial: Nigromancia (Necromancy) | Especialidad: Liches (Liches). Convierte tropas o eleva el mazo de Liches.
• Lord Haart (Poder - Death Knight): Habilidad Inicial: Nigromancia (Necromancy) | Especialidad: Caballeros del Pavor (Dread Knights). Incrementa la efectividad de las unidades del Pavor.
• Sandro (Magia - Necromancer): Habilidad Inicial: Hechicería (Sorcery) | Especialidad: Capa del Rey de los No Muertos (Cloak of the Undead King). Convierte una parte de las tropas caídas en combate en Esqueletos permanentes para su mazo de unidades.
• Vidomina (Magia - Necromancer): Habilidad Inicial: Nigromancia (Necromancy) | Especialidad: Nigromancia (Necromancy). Aumenta significativamente el reclutamiento de tropas muertas.
• Septienna (Magia - Necromancer): Habilidad Inicial: Nigromancia (Necromancy) | Especialidad: Oleada de Muerte (Death Ripple). Capacidad arcana única de infligir daño masivo a regimientos vivos en batalla táctica.

3. MURALLAS (RAMPART):
• Gelu (Poder - Ranger): Habilidad Inicial: Arquería (Archery) | Especialidad: Tiradores (Sharpshooters). Permite mejorar de forma permanente sus unidades de Arqueros o Elfos a Tiradores de élite que ignoran penalizaciones de distancia.
• Mephala (Poder - Ranger): Habilidad Inicial: Liderazgo (Leadership) | Especialidad: Armadura (Armorer). Otorga a sus unidades aliadas una reducción pasiva de daño que mitiga golpes enemigos.
• Clancy (Poder - Ranger): Habilidad Inicial: Buscador de Caminos (Pathfinding) | Especialidad: Unicornios (Unicorns). Potencia la agilidad and el ataque de los Unicornios aliados.
• Ivor (Poder - Ranger): Habilidad Inicial: Ataque (Offense) | Especialidad: Elfos (Elves). Mejora sustancialmente a los Elfos Silvanos y Grandes Elfos.
• Gem (Magia - Druid): Habilidad Inicial: Primeros Auxilios (First Aid) | Especialidad: Primeros Auxilios (First Aid). Comienza con una Tienda de Auxilio gratuita y duplica las heridas curadas de sus tropas aliadas dañadas.
• Melodia (Magia - Druid): Habilidad Inicial: Suerte (Luck) | Especialidad: Fortuna (Fortune). Aumenta drásticamente la suerte y la moral de su ejército en momentos críticos.

4. MAZMORRA (DUNGEON):
• Mutare (Poder - Overlord): Habilidad Inicial: Tácticas (Tactics) | Especialidad: Dragones (Dragons). Incrementa la Iniciativa y el daño de todas las unidades con la palabra clave Dragón en su ejército.
• Lorelei (Poder - Overlord): Habilidad Inicial: Exploración (Scouting) | Especialidad: Harpías (Harpies). Mejora drásticamente el ataque aéreo y movilidad de las Harpías.
• Alamar (Magia - Warlock): Habilidad Inicial: Sabiduría (Wisdom) | Especialidad: Resurrección (Resurrection). Hechicero de tierra experto capaz de resucitar de forma permanente tropas vivas caídas en combate.
• Jeddite (Magia - Warlock): Habilidad Inicial: Hechicería (Sorcery) | Especialidad: Brujo Misterioso (Mysterious Warlock). Otorga ventajas en el mazo de hechizos y regeneración de maná.
• Deemer (Magia - Warlock): Habilidad Inicial: Exploración (Scouting) | Especialidad: Lluvia de Meteoros (Meteor Shower). Comienza con este devastador hechizo destructivo de área de tierra.
• Sephinroth (Magia - Warlock): Habilidad Inicial: Inteligencia (Intelligence) | Especialidad: Objetos de Valor (Valuables). Genera recursos místicos adicionales pasivos para la facción.

5. TORRE (TOWER):
• Josephine (Poder - Alchemist): Habilidad Inicial: Hechicería (Sorcery) | Especialidad: Gólems (Gólems). Potencia la defensa y durabilidad de los Gólems aliados.
• Iona (Poder - Alchemist): Habilidad Inicial: Inteligencia (Intelligence) | Especialidad: Genios (Genies). Incrementa el ataque y la iniciativa de los Genios en combate.
• Torosar (Poder - Alchemist/Wizard): Habilidad Inicial: Misticismo (Mysticism) | Especialidad: Balista (Ballista). Sus máquinas de guerra ganan iniciativa y daño por metralla explosiva.
• Solmyr (Magia - Wizard): Habilidad Inicial: Hechicería (Sorcery) | Especialidad: Rayo en Cadena (Chain Lightning). Comienza el juego con este devastador hechizo de daño a múltiples objetivos.
• Dracon (Magia - Wizard): Habilidad Inicial: Sabiduría (Wisdom) | Especialidad: Encantadores (Enchanters). Mejora o invoca unidades de Encantadores arcanos potentes.
• Cyra (Magia - Wizard): Habilidad Inicial: Diplomacia (Diplomacy) | Especialidad: Celeridad (Haste). Facilita el paso táctico rápido y la iniciativa máxima para su ejército.

6. INFIERNO (INFERNO):
• Fiona (Poder - Demoniac): Habilidad Inicial: Exploración (Scouting) | Especialidad: Cerberos (Cerberi). Invoca sabuesos del infierno y potencia su ataque de tres cabezas (daño a múltiples casillas).
• Rashka (Poder - Demoniac): Habilidad Inicial: Erudito (Scholar) | Especialidad: Efreets (Efreet). Potencia la fuerza de combate y la resistencia al fuego de los Efreets y Sultanes de Efreet.
• Octavia (Poder - Demoniac): Habilidad Inicial: Erudito (Scholar) | Especialidad: Oro (Gold). Aumenta pasivamente la economía de la metrópolis con ingresos adicionales de Oro.
• Zydar (Magia - Heretic): Habilidad Inicial: Hechicería (Sorcery) | Especialidad: Hechicería (Sorcery). Maximiza el daño infligido por hechizos de daño directo.
• Xyron (Magia - Heretic): Habilidad Inicial: Sabiduría (Wisdom) | Especialidad: Infierno (Inferno). Especialista en desatar fuegos mágicos de área de gran calibre.
• Ash (Magia - Heretic): Habilidad Inicial: Ojo de Águila (Eagle Eye) | Especialidad: Ansia de Sangre (Bloodlust). Añade bufos ofensivos masivos a sus tropas durante el combate.

7. BASTIÓN (STRONGHOLD):
• Crag Hack (Poder - Barbarian): Habilidad Inicial: Ataque (Offense) | Especialidad: Ataque (Offense). Incrementa drásticamente el daño físico infligido por todas sus unidades en ataques cuerpo a cuerpo.
• Shiva (Poder - Barbarian): Habilidad Inicial: Exploración (Scouting) | Especialidad: Pájaros del Trueno (Thunderbirds). Mejora las estadísticas de ataque, defensa y velocidad de vuelo de los Rocs y Aves de Trueno.
• Yog (Poder - Barbarian): Habilidad Inicial: Ataque (Offense) | Especialidad: Cíclopes (Cyclopes). Potencia el lanzamiento de piedras y la fuerza destructiva de los Cíclopes.
• Dessa (Magia - Battle Mage): Habilidad Inicial: Logística (Logistics) | Especialidad: Logística (Logistics). Aumenta los Puntos de Movimiento (PM) iniciales del Héroe en el mapa de aventura cada turno de juego.
• Gundula (Magia - Battle Mage): Habilidad Inicial: Sabiduría (Wisdom) | Especialidad: Ralentizar (Slow). Comienza con el hechizo Ralentizar de Tierra, reduciendo la iniciativa de las filas enemigas de forma eficaz.

8. FORTALEZA (FORTRESS):
• Tazar (Poder - Beastmaster): Habilidad Inicial: Armadura (Armorer) | Especialidad: Héroe de Guerra (War Hero). Reduce drásticamente las heridas sufridas por sus tropas en combate táctico y otorga defensas extremas.
• Bron (Poder - Beastmaster): Habilidad Inicial: Resistencia (Resistance) | Especialidad: Basilisks (Basilisks). Comienza con un basilisco Élite adicional y potencia la probabilidad de petrificación enemiga.
• Gerwulf (Poder - Beastmaster): Habilidad Inicial: Armadura (Armorer) | Especialidad: Balista (Ballista). Aumenta el daño y la precisión a larga distancia de su Balista aliada.
• Wystan (Poder - Beastmaster): Habilidad Inicial: Arquería (Archery) | Especialidad: Hombres Lagarto (Lizardmen). Aumenta sustancialmente el ataque de los Hombres Lagarto y Guerreros Lagarto.
• Adrienne (Magia - Witch): Habilidad Inicial: Sabiduría (Wisdom) | Especialidad: Magia de Fuego (Fire Magic). Desbloquea habilidades ígneas expertas y aumenta el daño por fuego del ejército.
• Merist (Magia - Witch): Habilidad Inicial: Primeros Auxilios (First Aid) | Especialidad: Piel de Piedra (Stone Skin). Otorga ventajas de protección física y aumenta la armadura de las tropas de apoyo.

9. CONFLUENCIA (CONFLUX):
• Monere (Poder - Planeswalker): Habilidad Inicial: Logística (Logistics) | Especialidad: Elementales de Magia (Magic Elementals). Duplica el potencial ofensivo e inmunidades de los Elementales de Magia.
• Erdamon (Poder - Planeswalker): Habilidad Inicial: Finanzas (Estates) | Especialidad: Elementales de Magma (Magma Elementals). Otorga bonificaciones extremas de defensa a los Elementales de Tierra/Magma.
• Pasis (Poder - Planeswalker): Habilidad Inicial: Artillería (Artillery) | Especialidad: Elementales (Elementals). Potencia el daño de todas sus invocaciones elementales activas en el tablero.
• Luna (Magia - Elementalist): Habilidad Inicial: Magia de Fuego Básica (Basic Fire Magic) | Especialidad: Muro de Fuego (Fire Wall). Capacidad inigualable para invocar barreras de fuego que devoran enemigos.
• Ciele (Magia - Elementalist): Habilidad Inicial: Magia de Agua (Water Magic) | Especialidad: Flecha Mágica (Magic Arrow). Potencia de forma drástica el daño del proyectil elemental común.
• Grindan (Magia - Elementalist): Habilidad Inicial: Sabiduría (Wisdom) | Especialidad: Ralentizar (Slow). Especialista en inmovilizar y mermar el movimiento enemigo en la reja táctica.

10. BAHÍA (COVE):
• Jeremy (Poder - Captain): Habilidad Inicial: Ataque (Offense) | Especialidad: Cañón (Cannon). Empieza la partida con un Cañón pesado de Bahía que inflige daño masivo por ronda.
• Cassiopeia (Poder - Captain): Habilidad Inicial: Tácticas (Tactics) | Especialidad: Oceanidades (Oceanids). Potencia las estadísticas de combate de las Oceanidades en la línea frontal.
• Miriam (Poder - Captain): Habilidad Inicial: Logística (Logistics) | Especialidad: Exploración (Scouting). Incrementa los Puntos de Movimiento y revela losetas de mapa adyacentes de forma gratuita.
• Casmetra (Magia - Navigator): Habilidad Inicial: Sabiduría (Wisdom) | Especialidad: Hechiceras (Sorceresses). Acelera la adquisición y efectividad de las Hechiceras aliadas.
• Zilare (Magia - Navigator): Habilidad Inicial: Interferencia (Interference) | Especialidad: Olvido (Forgetfulness). Hechicero de apoyo capaz de nublar la mente de arqueros enemigos para impedir sus ataques.
• Astra (Magia - Navigator): Habilidad Inicial: Suerte (Luck) | Especialidad: Curar (Cure). Especialista en restaurar la vida de regimientos dañados usando magias de agua.

Nota de Campaña: El héroe legendario Tarnum (Poder/Magia) está presente en múltiples facciones (Castillo, Mazmorra, Rampart, Fortress, Stronghold y Conflux) representando sus distintas encarnaciones históricas a través de las campañas oficiales de las expansiones ("Heroes Chronicles").`
  },
  {
    id: "wiki_heroes_abilities",
    title: "33. Habilidades y Progresión del Héroe (Guía Completa de es.homm3bg.wiki)",
    category: "combat",
    content: `Las Habilidades (Ability Cards) representan la progresión, entrenamiento y maestrías del Héroe. Al subir de nivel a un rango de Plata (niveles II, III, V y VII), el Héroe realiza un drafteo del mazo común de habilidades.

MECÁNICA GENERAL DE LAS HABILIDADES:
• Rango Básico: Es el efecto inicial de la carta. No requiere recursos y se puede usar de forma pasiva o instantánea según se indica.
• Rango Experto: Para activar el efecto Experto de una carta de habilidad, el jugador debe gastar un marcador o ficha de Experto durante su turno.
• Limitaciones: Cada héroe tiene su propio pool de habilidades y límites asimétricos según su clase (Poder o Magia).

GUÍA COMPLETA DE HABILIDADES DEL COMPENDIO (es.homm3bg.wiki):

1. Magia de Aire (Air Magic):
• Básico: Permanente: +1 Poder para hechizos de la Escuela de Aire.
• Experto: Al lanzar un Hechizo de la Escuela de Aire, puedes descartar esta carta para ganar +3 Poder de forma instantánea.

2. Arquería (Archery):
• Básico: En curso: Durante esta ronda de combate, tus unidades a distancia ganan +1 Ataque si el objetivo es una unidad no adyacente.
• Experto: En curso: Hasta el final de la siguiente ronda de combate, tus unidades a distancia ganan +1 Iniciativa y +1 Ataque si el objetivo es una unidad no adyacente.

3. Armadura (Armorer):
• Básico: Instantáneo: +1 Defensa en esta ronda de combate, luego roba 1 carta.
• Experto: Instantáneo: +2 Defensa en esta ronda de combate, luego roba 1 carta.

4. Artillería (Artillery):
• Básico: Instantáneo: Inflige 1 daño a una unidad enemiga con la menor iniciativa.
• Experto: Instantáneo: Al usar la carta de Balista, resuelve su efecto contra el mismo objetivo 3 veces de forma consecutiva.

5. Balística (Ballistics):
• Básico: Instantáneo: Juega esta carta durante un asedio. Destruye 1 Muro o Puerta de forma instantánea.
• Experto: Instantáneo: Juega esta carta durante un asedio. Destruye la Torre de Flechas (Arrow Tower) enemiga.

6. Magias Básicas Elementales (Basic Air / Earth / Fire / Water Magic - Expansión Confluencia):
• Básico: Permanente: En lugar de buscar en el mazo de Hechizos, busca el primer Hechizo de la Escuela correspondiente en él, colócalo en tu mano y baraja el mazo.
• Experto: Instantáneo: +3 Poder para un Hechizo de la Escuela elemental correspondiente.

7. Diplomacia (Diplomacy):
• Básico: Efecto de mapa: Por cada morada (Dwelling) controlada, roba 1 carta de Unidad Neutral correspondiente. Puedes reclutarla pagando su coste en Oro.
• Experto: Instantáneo: Salta el combate con unidades neutrales en un campo cuya dificultad de campo sea menor o igual al nivel de tu Héroe. Reclama el campo y visítalo de forma gratuita sin combatir (este Héroe no gana Experiencia).

8. Ojo de Águila (Eagle Eye):
• Básico: Instantáneo: Roba cartas del mazo de Hechizos hasta revelar un Hechizo Básico. Ponlo en tu mano y baraja el resto en el mazo.
• Experto: Instantáneo: Roba cartas del mazo de Hechizos hasta revelar un Hechizo Experto. Ponlo en tu mano y baraja el resto en el mazo.

9. Magia de Tierra (Earth Magic):
• Básico: Permanente: +1 Poder para hechizos de la Escuela de Tierra.
• Experto: Al lanzar un Hechizo de la Escuela de Tierra, puedes descartar esta carta para ganar +3 Poder de forma instantánea.

10. Finanzas (Estates):
• Básico: Instantáneo: Gana 3 de Oro de forma inmediata.
• Experto: Instantáneo: Gana 6 de Oro de forma inmediata.

11. Magia de Fuego (Fire Magic):
• Básico: Permanente: +1 Poder para hechizos de la Escuela de Fuego.
• Experto: Al lanzar un Hechizo de la Escuela de Fuego, puedes descartar esta carta para ganar +3 Poder de forma instantánea.

12. Primeros Auxilios (First Aid):
• Básico: Instantáneo: Elimina 1 daño/herida de una de tus unidades.
• Experto: Instantáneo: Al usar la Tienda de Primeros Auxilios, resuelve su efecto contra el mismo objetivo 3 veces de forma consecutiva.

13. Inteligencia (Intelligence):
• Básico: Instantáneo: Durante el combate, justo antes de que cualquier unidad se active, puedes jugar una carta de Hechizo (aplica el límite de 1 hechizo por ronda).
• Experto: Instantáneo: Durante el combate, antes de que cualquier unidad se active, juega una carta de Hechizo. Este hechizo no cuenta para tu límite por ronda.

14. Interferencia (Interference):
• Básico: Instantáneo: Otorga +1 Defensa. Este efecto puede usarse para reducir el daño directo de hechizos enemigos.
• Experto: Instantáneo: Otorga +2 Defensa, utilizable para reducir el daño infligido por hechizos enemigos.

15. Liderazgo (Leadership):
• Básico: Instantáneo: Gana una ficha de Moral Positiva (+1).
• Experto: Instantáneo: Roba 2 cartas de tu mazo de Poder y Magia, y gana una ficha de Moral Positiva.

16. Aprendizaje (Learning):
• Básico: Instantáneo: Juega cuando el Héroe esté a punto de subir de nivel. Avanza su nivel de experiencia en medio nivel (0.5) adicional gratis.
• Experto: Instantáneo: Juega cuando el Héroe esté a punto de subir de nivel. Avanza su nivel de experiencia en un nivel completo adicional, luego retira esta carta de la partida.

17. Logística (Logistics):
• Básico: En curso: Al final de tu turno, mueve la miniatura de tu Héroe a un campo vacío adyacente en el mapa.
• Experto: Instantáneo: Tu Héroe gana +1 Punto de Movimiento (PM) de forma inmediata.

18. Suerte (Luck):
• Básico: En curso: Puedes volver a tirar el dado de Tesoro o el dado de Recursos una vez durante este turno.
• Experto: En curso: Puedes volver a tirar cualquier dado una vez durante este turno.

19. Misticismo (Mysticism):
• Básico: Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En lugar de descartar la carta de Hechizo, devuélvela a tu mano de inmediato.
• Experto: Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En lugar de descartarla, devuelve la carta de Hechizo y todas las demás cartas aliadas jugadas con ella a tu mano.

20. Nigromancia (Necromancy):
• Básico: Efecto de mapa: Juega después de ganar un combate que no sea Combate Rápido. Puedes reforzar una unidad de Bronce o Plata de tu elección a mitad de su coste en Oro (redondeado hacia abajo).
• Experto: Efecto de mapa: Juega después de ganar un combate que no sea Combate Rápido. Puedes reforzar cualquier unidad de tu elección por la mitad de su coste en Oro (redondeado hacia abajo).

21. Ofensiva / Ataque (Offense):
• Básico: Instantáneo: Otorga +1 Ataque a tus unidades en esta ronda, luego roba 1 carta.
• Experto: Instantáneo: Otorga +2 Ataque a tus unidades en esta ronda, luego roba 1 carta.

22. Buscador de Caminos (Pathfinding):
• Básico: Efecto de mapa: Este turno, tu Héroe puede moverse a través de campos con Unidades Neutrales y Héroes Enemigos, pero si finaliza su movimiento en ellos, el combate comenzará de forma inmediata.
• Experto: Efecto de mapa: Tu Héroe puede moverse sobre fronteras amarillas y campos bloqueados, pero no puede terminar su movimiento en ellos.

23. Resistencia (Resistance):
• Básico: Instantáneo: Juega esta carta inmediatamente después de que el enemigo lance un hechizo. Si se lanzó con 1 de Poder o menos, ignora por completo el efecto del hechizo.
• Experto: Instantáneo: Juega inmediatamente después de que el enemigo lance un hechizo. Ignora por completo el efecto de la carta de Hechizo enemiga.

24. Erudito / Sabio (Scholar):
• Básico: Instantáneo: Elige 1 carta de tu pila de descartes y devuélvela directamente a tu mano.
• Experto: Efecto de mapa: Elimina hasta 2 cartas de Estadística de tu mano o pila de descarte. Coge hasta 2 cartas de Estadística Potenciadas diferentes y ponlas encima de tu pila de descarte, luego retira al Erudito de la partida.

25. Exploración (Scouting):
• Básico: Instantáneo: Juega antes de realizar una acción de Búsqueda, luego realiza Búsqueda(3) en su lugar.
• Experto: Instantáneo: Juega antes de realizar una acción de Búsqueda, luego realiza Búsqueda(5) en su lugar.

26. Hechicería (Sorcery):
• Básico: Instantáneo: +1 Poder al lanzar hechizos en esta ronda, luego roba 1 carta de tu mazo.
• Experto: Instantáneo: +2 Poder al lanzar hechizos en esta ronda, luego roba 1 carta de tu mazo.

27. Tácticas (Tactics):
• Básico: Instantáneo: Al inicio del combate, puedes intercambiar la posición de cualesquiera 2 de tus unidades en el tablero de batalla.
• Experto: Activación: Durante el combate, puedes intercambiar la posición de cualesquiera 2 de tus unidades en tu turno.

28. Magia de Agua (Water Magic):
• Básico: Permanente: +1 Poder para hechizos de la Escuela de Agua.
• Experto: Al lanzar un Hechizo de la Escuela de Agua, puedes descartar esta carta para ganar +3 Poder de forma instantánea.

29. Sabiduría (Wisdom):
• Básico: El coste de compra de hechizos en esta Ciudad se reduce en 2 de Oro. Al comprar hechizos de tu Gremio de Magos, realiza Búsqueda(3) en lugar de Búsqueda(2).
• Experto: El coste de compra de hechizos en esta Ciudad se reduce en 2 de Oro. Al comprar hechizos de tu Gremio de Magos, realiza Búsqueda(4) en lugar de Búsqueda(2).`
  },
  {
    id: "wiki_cities_buildings",
    title: "34. Desarrollo Urbano: Ciudades y Catálogo de Edificios de Facción",
    category: "town",
    content: `El desarrollo de la metrópolis es fundamental para sustentar la economía de Erathia. La wiki de la comunidad (https://es.homm3bg.wiki/) describe la planificación y el catálogo completo de estructuras construibles:

1. ESTRUCTURAS COMUNES Y MEJORAS URBANAS:
• Ayuntamiento (Town Hall / City Hall / Capitol):
  - Nivel I (Town Hall): Producción básica de +10 de Oro por ronda de recursos. Coste: Inicial.
  - Nivel II (City Hall): Incrementa la producción a +15 de Oro. Requiere Ciudadela. Coste: Oro y Madera/Mineral.
  - Nivel III (Capitol): Eleva la producción al máximo absoluto de +20 de Oro por ronda. Requiere Castillo. Coste: Gran cantidad de Oro y Objetos de Valor.
• Fuerte, Ciudadela y Castillo (Fort / Citadel / Castle):
  - Fuerte (Fort): Desbloquea la capacidad de comprar e invocar criaturas de rango Bronce.
  - Ciudadela (Citadel): Desbloquea criaturas de rango Plata. Añade defensa de Muro a la ciudad natal y +1 a la población de unidades básicas.
  - Castillo (Castle): Desbloquea criaturas legendarias de rango Oro. Añade 2 estructuras defensivas extras (torreones) y duplica el crecimiento de unidades.
• Cofradía de Magos (Mages' Guild Lvl 1, 2, 3):
  - Nivel I: Permite al Héroe aprender hechizos comunes de nivel 1. Coste: Madera, Mineral, Oro.
  - Nivel II: Permite aprender hechizos avanzados de nivel 2. Requiere Objetos de Valor.
  - Nivel III: Desbloquea hechizos destructivos de nivel 3 (ej. Chain Lightning, Resurrection). Requiere gran inversión mística.
• Viviendas de Criaturas (Bronze, Silver, Gold Dwellings):
  - Vivienda de Bronce: Permite reclutar unidades de nivel I (ej. Piqueros, Esqueletos, Elfos). Coste básico.
  - Vivienda de Plata: Permite reclutar unidades de nivel II (ej. Grifos, Licántropos, Cruzados). Coste medio.
  - Vivienda de Oro: Permite reclutar unidades legendarias de nivel III (ej. Ángeles, Dragones, Titanes). Coste extremo en Objetos de Valor.

2. EDIFICIOS ASIMÉTRICOS DE FACCIÓN Y SUS EFECTOS:
• Castillo - Establo (Stables): Otorga de forma gratuita +1 Punto de Movimiento (PM) al Héroe al iniciar su turno en el mapa.
• Necrópolis - Amplificador de Nigromancia (Necromancy Amplifier): Incrementa de forma pasiva el número de esqueletos reclutados tras cada victoria militar.
• Murallas - Tesoro Elfo (Treasure): Al final de la fase de recursos, añade un interés de Oro extra igual al 10% de tu reserva acumulada actual.
• Mazmorra - Vórtice de Maná (Mana Vortex): Permite al Héroe duplicar temporalmente su Maná máximo una vez por semana al visitar su ciudad natal.
• Torre - Biblioteca (Library): Otorga al Héroe un 'Draft' de Hechizos adicional al subir el nivel de su Cofradía de Magos.
• Infierno - Castillo de Fuego (Fire Castle): Incrementa el daño físico de los contraataques o represalias de todas tus unidades defensoras.
• Bastión - Mercado de Esclavos (Slave Market): Permite vender o intercambiar recursos y artefactos por sumas fijas de Oro sin penalización comercial.
• Fortaleza - Jaulas de Wyverns (Wyvern Cages): Permite alistar Wyverns de nivel II de forma anticipada sin tener la vivienda de Plata.
• Confluencia - Altar de los Elementos (Elemental Altar): Permite transformar recursos sobrantes de Madera/Mineral directamente en Objetos de Valor místicos.
• Bahía - Gremio de Contrabandistas (Smugglers' Guild): Permite vender artefactos redundantes a cambio de Oro o de valiosos Objetos de Recursos.`
  },
  {
    id: "wiki_units_creatures",
    title: "35. Guía de Criaturas y Reglas de Combate (es.homm3bg.wiki)",
    category: "combat",
    content: `Las criaturas y unidades de combate táctico representan el núcleo del poder militar de tu Héroe. Cada facción de Erathia cuenta con 7 niveles de criaturas divididas en tres Tiers principales (Bronce, Plata, Oro), además de las Criaturas Especiales o Neutrales de Tier Azul.

REGLAS GENERALES DE LAS CRIATURAS EN COMBATE:
• Anverso y Reverso (Cara de la Carta): Cada carta de criatura es de doble cara. La cara básica ("Pocos" o "Few") representa el regimiento estándar de reclutamiento. La cara de élite ("Manada" o "Pack") representa la tropa mejorada con mayores estadísticas (Ataque, Defensa, Puntos de Vida, Iniciativa) y habilidades devastadoras.
• Ataque (⚔️): Indica el número de dados de combate o el valor de daño base que la criatura inflige al atacar.
• Defensa (🛡️): Reduce el daño entrante. Un valor de defensa alto mitiga los ataques físicos directos.
• Iniciativa (⚡): Determina el orden estricto de activación de las unidades en el tablero de batalla. La criatura con mayor iniciativa actúa primero.
• Puntos de Vida (❤️): La cantidad de heridas o daños que la unidad puede resistir antes de ser derrotada.
• Movimiento Táctico: Las unidades del juego de mesa no tienen una estadística numérica de "Movimiento". Se desplazan por el tablero táctico de 4x5 casillas libremente de acuerdo con su tipo de alcance (Cuerpo a cuerpo, A distancia o Volador) respetando las limitaciones generales de obstáculos o zonas de control.
• Tipo de Alcance: Las unidades se clasifican en Cuerpo a Cuerpo (Melee), A distancia (Ranged - sufren penalización de daño a la mitad si hay enemigos adyacentes) o Voladoras (Flying - ignoran obstáculos y unidades).

COMPENDIO DE CRIATURAS POR FACCIONES:

1. Castillo (Castle): Fuerza militar equilibrada con excelente defensa, moral sagrada y capacidad curativa.
• Piqueros / Alabarderos (Tier Bronce - Niv. 1): Cuentan con la habilidad "Carga" que incrementa su ataque tras avanzar. Los Alabarderos de élite ganan "Sin Represalia" contra unidades de bronce.
• Arqueros / Tiradores (Tier Bronce - Niv. 2): Unidad básica a distancia. Al ser mejorada a Tiradores, adquiere "Doble Disparo", pudiendo disparar dos veces por turno.
• Grifos / Grifos Reales (Tier Bronce - Niv. 3): Unidades voladoras que poseen la habilidad de "Contraataque Infinito", respondiendo a todas las agresiones sin límites por ronda.
• Espadachines / Cruzados (Tier Plata - Niv. 4): Excelentes defensores con la habilidad "Escudo" que mitiga 1 herida. Los Cruzados atacan dos veces con "Doble Ataque" cuerpo a cuerpo.
• Monjes / Fanáticos (Tier Plata - Niv. 5): Tiradores sagrados. Su versión de élite anula la penalización de cuerpo a cuerpo.
• Caballeros / Campeones (Tier Oro - Niv. 6): Caballería pesada con una temible bonificación de "Carga" (+3 Ataque tras desplazarse).
• Ángeles / Arcángeles (Tier Oro - Niv. 7): Criaturas sagradas voladoras de inmenso poder. Los Arcángeles pueden usar "Resurrección" una vez por combate para revivir tropas aliadas caídas.

2. Necrópolis (Necropolis): El ejército inmortal inmune al pánico, capaz de alzar caídos y debilitar la vitalidad del oponente.
• Esqueletos / Esqueletos con Escudo (Tier Bronce - Niv. 1): Unidad numerosa con el rasgo "No-muerto" (inmunes a la baja o alta moral).
• Zombis / Zombis Voraces (Tier Bronce - Niv. 2): Lentifican y debilitan a las unidades adyacentes mediante la plaga "Enfermedad". Los Voraces regeneran vida al activarse.
• Fantasmas / Espectros (Tier Bronce - Niv. 3): Tropas incorpóreas que drenan maná del héroe enemigo al infligir daño físico.
• Vampiros / Señores Vampiros (Tier Plata - Niv. 4): Bestias voladoras que atacan "Sin Represalia". Los Señores Vampiros absorben la fuerza vital mediante "Drenaje de Vida".
• Liches / Liches de Poder (Tier Plata - Niv. 5): Lanzadores de "Nube de Muerte" que causa daño místico en área cruzada de 3x3.
• Caballeros del Terror / de la Muerte (Tier Oro - Niv. 6): Guerreros espectrales que aplican la "Maldición" (daño mínimo enemigo) y tienen probabilidad de asestar un "Golpe Crítico" doble.
• Dragones de Hueso / Fantasma (Tier Oro - Niv. 7): Dragones voladores no-muertos. Su versión Élite aplica "Envejecimiento", incrementando el coste de maná de los hechizos del héroe enemigo.

3. Mazmorra (Dungeon): Tácticas subterráneas letales, letalidad sigilosa y el poder inigualable del Dragón Negro.
• Arpías / Arpías Brujas (Tier Bronce - Niv. 2): Vuelan para atacar y regresan de inmediato a su posición inicial, atacando "Sin Represalia" en su versión élite.
• Minotauros / Reyes Minotauro (Tier Plata - Niv. 5): Tienen moral alta constante y pueden bloquear ataques físicos enemigos con sus escudos.
• Dragón Negro (Tier Oro - Niv. 7): 
  - Lado "Pocos" (Few): Ataque 6, Defensa 3, Vida 8, Iniciativa 11. Coste: 19 Oro y 1 Objeto de Valor. Habilidad pasiva: "Reduce el daño recibido por Hechizos en 2 hasta un mínimo de 0."
  - Lado "Manada" (Pack / Élite): Ataque 8, Defensa 3, Vida 8, Iniciativa 11. Habilidad pasiva: "Ignora cualquier efecto de Hechizo y el daño de Especialidad."
  - Carta Neutral de Dragón Negro: Ataque 5, Defensa 2, Vida 7, Iniciativa 9. Coste: 30 Oro. Habilidad: "Ataca 2 espacios en línea. El primer ataque se resuelve normalmente, y el segundo tiene 2 de Ataque."
  - Carta de Dragón Negro para Utopía (Banco de Criaturas): Ataque 5, Defensa 2, Vida 5, Iniciativa 9. Habilidad pasiva: "Mientras esta unidad esté apilada, obtiene +3 de Ataque."
  No existe dragón rojo en el juego de mesa.`
  },
  {
    id: "wiki_abilities_detailed",
    title: "36. Habilidades de las Criaturas de Combate (es.homm3bg.wiki/abilities/)",
    category: "combat",
    content: `Las habilidades especiales impresas en las cartas de Criatura de Heroes of Might and Magic III: El Juego de Mesa determinan de forma absoluta el curso táctico de los combates en el tablero de 4x5 casillas. A continuación se desglosan las principales habilidades oficiales referenciadas en el portal de la comunidad (https://es.homm3bg.wiki/abilities/):

1. HABILIDADES DE DESPLAZAMIENTO Y ALCANCE:
• Volador (Flying): La unidad ignora por completo cualquier obstáculo (como campos de fuerza, ruinas o arenas movedizas) y a otras unidades terrestres al desplazarse por la reja táctica.
• Tirador / Distancia (Ranged): Permite atacar a cualquier unidad en el tablero de combate sin recibir represalia (contraataque). Si hay una unidad enemiga en una casilla adyacente (cuerpo a cuerpo), el tirador sufre una penalización que reduce su daño a la mitad y está obligado a atacar a ese enemigo adyacente.
• Volver al Origen (Strike and Return): Tras realizar un ataque cuerpo a cuerpo, la criatura (ej. Arpías) regresa inmediatamente a la casilla exacta desde la que inició su turno sin recibir represalias.

2. HABILIDADES OFENSIVAS MULTIPLICADORAS:
• Doble Disparo (Double Shot): Al activarse, la unidad a distancia puede realizar dos ataques de disparo independientes en su turno contra el mismo o diferentes objetivos.
• Doble Ataque (Double Attack): Al activarse, la unidad cuerpo a cuerpo puede realizar dos ataques físicos independientes en su turno de combate.
• Sin Represalia (No Retaliation): El defensor atacado por esta unidad no puede realizar su contraataque (represalia) obligatorio tras recibir el impacto.
• Carga (Charge): Si la unidad avanza en línea recta un número mínimo de casillas antes de ejecutar su ataque cuerpo a cuerpo, suma un bono de +1, +2 o +3 al ataque (según su nivel).

3. HABILIDADES MÁGICAS Y DE INMUNIDAD:
• Inmunidad Mágica Completa (Spell Immunity): La criatura (ej. Dragón Negro) es absolutamente inmune a cualquier tipo de carta de hechizo jugada por los héroes (incluyendo hechizos dañinos enemigos, bendiciones de ataque aliadas, curaciones o resurrecciones ordinarias).
• Resistencia Mágica (Magic Resistance): Probabilidad fija (ej. Gólem o Dragón de Hada) de disipar o devolver hechizos enemigos directamente a su lanzador original.

4. HABILIDADES DE ATAQUE EN ÁREA Y EFECTO:
• Aliento / Ataque Lineal (Breath Attack): El ataque de la criatura (ej. Dragones) daña tanto a la unidad objetivo como a la criatura que se encuentre inmediatamente posicionada en la casilla detrás del objetivo principal en la línea de ataque.
• Aliento de Cristal (Crystal Breath): Ataque en abanico que inflige daño a la unidad objetivo y a todas las criaturas adyacentes de la primera línea.
• Nube de Muerte (Death Cloud): Ataque a distancia (ej. Liches) que detona en una zona de 3x3, infligiendo daño a la unidad principal y a todas las adyacentes (amigas o enemigas, excepto no-muertos).

5. HABILIDADES DE RECUPERACIÓN Y CURACIÓN:
• Resurrección (Resurrection): Habilidad activada una vez por combate (ej. Arcángeles) que permite revivir y sanar por completo a un regimiento aliado caído de rango Bronce o Plata, devolviéndolo inmediatamente al tablero de batalla táctica.
• Drenaje de Vida (Life Drain): Al infligir daño en combate cuerpo a cuerpo a una unidad viva, la criatura (ej. Señor Vampiro) se sana a sí misma un número de heridas equivalente al daño causado.
• Regeneración (Regenerate): Al inicio de su fase de activación, la criatura recupera de forma automática todos sus puntos de vida perdidos (siempre que la unidad no haya sido eliminada por completo del tablero de juego).
• No-Muerto (Undead): La unidad es inmune de forma pasiva a cualquier efecto que altere la moral (positiva o negativa). No puede recibir curaciones ni resurrecciones mágicas ordinarias que provengan de escuelas como la magia de agua o tierra pura.`
  },
  {
    id: "wiki_units_detailed",
    title: "37. Catálogo y Guía Completa de Unidades (es.homm3bg.wiki/units/)",
    category: "combat",
    content: `El catálogo completo de ejércitos de Heroes of Might and Magic III: El Juego de Mesa abarca todas las facciones asimétricas y tropas neutrales detalladas en la wiki comunitaria (https://es.homm3bg.wiki/units/). Aquí se desglosa el reglamento específico para cada rango y el catálogo de atributos oficiales de las cartas de tropa:

1. CLASIFICACIÓN DE UNIDADES POR TIERS DE RECLUTAMIENTO:
• Tier Bronce (Rango I - Niveles 1-3): Representan la milicia, arqueros y guardianes básicos. Tienen costes económicos bajos (solo Oro, sin requisitos de recursos especiales) y se reclutan al construir viviendas de bronce con un Fuerte básico en la metrópolis. Suelen tener estadísticas de vida modestas (1 a 3 heridas).
• Tier Plata (Rango II - Niveles 4-5): Tropas de élite tácticas y criaturas míticas medianas (Cruzados, Licántropos, Wyverns, Liches). Su reclutamiento exige la ampliación de la metrópolis a nivel de Ciudadela y el pago de recursos de construcción (Madera/Mineral) además de Oro.
• Tier Oro (Rango III - Nivel 6) y Azur (Legendario - Nivel 7): Criaturas colosales definitivas (Ángeles, Diablos, Titanes, Hidras, Dragones Negros). Exigen el máximo nivel urbano (Castillo), la construcción de viviendas sagradas y el pago de inmensas reservas de Oro junto con Objetos de Valor (recursos míticos misticos). Tienen reservas de salud masivas (hasta 8 o 10 heridas).

2. COMPRENSIÓN DE LAS ESTADÍSTICAS OFICIALES SIN MOVIMIENTO:
• Sin Atributo de Movimiento: Se recalca de forma estricta en las reglas oficiales del juego de mesa que las cartas de unidad NO poseen la estadística física de 'Movimiento' que existe en el juego de ordenador. El desplazamiento por el tablero táctico se rige puramente por el tipo de rango de alcance de la criatura:
  - Cuerpo a Cuerpo (Melee): Debe desplazarse por casillas terrestres normales hasta entrar en adyacencia con el objetivo para poder atacarlo.
  - Volador (Flying): Se desplaza a cualquier casilla del tablero ignorando obstáculos intermedios.
  - A Distancia (Ranged): Dispara a cualquier casilla del tablero desde su posición, sufriendo penalizaciones si es bloqueada por obstáculos o si hay enemigos adyacentes.
• Ataque (⚔️): Cantidad de dados a tirar o modificador que añade heridas al regimiento defensor.
• Defensa (🛡️): Mitiga directamente el número de heridas recibidas antes de aplicar daño al medidor de salud.
• Iniciativa (⚡): Define el orden exacto de colocación en el track cronológico de activación táctica de la ronda.
• Vida (❤️): Puntos de herida tolerables. Al acumular fichas de daño equivalentes, la unidad es removida inmediatamente del juego de mesa y colocada en la pila de bajas.`
  },
  {
    id: "faction_units_index",
    title: "38. Índice Detallado de Criaturas de Facciones e Invocaciones",
    category: "combat",
    content: `A continuación se desglosa el catálogo completo indexado con todos los atributos oficiales, costes de reclutamiento y habilidades tácticas de las 10 facciones asimétricas y las invocaciones (excluyendo neutrales y banco de criaturas) de Heroes of Might and Magic III: El Juego de Mesa. 

---

### 1. CASTILLO (Castle)
• Alabarderos (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 1, Vida 2, Iniciativa 4. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Vida 2, Iniciativa 5. Tipo: Melé. Coste: 3 Oro. Habilidad: "Pasivo: Cuando esta unidad sea el objetivo de un ataque, puedes descartar una carta para ignorar el resultado del dado de ataque."

• Tiradores (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 0, Vida 2, Iniciativa 4. Tipo: a Distancia. Coste: 3 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 0, Vida 2, Iniciativa 6. Tipo: a Distancia. Coste: 5 Oro. Habilidad: "Al Atacar: Si un objetivo no está adyacente, vuelve a atacarlo."

• Grifos (Tier Bronce - Niv. 3)
  - Básica: Ataque 2, Defensa 0, Vida 4, Iniciativa 6. Tipo: Voladora. Coste: 4 Oro. Habilidad: "Contraataque: Esta unidad puede llevar a cabo una cantidad ilimitada de contraataques."
  - Élite: Ataque 3, Defensa 0, Vida 4, Iniciativa 9. Tipo: Voladora. Coste: 6 Oro. Habilidad: "Contraataque: Esta unidad puede llevar a cabo una cantidad ilimitada de contraataques."

• Cruzados (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 2, Vida 4, Iniciativa 5. Tipo: Melé. Coste: 6 Oro. Habilidades: Ninguna.
  - Élite: Ataque 4, Defensa 2, Vida 4, Iniciativa 6. Tipo: Melé. Coste: 10 Oro. Habilidad: "Al Atacar: Puedes volver a tirar los 0 en el dado de ataque de esta unidad."

• Fanáticos (Tier Plata - Niv. 5)
  - Básica: Ataque 3, Defensa 1, Vida 5, Iniciativa 5. Tipo: a Distancia. Coste: 8 Oro. Habilidades: Ninguna.
  - Élite: Ataque 4, Defensa 1, Vida 5, Iniciativa 7. Tipo: a Distancia. Coste: 12 Oro. Habilidad: "Pasivo: Ignora la penalización de combate contra unidades adyacentes."

• Campeones (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 2, Vida 7, Iniciativa 7. Tipo: Melé. Coste: 12 Oro. Habilidad: "Mapa: Si tu héroe está en una zona con establos, el coste de refuerzo de esta unidad se reduce en 6 Oros."
  - Élite: Ataque 6, Defensa 2, Vida 7, Iniciativa 9. Tipo: Melé. Coste: 20 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Si esta unidad termina su movimiento en un espacio diferente al inicial, puedes volver a tirar un dado de ataque."

• Arcángeles (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 3, Vida 8, Iniciativa 12. Tipo: Voladora. Coste: 20 Oro y 1 Objeto de valor. Habilidad: "Pasivo: Cuando se inicie un combate, roba 1 carta."
  - Élite: Ataque 7, Defensa 3, Vida 10, Iniciativa 18. Tipo: Voladora. Coste: 30 Oro y 2 Objetos de valor. Habilidad: "Pasivo: Una vez por combate. Cancela un ataque que fuese a reducir los Puntos de Salud de otra unidad a 0."

---

### 2. NECRÓPOLIS (Necropolis)
• Esqueletos (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 1, Vida 2, Iniciativa 4. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Vida 2, Iniciativa 5. Tipo: Melé. Coste: 3 Oro. Habilidades: Ninguna.

• Zombis (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 1, Vida 3, Iniciativa 3. Tipo: Melé. Coste: 3 Oro. Habilidad: "Pasivo: Si el atacante resuelve un +1 en el dado de ataque, obtén +1 Defensa."
  - Élite: Ataque 2, Defensa 1, Vida 3, Iniciativa 4. Tipo: Melé. Coste: 4 Oro. Habilidad: "Pasivo: Si el atacante resuelve un 0 o un +1 en el dado de ataque, obtén +1 Defensa."

• Espectros (Tier Bronce - Niv. 3)
  - Básica: Ataque 3, Defensa 0, Vida 3, Iniciativa 5. Tipo: Voladora. Coste: 4 Oro. Habilidad: "Activación: Retira hasta 1 Herida de esta unidad."
  - Élite: Ataque 3, Defensa 0, Vida 5, Iniciativa 7. Tipo: Voladora. Coste: 6 Oro. Habilidad: "Activación: Retira hasta 1 Herida de esta unidad y después descarta 1 carta al azar de la mano del enemigo."

• Vampiros (Tier Plata - Niv. 4)
  - Básica: Ataque 4, Defensa 1, Vida 4, Iniciativa 6. Tipo: Voladora. Coste: 8 Oro. Habilidad: "Al Atacar: Ignora el contraataque."
  - Élite: Ataque 5, Defensa 1, Vida 4, Iniciativa 9. Tipo: Voladora. Coste: 12 Oro. Habilidad: "Al Atacar: Ignora el contraataque. Después retira hasta 2 Heridas a esta unidad."

• Liches (Tier Plata - Niv. 5)
  - Básica: Ataque 3, Defensa 1, Vida 5, Iniciativa 6. Tipo: a Distancia. Coste: 8 Oro. Habilidades: Ninguna.
  - Élite: Ataque 4, Defensa 1, Vida 5, Iniciativa 7. Tipo: a Distancia. Coste: 14 Oro. Habilidad: "Al Atacar: Elige una unidad adyacente al objetivo y atácala. Para este ataque tu Ataque es 2."

• Caballeros del terror (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 2, Vida 7, Iniciativa 7. Tipo: Melé. Coste: 12 Oro. Habilidad: "Al Atacar: Al contraatacar después de este ataque, el enemigo lanza 2 dados de ataque y resuelve el resultado menor."
  - Élite: Ataque 6, Defensa 2, Vida 7, Iniciativa 9. Tipo: Melé. Coste: 20 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Si resuelves un 0 o un +1 en el dado de ataque, aumenta el valor total del ataque de esta unidad en un +1 adicional."

• Dragones fantasma (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 3, Vida 8, Iniciativa 9. Tipo: Voladora. Coste: 19 Oro y 1 Objeto de valor. Habilidad: "Activación: Descarta la ficha Moral Positiva del enemigo."
  - Élite: Ataque 7, Defensa 3, Vida 9, Iniciativa 14. Tipo: Voladora. Coste: 32 Oro y 2 Objetos de valor. Habilidad: "Activación: Descarta la ficha Moral Positiva del enemigo. Al Atacar: Gana +1 Ataque."

---

### 3. MAZMORRA (Dungeon)
• Trogloditas (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 1, Vida 2, Iniciativa 4. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Vida 2, Iniciativa 5. Tipo: Melé. Coste: 3 Oro. Habilidad: "Pasivo: Esta unidad ignora el efecto Parálisis."

• Arpías (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 0, Vida 3, Iniciativa 6. Tipo: Voladora. Coste: 3 Oro. Habilidad: "Al Atacar: Después del contraataque del enemigo, esta unidad puede volver al espacio desde el que se ha movido para atacar."
  - Élite: Ataque 3, Defensa 0, Vida 3, Iniciativa 9. Tipo: Voladora. Coste: 5 Oro. Habilidad: "Al Atacar: Ignora el contraataque. Esta unidad puede volver al espacio desde el que se ha movido para atacar."

• Ojos maléficos (Tier Bronce - Niv. 3)
  - Básica: Ataque 3, Defensa 0, Vida 3, Iniciativa 5. Tipo: a Distancia. Coste: 4 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Vida 3, Iniciativa 7. Tipo: a Distancia. Coste: 6 Oro. Habilidad: "Pasivo: Ignora la penalización de combate contra unidades adyacentes."

• Medusas (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 1, Vida 4, Iniciativa 5. Tipo: a Distancia. Coste: 6 Oro. Habilidad: "Contraataque: Después del contraataque, lanza un dado de ataque; si sacas 0, el objetivo queda Parálizado."
  - Élite: Ataque 4, Defensa 1, Vida 4, Iniciativa 6. Tipo: a Distancia. Coste: 12 Oro. Habilidad: "Pasivo: Ignora la penalización de combate contra unidades adyacentes. Contraataque: El objetivo queda Parálizado."

• Minotauros (Tier Plata - Niv. 5)
  - Básica: Ataque 4, Defensa 2, Vida 4, Iniciativa 6. Tipo: Melé. Coste: 8 Oro. Habilidad: "Al Atacar: Si resuelves un -1 en el dado de ataque, roba una carta."
  - Élite: Ataque 5, Defensa 2, Vida 4, Iniciativa 8. Tipo: Melé. Coste: 14 Oro. Habilidad: "Al Atacar: Si resuelves un -1 en el dado de ataque, roba una carta."

• Mantícoras (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 1, Vida 6, Iniciativa 7. Tipo: Voladora. Coste: 10 Oro. Habilidades: Ninguna.
  - Élite: Ataque 5, Defensa 1, Vida 6, Iniciativa 11. Tipo: Voladora. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Durante este ataque, ignora el valor de Defensa de la carta de la unidad objetivo."

• Mantícoras (Alternativa) (Tier Oro - Niv. 6)
  - Básica: Ataque 4, Defensa 1, Vida 7, Iniciativa 8. Tipo: Voladora. Coste: 12 Oro. Habilidad: "Al Atacar: Coloca 1 cubo de facción sobre el objetivo. Cuando se active, retira el cubo para infligir 1 Herida."
  - Élite: Ataque 4, Defensa 2, Vida 7, Iniciativa 11. Tipo: Voladora. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Pasivo: Después de cada ataque, coloca 1 cubo de facción sobre el objetivo. Cuando se active, retira el cubo para infligir 1 Herida."

• Dragones negros (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 3, Vida 8, Iniciativa 11. Tipo: Voladora. Coste: 19 Oro y 1 Objeto de valor. Habilidad: "Pasivo: Reduce el Daño de Hechizo recibido por esta unidad en 2 (hasta un mínimo de 0)."
  - Élite: Ataque 8, Defensa 3, Vida 8, Iniciativa 15. Tipo: Voladora. Coste: 33 Oro y 2 Objetos de valor. Habilidad: "Pasivo: Ignora cualquier efecto de Hechizo y Daño de especialidad."

---

### 4. MURALLAS (Rampart)
• Centauros (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 0, Vida 3, Iniciativa 6. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 0, Vida 3, Iniciativa 8. Tipo: Melé. Coste: 3 Oro. Habilidades: Ninguna.

• Enanos (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 1, Vida 3, Iniciativa 3. Tipo: Melé. Coste: 3 Oro. Habilidad: "Pasivo: Si esta unidad es objetivo de cualquier carta de hechizo o especialidad, lanza 1 dado de ataque. Si sacas un +1, ignora el efecto de la carta."
  - Élite: Ataque 3, Defensa 1, Vida 3, Iniciativa 5. Tipo: Melé. Coste: 4 Oro. Habilidad: "Pasivo: Si esta unidad es objetivo de cualquier carta de hechizo o especialidad, lanza 1 dado de ataque. Si sacas un +1, ignora el efecto de la carta."

• Elfos (Tier Bronce - Niv. 3)
  - Básica: Ataque 2, Defensa 1, Vida 3, Iniciativa 6. Tipo: a Distancia. Coste: 4 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Vida 3, Iniciativa 7. Tipo: a Distancia. Coste: 7 Oro. Habilidad: "Al Atacar: Si una unidad objetivo no está adyacente, vuélvela a atacar si sacas un -1 o un 0."

• Pegasos (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 0, Vida 5, Iniciativa 8. Tipo: Voladora. Coste: 6 Oro. Habilidades: Ninguna.
  - Élite: Ataque 4, Defensa 0, Vida 6, Iniciativa 12. Tipo: Voladora. Coste: 10 Oro. Habilidad: "Pasivo: El Poder de todos los hechizos enemigos se reduce en 1 (hasta un mínimo de 0)."

• Dendroides (Tier Plata - Niv. 5)
  - Básica: Ataque 4, Defensa 2, Vida 5, Iniciativa 3. Tipo: Melé. Coste: 8 Oro. Habilidades: Ninguna.
  - Élite: Ataque 4, Defensa 2, Vida 6, Iniciativa 4. Tipo: Melé. Coste: 15 Oro. Habilidad: "Pasivo: Las unidades enemigas que empiecen su activación adyacentes a esta unidad no pueden moverse."

• Unicornios (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 1, Vida 8, Iniciativa 7. Tipo: Melé. Coste: 11 Oro. Habilidad: "Pasivo: Reduce el Daño de Hechizos sufridos por esta unidad en 1 (hasta un mínimo de 0)."
  - Élite: Ataque 6, Defensa 1, Vida 8, Iniciativa 9. Tipo: Melé. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Pasivo: Reduce el Daño de Hechizos sufridos por esta unidad y unidades adyacentes aliadas en 1 (hasta un mínimo de 0)."

• Dragones dorados (Tier Oro - Niv. 7)
  - Básica: Ataque 5, Defensa 3, Vida 9, Iniciativa 10. Tipo: Voladora. Coste: 22 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Ataca a 2 espacios en fila. El primer ataque se resuelve de forma normal y el segundo con 2 Ataque."
  - Élite: Ataque 6, Defensa 3, Vida 10, Iniciativa 16. Tipo: Voladora. Coste: 30 Oro y 2 Objetos de valor. Habilidad: "Al Atacar: Ataca a 2 espacios en fila. El primer ataque se resuelve normalmente y el segundo tiene 3 Ataque."

---

### 5. TORRE (Tower)
• Gremlins (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 0, Vida 2, Iniciativa 4. Tipo: Melé. Coste: 0 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 0, Vida 2, Iniciativa 5. Tipo: a Distancia. Coste: 2 Oro. Habilidades: Ninguna.

• Gárgolas (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 1, Vida 3, Iniciativa 6. Tipo: Voladora. Coste: 3 Oro. Habilidad: "Pasiva: Esta unidad ignora cualquier efecto Contínuo de hechizos."
  - Élite: Ataque 3, Defensa 1, Vida 3, Iniciativa 9. Tipo: Voladora. Coste: 4 Oro. Habilidad: "Pasiva: Esta unidad ignora cualquier efecto Contínuo de hechizos."

• Gólems de hierro (Tier Bronce - Niv. 3)
  - Básica: Ataque 3, Defensa 1, Vida 3, Iniciativa 4. Tipo: Melé. Coste: 4 Oro. Habilidad: "Pasiva: Esta unidad reduce cualquier Daño que reciba de hechizos en 1, hasta un mínimo de 0."
  - Élite: Ataque 3, Defensa 2, Vida 3, Iniciativa 5. Tipo: Melé. Coste: 7 Oro. Habilidad: "Pasiva: Esta unidad reduce cualquier Daño que reciba de hechizos en 2, hasta un mínimo de 0."

• Magos (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 0, Vida 4, Iniciativa 5. Tipo: a Distancia. Coste: 6 Oro. Habilidad: "Al Atacar: Ignora penalizaciones de combate."
  - Élite: Ataque 4, Defensa 1, Vida 4, Iniciativa 6. Tipo: a Distancia. Coste: 11 Oro. Habilidad: "Al Atacar: Ignora penalizaciones de combate. Activación: Añade +1 Poder al primer hechizo que lances esta ronda."

• Genios (Tier Plata - Niv. 5)
  - Básica: Ataque 3, Defensa 1, Vida 6, Iniciativa 7. Tipo: Voladora. Coste: 8 Oro. Habilidad: "Alternativa: Descarta 3 cartas de tu mazo y devuelve a tu mano un Hechizo descartado de esta forma."
  - Élite: Ataque 4, Defensa 1, Vida 6, Iniciativa 8. Tipo: Voladora. Coste: 12 Oro. Habilidad: "Al Atacar: Descarta hasta 3 cartas de tu mazo y devuelve a tu mano un Hechizo descartado de esta forma."

• Nagas (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 2, Vida 7, Iniciativa 6. Tipo: Melé. Coste: 13 Oro. Habilidad: "Al Atacar: Ignora contraataques."
  - Élite: Ataque 6, Defensa 2, Vida 7, Iniciativa 8. Tipo: Melé. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Ignora contraataques."

• Titanes (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 3, Vida 8, Iniciativa 7. Tipo: Melé. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Pasiva: Esta unidad ignora cualquier efecto Contínuo."
  - Élite: Ataque 6, Defensa 3, Vida 8, Iniciativa 11. Tipo: a Distancia. Coste: 32 Oro y 2 Objetos de valor. Habilidad: "Pasiva: Esta unidad ignora cualquier efecto Continuo y los penalizadores de combate aplicados a unidades adyacentes."

---

### 6. INFIERNO (Inferno)
• Familiares (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 1, Vida 2, Iniciativa 5. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Vida 2, Iniciativa 7. Tipo: Melé. Coste: 3 Oro. Habilidad: "Pasivo: Cuando un enemigo lanza un Hechizo de su mano, debe descartar 1 carta de la mano."

• Magogs (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 0, Vida 2, Iniciativa 4. Tipo: a Distancia. Coste: 3 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 0, Vida 3, Iniciativa 6. Tipo: a Distancia. Coste: 5 Oro. Habilidad: "Al Atacar: Cuando los magogs atacan a un objetivo que no está adyacente a ellos, hacen 1 Herida a una unidad adyacente al objetivo."

• Cerberos (Tier Bronce - Niv. 3)
  - Básica: Ataque 3, Defensa 0, Vida 4, Iniciativa 7. Tipo: Melé. Coste: 4 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Vida 5, Iniciativa 8. Tipo: Melé. Coste: 7 Oro. Habilidad: "Al Atacar: Ignora contraataques. Además, hace 1 Herida a otra unidad enemiga adyacente a los cerberos."

• Demonios (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 2, Vida 4, Iniciativa 5. Tipo: Melé. Coste: 6 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 2, Vida 5, Iniciativa 6. Tipo: Melé. Coste: 8 Oro. Habilidades: Ninguna.

• Señores del abismo (Tier Plata - Niv. 5)
  - Básica: Ataque 4, Defensa 1, Vida 6, Iniciativa 6. Tipo: Melé. Coste: 8 Oro. Habilidades: Ninguna.
  - Élite: Ataque 5, Defensa 1, Vida 6, Iniciativa 7. Tipo: Melé. Coste: 15 Oro. Habilidad: "Alternativo: Una vez por cada combate en el que hayas perdido una unidad, invoca o refuerza <<unos pocos>> demonios."

• Efrits (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 1, Vida 7, Iniciativa 9. Tipo: Voladora. Coste: 12 Oro. Habilidad: "Pasivo: Ignora el Daño del hechizo Flecha mágica."
  - Élite: Ataque 6, Defensa 1, Vida 7, Iniciativa 13. Tipo: Voladora. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Pasivo: Ignora cualquier Daño de la Flecha mágica y hechizos de la escuela de fuego."

• Archidiablos (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 3, Vida 8, Iniciativa 11. Tipo: Voladora. Coste: 22 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Ignora contraataques."
  - Élite: Ataque 7, Defensa 3, Vida 9, Iniciativa 15. Tipo: Voladora. Coste: 30 Oro y 2 Objetos de valor. Habilidad: "Al Atacar: Ignora contraataques. Pasivo: Al moverse, los archidiablos se pueden mover a cualquier espacio vacío."

---

### 7. BASTIÓN (Stronghold)
• Goblins (Tier Bronce - Niv. 1)
  - Básica: Ataque 1, Defensa 0, Vida 4, Iniciativa 6. Tipo: Melé. Coste: 1 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 0, Vida 4, Iniciativa 7. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.

• Incursores lupinos (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 0, Vida 3, Iniciativa 7. Tipo: Melé. Coste: 3 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 0, Vida 4, Iniciativa 8. Tipo: Melé. Coste: 5 Oro. Habilidad: "Al Atacar: Ataca este objetivo otra vez. El segundo ataque se produce después de que el objetivo contraataque (si es posible)."

• Orcos (Tier Bronce - Niv. 3)
  - Básica: Ataque 2, Defensa 1, Vida 4, Iniciativa 4. Tipo: a Distancia. Coste: 4 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Vida 5, Iniciativa 5. Tipo: a Distancia. Coste: 7 Oro. Habilidades: Ninguna.

• Ogros (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 2, Vida 4, Iniciativa 4. Tipo: Melé. Coste: 6 Oro. Habilidad: "Alternativo: Coloca una ficha +1 Ataque en la unidad Melé o Voladora que elijas durante 2 rondas de combate."
  - Élite: Ataque 3, Defensa 2, Vida 6, Iniciativa 5. Tipo: Melé. Coste: 8 Oro. Habilidad: "Alternativo: Coloca una ficha +2 Ataque en la unidad Melé o Voladora que elijas durante 2 rondas de combate."

• Aves de trueno (Tier Plata - Niv. 5)
  - Básica: Ataque 4, Defensa 1, Vida 5, Iniciativa 9. Tipo: Voladora. Coste: 8 Oro. Habilidades: Ninguna.
  - Élite: Ataque 4, Defensa 1, Vida 6, Iniciativa 11. Tipo: Voladora. Coste: 14 Oro. Habilidad: "Pasivo: Justo después del ataque de esta unidad y antes de un contraataque, tira 1 dado de ataque; con un 0 o +1, inflige 1 Herida al objetivo."

• Cíclopes (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 0, Vida 6, Iniciativa 6. Tipo: a Distancia. Coste: 13 Oro. Habilidad: "Alternativo: Esta unidad puede destruir un muro o la puerta."
  - Élite: Ataque 5, Defensa 1, Vida 7, Iniciativa 8. Tipo: a Distancia. Coste: 17 Oro y 1 Objeto de valor. Habilidad: "Alternativo: Esta unidad puede destruir un muro, puerta o torre de arqueros."

• Behemoths (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 2, Vida 9, Iniciativa 6. Tipo: Melé. Coste: 19 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Disminuye la Defensa del objetivo en 1 (hasta un mínimo de 0)."
  - Élite: Ataque 7, Defensa 2, Vida 10, Iniciativa 9. Tipo: Melé. Coste: 29 Oro y 2 Objetos de valor. Habilidad: "Al Atacar: Disminuye la Defensa del objetivo en 2 (hasta un mínimo de 0). Después del ataque, pon 1 ficha de corrosión en el objetivo."

---

### 8. FORTALEZA (Fortress)
• Gnolls (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 1, Vida 3, Iniciativa 4. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 1, Vida 4, Iniciativa 5. Tipo: Melé. Coste: 3 Oro. Habilidades: Ninguna.

• Hombres lagarto (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 0, Vida 3, Iniciativa 4. Tipo: a Distancia. Coste: 3 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 0, Vida 3, Iniciativa 5. Tipo: a Distancia. Coste: 5 Oro. Habilidades: Ninguna.

• Libélulas (Tier Bronce - Niv. 3)
  - Básica: Ataque 3, Defensa 0, Vida 3, Iniciativa 8. Tipo: Voladora. Coste: 4 Oro. Habilidad: "Al Atacar: Retira todos los efectos Continuos que el enemigo ha jugado sobre el objetivo."
  - Élite: Ataque 3, Defensa 1, Vida 3, Iniciativa 12. Tipo: Voladora. Coste: 7 Oro. Habilidad: "Al Atacar: Retira todos los efectos Continuos que el enemigo ha jugado sobre el objetivo. Si el objetivo contraataca, sufre -1 Ataque."

• Basiliscos (Tier Plata - Niv. 4)
  - Básica: Ataque 4, Defensa 1, Vida 4, Iniciativa 5. Tipo: Melé. Coste: 6 Oro. Habilidad: "Al Atacar: Con un resultado -1 en el dado de ataque la unidad atacada recibe una ficha Parálisis."
  - Élite: Ataque 4, Defensa 1, Vida 5, Iniciativa 7. Tipo: Melé. Coste: 9 Oro. Habilidad: "Al Atacar: Con un resultado -1 en el dado de ataque la unidad atacada recibe una ficha Parálisis."

• Gorgonas (Tier Plata - Niv. 5)
  - Básica: Ataque 4, Defensa 2, Vida 5, Iniciativa 5. Tipo: Melé. Coste: 9 Oro. Habilidades: Ninguna.
  - Élite: Ataque 5, Defensa 2, Vida 5, Iniciativa 6. Tipo: Melé. Coste: 14 Oro. Habilidad: "Al Atacar: Después del ataque, lanza 2 dados de ataque; si sacas un doble 0, reduce los Puntos de Salud de la unidad objetivo a 0."

• Wyverns (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 1, Vida 8, Iniciativa 7. Tipo: Voladora. Coste: 12 Oro. Habilidad: "Al Atacar: Coloca 1 cubo de facción sobre el objetivo. Al comienzo de su activación retíralo para infligirle 1 Herida."
  - Élite: Ataque 6, Defensa 1, Vida 8, Iniciativa 11. Tipo: Voladora. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Coloca 2 cubos de facción sobre el objetivo. Al comienzo de cada activación, retira 1 para infligirle 1 Herida."

• Hidras (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 3, Vida 8, Iniciativa 5. Tipo: Melé. Coste: 20 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Ignora el contraataque."
  - Élite: Ataque 7, Defensa 3, Vida 10, Iniciativa 7. Tipo: Melé. Coste: 28 Oro y 2 Objetos de valor. Habilidad: "Al Atacar: Ignora el contraataque. Esta unidad ataca a hasta 2 unidades enemigas adyacentes."

---

### 9. CONFLUENCIA (Conflux)
• Hadas (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 0, Vida 2, Iniciativa 7. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 0, Vida 4, Iniciativa 9. Tipo: Melé. Coste: 4 Oro. Habilidad: "Al Atacar: Ignora los contraataques."

• Elementales de la tormenta (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 0, Vida 3, Iniciativa 7. Tipo: a Distancia. Coste: 3 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 0, Vida 5, Iniciativa 8. Tipo: a Distancia. Coste: 5 Oro. Habilidad: "Al Atacar: Añade +1 Potencia al primer hechizo de magia de aire que lances durante esta activación."

• Elementales de hielo (Tier Bronce - Niv. 3)
  - Básica: Ataque 2, Defensa 1, Vida 4, Iniciativa 5. Tipo: a Distancia. Coste: 4 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Vida 5, Iniciativa 6. Tipo: a Distancia. Coste: 7 Oro. Habilidad: "Activación: Añade +1 Potencia al primer hechizo de magia de agua que lances durante esta activación."

• Elementales de energía (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 1, Vida 5, Iniciativa 5. Tipo: Melé. Coste: 6 Oro. Habilidades: Ninguna.
  - Élite: Ataque 4, Defensa 1, Vida 5, Iniciativa 8. Tipo: Melé. Coste: 8 Oro. Habilidad: "Activación: Añade +1 Potencia al primer hechizo de magia de fuego que lances."

• Elementales de magma (Tier Plata - Niv. 5)
  - Básica: Ataque 4, Defensa 2, Vida 5, Iniciativa 4. Tipo: Melé. Coste: 9 Oro. Habilidades: Ninguna.
  - Élite: Ataque 5, Defensa 2, Vida 5, Iniciativa 6. Tipo: Melé. Coste: 13 Oro. Habilidad: "Activación: Añade +1 Potencia al primer hechizo de magia tierra que lances durante esta activación."

• Elementales mágicos (Tier Oro - Niv. 6)
  - Básica: Ataque 4, Defensa 2, Vida 7, Iniciativa 7. Tipo: Melé. Coste: 13 Oro. Habilidad: "Al Atacar: Ignora los contraataques. Ataca a todas las unidades adyacentes."
  - Élite: Ataque 5, Defensa 2, Vida 7, Iniciativa 9. Tipo: Melé. Coste: 19 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Ignora los contraataques. Ataca todas las unidades enemigas adyacentes. Pasivo: Ignora cualquier efecto de Hechizo y Daño de especialidad."

• Fénix (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 2, Vida 7, Iniciativa 12. Tipo: Voladora. Coste: 21 Oro y 1 Objeto de valor. Habilidad: "Pasivo: Una vez por combate. Cuando los PS de esta unidad se reduzcan a 0, ponlos en 1. Pasivo: Inmunes a los Hechizos de magia de fuego."
  - Élite: Ataque 7, Defensa 2, Vida 8, Iniciativa 18. Tipo: Voladora. Coste: 29 Oro y 2 Objetos de valor. Habilidad: "Al Atacar: Ataca 2 espacios en una línea. El primer ataque se resuelve normalmente y el segundo tiene 2 Ataque. Pasivo: Inmunes a los Hechizos de magia de fuego."

---

### 10. CALA (Cove)
• Oceánidos (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 0, Vida 3, Iniciativa 6. Tipo: Voladora. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 0, Vida 3, Iniciativa 8. Tipo: Voladora. Coste: 3 Oro. Habilidad: "Pasivo: Ignora todos los efectos y Daño de un Hechizo de magia de agua."

• Marineros (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 1, Vida 3, Iniciativa 5. Tipo: Melé. Coste: 3 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 1, Vida 5, Iniciativa 6. Tipo: Melé. Coste: 5 Oro. Habilidad: "Pasivo: Una vez por combate, cuando esta unidad retira una unidad del combate, gana 2 Oros."

• Lobos de mar (Tier Bronce - Niv. 3)
  - Básica: Ataque 2, Defensa 0, Vida 4, Iniciativa 6. Tipo: a Distancia. Coste: 4 Oro. Habilidad: "Pasivo: Ignora la penalización de combate contra unidades adyacentes."
  - Élite: Ataque 3, Defensa 0, Vida 5, Iniciativa 8. Tipo: a Distancia. Coste: 6 Oro. Habilidad: "Al Atacar: Ignora los contraataques. Pasivo: Ignora la penalización de combate contra unidades adyacentes."

• Ayssids (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 1, Vida 5, Iniciativa 9. Tipo: Voladora. Coste: 6 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Vida 6, Iniciativa 11. Tipo: Voladora. Coste: 10 Oro. Habilidad: "Al Atacar: Si los Puntos de salud del objetivo se reducen a 0, después de resolver el Contraataque (si corresponde), los Ayssids pueden atacar a otra unidad adyacente."

• Hechiceras (Tier Plata - Niv. 5)
  - Básica: Ataque 3, Defensa 1, Vida 5, Iniciativa 6. Tipo: a Distancia. Coste: 8 Oro. Habilidad: "Alternativo: Coloca una ficha de debilidad <<-2>> sobre cualquier unidad durante 2 rondas de combate."
  - Élite: Ataque 4, Defensa 1, Vida 6, Iniciativa 7. Tipo: a Distancia. Coste: 13 Oro. Habilidad: "Al Atacar: Después del ataque, coloca una ficha de Debilidad <<-1>> sobre el objetivo durante 2 rondas de combate."

• Nix (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 2, Vida 7, Iniciativa 6. Tipo: Melé. Coste: 12 Oro. Habilidades: Ninguna.
  - Élite: Ataque 6, Defensa 2, Vida 8, Iniciativa 7. Tipo: Melé. Coste: 20 Oro y 1 Objeto de valor. Habilidad: "Pasivo: Esta unidad no puede recibir más de 4 Heridas de un solo ataque."

• Háspidos (Tier Oro - Niv. 7)
  - Básica: Ataque 5, Defensa 3, Vida 8, Iniciativa 9. Tipo: Melé. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: +2 Ataque si, durante este combate, esta unidad se giró del lado de manada al lado de unos pocos."
  - Élite: Ataque 7, Defensa 3, Vida 8, Iniciativa 12. Tipo: Melé. Coste: 30 Oro y 2 Objetos de valor. Habilidad: "Al Atacar: Coloca 2 cubos de facción sobre el objetivo. Al comienzo de cada una de sus activaciones, retira 1 de ellos para infligir 1 Herida."

---

### 11. INVOCACIONES (Summons)
• Elementales de aire (Niv. 2)
  - Básica: Ataque 2, Defensa 0, Vida 4, Iniciativa 8. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de aire. Esta unidad inflige daño elemental."
  - Élite: Ataque 3, Defensa 0, Vida 4, Iniciativa 8. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de aire. Esta unidad inflige daño elemental."

• Elementales de agua (Niv. 2)
  - Básica: Ataque 2, Defensa 0, Vida 5, Iniciativa 6. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de agua. Esta unidad inflige daño elemental."
  - Élite: Ataque 3, Defensa 0, Vida 5, Iniciativa 6. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de agua. Esta unidad inflige daño elemental."

• Elementales de fuego (Niv. 3)
  - Básica: Ataque 2, Defensa 1, Vida 4, Iniciativa 5. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de fuego. Esta unidad inflige daño elemental."
  - Élite: Ataque 3, Defensa 1, Vida 4, Iniciativa 5. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de fuego. Esta unidad inflige daño elemental."

• Elementales de tierra (Niv. 3)
  - Básica: Ataque 2, Defensa 2, Vida 2, Iniciativa 5. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de tierra. Esta unidad inflige daño elemental."
  - Élite: Ataque 3, Defensa 2, Vida 2, Iniciativa 5. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de tierra. Esta unidad inflige daño elemental."`
  }
];
