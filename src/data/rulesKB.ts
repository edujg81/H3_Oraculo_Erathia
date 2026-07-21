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
    content: `El juego cuenta con un total de 10 facciones oficiales que comprenden el juego base y todas las expansiones:
1. Castillo (Borde Azul): Fuerte presencia militar convencional basada en caballeros, campeones pesados y la moral alta del orden divino.
2. Necrópolis (Borde Gris): Huestes de no-muertos comandadas por nigromantes. Poseen inmunidad absoluta a los efectos de moral positiva/negativa y pueden alistar tropas de las bajas sufridas en batalla.
3. Mazmorra (Borde Morado): Hechicería oscura destructiva y monstruos temibles de las cavernas como contempladores, harpías y los indestructibles dragones negros.
4. Murallas (Borde Verde): Elfos, centauros y dragones dorados en comunión con las fuerzas forestales. Poseen gran agilidad y ventajas en el terreno de bosque.
5. Torre (Borde Celeste): Magos arcanos, titanes de tormenta y golems mecánicos. Excelente manipulación de artefactos y cofradías de magos potenciadas.
6. Fortaleza (Borde Verde Oscuro): Criaturas del pantano como hidras de caos, basiliscos y reptadores. Poseen defensas impenetrables y manipulación de efectos de terreno.
7. Inferno (Borde Rojo): Demonios, archidiablos e imps surgidos de los fuegos del Abismo. Sus tácticas se basan en el fuego destructor y el sacrificio.
8. Bastión (Borde Naranja): Salvajes orcos, ogros y cíclopes. Fuerte dependencia de la fuerza física bruta, inmunidad a ciertas magias y rabia de combate.
9. Conflujo (Borde Magenta): Seres de energía pura constituidos por elementales de fuego, tierra, agua y aire, coronados por los fénix resucitados.
10. Cala (Borde Turquesa): Piratas, corsarios y serpientes marinas del océano. Facilidad absoluta para la navegación costera, astilleros ágiles y contrabando de recursos.`
  },
  {
    id: "rules_components_resources",
    title: "3. Lista de Componentes, Recursos e Iconografía",
    category: "components",
    content: `Componentes Esenciales:
• Losetas de Mapa: Losetas de cartón hexagonales clasificadas según el nivel numérico de los encuentros (I a VII).
• Tablero de Batalla (4x5): Una grilla para colocar tropas aliadas y hostiles.
• Los Tres Recursos del Imperio (Representados en el track de Ciudad):
  - Oro: Moneda elemental de Erathia. Financia la adquisición de tropas, la contratación de héroes y compras de hechizos.
  - Materiales de construcción: Agrupa la madera y el mineral de hierro indispensables para la expansión urbana.
  - Objetos de valor: Representa divisas místicas escasas (mercurio, azufre, gemas, cristales) necesarias para invocar criaturas de nivel legendario (Tier Oro y Azur) o erigir santuarios mágicos.`
  },
  {
    id: "dice_mechanics_detailed",
    title: "4. Dados del Juego: Dados de Recursos, Combate y Tesoro",
    category: "components",
    content: `El juego incorpora tres tipos de dados de seis caras (d6) especiales reglamentarios para definir la fortuna, las tácticas y las recompensas (no existen dados de asedio específicos en el juego de mesa, todos los asaltos y catapultas se resuelven empleando el dado de combate estándar):

1. DADO DE RECURSOS:
Se utiliza al explorar ciertos enclaves arcanos o durante la fase de recursos para añadir fortuna. Sus caras son:
• Cara 1: +1 Moneda de Oro
• Cara 2: +2 Monedas de Oro
• Cara 3: +1 Material de construcción
• Cara 4: +2 Materiales de construcción
• Cara 5: +1 Objeto de Valor
• Cara 6: Vacío / Fallo (Sin ganancia)

2. DADO DE ATAQUE:
Se lanza obligatoriamente en cada ataque o contraataque (represalia) en la grilla táctica para modificar el daño final en heridas. Este dado cuenta únicamente con tres tipos de valores distribuidos equitativamente en sus caras:
• Caras con valor de -1: Reduce el daño final en 1 herida (con un mínimo absoluto de 0 heridas infligidas).
• Caras con valor de 0: Sin variación (se inflige el daño base de la unidad).
• Caras con valor de +1: Aumenta el ataque sumando +1 herida al total infligido.

No existen caras que otorguen +2, daño directo ignorando defensa ni represalias extra. Los resultados posibles son estrictamente -1, 0 y +1.

3. DADO DE TESORO:
Se utiliza principalmente como botín o recompensa (como al vencer en el Templo del Mar o rescatar a un Náufrago Superviviente). Se lanza para recibir valiosas mejoras para el Héroe o la economía:
• Caras 1 y 2: Medio Nivel de Experiencia - El Héroe Principal del jugador gana medio nivel de experiencia de forma inmediata.
• Caras 3 y 4: Búsqueda de Artefacto (Busca 2) - Roba 2 cartas del mazo de Artefactos, quédate con una de ellas en la mano y descarta la otra.
• Cara 5: Lanzar Dado de Recursos - Lanza y resuelve de inmediato 1 Dado de Recursos.
• Cara 6: Elegir Dado de Recursos - Lanza 2 Dados de Recursos y elige uno de los dos resultados para resolverlo.`
  },
  {
    id: "special_tokens_mechanics",
    title: "5. Fichas Especiales de Juego y sus Reglamentos",
    category: "components",
    content: `Para regular diversos efectos atmosféricos, tácticos y limitaciones, el juego de mesa utiliza fichas dedicadas:
1. Fichas de Tiempo (Time Tokens): Se colocan en el tablero de ronda de escenario o pista de campaña. Actúan como una cuenta atrás fija. Además, limitan las visitas a ciertos lugares raros, indicando cuándo se reactivan o cuándo spawnearán ejércitos neutrales en el mapa de aventura.
2. Cartas de Hechizo en Pergamino (Spell Scroll Cards): Cartas que representan pergaminos arcanos. En el juego base contienen un hechizo específico imprimado, permitiendo a cualquier héroe lanzar ese hechizo en combate (o mapa) sin poseer el Libro de Hechizos ni el nivel requerido, descartándose tras su uso. En la expansión de Conflujo, los pergaminos se cargan con dos hechizos boca abajo del mazo, actuando bajo reglas especiales asimétricas de límite, poder más débil y venta (ver sección 20 para más detalles).
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
    title: "8. Reglamento Detallado de Artefactos",
    category: "components",
    content: `Esta sección detalla de forma exhaustiva las reglas oficiales del juego de mesa para el uso de las cartas de Artefacto (Menores, Mayores, Reliquias, Grial y Pergaminos) en Heroes of Might and Magic III: El Juego de Mesa.

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
• Altar de Conflujo: Permite sacrificar artefactos menores que tengas en tu mano activa para transmutarlos en Puntos de Experiencia (Exp) directa o valiosos Objetos de Valor.`
  },
  {
    id: "setup_detailed_scenarios",
    title: "9. Preparación de las Partidas y Selección de Dificultad",
    category: "setup",
    content: `A continuación se detallan los pasos oficiales de preparación de la partida, seguidos por la selección del nivel de dificultad y el compendio de escenarios:

I. PASOS PARA LA PREPARACIÓN DE UNA PARTIDA (PASO A PASO):
1. **Selección del Escenario**: Selecciona un escenario de los Libros de Misiones. Para la primera partida se recomienda encarecidamente el escenario introductorio "Un Mundo Feliz" del Libro de Misiones básico.
2. **Selección de Facción**: Cada jugador escoge una Facción entre las disponibles.
3. **Selección del Héroe**: Escoge un Héroe de tu Facción como Héroe Principal. Cada Facción tiene al menos una Carta de Héroe de doble cara, con cada lado representando a un héroe diferente con sus propias estadísticas, especialidades y habilidades.
4. **Coger los Componentes de Facción**: Coge los siguientes componentes pertenecientes a tu Facción elegida:
   • 1 x Carta de Héroe de doble cara (en el lado del Héroe elegido).
   • 2 x modelo del Héroe (miniaturas).
   • 7 x Losetas de los edificios de la ciudad.
   • 1 x Tablero de Ciudad.
   • 7 x Cartas de Unidades a doble cara.
   • 3 x Cartas de Especialidad específicas del Héroe elegido.
   • 1 x Carta de la Habilidad específica del Héroe elegido.
   • 20 x Cubos de la Facción elegida de tu color.
   • 1 x Ficha de Construcción.
   • 1 x Ficha de Población (o Reclutamiento).
   • 1 x Ficha de Libro de Hechizos.
   • 3 x Fichas de Movimiento.
5. **Establecer el Nivel Inicial**: Coloca uno de tus Cubos de Facción en la primera casilla del Registro de Niveles que se encuentra en la Carta del Héroe (representado por un "I"). Ahora tu Héroe es de Nivel 1.
6. **Colocación del Mapa**: Coloca las Losetas del mapa y otros componentes específicos del escenario como se muestra en el Libro de Misiones.
7. **Configuración de Ciudad**: Coloca el Tablero de Ciudad de tu Facción elegida delante de ti y coloca las Losetas de los Edificios de la ciudad a su lado. Comprueba qué edificios están ya construidos en el Escenario que vas a jugar y coloca sus respectivas Losetas en el Tablero de Ciudad. Resuelve cualquier efecto inmediato de los Edificios ya construidos al final de la configuración.
8. **Ingresos y Fichas Iniciales**: Establece tus ingresos iniciales según indique el Escenario colocando Cubos de tu Facción en los niveles de ingresos de tu Tablero de Ciudad. Coloca las Fichas de Población, Construcción y Libro de Hechizos en sus respectivas ranuras en el Tablero de Ciudad.
9. **Reserva de Recursos**: Agrupa las Fichas de Recursos en diferentes montones cerca del alcance de todos. Toma los Recursos iniciales indicados por el Escenario y colócalos junto a tu Tablero de Ciudad. Ésta es tu reserva de recursos.
10. **Organización de Fichas**: Separa las fichas restantes en sus respectivos montones.
11. **Crear el Mazo de Características**: Ordena las Cartas de Características en cuatro montones: Ataque, Defensa, Poder y Conocimiento. Consulta las características de tu Carta de Héroe y coge el número correspondiente de cada montón. Éste es tu Mazo Inicial.
12. **Añadir las Flechas Mágicas**: Si tu Héroe Principal es un Héroe de Poder (Might), añade 1 copia del Hechizo Flecha Mágica a tu Mazo, y si es un Héroe de Magia (Magic), añade 2 copias.
13. **Añadir Especialidad y Habilidad**: Añade la Habilidad de tu Héroe y la Carta de Nivel I de su Especialidad a tu Mazo.
14. **Barajar Mazo Inicial**: Baraja tu Mazo Inicial y colócalo boca abajo junto a tu Carta de Héroe. Este mazo es el Mazo de Poder y Magia del Héroe, al que nos referiremos sencillamente como "tu mazo".
15. **Configurar los Mazos de Compendio**: Ordena las Cartas de Habilidad, Artefacto y Hechizo en 3 mazos boca abajo (incluidos los Hechizos de Flecha Mágica no utilizados) y barájalos. De cada uno de estos mazos coge la Carta superior y colócala boca arriba junto a su mazo, creando 3 Pilas de Descarte.
16. **Elegir la Dificultad**: Escoge la Dificultad (ver Tabla de Dificultad en sección 10) del Escenario y coge sus respectivos Bonus de Inicio.
17. **Preparación de Neutrales**: Ordena las Unidades Neutrales en 4 mazos según su nivel (Bronce, Plata, Oro, Azur). Baraja los mazos y deja espacio para sus Pilas de Descarte.
18. **Preparación de Batalla**: Coloca el tablero de combate al alcance de los jugadores. Comprueba en el Escenario qué Unidades iniciales recibes y colócalas en un montón cerca de tu Tablero de Ciudad, separadas del resto de Unidades de tu Facción.
19. **Marcador de Rondas**: Coloca el Marcador de Rondas junto al mapa de juego y coloca un Cubo Negro en el espacio "1".
20. **Mazo de Proclamaciones y Eventos**: Baraja las Cartas de Proclamación de los Astrólogos y colócalas boca abajo junto al Marcador de Rondas. Si hay más de 1 jugador, baraja también las Cartas de Eventos y colócalas boca abajo junto al Marcador de Rondas. En cada ronda par (Astrológica) se leerá una carta de Proclamación de los Astrólogos y en cada ronda impar (de Recursos, exceptuando la primera) se resolverá una carta de Eventos.
21. **Posicionamiento del Héroe**: Orienta tu loseta inicial a tu gusto. Elige qué modelo de Héroe representa a tu Héroe Principal en este juego y coloca el modelo (miniatura) elegido en el Campo central de tu Loseta Inicial.
22. **Jugador Inicial**: Elige un jugador inicial. El jugador inicial nunca cambia durante el juego.

II. BONOS DE INICIO SEGÚN LA DIFICULTAD ELEGIDA:
• Fácil (Easy): El jugador lanza 2 dados de Recursos y recibe los recursos de ambos – O – Busca (2) en el mazo de Artefactos, dos veces (elige uno y descarta el otro en cada búsqueda).
• Normal (Normal): El jugador lanza 2 dados de Recursos y recibe los recursos de uno de ellos – O – Busca (2) en el mazo de Artefactos (toma uno y descarta el restante).
• Difícil (Hard): El jugador lanza 1 dado de Recursos y recibe los recursos indicados en él – O – Revela cartas de la parte superior del mazo de Artefactos una a una hasta encontrar 1 Artefacto Menor (Minor) y lo añade a su mano (descartando el resto de cartas reveladas).
• Imposible (Impossible): No se recibe ningún tipo de bonificación o recurso inicial en la preparación.

Nota sobre Campañas: Las misiones de campaña tienen bonus únicos y específicos descritos en su propio libro que sustituyen por completo al bonus inicial de dificultad ordinario.

III. COMPENDIO DE ESCENARIOS OFICIALES Y EXPANSIONES:
1. "El Fin del Mundo" (The End of the World - PvP): Escenario competitivo de 7 rondas para 2 héroes. El objetivo principal es explorar y reclamar la loseta central VII para acumular el mayor índice de recursos antes de que expire el tiempo cósmico.
2. "Los Campeones de Gelea" (Champions of Gelea - Coop): Los ejércitos unen sus fuerzas tácticas para depositar un marcador de control del reino en la Utopía de los Dragones central, completando de esta forma la misión antes de la Ronda 11.
3. "Utopía Esmeralda" (Emerald Utopia - PvP): Escenario temático enfocado en la caza de grandes sierpes. El primer jugador que asalte de manera exitosa la Utopía del Dragón y derrote sus custodios arcanos es coronado monarca.
4. "Misión Maldita" (Cursed Quest - Coop / Solo): Limpieza completa del mapa de focos de corrupción no-muerta. Permite regular la dificultad de juego mediante la cantidad de rondas disponibles (Fácil: 8, Normal: 10, Difícil: 12, Imposible: 14).
5. "La Búsqueda del Grial" (The Hunt for the Holy Grail - Mixto): Los héroes deben visitar los obeliscos del mapa de aventura para desvelar el plano del Grial. El primero en excavar y transportar la reliquia a su castillo inicial gana la partida.
6. "War of the Mighty" (La Guerra de los Poderosos - Escaramuza PvP 2v2): Choque por parejas en el que los integrantes pueden transferirse Oro y Materiales de construcción gratis. El objetivo es sitiar y destruir el castillo central de cualquier miembro del equipo contrario.
7. "Guardián de la Mazmorra" (Dungeon Guardian - Coop): Duración fija de 12 rondas. Los jugadores se sumergen en las losetas subterráneas con el fin de localizar, desafiar y abatir a la Sierpe de Azur que protege el trono subterraneo.
8. "Ascensión" (Ascending Ascent - PvP / Solo): Mapa en bento-grid de montaña. Los jugadores avanzan en vertical enfrentando ejércitos neutrales en cada meseta autónoma. El jugador que logre erigir la Cofradía de Magos al máximo nivel absoluto y lance el Portal Dimensional se corona vencedor de forma espiritual.
9. "Islas Esmeralda" (Emerald Isles - PvP Marítimo): Introduce astilleros y naves marítimas. Exige poseer el mazo de Cala o Conflujo. Vence el jugador que logre conectar por puentes y boyas marítimas tres archipiélagos aislados.
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
• Vendo Oro:
  - Para comprar un Objeto de Valor: Pagas 6 de Oro para recibir 1 Objeto de Valor (Relación 6:1).
  - Para comprar un Material de Construcción: Pagas 2 de Oro para recibir 1 Material (Relación 2:1).
• Vendo Objeto de Valor:
  - Para comprar Oro: Vendes 1 Objeto de Valor para recibir 3 de Oro (Relación 1:3).
  - Para comprar Materiales: Vendes 1 Objeto de Valor para recibir 2 Materiales de Construcción (Relación 1:2).
• Vendo Material de Construcción:
  - Para comprar Oro: Vendes 1 Material para recibir 1 de Oro (Relación 1:1).
  - Para comprar un Objeto de Valor: Pagas 3 Materiales por 1 Objeto de Valor (Relación 3:1).

• Reciclaje de Cartas redundantes: Visitar un Mercadillo te permite descartar permanentemente un máximo de 1 carta redundante de tu mano activa (exceptuando Especialidades iniciales, Características iniciales, Habilidades iniciales y Flechas Mágicas iniciales) para canjearla por 1 de Oro.`
  },
  {
    id: "turn_flow_and_phases",
    title: "11. Estructura de las Rondas, Turno del Jugador y Acciones",
    category: "general",
    content: `El juego se estructura en Rondas, durante las cuales cada jugador realizará su Turno en el sentido de las agujas del reloj empezando por el jugador inicial. Durante sus turnos los jugadores moverán sus Héroes por el Mapa del Juego, construirán edificios en su Ciudad, y reclutarán Unidades en un intento de conseguir la victoria del Escenario.

I. PASOS AL INICIO DE CADA RONDA (Excepto la primera)
Antes de comenzar los turnos de los jugadores, se realizan de forma coordinada los siguientes pasos de mantenimiento:
1. Voltear las Fichas de Construcción, Población y Libro de Hechizos dejándolas en su lado activo.
2. Volver a colocar las fichas de Puntos de Movimiento (PM) a su lado verde activo.
3. Recuperar los usos de los Efectos Experto (Coronas).

A continuación, dependiendo del número de Ronda actual, los jugadores ganan Recursos o resuelven una Carta de Proclamación de Astrólogos:
• Rondas Impares (Rondas de Recursos): Todos los jugadores obtienen ingresos de la Ciudad, Asentamientos y Minas que controlan. Se omite este paso por completo durante la primera ronda de juego.
• Rondas Pares (Rondas de Astrólogos): El jugador inicial roba una Carta de Proclamación de Astrólogos y se resuelven sus efectos generales.
• Eventos de Escenario: Si el Escenario tiene Eventos marcados en el Marcador de Rondas que ya se han alcanzado, resuélvelos en este momento.
• Eventos en Partidas Multijugador (> 2 jugadores): Tras obtener los ingresos en una ronda de recursos, un jugador (se rota en cada ronda empezando por el jugador inicial) roba una Carta de Evento y resuelve su efecto.

Tras el inicio de la Ronda, los jugadores toman Turnos en el sentido de las agujas del reloj. Después de que todos los jugadores hayan jugado su Turno, mueve el Cubo Negro del Marcador de Ronda un espacio hacia adelante e inicia una nueva Ronda. Sigue jugando rondas hasta que se cumpla alguna de las condiciones de finalización del escenario.

II. TURNOS DEL JUGADOR Y GESTIÓN DE MANO
Al comienzo de tu Turno, actualiza tu mano de Cartas del mazo de Poder y Magia siguiendo estos pasos:
1. Descarta cualquier número de Cartas de tu mano. Si tu mano supera tu Límite de Mano actual, debes descartar cartas obligatoriamente para coincidir con dicho Límite.
2. A continuación, puedes robar Cartas hasta el Límite de tu Mano.
3. Resuelve cualquier habilidad 'al inicio de tu turno' después de haber robado las cartas.

• El Límite de Mano depende directamente del Nivel del Héroe. El comienzo del Turno es la única vez en todo el juego que se comprueba el Límite de Mano del jugador.
• Tipos de Acciones: Durante su turno, los jugadores pueden realizar tres tipos de Acciones principales: Acciones de Movimiento, Acciones de Ciudad y Acciones de Moral.
• Fin de la Ronda: Cuando todos los jugadores hayan gastado sus Puntos de Movimiento y no quieran utilizar más Acciones, la Ronda actual habrá terminado.

III. ACCIONES DE MOVIMIENTO
Se realizan exclusivamente gastando Puntos de Movimiento (PM). Un jugador puede usar sus PM únicamente durante su propio turno. Por cada 1 PM gastado, se puede realizar una de las siguientes opciones:
• Mover un Héroe 1 casilla.
• Revisitar la Zona o ubicación actual del Héroe.
• Continuar el combate de unidades Neutrales por 1 PM adicional.
• Descubrir una ficha o loseta de mapa si el Héroe se encuentra adyacente a ella.
• Colocar una nueva Loseta de Mapa (II-III) de tu reserva de losetas de mapa.

Reglas Especiales de Movimiento:
• Marcado de PM: Con las fichas de movimiento se marca la cantidad de PM que ha usado el Héroe, volteándolas a su lado inactivo.
• Héroe Secundario: Si un jugador dispone de un Héroe Secundario, utiliza sus movimientos por separado. El Héroe Secundario tiene únicamente 2 PM. Los héroes pueden gastar sus PM en cualquier orden.
• Héroes Aliados: Pueden moverse unos a través de otros, pero no pueden detener su movimiento en la misma casilla. Cuando te mueves a través de una casilla con un Héroe aliado, no se resuelve la casilla donde se encuentra dicho Héroe.
• Ganancia extra de PM: Siempre que un efecto indique que ganas PM adicionales, sólo será válido para ser consumido durante ese turno actual.
• Desalojo Forzoso: En la rara situación de que dos Héroes aliados sean forzados a acabar en la misma casilla, debes usar tu siguiente PM para mover obligatoriamente a uno de ellos fuera de esa casilla.

IV. ACCIONES DE CIUDAD
Cada una de las siguientes Acciones de la Ciudad se pueden utilizar exactamente una vez por Ronda. Estas Acciones pueden realizarse en cualquier momento durante el Turno de cualquier jugador, excepto durante el transcurso de un Combate o cuando tu Acción de Ciudad interrumpiese directamente otra Acción en proceso.
• Reacción antes del Combate: Cuando un jugador anuncia que está a punto de comenzar un Combate, puedes reaccionar utilizando tus Acciones de Ciudad antes de realizar cualquier paso de la preparación de dicho Combate.
• Desactivación: Después de realizar una Acción de la Ciudad, voltea la Ficha respectiva sobre su lado inactivo en tu Tablero de Ciudad. No puedes volver a usar esta Acción hasta el comienzo de la siguiente Ronda, cuando se renueven todas las Fichas de Ciudad.

Las 3 Fichas de Acción de Ciudad son:
1. Ficha de Construcción: Utilizada para construir un edificio y ampliar tu Ciudad.
2. Ficha de Población: Utilizada para Reclutar o Reforzar Unidades en tu ciudad, o para Reclutar un Héroe Secundario.
3. Ficha de Libro de Hechizos: Utilizada para la compra de Hechizos del compendio. Requiere tener construido el edificio de Cofradía de Magos en la ciudad.

V. ACCIONES DE MORAL Y EXCEPCIONES DE FACCIÓN
Los jugadores pueden ganar o perder Moral a través de varios efectos del juego. Al ganar Moral, coge una Ficha de Moral Positiva.
• Límite: Sólo puedes tener un máximo de una Ficha de Moral Positiva a la vez. Si estás a punto de ganar una segunda Ficha, puedes gastar inmediatamente la primera que posees antes de recibir la segunda.
• Uso de Moral Positiva: Se puede usar una Ficha de Moral Positiva para realizar cualquiera de las siguientes acciones en cualquier momento:
  - Robar una Carta de tu Mazo.
  - Descartar cualquier número de Cartas de tu mano, y luego robar exactamente ese mismo número de Cartas.
  - Relanzar cualquier dado que acabes de lanzar.

• Pérdida de Moral y Moral Negativa: Si pierdes Moral, descarta tu Ficha de Moral Positiva si posees una. De lo contrario, ganas una Ficha de Moral Negativa.
• Cancelación: Ganar Moral Positiva mientras posees una Ficha de Moral Negativa hace que ambas se descarten mutuamente.
• Penalización Extrema: Si ganas una segunda Ficha de Moral Negativa, en su lugar debes descartar por completo TODAS tus Cartas la próxima vez que termines tu turno.
• EXCEPCIÓN DE LA FACCIÓN NECRÓPOLIS: La facción Necrópolis ignora los efectos de Moral por completo. Las fuerzas de no-muertos no pueden ganar ni perder moral por ningún motivo del juego.`
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
• Choza de la Bruja (Witch Hut): El héroe puede adquirir de forma aleatoria una carta de Habilidad de la baraja principal pagando 5 de Oro, sin consumir nivel de experiencia. Solo se puede visitar una vez por partida.
• Erudito / Scholar (lugar del mapa, expansión Fortaleza): Lanza 1 dado de ataque; según el resultado, roba la carta de Estadística elegida (o retira una de tu mano), o roba 2 cartas de Habilidad y quédate 1 (descarta la otra), o roba 2 cartas de Hechizo y quédate 1 (descarta la otra).
• Aserradero / Sawmill (mina, expansión Murallas y Metas Ampliadas): Funciona como cualquier otra mina; produce pasivamente 2 Materiales de Construcción por Ronda de Recursos.
• Universidad (Metas Ampliadas, distinta de la Universidad Militar): Visitable. Paga 6 de Oro para buscar (4) en el descarte de cartas de Habilidad.
• Mercado Negro (Metas Ampliadas): Revisitable. Mira las 4 cartas superiores del descarte de artefactos y compra una: 5 de Oro si es menor, 7 si es mayor, 10 si es reliquia.
• Mercado del Tiempo (Metas Ampliadas): Visitable. Retira una carta de tu mano y, a cambio, busca (2) en el mazo de habilidades, hechizos o artefactos (tú eliges cuál).
• Prisión (Metas Ampliadas): Visitable. Ganas un héroe secundario y colocas su miniatura en esta zona; si ya tenías uno, ganas 3 de Oro en su lugar.
• Biblioteca de la Iluminación (Metas Ampliadas): Revisitable. Paga 3 de Oro para retirar 1 carta de Estadística de tu mano o descarte y sustituirla por cualquier otra carta de Estadística; puedes hacerlo hasta dos veces por visita.
• Fuerte de la Colina (Metas Ampliadas): Visitable. Refuerza inmediatamente una unidad de bronce o plata con un descuento de 3 de Oro en su coste de refuerzo (mínimo 0).
• Taberna (Metas Ampliadas): Revisitable. Paga 7 de Oro para ganar un héroe secundario y obligar a un jugador enemigo a descartar 1 carta al azar de su mano.
• Eje Estelar (expansión Inferno): Señalizable. Retira una carta de Estadística de tu mano y sustitúyela por una Carta de Característica Potenciada del mismo tipo (efecto único, no exige gastar Experto). No retires cubos de facción enemigos al visitarlo; una vez visitado por una facción, pasa a ser zona vacía solo para esa facción.

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
5. Cañón (Cannon): Carta permanente exclusiva de la facción de Cala (Cove). Se activa de forma automática al inicio de cada ronda de combate. Eliges una unidad o estructura enemiga y lanzas el dado de combate estándar: -1 inflige 1 herida / daño, 0 inflige 2 heridas / daños y +1 inflige 3 heridas / daños.`
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
    title: "20. Expansión Conflujo: Losetas Elementales, Invocaciones, Daño Elemental, Pergaminos y Escuela de Magia",
    category: "magic",
    content: `La expansión Conflujo (Conflux) introduce dimensiones místicas de energía pura, Planos Elementales, invocaciones tácticas y leyes mágicas avanzadas:

1. Losetas de Mapa Elementales:
Esta expansión introduce un nuevo tipo de losetas: las losetas elementales. Cada una de ellas está asociada a una escuela de magia. Todos los hechizos de esa escuela de magia que lance un héroe en esa loseta tienen su <SpellPower> aumentado en 1. Las losetas son:
• Loseta elemental de fuego cercana (asociada a la Magia de Fuego)
• Loseta elemental de agua cercana (asociada a la Magia de Agua)
• Loseta elemental de aire cercana (asociada a la Magia de Aire)
• Loseta elemental de tierra cercana (asociada a la Magia de Tierra)

2. Fichas de Tiempo (Time Tokens):
Para marcar la duración restante de un efecto continuo <Ongoing>, puedes utilizar fichas de tiempo. Ponlas sobre una carta o ficha que proporcione el efecto y reduce su valor total en 1 al final de la ronda. Cuando no queden fichas de tiempo, el efecto termina: descarta su carta o ficha.

3. Fichas de Monolito (Monolith Tokens):
Una ficha de monolito marca una zona que conecta con otro monolito en otra loseta y permite que los héroes viajen entre ellos. Cuando descubras una loseta que contiene un monolito, coloca la loseta según las reglas normales y luego coloca la ficha en la zona indicada por el diseño del mapa del escenario.
• Restricción: La ficha de monolito reemplaza la ubicación original de la zona y no se puede colocar en zonas bloqueadas, otras fichas o zonas que contengan lugares requeridos para cumplir alguna de las condiciones de victoria del escenario. Puedes colocar la ficha como desees, siempre que siga las reglas anteriores.
• Tipos de Monolitos: Hay 2 tipos de monolitos, representados como emparejados (ambas fichas muestran el mismo tipo):
  - Unidireccional: Permite a los héroes viajar solo desde el monolito de entrada al monolito de salida, pero no en la dirección opuesta.
  - Bidireccional: Permite que los héroes se muevan de un lado a otro entre los mismos monolitos de forma libre.

4. Tratado de Invocaciones de Combate (Summon):
Te permite añadir una unidad al tablero de combate durante el combate. Si realizas una acción de invocación, coloca la unidad invocada en el espacio vacío que elijas.
• Activación de Invocadas: Las unidades invocadas se activan en la ronda en que fueron invocadas si su iniciativa es menor o igual que la iniciativa de la unidad activada actualmente. En los demás casos, trátalas como si ya se hubieran activado en esta ronda de combate.
• Conservación: Después del combate, a menos que se indique lo contrario, las unidades convocadas se añaden a tu mazo de unidades.
• Cartas de Unidades Invocadas: Este conjunto de 8 cartas representa unidades invocadas. Júntalas en un nuevo mazo llamado de unidades convocadas/invocadas y colócalo junto a los mazos de unidades neutrales. Siempre que uses un hechizo de Invocación, toma una carta de unidad específica de este mazo.
• Hechizos de Invocación: Te permiten añadir una unidad al tablero de combate durante el combate. Según el <SpellPower> que utilices, puedes invocar una unidad no reforzada (unas pocas) o una reforzada (una manada). Una unidad invocada se coloca en un espacio vacío que elijas y sigue bajo tu mando hasta que muera o finalice el combate, lo que ocurra primero. Una unidad invocada de este tipo no se añade a tu mazo de unidades.
• Fichas de Invocación: Indican qué unidades fueron convocadas. Coloca esta ficha sobre su carta. Al final del combate, descarta tanto la ficha como la unidad. Se pueden usar en lugar de miniaturas de unidades en el tablero de la expansión Campo de batalla.
• Fichas de Muro de Fuego: Se utilizan en lugar de las cartas de especialidad de Luna en el tablero de la expansión Campo de batalla. Cada ficha corresponde a una carta de especialidad (situada al lado del tablero). Cuando la carta se retira o descarta, se descarta también la ficha de muro de fuego correspondiente.

5. Daño Elemental Puro e Inmunidad (Elemental Damage):
• Daño Elemental: Algunas unidades tienen la habilidad especial: «Esta unidad inflige daño elemental». En estos casos, realizas un ataque normal, pero el daño resultante funciona de manera similar al daño causado por hechizos, ya que ignora la <Defense> de la unidad.
• Regla Especial de Daño: El daño elemental no se ve afectado por la habilidad especial de una unidad que reduce el daño recibido de los hechizos.
• Inmunidad: La habilidad especial «Inmune» permite a una unidad ignorar los efectos de fuentes específicas, como hechizos o una escuela de magia determinada.

6. Cartas Permanentes (Permanent Cards):
Estas cartas te proporcionan un bonificador o tienen una condición que debe cumplirse.
• Uso: Cuando juegues una carta permanente, colócala frente a ti. Permanecerá allí hasta que la descartes o la reemplaces con otra carta permanente. Un héroe solo puede tener una carta de este tipo a la vez.
• Reglas Especiales: Las cartas permanentes se pueden jugar de la misma manera que las cartas con los símbolos de Mapa o Activación. El efecto de estas cartas dura solo mientras estén en juego. Cuando una carta permanente está en juego, aún puedes usar sus efectos básicos o avanzados, pero no se acumulan: si usas el efecto avanzado, no añadas el efecto básico.

7. Escuelas de Magia (Schools of Magic):
Algunas cartas pertenecen a las escuelas de magia, y cada carta de hechizo pertenece a una de las siguientes cuatro: Aire, Fuego, Tierra y Agua. Cada escuela tiene su propio borde alrededor del símbolo.
• Flecha Mágica: Aunque «Flecha mágica» pertenece a todas las escuelas de magia, solo puede beneficiarse de un bonificador de una escuela a la vez. Al lanzar este hechizo, debes asignarlo a una escuela de magia para determinar el bonificador.

8. Cartas de Pergamino de Hechizos (Spell Scroll Cards):
La expansión de Conflujo trae un conjunto de 20 cartas de pergamino de hechizos. Durante la preparación se barajan 10 en el mazo de artefactos y el resto se deja a un lado como mazo de pergaminos.
• Funcionamiento: Cuando obtienes un pergamino, colócalo junto a tu héroe, roba dos hechizos boca abajo del mazo de hechizos y ponlos encima. Se tratan como una sola carta ejecutable como hechizo normal, con las excepciones:
  - No cuenta para el límite de hechizos por ronda (puedes jugar otro hechizo de tu mano).
  - Solo se puede usar el poder más débil de los hechizos del pergamino (no se pueden potenciar con <SpellPower> ni sumas extras).
  - No se puede usar un hechizo de pergamino para aumentar el <SpellPower> de otro.
  - Se puede vender el pergamino en un mercadillo por 2 de Oro por cada hechizo que contenga.
• Límite: Máximo de 2 pergaminos en juego a la vez. Si obtienes un tercero, robas los nuevos hechizos y decides cuál de los tres pergaminos descartar.`
  },
  {
    id: "elemental_locations_conflux",
    title: "21. Lugares Elementales y Expansión Conflux",
    category: "map",
    content: `La expansión de Conflujo (Conflux) añade lugares de energía elemental pura para el mapa de aventura de Erathia:

1. PORTAL DE LOS ELEMENTOS (Elemental Portal):
Permite reclutar de forma directa elementales de Aire, Agua, Fuego o Tierra pagando Oro o el recurso elemental homónimo, sin necesidad de regresar a tu capital.

2. RIFTS ELEMENTALES (Rifts / Rifts de Fuego, Tierra, Aire, Agua):
Santuarios de dimensión paralela. El Héroe puede interactuar gastando 1 Acción para enfrentar una prueba de Hechicería (Poder) de nivel III. El éxito concede inmunidades elementales pasivas para su ejército o un pergamino místico.

3. ALTAR DE LA CONFLUENCIA (Conflux Altar):
Permite sacrificar cartas de Hechizo o Artefactos menores no deseados de tu mano para obtener Puntos de Experiencia (Exp) directa para tu Héroe u Objetos de Valor.`
  },
  {
    id: "cove_maritime_rules",
    title: "22. Expansión Cala: Losetas de Mapa Marino, Torbellinos, Debilidad, Clonación y Lugares del Mar",
    category: "map",
    content: `La expansión Cala (Cove) expande el mapa de Erathia hacia el océano con naves, piratas, remolinos y conjuros marinos avanzados:

1. Losetas de Mapa Marino (Marine Map Tiles):
Para descubrir las losetas de mapa marino se siguen las reglas de colocación habituales. Moverse por ellas introduce variaciones náuticas:
• Terreno Mixto: Algunas losetas de mapa marino contienen zonas tanto de tierra como de mar. Te mueves de forma normal entre dos zonas del mismo tipo (de mar a mar o de tierra a tierra) y cuando entras en una zona de tierra desde una zona de mar.
• Desembarque y Fin de Turno: Cuando tu héroe entra en una zona de mar desde una zona de tierra, su movimiento termina de inmediato para el resto de ese turno. No pierde los Puntos de Movimiento (PM) no gastados y todavía puede consumirlos (por ejemplo, para extender el combate resultante de resolver la zona en la que ha entrado), pero no puede realizar más movimientos en ese turno, ni siquiera con cartas.

2. Fichas de Torbellino (Whirlpool Tokens):
Un torbellino marca una zona que conecta con otro torbellino en otra loseta y permite que los héroes ya viajen entre ellos de forma directa.
• Colocación: Al descubrir una loseta de mar con un torbellino, colócala según las reglas normales y sitúa la ficha de torbellino en la zona correspondiente. La ficha reemplaza la ubicación original de la zona y no se puede colocar en zonas bloqueadas, otras fichas o zonas con lugares necesarios para la victoria del escenario.
• Mecánica de Viaje: Cada ficha muestra un número asociado al resultado del dado de ataque. Si hay tres fichas en el mapa, al entrar en una de ellas, tira un dado de ataque para determinar el torbellino de destino. Si el resultado te envía al mismo torbellino en el que acaba de entrar tu héroe, repite la tirada.
• Penalización de Viaje: Después de realizar cada uno de estos viajes, pierdes obligatoriamente 1 unidad de tu ejército activo (que podrá ser reclutada nuevamente más tarde).

3. Fichas de Debilidad (Weakness Tokens):
Una unidad con esta ficha sufre −1 <Attack> o −2 <Attack>, como se indique en la cara visible. Cada unidad solo puede tener una ficha de debilidad a la vez; si una unidad ya debilitada recibe otra ficha de debilidad, el jugador controlador decide cuál de las dos conservar.

4. Fichas de Clonación (Cloning Tokens):
Se utilizan dos conjuntos de dos fichas de clonación de diferentes colores (un conjunto para cada oponente) para marcar el efecto del hechizo «Clonación».
• Funcionamiento del Clon: Al lanzar el hechizo, elige una unidad aliada y un espacio vacío adyacente a ella en el tablero táctico. Coloca una ficha sobre la unidad original y la otra en el espacio vacío (que representará al clon).
• Atributos del Clon: El clon copia exactamente el valor de ataque, la iniciativa y la habilidad especial de la unidad original. Sin embargo, su salud (HP) es de solo 1, su defensa es de 0 y su defensa no puede aumentarse mediante cartas u otras unidades.
• Destrucción: Si la unidad clonada es atacada o recibe incluso un mínimo de 1 de daño de un hechizo, es destruida de inmediato. Si la unidad original es eliminada del tablero de combate, su clon se elimina automáticamente. El clon nunca hereda efectos que se hayan jugado en la unidad original antes o después de clonar.

5. Máquina de Guerra: Cañón (Cannon War Machine):
El Cañón es una máquina de guerra de asalto de la Cala.
• Adquisición: Se puede comprar en la fábrica de máquinas de guerra o en un mercadillo.
• Recargo de Mercadillo: Si decides comprar una máquina de guerra en un mercadillo, no podrás realizar ninguna otra acción de mercadillo durante esa visita, y su coste será de 3 o 4 de Oro adicional (dependiendo de la máquina en cuestión) en comparación con su coste en una fábrica de máquinas de guerra.

6. Lugares del Mapa Marino:
• Barco Abandonado (Visitable - Banco de Criaturas): Puedes buscar (2) en el mazo de artefactos. Si lo haces, también ganarás 2 de Oro.
• Naufragio (Visitable - Banco de Criaturas): Tira y resuelve 2 dados de recompensa (ReDie).
• Pecio (Visitable): Otorga pasivamente 2 Materiales de construcción directos.
• Barril Marino (Visitable): Tira y resuelve 1 dado de recompensa (ReDie).
• Superviviente de Naufragio (Visitable): Te permite realizar la acción Buscar (2) en el mazo de artefactos de inmediato.
• Sirena (Visitable): El héroe gana +1 PM adicional para consumir en el turno actual, y recibes una ficha de moral positiva.
• Cofre Marino (Visitable): Tira 1 dado de ataque. Con +1: Busca (1) en el mazo de artefactos; con 0: Gana 5 de Oro; con −1: No ganas nada.
• Restos de Naufragio (Visitable): Tira 1 dado de ataque. Con +1: Tira y resuelve 2 dados de recompensa; con 0: Tira y resuelve 1 dado de recompensa; con −1: No ganas nada.
• Templo del Mar (Visitable): Otorga a tu elección 10 de Oro o 2 cartas de Artefacto del mazo.
• Boya (Visitable): Te concede de forma inmediata una ficha de moral positiva.
• Tumba (Visitable): Otorga 3 de Oro y busca (1) en el mazo de artefactos, pero te penaliza otorgándote una ficha de moral negativa.
• Santuario del Gesto Mágico (Visitable): Te permite buscar (2) en el mazo de hechizos de forma gratuita.
• Santuario del Encantamiento Mágico (Visitable): Puedes abonar 3 de Oro para buscar (2) en el mazo de hechizos.`
  },
  {
    id: "cove_maritime_locations",
    title: "23. Lugares Marítimos y de Expansión Cove (Savage Seas)",
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
Se asimilan a las criptas terrestres. Contienen tesoros guardados por fantasmas y piratas no-muertos. Ofrecen abundantes Objetos de Valor y Dados de Tesoro.`
  },
  {
    id: "naval_battles_and_creature_banks",
    title: "24. Expansión Batallas Navales: Tablero Naval, Habilidades Potenciadas y Bancos de Criaturas",
    category: "modes",
    content: `La expansión Batallas Navales (Naval Battles) incorpora combates marítimos asimétricos, mecánicas de habilidades potenciadas y los peligrosos Bancos de Criaturas custodiados:

1. Tablero de Combate Naval Alternativo:
Si el escenario utiliza losetas de mar, se puede jugar con el tablero alternativo de combate naval de neopreno:
• Obstáculo Central: Se eliminan por completo los dos hexágonos o espacios del centro del tablero, representando agua profunda o un abismo marino.
• Unidades Terrestres: Las unidades de tipo terrestre (Ground) deben moverse obligatoriamente rodeando el obstáculo por el lado izquierdo o derecho del tablero.
• Unidades Voladoras: Las unidades voladoras (Flying) pueden moverse sobre los espacios eliminados como si estuvieran allí, pero está terminantemente prohibido que finalicen su movimiento táctico o detengan su activación sobre ellos. Tampoco pueden moverse fuera de la cuadrícula.

2. Fichas y Cartas de Habilidad Potenciada (Empowered Skills):
Permiten elevar las 32 habilidades secundarias a un nuevo rango superior de poder permanente:
• Ficha de Habilidad Potenciada: Te permite potenciar tu próxima carta de habilidad. Puedes usar esta ficha en el momento en que obtengas una nueva carta de habilidad (al subir de nivel, visitando un lugar, etc.). Colócala en tu carta de héroe y descártala tras usarla.
• Carta de Habilidad Potenciada: Funciona de forma idéntica a las cartas de habilidad estándar, pero tiene un único efecto potenciado que no requiere consumir tu Corona de Efecto Experto. Al obtener la habilidad potenciada, retira del juego la carta de habilidad básica equivalente. El mazo de habilidades potenciadas se mantiene bocarriba al lado del mazo común. Son limitadas (solo hay una copia de cada una en juego).

3. Fichas de Banco de Criaturas (Creature Bank Tokens):
Permiten convertir zonas bloqueadas del mapa de aventura en zonas visitables de combate:
• Clasificación: Se dividen en fichas Cercanas (reverso IV-V) y Lejanas (reverso II-III) según el tipo de loseta donde se revelen. Al descubrir una loseta, puedes elegir reemplazar una zona bloqueada con una ficha de banco del tipo correspondiente.
• Acceso: Al entrar en la ficha, debes resolver el combate del banco de criaturas correspondiente. Si vences, reclamas su recompensa, retiras la ficha de la loseta y colocas un cubo negro para marcarla como visitada.

4. Mecánica de Combate de Banco de Criaturas y Fichas de Pila (Stack Tokens):
• Despliegue: El jugador coloca hasta 5 de sus unidades en la zona de despliegue táctica aliada. Las unidades neutrales que defienden el banco se toman de su mazo propio (bocarriba) y se colocan al azar en la zona de despliegue neutral.
• Dificultad por Fichas de Pila: Según la dificultad del juego, roba fichas de pila bocabajo al azar y distribúyelas entre los defensores (máximo 1 ficha por unidad neutral):
  - Fácil: 1 ficha de pila distribuida.
  - Normal: 2 fichas de pila distribuidas.
  - Difícil: 3 fichas de pila distribuidas.
  - Imposible: 4 fichas de pila distribuidas.
• Efectos de las Fichas de Pila: Cada ficha de pila añade un modificador a la unidad neutral sobre la que se sitúa (+1 a su <Attack>, +1 a su <Defense>, +1 a su Salud, o +2 a su Iniciativa). Las unidades con fichas de pila actúan como unidades reforzadas.
• Elimiación de Pilas: Cuando una unidad neutral con ficha de pila sufre heridas iguales o superiores a su salud máxima (HP), descarta la ficha de pila, purga todo el daño que tuviera y aplica cualquier daño sobrante a su nueva salud base. Si muere sin fichas de pila, la carta de unidad derrotada se devuelve a su mazo de banco de criaturas (nunca se descarta definitivamente).
• Botín: Al ganar, recibes la recompensa básica del banco más recompensas extra añadidas por cada unidad con ficha de pila derrotada. No otorgan Puntos de Experiencia (Exp) ni admiten combates rápidos.

5. Lista Oficial de Bancos de Criaturas (Creature Banks):
• Barco Abandonado: Defensores: 4 elementales de agua. Recompensa: Moral Negativa y 7 Oro. Extra: 2 de Oro por unidad apilada vencida + busca (X) en el mazo de hechizos, siendo X el número de unidades apiladas derrotadas.
• Naufragio: Defensores: 4 espectros. Recompensa: Moral Negativa y 5 de Oro. Extra: 2 de Oro por unidad apilada vencida + busca (X) en el mazo de artefactos, siendo X el número de unidades apiladas derrotadas.
• Colmena de Libélulas: Defensores: 4 libélulas. Recompensa: 1 unidad de libélulas. Extra: Si tenía al menos 2 unidades apiladas, ganas libélulas apiladas en su lugar.
• Pirámide: Defensores: 2 gólems de oro, 2 gólems de diamante. Recompensa: Busca (5) en el mazo de hechizos. Extra: Por cada unidad de manada derrotada, puedes retirar 1 hechizo, habilidad o artefacto de tu mano/descarte y buscar (5) en la baraja respectiva.
• Depósitos de Medusas: Defensores: 4 medusas. Recompensa: 6 Oro y 1 Recurso Valioso. Extra: 3 Oro o 1 Recurso Valioso por unidad apilada derrotada.
• Tesorería Enana: Defensores: 4 enanos. Recompensa: 7 Oro. Extra: 3 Oro por unidad apilada derrotada.
• Conservatorio de Grifos: Defensores: 4 grifos. Recompensa: 1 unidad de grifos. Extra: Si tenía al menos 2 unidades apiladas, ganas grifos apilados en su lugar.
• Banco de Nagas: Defensores: 4 nagas. Recompensa: 6 Oro y 2 Recursos Valiosos. Extra: 6 Oro y 1 Recurso Valioso por unidad apilada derrotada.
• Cripta: Defensores: 1 esqueleto, 1 zombi, 1 espectro, 1 vampiro. Recompensa: 6 Oro. Extra: 2 de Oro por unidad apilada derrotada.
• Tesoro de los Diablillos: Defensores: 4 Familiares (diablillos). Recompensa: 3 Oro. Extra: 1 de Oro por unidad apilada derrotada.
• Reservas del Cíclope: Defensores: 4 cíclopes. Recompensa: 8 Oro y 2 Recursos Valiosos. Extra: 2 Recursos de construcción y 1 Recurso Valioso por unidad apilada derrotada.
• Utopía del Dragón: Defensores: 1 dragón negro, 1 dragón dorado, 1 dragón de cristal, 1 dragón hada. Recompensa: 40 Oro y busca (3) en el mazo de artefactos. Extra: Busca (5) en el mazo de artefactos o de hechizos por cada unidad apilada derrotada.`
  },
  {
    id: "underground_additional_content",
    title: "25. Expansión Contenido Adicional: Losetas Subterráneas, Puertas, Barcos, Ciudad Aleatoria y Campo de Fuerza",
    category: "map",
    content: `La expansión Contenido Adicional (Additional Content) introduce el plano subterráneo de Erathia, asedios aleatorios, naves físicas y defensas de campo de fuerza:

1. Losetas de Mapa Subterráneo y Puerta Subterránea:
El subsuelo representa una dimensión paralela de exploración en el mapa de aventura:
• Regla de Tránsito: Los héroes no pueden moverse directamente entre una loseta de superficie y una loseta subterránea a menos que empleen el hechizo de Puerta Subterránea o de Portal a la Ciudad.
• Fichas de Puerta Subterránea: Representan los túneles de acceso. Al descubrir una loseta que contiene una puerta subterránea, colócala normalmente. Elige una zona adyacente en la superficie (la «entrada») y coloca la mitad de la ficha de puerta subterránea en ella, y la otra mitad en la loseta subterránea correspondiente (la «salida»). Reemplaza la ubicación original de la zona y no puede colocarse en casillas bloqueadas o con lugares clave del escenario.
• Movimiento Sin Coste: Al entrar en la puerta subterránea por la entrada, se descubre la loseta subterránea y se traslada al héroe directamente a la salida. Moverse entre la entrada y la salida de la puerta subterránea no consume Puntos de Movimiento (PM) adicionales, tratándose ambas zonas cubiertas como un único lugar. Permite viajar en ambos sentidos de forma continua.

2. Mecánica del Barco (Boat Miniature):
• Reemplazo de Miniatura: Puedes sustituir tu miniatura de héroe por la figura física de un barco inmediatamente después de entrar en una casilla o zona de mar activa.
• Identificación de Propiedad: Coloca uno de tus cubos de facción en el interior de la miniatura de barco para recordar a qué héroe sustituye. Cuando el héroe entre en una zona de tierra firme desde el mar (desembarco), retira la miniatura de barco del mapa y vuelve a colocar la miniatura de héroe estándar.

3. Fichas de Ataque (Attack Tokens):
Una unidad que reciba esta ficha gana de forma inmediata +1 <Attack> o +2 <Attack> adicionales, según la cara visible de la ficha. Solo se permite un máximo de una ficha de ataque por unidad en combate táctico; si gana una segunda ficha, el jugador controlador escoge cuál de las dos conservar.

4. Ciudad Aleatoria (Random Town) y Combate de Asedio:
• Descubrimiento: Al descubrir la loseta de Ciudad Aleatoria, toma el mazo de cartas de ciudad, descarta las facciones activas en la partida, baraja el resto y roba una carta para determinar qué facción defenderá la ciudad aleatoria por el resto del escenario.
• Despliegue Defensor: El asedio de la ciudad aleatoria se defiende de forma predeterminada mediante:
  - 1 manada de estrella bronce (nivel 1-3). El jugador controlador de los defensores de la IA puede elegir cuál de bronce alistar.
  - 2 manadas de estrella plata (nivel 4-5).
  - 2 «unas pocas» de estrella oro (nivel 6-7).
• Regla de Asedio: Durante este combate táctico de asedio, la carta de «Torre de arqueros» no se utiliza bajo ninguna circunstancia.

5. Fichas de Campo de Fuerza (Force Field Tokens):
• Mecánica del Obstáculo: Representa un muro o campo defensivo de energía física creado por el hechizo homónimo.
• Restricción física: Actúa como un obstáculo de bloqueo absoluto. Únicamente las unidades de tipo volador (Flying) pueden moverse, saltar o volar a través de un espacio que contenga esta ficha. Las unidades terrestres o de melé sufren bloqueo completo.
• Despliegue: En tableros normales, coloca 1 ficha sobre un espacio vacío. En tableros de Campo de Batalla, coloca 2 fichas en dos espacios vacíos adyacentes entre sí.

6. Cartas de Caja de Pandora (Pandora's Box Cards):
Este mazo opcional de 20 cartas sustituye el efecto genérico de la Caja de Pandora en el mapa. Al visitar el lugar, el héroe puede optar por robar una carta de caja de Pandora y resolver su efecto inmediato en su lugar, marcando la zona con un cubo negro de forma habitual.

7. Hechizo de Mina (Landmine Spell):
Conjuro de fuego que siembra el campo de batalla de trampas ocultas:
• Despliegue de Minas: Según la <SpellPower> empleada, coge 2, 4 o 6 fichas de mina. La mitad deben estar vacías en su reverso y la otra mitad deben tener impreso el símbolo de 2 daños. Barájalas bocabajo y sitúa una por espacio vacío en el tablero de combate. Las fichas sobrantes se descartan.
• Revelación y Daño: El jugador puede mirar el reverso de sus propias minas sembradas en cualquier momento. Cuando una unidad enemiga entra en una casilla con ficha de mina, se revela: si está vacía, no sufre penalización y sigue moviéndose; si muestra el símbolo de daño, la unidad sufre automáticamente 2 heridas directas y, si sobrevive, finaliza su activación en dicha casilla. Dos fichas de mina de jugadores rivales pueden coincidir en el mismo espacio táctico.`
  },
  {
    id: "stronghold_expansion_additions",
    title: "26. Expansión Bastión: Arenas Movedizas y Fichas de Corrosión",
    category: "magic",
    content: `La expansión Bastión (Stronghold) introduce el terreno desértico de Krewlod, furia de combate y tácticas de desgaste físico:

1. Hechizo y Fichas de Arenas Movedizas (Quicksand Spell):
• Despliegue: Según la <SpellPower> de tierra que emplee el héroe, toma 2, 4 o 6 fichas de arenas movedizas del mismo conjunto (donde la mitad están vacías y la otra mitad contienen el icono de arenas movedizas en su reverso). Barájalas bocabajo y distribuye una por hexágono táctico libre. Las sobrantes se retiran.
• Revelación de Obstáculo: Cuando una unidad entra en una casilla con ficha de arenas movedizas, se voltea bocabajo: si está vacía, la unidad puede continuar su movimiento sin penalizaciones; si muestra el icono de arenas movedizas, la activación, el movimiento y la acción de ataque de la unidad finalizan de forma fulminante en ese hexágono en ese turno. Dos fichas de diferentes jugadores pueden ocupar el mismo hexágono.

2. Fichas de Corrosión (Corrosion Tokens):
Las fichas de corrosión representan el óxido ácido y el desgaste de armaduras de las fuerzas salvajes del Bastión:
• Efecto en Combate: Una unidad afectada por esta ficha sufre una penalización permanente reduciendo su <Defense> en 1 punto, hasta un mínimo de 0.
• Límite: Solo se permite un máximo de una ficha de corrosión por unidad táctica a la vez; si la unidad recibe una segunda ficha de corrosión, la ficha extra se descarta directamente a la caja.
• Duración: A menos que sea purgada mediante un hechizo beneficioso o habilidad especial de curación/limpieza, la ficha de corrosión permanece sobre la unidad de forma continua hasta la finalización absoluta del combate táctico.`
  },
  {
    id: "battlefield_expansion",
    title: "27. Expansión de Campo de Batalla (Battlefield Expansion)",
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
    title: "28. Bancos de Criaturas (Creature Banks) y Fichas de Apilamiento (Stack Tokens)",
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
  - Ficha de Corazón: +1 a los Puntos de Salud (HP).
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
    title: "29. Palabras Clave de Efectos de Cartas y Fichas en Unidades",
    category: "combat",
    content: `Las expansiones agregan palabras clave operativas y fichas de estado temporales o permanentes que alteran la física de las tropas en el tablero táctico:

1. PALABRAS CLAVE DE CONJUROS Y HECHIZOS:
• Clonar (Clone Token): Al conjurar el hechizo Clone en un regimiento aliado, se sitúa una ficha pequeña de clon en el regimiento y un token grande del mismo color en una casilla libre contigua. El clon hereda de forma idéntica todas las estadísticas pasivas básicas de la carta original, pero excluye cualquier bufo activo aplicado sobre ella. Si el clon recibe al menos 1 de daño de cualquier fuente O es el objetivo de un ataque directo (aunque inflija 0 heridas), sufre muerte automática y se remueve de la mesa. Desaparece si la tropa original es eliminada.
• Arenas Movedizas (Quicksand Token): Tras conjurar el hechizo de tierra, se sitúan de 2 a 6 fichas de arena movediza boca abajo en el tablero (la mitad vacías, la mitad con el icono de fango). Al entrar un regimiento en la casilla se voltea la ficha: si contiene el icono de fango, el movimiento y activación de la unidad cesan de forma fulminante en esa casilla en esta ronda. Dos arenas de distintos colores de jugador pueden ocupar la misma casilla.
• Mina Terrestre (Land Mine Token): Se sitúan de 2 a 6 fichas boca abajo en el tablero (la mitad vacías, la mitad con icono de explosión de 2 de daño). Al pisarse, detiene el movimiento de la unidad. Si muestra el icono de explosión, inflige 2 de daño directo por fuego a la unidad. Si esta sobrevive, continúa su activación.
• Campo de Fuerza (Force Field Token): Crea un obstáculo rectangular indestructible que cubre 1 espacio en tableros normales o 2 espacios en Campo de Batalla. Solo las unidades aéreas (Flying) pueden cruzar o volar sobre él; las unidades terrestres sufren bloqueo físico completo.
• Muro de Fuego (Fire Wall Token): Creado por el hechizo homónimo de fuego o por las cartas de Especialidad I y VI del héroe Luna (Conflujo). Inflige daño de fuego puro de área al inicio de la activación de cualquier regimiento enemigo que comience o transite por las casillas de fuego rúnico.

2. MECÁNICAS DE INVOCACIÓN (SUMMONING):
• Invocación Elemental (Summon Elementals): Los conjuros elementales añaden elementales de aire, tierra, agua o fuego en casillas libres del combate. Estas unidades aliadas operan de forma temporal bajo tu control. Si su iniciativa es inferior o igual a la de la unidad activa del turno actual, se activan en esta misma ronda; en caso contrario, se consideran ya activadas. Nunca se añaden de forma permanente a tu mazo de unidades al concluir la contienda; se disipan por completo.
• Invocación de Demonios (Summon Demons): Las unidades de Señores del Abismo (Pit Lords) de Inferno pueden usar su habilidad activa especial (icono de espiral) para resucitar o invocar unidades de "Demons" de forma gratuita a partir de bajas sufridas por otras unidades aliadas en combate. Si las tropas resucitadas sobreviven al concluir el combate, estas cartas de Demons SÍ se agregan de forma permanente al mazo de unidades del jugador como nuevas reclutas.

3. FICHAS DE ESTADO EN UNIDADES (TOKENS ON UNITS):
• Ficha de Debilidad (Weakness Token - Cove/SG2): Aplica un penalizador de -1 o -2 a la estadística de Ataque físico del regimiento afectado según la cara de la ficha mostrada. Colocada por habilidades de unidades de apoyo como las Hechiceras (Sorceresses). Límite de una ficha por regimiento.
• Ficha de Ataque (Attack Token - Stronghold/SG2): Incrementa la fuerza de ataque en +1 o +2 según la cara mostrada. Es otorgada por unidades de primera línea como los Ogros mediante su grito de batalla rúnico.
• Ficha de Corrosión (Corrosion Token - Stronghold): Reduce de forma permanente la estadística de defensa del regimiento objetivo en -1 punto (hasta un mínimo absoluto de 0 defensa). Una unidad solo puede albergar una ficha de corrosión activa. No se elimina al concluir los turnos individuales de combate; dura hasta el fin de la contienda táctica en curso. Colocada por bestias feroces como los Behemoths.`
  },
  {
    id: "scenario_modes_and_end_conditions",
    title: "30. Tipos de Escenarios (Enfrentamiento, Campaña, Alianza, Cooperativo) y Fin de Escenario",
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
    title: "31. Reglamento Detallado de la Inteligencia Artificial (IA)",
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
• Al asediar una ciudad enemiga del jugador, la IA coloca la Puerta principal frente a su unidad dotada con el mayor valor de iniciativa. Las tropas terrestres de la IA nunca dirigen sus ataques físicos a los muros o puertas de forma voluntaria; prefieren esperar en defensa o volar sobre ellos. Las unidades voladoras saltan los muros directo a su prioridad.
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
    title: "32. Modo Campaña Oficial y su Cronología de Misiones",
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

7. Misión VII: "Golpea el Hierro mientras esté Frío" (Strike while the Iron is Cold - Campaña Conflujo)
• Objetivo: Invasión de elementales. El héroe debe canalizar e interceptar losetas elementales controladas por criaturas míticas nativas del Plano del Caos antes de que consigan reclutar elementales de oro.

8. Misión VIII: "Keepers of Sorrows" (Custodios de las Penas - Campaña Necrópolis)
• Objetivo: La horda no-muerta sitia de forma sistemática santuarios asediados de Murallas. Se debe transmutar un Artefacto legendario en el "Sudario del Vampiro" sacrificando unidades de Élite propias en altares sagrados.`
  },
  {
    id: "faction_mission_books_compendium",
    title: "33. Compendio de Libros de Misiones de Facciones (Faction Mission Books)",
    category: "modes",
    content: `Nombres de campaña y escenarios verificados directamente contra los Libros de Misiones oficiales en español.

--- JUEGO BASE  ---

1. CASTILLO - Libro de Misiones básico. Campaña en solitario "Larga Vida a la Reina" (héroe: Catherine o Rion; enemigo: Mazmorra)":
  • Misión de Campaña I: "De Regreso al Hogar": (8 rondas) — libera al general Rion capturando la ciudad de Mazmorra.
  • Misión de Campaña II: "Ángeles Guardianes": (10 rondas) — derrota a dos señores enemigos de la Mazmorra.
  • Misión de Campaña III: "La Liberación de Steadwick": (13 rondas) — derrota al ejército final en la utopía del dragón.
- Escenarios independientes (Enfrentamiento): 
  • "El Retiro de los Monjes" (2 jugadores, 7 rondas, victoria por combate final entre héroes).
  • "Un Mundo Feliz" (2-3 jugadores, 8-9 rondas, victoria por controlar 5+ minas).
  • "Todos para Uno" (3 jugadores, 11 rondas, escenario de grial).
- Escenarios independientes (Cooperativo): 
  • "Los Campeones de Gelea" (2-3 jugadores, 11 rondas, cada facción debe colocar un cubo en la utopía del dragón).
  • "Misión Maldita" (2-3 jugadores, 8-14 rondas según dificultad, limpiar el mazo de unidades neutrales de la utopía del dragón).

2. MAZMORRA - Su campaña en solitario "La Sangre del Dragón" (héroe: Mutare o Alamar; enemigo: Castillo) se encuentra en el Libro de Misiones de Metas Ampliadas (Stretch Goals), junto con las campañas de Necrópolis y Torre.
  • Misión de Campaña I: "Limpieza de Aspirantes": (11 rondas) — derrota a dos héroes enemigos de Castillo.
  • Misión de Campaña II: "Sangre del Padre Dragón": (11 rondas) — derrota al ejército enemigo en la utopía del dragón.
  • Misión de Campaña III: "Sed de Sangre": (10 rondas) — sobrevive a todos los ataques de los héroes enemigos.

3. NECRÓPOLIS - Campaña "El Ascenso del Nigromante" (héroe: Sandro o Tamika; enemigos variados), en el Libro de Misiones de Metas Ampliadas.
  • Misión de Campaña I: "Objetivo": (8 rondas) — derrota a ambos ejércitos enemigos.
  • Misión de Campaña II: "Maestro": (10 rondas) — derrota a ambos ejércitos enemigos.
  • Misión de Campaña III: "Duque Alarice": (11 rondas) — Derrota a todos los héroes enemigos y gana el combate en la utopía del dragón.

--- FACCIONES DE EXPANSIONES ---

4. MURALLAS - Libro de Misiones de Murallas. Campaña "La Venganza se Sirve Fría" (héroe: Gelu/Gem; enemigo: Necrópolis):
  • Misión de Campaña I: "En Busca de un Asesino": (11 rondas).
  • Misión de Campaña II: "Paz Definitiva": (13 rondas).
  • Misión de Campaña III: "Agentes de la Venganza": (12 rondas).
- Escenarios independientes (Alianza): 
  • "El Desafío" (4 jugadores, 11-14 rondas, escenario de grial).
- Escenarios independientes (Enfrentamiento): 
  • "Oro Enano" (2-3 jugadores, 10 rondas, victoria por acumular 75 de oro).

5. FORTALEZA - Libro de Misiones de Fortaleza. Campaña "Jugando con Fuego" (héroe: Adrienne o Wystan; enemigo: Necrópolis):
  • Misión de Campaña I: "Cosecha de Ciudades": (13 rondas).
  • Misión de Campaña II: "La Marcha de los No Muertos": (12 rondas).
  • Misión de Campaña III: "El Incendio de Tatalia": (14 rondas).
- Escenarios independientes (Alianza): 
  • "Arrogancia" (4 jugadores, escenario de grial).
- Escenarios independientes (Enfrentamiento): 
  • "En Busca del Grial" (2-3 jugadores, escenario de grial).

6. TORRE - Su campaña en solitario "El Matadragones" (héroe: Dracon o Solmyr) está en el Libro de Misiones de Metas Ampliadas.
  • Misión de Campaña I: "Dragones de Cristal": (9 rondas).
  • Misión de Campaña II: "Dragones Herrumbrosos": (11 rondas, requiere expansión Fortaleza).
  • Misión de Campaña III: "Dragones Hada" (13 rondas, requiere expansión Murallas).
  • Misión de Campaña IV: "Dragones Azures": (11 rondas).

7. INFIERNO (Inferno) - Libro de Misiones de Inferno. No incluye campaña en solitario; solo escenarios independientes:
  • Misión de Campaña I: 
  • Misión de Campaña II: 
  • Misión de Campaña III: 
- Escenarios independientes (Alianza): 
  • "El Cuento de las Dos Tierras" (4 jugadores, 11-13 rondas, victoria por control territorial o captura de ciudad).
- Escenarios independientes (Enfrentamiento): 
  • "Destino Manifiesto" (3 jugadores, 12-14 rondas)
  • "Carpe Diem" (2 jugadores, 14 rondas, escenario de Ciudad Aleatoria).

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
    title: "34. Opciones Avanzadas de la Comunidad (No Oficiales)",
    category: "modes",
    content: `IMPORTANTE: Las variantes de esta sección NO son reglas oficiales de Archon Studio/Ubisoft — son variantes caseras inspiradas por la comunidad de jugadores para partidas informales. Para las reglas OFICIALES de competición, consulta la sección "35b. Reglamento Oficial del Modo Torneo (Libro de Torneo):

1. Niebla de Guerra Dinámica (Tactical Fog of War) [No oficial]:
Para juegos competitivos extremos. Las losetas colindantes a las adyacentes permanecen ocultas boca abajo. Solo al detener al héroe en los lindes de una loseta revelada se puede voltear la siguiente. Las habilidades de Exploración (Pathfinding) o el hechizo Ver Tierra permiten revelar hasta 2 losetas de distancia de manera anticipada.

2. Veto y Draft de Héroes [No oficial]:
• Veto de Facción: En fase de inicio, cada jugador veta 1 facción enemiga de la bolsa común.
• Draft de Héroes: Se barajan las cartas de Héroes de las facciones autorizadas, distribuyendo 3 al azar a cada jugador. Estos eligen 1 como Principal, descartan otro y pasan el restante al jugador de su derecha.

3. Cronómetro de Turno [No oficial]:
Para partidas con límite de tiempo, cada jugador dispone de un pool de minutos por turno acordado antes de la partida. El exceso de tiempo consumido puede penalizar el siguiente turno restando 1 Ficha de Movimiento, si así lo acuerdan los jugadores.`
  },
  {
    id: "rule_variants",
    title: "35. Variantes de Reglas Oficiales (Chaos, Draft, Split Decks y Gold Pool)",
    category: "modes",
    content: `Los creadores del juego de mesa sugieren variantes oficiales para ajustar la dificultad, reducir el azar o enriquecer la profundidad estratégica de las partidas de Heroes III:

1. CARTAS DE CAOS (Chaos Cards):
• Cada vez que un jugador vaya a descartar una carta de mano, debe removerla por completo del juego en su lugar. Acto seguido, roba la primera carta del mazo correspondiente y la sitúa directamente en su pila de descarte. (Las cartas de Estadística y Especialidad se descartan normalmente sin verse afectadas por esta variante).

2. EJÉRCITO NEUTRAL (Neutral Army):
• Al reclutar de forma ordinaria, en lugar de alistar tus tropas normales de facción, para cada vivienda que poseas edificada robas 2 cartas de unidad del mazo de Neutrales. Puedes alistar la cantidad que desees pagando su coste en Oro equivalente; el resto de cartas se descartan de forma definitiva.

3. INICIO CON DRAFT (Draft Start):
• Variante recomendada para 3 o más jugadores que sustituye los mazos de inicio fijos. Se aparta la habilidad inicial del héroe y su especialidad de nivel I. Se barajan de forma independiente los mazos de Artefacto, Hechizo y Habilidad. Cada jugador roba 2 cartas de cada uno, elige una para conservar y pasa el resto al jugador de la izquierda. Se repite alternando izquierda y derecha hasta formar un pool de 12 cartas drafteadas. Se añaden las cartas de Estadística según el tablero para sumar un mazo de 18 (Might) o 17 (Magic), del cual se eligen 7 cartas (descartando el resto) para juntar con las 2 iniciales apartadas y constituir la mano inicial de 9 cartas lista.

4. SEPARACIÓN DE DECK DE ARTEFACTOS Y HECHIZOS (Split Decks) [Regla OPCIONAL oficial del Libro de Torneo, usable en cualquier escenario]:
• Los artefactos se dividen en tres mazos físicos independientes (Menores, Mayores y Reliquias), y los Hechizos en dos mazos (Básicos y Avanzados; Flecha Mágica cuenta como básico). Al conseguir un objeto o hechizo, el mazo elegible depende de la posición del Héroe Principal en el mapa:
  - Losetas I, II-III (Zonas iniciales/lejanas): Mazo de Artefactos Menores y Hechizos Básicos.
  - Losetas IV-V (Zonas cercanas): Mazo de Artefactos Mayores y Reliquias, y Hechizos Básicos o Avanzados.
  - Losetas VI-VII (Zonas centrales/avanzadas): Mazo de cualquier tipo de Artefactos y Hechizos.

5. RESERVA DE ORO (Gold Pool):
• En partidas competitivas dinámicas, el pool de recursos se denomina 'Pool no gastado'. Al reclutar o reforzar regimientos, el Oro y los objetos de valor gastados se trasladan a una 'Reserva Reservada' especial al lado del mazo de tropa del jugador en lugar de retornar a la caja común. Al vender o perecer tropas en combate, el coste invertido en ellas retorna íntegro de la Reserva Reservada al Pool no gastado del jugador, mitigando el impacto devastador de bajas militares tempranas. Al rebajarse una tropa de Élite (Pack) a Básica (Few) por daño, el jugador recupera inmediatamente el coste de mejora.

6. TABLA DE REGLAS OPCIONALES (Dificultad Dinámica):
• Aumentar dificultad: Las ciudades enemigas conquistadas no producen ingresos al ser capturadas (solo habilitan sus edificios); prohibido relanzar dados; los dados de tesoro/recursos dan solo 1 de recurso; se elimina todo botín de inicio.
• Reducir dificultad: Iniciar con un Héroe Secundario gratuito; cada ataque inflige al menos 1 herida garantizada; producción duplicada en minas y asentamientos; Mercadillos visitables regalan 1 carta del mazo de Artefacto de inmediato; extender combate contra neutrales no consume PM.
• Variantes de Sistema: El dado de combate rojo no influye en las heridas (solo activa habilidades); se roba un anuncio astrológico al inicio de las rondas de recursos; eliminación completa de anuncios astrológicos en la partida; los cubos negros de enclaves visitados se remueven en las Rondas 4, 8 y 12.`
  },
  {
    id: "tournament_game_mode",
    title: "35b. Reglamento Oficial del Modo Torneo (Reglas de Competición)",
    category: "modes",
    content: `El Modo Torneo son partidas 1 contra 1 con reglas propias de construcción de mapa, puntuación y ajustes de equilibrio.

## 1. CONSTRUCCIÓN DEL MAPA DE ESCENARIO
Cada escenario de torneo trae una preparación inicial que ilustra la disposición central del mapa; el resto de losetas las colocan ambos jugadores siguiendo estos pasos:
1. Ambos jugadores lanzan 2 dados de recursos. El jugador con más recursos en sus dados elige quién empieza y quién es segundo. El segundo jugador obtiene una ficha de moral al comienzo de la partida.
2. Se colocan las losetas de mapa centrales/especiales indicadas por la ilustración del escenario elegido.
3. El jugador inicial descubre esas losetas y las rota como prefiera.
4. Empezando por el SEGUNDO jugador, ambos se turnan para añadir, una a una, todas sus losetas de mapa cercanas (IV-V) al mapa: siempre que sea posible, una loseta cercana se coloca junto a una loseta central; en cada escenario, al menos 2 losetas cercanas deben incluir un obelisco.
5. Colocadas las cercanas, el jugador inicial coloca su loseta inicial (I) adyacente a al menos una cercana. El otro jugador coloca su loseta inicial en el lado opuesto del mapa (la posición más alejada de la del jugador inicial, por número de losetas).
6. Empezando por el jugador inicial, ambos añaden por turnos sus losetas lejanas (II-III): la primera de cada jugador debe ser adyacente a su loseta inicial; el resto sigue las reglas básicas de colocación de losetas (adyacente a su héroe y a al menos 2 losetas más).
Nota: todas las losetas se rotan libremente y se colocan boca arriba.

## 2. PUNTUACIÓN (PUNTOS DE VICTORIA)
Cuando el escenario llega al límite de rondas o algún jugador cumple la condición de victoria, la partida acaba y ambos cuentan sus Puntos de Victoria (PV):
• 4 PV por derrotar al héroe PRINCIPAL del enemigo (una sola vez por escenario, no acumulable).
• 2 PV por derrotar al héroe SECUNDARIO del enemigo.
• 1 PV por cada mina o asentamiento bajo tu control.
• 1 PV por cada edificio construido en tu ciudad (sin distinción de tipo o nivel).
• 1 PV por cada 2 cartas de artefacto en tu mazo de fuerza y magia (redondeando hacia abajo).
• 1 PV por cada nivel de experiencia de tu héroe principal.
• X PV adicionales según los objetivos especiales que indique la descripción de cada escenario concreto.
Gana el jugador con más Puntos de Victoria totales. El Libro de Torneo NO especifica ningún criterio de desempate adicional más allá de "más puntos gana".

## 3. REGLAS ADICIONALES (se aplican a TODOS los escenarios de torneo, sin excepción)
1. Se retira la carta de habilidad Diplomacia de la partida (no se puede reclutar unidades neutrales azur mediante Diplomacia en Modo Torneo).
2. Se retira la carta de artefacto Reloj de la Hora Aciaga de la partida.
3. Al comienzo de la primera ronda, cada jugador puede (opcionalmente) devolver toda su mano de cartas a su mazo de fuerza y magia, barajarlo y robar una mano nueva (mulligan único).
4. El segundo jugador en el orden de turno comienza la partida con 1 ficha de moral.
5. Acción adicional con la ficha de moral: durante una acción de buscar (X), puedes descartar todas las cartas que acabas de robar y volver a buscar (X) de nuevo. Aplica también al buscar en los mazos de artefactos, hechizos y habilidades (no solo al mazo de fuerza y magia).
6. Cualquier carta de artefacto retirada del juego se coloca junto al mazo de fuerza y magia (no vuelve a la caja) hasta el final de la partida; ese montón de artefactos retirados SÍ cuenta para tus Puntos de Victoria finales.
7. Nuevo lugar de mapa exclusivo de esta variante: Observatorio de Caoba (Visitable) — elige 1 loseta adyacente a esta que no contenga un héroe y puedes rotarla como quieras (respetando las reglas básicas de colocación de losetas).

## 4. REGLAS OPCIONALES (utilizables en cualquier escenario, incluidos los básicos)
• Mazos de artefacto divididos por tipo de loseta: separa el mazo de artefactos en 3 (Menores, Mayores, Reliquias). En losetas iniciales y lejanas SOLO se consiguen artefactos Menores. En losetas cercanas se consiguen artefactos Mayores y Reliquias (NO Menores). En el centro se consiguen los tres tipos (Menores, Mayores y Reliquias).
• Mazos de hechizo divididos por tipo de loseta: separa el mazo de hechizos en 2 (Básicos y Avanzados/Expertos; Flecha Mágica cuenta como básico). En losetas iniciales y lejanas SOLO se consiguen hechizos básicos. En losetas cercanas Y centrales se consiguen tanto básicos como avanzados.

## 5. CREADOR DE ESCENARIOS (para diseñar tus propios escenarios de torneo)
Pasos oficiales: 1) Título y descripción. 2) Nº de jugadores (2 en el básico; expansiones permiten más). 3) Duración en rondas (máx. recomendado 16, si necesitas más divide en varios escenarios tipo campaña). 4) Diseño del mapa (recomendado por jugador: 1 loseta inicial, 2 cercanas, 2 lejanas; usa las reglas de construcción de mapa de torneo o dibuja tu propio mapa; asegúrate de que el acceso a tipos de loseta sea equivalente entre jugadores). 5) Recursos iniciales (por defecto 15 oro/3 materiales/1 valioso). 6) Ingresos iniciales (por defecto «10» oro/«0» materiales/«0» valiosos). 7) Edificios iniciales. 8) Unidades iniciales (por defecto 3 "unas pocas" de bronce). 9) Bonificadores iniciales adicionales (normalmente reservado a campañas). 10) Reglas del escenario (qué hacen los lugares especiales como obeliscos o la utopía del dragón). 11) Condición(es) de victoria. 12) Qué ocurre al llegar al límite de rondas. 13) Eventos contrarreloj (qué deben hacer los jugadores al llegar a ciertas rondas).`
  },
  {
    id: "wiki_cards_components",
    title: "36. Compendio de Cartas y Componentes",
    category: "components",
    content: `El juego se vertebra sobre un compendio robusto de cartas y elementos físicos diseñados para emular la jugabilidad del clásico del 99:

1. CARTAS DEL COMPENDIO Y SU FUNCIONAMIENTO:
• Cartas de Unidad / Tropas: Cada facción cuenta con sus unidades terrestres de rango Bronce, Plata y Oro. Tienen doble cara (Rango Básico y Rango Élite). Indican: Salud (Puntos de Herida), Iniciativa de Combate, Ataque Físico, Defensa Militar, Rango de Movimiento/Alcance y Habilidades Especiales pasivas/activas.
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
    title: "37. Tarjetas de Héroes: Características y Especialidades (las 10 Facciones)",
    category: "combat",
    content: `El reglamento oficial detalla exhaustivamente las características iniciales, habilidades primarias de salida y especialidades de los Héroes oficiales para las 10 facciones asimétricas del juego:

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
• Jeremy (Poder - Captain): Habilidad Inicial: Ataque (Offense) | Especialidad: Cañón (Cannon). Empieza la partida con un Cañón pesado de Cala que inflige daño masivo por ronda.
• Cassiopeia (Poder - Captain): Habilidad Inicial: Tácticas (Tactics) | Especialidad: Oceanidades (Oceanids). Potencia las estadísticas de combate de las Oceanidades en la línea frontal.
• Miriam (Poder - Captain): Habilidad Inicial: Logística (Logistics) | Especialidad: Exploración (Scouting). Incrementa los Puntos de Movimiento y revela losetas de mapa adyacentes de forma gratuita.
• Casmetra (Magia - Navigator): Habilidad Inicial: Sabiduría (Wisdom) | Especialidad: Hechiceras (Sorceresses). Acelera la adquisición y efectividad de las Hechiceras aliadas.
• Zilare (Magia - Navigator): Habilidad Inicial: Interferencia (Interference) | Especialidad: Olvido (Forgetfulness). Hechicero de apoyo capaz de nublar la mente de arqueros enemigos para impedir sus ataques.
• Astra (Magia - Navigator): Habilidad Inicial: Suerte (Luck) | Especialidad: Curar (Cure). Especialista en restaurar la vida de regimientos dañados usando magias de agua.

Nota de Campaña: El héroe legendario Tarnum (Poder/Magia) está presente en múltiples facciones (Castillo, Mazmorra, Rampart, Fortress, Stronghold y Conflux) representando sus distintas encarnaciones históricas a través de las campañas oficiales de las expansiones ("Heroes Chronicles").`
  },
  {
    id: "wiki_heroes_abilities",
    title: "38. Habilidades y Progresión del Héroe",
    category: "combat",
    content: `Las Habilidades (Ability Cards) representan la progresión, entrenamiento y maestrías del Héroe. Al subir de nivel a un rango de Plata (niveles II, III, V y VII), el Héroe realiza un drafteo del mazo común de habilidades.

MECÁNICA GENERAL DE LAS HABILIDADES:
• Rango Básico: Es el efecto inicial de la carta. No requiere recursos y se puede usar de forma pasiva o instantánea según se indica.
• Rango Experto: Para activar el efecto Experto de una carta de habilidad, el jugador debe gastar un marcador o ficha de Experto durante su turno.
• Limitaciones: Cada héroe tiene su propio pool de habilidades y límites asimétricos según su clase (Poder o Magia).

GUÍA COMPLETA DE HABILIDADES DEL COMPENDIO:

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

6. Magias Básicas Elementales (Basic Air / Earth / Fire / Water Magic - Expansión Conflujo):
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
    title: "39. Desarrollo Urbano: Ciudades y Catálogo de Edificios de Facción",
    category: "town",
    content: `El desarrollo de la metrópolis es fundamental para sustentar la economía de Erathia. El reglamento oficial describe la planificación y el catálogo completo de estructuras construibles:

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
• Conflujo - Altar de los Elementos (Elemental Altar): Permite transformar recursos sobrantes de Madera/Mineral directamente en Objetos de Valor místicos.
• Cala - Gremio de Contrabandistas (Smugglers' Guild): Permite vender artefactos redundantes a cambio de Oro o de valiosos Objetos de Recursos.`
  },
  {
    id: "wiki_units_creatures",
    title: "40. Guía de Criaturas y Reglas de Combate",
    category: "combat",
    content: `Las criaturas y unidades de combate táctico representan el núcleo del poder militar de tu Héroe. Cada facción de Erathia cuenta con 7 niveles de criaturas divididas en tres Tiers principales (Bronce, Plata, Oro), además de las Criaturas Especiales o Neutrales de Tier Azul.

REGLAS GENERALES DE LAS CRIATURAS EN COMBATE:
• Anverso y Reverso (Cara de la Carta): Cada carta de criatura es de doble cara. La cara básica ("Pocos" o "Few") representa el regimiento estándar de reclutamiento. La cara de élite ("Manada" o "Pack") representa la tropa mejorada con mayores estadísticas (Ataque, Defensa, Puntos de Salud, Iniciativa) y habilidades devastadoras.
• Ataque (⚔️): Indica el número de dados de combate o el valor de daño base que la criatura inflige al atacar.
• Defensa (🛡️): Reduce el daño entrante. Un valor de defensa alto mitiga los ataques físicos directos.
• Iniciativa (⚡): Determina el orden estricto de activación de las unidades en el tablero de batalla. La criatura con mayor iniciativa actúa primero.
• Puntos de Salud (❤️): La cantidad de heridas o daños que la unidad puede resistir antes de ser derrotada.
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
  - Lado "Pocos" (Few): Ataque 6, Defensa 3, Salud 8, Iniciativa 11. Coste: 19 Oro y 1 Objeto de Valor. Habilidad pasiva: "Reduce el daño recibido por Hechizos en 2 hasta un mínimo de 0."
  - Lado "Manada" (Pack / Élite): Ataque 8, Defensa 3, Salud 8, Iniciativa 11. Habilidad pasiva: "Ignora cualquier efecto de Hechizo y el daño de Especialidad."
  - Carta Neutral de Dragón Negro: Ataque 5, Defensa 2, Salud 7, Iniciativa 9. Coste: 30 Oro. Habilidad: "Ataca 2 espacios en línea. El primer ataque se resuelve normalmente, y el segundo tiene 2 de Ataque."
  - Carta de Dragón Negro para Utopía (Banco de Criaturas): Ataque 5, Defensa 2, Salud 5, Iniciativa 9. Habilidad pasiva: "Mientras esta unidad esté apilada, obtiene +3 de Ataque."
  No existe dragón rojo en el juego de mesa.`
  },
  {
    id: "wiki_abilities_detailed",
    title: "41. Habilidades de las Criaturas de Combate",
    category: "combat",
    content: `Las habilidades especiales impresas en las cartas de Criatura de Heroes of Might and Magic III: El Juego de Mesa determinan de forma absoluta el curso táctico de los combates en el tablero de 4x5 casillas. A continuación se desglosan las principales habilidades oficiales:

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
    title: "42. Catálogo y Guía Completa de Unidades",
    category: "combat",
    content: `El catálogo completo de ejércitos de Heroes of Might and Magic III: El Juego de Mesa abarca todas las facciones asimétricas y tropas neutrales. Aquí se desglosa el reglamento específico para cada rango y el catálogo de atributos oficiales de las cartas de tropa:

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
    title: "43. Índice Detallado de Criaturas de Facciones e Invocaciones",
    category: "combat",
    content: `A continuación se desglosa el catálogo completo indexado con todos los atributos oficiales, costes de reclutamiento y habilidades tácticas de las 10 facciones asimétricas y las invocaciones (excluyendo neutrales y banco de criaturas) de Heroes of Might and Magic III: El Juego de Mesa. 

---

### 1. CASTILLO (Castle)
• Alabarderos (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 1, Salud 2, Iniciativa 4. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Salud 2, Iniciativa 5. Tipo: Melé. Coste: 3 Oro. Habilidad: "Pasivo: Cuando esta unidad sea el objetivo de un ataque, puedes descartar una carta para ignorar el resultado del dado de ataque."

• Tiradores (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 0, Salud 2, Iniciativa 4. Tipo: a Distancia. Coste: 3 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 0, Salud 2, Iniciativa 6. Tipo: a Distancia. Coste: 5 Oro. Habilidad: "Al Atacar: Si un objetivo no está adyacente, vuelve a atacarlo."

• Grifos (Tier Bronce - Niv. 3)
  - Básica: Ataque 2, Defensa 0, Salud 4, Iniciativa 6. Tipo: Voladora. Coste: 4 Oro. Habilidad: "Contraataque: Esta unidad puede llevar a cabo una cantidad ilimitada de contraataques."
  - Élite: Ataque 3, Defensa 0, Salud 4, Iniciativa 9. Tipo: Voladora. Coste: 6 Oro. Habilidad: "Contraataque: Esta unidad puede llevar a cabo una cantidad ilimitada de contraataques."

• Cruzados (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 2, Salud 4, Iniciativa 5. Tipo: Melé. Coste: 6 Oro. Habilidades: Ninguna.
  - Élite: Ataque 4, Defensa 2, Salud 4, Iniciativa 6. Tipo: Melé. Coste: 10 Oro. Habilidad: "Al Atacar: Puedes volver a tirar los 0 en el dado de ataque de esta unidad."

• Fanáticos (Tier Plata - Niv. 5)
  - Básica: Ataque 3, Defensa 1, Salud 5, Iniciativa 5. Tipo: a Distancia. Coste: 8 Oro. Habilidades: Ninguna.
  - Élite: Ataque 4, Defensa 1, Salud 5, Iniciativa 7. Tipo: a Distancia. Coste: 12 Oro. Habilidad: "Pasivo: Ignora la penalización de combate contra unidades adyacentes."

• Campeones (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 2, Salud 7, Iniciativa 7. Tipo: Melé. Coste: 12 Oro. Habilidad: "Mapa: Si tu héroe está en una zona con establos, el coste de refuerzo de esta unidad se reduce en 6 Oros."
  - Élite: Ataque 6, Defensa 2, Salud 7, Iniciativa 9. Tipo: Melé. Coste: 20 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Si esta unidad termina su movimiento en un espacio diferente al inicial, puedes volver a tirar un dado de ataque."

• Arcángeles (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 3, Salud 8, Iniciativa 12. Tipo: Voladora. Coste: 20 Oro y 1 Objeto de valor. Habilidad: "Pasivo: Cuando se inicie un combate, roba 1 carta."
  - Élite: Ataque 7, Defensa 3, Salud 10, Iniciativa 18. Tipo: Voladora. Coste: 30 Oro y 2 Objetos de valor. Habilidad: "Pasivo: Una vez por combate. Cancela un ataque que fuese a reducir los Puntos de Salud de otra unidad a 0."

---

### 2. NECRÓPOLIS (Necropolis)
• Esqueletos (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 1, Salud 2, Iniciativa 4. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Salud 2, Iniciativa 5. Tipo: Melé. Coste: 3 Oro. Habilidades: Ninguna.

• Zombis (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 1, Salud 3, Iniciativa 3. Tipo: Melé. Coste: 3 Oro. Habilidad: "Pasivo: Si el atacante resuelve un +1 en el dado de ataque, obtén +1 Defensa."
  - Élite: Ataque 2, Defensa 1, Salud 3, Iniciativa 4. Tipo: Melé. Coste: 4 Oro. Habilidad: "Pasivo: Si el atacante resuelve un 0 o un +1 en el dado de ataque, obtén +1 Defensa."

• Espectros (Tier Bronce - Niv. 3)
  - Básica: Ataque 3, Defensa 0, Salud 3, Iniciativa 5. Tipo: Voladora. Coste: 4 Oro. Habilidad: "Activación: Retira hasta 1 Herida de esta unidad."
  - Élite: Ataque 3, Defensa 0, Salud 5, Iniciativa 7. Tipo: Voladora. Coste: 6 Oro. Habilidad: "Activación: Retira hasta 1 Herida de esta unidad y después descarta 1 carta al azar de la mano del enemigo."

• Vampiros (Tier Plata - Niv. 4)
  - Básica: Ataque 4, Defensa 1, Salud 4, Iniciativa 6. Tipo: Voladora. Coste: 8 Oro. Habilidad: "Al Atacar: Ignora el contraataque."
  - Élite: Ataque 5, Defensa 1, Salud 4, Iniciativa 9. Tipo: Voladora. Coste: 12 Oro. Habilidad: "Al Atacar: Ignora el contraataque. Después retira hasta 2 Heridas a esta unidad."

• Liches (Tier Plata - Niv. 5)
  - Básica: Ataque 3, Defensa 1, Salud 5, Iniciativa 6. Tipo: a Distancia. Coste: 8 Oro. Habilidades: Ninguna.
  - Élite: Ataque 4, Defensa 1, Salud 5, Iniciativa 7. Tipo: a Distancia. Coste: 14 Oro. Habilidad: "Al Atacar: Elige una unidad adyacente al objetivo y atácala. Para este ataque tu Ataque es 2."

• Caballeros del terror (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 2, Salud 7, Iniciativa 7. Tipo: Melé. Coste: 12 Oro. Habilidad: "Al Atacar: Al contraatacar después de este ataque, el enemigo lanza 2 dados de ataque y resuelve el resultado menor."
  - Élite: Ataque 6, Defensa 2, Salud 7, Iniciativa 9. Tipo: Melé. Coste: 20 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Si resuelves un 0 o un +1 en el dado de ataque, aumenta el valor total del ataque de esta unidad en un +1 adicional."

• Dragones fantasma (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 3, Salud 8, Iniciativa 9. Tipo: Voladora. Coste: 19 Oro y 1 Objeto de valor. Habilidad: "Activación: Descarta la ficha Moral Positiva del enemigo."
  - Élite: Ataque 7, Defensa 3, Salud 9, Iniciativa 14. Tipo: Voladora. Coste: 32 Oro y 2 Objetos de valor. Habilidad: "Activación: Descarta la ficha Moral Positiva del enemigo. Al Atacar: Gana +1 Ataque."

---

### 3. MAZMORRA (Dungeon)
• Trogloditas (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 1, Salud 2, Iniciativa 4. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Salud 2, Iniciativa 5. Tipo: Melé. Coste: 3 Oro. Habilidad: "Pasivo: Esta unidad ignora el efecto Parálisis."

• Arpías (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 0, Salud 3, Iniciativa 6. Tipo: Voladora. Coste: 3 Oro. Habilidad: "Al Atacar: Después del contraataque del enemigo, esta unidad puede volver al espacio desde el que se ha movido para atacar."
  - Élite: Ataque 3, Defensa 0, Salud 3, Iniciativa 9. Tipo: Voladora. Coste: 5 Oro. Habilidad: "Al Atacar: Ignora el contraataque. Esta unidad puede volver al espacio desde el que se ha movido para atacar."

• Ojos maléficos (Tier Bronce - Niv. 3)
  - Básica: Ataque 3, Defensa 0, Salud 3, Iniciativa 5. Tipo: a Distancia. Coste: 4 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Salud 3, Iniciativa 7. Tipo: a Distancia. Coste: 6 Oro. Habilidad: "Pasivo: Ignora la penalización de combate contra unidades adyacentes."

• Medusas (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 1, Salud 4, Iniciativa 5. Tipo: a Distancia. Coste: 6 Oro. Habilidad: "Contraataque: Después del contraataque, lanza un dado de ataque; si sacas 0, el objetivo queda Parálizado."
  - Élite: Ataque 4, Defensa 1, Salud 4, Iniciativa 6. Tipo: a Distancia. Coste: 12 Oro. Habilidad: "Pasivo: Ignora la penalización de combate contra unidades adyacentes. Contraataque: El objetivo queda Parálizado."

• Minotauros (Tier Plata - Niv. 5)
  - Básica: Ataque 4, Defensa 2, Salud 4, Iniciativa 6. Tipo: Melé. Coste: 8 Oro. Habilidad: "Al Atacar: Si resuelves un -1 en el dado de ataque, roba una carta."
  - Élite: Ataque 5, Defensa 2, Salud 4, Iniciativa 8. Tipo: Melé. Coste: 14 Oro. Habilidad: "Al Atacar: Si resuelves un -1 en el dado de ataque, roba una carta."

• Mantícoras (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 1, Salud 6, Iniciativa 7. Tipo: Voladora. Coste: 10 Oro. Habilidades: Ninguna.
  - Élite: Ataque 5, Defensa 1, Salud 6, Iniciativa 11. Tipo: Voladora. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Durante este ataque, ignora el valor de Defensa de la carta de la unidad objetivo."

• Mantícoras (Alternativa) (Tier Oro - Niv. 6)
  - Básica: Ataque 4, Defensa 1, Salud 7, Iniciativa 8. Tipo: Voladora. Coste: 12 Oro. Habilidad: "Al Atacar: Coloca 1 cubo de facción sobre el objetivo. Cuando se active, retira el cubo para infligir 1 Herida."
  - Élite: Ataque 4, Defensa 2, Salud 7, Iniciativa 11. Tipo: Voladora. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Pasivo: Después de cada ataque, coloca 1 cubo de facción sobre el objetivo. Cuando se active, retira el cubo para infligir 1 Herida."

• Dragones negros (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 3, Salud 8, Iniciativa 11. Tipo: Voladora. Coste: 19 Oro y 1 Objeto de valor. Habilidad: "Pasivo: Reduce el Daño de Hechizo recibido por esta unidad en 2 (hasta un mínimo de 0)."
  - Élite: Ataque 8, Defensa 3, Salud 8, Iniciativa 15. Tipo: Voladora. Coste: 33 Oro y 2 Objetos de valor. Habilidad: "Pasivo: Ignora cualquier efecto de Hechizo y Daño de especialidad."

---

### 4. MURALLAS (Rampart)
• Centauros (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 0, Salud 3, Iniciativa 6. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 0, Salud 3, Iniciativa 8. Tipo: Melé. Coste: 3 Oro. Habilidades: Ninguna.

• Enanos (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 1, Salud 3, Iniciativa 3. Tipo: Melé. Coste: 3 Oro. Habilidad: "Pasivo: Si esta unidad es objetivo de cualquier carta de hechizo o especialidad, lanza 1 dado de ataque. Si sacas un +1, ignora el efecto de la carta."
  - Élite: Ataque 3, Defensa 1, Salud 3, Iniciativa 5. Tipo: Melé. Coste: 4 Oro. Habilidad: "Pasivo: Si esta unidad es objetivo de cualquier carta de hechizo o especialidad, lanza 1 dado de ataque. Si sacas un +1, ignora el efecto de la carta."

• Elfos (Tier Bronce - Niv. 3)
  - Básica: Ataque 2, Defensa 1, Salud 3, Iniciativa 6. Tipo: a Distancia. Coste: 4 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Salud 3, Iniciativa 7. Tipo: a Distancia. Coste: 7 Oro. Habilidad: "Al Atacar: Si una unidad objetivo no está adyacente, vuélvela a atacar si sacas un -1 o un 0."

• Pegasos (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 0, Salud 5, Iniciativa 8. Tipo: Voladora. Coste: 6 Oro. Habilidades: Ninguna.
  - Élite: Ataque 4, Defensa 0, Salud 6, Iniciativa 12. Tipo: Voladora. Coste: 10 Oro. Habilidad: "Pasivo: El Poder de todos los hechizos enemigos se reduce en 1 (hasta un mínimo de 0)."

• Dendroides (Tier Plata - Niv. 5)
  - Básica: Ataque 4, Defensa 2, Salud 5, Iniciativa 3. Tipo: Melé. Coste: 8 Oro. Habilidades: Ninguna.
  - Élite: Ataque 4, Defensa 2, Salud 6, Iniciativa 4. Tipo: Melé. Coste: 15 Oro. Habilidad: "Pasivo: Las unidades enemigas que empiecen su activación adyacentes a esta unidad no pueden moverse."

• Unicornios (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 1, Salud 8, Iniciativa 7. Tipo: Melé. Coste: 11 Oro. Habilidad: "Pasivo: Reduce el Daño de Hechizos sufridos por esta unidad en 1 (hasta un mínimo de 0)."
  - Élite: Ataque 6, Defensa 1, Salud 8, Iniciativa 9. Tipo: Melé. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Pasivo: Reduce el Daño de Hechizos sufridos por esta unidad y unidades adyacentes aliadas en 1 (hasta un mínimo de 0)."

• Dragones dorados (Tier Oro - Niv. 7)
  - Básica: Ataque 5, Defensa 3, Salud 9, Iniciativa 10. Tipo: Voladora. Coste: 22 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Ataca a 2 espacios en fila. El primer ataque se resuelve de forma normal y el segundo con 2 Ataque."
  - Élite: Ataque 6, Defensa 3, Salud 10, Iniciativa 16. Tipo: Voladora. Coste: 30 Oro y 2 Objetos de valor. Habilidad: "Al Atacar: Ataca a 2 espacios en fila. El primer ataque se resuelve normalmente y el segundo tiene 3 Ataque."

---

### 5. TORRE (Tower)
• Gremlins (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 0, Salud 2, Iniciativa 4. Tipo: Melé. Coste: 0 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 0, Salud 2, Iniciativa 5. Tipo: a Distancia. Coste: 2 Oro. Habilidades: Ninguna.

• Gárgolas (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 1, Salud 3, Iniciativa 6. Tipo: Voladora. Coste: 3 Oro. Habilidad: "Pasiva: Esta unidad ignora cualquier efecto Contínuo de hechizos."
  - Élite: Ataque 3, Defensa 1, Salud 3, Iniciativa 9. Tipo: Voladora. Coste: 4 Oro. Habilidad: "Pasiva: Esta unidad ignora cualquier efecto Contínuo de hechizos."

• Gólems de hierro (Tier Bronce - Niv. 3)
  - Básica: Ataque 3, Defensa 1, Salud 3, Iniciativa 4. Tipo: Melé. Coste: 4 Oro. Habilidad: "Pasiva: Esta unidad reduce cualquier Daño que reciba de hechizos en 1, hasta un mínimo de 0."
  - Élite: Ataque 3, Defensa 2, Salud 3, Iniciativa 5. Tipo: Melé. Coste: 7 Oro. Habilidad: "Pasiva: Esta unidad reduce cualquier Daño que reciba de hechizos en 2, hasta un mínimo de 0."

• Magos (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 0, Salud 4, Iniciativa 5. Tipo: a Distancia. Coste: 6 Oro. Habilidad: "Al Atacar: Ignora penalizaciones de combate."
  - Élite: Ataque 4, Defensa 1, Salud 4, Iniciativa 6. Tipo: a Distancia. Coste: 11 Oro. Habilidad: "Al Atacar: Ignora penalizaciones de combate. Activación: Añade +1 Poder al primer hechizo que lances esta ronda."

• Genios (Tier Plata - Niv. 5)
  - Básica: Ataque 3, Defensa 1, Salud 6, Iniciativa 7. Tipo: Voladora. Coste: 8 Oro. Habilidad: "Alternativa: Descarta 3 cartas de tu mazo y devuelve a tu mano un Hechizo descartado de esta forma."
  - Élite: Ataque 4, Defensa 1, Salud 6, Iniciativa 8. Tipo: Voladora. Coste: 12 Oro. Habilidad: "Al Atacar: Descarta hasta 3 cartas de tu mazo y devuelve a tu mano un Hechizo descartado de esta forma."

• Nagas (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 2, Salud 7, Iniciativa 6. Tipo: Melé. Coste: 13 Oro. Habilidad: "Al Atacar: Ignora contraataques."
  - Élite: Ataque 6, Defensa 2, Salud 7, Iniciativa 8. Tipo: Melé. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Ignora contraataques."

• Titanes (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 3, Salud 8, Iniciativa 7. Tipo: Melé. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Pasiva: Esta unidad ignora cualquier efecto Contínuo."
  - Élite: Ataque 6, Defensa 3, Salud 8, Iniciativa 11. Tipo: a Distancia. Coste: 32 Oro y 2 Objetos de valor. Habilidad: "Pasiva: Esta unidad ignora cualquier efecto Continuo y los penalizadores de combate aplicados a unidades adyacentes."

---

### 6. INFIERNO (Inferno)
• Familiares (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 1, Salud 2, Iniciativa 5. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Salud 2, Iniciativa 7. Tipo: Melé. Coste: 3 Oro. Habilidad: "Pasivo: Cuando un enemigo lanza un Hechizo de su mano, debe descartar 1 carta de la mano."

• Magogs (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 0, Salud 2, Iniciativa 4. Tipo: a Distancia. Coste: 3 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 0, Salud 3, Iniciativa 6. Tipo: a Distancia. Coste: 5 Oro. Habilidad: "Al Atacar: Cuando los magogs atacan a un objetivo que no está adyacente a ellos, hacen 1 Herida a una unidad adyacente al objetivo."

• Cerberos (Tier Bronce - Niv. 3)
  - Básica: Ataque 3, Defensa 0, Salud 4, Iniciativa 7. Tipo: Melé. Coste: 4 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Salud 5, Iniciativa 8. Tipo: Melé. Coste: 7 Oro. Habilidad: "Al Atacar: Ignora contraataques. Además, hace 1 Herida a otra unidad enemiga adyacente a los cerberos."

• Demonios (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 2, Salud 4, Iniciativa 5. Tipo: Melé. Coste: 6 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 2, Salud 5, Iniciativa 6. Tipo: Melé. Coste: 8 Oro. Habilidades: Ninguna.

• Señores del abismo (Tier Plata - Niv. 5)
  - Básica: Ataque 4, Defensa 1, Salud 6, Iniciativa 6. Tipo: Melé. Coste: 8 Oro. Habilidades: Ninguna.
  - Élite: Ataque 5, Defensa 1, Salud 6, Iniciativa 7. Tipo: Melé. Coste: 15 Oro. Habilidad: "Alternativo: Una vez por cada combate en el que hayas perdido una unidad, invoca o refuerza <<unos pocos>> demonios."

• Efrits (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 1, Salud 7, Iniciativa 9. Tipo: Voladora. Coste: 12 Oro. Habilidad: "Pasivo: Ignora el Daño del hechizo Flecha mágica."
  - Élite: Ataque 6, Defensa 1, Salud 7, Iniciativa 13. Tipo: Voladora. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Pasivo: Ignora cualquier Daño de la Flecha mágica y hechizos de la escuela de fuego."

• Archidiablos (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 3, Salud 8, Iniciativa 11. Tipo: Voladora. Coste: 22 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Ignora contraataques."
  - Élite: Ataque 7, Defensa 3, Salud 9, Iniciativa 15. Tipo: Voladora. Coste: 30 Oro y 2 Objetos de valor. Habilidad: "Al Atacar: Ignora contraataques. Pasivo: Al moverse, los archidiablos se pueden mover a cualquier espacio vacío."

---

### 7. BASTIÓN (Stronghold)
• Goblins (Tier Bronce - Niv. 1)
  - Básica: Ataque 1, Defensa 0, Salud 4, Iniciativa 6. Tipo: Melé. Coste: 1 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 0, Salud 4, Iniciativa 7. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.

• Incursores lupinos (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 0, Salud 3, Iniciativa 7. Tipo: Melé. Coste: 3 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 0, Salud 4, Iniciativa 8. Tipo: Melé. Coste: 5 Oro. Habilidad: "Al Atacar: Ataca este objetivo otra vez. El segundo ataque se produce después de que el objetivo contraataque (si es posible)."

• Orcos (Tier Bronce - Niv. 3)
  - Básica: Ataque 2, Defensa 1, Salud 4, Iniciativa 4. Tipo: a Distancia. Coste: 4 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Salud 5, Iniciativa 5. Tipo: a Distancia. Coste: 7 Oro. Habilidades: Ninguna.

• Ogros (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 2, Salud 4, Iniciativa 4. Tipo: Melé. Coste: 6 Oro. Habilidad: "Alternativo: Coloca una ficha +1 Ataque en la unidad Melé o Voladora que elijas durante 2 rondas de combate."
  - Élite: Ataque 3, Defensa 2, Salud 6, Iniciativa 5. Tipo: Melé. Coste: 8 Oro. Habilidad: "Alternativo: Coloca una ficha +2 Ataque en la unidad Melé o Voladora que elijas durante 2 rondas de combate."

• Aves de trueno (Tier Plata - Niv. 5)
  - Básica: Ataque 4, Defensa 1, Salud 5, Iniciativa 9. Tipo: Voladora. Coste: 8 Oro. Habilidades: Ninguna.
  - Élite: Ataque 4, Defensa 1, Salud 6, Iniciativa 11. Tipo: Voladora. Coste: 14 Oro. Habilidad: "Pasivo: Justo después del ataque de esta unidad y antes de un contraataque, tira 1 dado de ataque; con un 0 o +1, inflige 1 Herida al objetivo."

• Cíclopes (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 0, Salud 6, Iniciativa 6. Tipo: a Distancia. Coste: 13 Oro. Habilidad: "Alternativo: Esta unidad puede destruir un muro o la puerta."
  - Élite: Ataque 5, Defensa 1, Salud 7, Iniciativa 8. Tipo: a Distancia. Coste: 17 Oro y 1 Objeto de valor. Habilidad: "Alternativo: Esta unidad puede destruir un muro, puerta o torre de arqueros."

• Behemoths (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 2, Salud 9, Iniciativa 6. Tipo: Melé. Coste: 19 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Disminuye la Defensa del objetivo en 1 (hasta un mínimo de 0)."
  - Élite: Ataque 7, Defensa 2, Salud 10, Iniciativa 9. Tipo: Melé. Coste: 29 Oro y 2 Objetos de valor. Habilidad: "Al Atacar: Disminuye la Defensa del objetivo en 2 (hasta un mínimo de 0). Después del ataque, pon 1 ficha de corrosión en el objetivo."

---

### 8. FORTALEZA (Fortress)
• Gnolls (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 1, Salud 3, Iniciativa 4. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 1, Salud 4, Iniciativa 5. Tipo: Melé. Coste: 3 Oro. Habilidades: Ninguna.

• Hombres lagarto (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 0, Salud 3, Iniciativa 4. Tipo: a Distancia. Coste: 3 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 0, Salud 3, Iniciativa 5. Tipo: a Distancia. Coste: 5 Oro. Habilidades: Ninguna.

• Libélulas (Tier Bronce - Niv. 3)
  - Básica: Ataque 3, Defensa 0, Salud 3, Iniciativa 8. Tipo: Voladora. Coste: 4 Oro. Habilidad: "Al Atacar: Retira todos los efectos Continuos que el enemigo ha jugado sobre el objetivo."
  - Élite: Ataque 3, Defensa 1, Salud 3, Iniciativa 12. Tipo: Voladora. Coste: 7 Oro. Habilidad: "Al Atacar: Retira todos los efectos Continuos que el enemigo ha jugado sobre el objetivo. Si el objetivo contraataca, sufre -1 Ataque."

• Basiliscos (Tier Plata - Niv. 4)
  - Básica: Ataque 4, Defensa 1, Salud 4, Iniciativa 5. Tipo: Melé. Coste: 6 Oro. Habilidad: "Al Atacar: Con un resultado -1 en el dado de ataque la unidad atacada recibe una ficha Parálisis."
  - Élite: Ataque 4, Defensa 1, Salud 5, Iniciativa 7. Tipo: Melé. Coste: 9 Oro. Habilidad: "Al Atacar: Con un resultado -1 en el dado de ataque la unidad atacada recibe una ficha Parálisis."

• Gorgonas (Tier Plata - Niv. 5)
  - Básica: Ataque 4, Defensa 2, Salud 5, Iniciativa 5. Tipo: Melé. Coste: 9 Oro. Habilidades: Ninguna.
  - Élite: Ataque 5, Defensa 2, Salud 5, Iniciativa 6. Tipo: Melé. Coste: 14 Oro. Habilidad: "Al Atacar: Después del ataque, lanza 2 dados de ataque; si sacas un doble 0, reduce los Puntos de Salud de la unidad objetivo a 0."

• Wyverns (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 1, Salud 8, Iniciativa 7. Tipo: Voladora. Coste: 12 Oro. Habilidad: "Al Atacar: Coloca 1 cubo de facción sobre el objetivo. Al comienzo de su activación retíralo para infligirle 1 Herida."
  - Élite: Ataque 6, Defensa 1, Salud 8, Iniciativa 11. Tipo: Voladora. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Coloca 2 cubos de facción sobre el objetivo. Al comienzo de cada activación, retira 1 para infligirle 1 Herida."

• Hidras (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 3, Salud 8, Iniciativa 5. Tipo: Melé. Coste: 20 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Ignora el contraataque."
  - Élite: Ataque 7, Defensa 3, Salud 10, Iniciativa 7. Tipo: Melé. Coste: 28 Oro y 2 Objetos de valor. Habilidad: "Al Atacar: Ignora el contraataque. Esta unidad ataca a hasta 2 unidades enemigas adyacentes."

---

### 9. CONFLUENCIA (Conflux)
• Hadas (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 0, Salud 2, Iniciativa 7. Tipo: Melé. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 0, Salud 4, Iniciativa 9. Tipo: Melé. Coste: 4 Oro. Habilidad: "Al Atacar: Ignora los contraataques."

• Elementales de la tormenta (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 0, Salud 3, Iniciativa 7. Tipo: a Distancia. Coste: 3 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 0, Salud 5, Iniciativa 8. Tipo: a Distancia. Coste: 5 Oro. Habilidad: "Al Atacar: Añade +1 Potencia al primer hechizo de magia de aire que lances durante esta activación."

• Elementales de hielo (Tier Bronce - Niv. 3)
  - Básica: Ataque 2, Defensa 1, Salud 4, Iniciativa 5. Tipo: a Distancia. Coste: 4 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Salud 5, Iniciativa 6. Tipo: a Distancia. Coste: 7 Oro. Habilidad: "Activación: Añade +1 Potencia al primer hechizo de magia de agua que lances durante esta activación."

• Elementales de energía (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 1, Salud 5, Iniciativa 5. Tipo: Melé. Coste: 6 Oro. Habilidades: Ninguna.
  - Élite: Ataque 4, Defensa 1, Salud 5, Iniciativa 8. Tipo: Melé. Coste: 8 Oro. Habilidad: "Activación: Añade +1 Potencia al primer hechizo de magia de fuego que lances."

• Elementales de magma (Tier Plata - Niv. 5)
  - Básica: Ataque 4, Defensa 2, Salud 5, Iniciativa 4. Tipo: Melé. Coste: 9 Oro. Habilidades: Ninguna.
  - Élite: Ataque 5, Defensa 2, Salud 5, Iniciativa 6. Tipo: Melé. Coste: 13 Oro. Habilidad: "Activación: Añade +1 Potencia al primer hechizo de magia tierra que lances durante esta activación."

• Elementales mágicos (Tier Oro - Niv. 6)
  - Básica: Ataque 4, Defensa 2, Salud 7, Iniciativa 7. Tipo: Melé. Coste: 13 Oro. Habilidad: "Al Atacar: Ignora los contraataques. Ataca a todas las unidades adyacentes."
  - Élite: Ataque 5, Defensa 2, Salud 7, Iniciativa 9. Tipo: Melé. Coste: 19 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: Ignora los contraataques. Ataca todas las unidades enemigas adyacentes. Pasivo: Ignora cualquier efecto de Hechizo y Daño de especialidad."

• Fénix (Tier Oro - Niv. 7)
  - Básica: Ataque 6, Defensa 2, Salud 7, Iniciativa 12. Tipo: Voladora. Coste: 21 Oro y 1 Objeto de valor. Habilidad: "Pasivo: Una vez por combate. Cuando los PS de esta unidad se reduzcan a 0, ponlos en 1. Pasivo: Inmunes a los Hechizos de magia de fuego."
  - Élite: Ataque 7, Defensa 2, Salud 8, Iniciativa 18. Tipo: Voladora. Coste: 29 Oro y 2 Objetos de valor. Habilidad: "Al Atacar: Ataca 2 espacios en una línea. El primer ataque se resuelve normalmente y el segundo tiene 2 Ataque. Pasivo: Inmunes a los Hechizos de magia de fuego."

---

### 10. CALA (Cove)
• Oceánidos (Tier Bronce - Niv. 1)
  - Básica: Ataque 2, Defensa 0, Salud 3, Iniciativa 6. Tipo: Voladora. Coste: 2 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 0, Salud 3, Iniciativa 8. Tipo: Voladora. Coste: 3 Oro. Habilidad: "Pasivo: Ignora todos los efectos y Daño de un Hechizo de magia de agua."

• Marineros (Tier Bronce - Niv. 2)
  - Básica: Ataque 2, Defensa 1, Salud 3, Iniciativa 5. Tipo: Melé. Coste: 3 Oro. Habilidades: Ninguna.
  - Élite: Ataque 2, Defensa 1, Salud 5, Iniciativa 6. Tipo: Melé. Coste: 5 Oro. Habilidad: "Pasivo: Una vez por combate, cuando esta unidad retira una unidad del combate, gana 2 Oros."

• Lobos de mar (Tier Bronce - Niv. 3)
  - Básica: Ataque 2, Defensa 0, Salud 4, Iniciativa 6. Tipo: a Distancia. Coste: 4 Oro. Habilidad: "Pasivo: Ignora la penalización de combate contra unidades adyacentes."
  - Élite: Ataque 3, Defensa 0, Salud 5, Iniciativa 8. Tipo: a Distancia. Coste: 6 Oro. Habilidad: "Al Atacar: Ignora los contraataques. Pasivo: Ignora la penalización de combate contra unidades adyacentes."

• Ayssids (Tier Plata - Niv. 4)
  - Básica: Ataque 3, Defensa 1, Salud 5, Iniciativa 9. Tipo: Voladora. Coste: 6 Oro. Habilidades: Ninguna.
  - Élite: Ataque 3, Defensa 1, Salud 6, Iniciativa 11. Tipo: Voladora. Coste: 10 Oro. Habilidad: "Al Atacar: Si los Puntos de salud del objetivo se reducen a 0, después de resolver el Contraataque (si corresponde), los Ayssids pueden atacar a otra unidad adyacente."

• Hechiceras (Tier Plata - Niv. 5)
  - Básica: Ataque 3, Defensa 1, Salud 5, Iniciativa 6. Tipo: a Distancia. Coste: 8 Oro. Habilidad: "Alternativo: Coloca una ficha de debilidad <<-2>> sobre cualquier unidad durante 2 rondas de combate."
  - Élite: Ataque 4, Defensa 1, Salud 6, Iniciativa 7. Tipo: a Distancia. Coste: 13 Oro. Habilidad: "Al Atacar: Después del ataque, coloca una ficha de Debilidad <<-1>> sobre el objetivo durante 2 rondas de combate."

• Nix (Tier Oro - Niv. 6)
  - Básica: Ataque 5, Defensa 2, Salud 7, Iniciativa 6. Tipo: Melé. Coste: 12 Oro. Habilidades: Ninguna.
  - Élite: Ataque 6, Defensa 2, Salud 8, Iniciativa 7. Tipo: Melé. Coste: 20 Oro y 1 Objeto de valor. Habilidad: "Pasivo: Esta unidad no puede recibir más de 4 Heridas de un solo ataque."

• Háspidos (Tier Oro - Niv. 7)
  - Básica: Ataque 5, Defensa 3, Salud 8, Iniciativa 9. Tipo: Melé. Coste: 18 Oro y 1 Objeto de valor. Habilidad: "Al Atacar: +2 Ataque si, durante este combate, esta unidad se giró del lado de manada al lado de unos pocos."
  - Élite: Ataque 7, Defensa 3, Salud 8, Iniciativa 12. Tipo: Melé. Coste: 30 Oro y 2 Objetos de valor. Habilidad: "Al Atacar: Coloca 2 cubos de facción sobre el objetivo. Al comienzo de cada una de sus activaciones, retira 1 de ellos para infligir 1 Herida."

---

### 11. INVOCACIONES (Summons)
• Elementales de aire (Niv. 2)
  - Básica: Ataque 2, Defensa 0, Salud 4, Iniciativa 8. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de aire. Esta unidad inflige daño elemental."
  - Élite: Ataque 3, Defensa 0, Salud 4, Iniciativa 8. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de aire. Esta unidad inflige daño elemental."

• Elementales de agua (Niv. 2)
  - Básica: Ataque 2, Defensa 0, Salud 5, Iniciativa 6. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de agua. Esta unidad inflige daño elemental."
  - Élite: Ataque 3, Defensa 0, Salud 5, Iniciativa 6. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de agua. Esta unidad inflige daño elemental."

• Elementales de fuego (Niv. 3)
  - Básica: Ataque 2, Defensa 1, Salud 4, Iniciativa 5. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de fuego. Esta unidad inflige daño elemental."
  - Élite: Ataque 3, Defensa 1, Salud 4, Iniciativa 5. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de fuego. Esta unidad inflige daño elemental."

• Elementales de tierra (Niv. 3)
  - Básica: Ataque 2, Defensa 2, Salud 2, Iniciativa 5. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de tierra. Esta unidad inflige daño elemental."
  - Élite: Ataque 3, Defensa 2, Salud 2, Iniciativa 5. Tipo: Melé. Habilidad: "Pasivo: Inmunes a la Flecha mágica y a los Hechizos de magia de tierra. Esta unidad inflige daño elemental."`
  },
  {
    id: "faq_creatures_units",
    title: "44. FAQs: Criaturas y Unidades",
    category: "faq",
    content: `Aclaraciones oficiales y preguntas frecuentes sobre el despliegue, combate, habilidades pasivas y especiales de las unidades en el tablero táctico.

P: Si dos unidades empatan en su valor de Iniciativa, ¿cuál actúa primero en el track de combate?
R: En caso de empate numérico exacto en la Iniciativa, el empate se resuelve siempre a favor del Defensor. La unidad defensora se activará primero en el track de iniciativa de esa ronda de combate táctico.

P: ¿La estadística de Defensa mitiga el daño en cada ataque individual que reciba una unidad?
R: Sí. El valor de Defensa de la criatura resta heridas directas en cada ataque individual recibido en la misma ronda de combate. Si tu unidad sufre tres ataques cuerpo a cuerpo seguidos por enemigos diferentes en el mismo turno, su Defensa se aplica las tres veces de forma independiente para mitigar el daño de cada ataque.

P: ¿Cuándo y cuántas veces se puede realizar un ataque de represalia en combate táctico?
R: Cualquier unidad que sobreviva a un ataque físico cuerpo a cuerpo (melé) y no haya contraatacado en la ronda de combate actual debe realizar un ataque de represalia inmediato contra su atacante. Cada unidad puede contraatacar exactamente una vez por ronda. Tras hacerlo, se le coloca un marcador para indicarlo.
- Las unidades atacadas por criaturas con la habilidad especial de "Sin Represalia" (ej. Arpías de élite o Vampiros básicos) no pueden contraatacar.
- Los ataques con proyectiles de tiradores a distancia nunca desencadenan represalias físicas.
- Los Grifos y Grifos Reales ignoran el límite habitual y pueden contraatacar de forma ilimitada a todas las agresiones físicas cuerpo a cuerpo que reciban.

P: ¿Qué penalizaciones sufren las unidades a distancia (Tiradores) en combate cuerpo a cuerpo?
R: Si un tirador tiene a una unidad enemiga adyacente en el tablero táctico de batalla:
1. Pierde la facultad de realizar disparos a distancia a cualquier otra casilla.
2. Se ve obligado a atacar físicamente en melé a la unidad enemiga adyacente.
3. El daño físico infligido se reduce a la mitad (redondeado hacia abajo) de su valor base.
- Excepción: Las unidades con la habilidad pasiva "Sin penalización en cuerpo a cuerpo" (ej. Fanáticos de élite u Ojos Maléficos mejorados) ignoran esta reducción y golpean con todo su poder de ataque.

P: ¿Cómo funciona el coste de refuerzo y la mejora de unidades a rango Élite?
R: Las cartas de unidad son de doble cara (cara Básica y cara de Élite mejorada):
- Promoción/Refuerzo: Si tienes una unidad básica en tu ejército activo y quieres mejorarla, debes visitar tu Metrópolis natal, pagar la diferencia exacta en recursos (Oro, etc.) entre ambas caras y voltear la carta a su lado de Élite.
- Reclutamiento de Élite Directo: Si ya has construido el Castillo y las viviendas mejoradas del regimiento, puedes alistar directamente la unidad en su versión de Élite pagando su coste de Élite completo.

P: ¿Cómo recupero mis unidades que han caído en combate táctico?
R: Las unidades derrotadas van a tu pila de bajas personal. Durante tu Fase de Planificación, puedes realizar la acción de Reclutar en tu ciudad, pagando el coste total de Oro de las unidades disponibles en tus viviendas construidas para devolverlas a tu ejército activo.`
  },
  {
    id: "faq_gameplay_mechanics",
    title: "45. FAQs: Mecánicas de Juego y Exploración",
    category: "faq",
    content: `Resolución de dudas sobre el movimiento en el mapa de aventura, la gestión del tiempo y la construcción en la ciudad.

P: ¿Cómo se calculan de forma exacta los Puntos de Movimiento (PM) al iniciar el turno?
R: Tu héroe recibe una base de 3 Puntos de Movimiento (PM) de forma predeterminada al comenzar la ronda. Esta base se modifica de la siguiente forma:
1. Establos: Si tu héroe inicia su turno en una ciudad con Establos construidos, o si visitó la loseta de Establos en el mapa de aventura durante la ronda anterior, gana +1 PM adicional para todo el turno.
2. Habilidad de Logística: Jugar el nivel Experto de la habilidad de Logística te concede un aumento de +1 PM para ese turno. El nivel Básico te permite moverte de forma gratuita un hexágono al final del turno.
3. Penalizaciones por Terreno: Las casillas de pantano, nieve profunda o barro denso consumen 2 PM por hexágono en lugar de 1 PM, a menos que poseas la habilidad de Buscador de Caminos experto o uses hechizos utilitarios como "Volar" o "Caminar sobre el Agua".

P: ¿Pueden dos héroes míos ocupar el mismo hexágono del mapa de aventura?
R: No. El reglamento prohíbe terminantemente que dos figuras de héroe compartan el mismo hexágono o casilla de mapa al final de un movimiento. No obstante, puedes cruzar libremente a través de las casillas ocupadas por tus propios héroes durante tu fase de movimiento, siempre que finalices tu trayecto en una casilla totalmente vacía.

P: ¿Puedo construir múltiples edificios en el mismo turno si dispongo de recursos suficientes?
R: No. El reglamento limita estrictamente el desarrollo urbano a exactamente una estructura construida por ronda durante tu Fase de Planificación, pagando los costes correspondientes en Oro, Madera, Mineral o Valiosos en tu track de recursos de ciudad.`
  },
  {
    id: "faq_skills_specialties",
    title: "46. FAQs: Habilidades y Especialidades",
    category: "faq",
    content: `Dudas sobre las maestrías de los héroes, especialidades de combate y las 32 habilidades secundarias de Erathia.

P: ¿Las cartas de Especialidad asimétrica de mi héroe consumen mi límite de lanzamiento de hechizos en combate?
R: No. Las cartas de Especialidad (adquiridas en los niveles IV y VI) representan el entrenamiento militar o místico exclusivo y asimétrico de tu héroe. No se consideran hechizos estándar, por lo que jugarlas no consume tu límite de lanzar un único hechizo por ronda de combate, ni requieren poseer un Libro de Hechizos activo de la cofradía de magos.

P: ¿Cómo funciona el aumento del límite de mano al subir de nivel?
R: Al subir de nivel en tu pista de Experiencia, tu héroe incrementa pasivamente su límite de cartas en mano al reponer (indicado en el track de nivel). Esto te permite mantener más cartas tácticas, estadísticas y artefactos listos para usar durante la Fase de Planificación de cada ronda.

P: ¿Se puede usar la habilidad de Artillería con cualquier máquina de guerra del juego?
R: No. La habilidad de Artillería afecta de forma muy selectiva: su nivel básico inflige 1 herida directa a la unidad enemiga de menor iniciativa en el tablero, y su nivel experto potencia única y exclusivamente los disparos de la Balista (permitiendo resolver su disparo 3 veces consecutivas al mismo objetivo). No otorga ninguna bonificación a la Catapulta ni al Carro de Municiones.`
  },
  {
    id: "faq_game_modes",
    title: "47. FAQs: Modos de Juego y Alianzas",
    category: "faq",
    content: `Aclaraciones sobre las modalidades Cooperativa, Campaña, Alianzas (2v2) y las condiciones de eliminación de jugadores.

P: ¿Cómo funciona el intercambio de recursos y artefactos en el modo Alianza (2v2)?
R: En el modo Alianza, las reglas de comercio y transferencia se flexibilizan notablemente:
- El comercio de recursos (Oro, Madera, Mineral, Valiosos) es libre y sin costes en cualquier momento de la ronda.
- El intercambio de cartas de Artefacto está permitido siempre que los héroes de ambos aliados finalicen su movimiento en casillas adyacentes del mapa de aventura.
- Está estrictamente prohibido atacar o bloquear el paso al héroe de tu aliado, así como flaggear (reclamar) minas que ya pertenezcan a tu compañero de equipo.

P: ¿Cuáles son las condiciones oficiales de Eliminación Directa de la partida?
R: Existen dos vías reglamentarias oficiales por las que sufres la eliminación directa e irreversible de la partida:
1. Sin Base Operativa: Pasar 3 rondas completas de juego consecutivas sin controlar al menos una ciudad o un asentamiento en el mapa de aventura.
2. Derrota del Héroe Principal sin Base: Perder un combate táctico con tu Héroe Principal cuando no te quede bajo control ninguna ciudad o asentamiento en el mapa de aventura (esto incluye perder a tu héroe defendiendo tu última ciudad de un asedio enemigo).

P: ¿Qué ocurre con mis componentes y mazo si soy eliminado de la partida?
R: Al ser eliminado:
- Se descartan permanentemente tus Cubos de Facción y tu figura de héroe se retira del mapa de aventura.
- Las cartas de tu mazo de Poder y Magia quedan Retiradas del juego por el resto del escenario actual.
- El jugador eliminado no queda inactivo en la mesa de juego: asume el control directo de las Unidades Neutrales de la Inteligencia Artificial en todos los combates que libren los jugadores supervivientes, intentando derrotarlos en el tablero táctico.`
  },
  {
    id: "faq_spells_magic",
    title: "48. FAQs: Hechizos y Magia",
    category: "faq",
    content: `Tratado místico sobre las escuelas elementales, el Conocimiento, el Poder y efectos específicos de los hechizos.

P: ¿Cuál es el límite real de cartas de Hechizo que puedo mantener en mi mano?
R: Viene determinado estrictamente por la estadística de Conocimiento de tu héroe. Si tu héroe posee 2 de Conocimiento, al reponer cartas durante la Fase de Planificación, no podrás retener más de 2 cartas de Hechizo en tu mano activa.

P: ¿Cómo funciona el hechizo Flecha Mágica contra inmunidades elementales?
R: La Flecha Mágica es un hechizo neutro y místico:
- Se beneficia del incremento de daño de cualquier escuela elemental que domines (Aire, Tierra, Fuego o Agua).
- Al ser un hechizo neutro sin afinidad pura a un elemento, ninguna criatura con inmunidad elemental puede ignorar su daño. Por ejemplo, un Gólem de Hierro o de Acero (inmunes a ciertos elementos) recibirá el daño completo de una Flecha Mágica.

P: ¿Puedo lanzar el hechizo Resurrección para recuperar unidades muertas por magia o por la Torre de Flechas en un asedio?
R: No. El hechizo de Resurrección (escuela de Tierra) tiene una limitación estricta de FAQs oficiales: solo se puede lanzar para mitigar y sanar el daño infligido por ataques físicos directos de criaturas enemigas en combate táctico.
- Si tu unidad es eliminada por un hechizo de daño directo (ej. Rayo o Implosión), efectos pasivos (ej. Nubes de Muerte) o la Torre de Flechas en un asedio, no puede ser resucitada.
- La unidad resucitada vuelve a la batalla pero pierde su contraataque de represalia en esa ronda, aunque no lo hubiese gastado previamente.

P: ¿La limpieza del hechizo Curar me obliga a purgar mis propios bufos beneficiosos activos?
R: No. Limpiar efectos dañinos con el hechizo Curar (escuela de Agua) es totalmente opcional. Puedes sanar el daño físico y optar por remover una maldición de fuego enemiga, manteniendo intactos tus bufos de Celeridad o Bendición activos sobre la misma unidad.

P: ¿Por qué exige el hechizo Implosión descartar cartas para poder jugarse si ya tengo la carta de hechizo?
R: El hechizo de Implosión requiere un nivel mínimo de Poder 1 para activarse. Dado que la mayoría de los héroes inician la andadura con Poder 0 en sus estadísticas básicas, el jugador está obligado a realizar la acción de Potenciar (Empower), descartando 1 carta de su mano de juego para sumar +1 de Poder temporal y poder conjurarlo.

P: ¿Cómo interactúa el hechizo Bendecir con las tiradas del dado de ataque?
R: Bendecir obliga a tu criatura a ignorar la tirada física del dado, aplicando automáticamente el daño máximo listado en su ficha. Dado que no se realiza una tirada física, no se genera ningún resultado del dardo. Cualquier habilidad de una unidad que dependa de caras específicas del dado de ataque (como las bonificaciones al salir un +1 o maldiciones al salir un -1) no puede activarse.`
  },
  {
    id: "faq_artifacts_scrolls",
    title: "49. FAQs: Artefactos, Pergaminos y Grial",
    category: "faq",
    content: `Resolución de dudas sobre el mazo de tesoros arcanos, reliquias permanentes, pergaminos de hechizos y la excavación del Grial.

P: Al obtener un Artefacto explorando el mapa de aventura, ¿se envía a mi pila de descartes?
R: No. Existe la Regla Sagrada de Adquisición para las cartas de Artefacto (Menores, Mayores o Reliquias): se añaden directamente a tu mano de juego activa, permitiendo jugarlos inmediatamente en el mismo turno si cumples los requisitos. Una vez jugados y resueltos, se envían a tu pila de descartes del héroe.

P: ¿Se deben equipar los artefactos en ranuras de personaje físicas?
R: No. En el reglamento básico de mesa no existen ranuras de equipo en el tablero. Los artefactos son cartas que se juegan desde la mano y van al descarte, con la única excepción de las cartas con la etiqueta Permanente (símbolo de candado), que permanecen en mesa boca arriba otorgando efectos continuos hasta que sean descartadas o sustituidas por otras.

P: ¿Cómo funcionan los Pergaminos de Hechizo en la expansión de Conflujo?
R: La expansión incorpora un sistema exclusivo de Pergaminos con mazo propio de 20 cartas:
- Al obtener un Pergamino, roba 2 cartas de hechizo comunes y colócalas bocabajo sobre la carta de Pergamino (sin ir a tu mano de hechizos).
- Puedes lanzar cualquiera de esos hechizos desde el pergamino gastando tu maná de forma habitual.
- Los hechizos de pergaminos se lanzan siempre en su línea de poder más débil (Poder 0). No se pueden potenciar descartando cartas ni sumar bonus de escuelas mágicas.
- Un héroe puede controlar un máximo de 2 pergaminos activos simultáneamente. Si adquiere un tercero, debe descartar uno de los activos.
- Puedes vender pergaminos en cualquier Mercadillo recibiendo 2 de Oro por cada hechizo que aún permanezca sin usar sobre la carta.

P: ¿Cómo funciona exactamente el descubrimiento y excavación del Grial?
R: El Grial es el elemento místico más poderoso del mapa de aventura. Su excavación se resuelve de la siguiente forma:
1. Debes visitar los Obeliscos antiguos repartidos por el mapa para ir eliminando coordenadas erróneas de tu mapa de plano místico.
2. Una vez que determines la casilla exacta del entierro, sitúa a tu Héroe Principal sobre ella.
3. Gasta 1 PM completo del turno y declara formalmente la acción de Excavar.
4. Si acertaste, añade la carta del Grial directamente a tu mano. Si fallas, pierdes el PM empleado. Llevar el Grial de vuelta a tu ciudad capital te permite erigir la estructura legendaria del Grial, otorgando +20 de Oro en cada Fase de Recursos y un poder mítico único de facción.`
  },
  {
    id: "naval_battles_and_navigation",
    title: "13. Batallas Navales y Navegación (Sea & Ships)",
    category: "map",
    content: `La expansión de Navegación introduce el mar, astilleros de ciudad, boyas, naves y combates anfibios:

I. ASTILLEROS (SHIPYARDS) Y BARCOS:
• Astilleros: Estructura urbana que permite gastar Madera y Oro para construir una ficha de Barco en una casilla de costa o río adyacente a tu Metrópolis.
• Embarcar y Desembarcar: Mover el héroe desde una casilla de tierra firme hacia un Barco consume 1 PM (Punto de Movimiento) completo. El héroe adquiere el estado de navegación marina. Desembarcar de vuelta consume igualmente 1 PM completo del turno.
• Movimiento Marítimo: El héroe navega por casillas de agua. No se beneficia de los bonos de caminos estándar (como Establos o Logística), pero puede utilizar el hechizo "Caminar sobre el Agua" (Water Walk) de la escuela de Agua para cruzar ríos o mares cortos a pie sin poseer naves terrestres.

II. OBSTÁCULOS Y PELIGROS MARINOS:
• Remolinos de Agua (Whirlpools): Casillas de peligro natural. Entrar en un remolino teletransporta de forma aleatoria al héroe a otro remolino del mapa, pero exige realizar una tirada de dado de combate: un resultado de "-1" destruye permanentemente una unidad de tu ejército debido a las corrientes marinas destructoras.
• Boyas y Faros: Visitar boyas en el mapa de aventura otorga +1 PM gratis de movimiento marítimo temporal, y los Faros incrementan de forma pasiva la velocidad de navegación del jugador que los controle.`
  },
  {
    id: "battlefield_and_obstacles",
    title: "14. Expansión de Campo de Batalla y Obstáculos (Battlefield)",
    category: "combat",
    content: `La expansión de Campo de Batalla introduce losetas de mapa de mayor tamaño (Campos Dinámicos) y terrenos tácticos con efectos en la reja de batalla de 4x5:

I. OBSTÁCULOS ACTIVOS EN EL TABLERO:
• Ruinas, lodo y arenas movedizas: Bloquean el avance de tropas cuerpo a cuerpo (melee).
• Campos de fuerza y minas terrestres: Efectos mágicos en ciertas casillas que infligen daño o detienen el movimiento de la unidad que los pise.

II. EFECTOS DE TERRENO TÁCTICO:
• Bosques y Coberturas: Los hexágonos de bosque conceden cobertura de +1 Defensa a arqueros o unidades adyacentes contra proyectiles.
• Terrenos de Lava: Los terrenos de lava aumentan el daño por fuego de magias en +1 herida.
• Terrenos de Pantano: Reducen el movimiento en el mapa de aventura y aplican penalizaciones de moral en combate a las facciones que no pertenezcan a la Fortaleza.

III. REGLA DE INICIATIVA-MOVIMIENTO (CAMPOS DINÁMICOS):
• En el modo de Campo de Batalla Grande, las unidades no tienen velocidad fija. Su Iniciativa (⚡) dicta directamente la cantidad de casillas de movimiento táctico de melé. Por tanto, hechizos como "Celeridad" (Haste) o "Ralentizar" (Slow) alteran tanto el orden de activación cronológico como el alcance de avance físico de las tropas en el tablero.`
  },
  {
    id: "underworld_subterraneo",
    title: "15. Expansión del Subterráneo (Underworld)",
    category: "map",
    content: `La expansión del Subterráneo añade una dimensión paralela al mapa de aventura representada por losetas de subterráneo oscuras:

I. ACCESO AL SUBTERRÁNEO:
• Puertas Subterráneas (Underworld Gateways): Casillas especiales en el mapa de superficie que consumen 1 PM para transportar al héroe a la loseta subterránea interconectada.

II. EXPLORACIÓN BAJO TIERRA:
• Exploración en la Oscuridad: Las losetas subterráneas no pueden ser reveladas mediante búsquedas de superficie estándar (Scouting); exigen entrar físicamente en el subsuelo para ser desveladas. En estas profundidades abundan los ejércitos de oro de la facción de Mazmorra y los bancos de criaturas como la "Utopía del Dragón".`
  },
  {
    id: "campaign_transition_rules",
    title: "16. Reglas de Campaña y Transición Solitario",
    category: "modes",
    content: `Para las reglas exclusivas del Modo Solitario, ver las reglas con IA y Fin de Escenario. Al finalizar un escenario de Campaña en Solitario y avanzar al siguiente, se aplica la regla de transición de mazo:

I. REGLA DE TRANSICIÓN DE CAMPAÑA:
• Restablece el Nivel de Experiencia de tu Héroe a 1.
• Prepara el mazo inicial para la siguiente campaña, el cual consistirá estrictamente en:
  1. Las cartas de Característica básicas del mazo.
  2. El nivel 1 de tu Carta Especialidad de héroe.
  3. 5 cartas no especiales de tu elección de tu mazo anterior.
• Se omiten por completo los pasos de Configuración del Mazo estándar durante la Preparación para el siguiente escenario de la campaña.`
  },
  {
    id: "heroes_main_and_secondary",
    title: "17. Reglamento de Héroes: Héroe Principal y Héroe Secundario",
    category: "heroes",
    content: `Los jugadores controlan siempre a un Héroe Principal y, además, pueden reclutar a un Héroe Secundario. Los Héroes se utilizan para realizar Acciones de Movimiento en el tablero de juego (mapa) y para iniciar Combates contra enemigos con el fin de alcanzar una condición de victoria en el Escenario.

I. HÉROE PRINCIPAL:
• Representación: Está representado por su Figura, su Carta de Héroe y su Mazo.
• Movimiento: Tiene 3 Puntos de Movimiento (PM) por turno.
• Uso del Mazo: Solo el Héroe Principal puede usar el Mazo de Poder y Magia.
• Progresión y Experiencia: Comienza el juego en el Nivel 1 y puede avanzar hasta el Nivel 7 ganando Experiencia (adquirida en Combates, visitando ciertas Localizaciones, o con el Dado de Tesoro).
• Habilidades: Al subir a los Niveles 2, 5 y 7, el jugador puede Buscar(2) en el Mazo de Habilidades para añadir una carta de habilidad a su Mazo.

II. HÉROE SECUNDARIO:
• Contratación y Coste: Si controlas una Ciudad o un Asentamiento, puedes contratar un Héroe Secundario volteando la Ficha de Población y pagando 10 de Oro.
• Restricción de Reclutamiento: Las Unidades no pueden ser Reclutadas o Reforzadas mientras estás reclutando un Héroe Secundario.
• Representación y Límite: Usa la figura del Héroe restante de tu Facción (puedes marcar el modelo con una ficha o un Cubo de Facción para diferenciarlo). Colócalo en una Ciudad o Asentamiento controlado. Solo puedes tener un Héroe Secundario a la vez.
• Movimiento y Limitaciones: Tiene 2 Puntos de Movimiento (PM). No posee tarjeta de Héroe, no puede ganar experiencia y no puede usar Cartas de tu Mazo en ningún momento por ningún motivo.
• Cartas ganadas: Si el Héroe Secundario gana alguna Carta, colócala en tu mano de forma normal.
• Combate y Unidades Compartidas: En combate usan las mismas Cartas de Unidad que el Héroe Principal (comparten tropas). Se considera que tienen el mismo Nivel que el Héroe Principal a efectos de resolver Combates Rápidos.
• Derrota o Retirada Instantánea: Si tu Héroe Secundario es atacado por un Héroe enemigo, puedes elegir que ese Héroe sea derrotado instantáneamente en lugar de luchar (para conservar intactas las tropas). Al ser derrotado, elimínalo del juego. Puede ser reclutado de nuevo con otro uso de la ficha de Población.`
  },
  {
    id: "rampart_expansion_new_elements",
    title: "50. Expansión Murallas (Rampart): Nuevos Elementos y Modo Alianza Avanzado",
    category: "modes",
    content: `Contenido verificado contra el Libro de Misiones de Murallas oficial (v1.0 ESP). La expansión Murallas añade la facción Murallas (elfos y enanos de AvLee), cartas de máquina de guerra, nuevos lugares de mapa, reglas para el Modo Alianza y una campaña en solitario propia.

## CARTAS DE EFECTO PERMANENTE
Nuevo tipo de carta (símbolo de infinito ∞): ofrecen un bonificador o condición duradera. Al jugar una carta de efecto permanente, colócala boca arriba frente a ti; permanece ahí hasta que la descartas voluntariamente o la sustituyes por otra carta de efecto permanente. Cada héroe solo puede tener UNA carta de efecto permanente activa a la vez. Mientras está en juego, puedes seguir usando sus efectos (básico o avanzado), pero no se apilan: si usas el efecto avanzado, no sumes también el básico.

## MÁQUINA DE GUERRA (mecánica general)
Se consiguen en la Fábrica de Máquinas de Guerra (lugar revisitable) o en un Mercadillo. Si la compras en un mercadillo, no puedes usar ninguna otra acción de ese mercadillo en la misma visita, y el coste es 3 de Oro más caro que en la fábrica. El mazo de máquinas de guerra se coloca al alcance de todos los jugadores.

## MODO ALIANZA: REGLA ADICIONAL PRECISA
Requiere como mínimo 1 expansión y 4 jugadores (2 contra 2). Reglas exactas:
• Una alianza es un equipo de 2 jugadores formado al comienzo de la partida, que dura el resto del escenario.
• Cada jugador elige su facción al comienzo del escenario (no tienen por qué compartir facción).
• Los aliados pueden intercambiarse artefactos, pero SOLO si sus héroes están en zonas adyacentes.
• Los aliados pueden intercambiar recursos LIBREMENTE en cualquier momento, sin necesidad de estar en zonas adyacentes.
• REGLA CLAVE: un jugador de una alianza NO puede señalizar un lugar que YA haya sido señalizado por el otro jugador de su misma alianza (evita "recapturar" el mismo lugar para farmear el bonificador de primera captura dos veces dentro del mismo equipo).
• Al acabar el escenario, los héroes aliados comparten las condiciones de victoria y derrota por igual; no existe ningún paso para comparar quién contribuyó más.

## NUEVOS LUGARES DE MAPA DE LA EXPANSIÓN MURALLAS
• Mina: Aserradero (Sawmill) — Categoría Señalizable. Funciona como cualquier otra mina: si la capturas sin dueño previo, recibes sus recursos de inmediato. Genera pasivamente 2 Materiales de Construcción al comienzo de cada ronda de recursos.
• Fábrica de Máquinas de Guerra — Categoría Revisitable. Permite a los héroes comprar máquinas de guerra.
• Mercadillo (actualizado en esta expansión) — Categoría Revisitable. Ahora permite además comprar una máquina de guerra (con el recargo de +3 de oro descrito arriba), aparte de sus funciones habituales de intercambiar recursos o retirar una carta.`
  },
  {
    id: "rampart_alliance_confrontation_scenarios",
    title: "51. Escenarios de Murallas: El Desafío (Alianza) y Oro Enano (Enfrentamiento)",
    category: "modes",
    content: `Dos escenarios oficiales incluidos en el Libro de Misiones de Murallas, útiles como referencia de cómo se preparan escenarios de Alianza y de Enfrentamiento con condición de victoria basada en un objetivo especial (Ficha de Grial).

## EL DESAFÍO (Modo Alianza, 4 jugadores: 2 contra 2)
• Duración: 11-14 rondas. Recursos iniciales: 16 oro, 4 materiales, 1 valioso. Ingresos: «10» oro, «0» materiales, «0» valiosos. Edificio inicial: 1 vivienda de bronce. Unidades iniciales: 2 manadas de bronce con el menor coste de reclutamiento.
• Reglas especiales: al visitar un obelisco se lanzan 2 dados de tesoro y se resuelve uno; los jugadores pueden usar su mazo de fuerza y magia al pagar oro para defender la ciudad de su facción; una alianza NO puede visitar la zona con la ficha de grial hasta que sus miembros hayan visitado al menos 4 obeliscos diferentes distintos, o algún héroe ya haya cogido la ficha; conseguir la ficha de grial cuesta 2 puntos de movimiento en su zona; si derrotan o rinden al héroe portador, la ficha pasa al vencedor o se queda en la zona de rendición/derrota; la ficha de grial aumenta en 5 los ingresos de oro.
• Condición de victoria: un héroe debe conseguir la ficha de grial y llevarla a la ciudad de su facción.
• Marcador de rondas: al final de la ronda 11, si nadie tiene el grial, todos pierden. Si ya lo tienen, disponen hasta el final de la ronda 14 para llevarlo a su ciudad; si no, pierden.
• Evento contrarreloj: al comienzo de las rondas 4 y 9, se retiran todos los cubos negros del mapa (permite "revisitar" lugares Visitables).

## ORO ENANO (Modo Enfrentamiento, 2-3 jugadores)
• Duración: 10 rondas. Recursos iniciales: 15 oro, 3 materiales, 1 valioso. Ingresos: «10» oro, «2» materiales, «0» valiosos. Unidades iniciales: 1 manada de bronce con el MAYOR coste de reclutamiento (al revés que el escenario anterior).
• Regla especial clave: prohibido usar cartas que otorguen recursos; si al buscar robas una de estas cartas, debes enseñarla a los demás, descartarla y robar otra.
• Reglas del grial: solo los héroes principales pueden conseguirla; otorga 15 oro inmediatos y +5 de ingresos de oro al llegar con ella a la ciudad; para visitar su zona hace falta haber visitado antes al menos 2 obeliscos diferentes (o que algún héroe ya la haya llevado una vez).
• Condición de victoria: tener 75 de oro al final de una ronda (si varios la cumplen a la vez, gana quien tenga más oro). Si nadie llega a 75 antes del final de la ronda 10, todos pierden.
• Evento contrarreloj: en las rondas 2, 4, 6, 8 y 10 se retiran los cubos negros de todos los molinos y molinos de agua del mapa.`
  },
  {
    id: "rampart_solo_campaign",
    title: "52. Campaña en Solitario de Murallas: La Venganza se Sirve Fría",
    category: "modes",
    content: `Resumen mecánico de la campaña en solitario de 3 escenarios incluida en el Libro de Misiones de Murallas (se omite la narrativa de historia; solo se recoge la estructura de reglas para poder resolver dudas de preparación y victoria).

## ESCENARIO 1: EN BUSCA DE UN ASESINO
Facción del jugador: Murallas (héroe Gelu). Dura 11 rondas. IA: facción Necrópolis (héroes Galthran y Aislinn, más el ejército de la ciudad). Bonificador a elegir: +2 objetos de valor, +4 materiales, o carta de máquina de guerra Carro de Municiones. Regla especial: a partir de la ronda 7, la dificultad de todos los combates del mapa aumenta en 1 hasta el final del escenario. Victoria: derrotar a todos los ejércitos enemigos antes del final de la ronda 11. Derrota: perder el control de tu ciudad, perder un combate contra un ejército enemigo, o no cumplir la victoria a tiempo.

## ESCENARIO 2: PAZ DEFINITIVA
Facción del jugador: Murallas (héroe Gem). Dura 13 rondas. IA: Necrópolis (guardias de lord Fayette y lord Fayette). Bonificador a elegir: +8 oro, +4 materiales, o buscar(2) en el mazo de hechizos dos veces. Victoria: derrotar a todos los ejércitos enemigos antes de que acabe la ronda 13 (si no derrotas a lord Fayette a tiempo, pierdes).

## ESCENARIO 3: AGENTES DE LA VENGANZA
Facción del jugador: Murallas (héroes Gem y Gelu disponibles). Dura 12 rondas. IA: Necrópolis (Charna, Galthran y Vidomina; Vidomina no se mueve por el mapa). Bonificador a elegir: +2 objetos de valor, buscar(4) en el mazo de artefactos, o reforzar dos de tus unidades. Regla especial: la dificultad de todos los combates en las losetas de Necrópolis aumenta en 1 durante todo el escenario. Victoria: derrotar al ejército enemigo (Vidomina) en la zona de la utopía del dragón antes de que acabe la ronda 12.

Regla común a los 3 escenarios: los héroes enemigos se mueven después del jugador; si un enemigo está en una zona bloqueada, el jugador puede entrar igualmente en ella; tras derrotar al ejército de un héroe enemigo se ganan 2 objetos de valor; la primera vez que el héroe entra en una zona con obelisco se activa un evento de historia único de esa partida.`
  },
  {
    id: "tournament_official_scenarios",
    title: "53. Escenarios Oficiales del Libro de Torneo (1 contra 1)",
    category: "modes",
    content: `Los 3 escenarios oficiales incluidos en el Libro de Torneo, para partidas 1 contra 1 siguiendo las reglas de la sección "35b. Reglamento Oficial del Modo Torneo".

## 1. ÚLTIMA OPORTUNIDAD
Mapa: 2 losetas iniciales (I) + 4 cercanas (IV-V, 2 con obelisco) + 4 lejanas (II-III). Recursos iniciales: 10 oro, 3 materiales, 1 valioso. Ingresos: «10»/«0»/«0». Edificio inicial: 1 vivienda de bronce. Unidades iniciales: 3 "unas pocas" de bronce. Regla especial: visitar un obelisco otorga una ficha de moral. Condición de victoria: el héroe de un jugador debe derrotar al héroe principal de su oponente (fin inmediato de partida y recuento de PV). Si nadie lo consigue antes del final de la ronda 8, la partida acaba igualmente y se cuentan los PV.

## 2. LA GRAN CARRERA
Mapa: igual al anterior más 1 loseta central (VII-VIII) con la zona de la utopía del dragón. Mismos recursos/ingresos/edificios/unidades iniciales que el escenario 1. Regla especial: al visitar un obelisco, elige entre ganar una ficha de moral, lanzar 1 dado de recursos, o lanzar 1 dado de tesoro. Quien controle la utopía del dragón al final de la partida gana 3 PV adicionales. Condición de victoria: al capturar la utopía del dragón por primera vez, la partida continúa 1 ronda más y termina. Si nadie la captura antes del final de la ronda 11, la partida acaba igualmente y se cuentan los PV.

## 3. HERENCIA INESPERADA
Mapa: 2 losetas iniciales (I) + 2 cercanas con obelisco (una por jugador) + 2 cercanas sin obelisco + 2 centrales (VI-VII) con las zonas del grial y la utopía del dragón + 6 lejanas (II-III). Mismos recursos/ingresos/edificios/unidades iniciales. Regla especial: al visitar un obelisco, elige entre (a) lanzar 1 dado de recursos y 1 de tesoro y quedarte con el resultado de uno de los dos, o (b) buscar(2) en el mazo de artefactos. No se puede visitar la zona del grial hasta haber visitado 2 obeliscos diferentes, o que otro héroe ya haya cogido la ficha una vez; conseguirla cuesta 2 PM. Un jugador gana 3 PV adicionales al final del escenario si controla la utopía del dragón Y tiene la ficha de grial. Condición de victoria: al final de cualquier ronda en que alguien controle la utopía del dragón Y tenga la ficha de grial, se juega 1 ronda más y termina la partida. Si esto no ocurre antes del final de la ronda 14, la partida acaba igualmente y se cuentan los PV.`
  },
  {
    id: "designers_commentary_faq",
    title: "36. FAQ Oficial del Diseñador (Respuesta Astrológica / Designer's Commentary)",
    category: "faq",
    content: `Aclaraciones oficiales publicadas por Archon Studio ante dudas frecuentes de jugadores. Complementan (no sustituyen) el reglamento base.

JERARQUÍA DE REGLAS: Ante un conflicto, prevalecen en este orden: cartas en juego > cartas de unidad > tableros de ciudad > libros de misión > libro de reglas.

MECÁNICAS GENERALES:
• No se reciben ingresos de producción en la 1ª ronda; solo los recursos iniciales del escenario.
• En modo Alianza, los equipos se activan alternadamente; dentro de un equipo, los jugadores deciden en cada ronda quién va primero.
• Si un escenario no indica dónde colocar una miniatura, se coloca por defecto en la ciudad o loseta inicial.
• Al entrar en una zona es obligatorio resolverla (empezando por el combate, si lo hay).
• Volver a usar los efectos de una zona ya visitada (p. ej. tras renovarse por un evento) exige gastar 1 PM de nuevo, aunque el héroe ya esté ahí.
• Señalizar un asentamiento ya señalizado por otro exige elegir un bonificador de la lista, pero sin el extra de "primera captura"; no se puede señalizar un asentamiento ya controlado por ti o tu aliado.
• Las líneas finas de una loseta separan zonas transitables; las líneas gruesas bloquean el paso salvo que una regla o carta lo permita explícitamente.
• En escenarios con grial, si hay dos zonas de grial solo existe una ficha: una vez recogida, la otra zona pasa a considerarse vacía (aunque siga pudiendo requerir combate al entrar).
• Para quitarte la moral negativa, la única vía es ganar moral positiva (la nueva ficha positiva sustituye/anula la negativa). Necrópolis nunca gana ni pierde moral.
• Una carta de moral que da +1 a ataque/defensa/poder de combate se juega antes de empezar el combate y solo se aplica al primer ataque o defensa que se resuelva; se descarta justo después de aplicarse.

HÉROES:
• Las estadísticas y habilidad inicial de la carta de héroe solo sirven para construir el mazo inicial; no se "usan" después. Las 3 cartas de especialidad se añaden en los niveles I, IV y VI.
• Pueden coexistir 2 héroes en la misma loseta, pero nunca en la misma zona; se puede atravesar una zona con otro héroe (propio o aliado) pero no terminar el movimiento ahí.
• El héroe secundario nunca gana experiencia: si un efecto le daría Exp, se ignora esa parte (el resto del efecto sí se aplica).
• Cada 2 puntos de Exp = 1 nivel de héroe.
• Las cartas de especialidad que mencionan un tipo genérico (p. ej. "dragones" en las de Mutare) afectan a toda unidad cuyo nombre contenga esa palabra.
• Los PM del héroe principal (3) y del secundario (2) se llevan por separado y se pueden repartir libremente entre turnos.
• Es posible superar el límite normal de 3 usos de Experto por ronda gracias a artefactos u otros efectos.

CIUDAD:
• Puedes construir la cofradía de magos y usar la ficha de libro de hechizos en la MISMA ronda solo si no la usas dos veces (construir + comprar hechizos son la misma acción de ficha, limitada a una vez por ronda); sí conservas los hechizos que la cofradía entrega al construirse.
• Capturar la ciudad de otra facción no permite usar sus edificios salvo que el escenario lo indique.
• La ficha de población permite, una vez por ronda, reclutar/reforzar tantas unidades como puedas pagar, o reclutar un héroe secundario (acciones excluyentes entre sí en esa ronda: unidades O héroe secundario).
• El PM extra de la Alcaldía se puede asignar a cualquiera de tus héroes, a tu elección.

COMBATE:
• Si una carta pide elegir varios objetivos, quien la juega decide con libertad (siempre que respete el texto de la carta); la palabra "hasta" hace la elección opcional en vez de obligatoria.
• Sí existe "fuego amigo": hechizos/habilidades de área (Anillo Gélido, Inferno, Bola de Fuego, liches, dragones dorados...) pueden dañar a tus propias unidades si son las únicas adyacentes.
• Las cartas con símbolo de efecto instantáneo se pueden jugar tras un ataque y antes del contraataque.
• Puedes reclutar/reforzar unidades justo antes de un combate contra otro jugador, si aún no usaste la ficha de población esa ronda.
• Durante un asedio, el defensor elige en cuál de las 4 casillas centrales del tablero de combate coloca la carta de puerta.
• El combate rápido de un héroe secundario se calcula según el NIVEL DEL HÉROE PRINCIPAL (los secundarios no tienen nivel propio).
• El hechizo Resurrección debe lanzarse en el momento exacto en que los PS de una unidad llegan a 0; si esto ocurre durante un ataque, la unidad resucitada no contraataca (el ataque original queda anulado).
• Los hechizos ignoran la Defensa por completo: aplican una cantidad fija de daño y no se ven afectados por el dado de ataque (que solo se tira para ataques de unidades).
• Las habilidades que "ignoran contraataques" se aplican a TODOS los ataques de esa unidad en la ronda, no solo al primero.
• La Tienda de Auxilio se puede usar antes de que la unidad enemiga contraataque, hasta una vez por ronda.
• Cualquier daño de al menos 1 punto (incluido el de hechizos) retira la ficha de parálisis de una unidad, aunque provenga de un aliado.
• Si un combate contra unidades neutrales termina sin que ningún bando pierda todas sus unidades y no se paga PM para prolongarlo, el héroe se retira automáticamente a la última zona visitada; al reentrar la zona se roban unidades neutrales nuevas.
• "Adyacente" en el tablero de combate 4×5 es solo ortogonal (no diagonal); en el tablero grande de Campo de Batalla sí cuentan como adyacentes las casillas que comparten borde.
• El hechizo Terremoto solo afecta a obstáculos de muralla/puerta, no a otros obstáculos. El hechizo Retirar Obstáculo no puede retirar unidades, pero sí murallas, puertas y muros de fuego.
• El obstáculo creado por el hechizo Muro de Fuego, a diferencia de otros obstáculos, no impide la entrada de unidades en esa zona (solo aplica su efecto de daño).

UNIDADES (ejemplos de rulings frecuentes):
• Un ataque múltiple de una unidad exige tirar el dado de ataque por cada golpe por separado; los efectos instantáneos solo modifican el primer ataque de esa activación.
• Los efectos Pasivos de las cartas de unidad SOLO funcionan durante el combate, nunca en el mapa (p. ej. Pegasos no reduce el poder de hechizos enemigos fuera de combate).
• Un dragón que ataca en línea a 2 unidades solo recibe contraataque de la unidad adyacente a él.
• El hechizo Bendición hace ignorar el resultado del dado de ataque, por lo que NO activa habilidades que dependen de resolver ese dado (p. ej. la defensa extra de los Zombis).
• Habilidades que anulan/ignoran hechizos (p. ej. Dragones Negros en su cara "manada") se aplican también a los hechizos propios del jugador que los controla.

CARTAS:
• Las cartas de especialidad que imitan hechizos NO son hechizos: no cuentan para el límite de un hechizo por ronda ni se benefician de escuelas de magia u otros modificadores exclusivos de hechizos.
• Una carta de conocimiento solo puede recuperar cartas de HECHIZO del descarte; nunca cartas de especialidad.
• Solo se puede tener 1 carta de efecto permanente activa a la vez (mecánica introducida en Murallas); jugar otra obliga a descartar la anterior primero.
• Cuando una carta pide descartar cierto número de cartas, la propia carta que se está jugando NO cuenta en ese recuento.
• Si coinciden una carta de Anuncio Astrológico y una de Evento (expansión Fortaleza), se resuelven simultáneamente si es posible; si no, primero el Anuncio Astrológico (por orden de turno desde el jugador inicial) y después el Evento (en sentido horario desde quien la robó).
• Diplomacia solo permite reclutar unidades de una categoría (bronce/plata/oro/azur) si tienes la vivienda del nivel correspondiente.
• Una carta con el símbolo de Necrópolis, si la roba otra facción, puede enseñarse y descartarse para robar otra, o quedarse en el mazo sin poder usarla nunca.

DIFERENCIAS CON EL VIDEOJUEGO ORIGINAL (dudas frecuentes de quienes conocen el videojuego):
• No hace falta volver a la ciudad para reclutar: se puede reclutar desde cualquier punto del mapa, una vez por ronda.
• Cada Choza de la Bruja solo se puede visitar una vez por partida (no ilimitadas veces como en el videojuego).
• Solo se puede reclutar 1 héroe secundario adicional (no varios), y ya está disponible en el momento de reclutarlo.
• La ficha de moral positiva NO otorga una activación extra de unidad (a diferencia del videojuego); solo permite una de las 3 acciones del reglamento base.
• La habilidad Resistencia sí puede anular cualquier hechizo enemigo (más flexible que en el videojuego).
• Solo Nigromancia está restringida a una facción concreta (Necrópolis); el resto de hechizos y efectos son universales salvo que la carta indique lo contrario.
• Por norma general se lanza 1 hechizo por ronda de combate, salvo que un efecto (p. ej. cartas de conocimiento en su versión Experto) amplíe ese límite.`
  },
  {
    id: "inferno_mechanics_scenarios",
    title: "38. Expansión Inferno: Mecánicas Nuevas y Escenarios Independientes",
    category: "modes",
    content: `MECÁNICAS NUEVAS:
• Carta de Característica Potenciada: versión de una carta de Estadística con un único efecto (sin distinguir básico/avanzado), por lo que usarla nunca consume tu límite de Experto. Se obtienen sustituyendo una carta de Estadística normal en un Eje Estelar, o mediante ciertos artefactos, habilidades y anuncios astrológicos.
• Inmunidad de los Efrits: tanto la unidad de facción Efrits como la unidad neutral homónima ignoran el daño (no otros efectos) de hechizos de la escuela de fuego.

ESCENARIOS INDEPENDIENTES (no forman parte de una campaña; utilizables sueltos):

Modo Alianza — "El Cuento de las Dos Tierras" (4 jugadores, 2 vs 2, 11-13 rondas): Mapa con 2 áreas de inicio (una por equipo). Victoria: la alianza controla 12 losetas al final de una ronda, o captura y mantiene una ciudad enemiga 2 rondas. Visitar un obelisco da moral positiva. Contrarreloj: en las rondas 4 y 9 todos lanzan y resuelven 1 dado de recursos.

Modo Enfrentamiento — "Destino Manifiesto" (3 jugadores, 12-14 rondas): cada jugador empieza con vivienda de bronce y cofradía de magos. Victoria: controlar 7 losetas al final de una ronda, o capturar y mantener una ciudad enemiga 2 rondas (todos los que cumplan la condición ganan). Contrarreloj: en las rondas 4 y 9 cada héroe gana 1 PM.

Modo Enfrentamiento — "Carpe Diem" (2 jugadores, 14 rondas): incluye una loseta central con Ciudad Aleatoria. Victoria: conquistar la Ciudad Aleatoria de la loseta central (si nadie lo logra antes del final de la ronda 14, empate). Un héroe en la loseta central no puede entrar en la loseta inicial enemiga. Contrarreloj: en las rondas 3, 6 y 9 el héroe principal del segundo jugador gana 1 PM.

Regla común a los 3 escenarios: se recomienda (opcional) retirar o ignorar cartas que permitan atravesar bordes amarillos del mapa (p. ej. Alas de Ángel), para mantener el equilibrio de las zonas de inicio bloqueadas.`
  },
  {
    id: "sg_campaigns_reference",
    title: "37. Referencia de Escenarios: Campañas de Metas Ampliadas (Mazmorra, Necrópolis, Torre)",
    category: "modes",
    content: `Ficha de referencia rápida (sin narrativa/lore) de las campañas en solitario de la expansión "Metas Ampliadas". Introducen las Cartas de Efecto Permanente y las Escuelas de Magia (aire/fuego/tierra/agua) como mecánicas nuevas, además de reglas para jugar con miniaturas (si robas una unidad neutral duplicada, ya en tu ejército, o de una facción controlada por un jugador, descártala y roba otra).

CAMPAÑA DE LA MAZMORRA — "La Sangre del Dragón" (héroe: Mutare/Alamar):
1. Limpieza de Aspirantes (11 rondas): Victoria = derrotar a los 2 héroes enemigos (Caomham y Preuet). Derrota = perder cualquier combate. Nivel de experiencia máximo del héroe: 4. No se pueden construir viviendas de oro ni reclutar un 2º héroe.
2. Sangre del Padre Dragón (11 rondas): Victoria = derrotar al ejército en la utopía del dragón (derrotar al héroe rival es opcional). Derrota = que el enemigo llegue antes a la utopía del dragón. La dificultad de todos los combates del mapa sube +1 desde la ronda 1.
3. Sed de Sangre (10 rondas): Victoria = sobrevivir a los ataques de 4 héroes enemigos consecutivos (3 señores + Ordwald). Derrota = perder cualquier combate. Se pueden reclutar dragones (máx. 2) en la utopía del dragón; no se pueden usar mantícoras.

CAMPAÑA DE LA NECRÓPOLIS — "El Ascenso del Nigromante" (héroe: Sandro/Tamika):
1. Objetivo (8 rondas): Victoria = derrotar a los 2 héroes enemigos (Shiva y Jeddite). Nivel de experiencia máximo del héroe: 4.
2. Maestro (10 rondas): Victoria = derrotar a los 2 héroes enemigos (Ivor y Ethric). Derrota también si pierdes tu ciudad. Nivel de experiencia máximo del héroe: 5.
3. Duque Alarice (11 rondas): Victoria = derrotar a todos los héroes enemigos (Thorgrim, Melodia, duque Alarice) y ganar el combate final en la utopía del dragón.

CAMPAÑA DE LA TORRE — "El Matadragones" (héroe: Dracon/Solmyr):
1. Dragones de Cristal (9 rondas): Victoria = visitar un obelisco y ganar el combate que aparece ahí.
2. Dragones Herrumbrosos (11 rondas, requiere expansión Fortaleza): Victoria = capturar todas las minas y el estanque de gemas, derrotando a los ejércitos que las defienden.
3. Dragones Hada (13 rondas, requiere expansión Murallas): Victoria = capturar todos los asentamientos del mapa y ganar el combate final en la Caja de Pandora.
4. Dragones Azures (11 rondas): Victoria = visitar los 3 obeliscos (cada uno con un combate distinto: cristal, negros, azures) y después derrotar al ejército final en la utopía del dragón. Tras controlar el primer obelisco, la dificultad de todos los combates del mapa sube +1.`
  }
];
