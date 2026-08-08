import { RuleSection } from '../types';

/**
 * REGLAS COMBINADAS - REGLAMENTO OFICIAL Y EXPANSIONES
 * Fuentes Oficiales Archon Studio / Ubisoft:
 * 1. Libro de Reglas Base (HoMM-Rulebook_ESP.pdf, v1.0 ESP)
 * 2. Expansión Murallas y Libro de Misiones (HoMM-Rampart-Mission-Book_ESP.pdf, v1.0 ESP)
 * 3. Metas Ampliadas / Stretch Goals Libro de Misiones (HoMM-SG-Mission-Book_ESP.pdf, v1.0 ESP)
 * 4. Expansión Fortaleza y Libro de Misiones (HoMM-Fortress-Mission-Book_ESP.pdf, v1.0 ESP)
 * 5. Expansión Inferno y Libro de Misiones (HoMM-Inferno-Mission-Book_ESP.pdf, v1.0 ESP)
 * 6. Libro de Torneo (HoMM-Tournament-Book_ESP.pdf, v1.0 ESP)
 * 7. Expansión Campo de Batalla (HoMM-Battlefield-Rulebook_ESP.pdf, v1.0 ESP)
 * 8. Respuesta Astrológica - FAQ y Comentarios de Diseñadores (HoMM-Designer's-Commentary_ESP.pdf, v1.0 ESP)
 * 9. Libro de Misiones del Juego Base (HoMM-Mission-Book_ESP.pdf, v1.0 ESP)
 * 10. Suplemento del Reglamento / Escenario Introductorio (HoMM-Rulebook Supplement-WEB_ESP.pdf, v1.0 ESP)
 * 11. Manual de Reglas Reescrito (Heroes3_Espanol_Rules_Rewrite_1_3.pdf, v1.3 ESP)
 * 12. Expansión Bastión y Libro de Misiones (HoMM-Stronghold-Mission-Book_ESP.pdf, v1.0 ESP)
 * 13. Expansión Conflujo y Libro de Misiones (HoMM-Conflux-Mission-Book_ESP.pdf, v1.0 ESP)
 * 14. Expansión Cala y Libro de Misiones (HoMM-Cove-Mission-Book_ESP.pdf, v1.0 ESP)
 * 15. Contenido Adicional / Metas Ampliadas 2 (HoMM-SG2-Mission-Book_ESP.pdf, v1.0 ESP)
 * 16. Expansión Batallas Navales y Libro de Misiones (HoMM-Naval-Battles-Mission-Book_ESP.pdf, v1.0 ESP)
 * 17. Manual de Reglas Reescrito Compendium v2.0 Dev (Heroes3_Rules_Rewrite_2_0_dev.pdf, 2026 ESP/ENG)
 *
 * Compendio completo e indexado de reglas, componentes, mecánicas, construcciones,
 * modos de juego y campañas oficiales en español de España.
 */

export const reglasCombinadas: RuleSection[] = [
  // =========================================================================
  // LIBRO DE REGLAS BASE
  // =========================================================================
  {
    id: "cap_01_componentes",
    title: "1. Lista de Componentes",
    category: "componentes",
    content: `LISTA OFICIAL DE COMPONENTES DE HEROES OF MIGHT AND MAGIC III: THE BOARD GAME
    
(JUEGO BASE)
	LIBROS Y AYUDAS:
	- 1 Libro de reglas (Versión 1.0 ESP)
	- 1 Libro de misiones (Escenarios)
	- 1 Libro de torneo
	- 3 Ayudas de juego de consulta rápida
	
	LOSETAS Y TABLEROS:
	- 20 Losetas de mapa (3 losetas iniciales [I], 9 losetas lejanas [II-III], 6 losetas cercanas [IV-V], 2 losetas centrales [VI-VII])
	- 3 Tableros de ciudad (Castillo, Mazmorra, Necrópolis)
	- 1 Tablero de combate táctico (cuadrícula 4 × 5)
	- 1 Marcador de rondas (16 casillas)
	
	MINIATURAS Y CARTAS:
	- 6 Miniaturas de héroe (2 por facción: Héroe principal y secundario)
	- 3 Cartas de héroe a doble cara
	- 21 Cartas de unidad de facción (a doble cara: "unas pocas" / "manada")
	- 41 Cartas de unidad neutral (bronce, plata, oro, azur)
	- 30 Cartas de habilidad
	- 32 Cartas de artefacto (menor, mayor, reliquia)
	- 46 Cartas de hechizo (escuelas de Fuego, Agua, Aire y Tierra)
	- 18 Cartas de especialidad de héroe
	- 24 Cartas de característica (Ataque, Defensa, Poder, Conocimiento)
	- 20 Cartas de héroe IA
	- 3 Cartas de muralla, 1 carta de puerta y 1 carta de torre de arqueros (para asedios)
	- 19 Cartas de anuncio astrológico
    
 	DADOS Y FICHAS:
	- 2 Dados de ataque rojos (-1 a +1)
	- 3 Dados de recursos
	- 3 Dados de tesoro
	- 33 Fichas de oro
	- 21 Fichas de materiales de construcción
	- 16 Fichas de objetos de valor
	- 3 Fichas de construcción, 3 de población y 3 de libro de hechizos
	- 17 Fichas de movimiento
	- 15 Fichas de daño y 6 de parálisis/defensa
	- 2 Fichas de moral y 1 ficha de grial
	- 100 Cubos acrílicos (20 azules, 20 morados, 20 grises, 40 negros)`
  },
  {
    id: "cap_02_resumen_modos",
    title: "2. Resumen del Juego y Modos de Juego",
    category: "modos",
    content: `DESCRIPCIÓN GENERAL Y MODOS DE JUEGO:

En las tierras de Antagarich, los héroes exploran paisajes indómitos, recuperan artefactos, descubren asentamientos y reclutan criaturas. Cada partida forma parte de un escenario o campaña con su propio mapa, condiciones de victoria y reglas. Cada facción ofrece varios héroes con habilidades y mazos propios, lo que aporta rejugabilidad.

MODOS DE JUEGO PRINCIPALES:
1. ENFRENTAMIENTO (1v1, 2-3 jugadores):
   - Modo competitivo directo entre 2 y 3 jugadores.
   - Selecciona un escenario de Enfrentamiento y vence a tus rivales antes de que te derroten.

2. CAMPAÑA EN SOLITARIO (1 jugador):
   - Modo para 1 jugador enfrentándose a héroes controlados por una IA enemiga.
   - Serie de escenarios interconectados con narrativa, eventos únicos y mecánicas especiales.

3. ALIANZA (2v2):
   - Modo por equipos (dos contra dos). Se requiere una expansión con facción adicional para 4 jugadores.
   - Los compañeros de equipo comparten objetivos y coordinan estrategias en el mapa.

4. COOPERATIVO (2-3 jugadores):
   - Partidas cooperativas en las que todos los jugadores comparten el mismo objetivo contra el juego.

Además de estos 4 modos, el Libro de Torneo aporta un quinto modo, el Modo Torneo, pensado específicamente para partidas 1 contra 1 con puntuación por objetivos (ver capítulo "Modo Torneo: Construcción del Mapa de Escenario y Puntuación").`
  },
  {
    id: "cap_03_preparacion_y_turnos",
    title: "3. Preparación de la Partida, Rondas y Turnos",
    category: "preparación",
    content: `PREPARACIÓN DE LA PARTIDA Y ESTRUCTURA DE RONDAS:

PASOS DE PREPARACIÓN DE LA PARTIDA:
1. Elige un escenario (para la primera partida se recomienda "Un Nuevo Mundo").
2. Escoge una facción disponible (si hay desacuerdo, lanzad un dado de recursos y gana el resultado más alto). El juego base ofrece 3 facciones (Castillo, Mazmorra, Necrópolis), cada una con habilidades únicas y color propio.
3. Elige uno de los héroes de tu facción como héroe principal.
4. Saca de la caja los componentes de tu facción: 1 carta de héroe a doble cara, 2 miniaturas de héroe, 7 losetas de edificio de ciudad, 1 tablero de ciudad, 7 cartas de unidad a doble cara, 3 cartas de especialidad de héroe, 1 carta de habilidad (según héroe), 20 cubos de facción, 1 ficha de construcción, 1 de población, 1 de libro de hechizos y 3 fichas de movimiento.
5. Coloca un cubo de tu facción en la casilla "1" del marcador de nivel de la carta de héroe (nivel 1).
6. Prepara la disposición de losetas de mapa según el escenario y el número de jugadores.
7. Coloca el tablero de ciudad y las losetas de edificio ya construidas según el escenario.
8. Establece tus ingresos iniciales colocando cubos de facción en el marcador de ingresos del tablero de ciudad; coloca las fichas de población, construcción y libro de hechizos en sus huecos.
9-10. Agrupa las fichas de recursos y hazte con los recursos iniciales del escenario; separa el resto en montones comunes.
11. Divide las cartas de característica en 4 montones (ataque, defensa, poder, conocimiento) y toma la cantidad indicada en tu carta de héroe: este es tu mazo inicial de fuerza y magia.
12. Si tu héroe principal es de fuerza, añade 1 copia de Flecha Mágica a tu mazo; si es de magia, añade 2 copias.
13. Añade las cartas de habilidad y especialidad de nivel 1 de tu héroe a tu mazo inicial.
14. Baraja tu mazo inicial y colócalo boca abajo junto a tu carta de héroe.
15. Separa las cartas de habilidad, artefacto y hechizo en 3 mazos boca abajo, cada uno con su primera carta formando un descarte visible.
16. Elige la dificultad inicial y aplica sus bonificadores (ver Opciones de Juego).
17. Separa las unidades neutrales en 4 mazos por categoría (bronce, plata, oro, azur), barajados y con espacio para sus descartes.
18. Coloca el tablero de combate cerca del mapa; aparta las unidades iniciales que indique el escenario; coloca el marcador de rondas con un cubo negro en la casilla 1.
19. Baraja las cartas de anuncio astrológico y colócalas boca abajo cerca del marcador de rondas.
20. Rota tu loseta inicial como prefieras y coloca tu miniatura de héroe en la zona de la ciudad.
21. Empieza el jugador que nombre 5 unidades neutrales de Heroes of Might and Magic III, o alternativamente el que saque el resultado más alto en un dado de ataque.

ORDEN DE LAS RONDAS: se alternan dos tipos de ronda cada vez que todos los jugadores completan su turno:
• Ronda de Recursos: al comienzo, todos los jugadores obtienen ingresos de edificios, asentamientos y minas bajo su control, según el marcador de ingresos.
• Ronda Astrológica: al comienzo, se roba y resuelve una carta de anuncio astrológico en voz alta (con diversos efectos y duraciones).
El marcador de rondas avanza 1 casilla cada vez que todos los jugadores terminan su turno. Algunos escenarios incluyen eventos contrarreloj que se activan en rondas o condiciones específicas.

CARTAS DE EVENTO (introducidas en la expansión Fortaleza): un tercer tipo de evento, junto a las cartas de anuncio astrológico y los eventos contrarreloj. Al comienzo de cada Ronda de Recursos (excepto la primera), una vez repartidos los ingresos, se roba y resuelve 1 carta de evento; el jugador inicial roba la primera, y en la siguiente Ronda de Recursos le toca al siguiente jugador en sentido horario. Reglas de uso: solo se emplean en escenarios multijugador (si la acción no implica a otros jugadores, cada uno la realiza en sentido horario); si la carta no indica el orden, se resuelve en sentido horario empezando por quien la robó; si las acciones no están relacionadas entre sí, los jugadores pueden resolverlas simultáneamente; tras resolver el evento, la carta se baraja de nuevo en su mazo.

TURNOS DE LOS JUGADORES: al comienzo de tu turno te conviertes en jugador activo; puedes descartar y robar cartas libremente hasta el límite de mano de tu nivel (si ya estás en el límite, no robas ni descartas). A lo largo del turno realizas acciones de ciudad, moral y movimiento.

ACCIONES DE CIUDAD: cada una se puede usar una vez por ronda (en tu turno, en el de otro jugador, o antes de un combate, pero nunca durante él); tras usarla, da la vuelta a su ficha, que se recupera al inicio de la siguiente ronda:
• Ficha de construcción: amplía tu ciudad.
• Ficha de población: recluta y refuerza unidades, o recluta un héroe secundario.
• Ficha de libro de hechizos: compra hechizos en la cofradía de magos.

ACCIONES DE MORAL: al ganar moral positiva, coloca 1 ficha (máximo 1 a la vez); se puede usar en cualquier momento, incluso en combate, para: robar 1 carta de tu mazo de fuerza y magia, descartar cualquier cantidad de cartas y robar el mismo número, o volver a tirar 1 dado. Si tu héroe recibe moral negativa, debes descartar tu ficha positiva si la tienes; si no, recibes 1 ficha negativa (máximo 1). Si ya tenías una ficha negativa y recibirías otra, descartas toda tu mano al final del turno en su lugar. Si un héroe con moral negativa gana moral positiva, en vez de recibir la ficha positiva simplemente descarta la negativa. La facción Necrópolis ignora todos los efectos de moral.

ACCIONES DE MOVIMIENTO: tus héroes se mueven tantas veces como quieras mientras tengas PM (el héroe principal empieza con 3). Cada PM gastado permite: mover 1 zona en cualquier dirección, continuar combatiendo contra unidades neutrales 1 ronda adicional, descubrir una loseta oculta adyacente, o colocar una nueva loseta lejana (II-III) de tu reserva. Marca el gasto dando la vuelta a las fichas de movimiento (cara marrón visible).

PREGUNTAS FRECUENTES: 
- El orden de prioridad de las reglas, de mayor a menor autoridad, es: cartas en juego → cartas de unidad → tableros de ciudad → libros de misión → libro de reglas.
- No se reciben ingresos de producción en la primera ronda, solo los recursos iniciales del escenario.
- En Alianza, los equipos se activan alternadamente; dentro de un equipo, se puede decidir cada ronda quién empieza.
- Si un escenario no indica dónde colocar una miniatura, se coloca en la ciudad o loseta inicial por defecto.
- Al entrar en una zona es obligatorio resolverla (empezando por el combate, si lo hay).
- Volver a usar los efectos de una zona ya visitada (p. ej. tras renovarse por un evento, o en un mercadillo) exige gastar 1 PM de nuevo, aunque el héroe ya esté ahí.
- Señalizar un asentamiento ya señalizado por otro jugador exige elegir un bonificador de la lista, pero sin el extra de "primera captura"; no se puede señalizar un asentamiento ya controlado por ti o tu aliado.
- Las líneas finas de una loseta separan zonas transitables; las líneas gruesas bloquean el paso salvo que una regla o carta lo permita explícitamente.
- Si un escenario tiene dos zonas de grial, solo existe 1 ficha: una vez recogida, la otra zona pasa a considerarse vacía (aunque siga exigiendo combate al entrar).
- Para quitarte la moral negativa, la vía más sencilla es ganar moral positiva (artefactos, habilidades, lugares del mapa); si ya tienes moral negativa y ganas positiva, descartas la ficha negativa en su lugar. Necrópolis nunca se ve afectada por la moral.
- Los héroes de magia no son necesariamente más poderosos que los de fuerza al principio: tienen más hechizos, pero menos cartas de uso ilimitado como ataque/defensa, y sus hechizos suelen requerir cartas adicionales de refuerzo.
- Una carta de moral que da +1 a ataque/defensa/poder de combate se juega antes de empezar el combate y solo se aplica al primer ataque o defensa que se resuelva (la tercera opción se refiere al Modo Aventura de la expansión Campo de Batalla); se descarta justo después de aplicarse.`
  },
  {
    id: "cap_04_heroes",
    title: "4. Héroes",
    category: "héroes",
    content: `Existen héroes de fuerza y héroes de magia; cada facción tiene al menos uno de cada tipo. "Héroe del jugador" se refiere tanto al principal como al secundario.

HÉROE PRINCIPAL: representado por su miniatura y carta de héroe. Tiene 3 PM, es el único que puede usar el mazo de fuerza y magia del jugador y ganar experiencia para subir de nivel (empieza en nivel 1, máximo nivel 7). Se gana experiencia derrotando unidades neutrales y héroes enemigos con dificultad/nivel igual o mayor al tuyo; algunos lugares del mapa y el dado de tesoro (cara "experiencia") también otorgan experiencia.

HÉROES SECUNDARIOS: si controlas una ciudad o asentamiento, puedes reclutar al héroe secundario de tu facción pagando 10 de Oro con la ficha de población. Usa la miniatura restante, se mueve por el mapa (cada jugador controla máx. 2 héroes a la vez), no tiene carta de héroe propia, no gana experiencia y tiene 2 PM. Si recibe cartas, van a tu mano igual que con el principal. En combate usa tus unidades pero NUNCA cartas de tu mano o mazo de fuerza y magia. Si se encuentra con un héroe enemigo, puedes elegir combatir o retirarlo de la partida. Si es derrotado, se retira pero puede volver a reclutarse en tu próximo turno; quien lo derrota recibe un cubo de facción del perdedor.

INFORMACIÓN DE LA CARTA DE HÉROE: Nombre, Clase, Tipo, Color de facción, Ataque, Defensa, Poder, Conocimiento, Habilidad inicial, Especialidad, Marcador de nivel. Ataque/Defensa/Poder/Conocimiento determinan cuántas cartas de cada tipo añades a tu mazo inicial. Especialidad del héroe: indica qué carta de especialidad añade al mazo al comienzo y al subir de nivel (no cuenta para el límite de hechizos).

EFECTOS DE NIVEL (marcador de nivel, límite de mano y usos de Experto por ronda):
• Nivel 1: límite de mano 4. Añade la 1ª carta de especialidad.
• Nivel 2: busca (2) en el mazo de habilidades; puedes jugar 1 efecto avanzado (Experto) por ronda.
• Nivel 3: límite de mano 5. Busca (2) en habilidades.
• Nivel 4: añade la 2ª carta de especialidad; permite jugar 2 efectos avanzados por ronda.
• Nivel 5: límite de mano 6. Busca (2) en habilidades.
• Nivel 6: añade la 3ª carta de especialidad; permite jugar 3 efectos avanzados por ronda.
• Nivel 7: límite de mano 7. Busca (2) en habilidades.
Los niveles dorados (I, IV, VI) dan carta de especialidad; los plateados (II, III, V, VII) permiten buscar(2) en habilidades. Usa cubos negros en la carta de héroe para marcar cuántos efectos avanzados puedes usar esa ronda.

PREGUNTAS FRECUENTES:
- Las características y la habilidad inicial de la carta de héroe solo sirven para construir tu mazo inicial, no se usan para nada más después.
- Sí puedes tener 2 héroes en la misma loseta (pero nunca en la misma zona); puedes atravesar una zona con otro héroe propio o aliado, pero no terminar tu movimiento ahí; entrar en la zona de un héroe enemigo inicia combate.
- El héroe secundario nunca gana experiencia (ignora esa parte de cualquier efecto, aunque sí recibe cartas o recursos normalmente).
- Cada 2 puntos de experiencia = 1 nivel de héroe.
- Las cartas de especialidad que mencionan un tipo genérico (p. ej. "dragones" en las de Mutare) afectan a toda unidad cuyo nombre contenga esa palabra.
- Los PM del héroe principal (3) y del secundario (2) se llevan por separado y se pueden repartir libremente entre ambos en tu turno.
- Sí es posible superar el límite normal de usos de Experto por ronda gracias a artefactos u otros efectos de cartas.`
  },
  {
    id: "cap_05_construccion_mazo",
    title: "5. Construcción del Mazo",
    category: "general",
    content: `CONSTRUCCIÓN DEL MAZO DE FUERZA Y MAGIA Y TIPOS DE CARTAS:
    
El mazo inicial tiene 9 cartas: características, habilidad, hechizo y la especialidad del héroe elegido. Salvo que se indique lo contrario, cualquier carta que recibas (explorando o comprando) va directa a tu mano.

REGLAS GENERALES DE LAS CARTAS:
1. Al "buscar (X)" en un mazo (habilidades/artefactos/hechizos), mira las X cartas superiores, añade 1 a tu mano y descarta el resto; o, en vez de mirarlas, coge directamente la carta superior de ese descarte.
2. Cada mazo (habilidad/artefacto/hechizo) tiene su propio descarte identificable.
3. Si el juego indica retirar una carta de la partida, devuélvela a la caja.
4. Tipos de efectos en cartas:
	- Instantáneos (Rayo): Se resuelven de inmediato.
	- De Activación (Flecha): Se juegan durante la activación de tu unidad antes de atacar.
	- De Mapa (Mundo): No se pueden usar en combate.
	- Continuos (Bucle): Duran hasta consumirse o hasta el comienzo del próximo turno del jugador, lo que ocurra antes.
5. Tras usar una carta, se descarta (o cuando concluya su efecto continuo).
6. Si tu mazo de fuerza y magia se agota, baraja el descarte para formar uno nuevo.

CATEGORÍAS DE CARTAS:
1. CARTAS DE HABILIDAD Y CARACTERÍSTICA: cada una tiene un efecto básico y uno avanzado (Experto), limitado por el nivel del héroe. Las cartas específicas de facción se pueden añadir a cualquier mazo pero solo las usa la facción correspondiente; si buscas una que no puedes usar, puedes revelarla, descartarla y robar otra. Solo Necrópolis puede usar las cartas marcadas con su símbolo.
2. CARTAS DE ARTEFACTO: 3 niveles (menor, mayor, reliquia); se barajan en un único mazo al comienzo. Afectan combate, recursos, moral y robo de cartas. Se obtienen explorando el mapa o con el dado de tesoro.
3. CARTAS DE HECHIZO: sin coste inicial, pero se pueden reforzar con más poder (el poder añadido no se guarda para hechizos futuros). Solo se lanza 1 hechizo por ronda de combate, pero se puede reforzar con tantas cartas como se quiera (descartando otras cartas de hechizo en mano, o usando una carta de artefacto/habilidad/poder). Se obtienen construyendo una cofradía de magos o explorando el mapa.
4. CARTAS DE EFECTO PERMANENTE (introducidas en la expansión Murallas): ofrecen un bonificador o condición cumplible que permanece en juego frente al jugador hasta que se descarta o se sustituye por otra carta de efecto permanente; cada héroe solo puede tener 1 activa a la vez. Mientras está en juego, se pueden seguir usando tanto su efecto básico como el avanzado, pero no se acumulan entre sí (usar el avanzado no añade también el básico).
5. CARTA DE CARACTERÍSTICA POTENCIADA (introducida en la expansión Inferno): funciona como una carta de característica normal, pero solo tiene 1 efecto (no distingue básico/avanzado) y por tanto nunca exige gastar un uso de Experto. Se obtiene visitando un Eje Estelar (ver capítulo 8, Elementos del Mapa), o mediante ciertas cartas de artefacto, habilidad y anuncio astrológico de esa expansión.
6. CARTAS DE PERGAMINO DE HECHIZOS (introducidas en la expansión Bastión): conjunto de 20 cartas nuevas; durante la preparación, 10 se barajan dentro del propio mazo de artefactos y las otras 10 quedan aparte formando el mazo de pergaminos de hechizos, usado cuando un lugar o efecto de escenario lo requiera. Al obtener una carta de pergamino de hechizos, colócala junto a tu carta de héroe y roba las 2 cartas superiores del mazo de hechizos, colocándolas boca abajo sobre ella (a partir de entonces se tratan como una sola unidad). Puedes mirar y usar esos hechizos como cualquier otro, con 4 excepciones: (1) no cuentan para tu límite de 1 hechizo por ronda de combate, así que puedes lanzar también uno de tu mano esa misma ronda; (2) solo puedes usar su efecto más débil, sin reforzarlo con Poder de ningún origen; (3) no se pueden usar para reforzar otro hechizo; (4) puedes vender un pergamino junto con sus hechizos en un mercadillo por 2 de Oro por cada hechizo que contenga. Solo puedes tener 2 pergaminos de hechizos en juego a la vez; si obtienes un tercero, decide cuál de los dos anteriores descartar. Cuando se usa o vende el último hechizo de un pergamino, su carta vuelve al mazo de pergaminos de hechizos preparado al inicio del escenario.
7. CARTAS Y FICHAS DE HABILIDAD POTENCIADA (introducidas en la expansión Batallas Navales): las cartas de habilidad potenciada funcionan igual que una carta de habilidad normal, pero con un único efecto que no exige gastar tu límite de Experto. Solo hay 1 copia de cada habilidad potenciada, así que el primer jugador que la consiga impide a los demás obtenerla. Cuando ganes una carta de habilidad nueva (subiendo de nivel, visitando un lugar, o de cualquier otra forma), puedes gastar 1 ficha de habilidad potenciada para llevarte la versión potenciada de esa misma habilidad en su lugar, devolviendo la carta normal a su mazo. Las fichas de habilidad potenciada se obtienen como recompensa en ciertos lugares del mapa o escenarios; se colocan en tu carta de héroe al conseguirlas y se descartan al usarlas.
8. CARTAS DE CIUDAD (introducidas en la expansión Contenido Adicional): mazo de 10 cartas, una por cada facción del juego (aparta las de expansiones que no tengas). Sirven para 2 cosas: (1) aleatorizar la elección de facción al inicio de la partida —reparte 2 cartas por jugador y que cada uno elija una, o bien reparte 2 al primer jugador para que elija una y pase la otra al siguiente (que roba 1 más del mazo y repite el proceso) hasta que todos tengan facción—; (2) determinar qué facción defiende una Ciudad Aleatoria (ver capítulo 8, Elementos del Mapa).
9. CARTAS DE CAJA DE PANDORA (introducidas en la expansión Contenido Adicional): mazo de 20 cartas. Al visitar el lugar "Caja de Pandora", puedes robar 1 carta de este mazo y resolverla en vez del efecto normal del lugar (marcando igualmente la zona como visitada con un cubo negro).

CONSTRUIR UNA COFRADÍA DE MAGOS: al construirla, busca(2) dos veces en el mazo de hechizos (si empiezas la partida con ella ya construida, esas cartas van directas al mazo, no a la mano). Para comprar más hechizos, paga el coste del tablero de ciudad para buscar(2); solo 1 vez por ronda, dando la vuelta a la ficha de libro de hechizos tras usarla. No se puede comprar hechizos la misma ronda en que se construye la cofradía.

ESCUELAS DE MAGIA (introducidas en la expansión Metas Ampliadas): cada carta de hechizo pertenece a una de las 4 escuelas (aire, fuego, tierra, agua), identificable por el borde alrededor de su símbolo. Flecha Mágica pertenece a las 4 escuelas a la vez, pero solo puede beneficiarse del bonificador de una escuela concreta cada vez que se lanza.

PREGUNTAS FRECUENTES:
- Coloca las cartas con efecto continuo cerca de tu carta de héroe (o de la unidad afectada) para recordar que siguen activas; solo se descartan cuando se usan o dejan de tener efecto (una carta de conocimiento puede recuperar del descarte una carta de hechizo, pero nunca una carta de especialidad).
- Las cartas de especialidad que imitan hechizos NO son hechizos: pueden reforzarse con cartas de poder, pero no cuentan para el límite de 1 hechizo por ronda ni se ven afectadas por bonificadores exclusivos de hechizos (como las escuelas de magia).
- El nombre de una carta de especialidad no obliga a usarla sobre la unidad del mismo nombre (aunque suele ser más potente así).
- Nigromancia solo puede usarla un héroe de Necrópolis; si otra facción la roba, puede enseñarla y descartarla para robar otra carta de habilidad, o quedársela en el mazo sin poder usarla nunca.
- El descuento de Nigromancia solo reduce el Oro a la mitad (redondeando hacia abajo), no otros recursos.
- Cuando una carta pide descartar cierto número de cartas, la propia carta que se está jugando NO cuenta en ese recuento (primero se resuelve el efecto, comprobando el orden de acciones de la carta, y solo después se descarta la carta jugada).
- Si coinciden una carta de anuncio astrológico y una de evento (expansión Fortaleza), se resuelven simultáneamente si es posible; si no, primero el anuncio astrológico por orden de turno desde el jugador inicial, y después el evento en sentido horario desde quien lo robó.
- Sí se pueden jugar cartas de efecto instantáneo en el mapa (aunque solo algunas dan bonificador útil fuera de combate, como las que dan recursos, reducen coste de reclutamiento o dan PM).
- Las cartas de hechizo con efecto instantáneo se pueden devolver con una carta de conocimiento y volver a jugar sin problema; las de efecto continuo se descartan al concluir su efecto, por lo que no se puede repetir esa misma copia (pero sí jugar una segunda copia distinta de esa misma carta continua).
- Diplomacia solo permite reclutar unidades de la categoría para la que tengas la vivienda correspondiente.
- La rareza de un artefacto se distingue por el borde de su carta; la de un hechizo, por la cantidad de símbolos de escuela de magia en sus esquinas (1 = básico, 4 = avanzado; Flecha Mágica tiene 4 símbolos distintos porque pertenece a las 4 escuelas).
- Cada carta se puede usar 1 vez antes de pasar a tu descarte; cuando el mazo se agota, baraja el descarte para formar uno nuevo.`
  },
  {
    id: "cap_06_recursos",
    title: "6. Tipos de Recursos y Dado de Recursos",
    category: "general",
    content: `Existen 3 tipos de recursos: Oro, Materiales de Construcción y Objetos de Valor, necesarios para ampliar la ciudad, reclutar unidades y comprar hechizos. Se consiguen en asentamientos y minas controladas, con artefactos, o lanzando dados de recursos.

RESULTADOS DEL DADO DE RECURSOS:
- 2 Materiales de construcción
- 4 Materiales de construcción
- 1 Objeto de valor
- 2 Objetos de valor
- 3 de Oro
- 6 de Oro

En mercadillos o por ciertos eventos, se pueden intercambiar recursos o retirar una carta (ver Tabla de Comercio en Opciones de Juego).`
  },
  {
    id: "cap_07_ciudad",
    title: "7. Ciudad: Edificios y Asedios",
    category: "ciudad",
    content: `Cada facción tiene su ciudad, con edificios propios:
• Alcaldía: durante la ronda de recursos, ingresos adicionales o habilidad específica de facción.
• Ciudadela: permite reforzar cartas de unidad (de "unas pocas" a "manada"); añade murallas, puerta y torre de arqueros en un asedio.
• Viviendas de unidades: permiten reclutar unidades; más viviendas desbloquean categorías superiores, en el orden bronce → plata → oro.
• Cofradía de magos: lugar donde comprar hechizos.
• Edificios de facción: efectos únicos según la facción.

REGLAS DE CONSTRUCCIÓN:
- Solo se puede construir 1 vez por ronda, pagando el coste y dando la vuelta a la ficha de construcción (se recupera al inicio de la próxima ronda). 
- Coloca la loseta de edificio correspondiente en el tablero de ciudad.

CAPTURA Y ASEDIO: mientras exploras, puedes capturar asentamientos neutrales y asediar ciudades enemigas moviendo tu héroe sobre ellos. 
- Si asedias la ciudad/asentamiento de otro jugador, el defensor puede pagar 8 de Oro para defenderse con su ejército si no está presente en la zona (transporta solo el ejército, no el héroe principal, por lo que no puede usar cartas de mano en ese combate; tras el combate, el ejército vuelve al lugar del héroe). 
- Si capturas una ciudad enemiga, coloca tu cubo de facción sobre ella y recupera un cubo de facción del propietario anterior (relevante para condiciones de victoria). En una ciudad capturada no se pueden usar sus edificios ni habilidades (incluida reclutar). 
- Si un enemigo captura tu ciudad, tú sigues pudiendo usar sus edificios y habilidades.

PREGUNTAS FRECUENTES:
- Puedes construir una cofradía de magos incluso durante el turno de otro jugador (por ejemplo, antes de que te ataquen), pero no puedes usar la ficha de libro de hechizos para comprar hechizos justo después de construirla esa misma ronda, ya que ambas acciones cuentan como la misma acción de cofradía (limitada a 1 vez por ronda); sí conservas los hechizos que la cofradía entrega al construirse.
- Si capturas la ciudad de otra facción, no puedes usar sus edificios salvo que el escenario indique lo contrario.
- La ficha de población permite, 1 vez por ronda, reclutar un héroe secundario, o reclutar y reforzar tus unidades tantas veces como puedas pagar (estas dos últimas acciones se pueden repetir libremente esa ronda).
- Si la Alcaldía te da PM adicional, decides tú a qué héroe se lo asignas.`
  },
  {
    id: "cap_08_elementos_mapa",
    title: "8. Elementos del Mapa",
    category: "mapa",
    content: `EXPLORACIÓN DEL MAPA DE AVENTURA:

LOSETAS DE MAPA:
- Cada loseta tiene 7 zonas; algunas indican dificultad (I-VII, ver tabla) y las unidades neutrales que pueden encontrarse.
- Zonas rodeadas de línea amarilla continua están bloqueadas (no se puede entrar). 
- Las zonas marcadas con símbolo de dado de tesoro permiten lanzarlo y obtener: 1 dado de recursos, 2 dados de recursos (eliges uno), medio nivel de experiencia, o buscar(2) en artefactos.
- Clasificadas por dificultad en el dorso: Iniciales (I), Lejanas (II-III), Cercanas (IV-V) y Centrales (VI-VII).
- Al colocar nuevas losetas lejanas, deben situarse adyacentes al héroe y a al menos 2 losetas existentes con camino válido. 

LOSETAS DE MAPA SUBTERRÁNEO (introducidas en la expansión Bastión): funcionan como cualquier otra loseta, salvo que no se puede pasar de una loseta de superficie a una subterránea (ni viceversa) sin usar una Puerta Subterránea o un hechizo de portal de ciudad; ningún otro efecto de movimiento de carta permite ese cruce. Las losetas con puerta subterránea se indican en el diseño de mapa del escenario. Al descubrir una de estas losetas, elige una zona adyacente en la loseta de superficie (la "entrada") y coloca la ficha de puerta subterránea mitad en ella y mitad en un campo adyacente de la loseta subterránea (la "salida"), reemplazando esas zonas por completo (nunca sobre zonas bloqueadas, otras fichas, ni zonas requeridas para una condición de victoria). Cuando un héroe entra en la zona de "entrada", se descubre la loseta subterránea (si no lo estaba) y se elige su "salida" de la misma forma; el héroe se traslada de inmediato de una zona a la otra sin gastar PM adicional, tratándose ambas zonas como un único lugar a partir de entonces (transitable en ambos sentidos).

LOSETAS DE MAPA MARINO (introducidas en la expansión Cala): se descubren y colocan igual que cualquier otra loseta, pero moverse por ellas es distinto. Algunas losetas marinas mezclan zonas de tierra y de mar. Te mueves con normalidad entre dos zonas del mismo tipo (mar↔mar o tierra↔tierra) y también al entrar en una zona de tierra desde una de mar. Sin embargo, cuando tu héroe entra en una zona de mar desde una zona de tierra, su movimiento termina para el resto del turno: no pierde ningún PM no gastado y aún puede usarlos para otras acciones (como prolongar el combate que resulte de esa zona), pero no puede volver a moverse ese turno, ni siquiera con ayuda de cartas.

BARCO (miniatura opcional, introducida en la expansión Contenido Adicional): puedes sustituir tu miniatura de héroe por la de un barco justo después de entrar en una zona de mar, colocando tu cubo de facción sobre el barco para recordar a qué héroe representa. Cuando ese héroe entra en una zona de tierra desde el mar, deja la miniatura de barco a un lado y recupera tu miniatura de héroe.

FICHA DE TORBELLINO (introducida en la expansión Cala): funciona igual que un monolito, pero solo en losetas de mar. Marca una zona conectada con otro torbellino de otra loseta; al descubrir una loseta marina con torbellino, coloca la ficha en la zona que indique el diseño del escenario (nunca sobre zonas bloqueadas, otras fichas, ni zonas necesarias para una condición de victoria). Cada ficha muestra un número correspondiente a un resultado del dado de ataque. Si hay 3 fichas de torbellino en el mapa, al entrar en una de ellas se lanza el dado de ataque para determinar a cuál de las otras dos te lleva (si el resultado apunta al mismo torbellino en el que acabas de entrar, repite la tirada). Cada viaje por torbellino te cuesta perder 1 unidad de tu ejército (que podrás volver a reclutar más adelante).

LOSETAS DE MAPA ELEMENTALES (introducidas en la expansión Confluencia): cada una está asociada a una escuela de magia (fuego, agua, aire o tierra). Todos los hechizos de esa escuela que lance un héroe estando en esa loseta ven aumentado su Poder en 1.

FICHAS DE MONOLITO (introducidas en la expansión Confluencia): marcan una zona que conecta con otro monolito de otra loseta, permitiendo viajar entre ambos. Al descubrir una loseta con monolito, colócala según las reglas normales y luego coloca la ficha en la zona que indique el diseño del mapa del escenario (la ficha reemplaza por completo esa zona; nunca se coloca sobre zonas bloqueadas, otras fichas, ni zonas necesarias para una condición de victoria). Hay 2 tipos: unidireccional (solo se puede viajar desde el monolito de entrada al de salida, nunca al revés) y bidireccional (se puede ir y volver entre ambos libremente). Entrar en la zona de un monolito traslada de inmediato al héroe al monolito emparejado, sin gastar PM adicional.

CATEGORÍAS DE LUGARES:
• Visitable: al visitarla, coloca un cubo negro (si ya tiene uno, se considera zona vacía).
• Señalizable: se pueden poseer/controlar con tu cubo de facción; otro jugador puede sustituir tu cubo por el suyo para tomar el control; un héroe aliado con tu cubo la trata como zona vacía.
• Revisitable: se puede visitar varias veces, recibiendo el efecto cada vez, sin colocar cubo.

LOSETAS DE MAPA DE ESCENARIO: cada escenario usa una combinación de losetas centrales y/o cercanas (con los enemigos más fuertes y mejor botín), mezcladas y bocabajo hasta descubrirse. Algunos escenarios dan una reserva individual de losetas lejanas (II-III) por jugador, añadidas al explorar. COLOCACIÓN: solo se puede añadir una loseta si queda adyacente al héroe y a al menos 2 losetas más, con un camino válido de alcance (aunque pueda haber zonas bloqueadas adyacentes); las losetas se pueden rotar al colocarlas.

LISTA DE LUGARES DEL MAPA (juego base):
• Ciudad (Señalizable): zona inicial de un jugador; capturarla da un bonificador según el escenario.
• Molino de Agua (Visitable): +3 de Oro.
• Molino (Visitable): +1 Material de Construcción.
• Jardín Místico (Visitable): elige +2 de Oro o +1 Material de Construcción.
• Santuario del Gesto Mágico (Visitable): busca(2) en hechizos.
• Árbol de la Sabiduría (Visitable): paga 3 Materiales o 10 de Oro para ganar 2 de experiencia.
• Santuario del Encantamiento Mágico (Visitable): paga 3 de Oro para buscar(2) en hechizos.
• Observatorio de Caoba (Visitable): descubre una loseta adyacente.
• Piedra de Aprendizaje (Visitable): tu héroe principal gana 1 de experiencia.
• Cabaña de la Bruja (Visitable): retira 1 carta de habilidad de tu mano, o mira la superior del mazo de habilidades y añádela a tu mano o a su descarte.
• Templo (Visitable): ficha de moral positiva.
• Estáblos (Revisitable): +1 PM adicional.
• Tumba del Guerrero (Visitable): busca(2) en artefactos dos veces, después recibe moral negativa dos veces.
• Utopía del Dragón (Señalizable): efectos según el escenario.
• Fuente de la Juventud (Visitable): el héroe gana 1 PM adicional este turno y ficha de moral positiva.
• Manantial Mágico (Visitable): mira las 3 cartas superiores de tu descarte, añade 1 a tu mano y devuelve el resto en cualquier orden.
• Mercadillo (Revisitable): intercambia recursos o retira una carta.
• Símbolo de Tesoro / Artefacto / Recursos (Visitable): lanza la cantidad indicada de dados correspondientes y resuelve uno.
• Grial (Visitable): ganas ficha de grial.
• Santuario (Revisitable): los héroes presentes no pueden ser atacados por otros héroes; ocupada por un héroe, otros no pueden entrar pero sí atravesarla.
• Zona Bloqueada: terreno inaccesible, de borde amarillo grueso.
• Obelisco (Señalizable): efectos según el escenario; no se retiran cubos enemigos al visitarlo; se convierte en zona vacía tras la primera visita de cada facción.
• Asentamiento (Señalizable): al señalizar, elige un bonificador (+5 Oro, +2 Materiales, +1 Objeto de Valor, o refuerza una unidad de bronce/plata a mitad de coste); el primero en señalizarlo también recibe el bonificador elegido o puede reforzar una unidad, además del ingreso normal. Este extra es de un solo uso.
• Mina (Señalizable): si nadie la ha capturado antes, recibes sus recursos de inmediato; produce pasivamente cada Ronda de Recursos según el tipo: Mina de Minerales 2 Materiales; Laboratorio de Alquimista/Mina de Cristal/Estanque de Gemas 1 Objeto de Valor; Mina de Oro 5 de Oro. Siempre protegida por unidades neutrales hasta que se señaliza.

LUGARES NUEVOS DE LA EXPANSIÓN MURALLAS (Rampart):
• Mina: Aserradero (Señalizable): funciona como cualquier otra mina; produce pasivamente 2 Materiales de Construcción por Ronda de Recursos.
• Fábrica de Máquinas de Guerra (Revisitable): permite a los héroes comprar cartas de Máquina de Guerra al coste indicado en la propia carta.
• Mercadillo, efecto ampliado: además de intercambiar recursos o retirar una carta, en esta expansión también permite comprar una Máquina de Guerra; si se compra aquí en vez de en la Fábrica, esa visita no permite ninguna otra acción del mercadillo y la máquina cuesta 3 de Oro más que en la Fábrica.

LUGARES NUEVOS DE LA EXPANSIÓN CALA (Cove):
• Naufragio, Barril Marino (Visitables): tira y resuelve 1 dado de recursos.
• Barco Abandonado (Visitable): busca(2) en artefactos y gana 2 Objetos de Valor.
• Pecio (Visitable): gana 2 Objetos de Valor.
• Superviviente de Naufragio (Visitable): busca(2) en artefactos.
• Sirena (Visitable): el héroe gana 1 PM adicional este turno y una ficha de moral positiva.
• Cofre Marino (Visitable): lanza 1 dado de ataque; según el resultado, busca(1) en artefactos, gana 5 de Oro, o no ganas nada.
• Restos de Naufragio (Visitable): lanza 1 dado de ataque; según el resultado, tira y resuelve 2 dados de recursos, tira y resuelve 1, o no ganas nada.
• Templo del Mar (Visitable): elige entre 10 de Oro o buscar(2) en artefactos.
• Boya (Visitable): gana una ficha de moral positiva.
• Tumba (Visitable): gana una ficha de moral negativa, 3 de Oro y busca(1) en artefactos.
• La Caja de Pandora (Visitable): lanza el número indicado de dados de recursos o de tesoro y elige uno para resolver su efecto.

LUGARES NUEVOS DE LA EXPANSIÓN CONFLUENCIA (Conflux):
• Conflujo Elemental (Visitable): por cada vivienda que tengas, roba del mazo de unidades neutrales correspondiente hasta encontrar una carta de "Elementales"; puedes reclutar una de ellas pagando su coste de reclutamiento. Vuelve a barajar el resto de cartas en sus mazos.
• Anillo del Hada (Visitable): retira 1 carta de tu mano (no puede ser de característica, habilidad inicial ni especialidad) y busca(2) en el mazo correspondiente a esa carta.
• Monolito Bidireccional, como lugar (Revisitable): al entrar, mueve a tu héroe a la ubicación del monolito de salida emparejado; puedes usar ese monolito para regresar al de entrada.
• Monolito Unidireccional, como lugar (Revisitable): al entrar, mueve a tu héroe a la ubicación del monolito de salida emparejado; no puedes usar ese monolito de salida para regresar al de entrada.

LUGARES NUEVOS DE LA EXPANSIÓN BASTIÓN (Stronghold):
• Reservas del Cíclope (Visitable): al preparar el ejército neutral que custodia este lugar, en vez de robar 1 unidad de oro, se buscan 2 cíclopes concretos (primero en el descarte del mazo de oro, luego en el propio mazo) y se añaden al ejército neutral. Si ganas el combate, lanza y resuelve 4 dados de recursos.
• Puerta Subterránea, como lugar (Revisitable): al entrar, te mueves de inmediato a la zona conectada en la loseta adyacente (ver mecánica de Losetas de Mapa Subterráneo en el capítulo 8).
• Pergamino de Hechizos, como lugar (Visitable): al entrar, roba 1 carta de Pergamino de Hechizos y colócala junto a tu carta de héroe (ver capítulo 5, Construcción del Mazo).

LUGARES NUEVOS DE LA EXPANSIÓN INFERNO:
• Ciudad Aleatoria, mecánica (Señalizable): al descubrir este lugar, toma el mazo de Cartas de Ciudad (10 cartas, una por facción); aparta las que representen facciones ya presentes en la partida, baraja el resto y roba una: a partir de ese momento, la zona queda defendida por unidades de esa facción. Salvo que se indique lo contrario, la defienden 1 manada de oro (el jugador que controla las unidades defensoras elige cuál), 2 manadas de plata y 2 unidades "unas pocas" de bronce; en el asedio no se usa la carta de Torre de Arqueros. Un héroe que entra en la zona inicia un combate de asedio contra esas unidades. Al señalizarla, si nadie la controlaba antes, da 10 de Oro de inmediato y produce pasivamente 10 de Oro cada Ronda de Recursos. Solo se puede usar esta loseta si queda al menos 1 facción sin utilizar en la partida.
• Eje Estelar (Señalizable): retira una carta de característica de tu mano y sustitúyela por una Carta de Característica Potenciada del mismo tipo. No se retiran cubos de facción enemigos al visitarlo (puede haber varios cubos en la zona); una vez visitado por una facción, pasa a ser zona vacía solo para esa facción.

LUGARES NUEVOS DE LA EXPANSIÓN FORTALEZA (Fortress):
• Erudito (Visitable): lanza 1 dado de ataque; según el resultado, roba la carta de característica elegida (o retira una de tu mano), o roba 2 cartas de habilidad y quédate 1 (descarta la otra), o roba 2 cartas de hechizo y quédate 1 (descarta la otra).

LUGARES NUEVOS DE LA EXPANSIÓN METAS AMPLIADAS (Stretch Goals):
• Universidad (Visitable): paga 6 de Oro para buscar(4) en el descarte del mazo de habilidades.
• Mercado Negro (Revisitable): mira las 4 cartas superiores del descarte de artefactos y compra una: 5 de Oro si es menor, 7 si es mayor, 10 si es reliquia.
• Mercado del Tiempo (Visitable): retira una carta de tu mano y, a cambio, busca(2) en el mazo de habilidades, hechizos o artefactos (a tu elección).
• Prisión (Visitable): ganas un héroe secundario y colocas su miniatura en esta zona; si ya tenías uno, ganas 3 de Oro en su lugar.
• Biblioteca de la Iluminación (Revisitable): paga 3 de Oro para retirar 1 carta de característica de tu mano o descarte y sustituirla por cualquier otra carta de característica; puedes hacerlo hasta 2 veces por visita.
• Fuerte de la Colina (Visitable): refuerza inmediatamente una de tus unidades («unas pocas» o «manada»); el coste de refuerzo se reduce en 3 de Oro (mínimo 0).
• Taberna (Revisitable): paga 7 de Oro para ganar un héroe secundario y obligar a un jugador enemigo a descartar 1 carta al azar de su mano.`
  },
  {
    id: "cap_09_unidades",
    title: "9. Unidades",
    category: "unidades",
    content: `Cada facción tiene acceso a 7 unidades distintas. Se empieza con la cara "unas pocas"; pagando el coste de refuerzo se da la vuelta a la cara "manada". Todos los jugadores llevan su propio mazo de unidades reclutadas. Máximo 5 unidades a la vez en el tablero de combate. Si una unidad es derrotada, se retira del mazo (recuperable volviendo a reclutarla); tras el combate, las supervivientes vuelven a tu mazo. Reclutar/reforzar requiere la ficha de población; se puede repetir tantas veces como se quiera y se tengan recursos, dando la vuelta a la ficha al terminar. Si pierdes todas tus unidades (en combate o por retirada), se sustituyen por las unidades iniciales del escenario.

Ataque: daño que hace la unidad. Puntos de Salud (PS): daño máximo antes de morir; una unidad reforzada que recibe daño igual/superior a sus PS da la vuelta a "unas pocas" y aplica el resto del daño a los nuevos PS; en "unas pocas", recibir daño igual/mayor a sus PS la retira del tablero. Tras el combate se cura todo el daño de las supervivientes (salvo que hayan pasado de "manada" a "unas pocas", lo que persiste hasta reforzarlas de nuevo).
Defensa: reduce el daño de ataques (no aplica a hechizos ni otros efectos).
Puntos de Salud: cantidad de heridas que puede soportar la unidad para ser derrotada.
Iniciativa: determina el orden de activación (mayor = antes).

HABILIDAD ESPECIAL, tipos: Activación (al activarse la unidad), Acción de Ataque (al atacar, solo en el primer ataque si ataca varias veces), Otra Acción (sustituye a la acción normal), Pasiva (se resuelve al cumplirse condiciones), Contraatacar (al contraatacar).

TIPOS DE UNIDADES:
• Terrestre: Se mueve hasta 3 espacios y ataca cuerpo a cuerpo a unidades adyacentes.
• Voladora: igual, pero ignora obstáculos de combate.
• A Distancia: ataca y se mueve hasta 1 espacio, pero no ataca tras moverse; puede atacar cualquier unidad si no tiene enemigos adyacentes, pero sufre penalización (-1, se lanzan 2 dados de ataque y se escoge el menor) si ataca a una adyacente o en retaguardia enemiga estando ella también en retaguardia; penalización adicional (-1) si el objetivo está protegido por muralla/puerta enemiga. Si al activarse ya tiene un enemigo adyacente y decide atacar, su objetivo debe ser obligatoriamente esa unidad adyacente (con la penalización correspondiente); esta misma penalización se aplica también si contraataca estando adyacente.

COSTES DE LAS UNIDADES: cada facción recluta 7 unidades. Cada carta tiene coste de reclutamiento (añadir al mazo, requiere la vivienda del nivel correspondiente) y coste de refuerzo (dar la vuelta a "manada"). Bronce requiere vivienda nivel 1, plata nivel 2, oro nivel 3 (esta última también habilita Diplomacia para reclutar azures).

UNIDADES NEUTRALES: se dividen en 4 mazos por categoría: bronce (más débiles), plata, oro, azur (más poderosas). En combate se roban del mazo correspondiente a la dificultad de la zona. Con la habilidad Diplomacia se pueden reclutar unidades neutrales (con la vivienda del nivel adecuado y pagando su coste); las azures solo se reclutan así.

PREGUNTAS FRECUENTES: 
- Si una unidad ataca varias veces, se tira 1 dado de ataque por cada ataque por separado (los efectos instantáneos solo modifican el primer ataque de esa activación; en contraataques aplica la misma lógica). 
- Las cartas que afectan a una unidad no se descartan al darle la vuelta a "unas pocas": permanecen mientras la carta de unidad siga en el tablero o hasta que el efecto concluya. 
- Cuando una habilidad permite "volver a tirar" un dado (p. ej. cruzados), es opcional, no obligatorio, y se puede repetir en cada resultado no deseado. 
- Los efectos Pasivos de las cartas de unidad SOLO funcionan durante el combate, nunca en el mapa (y solo afectan a otras unidades si el texto lo indica explícitamente).
- Un dragón que ataca en línea a 2 unidades solo recibe contraataque de la unidad adyacente a él.
- El hechizo Bendición hace ignorar el resultado del dado de ataque, por lo que NO activa habilidades que dependan de resolver ese dado (p. ej. la defensa extra de los zombis).
- La penalización de ataque de la habilidad de las libélulas se aplica solo a 1 contraataque de la unidad atacada.
- La habilidad de las momias tiene 2 efectos: al atacar, se tira el dado pero no se suma al ataque; al ser atacadas (Pasiva), el dado del atacante se gira para mostrar -1.
- Ignorar un efecto continuo (p. ej. titanes, gárgolas) significa que la unidad no se ve afectada por ninguna carta con ese símbolo, se juegue en el tablero o contra ella en concreto.
- La inmunidad de los efrits solo aplica a hechizos, no a cartas de especialidad.
- Cuando una unidad atacante sufre daño de un efecto como Escudo de Fuego o la especialidad de Rashka, ese daño se aplica en el mismo paso que su propio ataque (incluso si derrota a la defensora); después, la defensora contraataca si procede.
- Cada ataque de los wyverns coloca 1 cubo en el objetivo; al activarse una unidad con cubos, se retira 1 y se le hace 1 punto de daño (si se salta su activación, no se retira ninguno); los cubos cuentan como efecto y se pueden quitar con Curación.
- Cuando los dragones fantasma obligan a alejarse, es el jugador que controla la unidad objetivo quien decide a qué casilla vacía y no adyacente se mueve (si no hay ninguna disponible, se queda en su sitio).
- Si una unidad puede atacar dos veces (p. ej. hidras), cada uno de esos ataques se resuelve como un ataque independiente, con su propia tirada de dado.
- La habilidad especial de los enanos se activa con cualquier hechizo o carta de especialidad que los tenga como objetivo, incluso si el propio jugador que controla a los enanos es quien juega esa carta sobre ellos.
- El hechizo Rayo Disruptor sí se puede usar contra una manada de dragones negros neutrales, pero NO contra una manada de dragones negros de facción (su habilidad especial les hace ignorar cualquier efecto de hechizo, incluidos los que lance su propio controlador); contra "unas pocas" dragones negros de facción sí funciona, ya que en esa cara su habilidad solo reduce el daño de hechizos recibido, sin anularlos.
- El hechizo Alborozo permite repetir dados de ataque según el Poder empleado: con 0 de Poder, puedes repetir 1 dado de ataque, solo durante la activación en la que lanzas el hechizo; con 2 de Poder, puedes repetir cada dado de ataque una vez, durante toda esa ronda de combate; con 4 de Poder, puedes repetir cada dado de ataque una vez hasta el final del combate.
- La carta de habilidad Aprendizaje se puede jugar en el momento en que tu héroe sube de nivel.`
  },
  {
    id: "cap_10_combate",
    title: "10. Reglamento Táctico de Combate",
    category: "combate",
    content: `El combate ocurre al moverse/ser transportado a una zona no visitada con unidades neutrales, o al interactuar con otro jugador (asedio o encuentro de héroes).

PREPARACIÓN DEL COMBATE: se libra en el tablero de combate 4×5 (retaguardia y vanguardia). Duración: 1 ronda contra unidades neutrales bronce/plata/oro; hasta que un bando gane o se rinda contra azures y héroes enemigos. Si no derrotas a bronce/plata/oro en 1 ronda, puedes pagar 1 PM para prolongar 1 ronda más (repetible mientras tengas PM); si no puedes o quieres, tu héroe se retira, el combate termina y la zona no se considera visitada (las unidades neutrales se descartan y se roban nuevas al reentrar).

PREPARACIÓN DE UNIDADES NEUTRALES: coloca libremente hasta 5 de tus unidades; roba de los mazos neutrales según la tabla de dificultad y colócalas en el lado contrario. En solitario/cooperativo: retaguardia en orden decreciente de iniciativa desde la izquierda del jugador activo; vanguardia con voladoras/terrestres igual; empates de iniciativa: prioridad a mayor categoría, luego decide el jugador que controla las neutrales. En Enfrentamiento/Alianza: el jugador que terminó su turno controla las neutrales, colocando preferentemente las de distancia en retaguardia. Las unidades neutrales activas siempre atacan (o se mueven hacia) las unidades del héroe.

PREPARACIÓN HÉROE CONTRA HÉROE: igual que contra neutrales, pero el atacante coloca primero hasta 5 unidades y el defensor después, en el lado opuesto.

TERMINOLOGÍA: Activación (mover y/o atacar; marca con cubo de facción, retíralo al final de ronda); Unidad adyacente (a 1 espacio ortogonal); Ronda de combate (ciclo completo de activación de ambos bandos); Obstáculos de combate (cartas en el tablero: unidades, murallas, puertas — bloquean a no voladoras; terrestres/voladoras adyacentes pueden destruir muros/puertas; el defensor puede atravesar una puerta destruida); Dado de ataque (-1 a +1, se suma al ataque); Contraataque (1 vez por ronda por unidad, con cartas de mano, sin generar otro contraataque; marca con cubo negro); Parálisis (se salta la próxima activación y se retira la ficha; se retira también si recibe daño o ataque antes; puede contraatacar si no lo ha hecho ya); Defensa/ficha de escudo (repite el dado de ataque tras el ataque recibido; +1 defensa adicional si sale +1; se descarta al inicio de la propia activación, impidiendo otra acción de defensa esa activación).

DETALLES ADICIONALES DEL ASEDIO: si la ciudad defensora tiene ciudadela, el defensor recibe también la carta de Torre de Arqueros (además de muralla y puerta), que se coloca fuera del propio tablero de combate. Actúa como una unidad a distancia adicional del bando defensor, pero no se ve afectada por su posición en el tablero (no puede recibir ni realizar contraataques por posicionamiento) y solo puede sufrir daño de hechizos o ataques a distancia; se destruye automáticamente en cuanto caen todas las murallas y la puerta, y no hace falta derrotarla para ganar el asedio como atacante. Las unidades defensoras que estén en la misma columna y detrás de una muralla/puerta en pie reciben -1 al daño que sufran de unidades a distancia atacantes (esta bonificación no se aplica si alguna de las dos unidades implicadas está en la línea central o más allá de ella). Destruir una muralla o puerta con un ataque siempre tiene éxito automáticamente: no se tira el dado de ataque ni se pueden jugar cartas para modificarlo, y no activa las habilidades de Acción de Ataque de quien ataca.

TABLERO DE COMBATE NAVAL (introducido en la expansión Batallas Navales, componente de neopreno con un tablero de combate normal en una cara y uno naval en la otra): opcional para cualquier combate que tenga lugar en una loseta de mar. Su única diferencia respecto al tablero de combate 4×5 habitual es que elimina los 2 espacios centrales: las unidades terrestres deben rodearlos por la izquierda o la derecha; las voladoras pueden sobrevolarlos (sin poder terminar su movimiento ahí ni salir del tablero por ese hueco).

BANCOS DE CRIATURAS (introducidos en la expansión Batallas Navales): lugares de combate opcionales que convierten una zona bloqueada en visitable. Existen fichas de banco de criaturas cercanas y lejanas (identificables por los números romanos de su reverso, iguales a los de las losetas correspondientes); al descubrir una loseta cercana o lejana, puedes sustituir una de sus zonas bloqueadas por una ficha de banco de criaturas del tipo adecuado. Al entrar en esa zona, debes derrotar al ejército neutral que la custodia (reglas de combate propias, ver más abajo); tras ganar, resuelve la recompensa del lugar y márcalo con un cubo negro como cualquier zona visitable. Baraja por separado los montones de fichas cercanas y lejanas antes de la partida.

COMBATE DEL BANCO DE CRIATURAS: coloca hasta 5 de tus unidades en tu zona de despliegue; consulta qué 4 unidades custodian ese banco de criaturas concreto y tómalas del mazo de Cartas de Unidades del Banco de Criaturas (mazo bocarriba, no se baraja, ya que cada banco tiene siempre las mismas 4 unidades garantizadas), colocándolas al azar en la zona de despliegue neutral. Según la dificultad de la partida, añade Fichas de Pila a unidades al azar (máximo 1 por unidad): Fácil 1 ficha, Normal 2, Difícil 3, Imposible 4; cada ficha aumenta en 1 el Ataque, la Defensa o la Iniciativa (o en 2 la Iniciativa) de la unidad que la porta, tal como muestre la ficha, funcionando como una unidad reforzada: al recibir daño igual o mayor que sus PS, descarta 1 ficha de pila y cúrale todo el daño antes de aplicar el resto; sin ficha de pila, muere con normalidad (las cartas derrotadas de este mazo vuelven al propio mazo del banco de criaturas, no se descartan). Al ganar, obtienes la recompensa base del banco más una recompensa extra por cada unidad apilada derrotada; si la recompensa es una unidad, tómala del mazo de Unidades del Banco de Criaturas (y, si esa unidad usa una ficha de pila al entrar en un futuro combate, toma 1 al azar del montón antes de desplegarla). No hay límite de rondas para este combate, ni hace falta gastar PM para prolongarlo; tampoco tiene nivel de dificultad de zona (nunca se produce combate rápido) ni otorga experiencia.

LISTA DE BANCOS DE CRIATURAS (Batallas Navales), con sus 4 unidades guardianas y recompensa base (más un extra por cada unidad apilada derrotada):
• Naufragio (no cuenta como zona de mar): 4 espectros. Recompensa: moral negativa y 5 de Oro; extra: 2 de Oro + buscar(X) en artefactos (X = unidades apiladas derrotadas).
• Barco Abandonado (no cuenta como zona de mar): 4 elementales de agua. Recompensa: moral negativa y 7 de Oro; extra: 2 de Oro + buscar(X) en hechizos.
• Colmena de Libélulas: 4 libélulas. Recompensa: 1 unidad de libélulas (o libélulas apiladas si había 2+ unidades apiladas custodiando el banco).
• Conservatorio de Grifos: 4 grifos. Recompensa: 1 unidad de grifos (o grifos apilados en las mismas condiciones).
• Pirámide: 2 gólems de oro, 2 gólems de diamante. Recompensa: buscar(5) en hechizos; extra por unidad apilada: retira 1 carta de tu mano/descarte (hechizo, habilidad o artefacto) y busca(5) en el mazo correspondiente.
• Depósitos de Medusas: 4 medusas. Recompensa: 6 de Oro y 1 Material; extra: 3 de Oro o 1 Material por unidad apilada.
• Banco de Nagas: 4 nagas. Recompensa: 6 de Oro y 2 Materiales; extra: 6 de Oro y 1 Material por unidad apilada.
• Tesorería Enana: 4 enanos. Recompensa: 7 de Oro; extra: 3 de Oro por unidad apilada.
• Cripta: 1 esqueleto, 1 zombi, 1 espectro, 1 vampiro. Recompensa: 6 de Oro; extra: 2 de Oro por unidad apilada.
• Tesoro de los Diablillos: 4 familiares. Recompensa: 3 de Oro; extra: 1 de Oro por unidad apilada.
• Reservas del Cíclope: 4 cíclopes. Recompensa: 8 de Oro y 2 Materiales; extra: 2 de Oro y 1 Material por unidad apilada.
• Utopía del Dragón (banco de criaturas): 1 dragón negro, 1 dragón dorado, 1 dragón de cristal, 1 dragón hada. Recompensa: 40 de Oro y buscar(3) en artefactos; extra: buscar(5) en artefactos o hechizos por unidad apilada. NOTA: esta "utopía del dragón" de banco de criaturas es distinta de la utopía del dragón de una loseta central; salvo que el escenario lo indique explícitamente, no cuenta para condiciones de victoria basadas en controlar "la utopía del dragón", aunque sí puede contar para condiciones que impliquen visitar todas las zonas de una loseta.

FICHA DE DEBILIDAD (introducida en la expansión Cala): -1 o -2 de Ataque a una unidad, según la cara mostrada. Solo 1 ficha de este tipo por unidad a la vez (si gana otra, el jugador que la controla elige cuál conservar).

FICHA DE CAMPO DE FUERZA (introducida en la expansión Contenido Adicional): marca el efecto del hechizo Campo de Fuerza. Representa un obstáculo que solo las unidades voladoras pueden atravesar. En el tablero de combate 4×5 se coloca 1 ficha en un espacio vacío; en el tablero de la expansión Campo de Batalla se colocan 2 fichas en dos espacios vacíos adyacentes entre sí.

HECHIZO DE MINA (introducido en la expansión Contenido Adicional, variante del hechizo Arenas Movedizas): según el Poder usado, toma 2, 4 o 6 fichas de mina (mitad vacías, mitad con el símbolo de 2 de daño); barájalas bocabajo y colócalas en espacios vacíos del tablero de combate, 1 por espacio (si faltan espacios, descarta las sobrantes; siempre puedes mirar tus propias fichas colocadas). Al entrar una unidad en un espacio con ficha, se revela: si está vacía, continúa su movimiento; si muestra el símbolo de daño, sufre 2 de daño y, si sigue en el tablero, continúa su activación con normalidad. Dos fichas de distintos jugadores pueden ocupar el mismo espacio.

FICHA DE CLONACIÓN (introducida en la expansión Cala, ligada al hechizo Clonación): al lanzar el hechizo, elige una unidad aliada y un espacio vacío adyacente a ella; coloca una ficha de clonación sobre la unidad original y otra en ese espacio, representando el clon. El clon comparte estadísticas y habilidad especial con el original, pero su Ataque es solo 1 y su Defensa es 0 (esta Defensa no se puede aumentar con ningún efecto); si el clon es atacado o recibe aunque sea 1 punto de daño de un hechizo, es destruido. El clon no hereda ningún efecto que se haya jugado sobre la unidad original después de clonarla. Si la unidad original es retirada del tablero, su clon también se retira.

MECÁNICAS ADICIONALES DE INVOCACIÓN Y DAÑO ELEMENTAL (expansión Confluencia):
• Cartas de Unidades Invocadas: conjunto de 8 cartas que forman un mazo propio, junto a los mazos de unidades neutrales. Cada vez que uses un hechizo de Invocación, toma la carta de unidad específica que indique de este mazo.
• Hechizos de Invocación: añaden una unidad al tablero durante el combate; según el Poder empleado, invocan la versión "unas pocas" o "manada". La unidad invocada se coloca en un espacio vacío a tu elección y permanece bajo tu mando hasta morir o hasta que acabe el combate (lo que ocurra antes); a diferencia de la Invocación estándar, esta unidad NO se añade a tu mazo tras el combate.
• Daño Elemental: algunas unidades tienen la habilidad "esta unidad inflige daño elemental": realizan un ataque normal, pero el daño resultante ignora la Defensa de la unidad objetivo, igual que el daño de un hechizo. No se ve afectado por habilidades que reducen el daño de hechizos. La habilidad "Inmune" permite a una unidad ignorar los efectos de una fuente concreta (por ejemplo, una escuela de magia).
• Fichas de Muro de Fuego: sustituyen a las cartas de especialidad de Luna quien juega en el tablero de la expansión Campo de Batalla; la carta de especialidad se deja aparte como recordatorio y, si se retira o descarta, también se descarta la ficha correspondiente.
• Fichas de Invocación: marcan qué unidades del tablero fueron invocadas (se colocan sobre su carta y se descartan junto a la unidad al final del combate); también se pueden usar en el tablero de Campo de Batalla en vez de miniaturas.

FICHAS Y HECHIZO NUEVOS DE LA EXPANSIÓN BASTIÓN:
• Fichas de Tiempo: marcan la duración restante de un efecto continuo. Colócalas sobre la carta/ficha que da el efecto y reduce su valor en 1 al final de cada ronda; cuando no quede ninguna, el efecto termina y se descarta esa carta/ficha.
• Ficha de Ataque: +1 o +2 de Ataque a una unidad (según su cara); solo 1 por unidad a la vez (si gana otra, el jugador que la controla elige cuál conservar).
• Ficha de Corrosión: -1 de Defensa a una unidad (mínimo 0); solo 1 por unidad a la vez (descarta la segunda si gana otra); permanece hasta el final del combate salvo que un hechizo u otro efecto la retire antes.
• Hechizo Arenas Movedizas: según el Poder usado, toma 2, 4 o 6 fichas de un mismo conjunto (mitad vacías, mitad con el símbolo de arenas movedizas); barájalas bocabajo y colócalas en espacios vacíos del tablero de combate (si faltan espacios, descarta las sobrantes; siempre puedes mirar tus propias fichas ya colocadas). Al entrar una unidad en un espacio con ficha, se revela: si está vacía, continúa su movimiento; si muestra el símbolo, su movimiento y activación terminan ahí. Dos fichas de distintos jugadores sí pueden ocupar el mismo espacio.

USO DE CARTAS EN COMBATE: máximo 1 hechizo por ronda de combate. Continuo/Activación: solo durante la activación de tus unidades, antes de atacar. Instantáneo: en cualquier momento salvo entre la tirada de ataque y su resolución (salvo excepción); acaban antes de la próxima acción de esa unidad en la ronda. Continuo: hasta el final del combate o hasta agotarse; se descarta al concluir.

NOTA: la expansión Campo de Batalla modifica algunas de estas reglas de combate (movimiento por iniciativa, ficha de iniciativa para desempates, límite de Experto por ronda en vez de por combate) cuando se juega con su tablero de casillas; ver capítulo "Expansión Campo de Batalla: Uso en Partidas Normales".

ORDEN DE LAS RONDAS DE COMBATE:
1. Activan las unidades en orden decreciente de iniciativa (empates: activa primero el atacante); solo 1 activación por ronda.
2. La unidad mueve según su tipo; el jugador decide atacar o defenderse (defender termina la activación y da ficha de defensa).
3. Antes de atacar, se pueden usar efectos continuos/de activación de la mano.
4. Antes de la tirada de ataque, ambos bandos pueden jugar efectos instantáneos; se lanza el dado de ataque y se aplica junto a modificadores (p. ej. penalizadores).
5. Se resuelve el daño: ataque total menos defensa total; si la defensa es mayor o igual, no hay daño; se coloca ficha de daño por punto recibido, dando la vuelta a la carta si corresponde o retirándola.
6. Si la defensora sobrevive, es adyacente y no ha contraatacado ya esta ronda, contraataca.
7. Se repite desde el paso 1 hasta que todas se hayan activado.
8. Final de la ronda de combate.
Si varias unidades empatan en iniciativa, se activa primero la del atacante y después la del defensor (repitiendo si es necesario).

EXPERIENCIA DE COMBATE: derrotar un héroe enemigo o unidades neutrales otorga experiencia según la dificultad relativa: inferior al nivel del héroe = 0; igual = 1; mayor = 2; encuentros azur = directamente nivel 7 de experiencia. Luchar contra un héroe secundario o un ejército transportado a ciudad/asentamiento no da experiencia.

COMBATE RÁPIDO: si el nivel de tu héroe supera en al menos 1 la dificultad de la zona, las unidades neutrales huyen y superas el encuentro sin combatir.

FINAL DEL COMBATE, 3 formas: rendirse (solo contra otro jugador, antes de mover/atacar con la unidad activa), retirarse (solo contra neutrales no azur, no cuenta como derrota, recuperas tus unidades y vuelves a la última zona visitada), o que un bando pierda todas sus unidades. Rendirse ante un héroe enemigo cuesta 10 de Oro y coloca a tu héroe en cualquier ciudad/asentamiento propio (no se puede rendir/retirar defendiendo una ciudad). Si tu héroe principal es derrotado, entregas 5 de Oro y recibes ficha de moral negativa, colocando a tu héroe en cualquier ciudad/asentamiento propio.

PREGUNTAS FRECUENTES:
- Si una carta pide elegir varios objetivos, decide quien la juega, siempre respetando su texto; la palabra "hasta" hace la elección opcional en vez de obligatoria.
- Sí existe "fuego amigo": hechizos/habilidades de área (Anillo Gélido, Inferno, Bola de Fuego, liches, dragones dorados...) pueden dañar a tus propias unidades si son las únicas adyacentes.
- Las cartas con símbolo de efecto instantáneo se pueden jugar tras un ataque y antes del contraataque, y también durante la activación de una unidad enemiga (siempre antes de la tirada de ataque).
- Puedes reclutar/reforzar unidades justo antes de un combate contra otro jugador si aún no usaste la ficha de población esa ronda.
- Durante un asedio, las cartas de muralla/puerta van en la fila central sombreada del tablero de combate; el defensor elige en cuál de esas 4 casillas coloca la puerta.
- El combate rápido de un héroe secundario se calcula según el NIVEL DEL HÉROE PRINCIPAL.
- El hechizo Resurrección debe lanzarse justo cuando los PS de una unidad llegan a 0; si esto ocurre durante un ataque, la unidad resucitada no contraataca (el ataque original queda anulado).
- Los hechizos ignoran la Defensa por completo: aplican una cantidad fija de daño y no se ven afectados por el dado de ataque (que solo se tira para ataques de unidades).
- Las habilidades que "ignoran contraataques" se aplican a TODOS los ataques de esa unidad en la ronda.
- La Tienda de Auxilio se puede usar antes de que la unidad enemiga contraataque, hasta 1 vez por ronda (debe usarse antes del ataque, o la unidad tendrá que sobrevivir primero).
- Cualquier daño de al menos 1 punto (incluido el de hechizos) retira la ficha de parálisis de una unidad, aunque provenga de un aliado; puedes usar hechizos sobre tus propias unidades para quitarles la parálisis.
- La habilidad especial de los liches funciona contra cualquier unidad adyacente cada vez que atacan.
- No se pueden llevar a cabo acciones de defensa/movimiento controlando unidades neutrales: siempre deben atacar si hay una unidad a su alcance, o acercarse lo máximo posible si no es posible atacar.
- El hechizo Retirar Obstáculo no puede retirar unidades, pero sí murallas, puertas y muros de fuego.
- El obstáculo del hechizo Muro de Fuego, a diferencia de otros, no impide la entrada de una unidad en esa zona.
- El hechizo Terremoto solo afecta a obstáculos de muralla/puerta.
- "Adyacente" en el tablero de combate 4×5 es solo ortogonal (no diagonal); en el tablero de la expansión Campo de Batalla sí cuentan como adyacentes las casillas que comparten un borde.
- Si el hechizo Furia Asesina afecta a tu unidad, eres tú quien elige el objetivo de su ataque siguiendo las instrucciones de la carta (aunque eso te obligue a atacar a una unidad propia).
- Si pierdes todas tus unidades contra unidades neutrales, tu héroe se mueve a una ciudad/asentamiento bajo tu control y recibe las unidades iniciales del escenario.
- Si un combate contra unidades neutrales termina sin que ningún bando pierda todas sus unidades y no pagas PM para prolongarlo, tu héroe se retira automáticamente a la última zona visitada, retirando tus unidades del tablero; al reentrar la zona se roban unidades neutrales nuevas. Las unidades con ficha de parálisis SÍ contraatacan si reciben al menos 1 punto de daño, no han contraatacado ya esa ronda y el atacante está adyacente (si el daño viene de una unidad a distancia o un hechizo, solo se retira la ficha, sin contraataque).
- El máximo de unidades por bando en el tablero de combate es 5; no es obligatorio usarlas todas.
- La ficha de defensa se descarta al comienzo de la propia activación de la unidad (impidiendo otra acción de defensa esa activación); si la unidad recibe un ataque mientras la tiene, se tira otro dado de ataque tras el del atacante y un +1 añade +1 de defensa.
- En empates de iniciativa, las unidades del atacante siempre se activan primero (en todos los empates, no solo el primero); el resto alternan; esto aplica solo sin la expansión Campo de Batalla, que amplía estas reglas.
- Una unidad a distancia con un enemigo adyacente solo puede atacarlo a él o moverse, no a cualquier otro objetivo del tablero.
- Si retiras la ficha de parálisis de tu unidad justo antes de que se active, se activa con normalidad.`
  },
  {
    id: "cap_11_jugador_vs_ia",
    title: "11. Jugador contra IA",
    category: "modos",
    content: `El modo Campaña usa héroes de IA con 2 mazos: mazo de IA (parecido a habilidad/artefacto, variable según dificultad) y mazo de hechizos.

REGLAS DE COMBATE DE LA IA: 
- Mismas reglas de iniciativa (atacante con prioridad en empates); cada activación de la IA roba 1 carta de su mazo de IA y resuelve sus efectos. 
- Unidades Terrestres y Voladoras atacan preferentemente a la misma categoría; si no es posible, la más cercana a su alcance, priorizando categorías más bajas si no alcanzan la propia. 
- Unidades a distancia priorizan: otras a distancia de igual categoría → menor categoría → mayor categoría → si no hay a distancia, terrestres/voladoras de igual categoría, la más cercana (el jugador decide entre empates).

REGLAS DE MOVIMIENTO DE LA IA EN EL MAPA (con sus 3 PM, en orden): 
1) si un héroe del jugador está en su loseta, gasta todo el movimiento acercándose para combatir; 
2) si hay minas/asentamientos señalizables en su loseta, se acerca y los señaliza; 
3) si ninguna es posible, se mueve hacia la ciudad del jugador; 
4) repite hasta agotar PM. La IA gana automáticamente cualquier combate contra unidades neutrales; su comportamiento varía según el escenario. Los héroes enemigos se colocan siempre en la ciudad de su facción.

PREPARACIÓN DE UNA CAMPAÑA (Libro de Misiones): cada escenario de campaña se divide en una sección de mecánicas de juego y otra de historia (textos narrativos que se leen en momentos concretos). Antes de empezar: prepara las cartas de unidad de cada héroe enemigo indicadas en la preparación del escenario, para poder colocarlas en el tablero de combate como unidades neutrales cuando llegue el encuentro; crea el mazo de la IA y el mazo de hechizos del escenario, dejando espacio para sus descartes; coloca boca arriba, cerca de esos mazos, las cartas de habilidad especiales que indique el escenario. Al comienzo de cada escenario de campaña, tus ingresos se establecen en «10» de Oro/«0» Materiales/«0» Objetos de Valor (salvo que las reglas especiales del escenario los cambien). El mazo de la IA se compone de 3 tipos de cartas: de magia, de fuerza y de habilidad. Cuando una unidad enemiga se activa, se roba 1 carta del mazo de la IA y se resuelve; si el héroe de la IA lanza un hechizo, se roba del mazo de hechizos; si usa la habilidad especial asignada en la preparación, esa carta NO se descarta (a diferencia de las reglas básicas), pudiendo volver a usarla cuando el mazo de la IA lo indique de nuevo. Todos los eventos contrarreloj del escenario se marcan de antemano con un cubo negro en sus casillas del marcador de rondas; al alcanzar esa ronda, se resuelve el efecto y se retira el cubo. AL ACABAR CADA ESCENARIO DE CAMPAÑA: extrae de tu mazo todas las cartas de característica y la carta de especialidad de nivel 1 (se conservan aparte); retira el resto de cartas de especialidad de la partida; de las cartas restantes de tu mazo, elige 5 y añádelas a las que apartaste — ese conjunto será tu mazo inicial del siguiente escenario; tu héroe vuelve a nivel 1 de experiencia. Anota la lista de cartas de tu mazo inicial; si pierdes el escenario, se reinicia con esa misma lista para reintentarlo.

CAMBIAR DE HÉROE ENTRE MISIONES DE UNA CAMPAÑA: aunque cada campaña recomienda un héroe protagonista (para el que está equilibrada), puedes jugarla con cualquier otro héroe de la misma facción. Si cambias de héroe entre misiones (o al repetir una misión con otro héroe), sustituye todas las cartas de característica y la carta de especialidad de nivel 1 del héroe anterior por las del nuevo héroe. Si el héroe anterior tenía Cartas de Característica Potenciadas (expansión Inferno), puedes retirar cartas de característica normales del mismo tipo del mazo del nuevo héroe y sustituirlas por esas cartas potenciadas. Puedes sustituir cualquier carta del grupo de "5 cartas adicionales no-especialidad" por la habilidad inicial del nuevo héroe (si no tienes ya una copia) y por su Flecha Mágica; nunca puedes tener más de 4 copias de Flecha Mágica en el mazo, aunque el héroe anterior tuviera 5.

PRECISIONES ADICIONALES DE CAMPAÑA (aportadas por la expansión Bastión): no puedes rendirte ante un héroe de la IA. Si la carta de habilidad de un héroe de IA exige robar una carta, roba otra del mazo de IA y resuelve su efecto. Las cartas de IA que aumentan la Defensa (o activan otra que lo haga) permanecen sobre la unidad hasta usarse para defenderse de un ataque, igual que haría un jugador real. El bonificador de preparación de un escenario de campaña sustituye al bonificador inicial de dificultad estándar. Puedes jugar la campaña con cualquier héroe de la misma facción que el recomendado, no solo con el indicado. Si a un ejército de IA no se le asigna explícitamente un mazo de hechizos o habilidad propios, se sobreentiende que comparte el mazo con otros héroes de IA del escenario (barajando de nuevo tras cada combate). Si el mazo de hechizos de IA se vacía a mitad de combate, baraja su descarte para seguir robando; al acabar el combate, se baraja todo junto de nuevo. Si te faltan copias de una carta pedida en la preparación (porque ya está en tu mazo inicial), usa otra equivalente en su lugar; si varios héroes de IA comparten una única copia de una unidad, prepara el resto sin ella y añádesela al ejército de IA justo cuando ese combate se activa. Si la preparación asigna a un héroe de IA una carta de habilidad que tu propio héroe ya tiene, retírala de tu mazo y busca(3) en el mazo de habilidades para compensarte; si le asigna un hechizo no disponible, sustitúyelo por Flecha Mágica; si a tu propio héroe le asignan un hechizo/artefacto/habilidad no disponible, busca(3) en el mazo correspondiente para conseguir otro.

IA EN ASEDIO — TORRE DE ARQUEROS, MURALLAS Y PUERTA: la Torre de Arqueros de la IA se trata como una unidad a distancia de nivel oro a efectos de prioridad de objetivos (prioriza otras a distancia de su mismo nivel; si no hay, a distancia de nivel inferior en orden descendente; si tampoco, a distancia de nivel superior en orden ascendente; si no hay ninguna a distancia, sigue el mismo orden con terrestres/voladoras; en empate, ataca a la más cerca de morir —menor diferencia entre sus PS y el daño ya recibido—; si sigue habiendo empate, decide el jugador). Si la preparación no especifica cómo organizar muros y puerta de la IA, colócalos como lo haría un jugador humano: la puerta frente a la unidad terrestre de mayor Iniciativa. Por defecto, las unidades de IA no atacan los muros (prefieren volar sobre ellos o pasar por la puerta); si no es posible ninguna de las dos cosas, se defienden en su lugar.

REGLAS PARA HECHIZOS COMPLEJOS DE LA IA (aportadas por la expansión Bastión, para hechizos cuyo uso estándar por la IA no está claro): Hechizos de área (Bola de Fuego, Rayo en Cadena): la IA ataca al grupo de 1-2 unidades enemigas adyacentes entre sí que tenga más unidades de nivel alto (en empate, al más cerca de ser destruido; si aun así hay empate, decide el jugador); si no hay grupos adyacentes de unidades del jugador, ataca a unidades no adyacentes a las suyas propias; si tampoco es posible, no lanza el hechizo (se descarta esa carta de IA al fondo del mazo y el hechizo se baraja de nuevo en el mazo de hechizos enemigo). Hechizos de defensa instantánea (Piel de Piedra): se aparta la carta y se coloca una ficha de defensa en la unidad de IA con mayor Defensa (en empate, prioriza mayor nivel, luego mayor daño ya recibido), permaneciendo así hasta que se resuelva esa defensa. Hechizos de curación (Curación): retira el daño de la unidad de IA con más fichas de daño, empezando por el nivel más alto; si ninguna tiene daño, se descarta igual que arriba. Mejoras de una sola ronda (Escudo de Fuego): si más de la mitad de las unidades del mismo nivel o superior ya se activaron esta ronda, la IA pospone el hechizo y lo juega en la primera activación de la ronda siguiente (sin robar carta de IA esa vez). Hechizos que debilitan el ataque (Debilidad): la IA solo lo lanza sobre una unidad enemiga que vaya a contraatacar tras el ataque activo; si no va a haber contraataque, se descarta igual que en los casos anteriores.

PREGUNTAS FRECUENTES:
- Si el héroe de la IA no puede completar ninguna de sus prioridades de movimiento (por ejemplo, por zonas bloqueadas sin ruta), permanece donde está ese turno.
- Cuando la IA roba una carta de su propio mazo de IA/hechizos y no puede jugarla por cualquier motivo (por ejemplo, un efecto que no aplica a esa situación), simplemente se descarta sin efecto.
- Los héroes de la IA no acumulan cartas en mano entre combates: su mazo de IA se resuelve unidad por activación, no como una mano tradicional.`
  },
  {
    id: "cap_12_opciones_juego",
    title: "12. Opciones de Juego, Dificultad, Condiciones de Victoria y Comercio",
    category: "general",
    content: `TABLA DE REGLAS OPCIONALES (modifican la dificultad):
Aumenta la dificultad: las ciudades señalizadas no producen recursos (aunque se pueden usar sus edificios); no se puede volver a tirar dados; dados de tesoro/recursos solo dan 1 recurso; sin bonificadores iniciales.
Disminuye la dificultad: empiezas con un héroe secundario; cada unidad hace al menos 1 punto de daño en un ataque; todas las minas/asentamientos dan el doble de ingresos; puedes intercambiar recursos en cualquier momento y el mercadillo se vuelve visitable dando 1 carta de artefacto.
Reduce: prolongar el combate ya no cuesta PM.
Variantes: el dado de ataque deja de afectar al daño (pero sigue interactuando con habilidades); se roba también una carta de anuncio astrológico al inicio de rondas de recursos; no se roban cartas de anuncio astrológico; se retiran los cubos negros de zonas visitables en las rondas 4, 8 y 12; las cartas que irían a tu mano van directas a tu descarte.

DIFICULTAD: se elige en la preparación; afecta a bonificadores iniciales y a la cantidad de unidades neutrales al explorar (baraja el mazo de artefactos tras aplicar la bonificación).
• Fácil: lanza 2 dados de recursos y suma ambos resultados a tu reserva, o busca(2) dos veces en artefactos.
• Normal: lanza 2 dados de recursos y suma el resultado elegido, o busca(2) en artefactos.
• Difícil: lanza 1 dado de recursos y suma el resultado, o revela cartas del mazo de artefactos hasta encontrar 1 artefacto menor.
• Imposible: sin bonificadores iniciales.

TABLA DEL NIVEL DE DIFICULTAD DE LAS ZONAS (unidades neutrales por nivel de zona I-VII y dificultad Fácil/Normal/Difícil/Imposible; ★=bronce, ☆=plata, dorada=oro, azul=azur):
Nivel I: 1★ / 1★ / 2★ / 3★.
Nivel II: 2★ / 2★ / 3★ / 2★+1☆.
Nivel III: 1★+1☆ / 2★+1☆ / 1★+2☆ / 3☆.
Nivel IV: 2★+1☆ / 1★+2☆ / 3☆ / 2☆+1oro.
Nivel V: 2★+1☆+1oro / 1★+2☆+1oro / 2☆+2oro / 1☆+3oro.
Nivel VI: 2★+2☆+1oro / 1★+2☆+2oro / 2☆+3oro / 1☆+4oro.
Nivel VII: 1azur / 2azur / 2azur+1oro / 2azur+2oro.

CONDICIONES DE VICTORIA:
- La más habitual es derrotar a todas las facciones enemigas, capturando todas sus ciudades y asentamientos.
- Salvo que se indique lo contrario, un jugador sin ciudad ni asentamientos durante 3 rondas completas queda eliminado (también si su héroe principal es derrotado defendiendo una ciudad asediada sin tener más ciudades/asentamientos); un jugador eliminado puede seguir controlando unidades neutrales en combates de otros.
- Algunos escenarios exigen también recuperar cubos de facción enemigos (derrotar héroes o capturar ciudades iniciales).
- Si eres el único jugador restante, ganas la partida.
- En una partida a 3 o más jugadores, también ganas si consigues un cubo de facción de cada uno de los oponentes que sigan en juego (se consigue derrotando a cualquiera de sus héroes o capturando la ciudad de su facción).
- Salvo que se indique lo contrario, al cumplirse una condición de victoria la partida acaba al final de esa ronda.

TABLA DE COMERCIO (en un mercadillo, o retirando 1 carta de mano para ganar 1 de Oro; las cartas de especialidad, característica, habilidad inicial y Flecha Mágica no se pueden retirar así):
• Vender Oro: 6 por 1 Objeto de Valor; 2 por 1 Material de Construcción.
• Vender Objeto de Valor: 1 por 3 de Oro; 1 por 2 Materiales de Construcción.
• Vender Material de Construcción: 1 por 1 de Oro; 3 por 1 Objeto de Valor.
• Vender Pergamino de Hechizos (expansión Bastión): 2 de Oro por cada hechizo que contenga la carta; los hechizos vendidos se retiran de la partida y la carta de pergamino vuelve a su propio mazo.
Los jugadores aliados pueden comerciar cartas de artefacto/hechizo entre sí, en cualquier combinación de ambos tipos, siempre que den y reciban la misma cantidad total de cartas (con héroes en zonas adyacentes; solo cartas de la mano). En escenarios de Alianza, los aliados también pueden intercambiar recursos libremente en cualquier momento de su turno, salvo durante el combate. En escenarios Cooperativos, los jugadores pueden darse recursos entre sí un número ilimitado de veces durante la misma visita a un mercadillo.`
  },
  {
    id: "cap_13_ayuda_de_juego",
    title: "13. Ayuda de Juego: Leyenda de Símbolos",
    category: "faq",
    content: `AYUDA DE JUEGO Y SIMBOLOGÍA COMPLETA DEL MANUAL:

ACCIÓN DE CARTA:
- Instantáneo (se resuelve de inmediato).
- Activación (se juega durante la activación de una unidad).
- de Mapa (no se puede usar en combate).
- Continuo (dura hasta agotarse o hasta el próximo turno de quien lo jugó, lo primero que ocurra).
- Permanente (permanece activo hasta que se descarte o se juegue otra carta permanente).

ACCIÓN DE UNIDAD: 
- Activación (al activarse la unidad). 
- Acción de Ataque (al atacar, solo en el primer ataque si hay varios). 
- Otra Acción (sustituye la acción normal). 
- Pasiva (al cumplirse condiciones).
- Contraatacar (al contraatacar).

ACCIÓN DE MORAL: 
- Positiva → roba 1 carta, o vuelve a lanzar 1 dado, o descarta y roba la misma cantidad de cartas.
- Negativa → si ya tenías ficha negativa, descartas toda tu mano al final del turno; si tu héroe con moral negativa recibe moral positiva, descartas la ficha negativa en vez de recibir la positiva.
- Necrópolis ignora todos los efectos de moral.

SÍMBOLOS EN EL MAPA:
- números I-VII indican la dificultad de la zona (nivel de unidades neutrales).
- icono de Cofre = lanza un dado de tesoro y recibe el bonificador indicado.
- icono de Pico/Pala = lanza un dado de recursos y recibe lo indicado.
- Estrella (Experiencia) = gana medio nivel de experiencia.
- icono de Libro = busca(2) en el mazo de hechizos.
- icono de Ankh/Artefacto = busca(2) en el mazo de artefactos.
- Ala blanca = gana moral positiva.
- Ala negra = gana moral negativa.
- Herradura = gana 1 PM adicional.
- Interrogación = lugar con efecto especial único (ver su entrada en la Lista de Lugares del Mapa).
- Un número delante de un símbolo indica repetir la acción esa cantidad de veces (p. ej. "2 dados de tesoro → resuelve 1" = lanza 2 y elige uno).`
  },

  // =========================================================================
  // EXPANSIÓN MURALLAS (RAMPART) Y LIBRO DE MISIONES
  // =========================================================================
  {
    id: "cap_01_exp_murallas_componentes",
    title: "Expansión Murallas: 1. Componentes",
    category: "componentes",
    content: `La expansión Murallas añade la facción Murallas (elfos y enanos de AvLee) e introduce las cartas de Máquina de Guerra, las Cartas de Efecto Permanente (ver capítulo 5, Construcción del Mazo) y nuevos lugares del mapa (ver capítulo 8, Elementos del Mapa).

COMPONENTES DE LA EXPANSIÓN:
	LOSETAS Y TABLEROS:
	- 7 Losetas de mapa (1 inicial [I], 3 lejanas [II-III], 2 cercanas [IV-V], 1 central [VI-VII])
	- 1 Tablero de ciudad de la facción Murallas (Rampart)
	- 1 Libro de misiones de Murallas (28 páginas)
	- 1 Ayuda de juego
	
	MINIATURAS Y CARTAS:
	- 2 Miniaturas de héroe (Gem y Gelu)
	- 7 Miniaturas de unidad (Centauros, Enanos, Elfos, Pegasos, Dendroides, Unicornios, Dragones Dorados)
	- 1 Carta de héroe a doble cara (Gem / Gelu)
	- 7 Cartas de unidad de Murallas (a doble cara)
	- 7 Losetas de edificio de ciudad de Murallas
	- 2 Cartas de unidad neutral
	- 3 Cartas de anuncio astrológico
	- 8 Cartas de artefacto
	- 20 Cartas de hechizo
	- 4 Cartas de habilidad
	- 6 Cartas de especialidad de héroe
	- 12 Cartas de Máquina de Guerra (Balista, Catapulta, Carro de Municiones, Tienda de Primeros Auxilios, etc.)
	- 7 Cartas de característica (1 Ataque, 3 Defensa, 1 Poder, 2 Conocimiento)
	
	FICHAS Y RECURSOS:
	- 9 Fichas de oro (3 de "1", 3 de "3", 3 de "10")
	- 6 Fichas de materiales de construcción (3 de "1", 3 de "3")
	- 4 Fichas de objetos de valor (3 de "1", 1 de "3")
	- 1 Ficha de construcción
	- 1 Ficha de población
	- 1 Ficha de libro de hechizos
	- 1 Ficha de moral
	- 30 cubos acrílicos (10 negros, 20 verdes).`
  },
  {
    id: "cap_02_exp_murallas_mecanicas",
    title: "Expansión Murallas: 2. Efectos Permanentes, Máquinas de Guerra y Mapa",
    category: "general",
    content: `NUEVAS MECÁNICAS E INTRODUCCIONES DE LA EXPANSIÓN:

1. CARTAS DE EFECTO PERMANENTE (Icono Infinito ∞):
   - Otorgan un bonificador pasivo o condición continua.
   - Al jugarse, la carta se coloca frente al jugador y permanece activa hasta descartarse o sustituirse.
   - Cada héroe solo puede tener 1 carta de efecto permanente activa a la vez.
   - Permiten usar efectos básicos o avanzados (según el nivel del héroe), pero no se apilan entre sí.

2. MÁQUINAS DE GUERRA (Balista, Catapulta, Carro de Municiones, Tienda de Primeros Auxilios):
   - Se compran en la Fábrica de Máquinas de Guerra o en el Mercadillo (más caro, 3-4 de Oro extra, y consume toda la visita al mercadillo).
   - Comprar una máquina de guerra en un Mercadillo impide realizar otras acciones en esa visita y cuesta 3 de oro adicionales sobre su precio de fábrica.
   - El mazo de máquinas de guerra queda al alcance de todos los jugadores.
   - Cada carta indica su nombre, efecto, coste en la fábrica y coste en el mercadillo.
   
3. NUEVAS LOCALIZACIONES DEL MAPA:
   - Fábrica de Máquinas de Guerra (Re-visitable): Permite comprar máquinas de guerra.
   - Aserradero (Mina - Señalizable): Produce pasivamente 2 Materiales de Construcción por ronda de recursos.`
  },
  {
    id: "cap_03_exp_murallas_alianza",
    title: "Expansión Murallas: 3. Modo Alianza",
    category: "modos",
    content: `MODO ALIANZA — REGLAS ADICIONALES (requiere esta expansión y 4 jugadores, formando una alianza de 2 contra 2):
• Una alianza es un equipo de 2 jugadores formado al inicio de la partida, que dura el resto del escenario.
• Cada jugador elige su facción al comienzo del escenario.
• Los jugadores aliados pueden intercambiarse artefactos si sus héroes están en zonas adyacentes.
• Los recursos se intercambian libremente entre aliados durante el turno de cualquiera de ellos, sin necesitar adyacencia.
• Un jugador de una alianza no puede señalizar un lugar que ya haya señalizado su compañero de equipo.

ACABAR UN ESCENARIO: los héroes aliados comparten condiciones de victoria y derrota; no existe un paso adicional para comparar quién contribuyó más a la victoria.`
  },
  {
    id: "cap_04_exp_murallas_escenarios",
    title: "Expansión Murallas: 4. Escenarios",
    category: "escenario",
    content: `ESCENARIOS:
ESCENARIO DE ALIANZA — "El Desafío" (4 jugadores, dura 11-14 rondas): el rey ha lanzado un desafío para construir el grial en la capital Osha en 6 meses. 
- Recursos iniciales 16 de Oro/4 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0».
- Cada jugador empieza con vivienda de bronce y 2 manadas de bronce del menor coste.
- Al visitar un obelisco, lanza 2 dados de tesoro y resuelve 1.
- Una alianza no puede visitar la zona del grial hasta visitar al menos 4 obeliscos diferentes o hasta que algún héroe ya haya cogido la ficha; conseguirla cuesta 2 PM en su zona; la ficha aumenta en 5 los ingresos de Oro.
- Victoria: llevar la ficha de grial a la ciudad de tu facción. Si nadie la consigue al final de la ronda 11, todos pierden; si se consigue, hay hasta la ronda 14 para llevarla a la ciudad.

ESCENARIO DE ENFRENTAMIENTO — "Oro Enano" (2-3 jugadores, dura 10 rondas): tras el hallazgo de una veta de 75.000 monedas, los señores locales organizan expediciones.
- Recursos iniciales 15 de Oro/3 Materiales/1 Objeto de Valor, ingresos «10»/«2»/«0».
- Cada jugador empieza con 1 manada de bronce del mayor coste.
- Prohibido usar cartas que den recursos (si se roban, se muestran, descartan y se roba otra).
- Solo los héroes principales pueden coger la ficha de grial, que da 15 de Oro inmediatos y +5 de ingresos de Oro al llegar a la ciudad.
- Victoria: tener 75 de Oro al final de una ronda (empate = gana quien tenga más). Si nadie lo logra antes del final de la ronda 10, todos pierden.`
  },
  {
    id: "cap_05_exp_murallas_campana",
    title: "Expansión Murallas: 5. Campaña en Solitario — La Venganza se Sirve Fría",
    category: "campaña",
    content: `Campaña de 3 misiones para la facción Murallas contra héroes de IA de Necrópolis (referencia de preparación y condiciones; el contenido narrativo de cada misión está en el Libro de Misiones físico).

MISIÓN 1 — "En Busca de un Asesino" (11 rondas): Asesinato de lord Falorel (descubierto como un señor vampiro infiltrado de Deyja) y la invasión de Soledare.
- Héroe Principal: Gelu.
- Recursos iniciales: 14 de Oro/4 Materiales, +5 de producción de Oro.
- Edificios iniciales: vivienda de bronce, vivienda de plata, ciudadela.
- Bonificador a elegir: +2 Objetos de Valor, +4 Materiales, o carta de Máquina de Guerra "Carro de Municiones".
- Héroes de IA (Necrópolis): Galthran y Aislinn, más el ejército de la ciudad.
- Evento Ronda 7: La dificultad de todos los combates del mapa aumenta en +1.
- Victoria: derrotar a todos los ejércitos enemigos. 
- Derrota: perder tu ciudad, perder un combate, o no ganar antes del final de la ronda 11.

MISIÓN 2 — "Paz Definitiva" (13 rondas): La druida Gem investiga el asesinato de lord Fayette, resucitado por los nigromantes como un Caballero del Terror.
- Héroe Principal: Gem.
- Recursos iniciales: 12 de Oro/4 Materiales/2 Objetos de Valor, +5 de producción de Oro.
- Mismos edificios iniciales.
- Bonificador a elegir: +8 de Oro, +4 Materiales, o buscar(2) dos veces en hechizos.
- Héroes de IA: guardias de lord Fayette y lord Fayette.
- En la zona de ciudad de la loseta de Necrópolis, lucha contra la guarnición con 3 murallas y 1 puerta.
- Teletransporte Místico: Los obeliscos de las losetas cercanas de Necrópolis y Mazmorra están interconectados y teletransportan al héroe de una a otra.
- Victoria: Derrotar a lord Fayette para liberar su alma.
- Derrota: perder tu ciudad, perder un combate, o no ganar antes del final de la ronda 13.

MISIÓN 3 — "Agentes de la Venganza" (12 rondas): Gem y Gelu unen sus fuerzas para invadir Deyja y detener el complot del nigromante Sandro antes de que complete un artefacto destructivo.
- Héroes: Gem y Gelu.
- Recursos iniciales: 14 de Oro/8 Materiales/3 Objetos de Valor, +5 de producción de Oro.
- Bonificador a elegir: +2 Objetos de Valor, buscar(4) en artefactos, o reforzar 2 unidades.
- Héroes de IA: Charna, Galthran y Vidomina (esta última no se mueve por el mapa).
- Dificultad Aumentada: Todos los combates en losetas de Necrópolis tienen +1 a la dificultad de zona.
- Combate Final en el Castillo Crypthome (Utopía del Dragón): Enfrentamiento masivo contra Vidomina. La manada de esqueletos enemiga equipa las cartas de especialidad de Sandro y realiza un ataque gratuito.
- Gelu o Gem otorgan bonificaciones directas de daño al inicio de la batalla final.
- Victoria: derrotar al ejército enemigo en la utopía del dragón antes del final de la ronda 12.

Regla común a las 3 misiones:
- Los héroes enemigos se mueven después del jugador.
- Se puede entrar en una zona bloqueada si hay un enemigo en ella.
- Derrotar el ejército de un héroe enemigo da +2 Objetos de Valor.
- La primera vez que el héroe entra en una zona con obelisco se activa un evento de historia (a partir de ahí, cada primera visita a un obelisco lanza 2 dados de tesoro y resuelve 1, a elección del jugador).`
  },

  // =========================================================================
  // METAS AMPLIADAS (STRETCH GOALS) Y LIBRO DE MISIONES
  // =========================================================================
  {
    id: "cap_01_exp_metas_ampliadas_componentes",
    title: "Expansión Metas Ampliadas: 1. Componentes",
    category: "componentes",
    content: `Esta expansión añade 3 campañas en solitario nuevas: "La Sangre del Dragón" (Mazmorra), "El Ascenso del Nigromante" (Necrópolis) y "El Matadragones" (Torre), además de las Escuelas de Magia (ver capítulo 5, Construcción del Mazo) y nuevos lugares del mapa (ver capítulo 8, Elementos del Mapa).

COMPONENTES DE LA EXPANSIÓN:
- 15 Losetas de mapa (1 inicial, 10 lejanas, 3 cercanas, 1 central).
- 1 Tablero de ciudad, 7 losetas de edificio de ciudad, 1 libro de misiones, 1 ayuda de juego.
- 2 Miniaturas de héroe, 7 miniaturas de unidad, 7 cartas de héroe a doble cara, 7 cartas de unidad.
- 28 Cartas de unidad neutral, 11 de artefacto, 7 de hechizo, 11 de habilidad, 42 de especialidad.
- 7 Cartas de característica (1 ataque, 1 defensa, 2 poder, 3 conocimiento), 4 cartas de anuncio astrológico.
- 12 fichas de oro, 9 materiales de construcción, 8 objetos de valor, 10 fichas de daño.
- Fichas de construcción, población, libro de hechizos, parálisis/defensa, movimiento y moral.
- 30 Cubos acrílicos (10 negros, 20 azul claro).`
  },
  {
    id: "cap_02_exp_metas_ampliadas_mecanicas",
    title: "Expansión Metas Ampliadas: 2. Regla de Miniaturas y Nuevos Lugares",
    category: "general",
    content: `NUEVAS MECÁNICAS DE JUEGO (METAS AMPLIADAS):

MINIATURAS EN JUEGO (regla opcional): al comienzo de la partida, prepara las miniaturas de las unidades que vayas a utilizar; durante el combate se pueden colocar sobre sus cartas de unidad correspondientes para indicar con claridad su posición en el tablero de combate (las miniaturas de una facción comparten el color del borde de sus cartas). 
Si se juega con miniaturas, aplica estas reglas adicionales:
- al robar una carta de unidad neutral, si sale la misma unidad neutral repetida, una que ya tengas en tu ejército, o una unidad de tu propia facción, descártala y roba otra en su lugar.
- al reclutar unidades neutrales, tampoco se puede reclutar una unidad de una facción controlada por otro jugador ni una ya presente en el ejército de otro jugador (descarta y roba otra).

NUEVOS LUGARES DEL MAPA (Páginas 41-42):
- Universidad (Visitable): Paga 6 de Oro para buscar (4) en el descarte de habilidades.
- Mercado Negro (Re-visitable): Examina las 4 cartas superiores del descarte de artefactos y compra: Menor por 5 Oro, Mayor por 7 Oro, Reliquia por 10 Oro.
- Mercado del Tiempo (Visitable): Retira 1 carta de tu mano y busca (2) en el mazo de habilidades, hechizos o artefactos.
- Prisión (Visitable): Otorga 1 héroe secundario gratis (o 3 de Oro si ya tienes uno).
- Biblioteca de la Iluminación (Re-visitable): Paga 3 de Oro para sustituir 1 carta de característica de mano/descarte por otra.
- Fuerte de la Colina (Visitable): Permite reforzar 1 unidad de Bronce o Plata reduciendo el coste en 3 de Oro (mínimo 0).
- Taberna (Re-visitable): Paga 7 de Oro para ganar un héroe secundario y hacer que un oponente descarte 1 carta al azar de su mano.
- Aserradero (Mina - Señalizable): Otorga pasivamente 2 Materiales de Construcción por ronda.`
  },
  {
    id: "cap_03_exp_metas_ampliadas_campana_mazmorra",
    title: "Expansión Metas Ampliadas: 3. Campaña de la Mazmorra — La Sangre del Dragón",
    category: "campaña",
    content: `Campaña de 3 misiones para la facción Mazmorra, protagonizada por Mutare (y desde la 2ª misión, opcionalmente Alamar) (referencia de preparación y condiciones; el contenido narrativo está en el Libro de Misiones físico).

La señora Mutare busca el legendario Vial de Sangre de Dragón para transformarse en dragón y dominar Nighon.

MISIÓN 1 — "Limpieza de Aspirantes" (11 rondas):
- Héroe Principal: Mutare.
- Sin recursos ni edificios iniciales.
- Bonificador a elegir: añadir unas pocas medusas, reforzar trogloditas y arpías, o buscar(4) en artefactos.
- Héroes de IA (Mazmorra): Caomham (no se mueve) y Preuet (se mueve tras el turno del jugador).
- Reglas:
	a) nivel de experiencia máximo 4
	b) no se pueden construir viviendas de oro
	c) no se puede reclutar un 2º héroe
	d) no hay ingresos salvo tras conquistar la ciudad inicial (que da vivienda de bronce, alcaldía y varios recursos)
	e) no se gana nada visitando obeliscos.
- Victoria: Capturar la ciudad inicial (guarnición Nivel III) y derrotar a Caomham y Preuet.
- Derrota: perder cualquier combate, o no ganar antes del final de la ronda 11.

MISIÓN 2 — "Sangre del Padre Dragón" (11 rondas):
- Héroe Principal: a elegir entre Mutare o Alamar.
- Recursos iniciales: 14 de Oro/3 Materiales/1 Objeto de Valor, +5 de producción de Oro.
- Edificios iniciales: vivienda de bronce, vivienda de plata, ciudadela.
- Bonificador a elegir: buscar(3) en artefactos, +4 Materiales, o reforzar ojos maléficos/trogloditas/arpías.
- Héroe de IA (Castillo, a elegir cuál): Vanguardia de Ordwald (se desplaza veloz hacia la Utopía del Dragón) más el ejército de dragones guardianes en la utopía del dragón central.
- Reglas:
	a) la dificultad de todos los combates del mapa sube +1 desde la ronda 1
	b) el héroe enemigo va directo a la utopía del dragón por la ruta más corta e ignora al jugador salvo que coincidan en zona
	c) visitar un obelisco detiene el avance de la vanguardia enemiga por 1 turno.
- Victoria: Llegar a la Utopía del Dragón y derrotar a los Dragones Guardianes antes de que el héroe enemigo alcance el lugar (el héroe enemigo es opcional).
- Derrota: que el enemigo llegue antes a la utopía del dragón, o no ganar antes del final de la ronda 11.

MISIÓN 3 — "Sed de Sangre" (10 rondas):
- Héroe Principal: a elegir entre Mutare o Alamar.
- Recursos iniciales: 20 de Oro/5 Materiales/2 Objetos de Valor, +1 de producción de Materiales y +5 de Oro.
- Edificios iniciales: vivienda de bronce, vivienda de plata, ciudadela.
- Bonificador a elegir: añadir unos pocos fanáticos, añadir 1 dragón al azar, o reforzar arpías/minotauros/medusas.
- Héroes de IA (Castillo y Necrópolis): 3 señores y Ordwald, que atacan uno tras otro en ese orden fijo.
- Reglas:
	a) se pueden reclutar dragones en la utopía del dragón (máximo 2, requiere vivienda de oro)
	b) no se pueden usar mantícoras
	c) visitar un obelisco inmoviliza a todos los enemigos 1 turno (una vez por obelisco)
	d) derrotar a un héroe enemigo da medio nivel de experiencia.
- Victoria: sobrevivir a los ataques de los 4 héroes enemigos.
- Derrota: perder cualquier combate.`
  },
  {
    id: "cap_04_exp_metas_ampliadas_campana_necropolis",
    title: "Expansión Metas Ampliadas: 4. Campaña de la Necrópolis — El Ascenso del Nigromante",
    category: "campaña",
    content: `Campaña de 3 misiones para la facción Necrópolis, protagonizada por Sandro o Tamika (referencia de preparación y condiciones; el contenido narrativo está en el Libro de Misiones físico).

Sandro el Nigromante avanza hacia Deyja reuniendo artefactos legendarios (Capa del Rey No Muerto y Armadura de los Malditos) contra su antiguo maestro Ethric.

MISIÓN 1 — "Objetivo" (8 rondas):
- Héroe Principal: a elegir entre Sandro o Tamika.
- Recursos iniciales: 25 de Oro/3 Materiales/1 Objeto de Valor.
- Edificio inicial: vivienda de bronce.
- Bonificador a elegir: reforzar zombis, buscar(3) en artefactos, o robar del mazo de hechizos hasta encontrar uno de daño.
- Héroes de IA: Shiva y Jeddite (utiliza la carta de especialidad Resurrección VI).
- Reglas:
	a) nivel de experiencia máximo 4
	b) los héroes enemigos se mueven después del jugador
	c) los obeliscos permiten elegir qué miniatura representa a cada enemigo.
- Victoria: derrotar ambos ejércitos enemigos.
- Derrota: perder cualquier combate, o no ganar antes del final de la ronda 8.

MISIÓN 2 — "Maestro" (10 rondas):
- Héroe Principal: mismo héroe elegido en Misión 1 (Sandro o Tamika).
- Recursos iniciales: 3 de Oro/2 Materiales.
- Edificios iniciales: vivienda de bronce, vivienda de plata.
- Bonificador a elegir: +5 Materiales, +9 de Oro, o construir gratis el edificio "Manto de la Oscuridad".
- Héroes de IA (Mazmorra y Castillo, a elegir cuáles): Ivor y Ethric (su antiguo maestro).
- Reglas: 
	a) los héroes enemigos se mueven después del jugador.
	b) nivel de experiencia máximo 5.
	c) si Ethric es atacado en su ciudad, cuenta con 3 murallas, puerta y torre de arqueros.
	d) se pueden pagar 10 de Oro para ralentizar su movimiento a 2 zonas/ronda.
- Victoria: derrotar ambos ejércitos.
- Derrota: perder tu ciudad, o no ganar antes del final de la ronda 10.

MISIÓN 3 — "Duque Alarice" (11 rondas):
- Héroe Principal: mismo héroe elegido (Sandro o Tamika).
- Recursos iniciales: 20 de Oro/2 Materiales/4 Objetos de Valor, +2 de producción de Materiales y +5 de Oro.
- Edificios iniciales: vivienda de bronce, vivienda de plata, ciudadela.
- Bonificador a elegir: añadir unos pocos vampiros, +4 Materiales, o +2 Objetos de Valor.
- Héroes de IA (Castillo): Thorgrim, Melodia (mismo ejército/mazo que Thorgrim) y el duque Alarice (aparece solo en la historia, no en el mapa).
- Reglas:
	a) los héroes enemigos van directos hacia la miniatura del jugador por la ruta más corta y se mueven después del turno del jugador
	b) derrotar un héroe enemigo da a elegir 6 de Oro o 2 Materiales
	c) los obeliscos dan 10 de Oro y permiten entrar en la utopía del dragón.
	d) el asentamiento enano aumenta la producción de Oro en +10.
	e) en el combate final contra el Duque Alarice, una unidad de Momias enemiga ataca en primer lugar antes de cualquier activación
- Victoria: derrotar a todos los héroes enemigos y ganar el combate final en la utopía del dragón.
- Derrota: perder tu ciudad, o no ganar antes del final de la ronda 11.`
  },
  {
    id: "cap_05_exp_metas_ampliadas_campana_torre",
    title: "Expansión Metas Ampliadas: 5. Campaña de la Torre — El Matadragones",
    category: "campaña",
    content: `Campaña de 4 misiones para la facción Torre, protagonizada por Dracon o Solmyr (referencia de preparación y condiciones; el contenido narrativo está en el Libro de Misiones físico). Las misiones 2 y 3 requieren, respectivamente, las expansiones Fortaleza y Murallas (si no se tienen, se pueden saltar).

Dracon realiza las pruebas preparadas por su madre para convertirse en el matadragones definitivo, enfrentándose a las wyrms más letales.

MISIÓN 1 — "Dragones de Cristal" (9 rondas):
- Héroe Principal: a elegir (Dracon o Solmyr).
- Recursos iniciales: 15 de Oro/3 Materiales/1 Objeto de Valor, +5 de producción de Oro.
- Edificios iniciales: vivienda de bronce, vivienda de plata.
- Bonificador a elegir: +2 Objetos de Valor, añadir unos pocos gólems de hierro, o reforzar gremlins/gárgolas.
- Enemigo: ejército de dragones de cristal.
- Reglas:
	a) visitar un obelisco activa un evento especial
	b) no se puede descubrir ninguna loseta cercana antes de descubrir todas las lejanas.
- Victoria: revelar las losetas lejanas, visitar un obelisco y derrotar al ejército de Dragones de Cristal.
- Derrota: perder una batalla, o no ganar antes del final de la ronda 9.

MISIÓN 2 — "Dragones Herrumbrosos" (11 rondas, requiere Fortaleza):
- Héroe Principal: a elegir (Dragon o Solmyr).
- Recursos iniciales: 18 de Oro/1 Material/3 Objetos de Valor.
- Edificios iniciales: vivienda de bronce, ciudadela.
- Bonificador a elegir: +5 Objetos de Valor, o reforzar magos.
- Enemigos: 3 ejércitos sucesivos de dragones herrumbrosos (crecientes en tamaño).
- Reglas:
	a) no se puede entrar en el estanque de gemas hasta capturar 3 minas
	b) derrotar un ejército enemigo da 1 Objeto de Valor y experiencia.
- Victoria: Capturar 3 minas infestadas de ácido (sufriendo parálisis y reducción de tropas) y derrotar al ejército final en el Estanque de Gemas.
- Derrota: perder una batalla, o no ganar antes del final de la ronda 11.

MISIÓN 3 — "Dragones Hada" (13 rondas, requiere Murallas):
- Héroe Principal: a elegir (Dracon o Solmyr).
- Recursos iniciales: 15 de Oro/5 Materiales/1 Objeto de Valor, +5 de producción de Oro.
- Edificios iniciales: vivienda de bronce, vivienda de plata, ciudadela.
- Bonificador a elegir: +4 Materiales, o reforzar magos.
- Enemigos: 3 ejércitos sucesivos de dragones hada (con trolls en el 2º y 3º).
- Reglas: tras capturar el primer asentamiento, cada nuevo asentamiento capturado activa un evento de historia.
- Victoria: Superar las ilusiones del duendecillo Erik, capturar los 4 asentamientos oprimidos y ganar el combate final en la Caja de Pandora.
- Derrota: perder una batalla, o no ganar antes del final de la ronda 13.

MISIÓN 4 — "Dragones Azures" (11 rondas):
- Héroe Principal: a elegir (Dracon o Solmyr).
- Recursos iniciales: 30 de Oro/4 Materiales/2 Objetos de Valor, +5 de producción de Oro.
- Edificios iniciales: vivienda de bronce, vivienda de plata, ciudadela.
- Bonificador a elegir: buscar(3) en habilidades, en hechizos, o en artefactos.
- Enemigos: ejércitos de dragones de cristal, dragones negros y dragones azures, uno en cada uno de los 3 obeliscos del mapa (cada uno se combate solo una vez), más el ejército final en la utopía del dragón.
- Reglas: 
	a) tomar un obelisco da a elegir 2 Objetos de Valor o 7 de Oro
	b) tras tomar el primer obelisco, la dificultad de todos los combates del mapa sube +1
	c) no se puede entrar en la utopía del dragón hasta controlar los 3 obeliscos.
- Victoria: visitar los 3 obeliscos y derrotar después el ejército final en la utopía del dragón.
- Derrota: perder una batalla, o no ganar antes del final de la ronda 11.`
  },

  // =========================================================================
  // EXPANSIÓN FORTALEZA (FORTRESS) Y LIBRO DE MISIONES "JUGANDO CON FUEGO"
  // =========================================================================
  {
    id: "cap_01_exp_fortaleza_componentes",
    title: "Expansión Fortaleza: 1. Componentes",
    category: "componentes",
    content: `Esta expansión añade la facción Fortaleza (gnolls, hombres lagarto y criaturas de las ciénagas de Tatalia), introduce las Cartas de Evento (ver capítulo 3, Preparación de la Partida — Orden de las Rondas) y nuevos lugares del mapa (ver capítulo 8, Elementos del Mapa), además de compartir las Escuelas de Magia con la expansión Metas Ampliadas y las reglas de Modo Alianza con la expansión Murallas.

COMPONENTES DE LA EXPANSIÓN:
LOSETAS Y TABLEROS:
- 7 Losetas de mapa (1 inicial [S5], 3 lejanas [F13, F14, F15], 2 cercanas [N9, N10], 1 central [C1])
- 1 Tablero de ciudad de la facción Fortaleza (Fortress)
- 1 Libro de misiones de Fortaleza (28 páginas)
- 1 Ayuda de juego

MINIATURAS Y CARTAS:
- 2 Miniaturas de héroe
- 7 Miniaturas de unidad (Gnolls, Hombres Lagarto, Libélulas, Basiliscos, Gorgonas, Wyverns, Hidras)
- 1 Carta de héroe a doble cara (Adrienne / Wystan)
- 7 Cartas de unidad de Fortaleza (a doble cara: "unas pocas" / "manada")
- 7 Losetas de edificio de ciudad de Fortaleza
- 2 Cartas de unidad neutral
- 3 Cartas de anuncio astrológico
- 8 Cartas de artefacto
- 20 Cartas de hechizo
- 4 Cartas de habilidad
- 6 Cartas de especialidad de héroe
- 20 Cartas de Evento (Mazo de eventos del mapa)
- 8 Cartas de característica (4 Defensa, 2 Poder, 2 Conocimiento)

FICHAS Y RECURSOS:
- 9 Fichas de oro (3 de "1", 3 de "3", 3 de "10")
- 6 Fichas de materiales de construcción (3 de "1", 3 de "3")
- 4 Fichas de objetos de valor (3 de "1", 1 de "3")
- 1 Ficha de construcción, 1 de población, 1 de libro de hechizos, 1 de moral
- 30 Cubos acrílicos (10 negros, 20 verde oscuro)`
  },
  {
    id: "cap_02_exp_fortaleza_mecanicas",
    title: "Expansión Fortaleza: 1. Cartas de Evento y Nuevas Localizaciones (Erudito)",
    category: "general",
    content: `NUEVAS MECÁNICAS E INTRODUCCIONES DE LA EXPANSIÓN FORTALEZA:

1. CARTAS DE EVENTO (Nuevo tipo de mazo):
   - Al comienzo de cada ronda de recursos (excepto la primera), tras cobrar ingresos, se roba y resuelve 1 carta de evento.
   - La primera la roba el jugador inicial y la rotación continúa en sentido horario en rondas posteriores.
   - Se utilizan únicamente en escenarios multijugador.
   - Las acciones descritas se ejecutan en sentido horario. Si son acciones independientes, pueden resolverse simultáneamente.
   - Tras resolver el evento, las cartas no usadas se barajan de nuevo en el mazo de eventos.

2. NUEVOS LUGARES DEL MAPA:
   - Erudito (Visitable, Pág. 26): Lanza 1 dado de ataque y resuelve el resultado:
     • Resultado +1: Roba la carta de característica elegida o retira una de las cartas de característica de tu mano.
     • Resultado 0: Roba 2 cartas de habilidad, quédate con una y descarta la otra.
     • Resultado -1: Roba 2 cartas de hechizo, quédate con una y descarta la otra.`
  },
  {
    id: "cap_03_exp_fortaleza_escenarios",
    title: "Expansión Fortaleza: 3. Escenarios Independientes (Arrogancia y En Busca del Grial)",
    category: "escenario",
    content: `Esta expansión aporta las reglas completas del Modo Alianza (idénticas a las de la expansión Murallas: equipo de 2 jugadores formado al inicio de la partida, intercambio de artefactos entre héroes en zonas adyacentes, intercambio libre de recursos entre aliados, y prohibición de señalizar un lugar ya señalizado por tu compañero de equipo).

ESCENARIO DE ALIANZA — "Arrogancia" (4 jugadores, dura 12 rondas): Cuatro culturas vivían en paz hasta que las ambiciones de conquista desataron la guerra mundial.
- Preparación del Mapa: 4 losetas iniciales (I), 8 lejanas (II-III), 8 cercanas (IV-V con 4 obeliscos), 2 centrales (VI-VII con 1 grial).
- Recursos iniciales: 13 de Oro/4 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0».
- Edificios iniciales: Cada jugador empieza con vivienda de bronce.
- Tropas iniciales: 2 unidades "unas pocas" de bronce del mayor coste.
- Reglas:
	a) solo un héroe principal puede hacerse con la ficha de grial (aunque haya 2 losetas con grial, solo existe 1 ficha)
	b) una alianza no puede entrar en la zona del Grial hasta visitar al menos 4 obeliscos diferentes o hasta que algún héroe ya tenga la ficha de grial
	c) conseguir la ficha (excavar) cuesta 2 PM en su zona
	d) entregar el grial en la ciudad aumenta en 5 los ingresos de Oro.
- Evento contrarreloj: Al comienzo de las rondas 3, 6 y 9, todos los héroes ganan ficha de moral positiva.
- Victoria: que una alianza entregue la ficha de grial en una de sus ciudades antes del final de la ronda 12 (si no, todos pierden).

ESCENARIO DE ENFRENTAMIENTO — "En Busca del Grial" (2-3 jugadores, dura 10-13 rondas): Búsqueda competitiva del grial perdido en las ciénagas antes de que caiga en manos enemigas.
- Recursos iniciales: 16 de Oro/4 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0».
- Edificios iniciales: Cada jugador empieza con vivienda de bronce.
- Tropas iniciales: 2 manadas de bronce del menor coste.
- Reglas:
	a) Requiere haber visitado al menos 2 obeliscos para poder acceder a la zona del Grial.
	b) Extraer el Grial consume 2 PM. Llevarlo a la ciudad otorga +5 de ingresos de Oro.
- Evento contrarreloj: Al comienzo de las rondas 3 y 9, todos los héroes ganan +1 PM.
- Victoria: el héroe principal de un jugador consigue la ficha de grial y la entrega a la ciudad de su facción antes del final de la ronda 10 (si tiene la ficha pero no ha llegado, dispone hasta la ronda 13 para conseguirlo; si no, pierde).`
  },
  {
    id: "cap_04_exp_fortaleza_campana",
    title: "Expansión Fortaleza: 4. Campaña en Solitario — Jugando con Fuego",
    category: "campaña",
    content: `Campaña de 3 misiones para la facción Fortaleza, protagonizada por Adrienne o Wystan, contra héroes de IA de Necrópolis (referencia de preparación y condiciones; el contenido narrativo de cada misión está en el Libro de Misiones físico).

MISIÓN 1 — "Cosecha de Ciudades" (13 rondas): La bruja de fuego Adrienne regresa a Tatalia y descubre que la secta ilegal de Lord Haart está masacrando y resucitando a los aldeanos.
- Héroe Principal: a elegir (Adrienne o Wystan).
- Recursos iniciales: 12 de Oro
- Sin edificios iniciales.
- Bonificador a elegir: buscar(3) en artefactos, buscar(3) en hechizos, o +4 Objetos de Valor.
- Héroe de IA: "Merodeadores Nocturnos" (ejército de vampiros/liches/zombis/momias).
- Reglas:
	a) nivel de experiencia máximo 5 (deja de ganar experiencia al superarlo)
	b) sin ingresos ni reclutamiento hasta conquistar la ciudad (dentro de las 4 primeras rondas, o se pierde)
	c) se prepara la habilidad Diplomacia como recurso especial de la misión, utilizable sin tener la vivienda correspondiente
	d) visitar un obelisco antes de la ronda 6 no hace nada, después activa un evento de historia.
	e) al combatir contra neutrales, la primera unidad de Bronce robada se sustituye por Zombis.
- Victoria: condiciones ligadas a la historia.
	1. captura la Ciudad de Basdar antes de finalizar la ronda 4 (Defendida por un ejército neutral Nivel III. Permite refundar la base de operaciones tataliana)
	2. cumplir "Algunas cosas nunca cambian": 
		a) Pagar tributo a los corruptos señores erathianos (40 Oro, 20 Materiales de construcción y 10 Objetos de valor)
		b) Entrar en la zona con obelisco para combatir y derrotar al ejército de los Merodeadores Nocturnos (vampiros con +2 Iniciativa) y rescata al caballero Sir Michael.
- Derrota: pierdes si no capturas la ciudad en 4 rondas o si no cumples las condiciones de "Algunas cosas nunca cambian" (límite ronda 13).

MISIÓN 2 — "La Marcha de los No Muertos" (12 rondas): Lord Haart instala guardias de no muertos en las viviendas de Tatalia para convertir cada nuevo recluta en soldados esqueleto. Adrienne debe desmantelar su red de levantamientos.
- Héroe Principal: mismo héroe anterior (Adrienne o Wystan).
- Recursos iniciales: 10 de Oro/3 Materiales/1 Objeto de Valor, +5 de producción de Oro.
- Edificios iniciales: vivienda de bronce, vivienda de plata.
- Bonificador a elegir: entre 2 combinaciones de unidades iniciales adicionales.
- Héroe de IA: Nagash (ejército de caballeros del terror/vampiros/espectros/liches).
- Reglas:
	a) la dificultad de todos los combates del mapa sube +1 desde la ronda 3
	b) no se puede entrar en la zona de obelisco hasta señalizar todas las minas y asentamientos (salvo los de las losetas cercanas de Mazmorra)
	c) el obelisco de Fortaleza teletransporta al de Mazmorra.
	d) las unidades neutrales de Bronce son sustituidas progresivamente por Esqueletos, Zombis y Espectros conforme avanzan las rondas.
- Evento: el combate contra Nagash se desencadena al intentar señalizar la segunda localización mística (Nagash cuenta con muralla y puerta en batalla).
- Victoria: señalizar todos los asentamientos y minas del mapa antes del final de la ronda 12 y vencer al ejército de Nagash.

MISIÓN 3 — "El Incendio de Tatalia" (14 rondas): Confrontación definitiva contra Lord Haart y sus dos seguidores no muertos para purificar Tatalia con fuego primordial.
- Héroe Principal: mismo héroe (Adrienne o Wystan).
- Recursos iniciales 15 de Oro/6 Materiales/1 Objeto de Valor, +5 de producción de Oro y +1 de Materiales.
- Edificios iniciales: vivienda de bronce, vivienda de plata, ciudadela.
- Bonificador a elegir: entre 2 combinaciones de unidades iniciales adicionales.
- Héroes de IA (Necrópolis): 2 seguidores de lord Haart y lord Haart (con dragones negros/fantasma).
- Reglas:
	a) la dificultad de todos los combates del mapa sube +1
	b) los héroes enemigos se mueven antes que el jugador
	c) derrotar el ejército de un héroe enemigo da +2 Objetos de Valor
	d) visitar un obelisco activa un evento especial.
- Misiones de los Tomos Elementales:
  • Tomo de Tierra: Visitar el obelisco y sacrificar un artefacto de Defensa o una unidad de Plata para conseguir el tomo y la capacidad de transmutar artefactos en hechizos.
  • Tomo de Fuego: Visitar el segundo obelisco y sacrificar un artefacto Reliquia o 4 Objetos de Valor.
- Enfrentamiento Final contra Lord Haart (Utopía del Dragón): En la primera ronda del combate, Adrienne puede lanzar 1 hechizo de la Escuela de Tierra y 1 de la Escuela de Fuego con el máximo Poder Mágico (sin consumir el límite de hechizos y conservándolos en la mano).
- Victoria: visitar ambos obeliscos obteniendo los dos tomos y derrotar a los 3 ejércitos enemigos antes del final de la ronda 14.`
  },

  // =========================================================================
  // EXPANSIÓN INFERNO Y LIBRO DE MISIONES
  // =========================================================================
  {
    id: "cap_01_exp_inferno_componentes",
    title: "Expansión Inferno: 1. Componentes",
    category: "componentes",
    content: `COMPONENTES INCLUIDOS EN LA EXPANSIÓN INFERNO:

LOSETAS Y TABLEROS:
- 7 Losetas de mapa (1 inicial, 3 lejanas, 2 cercanas, 1 central)
- 1 Tablero de ciudad de la facción Inferno
- 1 Libro de misiones de Inferno (16 páginas)
- 1 Ayuda de juego

MINIATURAS Y CARTAS:
- 2 Miniaturas de héroe
- 1 miniatura de ciudad de Inferno
- 7 Miniaturas de unidad (Familiares, Magogs, Cerberos, Demonios, Señores del Abismo, Efrits, Archidiablos)
- 2 Cartas de héroe a doble cara
- 7 Cartas de unidad de Inferno (a doble cara: "unas pocas" / "manada")
- 7 Losetas de edificio de ciudad de Inferno
- 7 Cartas de unidad neutral
- 3 Cartas de anuncio astrológico
- 4 Cartas de artefacto
- 6 Cartas de hechizo
- 5 Cartas de habilidad
- 12 Cartas de especialidad de héroe
- 20 Cartas de Característica Potenciada (Ataque, Defensa, Poder, Conocimiento)
- 7 Cartas de característica (2 Ataque, 2 Defensa, 2 Poder, 1 Conocimiento)

FICHAS Y RECURSOS:
- 9 Fichas de oro (3 de "1", 3 de "3", 3 de "10")
- 7 Fichas de materiales de construcción (3 de "1", 4 de "3")
- 5 Fichas de objetos de valor (3 de "1", 2 de "3")
- 4 Fichas de daño (2 de "1/2", 2 de "3/5")
- 1 Ficha de construcción, 1 de población, 1 de libro de hechizos, 1 de moral
- 30 Cubos acrílicos (10 negros, 20 rojos)`
  },
  {
    id: "cap_02_exp_inferno_mecanicas",
    title: "Expansión Inferno: 2. Mecánicas Nuevas (Invocar, Ciudad Aleatoria, Inmunidad de los Efrits)",
    category: "general",
    content: `Esta expansión añade la facción Inferno (demonios y criaturas del abismo), introduce la Carta de Característica Potenciada (ver capítulo 5, Construcción del Mazo), la Ciudad Aleatoria y el Eje Estelar (ver capítulo 8, Elementos del Mapa), y comparte las Escuelas de Magia con Metas Ampliadas y las reglas de Modo Alianza con Murallas.

1. CARTAS DE CARACTERÍSTICA POTENCIADA (20 Cartas):
   - Funcionan de forma similar a las cartas de característica básicas, pero otorgan un único efecto potenciado sin requerir el uso de la categoría Experto.
   - Se obtienen al visitar la localización 'Eje Estelar', intercambiando una carta de característica de tu mano por la correspondiente carta potenciada del mismo tipo.
   - También se pueden adquirir mediante cartas de artefacto, habilidades específicas o anuncios astrológicos.

2. MECÁNICA DE INVOCAR (nuevo tipo de acción de unidad, variante de "Otra Acción"):
   - Permite añadir una nueva unidad al tablero de combate durante una batalla.
   - La unidad invocada se despliega en cualquier espacio vacío que elijas (no tiene por qué ser adyacente a la unidad que invoca).
   - Si la Iniciativa de la unidad invocada es menor o igual a la de la unidad que la invocó, se activará en esa misma ronda. Si es mayor, se considera activada para esa ronda.
   - Tras el combate, salvo que se indique lo contrario, la unidad invocada se añade a tu mazo de unidades.
   - La habilidad de Invocar de los Señores del Abismo (expansión Inferno), solo se puede usar una vez por combate y no puede invocar demonios del mazo de unidades neutrales. Al reforzar con este efecto la unidad de demonios invocada, no se paga su coste de Oro.

3. INMUNIDAD DE LOS EFRITS A LA MAGIA DE FUEGO:
   - Las unidades de Efrits (tanto en versión 'Manada' como la unidad neutral) ignoran todo el daño provocado por cartas de hechizo pertenecientes a la Escuela de Magia de Fuego, identificable por el borde de la carta.
   - Otros efectos secundarios de hechizos de Fuego no relacionados con el daño directo sí afectan a los Efrits.

4. EJE ESTELAR (Señalizable):
   - Al visitar un Eje Estelar, puedes retirar una carta de característica de tu mano y sustituirla por una Carta de Característica Potenciada del mismo tipo.
   - Múltiples héroes de distintas facciones pueden visitar el mismo Eje Estelar y colocar sus respectivos cubos en la zona. Cuenta como zona vacía para las facciones que ya lo hayan visitado.

5. CIUDAD ALEATORIA (Señalizable / Asedio):
   - Descubrimiento: Al revelar la loseta con Ciudad Aleatoria, cada jugador tira 2 dados de recurso. El jugador con mayor cantidad de recursos resultantes elige una facción no presente en la partida para defender la plaza.
   - Guarnición de Asedio: Está defendida por 1 manada de Bronce, 2 manadas de Plata y 2 "unas pocas" de Oro de la facción seleccionada (sin carta de Torre de Arqueros).
   - Recompensas: El jugador que la señalice por primera vez recibe 10 de Oro inmediatamente. Además, la Ciudad Aleatoria genera +10 de ingresos pasivos de Oro al inicio de cada ronda de recursos.`
  },
  {
    id: "cap_03_exp_inferno_escenarios",
    title: "Expansión Inferno: 3. Escenarios Independientes (Alianza y Enfrentamiento)",
    category: "escenario",
    content: `Esta expansión aporta las reglas completas del Modo Alianza (idénticas a las de Murallas y Fortaleza: equipo de 2 jugadores formado al inicio de la partida, intercambio de artefactos entre héroes en zonas adyacentes, intercambio libre de recursos entre aliados, y prohibición de señalizar un lugar ya señalizado por tu compañero de equipo).

ESCENARIO DE ALIANZA — "El Cuento de las Dos Tierras" (4 jugadores, dura 11-13 rondas): Conflicto total entre los continentes Este y Oeste de Varesburg.
- Preparación del Mapa: 4 losetas iniciales (I), 8 cercanas (IV-V con 4 obeliscos), 8 lejanas (II-III). Hay 2 áreas de inicio (una por equipo).
- Recursos iniciales: 14 de Oro / 4 Materiales de construcción / 1 Objeto de Valor, ingresos «10»/«0»/«0».
- Edificios iniciales: Cada jugador empieza con vivienda de bronce
- Unidades iniciales: 2 manadas de bronce del menor coste.
- Reglas del escenario:
	a) Al visitar un obelisco, se gana 1 Ficha de Moral Positiva.
	b) Los jugadores pueden usar su mazo de fuerza y magia pagando Oro para defender la ciudad de su facción.
- Evento contrarreloj: Al comienzo de las rondas 4 y 9, todos lanzan y resuelven 1 dado de recursos.
- Victoria: la alianza debe controlar 12 losetas al final de una ronda o capturar y mantener bajo control una ciudad enemiga durante 2 rondas consecutivas. Si se cumple en la ronda 10 u 11, la partida se alarga hasta la 12 o 13 respectivamente. Si ambos equipos la cumplen, empate.
- Derrota: la alianza no consigue la condición de victoria. Si no la consigue ninguna, pierden todos.

ESCENARIO DE ENFRENTAMIENTO — "Destino Manifiesto" (3 jugadores, dura 12-14 rondas): Dominar las tierras superpobladas para consolidar la hegemonía de tu reino.
- Recursos iniciales: 12 de Oro / 4 Materiales de construcción, ingresos «10»/«0»/«0».
- Edificios iniciales: Cada jugador empieza con vivienda de bronce y cofradía de magos.
- Unidades iniciales: 1 manada de bronce del mayor coste.
- Reglas del escenario:
	a) Visitar obeliscos otorga 1 Ficha de Moral.
	b) Se puede defender la ciudad con el mazo de fuerza y magia.
- Evento contrarreloj: Al comienzo de las rondas 4 y 9, cada héroe gana +1 PM.
- Victoria: controlar 7 losetas al final de una ronda, o mantener capturada una ciudad enemiga durante 2 rondas (ganan todos los que lo cumplan, pierden los que no). Igual regla de alargar la partida si se cumple en la penúltima/última ronda.

ESCENARIO DE ENFRENTAMIENTO — "Carpe Diem" (2 jugadores, dura 14 rondas): Lucha directa por reclamar el trono vacante conquistando la Ciudad Aleatoria central.
- Preparación: Incluye 1 loseta central con Ciudad Aleatoria.
- Recursos iniciales: 10 de Oro / 3 Materiales de construcción / 1 Objeto de Valor, ingresos «10»/«0»/«0».
- Edificios iniciales: Cada jugador empieza con vivienda de bronce y cofradía de magos.
- Unidades iniciales: 1 manada de bronce del mayor coste.
- Reglas del escenario: Un héroe en la loseta central no puede entrar directamente en la loseta inicial enemiga.
- Eventos contrarreloj: Al comienzo de las rondas 3, 6 y 9, el héroe principal del segundo jugador gana +1 PM.
- Victoria: conquistar la Ciudad Aleatoria de la loseta central antes del final de la ronda 14 (si nadie lo logra, empate).

Regla opcional común a los 3 escenarios: para mantener el equilibrio, se recomienda retirar o ignorar las cartas que permiten atravesar bordes amarillos del mapa (p. ej. Alas de Ángel).`
  },

  // =========================================================================
  // LIBRO DE TORNEO (TOURNAMENT BOOK)
  // =========================================================================
  {
    id: "cap_01_torneo_mapa_puntuacion",
    title: "Modo Torneo: 1. Construcción del Mapa de Escenario y Puntuación",
    category: "modos",
    content: `El Modo Torneo está pensado para partidas 1 contra 1 con una preparación de mapa específica y un sistema de puntos de victoria (PV) al final del escenario.

CONSTRUIR EL MAPA DE ESCENARIO: cada escenario de torneo indica una disposición inicial de losetas; el resto se coloca siguiendo las reglas básicas de colocación (ver capítulo 8, Elementos del Mapa), en este orden:
1. Ambos jugadores lanzan 2 dados de recursos; quien consiga más recursos elige quién empieza y quién es segundo (el segundo jugador recibe 1 ficha de moral positiva al inicio).
2. Se colocan las losetas centrales que indique el escenario, en el centro de la zona de juego.
3. El jugador inicial las descubre y las rota como prefiera.
4. Empezando por el segundo jugador, ambos añaden por turnos, una a una, sus losetas cercanas (si tienen), preferiblemente junto a una loseta central; en cada escenario, al menos 2 losetas cercanas deben incluir un obelisco.
5. El jugador inicial coloca su loseta inicial adyacente a al menos 1 loseta cercana; el otro jugador coloca la suya en el lado opuesto del mapa (la posición más alejada por número de losetas).
6. Empezando por el jugador inicial, ambos añaden por turnos sus losetas lejanas: la primera debe quedar adyacente a la loseta inicial propia; el resto sigue las reglas básicas de colocación. Todas las losetas se rotan libremente y se colocan boca arriba.

PUNTUACIÓN: cuando el escenario llega al límite de rondas o alguien cumple la condición de victoria, la partida acaba y ambos jugadores cuentan sus puntos de victoria (PV):
• 4 PV por derrotar al héroe principal enemigo (una vez por escenario).
• 2 PV por derrotar al héroe secundario enemigo.
• 1 PV por cada mina o asentamiento controlado.
• 1 PV por cada edificio en tu ciudad.
• 1 PV por cada 2 cartas de artefacto en tu mazo de fuerza y magia.
• 1 PV por cada nivel de experiencia de tu héroe principal.
• X PV por objetivos adicionales que especifique el escenario.
Gana el jugador con más puntos de victoria.`
  },
  {
    id: "cap_02_torneo_reglas_adicionales_opcionales",
    title: "Modo Torneo: 2. Reglas Adicionales y Opcionales",
    category: "modos",
    content: `REGLAS ADICIONALES (se aplican a todos los escenarios de torneo):
1. Se retira de la partida la carta de habilidad Diplomacia.
2. Se retira de la partida la carta de artefacto Reloj de la Hora Aciaga.
3. Al comienzo de la primera ronda, cada jugador puede devolver su mano de cartas al mazo de fuerza y magia, barajarlo y robar una mano nueva.
4. El segundo jugador empieza con 1 ficha de moral.
5. Acción adicional con la ficha de moral: durante una acción de buscar (en habilidades, artefactos o hechizos), puedes descartar todas las cartas robadas y volver a buscar la misma cantidad.
6. Cualquier carta de artefacto retirada de la partida se coloca junto al mazo de fuerza y magia hasta el final de la partida; ese montón cuenta para tus puntos de victoria finales.
7. Lugar del mapa — Observatorio de Caoba, variante de torneo (Visitable): elige 1 loseta adyacente a esta que no contenga ningún héroe; puedes rotarla como quieras, siguiendo las reglas básicas de colocación de losetas.

REGLAS OPCIONALES (utilizables en cualquier escenario, incluidos los básicos):
• Divide el mazo de artefactos en 3 (menores, mayores, reliquias; orden de rareza menor→mayor→reliquia): en losetas iniciales y lejanas solo se consiguen artefactos menores; en las cercanas, mayores y reliquias; en el centro, los 3 tipos.
• Divide el mazo de hechizos en 2 (básicos y avanzados; Flecha Mágica es un hechizo básico): en losetas iniciales y lejanas solo se consiguen hechizos básicos; en las cercanas y centrales, básicos y avanzados.`
  },
  {
    id: "cap_03_torneo_escenarios",
    title: "Modo Torneo: 3. Escenarios del Libro de Torneo",
    category: "escenario",
    content: `3 escenarios oficiales para el Modo Torneo (1 contra 1), con condiciones de victoria alternativas al derrocamiento total del rival.

ESCENARIO 1 — "Última Oportunidad": preparación con 2 losetas iniciales, 4 cercanas (2 con obelisco) y 4 lejanas. Recursos iniciales 10 de Oro/3 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce y 3 unidades "unas pocas" de bronce. Al visitar un obelisco, se recibe 1 ficha de moral. Victoria: el héroe de un jugador derrota al héroe principal de su oponente (la partida acaba de inmediato y ambos cuentan sus PV). Si nadie lo consigue antes del final de la ronda 8, la partida acaba igualmente y se cuentan los PV.

ESCENARIO 2 — "La Gran Carrera": preparación con 2 losetas iniciales, 4 cercanas (2 con obelisco), 1 central con utopía del dragón y 4 lejanas. Mismos recursos/ingresos/edificios/unidades iniciales que el escenario 1. Al visitar un obelisco, se elige entre 1 de 3 acciones: ganar ficha de moral, lanzar 1 dado de recursos, o lanzar 1 dado de tesoro. Quien controle la utopía del dragón al final de la partida gana 3 PV extra. Victoria: tras capturar la utopía del dragón por primera vez, se juega 1 ronda más y la partida acaba, contando los PV. Si nadie la captura antes del final de la ronda 11, la partida acaba igualmente.

ESCENARIO 3 — "Herencia Inesperada": preparación con 2 losetas iniciales, 2 cercanas con obelisco (repartida 1 por jugador), 2 cercanas sin obelisco, 2 centrales (con grial y utopía del dragón) y 6 lejanas. Mismos recursos/ingresos/edificios/unidades iniciales. Al visitar un obelisco, se elige entre 2 acciones: lanzar 1 dado de recursos y 1 de tesoro (eligiendo un resultado e ignorando el otro), o buscar(2) en artefactos. No se puede visitar la zona del grial hasta haber visitado 2 obeliscos diferentes, o hasta que otro héroe ya haya cogido la ficha; conseguirla cuesta 2 PM en su zona; si otro héroe te derrota o te rindes teniéndola, la ficha pasa a quien te ha vencido o se queda en la zona de rendición; si un ejército neutral te derrota, la ficha se queda en esa zona. Un jugador gana 3 PV extra al final del escenario si controla la utopía del dragón y si uno de sus héroes tiene la ficha de grial. Victoria: al final de cualquier ronda en que alguien controle la utopía del dragón y tenga la ficha de grial, se juega 1 ronda más y la partida acaba, contando los PV. Si no se cumple antes del final de la ronda 14, la partida acaba igualmente.`
  },
  {
    id: "cap_04_torneo_creador_escenarios",
    title: "Creador de Escenarios (Guía Oficial para Diseñar Escenarios Propios)",
    category: "escenario",
    content: `Pasos oficiales para diseñar un escenario propio de Heroes of Might and Magic III: The Board Game:
1. Dale un nombre y una breve descripción a tu escenario.
2. Elige la cantidad de jugadores (máximo 3 en el juego base; las expansiones permiten más).
3. Establece la duración: el marcador de rondas permite hasta 16, aunque no se recomienda superar esa cifra (para partidas más largas, es mejor dividir en varios escenarios como una campaña).
4. Diseña el mapa: se recomienda, por cada jugador, al menos 1 loseta inicial, 2 cercanas y 2 lejanas; asegúrate de que todos tengan acceso equivalente a los distintos tipos de losetas para que la posición inicial no determine la partida.
5. Elige los recursos iniciales de los jugadores (por defecto 15 de Oro/3 Materiales/1 Objeto de Valor); puedes variarlos para acelerar/ralentizar el ritmo, o hacerlos asimétricos.
6. Establece los ingresos iniciales en el marcador (por defecto «10»/«0»/«0»); reducir las losetas lejanas y aumentar los ingresos acelera la partida.
7. Elige los edificios iniciales disponibles para los jugadores.
8. Elige las unidades iniciales (por defecto 3 "unas pocas" de bronce, personalizable).
9. Define bonificadores iniciales adicionales si lo deseas (normalmente reservado a campañas).
10. Establece las reglas del escenario: qué ocurre en lugares especiales (sobre todo obeliscos y utopía del dragón) y cualquier otro efecto que quieras modificar (consulta Opciones de Juego y las campañas oficiales para inspirarte).
11. Establece la condición de victoria: puede ser cualquier objetivo (recolectar recursos, capturar un lugar, derrotar a un jugador); pueden existir varias condiciones distintas, incluso una por jugador.
12. Establece qué ocurre si se alcanza el límite de rondas del marcador.
13. Establece un evento contrarreloj: qué deben hacer los jugadores al comienzo de ciertas rondas o qué condiciones lo activan.`
  },

  // =========================================================================
  // EXPANSIÓN CAMPO DE BATALLA (BATTLEFIELD)
  // =========================================================================  
  {
    id: "cap_exp_campo_batalla_componentes",
    title: "Expansión Campo de Batalla: Componentes y Preparación (Modo Aventura y Escaramuzas)",
    category: "componentes",
    content: `Esta expansión añade un tablero de combate con casillas (en vez de las zonas del tablero de combate 4×5 del juego base) y dos modos nuevos para partidas 1 contra 1: Aventura y Escaramuzas. Ambos usan las reglas básicas con una serie de cambios (ver capítulo "Expansión Campo de Batalla: Uso en Partidas Normales" para los cambios de combate).

COMPONENTES: 1 tablero de campo de batalla, 10 fichas de obstáculo (doble cara: efecto, obstáculo, muralla/puerta), 2 ayudas de juego, 50 cartas de aventura, 10 cartas de moral positiva, 10 cartas de moral negativa, 1 ficha de iniciativa.

MAZO DE MORAL (sustituye a las fichas de moral del juego base en los modos Aventura y Escaramuzas, y se puede usar opcionalmente en partidas normales): baraja ambos mazos por separado y colócalos junto al marcador de rondas. Las cartas marcadas con el símbolo de campo de batalla se retiran o ignoran si se juega una partida normal.
• Mazo de Moral Positiva: cada vez que ganes moral positiva, descarta 1 carta de moral negativa si tienes alguna; si no, busca(2) en el mazo de moral positiva, quédate 1 boca arriba junto a tu héroe y devuelve el resto al fondo del mazo. Puedes tener hasta 2 cartas de moral positiva a la vez; úsalas cuando quieras para resolver su efecto, devolviéndolas después al fondo del mazo.
• Mazo de Moral Negativa: al recibir moral negativa, primero descarta 1 carta de moral positiva por cada carta de moral negativa que debas robar; si no tienes suficientes, roba las que falten y colócalas boca arriba junto a tu héroe (se resuelven cuando se cumpla la condición que indiquen); nunca se agotan. Tras resolverse, la carta vuelve al fondo del mazo de moral negativa.

PREPARACIÓN DEL MODO AVENTURA (además de la preparación estándar del juego base: elegir facción, mazo inicial, recursos iniciales 15 de Oro/3 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0», retirar las cartas de habilidad Diplomacia y Logística de la partida): coloca el tablero de campo de batalla entre los jugadores; prepara los mazos de aventura, moral positiva y moral negativa; prepara las fichas de obstáculo e iniciativa; ambos jugadores lanzan 2 dados de recursos y quien consiga más empieza.

PREPARACIÓN DEL MODO ESCARAMUZAS (similar, pero sin tablero de ciudad ni ingresos, ya que se salta directamente al combate): cada jugador recibe su carta de héroe, 7 cartas de unidad, 7 miniaturas, 3 cartas de especialidad y 1 carta de habilidad de héroe; se retiran Diplomacia y Logística; se prepara el mazo inicial de fuerza y magia; se coloca el tablero de campo de batalla, los mazos de moral y las fichas de obstáculo/iniciativa; ambos lanzan 2 dados de recursos y quien consiga más empieza.`
  },
  {
    id: "cap_exp_campo_batalla_modo_aventura",
    title: "Expansión Campo de Batalla: Modo Aventura",
    category: "modos",
    content: `Modo competitivo 1 contra 1 que sustituye el mapa por un mazo de 50 cartas de aventura, usadas para mejorar mazos, ganar recursos y reforzar ejércitos antes de un combate final decisivo en el tablero de campo de batalla. Permite controlar hasta 7 unidades. Se elige la duración: Pequeño (acaba en la ronda 9), Medio (ronda 13) o Grande (ronda 16).

Las cartas que dan recursos, movimiento o reducen costes (incluidas cartas de especialidad de héroe) no se añaden al mazo: se dejan junto a la carta de héroe, se usan 1 vez y se retiran de la partida. Los usos de Experto ganados durante las aventuras son de un solo uso; al empezar el combate final se rellena tu límite de Experto normal.

ESTRUCTURA DE LAS RONDAS: el jugador inicial (rondas impares) o el segundo jugador (rondas pares) roba 3 cartas de aventura, se queda 1 y pasa las otras 2 al rival, que se queda 1 y descarta la otra. Cada jugador resuelve su carta o la guarda boca abajo sobre su carta de héroe para más adelante (solo se puede guardar 1 a la vez; se puede descartar, jugar o sustituir por otra). Si ambos resuelven su carta en la misma ronda, resuelve primero quien empezó la ronda. Tras robar (pero antes de elegir), se puede usar el efecto de movimiento de una carta ya guardada para devolver cartas al mazo de aventura, barajarlo y volver a robar la misma cantidad. En la última ronda no se roban cartas nuevas (solo se puede jugar la guardada o gastar recursos); después llega el combate final. Se pueden seguir usando las acciones de ciudad con normalidad cada ronda.

RONDAS ASTROLÓGICAS: en vez de robar una carta de anuncio astrológico, cada jugador elige entre aumentar 1 nivel uno de sus tipos de ingresos, o lanzar 1 dado de recursos y aumentar 1 nivel el ingreso correspondiente además de ganar el ingreso básico de ese recurso (5 de Oro, 2 Materiales o 1 Objeto de Valor).

RESOLVER CARTAS DE AVENTURA: cada carta es de tipo Combate o Evento.
• Combate: elige uno de los poderes de combate disponibles en la carta; escoge 2 de tus unidades, suma sus valores de ataque y lanza 2 dados de ataque. Si tu poder de combate total iguala o supera el de la carta, ganas la recompensa básica y la de batalla. Si es menor, ganas solo la recompensa básica y una de las unidades usadas queda con ficha de parálisis (aturdida); si usas una unidad aturdida en un futuro combate de este tipo, no sumes su ataque y retírale la ficha después.
• Evento: resuelve el efecto indicado (los eventos de obelisco aumentan de intensidad con cada carta de obelisco jugada).

CONDICIÓN DE VICTORIA: gana quien derrote todas las unidades desplegadas por el rival en el combate final del campo de batalla.`
  },
  {
    id: "cap_exp_campo_batalla_modo_escaramuzas",
    title: "Expansión Campo de Batalla: Modo Escaramuzas",
    category: "modos",
    content: `Modo que salta directamente a un combate 1 contra 1 usando una de 3 plantillas predeterminadas de ejército y mazo, sin fase de exploración ni mapa.

GRANDE (héroe nivel 7): añade las 3 cartas de especialidad de héroe; roba 6 cartas de habilidad al azar y quédate con 4 (retira 2); roba 4 cartas de artefacto al azar y quédate con 3 (retira 1); roba 3 cartas de hechizo si eres héroe de fuerza, o 5 si eres héroe de magia. Baraja tu mazo; coloca tus 7 cartas de unidad por la cara "manada".

MEDIO (héroe nivel 5): añade las cartas de especialidad de nivel I y IV; roba 4 cartas de habilidad y quédate con 3 (retira 1); roba 3 cartas de artefacto y quédate con 2 (retira 1); roba 2 cartas de hechizo (fuerza) o 4 (magia). Coloca tus unidades de bronce y plata por la cara "manada".

PEQUEÑO (héroe nivel 3): añade la carta de especialidad de nivel I; roba 3 cartas de habilidad y quédate con 2 (retira 1); roba 2 cartas de artefacto y quédate con 1 (retira 1); roba 1 carta de hechizo (fuerza) o 2 (magia). Coloca tus unidades de bronce y plata por la cara "unas pocas".

Tras preparar tu mazo y ejército según la plantilla elegida, sigue las instrucciones de "Combate en el Campo de Batalla" (colocación de obstáculos, zona de despliegue y unidades). Condición de victoria: gana quien derrote todas las unidades desplegadas por el rival.`
  },
  {
    id: "cap_exp_campo_batalla_partidas_normales",
    title: "Expansión Campo de Batalla: Uso en Partidas Normales (Cambios en las Reglas de Combate)",
    category: "combate",
    content: `El tablero de campo de batalla y sus fichas de obstáculo se pueden usar en cualquier partida normal (recomendado solo para combates entre jugadores; si se usa contra unidades neutrales, se ignora el límite de rondas y no se gasta PM para prolongar el combate, aunque esto alarga bastante la partida).

COLOCAR OBSTÁCULOS: las fichas de obstáculo (doble cara: efecto, obstáculo, muralla/puerta) sustituyen a los obstáculos de combate del juego base; las miniaturas de unidad también cuentan como obstáculos. Empezando por el jugador atacante (o el inicial, en Aventura/Escaramuzas), ambos colocan por turnos sus obstáculos elegidos; ninguno puede quedar adyacente a otro obstáculo ni a una zona de despliegue. Los colocados correctamente muestran borde verde; los incorrectos, borde rojo. Para el Muro de Fuego, se coloca su ficha de efecto en una zona vacía y la carta de hechizo se deja cerca del tablero como recordatorio.

COLOCAR UNIDADES: empezando por el jugador atacante (o inicial), se colocan por turnos las unidades en el tablero; al colocar la última, empieza el combate.

CAMBIOS EN LAS REGLAS DE COMBATE:
• Movimiento por iniciativa: cada unidad se mueve tantas casillas como su valor de Iniciativa (p. ej. iniciativa 8 = hasta 8 casillas). Marca con tu cubo de facción cuando termine su activación; se retiran al inicio de la siguiente ronda.
• Unidades a distancia: pueden moverse o atacar; sufren penalización de combate si atacan a una unidad adyacente o a 8+ casillas de distancia.
• Ficha de Iniciativa: al inicio del combate la recibe el jugador atacante (o el inicial, en Aventura); sirve para desempatar iniciativa (quien la tiene actúa primero en el empate); tras activarse todas las unidades con esa iniciativa, pasa al otro jugador.
• Mazo de fuerza y magia: el límite de cartas de nivel avanzado (Experto) se aplica por ronda de combate, no al combate completo. Al final de cada ronda, cada jugador roba 2 cartas de su mazo y recupera 1 uso de Experto (sin superar su límite).
• Asedio: solo se colocan fichas de muralla y puerta (no obstáculos ni de efecto); las unidades del defensor pueden atravesar la puerta como zona vacía; para destruir muralla/puerta, una unidad debe atacarla desde una casilla adyacente, igual que en el juego base.
• El resto de reglas de combate del juego base se mantienen sin cambios.

MAZOS DE MORAL EN PARTIDAS NORMALES (opcional): se pueden usar en vez de las fichas de moral del juego base, con la misma mecánica descrita en "Componentes y Preparación", salvo que cada vez que ganes moral positiva o negativa robas 1 carta del mazo correspondiente; si ese mazo está vacío en algún momento, se aplican las reglas básicas de fichas.`
  },

  // =========================================================================
  // RESPUESTA ASTROLÓGICA (FAQ Y COMENTARIOS DE LOS DISEÑADORES)
  // =========================================================================
  {
    id: "faq-01-mecanicas-y-heroes",
    title: "FAQ Diseñadores 1. Mecánicas de Juego Generales y Lógica de Héroes",
    category: "faq",
    content: `RESPUESTAS Y ACLARACIONES OFICIALES DE LOS DISEÑADORES (MECÁNICAS Y HÉROES):

ORDEN DE PRIORIDAD DE LAS REGLAS:
1. Cartas en juego (Efectos activos e instantáneos)
2. Cartas de unidad (Habilidades especiales de tropas)
3. Tableros de ciudad
4. Libros de misión / escenario
5. Libro de reglas básico

Aclaración: Si un efecto activo interfiere con una regla general, la carta o habilidad específica siempre tiene prioridad sobre el reglamento.

MECÁNICAS DE JUEGO GENERALES:
• Producción en Ronda 1: En la primera ronda NO se recogen recursos por la producción de la ciudad; solo se reciben los recursos iniciales indicados en la preparación del escenario.
• Orden de Turnos en Modo Alianza: Los equipos se activan alternadamente. Dentro del turno del equipo, los miembros pueden acordar libremente cuál de ellos actúa primero en cada ronda.
• Despliegue de Miniaturas por Defecto: Si el escenario no especifica la casilla exacta, las miniaturas se colocan en la ciudad o en la loseta inicial.
• Obligación de Resolver Zonas: Al entrar en cualquier zona del mapa, es obligatorio resolver la localización, comenzando por el combate si hay tropas neutrales o enemigas.
• Reutilización de Zonas Refrescadas o Mercadillos: Aunque tu héroe ya se encuentre físicamente en la zona (por un evento o mercadillo), debes gastar 1 Punto de Movimiento (PM) para volver a activar sus efectos.
• Cofradía de Magos y Búsqueda de Hechizos: Al buscar (X), puedes elegir una carta del descarte de hechizos o robar X cartas al azar de la parte superior del mazo. Los hechizos no deseados se pueden usar para potenciar el Poder de Hechizo de otras cartas.
• Cartas Adquiridas: Las cartas ganadas o compradas se añaden directamente a tu MANO, no al mazo de descarte.
• Re-señalizar Asentamientos: Si señalizas un asentamiento ya controlado, puedes cambiar/elegir un bonificador de la lista, pero NO vuelves a recibir la bonificación por señalizarlo por primera vez. Un asentamiento de tu propio bando o de un aliado no se puede volver a señalizar.
• Líneas del Mapa (Delgadas vs Gruesas): Las líneas delgadas separan zonas transitables. Las líneas gruesas bloquean por completo el camino y el movimiento a menos que una habilidad o regla de escenario permita cruzarlas.
• Zonas de Grial Renovables: Solo existe 1 ficha física de Grial por escenario. Si hay 2 zonas con símbolo de Grial en el mapa, al recoger la ficha en una de ellas, la otra pasa a ser una zona vacía (aunque requiera resolver combate si hay guardianes).
• Gestión de Moral Negativa: La forma más directa de eliminar la ficha de moral negativa es ganar moral positiva. En lugar de coger la ficha positiva, descarta la ficha negativa. La facción Necrópolis es completamente inmune a los efectos de moral.
• Héroes de Fuerza vs Magia: Los héroes de magia empiezan con más hechizos pero tienen menos cartas de uso ilimitado (ataque/defensa). Además, los hechizos consumen cartas adicionales de la mano para aumentar su Poder de Hechizo (Spell Power).
• Cartas de Moral (+1 Ataque, Defensa o Poder de Combate): Debe jugarse ANTES de que empiece el combate y se aplica únicamente al primer ataque o defensa que resuelvas (o al poder de combate en Modo Aventura).

DESARROLLO Y MANEJO DE HÉROES:
• Atributos de la Carta de Héroe: Los atributos impresos en la carta de héroe solo sirven para configurar el mazo inicial. No se aplican de forma pasiva durante la partida. La carta de Especialidad Nivel I se añade al mazo inicial, mientras que las cartas de Nivel IV y VI se añaden cuando el héroe alcanza dichos niveles.
• Dos Héroes en la Misma Loseta: Se permite tener dos héroes propios o aliados en la misma loseta, siempre que estén en zonas distintas. Puedes atravesar una zona con otro héroe aliado, pero no puedes finalizar el movimiento en la misma zona. Si entras en una zona con un héroe enemigo, se inicia el combate.
• Héroe Secundario y Tesoros/Experiencia: Los héroes secundarios NO pueden ganar experiencia (si obtienen tirada de experiencia, la ignoran). Cualquier carta o recurso que consigan se añade a las reservas del héroe principal.
• Avance de Experiencia: Por cada 2 puntos de Experiencia (EXP) que gane el héroe principal, sube 1 Nivel en el marcador.
• Especialidades Generales (Mutare, Josephine, etc.): Las cartas de especialidad que mencionan categorías amplias (ej. 'dragones') benefician a cualquier unidad que contenga esa palabra en su nombre.
• División de Puntos de Movimiento (PM): Puedes intercalar y dividir las acciones entre el héroe principal (3 PM) y el secundario (2 PM) como prefieras, rastreando sus PM por separado.
• Límite de Fichas de Experto: Se pueden acumular más de 3 fichas de Experto mediante efectos de artefactos u otras cartas.`
  },
  {
    id: "faq-02-ciudad-y-combate",
    title: "FAQ Diseñadores 2. Construcción de Ciudad y Reglas Tácticas de Combate",
    category: "faq",
    content: `RESPUESTAS Y ACLARACIONES OFICIALES DE LOS DISEÑADORES (CIUDAD Y COMBATE):

GESTIÓN DE LA CIUDAD:
• Cofradía de Magos durante Ataque Enemigo: Si te van a atacar en el turno enemigo, puedes construir la Cofradía de Magos y obtener de inmediato los hechizos que ofrece al construirse. No obstante, no puedes usar la ficha de Libro de Hechizos en ese mismo turno porque ambas cuentan como la acción de Cofradía (máximo 1/ronda).
• Edificios de Ciudad Enemiga Capturada: Si capturas la ciudad de otro jugador, no puedes usar sus edificios para reclutar o construir a menos que el escenario indique explícitamente lo contrario.
• Límite de Reclutamiento y Refuerzo: La ficha de población se usa 1 vez por ronda para reclutar un héroe secundario O bien reclutar/reforzar tropas. Si decides reclutar/reforzar, puedes realizar múltiples compras y refuerzos de unidades en cualquier momento del turno pagando sus costes individuales.
• Movimiento Adicional de la Alcaldía: El +1 PM otorgado por la Alcaldía se puede asignar libremente al héroe principal o al secundario.

REGLAS TÁCTICAS DE COMBATE:
• Elección de Múltiples Objetivos: Cuando una carta o habilidad afecta a varios objetivos, el jugador que juega la carta elige a cuáles afecta para maximizar su ventaja.
• Significado de la palabra 'Hasta': Otorga flexibilidad y permiso (no obligación) para seleccionar menos o más objetivos de los indicados.
• Fuego Amigo en Hechizos y Habilidades: Hechizos de área (Bola de fuego, Anillo gélido, Inferno) y habilidades de aliento (Dragones, Liches) dañan a unidades aliadas si están adyacentes al objetivo. Debe usarse tácticamente.
• Cartas Instantáneas entre Ataque y Contraataque: Se pueden jugar cartas con el símbolo de efecto instantáneo inmediatamente después del ataque y antes del contraataque.
• Reclutamiento Pre-Combate: Puedes reclutar/reforzar unidades justo antes de entablar combate contra otro jugador si aún no has gastado tu ficha de población de la ronda.
• Ubicación de Puertas y Murallas en Asedio: Se colocan en la fila sombreada central del tablero de combate. El jugador defensor escoge cuál de las 4 casillas de la fila sostiene la carta de Puerta.
• Combates Rápidos de Héroes Secundarios: Se determinan usando el nivel del héroe principal (ya que el secundario no tiene nivel propio).
• Hechizo Resurrección y Contraataque: Si una unidad pasa de la cara 'Manada' a 'Unas pocas', Resurrección se activa en el instante en que los PG llegan a 0, anulando el golpe definitivo y evitando que la unidad defensora contraataque.
• Hechizos y Tirada de Ataque/Defensa: Los hechizos ignoran la defensa de la unidad e infligen el número exacto de fichas de daño indicado. No se tira dado de ataque para potenciar hechizos.
• Ignorar Contraataques: La habilidad de ignorar contraataques (ej. Duendes) se aplica a TODOS los ataques que realice la unidad en esa ronda.
• Tienda de Primeros Auxilios: Se usa 1 vez por ronda de combate y debe activarse ANTES de que la unidad reciba el ataque/contraataque para salvarla antes de que sufra el daño.
• Daño por Hechizo y Parálisis: Sufrir al menos 1 punto de daño por cualquier fuente (incluidos hechizos) retira la ficha de Parálisis de la unidad.
• Habilidad Especial de los Liches: Su efecto en área funciona en todos sus ataques.
• Cartas Instantáneas en Turno Enemigo: Se pueden jugar en cualquier momento antes de la tirada de ataque enemiga.
• Control de Unidades Neutrales: Las unidades neutrales están obligadas a atacar si hay un objetivo al alcance. No pueden defenderse ni alejarse si pueden golpear.
• Hechizo Retirar Obstáculo: Puede eliminar puertas, murallas y muros de fuego, pero NUNCA unidades militares.
• Muro de Fuego y Tránsito: A diferencia de otros obstáculos, el Muro de Fuego no impide que una unidad entre en la casilla (sufriendo el daño correspondiente).
• Hechizo Terremoto: Afecta únicamente a obstáculos de muralla y puerta.
• Concepto de 'Adyacente': En el tablero de combate estándar es ortogonal exclusivamente. En el tablero de Campo de Batalla (hexagonal) son todas las casillas que comparten un borde.
• Hechizo Furia Asesina: Quien recibe la Furia Asesina en su unidad elige a quién atacar, pero está obligado a atacar a la unidad más cercana (incluso si es aliada).
• Derrota contra Neutrales: Si pierdes todas tus unidades contra neutrales, el héroe se retira a una ciudad o asentamiento controlado con las tropas iniciales del escenario.
• Empate contra Neutrales: Si se activan todas las tropas sin un vencedor y no gastas PM para prolongar, el héroe se retira a la última zona visitada.`
  },
  {
    id: "faq-03-unidades-y-cartas",
    title: "FAQ Diseñadores 3. Habilidades Únicas de Unidades y Lógica de Cartas",
    category: "faq",
    content: `RESPUESTAS Y ACLARACIONES OFICIALES DE LOS DISEÑADORES (UNIDADES Y CARTAS):

HABILIDADES ESPECIALES DE UNIDADES:
• Ataques Múltiples (ej. Cruzados, Hidras): Cada ataque se resuelve y tira por separado. Las cartas instantáneas solo potencian el primer ataque de la activación.
• Tarjeta Volteada a 'Unas Pocas': Cualquier carta o modificador aplicado a la unidad permanece en su tarjeta aunque pase de 'Manada' a 'Unas pocas'.
• Volver a Tirar Dados (Cruzados): La habilidad dice 'puedes', lo que permite aceptar un resultado de 0 o volver a tirar todos los dados de ataque que hayan sacado 0.
• Habilidades Pasivas en el Mapa: Las habilidades pasivas impresas en las cartas de unidad solo funcionan durante la fase de combate, no en el mapa.
• Ataque en Línea de Dragones: Atacan a 2 unidades alineadas. El dragón sufre únicamente el contraataque de la unidad directamente adyacente.
• Hechizo Bendición vs Zombis: Bendición ignora la tirada de dado. Al no resolverse el dado, los Zombis no ganan su defensa especial.
• Penalización de Libélulas: La penalización de ataque infligida por las libélulas afecta únicamente al contraataque inminente de la unidad alcanzada.
• Habilidad de las Momias: Al atacar, tiran dado pero ignoran el resultado. Al defender, giran el dado del atacante para mostrar -1.
• Ignorar Efectos Continuos (Titanes, Gárgolas): Ignoran todas las cartas que contengan el símbolo de efecto continuo (Ongoing).
• Inmunidad de los Efrits: Son inmunes a HECHIZOS, no a cartas de especialidad de héroe.
• Escudo de Fuego / Especialidad de Rashka: El atacante sufre el daño reflejado inmediatamente en el mismo paso del ataque (incluso si destruye al defensor).
• Marcadores de Veneno de Wyverns: Cada ataque coloca un cubo. Al activarse la unidad afectada, retira 1 cubo y sufre 1 de daño. Curación retira todos los cubos.
• Desplazamiento por Dragones Fantasma: El jugador que controla la unidad objetivo la desplaza 1 casilla libre no adyacente a los dragones.

LÓGICA Y USO DE CARTAS:
• Cartas de Especialidad vs Hechizos: Las cartas de especialidad imitan hechizos pero NO son hechizos. No consumen el límite de hechizos de la ronda ni se benefician de escuelas de magia.
• Cartas de Especialidad Novedosas (Sandro / Vidomina IV): Pueden jugarse en el mapa o en combate. Sandro puede asignar 2 de estas cartas a sus esqueletos.
• Cartas de Especialidad Nombres Específicos (ej. Caballeros del Terror): Se pueden jugar sobre cualquier unidad propia, aunque suelen rendir mejor en la unidad que lleva su nombre.
• Nigromancia en Tropas Neutrales: La facción Necrópolis solo puede reforzar ('Manada') a sus propias unidades no muertas.
• Descuento de Nigromancia: Aplica exclusivamente al coste en ORO (reducido a la mitad, redondeando hacia abajo).
• Momento de Lanzar 'Pesar': Es un efecto instantáneo que debe jugarse ANTES de que la unidad enemiga comience su activación.
• Rayo Disruptor vs Dragones Negros: No afecta a una 'Manada' de Dragones Negros (inmunes a hechizos), pero SÍ afecta a 'Unas Pocas' de Dragones Negros (que solo reducen daño).
• Flecha Mágica (Escuelas y Rareza): Pertenece a las 4 escuelas de magia (obtiene beneficio de 1 a la vez) y cuenta como hechizo BÁSICO.
• Cartas Permanentes Activas: Solo puedes mantener 1 carta permanente activa a la vez por héroe.
• Coste de Descarte al Jugar Carta: Debes resolver primero el efecto de la carta antes de depositarla en el mazo de descarte.
• Cartas de Efecto Instantáneo en el Mapa: Se pueden jugar en el mapa, pero efectos orientados a combate directo se desperdician. Son ideales para ganar recursos o movimiento.
• Recuperar Cartas con Conocimiento: Cartas de Conocimiento solo pueden recuperar cartas de HECHIZO del descarte (nunca especialidades de héroe).`
  },
  {
    id: "cap_faq_diferencias_videojuego",
    title: "Preguntas Frecuentes: Diferencias entre el Videojuego Original y el Juego de Mesa",
    category: "faq",
    content: `Bloque de la Respuesta Astrológica (Designer's Commentary) dedicado a aclarar dudas de quienes conocen el videojuego original de Heroes of Might and Magic III y esperan que el juego de mesa funcione igual en todo:
• No hace falta volver a la ciudad para reclutar unidades: en el juego de mesa se puede reclutar desde cualquier punto del mapa, 1 vez por ronda, con la ficha de población.
• Cada Choza de la Bruja del mapa solo se puede visitar 1 vez por partida (no un número ilimitado de veces como en el videojuego).
• Solo se puede reclutar 1 héroe secundario adicional (no varios a la vez), y queda disponible para jugar de inmediato en cuanto lo reclutas.
• La ficha de moral positiva NO otorga una activación extra de unidad en combate (a diferencia del videojuego); solo permite 1 de las 3 acciones del reglamento base (robar carta, cambiar cartas, o repetir 1 dado).
• La habilidad Resistencia sí puede anular cualquier hechizo enemigo en el juego de mesa (más flexible que en el videojuego, donde solo protegía frente a ciertos hechizos).
• Solo Nigromancia está restringida a una facción concreta (Necrópolis); el resto de hechizos y efectos son universales para cualquier facción, salvo que la propia carta indique lo contrario.
• Por norma general se lanza 1 hechizo por ronda de combate (salvo que un efecto, como algunas cartas de conocimiento en su versión avanzada, amplíe ese límite), a diferencia de la mayor libertad de lanzamiento del videojuego.`
  },

  // =========================================================================
  // LIBRO DE MISIONES DEL JUEGO BASE (MISSION BOOK)
  // =========================================================================
  {
    id: "cap_lm_base_enfrentamiento",
    title: "Libro de Misiones Básico: Escenarios de Enfrentamiento",
    category: "modos",
    content: `3 escenarios competitivos que usan las condiciones de victoria universales del capítulo 12 salvo que se indique lo contrario.

ESCENARIO — "El Retiro de los Monjes" (2 jugadores, dura 7 rondas): recursos iniciales 15 de Oro/4 Materiales/2 Objetos de Valor, ingresos «15»/«2»/«1». Cada jugador empieza con vivienda de bronce, ciudadela, cofradía de magos, y 2 unidades "unas pocas" de bronce del mayor coste. Al preparar la cofradía inicial, se busca(3) una vez en vez de buscar(2) dos veces. No se puede reclutar héroe secundario. Al inicio de las rondas de recursos, se puede elegir entre +2 Materiales o +1 Objeto de Valor adicional. Al visitar un obelisco por primera vez, se lanzan 2 dados de recursos y se añaden a la reserva los del dado elegido. Al asediar la ciudad de otro jugador, el defensor no paga Oro para transportar su ejército y puede usar su mazo de fuerza y magia en ese combate. Victoria: vencer al héroe enemigo en combate. Si nadie gana antes del final de la ronda 7, ambos completan su mano y libran un combate final (atacante = mayor experiencia; en empate, quien saque más en 2 dados de recursos).

ESCENARIO — "Un Mundo Feliz" (2-3 jugadores, dura 8-9 rondas): recursos iniciales 15 de Oro/3 Materiales/1 Objeto de Valor, ingresos «10»/«2»/«1». Cada jugador empieza con vivienda de bronce, 1 unidad "unas pocas" de bronce del mayor coste y 1 manada de bronce del menor coste. Al visitar un obelisco por primera vez, se lanzan 2 dados de recursos y se añade 1 resultado a la reserva. Derrotar a otro héroe da 20 de Oro. Victoria: al final de una ronda, si alguien controla 5+ minas, se juega 1 ronda más y gana quien tenga más minas al final (empate total = empate). Si nadie llega a 5 minas antes del final de la ronda 8, gana quien tenga más minas al final de la ronda 9.

ESCENARIO — "Todos para Uno" (3 jugadores, dura 11 rondas): recursos iniciales 10 de Oro, ingresos «15»/«2»/«1». Cada jugador empieza con vivienda de bronce, alcaldía, ciudadela, 1 unidad "unas pocas" de bronce del mayor coste y 1 "unas pocas" de bronce del menor coste. El héroe principal empieza a nivel 3 (busca(2) dos veces en habilidades y añádelas a tu mazo inicial). Al visitar un obelisco, lanza 2 dados de tesoro y resuelve 1. Los jugadores pueden usar su mazo de fuerza y magia al pagar Oro para defender su ciudad. Al capturar la ciudad de un oponente: aumentas tus ingresos en la cantidad que tenía tu oponente, y recibes de inmediato 15 de Oro/2 Materiales/1 Objeto de Valor. Derrotar a un héroe principal da 10 de Oro; si tu héroe principal es derrotado, pierdes el escenario y quedas eliminado. Se ignoran los combates de la zona del grial; no se puede visitar hasta haber visitado 2 obeliscos distintos o hasta que algún héroe ya haya cogido la ficha; conseguirla cuesta 2 PM en su zona; si te derrotan o te rindes con ella, pasa a quien te venció o se queda en la zona de rendición; si te derrota un ejército neutral, se queda en esa zona. Victoria: quedar como único jugador, o depositar el grial en tu ciudad. Si al final de la ronda 11 no hay ganador ni eliminado, todos pierden; si hay 1 eliminado, los 2 restantes completan su mano y libran un combate final.`
  },
  {
    id: "cap_lm_base_cooperativo",
    title: "Libro de Misiones Básico: Modo Cooperativo (Reglas Generales y Escenarios)",
    category: "modos",
    content: `En las partidas cooperativas todos los jugadores están aliados contra el propio escenario. Al controlar unidades neutrales, se usan las reglas de Combate de la IA (capítulo 11). Al visitar un mercadillo, además de su efecto normal, se puede usar para dar recursos a cualquier jugador. Las condiciones de victoria suelen ser derrotar cierta cantidad de unidades neutrales o controlar ciertos lugares; salvo que se indique lo contrario, al cumplirse la condición la partida acaba de inmediato y todos comparten la victoria.

ESCENARIO — "Los Campeones de Gelea" (2-3 jugadores, dura 11 rondas): recursos iniciales 15 de Oro/3 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce y 3 unidades "unas pocas" de bronce. Incluye 1 loseta central (VII-VIII) con la utopía del dragón. Al visitar un obelisco, lanza 2 dados de tesoro y resuelve 1. No se puede entrar en la utopía del dragón hasta que tu facción haya visitado al menos 2 obeliscos (partida a 2) o 3 (partida a 3); al visitarla por primera vez, coloca ahí tu cubo de facción. Ningún jugador puede atacar a otros héroes ni capturar una mina/asentamiento ya controlado por otro. Victoria: la utopía del dragón tiene un cubo de cada facción. Si al final de la ronda 11 falta algún cubo, todos pierden.

ESCENARIO — "Misión Maldita" (2-3 jugadores; duración según dificultad: Fácil 8, Normal 10, Difícil 12, Imposible 14 rondas): recursos iniciales 6 de Oro/2 Materiales, ingresos «10»/«2»/«1». Cada jugador empieza con vivienda de bronce, vivienda de plata, ciudadela, y 1 unidad "unas pocas" de bronce del menor coste. Incluye 1 loseta central con la utopía del dragón. Antes de empezar, se crea un mazo especial de unidades neutrales para la utopía robando al azar de los 4 mazos por categoría, en cantidad según la dificultad (p. ej. Normal: 4 bronce/5 plata/3 oro/2 azur); al entrar en la utopía se roban 5 cartas de ese mazo especial en vez de los mazos normales (las derrotadas vuelven a su mazo de origen; las supervivientes, de vuelta al mazo de la utopía, barajado). Prolongar el combate contra unidades azur en la utopía cuesta 1 PM por ronda, igual que cualquier otra categoría. Al visitar un obelisco, lanza 1 dado de tesoro y 1 de recursos, elige uno y resuélvelo. No se puede entrar en la utopía hasta visitar 2 obeliscos (partida a 2) o 3 (partida a 3). Ningún jugador puede atacar a otros héroes ni capturar una mina/asentamiento ya controlado. Victoria: derrotar todas las unidades del mazo especial de la utopía antes de que acabe el límite de rondas según la dificultad elegida.`
  },
  {
    id: "cap_campana_castillo",
    title: "Campaña del Castillo: Larga Vida a la Reina",
    category: "campaña",
    content: `Campaña de 3 misiones para la facción Castillo, protagonizada por Catherine (y desde la 2ª misión, opcionalmente Rion), contra héroes de IA de Mazmorra (referencia de preparación y condiciones; el contenido narrativo de cada misión está en el Libro de Misiones físico). Es la única campaña incluida en el juego base, sin necesidad de expansiones.

MISIÓN 1 — "De Regreso al Hogar" (8 rondas): héroe Catherine. Recursos iniciales 15 de Oro/1 Material, sin edificios iniciales. Bonificador a elegir: reforzar arqueros y alabarderos, +3 Objetos de Valor, o buscar(3) en artefactos. Héroe de IA: ejército de Mazmorra (nivel IV neutral + unos pocos minotauros). Reglas: tu héroe no gana experiencia a partir de nivel 4; no puedes construir ningún edificio, pero puedes reclutar unidades de bronce y plata (no oro) y reforzarlas sin tener las viviendas necesarias; cada ronda es de recursos, pero solo con ingresos de minas/asentamientos; visitar un obelisco activa un evento especial; el héroe enemigo no se mueve; no controlar una ciudad no implica perder. Victoria: alcanzar la ciudad de Mazmorra, derrotar a su facción presente y liberar a Rion. Derrota: perder un combate, o no capturar la ciudad antes del final de la ronda 8.

MISIÓN 2 — "Ángeles Guardianes" (10 rondas): héroe a elegir entre Catherine o Rion. Recursos iniciales 15 de Oro/3 Materiales/1 Objeto de Valor. Edificio inicial: vivienda de bronce. Bonificador a elegir: añadir hechizo Bendición a la mano, +10 de Oro, o añadir unos pocos fanáticos. Héroes de IA (Mazmorra): primer señor y segundo señor. Reglas: tu héroe no gana experiencia a partir de nivel 5; los héroes enemigos no se mueven; no se puede construir la Gloria de Erathia salvo condición especial del escenario; se lucha primero contra el primer señor, después el segundo. Victoria: derrotar ambos ejércitos enemigos. Derrota: perder un combate, o no derrotarlos antes del final de la ronda 10.

MISIÓN 3 — "La Liberación de Steadwick" (13 rondas): mismo héroe elegido. Recursos iniciales 15 de Oro/3 Materiales/1 Objeto de Valor, +2 de producción de Materiales. Edificios iniciales: vivienda de bronce, vivienda de plata, ciudadela. Bonificador a elegir: añadir hechizo Bendición, +10 de Oro, o buscar(3) en artefactos. Héroes de IA (Mazmorra): héroes atacantes (2, con el mismo mazo de IA) y el ejército de Steadwick (defensor de la utopía del dragón). Reglas: tu héroe empieza a nivel 2; los obeliscos dan 2 Objetos de Valor; los héroes enemigos se mueven antes que tú (según las reglas básicas, a diferencia de misiones previas); derrotar el ejército de un héroe atacante da 2 Objetos de Valor; en la utopía del dragón luchas contra el ejército de Steadwick. Victoria: derrotar al ejército de la utopía del dragón (los héroes atacantes son opcionales). Derrota: perder el control de tu ciudad, o no ganar antes del final de la ronda 13.`
  },

  // =========================================================================
  // SUPLEMENTO DEL REGLAMENTO - ESCENARIO INTRODUCTORIO TUTORIAL
  // =========================================================================
  {
    id: "cap_suplemento_escenario_tutorial",
    title: "Suplemento de Reglas: Escenario Introductorio (Tutorial)",
    category: "preparación",
    content: `El Suplemento de Reglas es un librito tutorial pensado para empezar a jugar sin necesidad de leer antes el libro de reglas completo, guiando a los jugadores a través de una primera ronda pre-planificada. Su contenido de reglas ya está cubierto en los demás capítulos de este documento; aquí se recoge únicamente el escenario de Enfrentamiento que propone, jugable de forma independiente.

ESCENARIO "TUTORIAL" (2 jugadores, dura 8 rondas): enfrenta a la facción Mazmorra (héroe Mutare) contra la Necrópolis (héroe Tamika), ambas predeterminadas. Preparación del mapa: loseta inicial de Necrópolis (S1) y de Mazmorra (S2); losetas lejanas (II-III) F4, F5, F7, F8 barajadas bocabajo; losetas cercanas (IV-V) N1, N2 barajadas bocabajo. Cada jugador conserva solo la loseta de edificio con vivienda de bronce en su tablero de ciudad, con el resto aparte. Ingresos iniciales «10» de Oro/«2» Materiales/«1» Objeto de Valor. Recursos iniciales 15 de Oro/4 Materiales/1 Objeto de Valor. Cada jugador recibe sus 3 unidades de bronce (cara "unas pocas") como ejército inicial del escenario.

Mazo inicial de Mutare (Mazmorra): 2 Ataque, 2 Defensa, 1 Poder, 1 Conocimiento, 1 carta de habilidad Táctica, 1 carta de especialidad "Dragones" (numeral I), 1 Flecha Mágica.
Mazo inicial de Tamika (Necrópolis): 1 Ataque, 2 Defensa, 2 Poder, 1 Conocimiento, 1 carta de habilidad Ofensiva, 1 carta de especialidad "Caballero del Terror" (numeral I), 1 Flecha Mágica.

Ambos jugadores lanzan 2 dados de recursos; quien saque más elige facción (en este tutorial, la Necrópolis es siempre el jugador inicial). Reglas propias del escenario: no se puede reclutar héroe secundario; no se puede construir el Ayuntamiento (por ser una partida corta, sus ingresos no compensan su coste); si el combate final entre ambos héroes no ocurre antes de que acabe el turno de la Mazmorra en la ronda 8, se libra automáticamente al final de esa ronda, con la Mazmorra como atacante. Victoria: entrar en el campo del héroe rival y derrotarlo en combate (el jugador con unidades supervivientes gana).

Lista de lugares específicos de este escenario tutorial: Piedra de Aprendizaje, Manantial Mágico, Mina, Jardín Místico, Observatorio de Caoba, Símbolo de Recursos, Santuario del Encantamiento, Templo, Ciudad, Mercadillo, Símbolo de Tesoro, Árbol del Conocimiento, Tumba del Guerrero, Molino de Agua, Molino, Santuario y Establos — todos ellos ya recogidos con su efecto completo en el capítulo 8 (Elementos del Mapa) de este documento.`
  },

  // =========================================================================
  // MANUAL DE REGLAS REESCRITO V1.3 (HERMANNI "HEEGU" KARPPELA)
  // =========================================================================
  {
    id: "reescritura-01-principios-y-prioridades",
    title: "Reescritura 1. Prioridad Oficial de Componentes, Jerarquía de Reglas y Preparación Unificada",
    category: "general",
    content: `PRINCIPIOS Y JERARQUÍA DE REGLAS DE LA REESCRITURA OFICIAL (v1.3):

ORDEN DE PRIORIDAD EN CASO DE CONFLICTO:
Si se produce una contradicción entre componentes o textos de regla, la prioridad es estricta:
1. Cartas de Jugador (Cartas en mano o jugadas)
2. Cartas de Unidad (Habilidades impresas en las cartas de tropa)
3. Tableros de Ciudad (Reglas específicas de cada bastión)
4. Libro de Misiones (Condiciones y reglas de escenario)
5. Libro de Reglas General (El reglamento impreso / reescrito)

PRINCIPIOS GENERALES Y GLOSARIO UNIFICADO:
• Mayúsculas y Términos Técnicos: Los componentes, tipos de cartas y estados del juego comienzan siempre con mayúscula para diferenciarse del texto narrativo.
• Prioridad de Cartas Activas: Cualquier efecto temporal 'En Curso' (Ongoing) o 'Permanente' prevalece sobre la regla básica mientras permanezca en juego.
• Unicidad de Cartas Permanentes: Solo se permite tener 1 carta Permanente activa a la vez por jugador. Jugar una nueva carta Permanente exige descartar la anterior.

PREPARACIÓN UNIFICADA DE PARTIDA (22 PASOS):
1. Seleccionar Escenario del Libro de Misiones (ej. 'Un Mundo Feliz').
2. Escoger Facción e identificar Héroe Principal.
3. Tomar componentes de facción (Carta de Héroe, 2 Figuras, 7 Losetas de Edificio, Tablero de Ciudad, 7 Cartas de Unidad, 3 Especialidades, 1 Habilidad Inicial, 20 Cubos de Facción, Fichas de Construcción, Población, Libro de Hechizos y 3 Fichas de PM).
4. Colocar 1 Cubo de Facción en Nivel 1 del registro del héroe.
5. Colocar Losetas de Mapa según el diagrama del escenario.
6. Ajustar ingresos iniciales con Cubos de Facción en el Tablero de Ciudad y tomar la reserva inicial de recursos.
7. Construir Mazo Inicial de Fuerza y Magia (9 cartas): Características según la Carta de Héroe + Habilidad Inicial + Especialidad Nivel 1 + 1 Flecha Mágica (si es Héroe de Fuerza) o 2 Flechas Mágicas (si es Héroe de Magia).
8. Crear Mazos Generales de Habilidades, Artefactos y Hechizos con sus respectivas Pilas de Descarte visibles.
9. Definir Dificultad del Escenario y cobrar el bonus inicial correspondiente.
10. Determinar Jugador Inicial: Lanza 2 dados de recurso. El jugador inicial NUNCA cambia durante la partida.`
  },
  {
    id: "reescritura-02-heroes-mazo-experiencia",
    title: "Reescritura 2. Lógica Integrada de Héroes (Principal y Secundario), Subida de Nivel y Gestión de Mazo",
    category: "héroes",
    content: `REGLAS UNIFICADAS DE HÉROES, EXPERIENCIA Y CONSTRUCCIÓN DE MAZO:

HÉROE PRINCIPAL VS HÉROE SECUNDARIO:
1. Héroe Principal:
   - Representado por figura, Carta de Héroe y Mazo de Fuerza y Magia.
   - Dispone de 3 Puntos de Movimiento (PM) por turno.
   - Gana Experiencia (EXP) y sube del Nivel 1 al 7. Es el único que utiliza el Mazo.
2. Héroe Secundario:
   - Requiere Ficha de Población + 10 de Oro. Aparece en una Ciudad o Asentamiento controlado.
   - Dispone de 2 Puntos de Movimiento (PM) por turno (2 fichas de movimiento dedicadas).
   - NO tiene Carta de Héroe, NO gana Experiencia y NO puede jugar cartas del Mazo.
   - Comparte el mismo Nivel que el Héroe Principal a efectos de resolver Combates Rápidos.
   - Si es atacado por un héroe enemigo, el jugador puede decidir su derrota instantánea para no arriesgar sus unidades. Si cae derrotado, es eliminado y puede reclutarse de nuevo con la Ficha de Población.

EFECTOS DETALLADOS POR SUBIDA DE NIVEL:
• Nivel 1: Límite de Mano = 4. Añade la 1ª Carta de Especialidad al Mazo.
• Nivel 2: Búsqueda (2) en Mazo de Habilidades. Permite usar 1 Efecto Experto (Corona) por ronda.
• Nivel 3: Límite de Mano = 5. Búsqueda (2) en Mazo de Habilidades.
• Nivel 4: Gana la 2ª Carta de Especialidad. Permite usar 2 Efectos Expertos por ronda.
• Nivel 5: Límite de Mano = 6. Búsqueda (2) en Mazo de Habilidades.
• Nivel 6: Gana la 3ª Carta de Especialidad. Permite usar 3 Efectos Expertos por ronda.
• Nivel 7: Límite de Mano = 7. Búsqueda (2) en Mazo de Habilidades.

GESTIÓN DEL MAZO DE FUERZA Y MAGIA:
• Cartas Ganadas: Cualquier carta de habilidad, hechizo o artefacto ganada se añade DIRECTAMENTE a la mano.
• Búsqueda (X): Mirar las X cartas superiores de un mazo, elegir 1 y descartar las demás, O BASTA con coger la carta visible de la Pila de Descartes.
• Barajar Descarte: Cuando debas robar y tu mazo esté vacío, baraja la pila de descartes para formar el nuevo mazo.`
  },
  {
    id: "reescritura-03-combate-ia-y-asedio",
    title: "Reescritura 3. Combate Táctico Integrado, Algoritmo de la IA y Reglas de Asedio y Cobertura",
    category: "combate",
    content: `REGLAS COMPLETA DE COMBATE TÁCTICO, IA AUTOMATIZADA Y ASEDIO URBANO:

DESPLIEGUE Y ESTRUCTURA DE COMBATE:
• Tablero 4×5 con 2 líneas de Retaguardia, 2 de Vanguardia/Frente y 1 Fila Central.
• Límite de Tropas: Máximo 5 cartas de unidad desplegadas por combate.
• Orden de Activación por Iniciativa: Las unidades se activan en orden decreciente de Iniciativa. En empates, se alterna empezando por el jugador atacante.

PENALIZACIONES Y MOVIMIENTO DE UNIDADES:
• Terrestres (Ground): Mueven hasta 3 casillas ortogonales y atacan objetivos adyacentes. Bloqueadas por obstáculos o tropas.
• Voladoras (Flying): Mueven hasta 3 casillas ignorando obstáculos y atacan adyacente.
• A Distancia (Ranged): Disparan a cualquier enemigo y luego mueven 1 casilla (o mueven 1 casilla sin disparar).
  - Penalización de Combate (Tirar 2 dados de ataque y elegir el peor resultado): Aplica si disparan a un enemigo adyacente O si ambas unidades están en la Retaguardia opuesta.

ALGORITMO AUTOMATIZADO DE LA IA EN COMBATE (CAMPAÑA / COOPERATIVO):
• Unidades Terrestres y Voladoras de la IA: Priorizan tropas del mismo nivel; si no hay, buscan el nivel inferior descendente (hasta Bronce); si no hay, buscan nivel superior ascendente.
• Unidades A Distancia de la IA: Priorizan tropas a distancia enemigas del mismo nivel, luego menor nivel, luego mayor nivel. Si no hay tropas a distancia, atacan terrestres/voladoras siguiendo la misma jerarquía.
• Desempate: Se ataca a la unidad válida más cercana.

REGLAS DE ASEDIO CON CIUDADELA:
• Defender sin Héroe: El defensor puede pagar 8 Oro para defender su ciudad con sus tropas si el héroe no está presente.
• Fortificaciones (Muros y Puerta): Colocadas en la fila central. Las tropas terrestres/voladoras pueden destruir un muro/puerta atacándolo adyacente (éxito automático sin dados).
• Cobertura Defensiva: Las tropas situadas tras un Muro o Puerta intacto reciben -1 al daño recibido por proyectiles a distancia.
• Torre de Arqueros: Unidad a distancia adicional del defensor fuera del tablero. Se destruye automáticamente cuando caen todos los muros y la puerta.`
  },
  {
    id: "reescritura-04-reglas-opcionales-y-comercio",
    title: "Reescritura 4. Tabla de Reglas Opcionales y Variantes, Mercado, Comercio y Fin de Escenario",
    category: "modos",
    content: `TABLA DE REGLAS OPCIONALES, MERCADO Y CONDICIONES DE ELIMINACIÓN:

TABLA DE REGLAS OPCIONALES (MODIFICADORES DE DIFICULTAD):
1. Opciones para AUMENTAR la dificultad:
   - Las ciudades no producen recursos al señalarse, pero se pueden usar edificios de ciudades capturadas.
   - Prohibido relanzar dados con moral positiva o habilidades.
   - Dados de tesoro y recurso solo otorgan 1 unidad de recurso.
   - Sin bonus inicial de preparación.
2. Opciones para REDUCIR la dificultad:
   - Empezar la partida con un Héroe Secundario gratis.
   - Todas las unidades infligen un mínimo de 1 de daño en su ataque.
   - Minas y Asentamientos otorgan el doble de producción de recursos.
   - Intercambio libre de recursos en cualquier momento, Mercadillo pasa a ser Visitable y roba 1 artefacto gratis.
   - Continuar rondas de combate no consume Puntos de Movimiento (PM).
3. Variantes de Juego:
   - Dado de ataque no inflige daño (+1/-1/0) pero sigue activando habilidades.
   - Resolver carta de Astrólogos también al inicio de las Rondas de Recursos.
   - Eliminar por completo las cartas de Astrólogos del juego.
   - Limpiar y retirar cubos negros de casillas Visitables en las rondas 4, 8 y 12.
   - Enviar las cartas ganadas directamente al mazo de descarte en vez de a la mano.

MERCADO Y COMERCIO ENTRE JUGADORES:
• Mercadillo: Permite intercambiar recursos según la Tabla de Comercio O eliminar 1 carta de la mano por +1 Oro (no se pueden eliminar especialidades, estadísticas, habilidad inicial ni Flecha Mágica).
• Comercio en Alianza y Cooperativo: Los aliados pueden intercambiar recursos libremente fuera de combate. Pueden comerciar Hechizos y Artefactos de la mano si sus héroes ocupan casillas adyacentes (intercambio 1 por 1).

CONDICIONES DE ELIMINACIÓN Y FIN DE ESCENARIO:
• Eliminación por Pérdida Territorial: Jugar 3 rondas completas sin controlar ninguna ciudad ni asentamiento.
• Eliminación por Derrota Total: Perder un combate con tu Héroe Principal cuando no conserves ciudades ni asentamientos.
• Condición de Victoria por Cubos: En partidas de 3+ jugadores, arrebatar un Cubo de Facción a cada oponente otorga la victoria inmediata.`
  },
  {
    id: "reescritura-05-catalogo-localizaciones-completo",
    title: "Reescritura 5. Compendio Completo Integrado de Localizaciones del Mapa (Visitables, Revisitables y Señalizables)",
    category: "mapa",
    content: `COMPENDIO COMPLETO DE CASILLAS Y ESTRUCTURAS DEL MAPA:

CASILLAS VISITABLES (Un solo uso, se marcan con Cubo Negro):
• Piedra del Aprendizaje: +1 Experiencia (EXP) al héroe principal.
• Manantial Mágico: Mira las 3 primeras cartas de tu descarte, recupera 1 a tu mano y devuelve las demás arriba.
• Jardín Místico: Elige entre ganar +2 Oro o +1 Objeto de Valor.
• Observatorio de Caoba: Descubre y voltea una loseta de mapa adyacente.
• Santuario del Encantamiento / Gesto Mágico: Realiza Búsqueda (2) en el mazo de hechizos.
• Templo: Otorga 1 Ficha de Moral Positiva.
• Fuente de la Juventud: Otorga +1 PM y +1 Ficha de Moral Positiva.
• Caja de Pandora: Lanza 1 dado de ataque: (+1) Gana 2 Artefactos; (0) Gana 1 Artefacto; (-1) Enfrenta combate Nivel III.
• Molino de Agua: Otorga +3 Oro.
• Molino: Otorga +1 Objeto de Valor (Nota: corrección de errata en loseta N3).
• Árbol del Conocimiento: Paga 3 Objetos de Valor o 10 Oro para ganar +2 EXP.
• Tumba del Guerrero: Búsqueda (2) en mazo de artefactos dos veces. Otorga 2 fichas de moral negativa.
• Escolar: Lanza 1 dado de ataque: (+1) Gana o elimina carta de característica; (0) Búsqueda (2) en habilidades; (-1) Búsqueda (2) en hechizos.
• Mercado del Tiempo: Elimina 1 carta de la mano y realiza Búsqueda (2) en Habilidades, Hechizos o Artefactos.
• Colina Fortificada: Refuerza inmediatamente 1 unidad de Bronce o Plata con un descuento de -3 Oro.
• Prisión: Gana un Héroe Secundario gratis (si ya lo posees, gana 3 Oro).
• Universidad: Paga 6 Oro para hacer Búsqueda (4) en el mazo de descarte de habilidades.

CASILLAS REVISITABLES (Múltiples usos pagando 1 PM):
• Biblioteca: Paga 3 Oro para eliminar 1 carta de característica de tu mano o descarte y reemplazarla por otra. (Hasta 2 veces por visita).
• Mercado Negro: Revisa las 4 cartas superiores del descarte de artefactos. Compra: Menor (5 Oro), Mayor (7 Oro), Reliquia (10 Oro).
• Santuario: Zona de paz absoluta. Los héroes no pueden ser atacados en esta casilla.
• Taberna: Paga 7 Oro para reclutar Héroe Secundario y descarta 1 carta aleatoria de la mano de un enemigo.
• Mercadillo: Intercambia recursos, elimina cartas por +1 Oro o compra Máquinas de Guerra.
• Fábrica: Permite comprar Máquinas de Guerra.
• Establos: Otorga +1 PM adicional válido únicamente durante el turno actual.

CASILLAS SEÑALIZABLES (Captura con Cubo de Facción):
• Ciudad: Bastión de facción. Proporciona control territorial y defensas de asedio.
• Minas: Aumentan el marcador de producción del recurso indicado en +1 (+2 en minas dobles). Otorgan producción inmediata al capturarse por 1ª vez.
• Asentamientos: Permiten elegir entre subir +1 la producción de recursos (con ganancia inmediata si es 1ª vez) O reforzar una unidad de Bronce/Plata a mitad de coste (o gratis si es 1ª vez).
• Obelisco: Concede beneficios o avances hacia el Grial según las reglas del escenario.
• Utopía del Dragón: Desafío de alto nivel que otorga grandes recompensas según el escenario.
• Eje Estelar: Permite eliminar 1 carta de característica de la mano y reemplazarla por su versión Potenciada (Empowered) del mismo tipo.
• Ciudad Aleatoria: Ciudad neutral protegida por tropas de una facción sin usar. Capturarla aumenta los ingresos de Oro en +10.`
  },

  // =========================================================================
  // EXPANSIÓN BASTIÓN Y LIBRO DE MISIONES (STRONGHOLD)
  // ========================================================================= 
  {
    id: "cap_exp_bastion_componentes",
    title: "Expansión Bastión: Componentes",
    category: "componentes",
    content: `Esta expansión añade la facción Bastión (bárbaros de Krewlod), introduce las Losetas de Mapa Subterráneo y la Puerta Subterránea (ver capítulo 8), las Cartas de Pergamino de Hechizos (ver capítulo 5), y las Fichas de Tiempo/Ataque/Corrosión y el hechizo Arenas Movedizas (ver capítulo 10).

COMPONENTES: 5 losetas de mapa de superficie (1 inicial, 3 lejanas, 1 cercana) + 7 losetas de mapa subterráneo (6 cercanas, 1 central), 1 tablero de ciudad, 1 libro de misiones, 1 ayuda de juego, 1 folleto de unidades, 2 miniaturas de héroe, 1 miniatura de ciudad, 7 miniaturas de unidad, 2 cartas de héroe a doble cara, 7 cartas de unidad, 7 losetas de edificio de ciudad, 8 cartas de unidad neutral, 3 cartas de anuncio astrológico, 4 cartas de artefacto, 6 cartas de hechizo, 3 cartas de habilidad, 12 cartas de especialidad, 7 cartas de característica (4 ataque, 1 defensa, 1 poder, 1 conocimiento), 20 cartas de pergamino de hechizos, fichas de oro/materiales/objetos de valor/daño/construcción/población/libro de hechizos/moral/movimiento, 12 fichas de arenas movedizas, 6 de corrosión, 8 de ataque, 11 de tiempo, 6 de puerta subterránea, y 30 cubos acrílicos (20 marrón claro, 10 negros).`
  },
  {
    id: "cap_exp_bastion_escenarios",
    title: "Expansión Bastión: Escenarios Independientes (Alianza, Enfrentamiento y Cooperativo)",
    category: "escenario",
    content: `Esta expansión aporta las reglas completas del Modo Alianza (idénticas a las de Murallas/Fortaleza/Inferno) y comparte las reglas generales de Modo Cooperativo del Libro de Misiones básico (unidades neutrales controladas con las reglas de IA; el mercadillo también puede dar recursos a cualquier jugador; victoria compartida al cumplirse la condición).

ESCENARIO DE ALIANZA — "Guerra de los Poderosos" (4 jugadores, dura 13 rondas): recursos iniciales 14 de Oro/4 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce y 1 manada de bronce del menor coste. Hay 4 lugares iniciales en 2 áreas (una por equipo); la facción Mazmorra no está disponible para jugar, ya que su loseta inicial hace de loseta subterránea necesaria para la victoria, defendida por un ejército de nivel VI (ojos maléficos, medusas, minotauros, mantícoras y dragones negros). Los jugadores pueden usar su mazo de fuerza y magia al pagar Oro para defender su ciudad. Victoria: una alianza captura la ciudad de la loseta subterránea (Mazmorra) y la mantiene 1 ronda más, o captura una ciudad enemiga y la mantiene 2 rondas más. Si nadie lo logra antes del final de la ronda 13, la partida se alarga si alguien señaliza justo en la 12ª o 13ª ronda (hasta la 14ª o 15ª respectivamente); si ambos equipos cumplen la condición, empate; si ninguno, pierden todos.

ESCENARIO DE ENFRENTAMIENTO — "Guardián de la Mazmorra" (2 jugadores, dura 12 rondas): recursos iniciales 10 de Oro/3 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce, cofradía de magos, y 1 manada de bronce del mayor coste. Uno de los jugadores debe elegir la facción Mazmorra. Al visitar un obelisco, busca(2) en habilidades, artefactos o hechizos (a elegir). Ningún jugador puede tener héroe secundario; se puede usar el mazo de fuerza y magia al pagar Oro para defender la ciudad. Contrarreloj: en las rondas 3, 6 y 9, el héroe principal del segundo jugador gana +1 PM. Victoria: capturar la ciudad del oponente o derrotar a su héroe antes del final de la ronda 12 (si no, empate).

ESCENARIO COOPERATIVO — "Túneles de los Enanos" (2-3 jugadores; duración según dificultad: Normal 10, Difícil 11, Imposible 12 rondas): recursos iniciales 14 de Oro/4 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce y 3 unidades "unas pocas" de bronce. Incluye 1 loseta central subterránea. Ningún jugador puede tener héroe secundario; durante tu turno puedes dar Oro y Materiales a otro jugador sin visitar un mercadillo (los Objetos de Valor no se pueden transferir así). No hay límite de intentos contra las unidades neutrales azur de la loseta central, pero cada jugador solo puede ganar ese combate una vez (el héroe vencedor se retira del mapa de inmediato). Para descubrir la loseta central, los jugadores deben pagar entre todos 2 de Oro/2 Materiales/2 Objetos de Valor por jugador en la partida (repartibles como se quiera, incluso pagados por uno solo). Victoria: cada jugador debe ganar un combate contra unidades neutrales de nivel azur en la loseta central antes del límite de rondas según la dificultad (si no, todos pierden).`
  },
  {
    id: "cap_exp_bastion_campana",
    title: "Expansión Bastión: Campaña en Solitario — Hermandad Bárbara",
    category: "campaña",
    content: `Campaña de 3 misiones para la facción Bastión (héroes Yog, luego Crag Hack, luego cualquier héroe de Bastión), contra héroes de IA de Necrópolis y Castillo (referencia de preparación y condiciones; el contenido narrativo está en el Libro de Misiones físico).

MISIÓN 1 — "Cosecha" (10 rondas): héroe Yog. Recursos iniciales 12 de Oro/0 Materiales/1 Objeto de Valor. Edificios iniciales: vivienda de bronce, ciudadela. Bonificador a elegir: añadir una manada de orcos, buscar(4) en artefactos, o +6 de Oro. Héroes de IA (Necrópolis): Isra y Aislinn (Aislinn no se mueve; Isra permanece quieta hasta descubrir la loseta adyacente a la inicial de Mazmorra, tras lo cual avanza directa hacia el jugador). Reglas: derrotar un ejército enemigo da 1 de experiencia; se retiran de los mazos neutrales todas las cartas salvo un listado reducido específico del escenario (se conservan para las siguientes misiones). Victoria: derrotar ambos ejércitos enemigos. Derrota: que tu héroe pierda cualquier combate (puedes retirarte de combates contra neutrales no azur); al final de la ronda 10 sin victoria, pierdes.

MISIÓN 2 — "Recuperar a Legión" (10 rondas): héroe Crag Hack. Recursos iniciales 8 de Oro. Edificios iniciales: vivienda de bronce, alcaldía. Bonificador a elegir: unidad de campesinos, +6 de Oro, o buscar(4) en hechizos. Héroes de IA: Lord Chasim, Lord Velmor (Castillo) y Tyranell (sin miniatura, no aparece en el mapa hasta el combate). Reglas: no puedes reclutar desde tus propias viviendas; tras cada combate neutral se barajan sus cartas de vuelta al mazo; los héroes enemigos no se mueven hasta activarse por evento contrarreloj; existe un mazo especial "de Legión" (cartas de artefacto Brazos/Cabeza/Piernas/Escarcela/Torso de Legión) del que se busca(2) cada vez que derrotas un ejército de IA (ganando también 1 de experiencia y 5 de Oro), y también 1 vez por Ronda de Recursos o al visitar un obelisco por primera vez puedes robar 2 cartas del mazo de una de tus viviendas y reclutar 1 pagando su coste. Victoria: reunir 3 cartas de Legión en tu mazo. Derrota: perder cualquier combate, o no ganar antes del final de la ronda 10.

MISIÓN 3 — "Secretos Revelados" (13 rondas): héroe a elegir entre cualquiera de Bastión. Recursos iniciales 10 de Oro/3 Materiales/1 Objeto de Valor. Edificios iniciales: vivienda de bronce, ciudadela, alcaldía. Bonificador a elegir: +10 de Oro, +3 Objetos de Valor, o buscar entre artefactos de bonificación de hechizo. Héroes de IA (Necrópolis): jefes orcos, atacantes nigromantes (aparecen por evento contrarreloj), Nimbus y Moandor (estos 2 últimos sin miniatura). Reglas: tras cada combate neutral se barajan sus cartas de vuelta al mazo; derrotar un ejército de IA da 1 de experiencia; no se puede cruzar la puerta subterránea antes de señalizar la zona central. Victoria: ganar todos los combates contra los ejércitos enemigos. Derrota: perder cualquier combate, o no ganar antes del final de la ronda 13.`
  },

  // =========================================================================
  // EXPANSIÓN CONFLUJO Y LIBRO DE MISIONES (CONFLUX)
  // =========================================================================
  {
    id: "cap_exp_confluencia_componentes",
    title: "Expansión Confluencia: Componentes",
    category: "componentes",
    content: `Esta expansión añade la facción Confluencia (elementales de los 4 planos), introduce las Losetas de Mapa Elementales y las Fichas de Monolito (ver capítulo 8), la mecánica de Invocación con sus cartas y hechizos propios, el Daño Elemental y las Fichas de Muro de Fuego (ver capítulo 10), y comparte las Cartas Permanentes con Murallas y las Escuelas de Magia con Metas Ampliadas.

COMPONENTES: 12 losetas de mapa (1 inicial, 3 lejanas, 8 elementales cercanas), 1 tablero de ciudad, 1 libro de misiones, 1 ayuda de juego, 1 folleto de unidades, 2 miniaturas de héroe, 1 miniatura de ciudad, 7 miniaturas de unidad, 2 cartas de héroe a doble cara, 7 cartas de unidad, 7 losetas de edificio de ciudad, 8 cartas de unidad neutral, 8 cartas de unidades invocadas, 3 cartas de anuncio astrológico, 8 cartas de artefacto, 10 cartas de hechizo, 15 cartas de habilidad, 12 cartas de especialidad, 9 cartas de característica (3 ataque, 1 defensa, 2 poder, 3 conocimiento), fichas de oro/materiales/objetos de valor/daño/construcción/población/libro de hechizos/moral/movimiento, 12 fichas de monolito, 6 de tiempo, 8 de invocación, 2 de muro de fuego, y 30 cubos acrílicos (20 rosa, 10 negros).`
  },
  {
    id: "cap_exp_confluencia_escenarios",
    title: "Expansión Confluencia: Escenarios Independientes (Alianza, Enfrentamiento y Cooperativo)",
    category: "escenario",
    content: `Esta expansión aporta las reglas completas del Modo Alianza (idénticas a las de Murallas/Fortaleza/Inferno/Bastión) y comparte las reglas generales de Modo Cooperativo del Libro de Misiones básico.

ESCENARIO DE ALIANZA — "Un Mal Día" (4 jugadores, dura 16 rondas): recursos iniciales 11 de Oro/3 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce y 3 unidades "unas pocas" de bronce. Hay 4 lugares iniciales en 2 áreas (una por equipo), conectados por monolitos unidireccionales. Ningún jugador recibe bonificador inicial. Victoria: una alianza derrota al héroe principal de cada oponente una vez, u ocupa ambos monolitos de salida enemigos al mismo tiempo al final de una ronda. Si no se cumple antes del final de la ronda 16, todos pierden.

ESCENARIO DE ENFRENTAMIENTO — "Diluvio" (3 jugadores, dura 10 rondas): recursos iniciales 10 de Oro/3 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce, cofradía de magos, y 3 unidades "unas pocas" de bronce. De las facciones no usadas, se elige una al azar para defender la ciudad central (3 manadas de oro, 2 de plata, 2 "unas pocas" de bronce; nivel de dificultad VI a efectos de experiencia). Ningún jugador puede tener héroe secundario. Visitar un obelisco permite retirar 1 carta de habilidad de tu mano o descarte. En las rondas 3, 5, 7 y 9, los jugadores pueden intercambiar recursos como en un mercadillo (sin otros efectos). Victoria: capturar la ciudad central y mantenerla hasta el final de la ronda siguiente. Si nadie lo logra antes del final de la ronda 10, empate.

ESCENARIO COOPERATIVO — "Demasiados Monstruos" (2-3 jugadores; duración según dificultad: Fácil 11, Normal 12, Difícil 14, Imposible 16 rondas): recursos iniciales 10 de Oro/3 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce y 3 unidades "unas pocas" de bronce. El mapa se divide en 3 sectores conectados por monolitos unidireccionales, cada jugador empezando en un sector distinto (se puede ampliar a más jugadores añadiendo 1 loseta inicial, 2 cercanas, 1 central, 2 lejanas y 3 fichas de monolito por jugador extra). Ningún jugador puede tener héroe secundario; los Objetos de Valor no se pueden transferir entre jugadores; ningún jugador recibe bonificador inicial; se puede capturar minas de otros jugadores; visitar un obelisco da 1 dado de recursos y +1 PM; ningún cubo negro se puede retirar de una zona marcada con número romano; se ignoran los efectos que reducen los PM disponibles. Un héroe solo puede cruzar de un sector al siguiente cuando se hayan resuelto todos los combates y descubierto todas las losetas de su sector actual (si se cumple para el sector 2, el monolito del sector 1 lleva directamente al sector 3). Victoria: resolver todos los combates del mapa antes del límite de rondas según la dificultad elegida.`
  },
  {
    id: "cap_exp_confluencia_campana",
    title: "Expansión Confluencia: Campaña en Solitario — Maestros de los Elementos",
    category: "campaña",
    content: `Campaña de 4 misiones protagonizada por Tarnum, el héroe inmortal de Confluencia (aunque en las 2 primeras misiones no controla su propia ciudad, sino la de una facción "anfitriona" a elegir entre Castillo, Mazmorra, Torre, Fortaleza, Murallas o Bastión). Enfrenta a los Señores Elementales de los 4 planos (referencia de preparación y condiciones; el contenido narrativo está en el Libro de Misiones físico).

MISIÓN 1 — "Caminata Difícil sobre las Nubes" (13 rondas, plano del Aire): héroe Tarnum, sin ejército de facción ni edificios propios al empezar. Recursos iniciales 20 de Oro. Bonificador a elegir: buscar(3) en artefactos, buscar(3) en habilidades, o +6 Objetos de Valor. Héroes de IA: Fiur (ejército neutral de nivel III + elementales de tormenta/energía) y los Guardianes del Señor del Aire (hadas, elementales de tormenta y de energía). Reglas: tu héroe no gana experiencia más allá del nivel 4; no se usan cartas de anuncio astrológico; no se pueden usar las cartas de Invocar Elemental ni Magia (básica) de ninguna escuela (se descartan y se roba otra si salen); visitar un obelisco por primera vez activa un evento de historia y lo convierte después en zona vacía; no puedes construir edificios de ciudad salvo que controles una, pero sí reclutar y reforzar unidades de bronce sin los edificios necesarios; hasta la ronda 5 no pierdes por no controlar una ciudad. Victoria: derrotar a ambos ejércitos enemigos. Derrota: que tu héroe sea derrotado en combate (puedes retirarte de combates contra neutrales no azur), o no ganar antes del final de la ronda 13 (en la ronda 1 debes elegir facción anfitriona y tomar su ciudad).

MISIÓN 2 — "Bailando en el Agua y el Fuego" (16 rondas, planos de Agua y Fuego): mismo héroe/facción anfitriona. Recursos iniciales 10 de Oro/3 Materiales/2 Objetos de Valor. Edificios iniciales: vivienda de bronce, alcaldía. Bonificador a elegir: buscar(3) dos veces en artefactos, cofradía de magos gratis, o +10 de Oro. Héroes de IA: Guardianes del Señor del Agua y Guardianes del Señor del Fuego (comparten mazo de IA). Reglas: tu héroe no gana experiencia más allá del nivel 5; no se usan anuncios astrológicos ni las cartas de Invocar Elemental/Magia de ninguna escuela; el monolito transporta a tu héroe a tu ciudad; visitar un obelisco permite retirar hasta 2 cartas o buscar(3) en artefactos/hechizos/habilidades. Victoria: que todas las zonas de las losetas elementales de agua y fuego queden señalizadas o vacías. Derrota: perder un combate, o no ganar antes del final de la ronda 16.

MISIÓN 3 — "Lugar Difícil" (10 rondas, plano de Tierra): héroe Tarnum o cualquier héroe de Confluencia, ya con su propia facción. Recursos iniciales 15 de Oro. Edificios iniciales: vivienda de bronce, ciudadela, cofradía de magos, Universidad de Magia. Bonificador a elegir: 3 combinaciones de hechizo/habilidad de invocación elemental (fuego/agua/aire). Héroes de IA (Mazmorra): Primer y Segundo Señor Supremo. Reglas: no se usan anuncios astrológicos; derrotar un enemigo de IA da 14 de Oro y 2 Materiales; no se resuelve el efecto normal de empezar con cofradía ya construida; visitar un obelisco permite retirar hasta 2 cartas o buscar(3); no se puede construir la vivienda de oro (Pira Mágica) hasta un evento de historia; se retiran de los mazos neutrales todas las cartas salvo un listado reducido específico del escenario. Victoria: derrotar a ambos ejércitos enemigos. Derrota: perder un combate, o no ganar antes del final de la ronda 10 (hay penalizaciones de recursos y movimiento en varias rondas del evento contrarreloj).

MISIÓN 4 — "Maestro de los Elementos" (14 rondas): mismo héroe/facción de Confluencia. Recursos iniciales 30 de Oro. Edificios iniciales: alcaldía, ciudadela, vivienda de bronce, vivienda de plata, cofradía de magos, Universidad de Magia. Bonificador a elegir: 2 cartas de Invocar Elemental + 2 de Magia (básica) a elegir, o buscar(4) en hechizos 3 veces. Héroes de IA: los 4 Señores Elementales (Aire, Tierra, Fuego, Agua), cada uno con su propio ejército de criaturas elementales y dragones. Reglas: no se usan anuncios astrológicos; no se resuelve el efecto normal de empezar con cofradía ya construida; los monolitos transportan a tu héroe a tu ciudad; derrotar un ejército de IA da 2 de experiencia. Victoria: ganar los 4 combates contra los Señores Elementales. Derrota: perder un combate, o no ganar antes del final de la ronda 14.`
  },

  // =========================================================================
  // EXPANSIÓN CALA Y LIBRO DE MISIONES (COVE)
  // =========================================================================
  {
    id: "cap_exp_cala_componentes",
    title: "Expansión Cala: Componentes",
    category: "componentes",
    content: `Esta expansión añade la facción Cala (piratas de Regna), introduce las Losetas de Mapa Marino, la Ficha de Torbellino y numerosos lugares marítimos (ver capítulo 8), la Ficha de Debilidad y la Ficha de Clonación (ver capítulo 10), y comparte las Cartas Permanentes con Murallas/Confluencia y las Máquinas de Guerra con Murallas.

COMPONENTES: 5 losetas de mapa de superficie (1 inicial, 3 lejanas, 1 cercana) + 7 losetas de mapa marino (6 cercanas, 1 central), 1 tablero de ciudad, 1 libro de misiones, 1 ayuda de juego, 1 folleto de unidades, 2 miniaturas de héroe, 1 miniatura de ciudad, 7 miniaturas de unidad, 2 cartas de héroe a doble cara, 7 cartas de unidad, 7 losetas de edificio de ciudad, 7 cartas de unidad neutral, 3 cartas de anuncio astrológico, 6 cartas de artefacto, 6 cartas de hechizo, 6 cartas de habilidad, 12 cartas de especialidad, 7 cartas de característica (3 ataque, 2 poder, 2 conocimiento), 4 cartas de máquina de guerra, fichas de oro/materiales/objetos de valor/daño/construcción/población/libro de hechizos/moral/movimiento, 3 fichas de torbellino, 6 de debilidad, 4 de clonación, 14 de tiempo, y 30 cubos acrílicos (10 negros, 20 aguamarina).`
  },
  {
    id: "cap_exp_cala_escenarios",
    title: "Expansión Cala: Escenarios Independientes (Alianza y Enfrentamiento)",
    category: "escenario",
    content: `Esta expansión aporta las reglas completas del Modo Alianza (idénticas a las de las demás expansiones: equipo de 2 jugadores formado al inicio de la partida, intercambio de artefactos entre héroes en zonas adyacentes, intercambio libre de recursos entre aliados, y prohibición de señalizar un lugar ya señalizado por tu compañero de equipo).

ESCENARIO DE ALIANZA — "Estrecho de las Tormentas" (4 jugadores, dura 14 rondas): una de las 4 losetas iniciales debe contener una ciudad de Mazmorra. Recursos iniciales 14 de Oro/4 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce, cofradía de magos, y 2 manadas de bronce del menor coste. En vez del bonificador inicial habitual, se puede reclutar un héroe secundario por 5 de Oro (no en dificultad Imposible); cada jugador solo puede hacerlo una vez; un jugador solo puede enviar recursos a un aliado durante su propio turno; ningún héroe principal puede rendirse contra otro héroe (solo los secundarios). Victoria: una alianza captura una ciudad enemiga y la mantiene 2 rondas más, o derrota a ambos héroes principales de la alianza rival. Si nadie lo logra antes del final de la ronda 14, la partida se alarga si alguien señaliza justo en la 13ª o 14ª ronda (hasta la 15ª o 16ª); empate si ambos equipos lo logran; si ninguno, pierden todos.

ESCENARIO DE ENFRENTAMIENTO — "Con Espada y Fuego" (2 jugadores, dura 11 rondas): recursos iniciales 13 de Oro/3 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce, cofradía de magos, y 1 manada de bronce del mayor coste. Ningún jugador puede tener héroe secundario; se puede usar el mazo de fuerza y magia al pagar Oro para defender la ciudad. Contrarreloj: en las rondas 3, 6 y 9 los jugadores pueden intercambiar recursos como en un mercadillo. Victoria: capturar la ciudad del oponente o derrotar a su héroe antes del final de la ronda 11 (si no, empate).

ESCENARIO DE ENFRENTAMIENTO — "Archipiélago Ardiente" (3 jugadores, dura 13 rondas): incluye 1 loseta central marina con un ejército neutral de nivel VII. Recursos iniciales 14 de Oro/4 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce y 3 unidades "unas pocas" de bronce. Ningún jugador puede tener héroe secundario; se puede usar el mazo de fuerza y magia al pagar Oro para defender la ciudad; tras derrotar al ejército neutral de nivel VII no se coloca cubo en su zona (se puede volver a combatir cada vez que se entra); una vez que el primer jugador lo derrota, los demás jugadores disponen solo de su siguiente turno para lograrlo también (salvo que ya sea la ronda 13); al ganar ese combate, el héroe se retira del mapa. Contrarreloj: en las rondas 3, 6 y 9, cada jugador puede repetir 1 dado, o lanzar y resolver 1 dado de recursos. Victoria: derrotar al ejército neutral de nivel VII (todos los que lo logren ganan; el resto pierde) antes del final de la ronda 13.`
  },
  {
    id: "cap_exp_cala_campana",
    title: "Expansión Cala: Campaña en Solitario — Terror de los Mares",
    category: "campaña",
    content: `Campaña de 3 misiones para la facción Cala (héroe Jeremy, o cualquier héroe de Cala), enfrentándose a piratas rivales, nigromantes y facciones de IA variadas (referencia de preparación y condiciones; el contenido narrativo está en el Libro de Misiones físico).

MISIÓN 1 — "Evenmorn" (13 rondas): héroe Jeremy o cualquier héroe de Cala. Recursos iniciales 10 de Oro/2 Materiales. Edificio inicial: vivienda de bronce. Bonificador a elegir: buscar(4) en artefactos, buscar(4) en hechizos, o reforzar los lobos de mar. Héroes de IA: Drakon, Nimbus y sus respectivas Vanguardias (ejércitos neutrales escalables según la ronda actual). Reglas: al capturar cualquiera de las 2 ciudades objetivo ganas 10 de Oro y se retiran todos los cubos negros del mapa (se puede volver a visitar todo); derrotar un héroe de IA da 8 de Oro; visitar un obelisco activa un evento de historia. Victoria: controlar las ciudades de Necrópolis y de Castillo a la vez. Derrota: perder un combate o perder el control de tu propia ciudad, o no ganar antes del final de la ronda 13.

MISIÓN 2 — "En Busca del Cuerno" (13 rondas): mismo héroe. Recursos iniciales 16 de Oro/3 Materiales/2 Objetos de Valor. Edificios iniciales: vivienda de bronce, ciudadela. Bonificador a elegir: buscar(4) en artefactos, buscar(4) en hechizos, o +4 Objetos de Valor. Héroes de IA: Gerwulf, Guardias de la Prisión, Guardianes del Cuerno (ejército neutral de nivel VII). Reglas: no se puede reclutar héroe secundario directamente (se obtiene gratis al capturar la mina inicial de Cala); ambos héroes (principal y secundario) comparten el límite de usos de Experto por ronda; visitar un obelisco activa un evento de historia. Victoria: derrotar tanto al ejército de Gerwulf como a los Guardianes del Cuerno. Derrota: perder un combate, o no ganar antes del final de la ronda 13.

MISIÓN 3 — "Traición" (12 rondas): mismo héroe. Sin recursos iniciales (0/0/0). Edificios iniciales: vivienda de bronce, vivienda de plata, ciudadela. Bonificador a elegir: buscar(4) en artefactos, buscar(4) en hechizos, o +6 Objetos de Valor. Héroes de IA: Defensores del Puesto Avanzado del Castillo y Defensores de la Fortaleza Regnana. Reglas: desde tu loseta inicial solo puedes moverte a losetas de mar; capturar una ciudad da 15 de Oro/2 Materiales/3 Objetos de Valor; en vez de señalizar minas/asentamientos normalmente, resuelves su bonificador 2 o 3 veces (según el tipo de loseta) y luego se marcan como visitadas sin producir ingresos; visitar un obelisco activa un evento de historia. Victoria: señalizar la utopía del dragón. Derrota: perder un combate, o no ganar antes del final de la ronda 12.`
  },
  {
    id: "cap_exp_contenido_adicional_preparacion_avanzada",
    title: "Expansión Contenido Adicional: Preparaciones Avanzadas Opcionales",
    category: "preparación",
    content: `Reglas opcionales aplicables a cualquier escenario existente, del juego base o de cualquier expansión, para variar el equilibrio habitual de la partida.

CARTAS DEL CAOS: cada vez que vayas a descartar una carta, retírala de la partida en su lugar y roba la carta superior del mazo correspondiente para tu pila de descarte (las cartas de característica y especialidad se siguen descartando con normalidad). Si usas una carta de conocimiento para recuperar un hechizo a tu mano, ese hechizo se retira igualmente y recibes uno nuevo de la parte superior del mazo de hechizos.

RESERVA DE ORO: regla alternativa de gestión del ejército pensada para partidas de Enfrentamiento con varios jugadores (especialmente con número impar), que evita que el primer jugador en sufrir bajas quede en clara desventaja frente a ejércitos recién comprados. Tu reserva de recursos pasa a llamarse "fondo no gastado". Al reclutar o reforzar con la ficha de población, en vez de devolver el coste a la caja, colócalo en una pila aparte junto a tu mazo de unidades: tu "fondo reservado" (esos recursos no se pueden gastar). La siguiente vez que uses la ficha de población, puedes tanto comprar unidades nuevas como vender las que ya tienes; al vender o perder una unidad, su coste vuelve del fondo reservado al fondo no gastado. Si una unidad pasa de "manada" a "unas pocas", recuperas el coste de refuerzo. Si usaste una carta que reducía el coste de reclutar/reforzar, guárdala junto a la carta de unidad para saber cuánto recuperar cuando se venda/pierda/reduzca, devolviéndola a tu mano en ese momento.

DRAFT INICIAL: recomendado para partidas de 3 o más jugadores; sustituye la construcción normal del mazo inicial. Aparta la habilidad inicial y la especialidad de nivel 1 de cada héroe. Baraja por separado los mazos de artefactos, habilidades y hechizos; cada jugador roba 2 cartas de cada mazo, se queda con 1 de las 6 y pasa las 5 restantes al jugador de su izquierda; repite hasta que no queden cartas por elegir. Después, repite el proceso completo una segunda vez pasando las cartas a la derecha, hasta que cada jugador tenga 12 cartas seleccionadas así. Añade las cartas de característica que indique la carta de héroe (el mazo de un héroe de fuerza queda en 18 cartas; el de uno de magia, en 17). Cada jugador elige 7 de esas cartas (descarta el resto) y las añade a las 2 que apartó al principio: ese es tu mazo inicial de 9 cartas.

EJÉRCITO NEUTRAL: recomendada cuando ningún héroe en la partida tenga habilidades especiales orientadas a unidades. Al usar la ficha de población para reclutar, en vez de reclutar directamente, por cada vivienda que tengas roba 2 cartas de unidad neutral del tipo correspondiente y recluta 1 de ellas pagando su coste; descarta las no reclutadas.`
  },

  // =========================================================================
  // CONTENIDO ADICIONAL / METAS AMPLIADAS 2 (STRETCH GOALS 2)
  // =========================================================================
  {
    id: "cap_exp_contenido_adicional_escenarios",
    title: "Expansión Contenido Adicional: Escenarios de Enfrentamiento",
    category: "escenario",
    content: `5 escenarios independientes de Modo Enfrentamiento.

"ASCENSIÓN" (4 jugadores, dura 10 rondas): recursos iniciales 10 de Oro/4 Materiales, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce, ciudadela y 3 unidades "unas pocas" de bronce. Los jugadores se dividen en 2 equipos de 2, cada equipo empezando en una mitad del mapa (colocación colectiva de sus losetas iniciales); nadie puede tener héroe secundario; los aliados pueden transferirse recursos vía mercadillo. Contrarreloj: en las rondas 3, 6 y 9 los aliados pueden transferirse recursos sin visitar un mercadillo. Victoria: al final de la ronda 10, ambos equipos libran una serie de hasta 3 duelos 1 contra 1 (emparejamientos decididos por el equipo que gane un desempate de dado de ataque); gana el equipo que se lleve al menos 2 de los 3 duelos.

"ISLAS ESMERALDA" (4 jugadores, dura 16 rondas, con losetas marinas): recursos iniciales 13 de Oro/4 Materiales, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce, cofradía de magos y 3 unidades "unas pocas" de bronce. Si tu héroe empieza su turno en una loseta marina, tira 1 dado de ataque antes de moverte: ganas PM adicionales igual al resultado. Si un jugador pierde su ciudad, sus héroes se retiran y pierde la partida. Victoria: ser el único jugador restante antes del final de la ronda 16 (si no, empate entre los que queden).

"REINO DEL CAOS" (2 o 4 jugadores, dura 14 rondas, con utopía del dragón defendida por una facción no usada en la partida): recursos iniciales 10 de Oro/4 Materiales/1 Objeto de Valor, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce, alcaldía y 3 unidades "unas pocas" de bronce. Usa cartas de ciudad para elegir al azar la facción que defenderá la utopía del dragón con un ejército de IA (1 manada de oro del mayor coste, 2 manadas de plata, 2 "unas pocas" de bronce) y un mazo de IA propio (3 fuerza, 2 magia) más un mazo de hechizos fijo (2 Flecha Mágica, 1 Relámpago, 1 Celeridad, 1 Rayo Disruptor). Se puede visitar la utopía varias veces (cada vez por una facción distinta, marcando con su cubo); al comienzo de tu turno, tras ingresos y anuncio astrológico, lanza 1 dado de ataque: con -1, roba y resuelve 1 carta del mazo de hechizos de IA (barajándola de nuevo después). Cuando el jugador inicial derrota al ejército de la utopía, se completa la ronda para igualar turnos jugados y la partida termina. Victoria: derrotar al ejército que defiende la utopía del dragón antes del final de la ronda 14 (si no, todos pierden).

"PÉRDIDA DE LA INOCENCIA" (3 jugadores, dura 11 rondas, escenario de grial): recursos iniciales 10 de Oro/2 Materiales/1 Objeto de Valor, ingresos «15»/«2»/«1». Cada jugador empieza con vivienda de bronce, cofradía de magos y 1 manada de bronce del mayor coste. Los jugadores pueden usar su mazo de fuerza y magia al pagar Oro para defender su ciudad; el héroe con la ficha de grial tiene 1 PM menos; si tu héroe principal es derrotado en combate contra otro héroe, quedas eliminado; derrotar a un héroe principal da 15 de Oro; si te derrotan o te rindes con la ficha de grial, pasa a quien te venció o se queda en la zona de rendición; si te derrota un ejército neutral, se queda en esa zona. Victoria: ser el único jugador restante, o llevar el grial a tu ciudad, antes del final de la ronda 11 (si no, todos pierden).

"EL TRÉBOL CARMESÍ" (2-4 jugadores, dura 14 rondas, con monolitos bidireccionales interconectados entre todos los jugadores): recursos iniciales 17 de Oro/3 Materiales/3 Objetos de Valor, ingresos «10»/«2»/«0». Cada jugador empieza con vivienda de bronce y 3 unidades "unas pocas" de bronce. Nadie puede retirarse de un combate; derrotar a un héroe principal da 20 de Oro; un jugador que pierda su ciudad o cuyo héroe sea derrotado en cualquier combate pierde la partida. Victoria: derrotar al mayor número de jugadores antes del final de la ronda 14 (si nadie destaca, todos pierden).`
  },
  {
    id: "cap_campana_inferno_creadores_pesares",
    title: "Campaña de Inferno: Creadores de Pesares",
    category: "campaña",
    content: `Campaña de 3 misiones para la facción Inferno (héroe: cualquiera de Inferno), jugable con las expansiones Murallas e Inferno (la 3ª misión también admite Confluencia). Enfrenta a Erathia, AvLee y los Señores Elementales de Confluencia (referencia de preparación y condiciones; el contenido narrativo está en el Libro de Misiones físico).

MISIÓN 1 — "Un Plan Diabólico" (12 rondas): recursos iniciales 10 de Oro/2 Materiales/1 Objeto de Valor. Edificios iniciales: vivienda de bronce, ciudadela. Bonificador a elegir: buscar(4) en artefactos, robar hasta encontrar 2 hechizos de la escuela de fuego (quedarte 1), o +7 Objetos de Valor. Héroes de IA: la Reina de los Dragones Dorados (con dragones dorados/negros/hada y unicornios) y los Exploradores de las Murallas (ejército neutral escalable, de nivel = ronda actual ÷ 2 redondeado hacia arriba; si el ejército resultante tiene menos de 5 unidades, se añade una manada de elfos). Reglas: se ignoran los bordes de las losetas iniciales; los Exploradores de las Murallas solo tienen 2 PM y van directos hacia la Reina de los Dragones Dorados por el camino más corto (ignorando la prioridad estándar de movimiento de la IA); el ejército de la Reina no se mueve; derrotar un héroe de IA da 8 de Oro; visitar un obelisco activa un evento de historia. Victoria: derrotar al ejército de la Reina de los Dragones Dorados. Derrota: que cualquier Explorador de las Murallas alcance la zona de la Reina antes que tú, que tu héroe sea derrotado en combate, o que pierdas tu ciudad (puedes retirarte de combates contra neutrales no azur), o no ganar antes del final de la ronda 12.

MISIÓN 2 — "Golpea el Hierro Mientras Esté Frío" (13 rondas): recursos iniciales 25 de Oro/2 Materiales/2 Objetos de Valor. Edificios iniciales: vivienda de bronce, vivienda de plata, ciudadela, Puerta del Castillo. Bonificador a elegir: ganar un héroe secundario más unos pocos demonios, +20 de Oro, o añadir unos pocos ojos maléficos/medusas/minotauros. Héroes de IA: General Kendal (ejército de Castillo con muralla/puerta/torre) y 2 oleadas sucesivas de la Vanguardia de Ironfist (ejércitos neutrales escalables). Reglas: no se puede reclutar héroe secundario adicional; se ignoran cartas de anuncio astrológico que cambien PM o retiren cubos negros; los héroes enemigos van directos hacia tu héroe/ciudad más cercana por el camino más corto; derrotar un héroe de IA da 10 de Oro; si una de tus ciudades cae, se marca con un cubo negro y pasa a tratarse como zona vacía para la IA; puedes reclutar para un mazo especial de "Tropas Retardantes" (independiente de tu ejército de héroe) que defienden tus ciudades en tu ausencia, usando también tu mazo de fuerza y magia y tus usos de Experto. Victoria: señalizar todos los obeliscos del mapa y después capturar la ciudad de Castillo. Derrota: que tu héroe sea derrotado en combate (puedes retirarte de combates contra neutrales no azur), o perder el control de cualquiera de tus ciudades, o no ganar antes del final de la ronda 13.

MISIÓN 3 — "Custodios de los Pesares" (13 rondas, admite también Confluencia): recursos iniciales 8 de Oro/1 Material. Edificios iniciales: vivienda de bronce, vivienda de plata, ciudadela, Puerta del Castillo, Nubes de Azufre. Bonificador a elegir: buscar(5) en artefactos, robar hasta encontrar 3 hechizos de fuego (quedarte 1), o reforzar los cerberos iniciales. Héroes de IA: 3 guardianes elementales (Océano Eterno, Guardias de Cristal, Custodios del Fuego), cada uno con habilidad de invocar su elemental correspondiente. Reglas: derrotar un héroe de IA da 5 de Oro; tu héroe secundario no puede entrar en zonas con obelisco; visitar un obelisco activa un evento de historia y, tras la ronda 1, reduce en 1 la dificultad de las losetas cercanas normales (hasta la ronda 9, que la vuelve a subir en 1 solo para las losetas elementales). Victoria: derrotar a los 3 héroes guardianes. Derrota: que tu héroe sea derrotado en combate (puedes retirarte de combates contra neutrales no azur), o no derrotar al menos 1 guardián antes de la ronda 9 y 2 antes de la ronda 11, o no ganar antes del final de la ronda 13.`
  },

  // =========================================================================
  // EXPANSIÓN BATALLAS NAVALES Y LIBRO DE MISIONES (NAVAL BATTLES)
  // =========================================================================
  {
    id: "cap_exp_batallas_navales_componentes",
    title: "Expansión Batallas Navales: Componentes",
    category: "componentes",
    content: `Esta expansión añade 2 tableros de combate de neopreno (con el tablero de combate normal en una cara y el naval en la otra, ver capítulo 10), las Cartas y Fichas de Habilidad Potenciada (ver capítulo 5) y los Bancos de Criaturas con sus Fichas de Pila (ver capítulo 10).

COMPONENTES: 1 libro de misiones, 2 tableros de combate de neopreno, 50 cartas de unidad del banco de criaturas, 32 cartas de habilidad potenciada, 24 fichas del banco de criaturas, 10 fichas de habilidad potenciada, 9 fichas de unidad apilada, 4 dados de ataque.`
  },
  {
    id: "cap_exp_batallas_navales_escenarios",
    title: "Expansión Batallas Navales: Escenarios (Cooperativo, Enfrentamiento y Solitario)",
    category: "escenario",
    content: `Esta expansión comparte las reglas generales de Modo Cooperativo del Libro de Misiones básico (unidades neutrales controladas con las reglas de IA; el mercadillo también puede dar recursos a cualquier jugador; victoria compartida al cumplirse la condición).

ESCENARIO COOPERATIVO — "Invasión Bárbara" (2-4 jugadores, dura 11 rondas): preparación de mapa escalable según jugadores (2: 3 iniciales + 3 cercanas con obelisco + 4 lejanas; 3: 4+4+6; 4: 5+5+8). Recursos iniciales 10 de Oro/4 Materiales, ingresos «10»/«0»/«0». Cada jugador empieza con vivienda de bronce, alcaldía y 3 unidades "unas pocas" de bronce. La loseta inicial central pertenece a una "Ciudad Enemiga" (se recomienda la facción Bastión, o cualquier otra no usada en la partida si no tienes esa expansión). Los jugadores pueden intercambiar artefactos si sus héroes están en zonas adyacentes; nadie puede señalizar un lugar ya señalizado por otro jugador; no se puede entrar en la Ciudad Enemiga hasta descubrir todas las losetas cercanas y visitar todos los obeliscos al menos una vez; visitar un obelisco da una ficha de habilidad potenciada. Al entrar en la Ciudad Enemiga se combate contra 3 manadas de oro y 2 "unas pocas" de bronce; si ganas, coloca tu cubo de facción en la zona (varios jugadores pueden señalizarla cada uno con el suyo). Victoria: que haya un cubo de cada facción jugada en la Ciudad Enemiga antes del final de la ronda 11 (si no, todos pierden).

ESCENARIO DE ENFRENTAMIENTO — "El Pantano de Tentáculos de Gorlam" (2 jugadores, dura 14 rondas): recursos iniciales 16 de Oro/4 Materiales/1 Objeto de Valor, ingresos «15»/«0»/«0». Cada jugador empieza con vivienda de bronce y 3 unidades "unas pocas" de bronce. Ganar un combate en un banco de criaturas da también una ficha de habilidad potenciada. Contrarreloj: en las rondas 4, 5, 6, 10, 11 y 12, las minas de zonas de borde del mapa no producen ingresos, y cualquier combate en una zona de borde durante esas rondas se libra en el tablero de combate naval. Victoria: al final de una ronda, si algún jugador controla 6+ minas, se juega una ronda final y gana quien tenga más minas (si nadie llega a 6 antes del final de la ronda 14, empate).

ESCENARIO SOLITARIO — "Isla de Fuego" (1 jugador, dura 16 rondas): recursos iniciales 10 de Oro/4 Materiales, ingresos «10»/«0»/«0». Empiezas con vivienda de bronce y 3 unidades "unas pocas" de bronce. Cada loseta que descubras recibe un banco de criaturas distinto y en este orden: las lejanas siempre reciben un Tesoro de los Diablillos; la 1ª cercana un Conservatorio de Grifos; la 2ª cercana un Banco de Nagas; la 3ª cercana una Pirámide; la 4ª cercana una Utopía del Dragón (de banco de criaturas). Ganar un combate en un banco de criaturas da también una ficha de habilidad potenciada; los mercadillos son visitables. Victoria: ganar un combate en todos los bancos de criaturas del mapa antes del final de la ronda 16.`
  },

  // =========================================================================
  // MANUAL DE REGLAS REESCRITO V2.0 DEV (RULES REWRITE COMPENDIUM 2.0)
  // =========================================================================
  {
    id: "cap_juego_con_miniaturas_y_recursos_comunitarios",
    title: "Jugar con Miniaturas y Recursos de la Comunidad",
    category: "faq",
    content: `JUGAR CON MINIATURAS (regla general, aplicable a cualquier partida): si prefieres usar miniaturas de unidad en vez de solo cartas durante el combate, colócalas y muévelas sobre el tablero de combate; puedes ponerlas encima de las cartas o dejar las cartas a un lado a modo de "barra de iniciativa" para visualizar mejor el orden de activación. Si juegas así, aplica estas reglas: al robar una carta de unidad neutral, si sale una unidad neutral repetida, una que ya tengas en tu ejército, o una de tu propia facción, descártala y roba otra en su lugar; al reclutar unidades neutrales con Diplomacia, tampoco puedes reclutar una unidad de una facción controlada por otro jugador ni una ya presente en el ejército de cualquier jugador (descarta esa carta y roba otra).

RECURSOS DE LA COMUNIDAD: además del reglamento oficial, la comunidad de jugadores mantiene una Wiki no oficial en inglés, traducida parcialmente por mí mismo (homm3bg.wiki) con notas detalladas que aclaran la redacción ambigua de numerosas cartas del juego, recopilando además erratas y aclaraciones de los propios diseñadores. Es un buen punto de consulta adicional ante dudas sobre el texto exacto de una carta concreta, aunque no sustituye al reglamento oficial de Archon Studio. No he continuado con la traducción al castellano por falta de tiempo y porque ya he incluido los textos de cada carta aquí, lo que ha sido una tarea larga y tediosa.`
  }
];