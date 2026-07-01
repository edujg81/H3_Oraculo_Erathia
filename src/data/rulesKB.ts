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
    title: "4. Dados del Juego: Dados de Recursos y de Combate",
    category: "components",
    content: `El juego incorpora dos tipos de dados de seis caras (d6) especiales reglamentarios para definir la fortuna y las tácticas (no existen dados de asedio específicos en el juego de mesa, todos los asaltos y catapultas se resuelven empleando el dado de combate estándar):

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

No existen caras que otorguen +2, daño directo ignorando defensa ni represalias extra. Los resultados posibles son estrictamente -1, 0 y +1.`
  },
  {
    id: "special_tokens_mechanics",
    title: "5. Fichas Especiales de Juego y sus Reglamentos",
    category: "components",
    content: `Para regular diversos efectos atmosféricos, tácticos y limitaciones, el juego de mesa utiliza fichas dedicadas:
1. Fichas de Tiempo (Time Tokens): Se colocan en el tablero de ronda de escenario o pista de campaña. Actúan como una cuenta atrás fija. Además, limitan las visitas a ciertas localizaciones raras, indicando cuándo se reactivan o cuándo spawnearán ejércitos neutrales en el mapa de aventura.
2. Cartas de Hechizo en Pergamino (Spell Scroll Cards): Cartas que representan pergaminos arcanos. Contienen un hechizo específico imprimado. Permiten a cualquier héroe lanzar ese hechizo en combate (o mapa) sin necesidad de poseer el "Libro de Hechizos" ni el nivel mágico requerido. Se descartan de forma permanente tras su único uso.
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
R: Los pergaminos de hechizo se tratan como cartas de un solo uso. Se juegan de tu mano y se descartan de forma permanente del juego tras su uso, no volviendo a la pila de descarte del Héroe.

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
    title: "15. Compendio Completo de Localizaciones del Mapa y Efectos",
    category: "map",
    content: `Las localizaciones en el mapa de aventura de Heroes III pertenecen a cuatro grandes categorías de interacción con reglas precisas:

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
• Inmunidades Innatas: No es reducible excepto mediante inmunidades absolutas especificadas en las cartas de Criatura Élite (por ejemplo, los Dragones Negros son completamente inmunes a toda la magia, los Fénix son inmunes al daño de Fuego, y los Elementales de Tierra ignoran el daño de Implosión o Lentitud).`
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
• Misión de Campaña II: "El Secreto del Alquimista" (The Alchemist's Secret): Consigue azufre y mercurio en glaciares para reactivar Golems de Hierro inmunes a conjuros.
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
    title: "26. Localizaciones Marítimas y de Expansión Cove (Savage Seas)",
    category: "map",
    content: `Las losetas de mar introducidas en la expansión Cove (Savage Seas) incorporan un conjunto propio de localizaciones visitables y obstáculos interactivos únicos:

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
    title: "27. Localizaciones Elementales y Expansión Conflux",
    category: "map",
    content: `La expansión de Confluencia (Conflux) añade localizaciones de energía elemental pura para el mapa de aventura de Erathia:

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
    content: `Los Bancos de Criaturas son localizaciones de batalla místicas añadidas por las expansiones que se sitúan sobre las losetas lejanas (II-III) o cercanas (IV-V) en sus casillas de obstáculo bloqueadas.

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
  - Pirámide (Pyramid): Custodiada por 1 Gold Golem, 1 Diamond Golem y momias. Recompensa: Búsqueda (5) de Hechizos. Extra: Permite remover hasta X cartas redundantes de tu descarte para buscar (5) en los mazos correspondientes.
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
    content: `La wiki oficial de la comunidad detalla exhaustivamente las características iniciales, mazos de salida y especialidades de los Héroes para las 10 facciones asimétricas del juego:

1. CASTILLO (CASTLE):
• Catherine (Poder): Especialidad "Cruzada" (Crusade). Otorga ventajas ofensivas masivas a los Espadachines/Cruzados y eleva la Moral aliada.
• Christian (Poder): Especialidad "Balista" (Ballista). Comienza con una Balista en su mazo y duplica su efectividad ofensiva.
• Adela (Magia): Especialidad "Bendición" (Bless). Maximiza el daño físico de sus tropas de primera línea aplicando bendiciones arcanas baratas.
• Loynis (Magia): Especialidad "Oración" (Prayer). Aumenta simultáneamente el Ataque, Defensa e Iniciativa de todo su ejército en rondas decisivas.

2. NECRÓPOLIS (NECROPOLIS):
• Sandro (Magia): Especialidad "Nigromancia" (Necromancy). Convierte una parte de las tropas caídas en combate en Esqueletos permanentes para su mazo de unidades.
• Thant (Magia): Especialidad "Animar Muertos" (Animate Dead). Capacidad arcana única de revivir regimientos de no-muertos caídos en medio de la batalla táctica.
• Clavius (Poder): Especialidad "Oro" (Gold). Genera una bonificación pasiva permanente de +1 de Oro en cada Fase de Recursos.
• Charna (Poder): Especialidad "Fantasmas" (Wights). Mejora sustancialmente las estadísticas defensivas e inmunidades de sus unidades de Fantasmas.

3. MURALLAS (RAMPART):
• Gelu (Poder): Especialidad "Tiradores" (Sharpshooters). Permite mejorar de forma permanente sus unidades de Arqueros o Elfos a Tiradores de élite que ignoran penalizaciones.
• Kyrre (Poder): Especialidad "Logística" (Logistics). Aumenta los Puntos de Movimiento (PM) iniciales del Héroe en el mapa de aventura cada turno.
• Gem (Magia): Especialidad "Primeros Auxilios" (First Aid). Comienza con una Tienda de Auxilio gratuita y duplica las heridas curadas de sus tropas aliadas dañadas.
• Elleshar (Magia): Especialidad "Inteligencia" (Intelligence). Reduce el coste de maná de sus conjuros y acelera de forma drástica la regeneración mágica.

4. MAZMORRA (DUNGEON):
• Mutare (Poder): Especialidad "Dragones" (Dragons). Incrementa la Iniciativa y el daño de todas las unidades con la palabra clave Dragón en su ejército.
• Gunnar (Poder): Especialidad "Logística" (Logistics). Facilita el movimiento subterráneo y añade PM extra al transitar losetas difíciles.
• Alamar (Magia): Especialidad "Resurrección" (Resurrection). Hechicero de tierra experto capaz de resucitar de forma permanente tropas vivas caídas en combate.
• Malekith (Magia): Especialidad "Hechicería" (Sorcery). Incrementa en un 50% el daño final provocado por cualquier hechizo de daño directo.

5. TORRE (TOWER):
• Neela (Poder): Especialidad "Armadura" (Armorer). Otorga a sus unidades aliadas una reducción pasiva de daño que mitiga golpes enemigos.
• Torosar (Poder): Especialidad "Balista" (Ballista). Sus máquinas de guerra ganan iniciativa y daño por metralla explosiva.
• Solmyr (Magia): Especialidad "Rayo en Cadena" (Chain Lightning). Comienza el juego con este devastador hechizo de daño a múltiples objetivos.
• Astral (Magia): Especialidad "Hipnosis" (Hypnotize). Hechicero capaz de tomar el control temporal de una unidad enemiga en la reja táctica.

6. INFIERNO (INFERNO):
• Xeron (Poder): Especialidad "Diablos" (Devils). Potencia las estadísticas de combate de los Diablos y Archidiablos, reduciendo además la Moral del rival.
• Nymus (Poder): Especialidad "Portales de Fuego" (Fire Gates). Permite teletransportar tropas aliadas por el tablero de batalla ignorando obstáculos físicos.
• Ayden (Magia): Especialidad "Inteligencia" (Intelligence). Incrementa el límite máximo de cartas de hechizo retenidas en mano y otorga Maná adicional.
• Fiona (Magia): Especialidad "Sabuesos de Fuego" (Cerberi). Invoca sabuesos del infierno y potencia su ataque de tres cabezas (daño a múltiples casillas).

7. BASTIÓN (STRONGHOLD):
• Crag Hack (Poder): Especialidad "Ataque" (Offense). Incrementa drásticamente el daño físico infligido por todas sus unidades en ataques cuerpo a cuerpo.
• Shiva (Poder): Especialidad "Rocs" (Aves de Roc). Mejora las estadísticas de ataque, defensa y velocidad de vuelo de los Rocs y Aves de Fuego.
• Gundula (Magia): Especialidad "Ataque" (Offense). Magnifica la fuerza física de sus tropas terrestres mediante canalizaciones arcanas de tierra.
• Terek (Magia): Especialidad "Habilitar Paso" (Haste). Otorga iniciativa máxima a todo su ejército durante la primera ronda de combate táctico.

8. FORTALEZA (FORTRESS):
• Tazar (Poder): Especialidad "Armadura" (Armorer). Reduce a la mitad las heridas críticas sufridas por sus tropas en combate y otorga defensas extremas.
• Bron (Poder): Especialidad "Basiliscos" (Basilisks). Comienza con un basilisco Élite adicional y potencia la probabilidad de petrificación enemiga.
• Andra (Magia): Especialidad "Sabiduría" (Wisdom). Le permite aprender Hechizos de nivel II y III gastando menos recursos y oro de la metrópolis.
• Voy (Magia): Especialidad "Navegación" (Navigation). Otorga ventajas de movimiento insuperables al explorar losetas con agua, islas u océanos.

9. CONFLUENCIA (CONFLUX):
• Lacus (Poder): Especialidad "Elementales de Agua" (Water Elementals). Duplica la vitalidad y capacidades curativas de los Elementales de Agua/Hielo.
• Ignissa (Poder): Especialidad "Elementales de Fuego" (Fire Elementals). Sus tropas aliadas ganan la palabra clave Ataque Ardiente (fuego directo).
• Ciele (Magia): Especialidad "Flecha de Agua" (Water Arrow). Potencia de forma drástica el daño del proyectil elemental de agua.
• Grindan (Magia): Especialidad "Ralentizar" (Slow). Comienza con el hechizo Ralentizar de Tierra, reduciendo la iniciativa de las filas enemigas.

10. BAHÍA (COVE):
• Jeremy (Poder): Especialidad "Cañón" (Cannon). Empieza la partida con un Cañón pesado de Bahía que inflige daño masivo por ronda.
• Bidley (Poder): Especialidad "Piratas" (Pirates). Mejora automáticamente sus Corsarios de élite otorgándoles un ataque doble por asalto táctico.
• Andria (Magia): Especialidad "Marea Alta" (High Tide). Altera las condiciones de la cuadrícula táctica, ralentizando e infligiendo daño constante al enemigo.
• Anabel (Magia): Especialidad "Piratería" (Piracy). Otorga recursos de Oro adicionales cada vez que derrota enemigos en enclaves de agua o barcos.`
  },
  {
    id: "wiki_cities_buildings",
    title: "33. Desarrollo Urbano: Ciudades y Catálogo de Edificios de Facción",
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
  }
];
