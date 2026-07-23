import { RuleSection } from '../types';

export const rulesKB: RuleSection[] = [
  // =========================================================================
  // 1. INTRODUCCIÓN GENERAL Y FACCIONES
  // =========================================================================
  {
    id: "overview_factions",
    title: "1. Introducción General al Juego y las 10 Facciones de Erathia",
    category: "general",
    content: `Heroes of Might and Magic III: El Juego de Mesa emula con absoluta precisión el espíritu y las mecánicas del legendario videojuego original. Es un juego de estrategia táctica y desarrollo RPG en el que cada jugador asume el control de una facción mítica y su Héroe Principal, explorando el terreno a través de losetas de mapa hexagonales, gestionando una economía triple, desarrollando su metrópolis natal en tres niveles de construcción, adquiriendo cartas de hechizo u objetos mágicos, y resolviendo combates tácticos en un tablero separado de casillas o en el gran tablero hexagonal de campo de batalla.

El juego cuenta con un total de 10 facciones oficiales que abarcan el juego base y todas sus expansiones:

1. Castillo (Castle - Borde Azul): Fuerte presencia militar convencional basada en caballeros, campeones pesados, infantería disciplinada y la moral alta del orden divino.
2. Necrópolis (Necropolis - Borde Gris): Huestes de no-muertos comandadas por nigromantes y caballeros de la muerte. Inmunidad absoluta a la moral positiva y negativa; alistan esqueletos y refuerzan tropas de las bajas sufridas.
3. Mazmorra (Dungeon - Borde Morado): Hechicería oscura destructiva y monstruos temibles de las cavernas como contempladores, trogloditas, mantícoras y los indestructibles dragones negros.
4. Murallas (Rampart - Borde Verde): Elfos, centauros, enanos, pegasos, dendroides, unicornios y dragones dorados en comunión con las fuerzas forestales. Destacan por su agilidad y bonificaciones de movimiento.
5. Torre (Tower - Borde Celeste): Magos arcanos, alquimistas, gólems (de hierro, acero, oro y diamante), genios, nagas y titanes de tormenta. Excelente manipulación de artefactos y cofradías de magos potenciadas.
6. Fortaleza (Fortress - Borde Verde Oscuro): Brujas y señores de las bestias guiando criaturas de los pantanos como hidras del caos, basiliscos, wyverns, libélulas y gárgolas. Defensas impenetrables y manipulación de terreno.
7. Inferno (Borde Rojo): Heréticos y demoniacos comandando familiares, magogs, cerberos, demonios, señores del abismo, efrits y archidiablos. Tácticas basadas en el fuego, sacrificio e invocación de demonios.
8. Bastión (Stronghold - Borde Naranja): Bárbaros y magos de batalla al mando de orcos, ogros, cíclopes y behemots. Fuerte dependencia de la fuerza física bruta, inmunidades mágicas y rabia de combate.
9. Conflujo (Conflux - Borde Magenta): Elementales de fuego, agua, aire y tierra bajo el mando de elementalistas y caminantes de planos, coronados por los fénix resucitados. Magia elemental devastadora y portales de invocación.
10. Cala (Cove - Borde Turquesa): Piratas, corsarios, hechiceras, naves y serpientes marinas comandadas por capitanes y navegantes. Dominio absoluto de la navegación costera, astilleros ágiles y contrabando.`
  },

  // =========================================================================
  // 2. COMPONENTES, DADOS, FICHAS Y TIPOS DE CARTAS
  // =========================================================================
  {
    id: "components_dice_tokens_cards",
    title: "2. Componentes del Juego: Tableros, Losetas, Dados, Fichas y Tipos de Cartas",
    category: "components",
    content: `COMPONENTES FÍSICOS Y ELEMENTOS DE JUEGO:

TABLEROS Y LOSETAS:
• Losetas de Mapa Hexagonales: Clasificadas en Losetas de Superficie (Iniciales I, Lejanas II-III, Cercanas IV-V, Centrales VI-VII), Losetas Subterráneas, Losetas de Mar y Losetas Elementales.
• Tablero de Ciudad (Town Board): Controla los edificios construidos, la producción de recursos y los contadores de acción urbana (Construcción, Población, Libro de Hechizos).
• Tablero de Héroe (Hero Board): Muestra estadísticas base (Ataque, Defensa, Poder, Conocimiento), tipo (Fuerza/Magia), habilidad inicial, especialidades y el marcador de nivel (I a VII).
• Tableros de Combate:
  - Tablero Estándar (reja 4x5): 20 casillas distribuidas en 2 líneas traseras, 2 líneas delanteras y 1 fila central.
  - Tablero de Combate Naval (Neopreno): Elimina las dos casillas centrales.
  - Tablero de Campo de Batalla Hexagonal (Battlefield Board): Gran tablero de hexágonos para combate táctico avanzado y modos Aventura/Escaramuza.

LOS TRES DADOS OFICIALES (D6):
1. DADO DE RECURSOS (Resource Die):
   • Cara 1: +1 Moneda de Oro
   • Cara 2: +2 Monedas de Oro
   • Cara 3: +1 Material de Construcción
   • Cara 4: +2 Materiales de Construcción
   • Cara 5: +1 Objeto de Valor
   • Cara 6: Vacío / Fallo (Sin ganancia)
2. DADO DE ATAQUE (Attack Die):
   Se lanza en cada ataque o represalia en combate táctico:
   • Caras con -1: Disminuye el daño final en 1 herida (mínimo 0).
   • Caras con 0: Sin variación (aplica daño base).
   • Caras con +1: Incrementa el daño final en +1 herida.
3. DADO DE TESORO (Treasure Die):
   • Caras 1 y 2: Medio Nivel de Experiencia (Gana 1 Exp).
   • Caras 3 y 4: Búsqueda de Artefacto (Busca 2 en el mazo de Artefactos).
   • Cara 5: Lanzar y resolver 1 Dado de Recursos.
   • Cara 6: Lanzar 2 Dados de Recursos y elegir 1 resultado.

FICHAS Y MARCADORES ESPECIALES:
• Fichas de Tiempo (Time Tokens): Miden la duración de efectos continuos y rondas.
• Fichas de Pila / Unidades Apiladas (Stack Tokens): Aumentan las estadísticas de tropas neutrales (+1 Ataque, +1 Defensa, +1 PS o +2 Iniciativa) y actúan como escudo contra el daño letal.
• Fichas de Habilidad Potenciada: Permiten transformar una carta de habilidad normal recien obtenida en su versión Potenciada.
• Fichas de Modificación en Combate: Fichas de Ataque (+1/+2 Ataque), Defensa (+1 Defensa opcional), Parálisis (salta activación), Corrosión (-1 Defensa hasta min 0), Debilidad (-1/-2 Ataque).
• Obstáculos Tácticos: Arenas Movedizas (detiene movimiento/activación), Campo de Fuerza (bloquea unidades terrestres; voladoras lo cruzan), Minas Terrestres (2 de daño al entrar), Muro de Fuego (daño por paso), Fichas de Clonación (crea copia con 1 PS y 0 Defensa).
• Fichas de Mapa: Monolitos, Remolinos, Puertas Subterráneas, Fichas del Banco de Criaturas.

TIPOS DE CARTAS DEL JUEGO:
1. Cartas de Característica: Ataque, Defensa, Poder (potencia de hechizo) y Conocimiento.
2. Cartas de Habilidad Secundaria: Efecto Básico (gratuito) y Efecto Experto (gasta uso de Experto).
3. Cartas de Especialidad de Héroe: Exclusivas de cada héroe (desbloqueadas en niveles I, IV y VI).
4. Cartas de Hechizo y Pergaminos de Hechizo: Pertenecen a las 4 Escuelas (Aire, Fuego, Tierra, Agua) con efectos básico/potenciado.
5. Cartas de Artefacto: Divididas en Menor (Azul), Mayor (Dorado), Reliquia (Púrpura) y Grial (Verde Esmeralda). Van directamente a la mano.
6. Cartas Permanentes: Otorgan ventajas continuas en mesa (límite de 1 activa simultáneamente).
7. Cartas de Máquina de Guerra: Ballesta, Catapulta, Cañón, Carro de Suministros, Tienda de Primeros Auxilios.
8. Cartas de Caja de Pandora, Anuncio de Astrólogos, Eventos y Cartas de Ciudad.`
  },

  // =========================================================================
  // 3. PREPARACIÓN DE LA PARTIDA Y DIFICULTAD
  // =========================================================================
  {
    id: "game_setup_and_difficulty",
    title: "3. Preparación de la Partida y Selección de Dificultad",
    category: "setup",
    content: `PASOS OFICIALES DE PREPARACIÓN DE LA PARTIDA (SETUP):

1. Seleccionar Escenario del Libro de Misiones.
2. Elegir Facción entre las disponibles.
3. Elegir un Héroe Principal de la facción elegida.
4. Tomar los componentes de la facción: Tablero de Héroe, 2 miniaturas de héroe, 7 fichas de edificio de ciudad, Tablero de Ciudad, 7 cartas de unidad doble cara, 3 cartas de especialidad, 1 carta de habilidad inicial, 20 cubos de facción, 1 ficha de construcción, 1 ficha de población, 1 ficha de libro de hechizos y 3 fichas de movimiento.
5. Colocar un cubo de facción en el nivel I del marcador de nivel del héroe.
6. Preparar las losetas de mapa y componentes del escenario.
7. Colocar el Tablero de Ciudad y configurar los edificios construidos inicialmente según el escenario.
8. Ajustar los ingresos iniciales en el marcador de recursos e ingresar los recursos iniciales en la reserva.
9. Agrupar las fichas de recursos en pilas al alcance de todos.
10. Separar el resto de fichas y marcadores.
11. Organizar las cartas de característica (Ataque, Defensa, Poder, Conocimiento) tomadas del tablero de héroe.
12. Añadir las cartas de Flecha Mágica según el tipo de héroe (1 si es de Fuerza/Might, 2 si es de Magia/Magic).
13. Añadir la Habilidad Inicial y la Especialidad de Nivel I al mazo de inicio.
14. Barajar el mazo inicial de 9 cartas y colocarlo bocabajo junto al tablero de héroe (Mazo de Fuerza y Magia).
15. Clasificar y barajar los mazos independientes de Habilidades, Artefactos y Hechizos.
16. Crear las pilas de descartes revelando la carta superior de cada uno de los 3 mazos.
17. Seleccionar la Dificultad del escenario y tomar los bonificadores correspondientes.
18. Separar los mazos de Unidades Neutrales por rango (Bronce, Plata, Oro, Azur) y barajarlos.
19. Colocar el Tablero de Combate y entregar las unidades iniciales indicadas por el escenario.
20. Colocar el Marcador de Rondas con un cubo negro en la casilla "1".
21. Barajar el mazo de Anuncio de Astrólogos y colocarlo junto al marcador de rondas.
22. Orientar la loseta inicial a voluntad y colocar la miniatura del héroe principal en la casilla central.
23. Determinar el jugador inicial (quien no cambia durante la partida).

PASOS ADICIONALES PARA EXPANSIONES:
24. Eventos (Fortaleza): Barajar el mazo de Eventos junto al marcador de rondas.
25. Bancos de Criaturas (Batallas Navales): Separar y barajar fichas lejanas/cercanas y fichas de pila.
26. Invocaciones (Conflujo): Colocar cartas de unidades elementales invocadas bocarriba.
27. Pergaminos de Hechizo (Bastión): Barajar 10 pergaminos en el mazo de artefactos.
28. Características Potenciadas (Inferno): Colocar cartas de características potenciadas bocarriba.
29. Habilidades Potenciadas (Batallas Navales): Colocar mazo de habilidades potenciadas junto al mazo normal.
30. Caja de Pandora: Barajar mazo de cartas de Caja de Pandora.
31. Moral (Campo de Batalla): Barajar mazos de cartas de Moral Positiva y Negativa.
32. Máquinas de Guerra (Murallas/Cala): Colocar cartas de Máquinas de Guerra bocarriba.

NIVELES DE DIFICULTAD Y BONOS INICIALES:
• Fácil: Lanza 2 Dados de Recursos y recibe ambos recursos — O — Busca (2) en el mazo de Artefactos 2 veces.
• Normal: Lanza 2 Dados de Recursos y elige 1 — O — Busca (2) en el mazo de Artefactos.
• Difícil: Lanza 1 Dado de Recursos — O — Revela cartas del mazo de Artefactos hasta hallar 1 Artefacto Menor.
• Imposible: Sin bonificador inicial.`
  },

  // =========================================================================
  // 4. ESTRUCTURA DE RONDA Y TURNOS
  // =========================================================================
  {
    id: "round_structure_and_player_turns",
    title: "4. Estructura de la Ronda, Fases y Turnos del Jugador",
    category: "general",
    content: `ESTRUCTURA DE LA RONDA Y FASES DE JUEGO:

El juego se desarrolla a lo largo de Rondas consecutivas. Cada ronda sigue un ciclo rígido:

I. INICIO DE RONDA (A partir de la ronda 2):
• Refrescar Fichas: Voltear las fichas de Construcción, Población y Libro de Hechizos a su cara activa.
• Refrescar Puntos de Movimiento (PM): Voltear todas las fichas de movimiento a su cara verde activa.
• Recuperar Usos de Experto: Reactivar los usos de Efectos Experto del héroe según su nivel.

II. TIPOS DE RONDA:
1. RONDAS IMPARES (Rondas de Recursos - Rondas 3, 5, 7, 9, 11, 13, 15):
   • Todos los jugadores cobran sus ingresos pasivos de Ciudad, Minas y Asentamientos señalizados.
   • En partidas multijugador con expansión Fortaleza, se roba y resuelve una carta de Evento en sentido horario.
2. RONDAS PARES (Rondas Astrológicas - Rondas 2, 4, 6, 8, 10, 12, 14, 16):
   • Se roba y resuelve una carta de Anuncio de Astrólogos para todos los jugadores.
3. EVENTOS TEMPORIZADOS:
   • Si el marcador de rondas alcanza una casilla con un evento de historia/escenario, se resuelve de inmediato.

III. FASE DE INICIO DE TURNO DEL JUGADOR:
1. Gestión de Mano (Hand Limit):
   - El jugador puede descartar voluntariamente cualquier número de cartas de su mano.
   - Si la mano supera el Límite de Mano del héroe (4 a 7 según nivel), debe descartar hasta igualar el límite.
   - Roba cartas del mazo de Fuerza y Magia hasta reponer la mano al Límite de Mano.
2. Resolver habilidades de "al comienzo de tu turno".

IV. LAS TRES ACCIONES DEL JUGADOR DURANTE EL TURNO:
1. ACCIONES DE MOVIMIENTO (Gastando PM):
   • Mover 1 casilla en el mapa de aventura (1 PM).
   • Re-visitar una casilla donde ya se encuentra el héroe (1 PM).
   • Extender un combate contra unidades neutrales por 1 ronda adicional (1 PM).
   • Revelar una loseta de mapa adyacente boca abajo (1 PM).
   • Colocar una nueva loseta lejana (II-III) de la reserva (1 PM).
2. ACCIONES DE CIUDAD (Una vez por ronda cada una):
   • Ficha de Construcción: Construir o mejorar un edificio en el Tablero de Ciudad.
   • Ficha de Población: Reclutar tropas, reforzar unidades o contratar un Héroe Secundario (10 de oro).
   • Ficha de Libro de Hechizos: Comprar hechizos en la Cofradía de Magos.
3. ACCIONES DE MORAL:
   • Moral Positiva: Puedes gastar 1 Ficha de Moral Positiva en cualquier momento para: (a) Robar 1 carta, (b) Descartar N cartas y robar N cartas, o (c) Repetir la tirada de cualquier dado.
   • Moral Negativa: Si pierdes moral teniendo Moral Positiva, pierdes la ficha. Si ganas Moral Negativa sin tener positiva, recibes la Ficha de Moral Negativa. Si acumulas una 2ª Ficha de Moral Negativa, debes descartar TODA tu mano de cartas al finalizar tu siguiente turno.
   • Excepción de Necrópolis: La facción de Necrópolis ignora totalmente la moral (nunca gana ni pierde moral).`
  },

  // =========================================================================
  // 5. SISTEMA DE HÉROES Y PROGRESIÓN
  // =========================================================================
  {
    id: "heroes_system_and_progression",
    title: "5. Sistema de Héroes: Héroe Principal vs Secundario, Anatomía y Progresión de Nivel",
    category: "heroes",
    content: `SISTEMA DE HÉROES Y PROGRESIÓN DE NIVEL:

HÉROE PRINCIPAL VS HÉROE SECUNDARIO:
• Héroe Principal:
  - Dispone de 3 Puntos de Movimiento (PM) por turno.
  - Posee Tablero de Héroe, gana Experiencia (Exp), sube de Nivel (I a VII) y utiliza de forma exclusiva el Mazo de Fuerza y Magia.
• Héroe Secundario:
  - Se contrata volteando la Ficha de Población y pagando 10 Monedas de Oro en una Ciudad o Asentamiento controlado.
  - Dispone de 2 Puntos de Movimiento (PM) independientes por turno.
  - NO posee tablero propio, NO gana experiencia ni nivel, NO puede jugar cartas del mazo en combate, pero combate con las mismas unidades de tu reserva.
  - Si es atacado por un héroe enemigo, puede optar por ser derrotado instantáneamente sin entablar combate para conservar las tropas.
  - Máximo 1 Héroe Secundario simultáneo por jugador. Si muere, puede recontratarse.

ANATOMÍA DEL TABLERO DE HÉROE:
1. Nombre y Clase: Identificación e iconografía.
2. Tipo de Héroe: Fuerza (Might) o Magia (Magic). Determina las cartas de Flecha Mágica iniciales (1 para Fuerza, 2 para Magia).
3. Color de Facción: Color de los cubos y miniaturas.
4. Estadísticas Base: Valores iniciales de Ataque, Defensa, Poder y Conocimiento.
5. Habilidad Inicial: Carta de habilidad única con la que comienza el héroe.
6. Especialidad: Tres cartas de especialidad que se añaden en los Niveles I, IV y VI.
7. Marcador de Nivel (Level Tracker): Pista de avance de Nivel I a VII. Cada nivel requiere 2 Puntos de Experiencia (Exp).

TABLA DE EFECTOS POR SUBIDA DE NIVEL:
• Niveles Plata (II, III, V y VII):
  - Realiza una acción de Busca (2) en el Mazo de Habilidades Secundarias y añade la carta elegida a tu mano.
• Niveles Oro (I, IV y VI):
  - Añade la carta de Especialidad correspondiente a tu mano.
• Incremento de Límite de Mano (Hand Limit):
  - Nivel I - II: Límite de 4 cartas.
  - Nivel III - IV: Límite de 5 cartas.
  - Nivel V - VI: Límite de 6 cartas.
  - Nivel VII: Límite de 7 cartas.
• Marcador de Usos de Efecto Experto:
  - Desbloquea ranuras para jugar efectos Experto adicionales por ronda (hasta un máximo de 3 en Nivel VI-VII).

SISTEMA DE HABILIDADES POTENCIADAS Y FICHAS POTENCIADAS:
• Cartas de Habilidad Potenciada: Versiones mejoradas de las cartas de habilidad estándar que otorgan su efecto avanzado directo SIN requerir el gasto de un uso de Experto.
• Fichas de Habilidad Potenciada: Se obtienen como recompensa en ciertos escenarios u obeliscos.
• Uso: Al obtener una nueva carta de habilidad, puedes descartar 1 Ficha de Habilidad Potenciada para retirar la habilidad normal y coger en su lugar la versión del Mazo de Habilidades Potenciadas.
• Exclusividad: Solo existe 1 copia de cada carta de habilidad potenciada en el juego. Si un jugador la coge, ningún otro podrá obtenerla.`
  },

  // =========================================================================
  // 6. CONSTRUCCIÓN DE MAZO Y HABILIDADES SECUNDARIAS
  // =========================================================================
  {
    id: "deck_building_and_secondary_skills",
    title: "6. Construcción del Mazo de Fuerza y Magia y Catálogo de Habilidades Secundarias",
    category: "skills",
    content: `CONSTRUCCIÓN DEL MAZO Y HABILIDADES SECUNDARIAS:

REGLAS GENERALES DEL MAZO DE FUERZA Y MAGIA:
• Mazo Inicial: Formado por 9 cartas al inicio de la partida (características base, Flecha Mágica, Habilidad Inicial y Especialidad Nivel I).
• Pila de Descartes: Cada jugador tiene su propia pila de descartes. Las cartas jugadas o descartadas van aquí salvo que se indique eliminar del juego.
• Barajado Automático: Si necesitas robar y tu mazo está vacío, baraja inmediatamente tu pila de descartes para formar un nuevo mazo.
• Acción de Búsqueda (Search X): Permite mirar las X cartas superiores del mazo correspondiente (Habilidades, Hechizos o Artefactos), coger 1 a la mano y descartar el resto, O BIEN coger directamente la carta superior de la pila de descartes de ese mazo.

TIPOS DE EFECTOS EN CARTAS:
• Instantáneos: Se resuelven de inmediato al jugarse.
• Activación: Solo se juegan al activar una unidad propia en combate táctico.
• Mapa: Solo se usan fuera de combate en el mapa de aventura.
• Continuos (Ongoing): Duran hasta consumir su efecto o hasta el inicio del siguiente turno del jugador.
• Permanentes: Permanecen en mesa otorgando ventajas continuas. Límite estricto de 1 carta permanente activa a la vez por héroe.

CATÁLOGO UNIFICADO DE LAS 32 HABILIDADES SECUNDARIAS:
Cada carta de habilidad posee un Efecto Básico (gratuito) y un Efecto Experto (requiere gastar un uso de Experto):

1. Nigromancia (Necromancy - Exclusivo Necrópolis): Básico: Tras ganar combate, refuerza tropas o alista esqueletos pagando mitad coste. Experto: Refuerza tropas o alista esqueletos gratis.
2. Ofensa (Offense): Básico: +1 Ataque a una unidad. Experto: +2 Ataque a una unidad o +1 a todas.
3. Defensa (Armorer / Defense): Básico: +1 Defensa a una unidad. Experto: +2 Defensa a una unidad.
4. Liderazgo (Leadership): Básico: Gana 1 Ficha de Moral Positiva. Experto: Gana 1 Moral Positiva y roba 1 carta.
5. Sabiduría (Wisdom): Básico: Reduce coste de comprar hechizos en 2 de oro. Experto: Reduce coste en 3 de oro y Busca (3) en Hechizos.
6. Misticismo (Mysticism): Básico: Al lanzar un hechizo, recupera 1 Poder. Experto: Recupera 2 Poderes o roba 1 carta.
7. Logística (Logistics): Básico: +1 Punto de Movimiento (PM). Experto: +2 Puntos de Movimiento (PM).
8. Balística (Ballistics): Básico: En asedio, la catapulta realiza +1 ataque. Experto: En asedio, la catapulta inflige +2 de daño.
9. Navegación (Navigation): Básico: +1 PM en agua y evita daño de remolino. Experto: +2 PM en agua y gana 1 dado de tesoro.
10. Arquería (Archery): Básico: +1 Ataque a tropas a distancia. Experto: +2 Ataque a tropas a distancia o ignora penalización de distancia.
11. Botánica / Fincas (Estates): Básico: Gana +2 de Oro en ronda de recursos. Experto: Gana +4 de Oro o +1 Material.
12. Táctica (Tactics): Básico: Reposiciona 1 unidad en despliegue. Experto: Reposiciona 2 unidades o otorga +1 Iniciativa.
13. Resistencia (Resistance): Básico: Cancela 1 hechizo enemigo reduciendo su daño en 2. Experto: Cancela hechizo o inmuniza a una unidad.
14. Hechicería (Sorcery): Básico: +1 al Poder de hechizos de combate. Experto: +2 al Poder de hechizos de combate.
15. Inteligencia (Intelligence): Básico: Aumenta tu límite de mano en +1 este turno. Experto: Aumenta límite de mano en +2 y roba 1 carta.
16. Aprendizaje (Learning): Básico: Gana 1 Exp adicional tras combate. Experto: Gana 2 Exp adicionales.
17. Detección / Exploración (Scouting): Básico: Revela loseta adyacente gratis. Experto: Revela loseta y gana 1 dado de recursos.
18. Diplomacia (Diplomacy): Básico: Recluta 1 unidad neutral bronce/plata pagando su coste. Experto: Recluta unidad neutral con descuento.
19. Primeros Auxilios (First Aid): Básico: Cura 2 heridas a una unidad en combate. Experto: Cura 4 heridas o resucita 1 unidad "Unas pocas".
20. Táctica de Asedio (Siegecraft): Básico: Ignora protección de muros en asedio. Experto: Destruye 1 muro automáticamente.
... Y el resto del compendio oficial de las 32 habilidades.`
  },

  // =========================================================================
  // 7. SISTEMA DE MAGIA Y HECHIZOS
  // =========================================================================
  {
    id: "magic_system_and_spells_catalog",
    title: "7. Sistema de Magia, Las 4 Escuelas y Catálogo de Hechizos",
    category: "magic",
    content: `SISTEMA DE MAGIA Y REGLAS DE CONJURO:

LAS 4 ESCUELAS DE MAGIA:
• Aire, Fuego, Tierra y Agua.
• Hechizos Básicos: Muestran 1 icono de escuela.
• Hechizos Expertos: Muestran 4 iconos idénticos de escuela.
• Flecha Mágica (Magic Arrow): Hechizo básico universal. Al conjurarlo se elige a qué escuela pertenece.

MECÁNICA DE POTENCIACIÓN (EMPOWER):
• Los hechizos tienen un efecto básico superior, efectos potenciados intermedios y un efecto alternativo inferior (+1 Poder).
• Para acceder a efectos superiores, el héroe debe Potenciar (Empower) el hechizo pagando la cantidad indicada de Poder.
• El Poder se genera jugando cartas de característica de Poder antes del hechizo. Todo el Poder no utilizado se disipa tras resolver el hechizo.

LÍMITES Y PERGAMINOS DE HECHIZO:
• Límite en Combate: Cada jugador puede lanzar únicamente 1 Hechizo Primario por ronda de combate.
• Pergaminos de Hechizo (Spell Scrolls):
  - Se obtienen en eventos, ruinas o cofres. Se colocan en el tablero de héroe (máximo 2 pergaminos simultáneos).
  - Cada pergamino contiene 2 hechizos bocabajo. El héroe puede consultar sus hechizos en cualquier momento.
  - Lanzar un hechizo desde un pergamino NO consume la acción de hechizo de la ronda ni cuenta para el límite de hechizos.
  - Se conjura al nivel de Poder mínimo impreso sin coste, pero NO se puede potenciar con Poder adicional.
  - Se pueden vender en el Puesto de Comercio por 2 Monedas de Oro por cada hechizo contenido.

CATÁLOGO UNIFICADO DE HECHIZOS OFICIALES:
1. Bola de Fuego (Fireball - Fuego): Inflige daño de área a una unidad objetivo y a sus casillas adyacentes según Poder.
2. Rayo (Lightning Bolt - Aire): Inflige daño eléctrico directo de alto impacto a una unidad objetivo.
3. Cadena de Rayos (Chain Lightning - Aire): Golpea a una unidad principal y encadena daño decreciente a unidades contiguas.
4. Implosión (Implosion - Tierra): Hechizo experto de daño masivo a un solo objetivo.
5. Bendición (Bless - Agua): Otorga el máximo resultado en las tiradas del Dado de Ataque a la unidad afectada.
6. Maldición (Curse - Fuego): Fuerza a la unidad enemiga a aplicar el resultado mínimo (-1) en sus tiradas de dado.
7. Piel de Piedra (Stone Skin - Tierra): Otorga +1 a +3 de Defensa o coloca una Ficha de Defensa en la unidad.
8. Escudo de Fuego (Fire Shield - Fuego): Retribuye daño de fuego a cualquier enemigo que ataque en melé a la unidad protegida.
9. Curación (Cure - Agua): Elimina heridas acumuladas y remueve estados negativos (Parálisis, Debilidad).
10. Debilidad (Weakness - Agua): Coloca Ficha de Debilidad (-1 o -2 Ataque) en la unidad enemiga.
11. Portal a la Ciudad (Town Portal - Tierra): Teletransporta al héroe de vuelta a una Ciudad o Asentamiento propio.
12. Caminar sobre el Agua / Hazaña (Water Walk - Agua): Permite al héroe cruzar casillas de agua o ríos sin usar barco.
13. Invocación de Elementales (Summon Elementals - Conflujo): Invoca tropas elementales (Aire, Fuego, Tierra, Agua) al tablero de combate.
14. Muro de Fuego (Fire Wall - Fuego): Coloca Ficha de Muro de Fuego que daña a quien la cruce.
15. Campo de Fuerza (Force Field - Agua): Despliega una barrera física de 2 casillas que bloquea tropas terrestres.
16. Arenas Movedizas (Quicksand - Tierra): Sembrado de fichas ocultas que detienen el avance enemigo.
17. Minas Terrestres (Land Mine - Fuego): Coloca fichas de mina que explotan infligiendo 2 heridas directas.
18. Clonación (Clone - Agua): Crea una Ficha de Clon de una unidad aliada con 1 PS y 0 Defensa.`
  },

  // =========================================================================
  // 8. RECURSOS, ECONOMÍA Y CIUDAD
  // =========================================================================
  {
    id: "resources_economy_and_town_building",
    title: "8. Economía de Recursos, Desarrollo Urbano y Comercio",
    category: "town",
    content: `ECONOMÍA DE RECURSOS, CONSTRUCCIÓN Y COMERCIO:

LOS TRES RECURSOS DEL IMPERIO:
• Monedas de Oro: Divisa principal. Financia construcciones, reclutamiento de tropas, contratación de héroes y compra de hechizos.
• Materiales de Construcción (Madera y Mineral): Indispensables para edificar estructuras urbanas y fortalezas.
• Objetos de Valor (Mercurio, Azufre, Gemas, Cristales): Divisas místicas para unidades de élite (Tier Oro y Azur) y cofradías superiores.
• Sin límite de almacenamiento: Los recursos se acumulan en la reserva sin tope.

DESARROLLO DEL TABLERO DE CIUDAD (TOWN BOARD):
Cada ronda se puede construir 1 edificio usando la Ficha de Construcción y pagando su coste:

1. EDIFICIOS COMUNES A TODAS LAS FACCIONES:
   • Ayuntamiento (City Hall): Aumenta los ingresos pasivos de oro (+5 o +10) o concede habilidades únicas.
   • Ciudadela (Citadel): Desbloquea el refuerzo de tropas ("Unas pocas" -> "Manada") y otorga defensas amuralladas en asedio.
   • Cofradía de Magos (Mage Guild): Desbloquea la Ficha de Libro de Hechizos para comprar hechizos del mazo.
2. MORADAS DE UNIDADES (DWELLINGS) - ORDEN CORRELATIVO OBLIGATORIO:
   • Morada Bronce (Nivel 1-3): Requisito previo para reclutar tropas de bronce.
   • Morada Plata (Nivel 4-5): Requisito previo para reclutar tropas de plata (exige morada bronce).
   • Morada Oro (Nivel 6-7): Requisito previo para reclutar tropas de oro (exige morada plata).
3. EDIFICIOS ÚNICOS DE FACCIÓN (2 por facción):
   • Castillo: Establo (+1 PM) y Fraternidad de la Espada (+1 Ataque/Moral).
   • Necrópolis: Amplificador de Nigromancia (+1 a nigromancia) y Velo de Oscuridad (oculta losetas).
   • Mazmorra: Vórtice Mágico (duplica poder) y Portal de Invocación (recluta neutrales).
   • Murallas: Tesorería (+20% oro) y Fuente de la Juventud (+1 moral).
   • Torre: Biblioteca (+1 hechizo) y Escultura de Gólem (-2 coste en conocimientos).
   • Fortaleza: Jaula de Moscas (+1 iniciativa libélulas) y Cabaña del Brujo (+1 magia).
   • Inferno: Puerta del Abismo (teletransporte entre ciudades) y Crisol de Fuego (+1 poder de fuego).
   • Bastión: Gremio de Valientes (+1 ataque bárbara) y Mercado de Esclavos (canje de tropas por recursos).
   • Conflujo: Altar del Pensamiento (+1 elemento) y Crisol de Elementos (recompensa de elementos).
   • Cala: Astillero (construye barcos) y Gremio de Corsarios (+oro por victorias marítimas).

RECLUTAMIENTO Y REFUERZO DE TROPAS:
• Usando la Ficha de Población se pueden realizar múltiples compras en la misma visita si hay fondos.
• Reclutar: Compra una unidad en su cara de "Unas pocas". Requiere la Morada del nivel correspondiente.
• Reforzar: Paga el coste de refuerzo para voltear la unidad de "Unas pocas" a "Manada". Requiere la Ciudadela.

TABLA OFICIAL DE COMERCIO (PUESTO DE COMERCIO / TRADING POST):
Al visitar un Puesto de Comercio se puede realizar una de las siguientes operaciones:
• Vender 6 Oro -> Comprar 1 Objeto de Valor | Vender 2 Oro -> Comprar 1 Material.
• Vender 1 Objeto de Valor -> Comprar 3 Oro | Vender 1 Objeto de Valor -> Comprar 2 Materiales.
• Vender 1 Material -> Comprar 1 Oro | Vender 3 Materiales -> Comprar 1 Objeto de Valor.
• Comprar Máquinas de Guerra (Ballesta, Catapulta, Cañón, Carro, Tienda).
• Vender Pergaminos de Hechizo por 2 de Oro por hechizo.
• Eliminar 1 carta de la mano para recibir +1 Moneda de Oro (no se pueden eliminar características base, especialidades ni Flecha Mágica).`
  },

  // =========================================================================
  // 9. MAPA DE AVENTURA Y UBICACIONES
  // =========================================================================
  {
    id: "adventure_map_tiles_and_locations",
    title: "9. El Mapa de Aventura: Losetas, Navegación y Catálogo Unificado de Ubicaciones",
    category: "map",
    content: `EL MAPA DE AVENTURA, NAVEGACIÓN Y LOSETAS:

ANATOMÍA Y COLOCACIÓN DE LOSETAS DE MAPA:
• Losetas Hexagonales de 7 Casillas: 1 casilla central y 6 casillas perimetrales.
• Niveles de Dificultad Numéricos (I a VII): Indican el rango de enemigos neutrales que custodian las casillas.
• Clasificación de Losetas:
  - Iniciales (I): Loseta natal de cada facción.
  - Lejanas (II-III): Terrenos de dificultad baja-media.
  - Cercanas (IV-V): Terrenos de dificultad media-alta con obeliscos y minas raras.
  - Centrales (VI-VII): Zonas de máxima dificultad con reliquias, Utopía del Dragón y el Grial.
  - Losetas Subterráneas: Plano inferior conectado por Puertas Subterráneas.
  - Losetas de Mar: Casillas de agua y costa para navegación.
  - Losetas Elementales: Bonifican +1 al Poder de los hechizos de su escuela correspondiente.
• Regla de Colocación (1 PM): Debe colocarse adyacente al héroe y conectada al menos a 2 losetas existentes. Se puede rotar libremente.

CATEGORÍAS DE CASILLAS Y UBICACIONES:
1. Visitables (Visitable): Al interactuar, se coloca un Cubo Negro. Quedan agotadas para el resto de la partida.
2. Señalizables (Flaggable): Al capturarse, se coloca un Cubo de Facción. Proporcionan beneficios pasivos de ingresos o control (Minas, Asentamientos, Ciudades, Obeliscos).
3. Revisitables (Revisitable): Se pueden usar múltiples veces pagando el coste o movimiento indicado sin colocar cubos (Puesto de Comercio, Establos, Santuario, Mercado Negro).

MECÁNICAS DE NAVEGACIÓN Y BARCOS:
• Astillero: Permite construir barcos.
• Embarcar / Desembarcar: Entrar al agua desde tierra o desembarcar consume 1 PM completo.
• Miniatura de Barco: Al navegar, sustituye la miniatura de héroe por un barco con un cubo de facción en su interior.
• Boyas (+1 PM marítimo) y Remolinos (teletransporte marino; tirada de -1 destruye 1 unidad).

CATÁLOGO UNIFICADO DE UBICACIONES DEL MAPA:
• Minas: Producen +1 Oro, Material o Valioso por ronda. La primera vez que se señaliza otorga su valor de producción inmediato.
• Asentamientos: Permiten reaparecer héroes, reclutar/reforzar tropas a mitad de precio o elegir +1 producción.
• Piedra de Aprendizaje: Otorgan +1 Exp inmediata.
• Templo: Otorga 1 Ficha de Moral Positiva.
• Santuario del Gesto Mágico: Busca (2) en Hechizos.
• Jardín Místico: Elige +2 Oro o +1 Objeto de Valor.
• Tumba / Tumba del Guerrero: Otorga 3 Oro, Busca (1) Artefacto y Moral Negativa.
• Árbol del Conocimiento: Paga 3 Valiosos o 10 Oro para ganar +2 Exp.
• Fuente de la Juventud: Otorga +1 Moral Positiva y +1 PM.
• Molinos (Viento y Agua): Otorgan recursos semanales/ronda.
• Cabaña de la Bruja: Elimina 1 habilidad de la mano o coge la superior del mazo.
• Obelisco: Revela pistas para desenterrar el Grial (cavar cuesta 2 PM).
• Observatorio de Sequoias: Revela losetas adyacentes gratis.
• Manantial Mágico: Mira las 3 cartas superiores del descarte y recupera 1 a la mano.
• Sabio: Lanza 1 Dado de Ataque (+1: carta de característica; 0: Busca 2 Habilidades; -1: Busca 2 Hechizos).
• Conflujo Elemental: Permite reclutar elementales.
• Prisión: Otorga un Héroe Secundario gratuito (o +3 Oro si ya posees uno).
• Depósito de Cíclopes: Lanza 4 Dados de Recursos tras vencer a los cíclopes.
• Mercado Negro: Compra artefactos descartados (Menor 5g, Mayor 7g, Reliquia 10g).
• Universidad: Paga 6g para Buscar (4) en el descarte de Habilidades.
• Fuerte en la Colina: Refuerza tropas con descuento de -3 de oro.
• Taberna: Paga 7g para contratar Héroe Secundario y hace descartar 1 carta a un enemigo.
• Eje de las Estrellas: Reemplaza 1 carta de característica por su versión Potenciada.
• Ubicaciones Marítimas: Cofre del Mar, Restos Flotantes, Sirena, Boya, Barco Abandonado, Naufragio, Templo del Mar, Náufrago Superviviente, Tumba Marina, Barril Marítimo.`
  },

  // =========================================================================
  // 10. UNIDADES, MÁQUINAS DE GUERRA Y BANCOS DE CRIATURAS
  // =========================================================================
  {
    id: "units_war_machines_and_creature_banks",
    title: "10. Unidades de Combate, Máquinas de Guerra y Bancos de Criaturas",
    category: "units",
    content: `UNIDADES DE COMBATE, MÁQUINAS DE GUERRA Y BANCOS DE CRIATURAS:

ANATOMÍA DE LA CARTA DE UNIDAD:
• Rango / Tier: Bronce (Nivel 1-3), Plata (Nivel 4-5), Oro (Nivel 6-7) y Azur (Legendarias).
• Tipo de Unidad:
  - Terrestre (<Ground>): Mueve hasta 3 casillas. Debe bordear obstáculos físicos.
  - Voladora (<Flying>): Mueve hasta 3 casillas ignorando obstáculos del tablero.
  - A Distancia (<Ranged>): Dispara a cualquier enemigo en el tablero. Sufre penalización si ataca adyacente o de línea trasera a línea trasera.
• Estadísticas: Ataque, Defensa, Puntos de Salud (PS) e Iniciativa.
• Carta Doble Cara: Lado "Unas pocas" (Few - estándar) vs Lado "Manada" (Pack - reforzada).
• Mecánica de Daño Excedente: Al recibir daño igual o mayor a los PS del lado "Manada", se voltea a "Unas pocas" y el daño restante se aplica sobre los nuevos PS. Al finalizar el combate, todo el daño se cura.

UNIDADES NEUTRALES:
• Custodian casillas del mapa. Se dividen en mazos Bronce, Plata, Oro y Azur.
• No se pueden reforzar (son de una sola cara).
• Se pueden reclutar mediante la habilidad de Diplomacia si se posee la Morada correspondiente.

MÁQUINAS DE GUERRA (WAR MACHINES):
Cartas permanentes adquiridas en la Fábrica de Máquinas de Guerra o en el Puesto de Comercio:
1. Ballesta (Ballista): Unidad a distancia que realiza un disparo automático al inicio de cada ronda de combate.
2. Catapulta (Catapult): Dispara exclusivamente contra muros y puertas en combates de asedio.
3. Cañón (Cannon - Cala): Inflige alto daño a unidades enemigas o estructuras fortificadas.
4. Carro de Suministros (Ammo Cart): Otorga +1 de Poder o roba 1 carta de característica al inicio del combate.
5. Tienda de Primeros Auxilios (First Aid Tent): Cura 2 heridas a una unidad aliada en cada ronda de combate.

BANCOS DE CRIATURAS Y FICHAS DE PILA (STACK TOKENS):
• Sustituyen casillas bloqueadas del mapa. Al entrar, se libra un combate contra 4 unidades neutrales fijas del banco.
• Fichas de Pila (Stack Tokens): Se asignan al azar según la dificultad (Fácil: 1, Normal: 2, Difícil: 3, Imposible: 4).
  - Modificadores: Otorgan +1 Ataque, +1 Defensa, +1 PS o +2 Iniciativa a la unidad afectada.
  - Daño Apilado: Al recibir daño letal, se descarta 1 ficha de pila y la unidad se cura totalmente antes de aplicar el daño sobrante.

CATÁLOGO OFICIAL DE LOS 12 BANCOS DE CRIATURAS:
1. Barco Abandonado: 4 Elementales de Agua. Recompensa: Moral Negativa + 7 Oro + Búsqueda de Hechizos.
2. Pirámide: 2 Gólems de Oro, 2 Gólems de Diamante. Recompensa: Busca (5) en Hechizos.
3. Naufragio: 4 Espectros. Recompensa: Moral Negativa + 5 Oro + Búsqueda de Artefactos.
4. Colmena de Libélulas: 4 Libélulas. Recompensa: 1 unidad de Libélulas (apiladas si había >=2 fichas).
5. Depósitos de Medusas: 4 Medusas. Recompensa: 6 Oro + 1 Objeto de Valor.
6. Tesorería Enana: 4 Enanos. Recompensa: 7 Monedas de Oro.
7. Conservatorio de Grifos: 4 Grifos. Recompensa: 1 unidad de Grifos (apilados si había >=2 fichas).
8. Banco de Nagas: 4 Nagas. Recompensa: 6 Oro + 2 Objetos de Valor.
9. Cripta: 1 Esqueleto, 1 Zombi, 1 Espectro, 1 Vampiro. Recompensa: 6 Monedas de Oro.
10. Tesoro de los Diablillos: 4 Familiares. Recompensa: 3 Monedas de Oro.
11. Reservas del Cíclope: 4 Cíclopes. Recompensa: 8 Materiales + 2 Objetos de Valor.
12. Utopía del Dragón: 1 Dragón Negro, 1 Dragón Dorado, 1 Dragón de Cristal, 1 Dragón Hada. Recompensa: 40 Oro + Busca (3) en Artefactos.`
  },

  // =========================================================================
  // 11. COMBATE TÁCTICO Y ASEDIO
  // =========================================================================
  {
    id: "tactical_combat_and_siege",
    title: "11. Combate Táctico, Asedio y Combate Naval",
    category: "combat",
    content: `REGLAS DE COMBATE TÁCTICO, ASEDIO Y COMBATE NAVAL:

INICIO DE COMBATE Y COMBATE RÁPIDO (QUICK COMBAT):
• El combate inicia al entrar en una casilla guardada por neutrales o al chocar contra un héroe/ciudad enemiga.
• Combate Rápido: Si el Nivel del Héroe es estrictamente SUPERIOR al nivel numérico de dificultad de la casilla neutral, el combate se resuelve automáticamente victorioso sin desplegar cartas ni sufrir bajas.

DESPLIEGUE EN EL TABLERO DE COMBATE (REJA 4X5):
• El atacante elige un bando; el defensor el opuesto. Cada jugador despliega hasta 5 unidades en sus líneas trasera y delantera.
• Orden de Activación: Las unidades actúan en orden decreciente de Iniciativa. En caso de empate, se alterna empezando por el atacante.

SECUENCIA DE ACTIVACIÓN Y ATAQUE:
1. Declarar Movimiento y/o Ataque según el tipo de unidad (Terrestre, Voladora, A Distancia).
2. Táctica a Distancia: Si hay un enemigo adyacente a una tropa a distancia, debe atacarlo en melé sufriendo la penalización (tirar 2 Dados de Ataque y aplicar el menor resultado).
3. Tirada del Dado de Ataque: Se lanza 1 Dado de Ataque (-1, 0, +1) y se suma al valor de Ataque de la unidad + modificadores de cartas.
4. Reducción por Defensa: El daño total se reduce restando la Defensa de la unidad defensora. El remanente se inflige como heridas.
5. Represalia (Contraataque): Si la unidad defensora sobrevive a un ataque adyacente y no ha contraatacado en esta ronda, realiza 1 Ataque de Represalia inmediato. Marcar con cubo negro.

LÍMITE DE TIEMPO, RETIRADA Y RENDICIÓN:
• Límite en Combate Neutral: 1 ronda de combate. Para jugar una ronda adicional se debe gastar 1 PM del héroe. Si no se puede o no se desea, el héroe se Retira (vuelve a la última casilla visitada sin penalización).
• Sin Límite ni Retirada: En combates contra Unidades Azur, Jugadores o Héroes IA.
• Rendición en PvP: Un héroe puede rendirse a otro jugador pagando 10 Monedas de Oro para salvar a su ejército.

COMBATE DE ASEDIO (SIEGE COMBAT):
• Defender Ciudad/Asentamiento sin Héroe: El dueño puede pagar 8 Monedas de Oro para defender usando solo sus tropas (sin mazo de cartas).
• Defensa con Ciudadela:
  - Se colocan 3 Muros y 1 Puerta en la fila central del tablero.
  - Torre de Arqueros: Unidad defensora a distancia adicional colocada fuera del tablero. No sufre penalizaciones de distancia. Se destruye automáticamente al caer todos los muros y la puerta.
  - Protección de Muros: Las unidades defensoras situadas detrás de un muro o puerta no destruidos sufren -1 de daño de ataques a distancia enemigos.
  - Destrucción de Estructuras: Muros y Puerta son destruidos por ataques adyacentes de unidades terrestres o voladoras (ataque automático exitoso sin tirada de dado).

COMBATE NAVAL (TABLERO DE NEOPRENO NAVAL):
• Tablero alternativo para batallas en losetas de mar.
• Elimina las dos casillas centrales de la reja.
• Unidades Terrestres: Prohibido cruzar el centro; deben avanzar rodeando obligatoriamente por los flancos izquierdo o derecho.
• Unidades Voladoras: Pueden volar sobre las casillas eliminadas, pero NO pueden finalizar su movimiento sobre ellas ni salir del tablero.`
  },

  // =========================================================================
  // 12. INTELIGENCIA ARTIFICIAL (IA) Y MODO SOLITARIO/COOPERATIVO
  // =========================================================================
  {
    id: "ai_rules_and_solo_coop_mode",
    title: "12. Reglas de Inteligencia Artificial (IA), Modo Solitario y Cooperativo",
    category: "modes",
    content: `REGLAS DE INTELIGENCIA ARTIFICIAL (IA) Y MODO COOPERATIVO:

ÁMBITO DE APLICACIÓN DE LA IA:
Se aplican en Campañas en Solitario, Escenarios Cooperativos y para controlar unidades neutrales o Héroes IA.

REGLAS DE PRIORIDAD DE ATAQUE DE UNIDADES IA EN COMBATE:
1. Tropas Terrestres y Voladoras IA:
   • Priorizan atacar a unidades enemigas de su MISMO TIER (Bronce -> Bronce, Plata -> Plata, Oro -> Oro).
   • Si no es posible, atacan al tier INFERIOR en orden descendente (hasta Bronce).
   • Si tampoco es posible, atacan al tier SUPERIOR en orden ascendente.
2. Tropas a Distancia IA:
   • Priorizan tropas a distancia de su mismo tier -> tier inferior -> tier superior.
   • Si no hay tropas a distancia, atacan tropas terrestres/voladoras siguiendo el mismo orden de tier.
3. Excepción de Bancos de Criaturas:
   • Las unidades de bancos de criaturas no tienen tier; atacan siempre al objetivo válido más cercano.
   • Los enemigos IA priorizan atacar a todas las demás tropas antes que a las unidades del banco de criaturas.
4. Criterio de Desempate:
   • A igual prioridad, la IA ataca a la unidad más cercana. Si persiste el empate, el jugador elige a quién ataca la IA.

COMPORTAMIENTO DEL HÉROE IA EN EL MAPA DE AVENTURA:
• Los Héroes IA disponen de 3 Puntos de Movimiento (PM) por turno y ejecutan acciones según la siguiente jerarquía de prioridad:
  1. Si hay un héroe jugador en la misma loseta -> gasta todos los PM en avanzar hacia él para iniciar combate.
  2. Si hay minas o asentamientos sin señalar en la misma loseta -> avanza hacia el más cercano para señalizarlo.
  3. En cualquier otro caso -> avanza en línea recta hacia la Ciudad del jugador.
• Combates Neutrales de la IA: La IA gana automáticamente cualquier combate contra unidades neutrales del mapa.

MAZOS Y HECHIZOS DE LA IA:
• La IA utiliza un Mazo de IA (cartas de Fuerza, Magia y Habilidad) y un Mazo de Hechizos de IA.
• Al activar una unidad, se roba una carta de IA y se aplica el modificador correspondiente según la dificultad de la partida (Fácil, Normal, Difícil, Imposible).
• Resoluciones Especiales de Hechizos por la IA:
  - Hechizos de Área (Bola de Fuego, Cadena de Rayos): Ataca al grupo enemigo con mayor número de tropas de alto tier o menor salud restante.
  - Piel de Piedra: Aplica la Ficha de Defensa a la unidad con mayor valor de Ataque.
  - Curación: Remueve heridas de la unidad de mayor tier dañada.
  - Escudo de Fuego: Se aplica si la unidad receptora va a sufrir ataques melé de tropas que no se hayan activado.`
  },

  // =========================================================================
  // 13. MODOS DE JUEGO, TORNEOS Y CAMPO DE BATALLA
  // =========================================================================
  {
    id: "game_modes_tournaments_and_battlefield",
    title: "13. Modos de Juego, Misiones, Modo Torneo 1v1 y Expansión Campo de Batalla",
    category: "modes",
    content: `MODOS DE JUEGO, TORNEOS Y EXPANSIÓN CAMPO DE BATALLA:

MODOS OFICIALES DE JUEGO:
1. Enfrentamiento (Clash): Modo totalmente competitivo. Los rivales controlan las tropas neutrales en tus combates.
2. Campaña Solitario: Serie de escenarios interconectados contra héroes IA con transferencia de héroe y mazo.
3. Alianza (Alliance): Partidas en parejas (2 vs 2) con comercio libre de recursos y cartas entre aliados adyacentes.
4. Cooperativo (Co-op): Todos los jugadores colaboran para superar objetivos del escenario compartiendo victorias.
5. Torneo (Tournament): Modo competitivo estandarizado 1 vs 1 con reducción de azar.

REGLAMENTO OFICIAL DEL MODO TORNEO 1V1:
• Ajustes de Setup: Se eliminan del juego la carta de habilidad 'Diplomacia' y el artefacto 'Reloj de la Hora Aciaga'.
• Determinación de Turno: Tirada de 2d6. El resultado más alto elige quién empieza. El segundo jugador recibe 1 Ficha de Moral Positiva inicial.
• Construcción Draft del Mapa (Losetas boca arriba):
  1. El primer jugador coloca las losetas centrales según el mapa.
  2. Alternan la colocación de losetas cercanas (IV-V) boca arriba (debe haber al menos 2 obeliscos).
  3. Los jugadores colocan sus losetas iniciales (I) en extremos opuestos del mapa.
  4. Colocan las losetas lejanas (II-III) adyacentes a sus bases.
• Reglas Adicionales de Torneo:
  - Mulligan en Ronda 1: Puedes barajar tu mano inicial al mazo y robar una nueva mano por única vez.
  - Fichas de Moral para Búsqueda: Puedes gastar 1 Moral Positiva para descartar cartas reveladas en una Búsqueda y repetir la Búsqueda.
  - Preservación de Artefactos Eliminados: Se conservan a un lado para la puntuación final de Puntos de Victoria.
• Tabla de Puntuación de Puntos de Victoria (PV):
  - 1 PV por cada Mina o Asentamiento controlado.
  - 1 PV por cada Edificio construido en tu Ciudad.
  - 1 PV por cada 2 Cartas de Artefacto en tu mazo (incluidos eliminados).
  - 1 PV por cada Nivel alcanzado por el Héroe Principal.
  - 2 PV por cada Héroe Secundario enemigo derrotado.
  - 4 PV por derrotar al Héroe Principal enemigo (una sola vez).

EXPANSIÓN CAMPO DE BATALLA (BATTLEFIELD EXPANSION):
Introduce el gran Tablero Hexagonal de Campo de Batalla sin mapa de aventura:
1. Modo Aventura (Adventure Mode): Fase de Aventura impulsada por Cartas de Aventura (Evento y Combate) para obtener recursos, edificar ciudad y subir de nivel antes del Combate Final táctico.
2. Modo Escaramuza (Skirmish Mode): Combate directo inmediato con mazos y ejércitos preconstruidos según duración (Corta - Nivel III, Media - Nivel V, Larga - Nivel VII).
3. Reglas del Combate Hexagonal:
   - Movimiento = Valor de Iniciativa de la unidad (ej. Iniciativa 8 mueve 8 hexágonos).
   - Tropas a Distancia: Pueden mover O atacar (no ambas acciones en el mismo turno).
   - Penalización a Distancia: Se aplica al atacar adyacente O a 8 o más hexágonos de distancia.

SISTEMA DE PÁRRAFOS NARRATIVOS (§1 - §29):
Utilizado en misiones en solitario para resolver encuentros narrativos en el Molino, Cabaña de la Bruja, Mercadillo o Jardín Místico, registrando palabras clave ('Pacto', 'Crimen', 'Trabajo', 'Verruga') que alteran la trama y recompensas.`
  },

  // =========================================================================
  // 14. VARIANTES DE REGLAS Y TABLA DE DIFICULTAD
  // =========================================================================
  {
    id: "rule_variants_and_difficulty_table",
    title: "14. Variantes de Reglas Oficiales y Tabla de Ajustes de Dificultad",
    category: "general",
    content: `VARIANTES DE REGLAS Y RECOMENDACIONES DE DISEÑADORES:

1. VARIANTE DE CARTAS DEL CAOS:
   • En lugar de descartar una carta jugada, elimínala completamente del juego y roba la carta superior de su mazo correspondiente a tu pila de descartes (las cartas de característica y especialidad se descartan normalmente).

2. VARIANTE DE RESERVA DE ORO (GOLD POOL):
   • Los recursos invertidos en reclutar o reforzar tropas no se devuelven a la caja, sino a una pila llamada 'Fondo Reservado'.
   • Al usar la Ficha de Población se pueden vender unidades o recuperar sus costes (en Oro u Objetos de Valor) desde el Fondo Reservado al 'Fondo No Gastado' si la tropa muere o se reduce de Manada a Unas Pocas.

3. VARIANTE DE DRAFT INICIAL (3+ JUGADORES):
   • Selección de mazo por draft: Cada jugador roba 2 cartas de los mazos de Artefactos, Habilidades y Hechizos (6 cartas total), se queda con 1 de cada tipo y pasa las 5 restantes al jugador de la izquierda/derecha alternativamente hasta reunir 12 cartas en draft, que luego se refinan en un mazo inicial preparado de 9 cartas.

4. VARIANTE DE MAZOS SEPARADOS DE ARTEFACTOS Y HECHIZOS:
   • Artefactos divididos en 3 mazos (Menor, Mayor, Reliquia) y Hechizos en 2 mazos (Básico, Experto).
   • Disponibilidad según la loseta donde se halle el héroe:
     - Losetas I y II-III: Mazo Menor / Mazo Básico.
     - Losetas IV-V: Mazos Menor y Mayor / Mazos Básico y Experto.
     - Losetas VI-VII: Mazos Menor, Mayor y Reliquia / Mazos Básico y Experto.

TABLA OFICIAL DE AJUSTES OPCIONALES DE DIFICULTAD:
• Para Aumentar Dificultad:
  - Las Ciudades no producen recursos al ser señalizadas (solo dan uso de edificios).
  - Prohibido relanzar dados de cualquier tipo.
  - Todos los dados de tesoro y recursos solo otorgan 1 recurso.
  - Sin bonificador inicial de escenario.
• Para Reducir Dificultad:
  - Iniciar la partida con un Héroe Secundario gratuito.
  - Todas las tropas infligen al menos 1 herida de daño garantizado al atacar.
  - Todas las minas y asentamientos producen el doble de ingresos.
  - Extender un combate neutral no consume Puntos de Movimiento (PM).
  - Intercambiar recursos en cualquier momento y el Puesto de Comercio es visitable regalando 1 Artefacto.
• Variantes de Juego:
  - El Dado de Ataque no afecta al daño (solo interactúa con habilidades).
  - Se roba carta de Anuncio de Astrólogos también en Rondas de Recursos.
  - Se eliminan todos los Cubos Negros de casillas visitables en las rondas 4, 8 y 12.`
  },

  // =========================================================================
  // 15. PREGUNTAS FRECUENTES (FAQ) Y ACLARACIONES
  // =========================================================================
  {
    id: "faq_and_clarifications",
    title: "15. Preguntas Frecuentes (FAQ), Aclaraciones Oficiales y Erratas",
    category: "faq",
    content: `PREGUNTAS FRECUENTES (FAQ) Y ACLARACIONES OFICIALES DE REGLAS:

¿Se pueden jugar varios hechizos en el mismo turno?
En la fase de mapa puedes jugar múltiples hechizos de mapa si dispones de ellos. Sin embargo, en combate táctico existe un límite estricto de 1 Hechizo Primario por ronda de combate por jugador (los hechizos jugados desde Pergaminos de Hechizo no cuentan para este límite).

¿Cómo funciona la reducción de daño por Defensa?
La Defensa de la unidad defensora reduce directamente el daño final del ataque físico. Sin embargo, la Defensa NO reduce el daño recibido por Hechizos, daño de Muro de Fuego, Minas Terrestres o Daño Elemental de Conflujo.

¿Qué ocurre si se destruyen todas mis tropas en combate?
Si tu Mazo de Unidades se queda sin tropas tras un combate, repones de forma gratuita e inmediata tu mazo con las unidades iniciales del escenario. Las unidades de facción derrotadas siempre pueden volver a reclutarse mediante la Ficha de Población.

¿Se pierden las cartas de Artefacto o Hechizo al morir un Héroe Principal?
No. El héroe derrotado se desplaza a una Ciudad o Asentamiento propio, paga 5 Monedas de Oro al vencedor, entrega 1 Cubo de Facción y conserva todo su Mazo de Fuerza y Magia intacto.

¿Qué diferencia a las tropas de un Banco de Criaturas?
Las unidades de bancos de criaturas no tienen rango/tier (Bronce, Plata, Oro). No les afectan hechizos o habilidades que dependan del tier (como Berserk). Además, la IA las ataca siempre en último lugar.

FE DE ERRATAS OFICIALES:
• Molino de Viento (Windmill) en la loseta #N3: Debido a una errata de imprenta muestra un "?". La regla oficial establece que otorga "+1 Objeto de Valor" de forma inmediata.

WIKI OFICIAL DE LA COMUNIDAD:
Para consultas detalladas de cartas específicas e interacciones complejas, se puede consultar la Fan-Made Wiki oficial: https://en.homm3bg.wiki/`
  }
];
