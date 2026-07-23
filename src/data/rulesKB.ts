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

CATÁLOGO COMPLETO DE LAS 32 HABILIDADES SECUNDARIAS OFICIALES:
Cada carta de habilidad posee un Efecto Básico (gratuito) y un Efecto Experto (requiere gastar un uso de Experto):

1. Magia de aire [Magia]:
   • Básico: Permanente: +1 Poder para hechizos de la escuela de magia de aire.
   • Experto: Cuando lances un Hechizo de la escuela de aire, puedes descartar esta carta y ganar +3 Poder.

2. Magia de tierra [Magia]:
   • Básico: Permanente: +1 Poder para hechizos de la escuela de magia de tierra.
   • Experto: Cuando lances un Hechizo de la escuela de tierra, puedes descartar esta carta y ganar +3 Poder.

3. Magia de fuego [Magia]:
   • Básico: Permanente: +1 Poder para hechizos de la escuela de magia de fuego.
   • Experto: Cuando lances un Hechizo de la escuela de fuego, puedes descartar esta carta y ganar +3 Poder.

4. Magia de agua [Magia]:
   • Básico: Permanente: +1 Poder para hechizos de la escuela de magia de agua.
   • Experto: Cuando lances un Hechizo de la escuela de agua, puedes descartar esta carta y ganar +3 Poder.

5. Magia básica del aire [Magia]:
   • Básico: Permanente: En lugar de buscar en el mazo de hechizos, encuentra el primer Hechizo de magia de aire que haya en él y llévate el Hechizo a la mano. A continuación, vuelve a barajar el mazo.
   • Experto: Instantáneo: +3 Poder para un Hechizo de magia de aire.

6. Magia básica de la tierra [Magia]:
   • Básico: Permanente: En lugar de buscar en el mazo de hechizos, encuentra el primer Hechizo de magia de tierra que haya en él y llévate el Hechizo a la mano. A continuación, vuelve a barajar el mazo.
   • Experto: Instantáneo: +3 Potencia para un Hechizo de magia de tierra.

7. Magia básica del fuego [Magia]:
   • Básico: Permanente: En lugar de buscar en el mazo de hechizos, encuentra el primer Hechizo de magia de fuego que haya en él y llévate el Hechizo a la mano. A continuación, vuelve a barajar el mazo.
   • Experto: Instantáneo: +3 Potencia para un Hechizo de magia de fuego.

8. Magia básica del agua [Magia]:
   • Básico: Permanente: En lugar de buscar en el mazo de hechizos, encuentra el primer Hechizo de magia de agua que haya en él y llévate el Hechizo a la mano. A continuación, vuelve a barajar el mazo.
   • Experto: Instantáneo: +3 Potencia para un Hechizo de magia de agua.

9. Tiro con arco [Combate]:
   • Básico: En Curso: Durante esta ronda de combate, tus unidades a distancia ganan +1 Ataque si el objetivo no es una unidad adyacente.
   • Experto: En Curso: Hasta el final de la siguiente ronda de combate, todas tus unidades a distancia ganan +1 Iniciativa y +1 Ataque si el objetivo no es una unidad adyacente.

10. Armero [Combate]:
   • Básico: Instantáneo: +1 Defensa. Después, roba 1 carta.
   • Experto: Instantáneo: +2 Defensa. Después, roba 1 carta.

11. Artillería [Combate]:
   • Básico: Instantáneo: Inflige 1 Herida a la unidad enemiga con menor Iniciativa.
   • Experto: Instantáneo: Al utilizar la carta Balista, resuelve su efecto 3 veces contra el mismo objetivo.

12. Balística [Combate]:
   • Básico: Instantáneo: Juega esta carta durante un asedio. Destruye 1 muralla o puerta.
   • Experto: Instantáneo: Juega esta carta durante un asedio. Destruye la Torre de arqueros.

13. Diplomacia [Apoyo]:
   • Básico: Mapa: Por cada vivienda que tengas, roba 1 carta de la unidad neutral correspondiente. Podrás reclutar una de estas unidades si pagas su coste de reclutamiento.
   • Experto: Instantáneo: Ignora el combate con unidades neutrales en una zona cuya dificultad de la zona sea igual al nivel de tu héroe. Visita la zona. Tu héroe no gana experiencia.

14. Vista de águila / Ojo de lince [Desarrollo]:
   • Básico: Instantáneo: Roba cartas del mazo de hechizos hasta que encuentres una carta de hechizo básico. Llévatela a la mano o descártala. Devuelve el resto al mazo y barájalo.
   • Experto: Instantáneo: Roba cartas del mazo de hechizos hasta que encuentres una carta de hechizo avanzado. Llévatela a la mano o descártala. Devuelve el resto al mazo y barájalo.

15. Patrimonio [Economía]:
   • Básico: Instantáneo: Gana 3 Oros.
   • Experto: Instantáneo: Gana 6 Oros.

16. Primeros auxilios [Apoyo]:
   • Básico: Instantáneo: Retira 1 Herida de una de tus unidades.
   • Experto: Instantáneo: Cuando utilices la carta Tienda de primeros auxilios, resuelve su efecto 3 veces contra el mismo objetivo.

17. Inteligencia / Espionaje [Magia]:
   • Básico: Instantáneo: Al comienzo de la ronda de combate, juega una carta de hechizo. Durante la ronda de combate sigues pudiendo jugar solo una carta de hechizo.
   • Experto: Instantáneo: Al comienzo de la ronda de combate, juega una carta de hechizo. Este hechizo no cuenta para el límite de hechizos por ronda de combate.

18. Interferencia [Apoyo]:
   • Básico: Instantáneo: +1 Defensa. Este efecto se puede utilizar para reducir el Daño de un Hechizo.
   • Experto: Instantáneo: +2 Defensa. Este efecto se puede utilizar para reducir el Daño de un Hechizo.

19. Liderazgo [Combate]:
   • Básico: Instantáneo: Gana una ficha de Moral Positiva.
   • Experto: Instantáneo: Roba 2 cartas. Después, gana una ficha de Moral Positiva.

20. Aprendizaje [Desarrollo]:
   • Básico: Instantáneo: Juégala cuando el héroe esté a punto de subir de level. Aumenta su nivel de experiencia en medio nivel adicional.
   • Experto: Instantáneo: Juégala cuando el héroe esté a punto de subir de level. Aumenta su nivel de experiencia en un nivel adicional y después retira esta carta.

21. Logística [Aventura]:
   • Básico: En Curso: Al final de tu turno, mueve la miniatura de tu héroe a una zona vacía adyacente.
   • Experto: Instantáneo: Tu héroe gana +1 de movimiento.

22. Suerte [Combate]:
   • Básico: En Curso: Puedes volver a lanzar un dado de tesoro y de recurso una vez durante este turno.
   • Experto: En Curso: Puedes volver a lanzar tantos dados como quieras una vez durante este turno.

23. Misticismo [Magia]:
   • Básico: Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En vez de descartar la carta de hechizo, devuélvela a tu mano.
   • Experto: Instantáneo: Juega esta carta inmediatamente después de lanzar un hechizo. En vez de descartar la carta de Hechizo y el resto de las cartas que juegues con ella, devuélvelas a tu mano.

24. Nigromancia [Apoyo]:
   • Básico: Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Refuerza una de tus unidades Bronce o Plata por la mitad del coste en Oro (redondeado hacia abajo).
   • Experto: Mapa: Juégalo después de ganar un combate que no sea un combate rápido. Refuerza cualquiera de tus unidades por la mitad del coste en Oro (redondeado hacia abajo).

25. Ofensa [Combate]:
   • Básico: Instantáneo: +1 Ataque. Después, roba 1 carta.
   • Experto: Instantáneo: +2 Ataque. Después, roba 1 carta.

26. Orientación [Aventura]:
   • Básico: Mapa: Este turno, tu héroe puede moverse por zonas con unidades neutrales y héroes enemigos, pero, si acaba en una de estas zonas, empezará el combate.
   • Experto: Mapa: Tu héroe puede atravesar bordes amarillos y zonas bloqueadas, pero no puede acabar su movimiento en ellas.

27. Resistencia [Apoyo]:
   • Básico: Instantáneo: Juega esta carta inmediatamente después de que el enemigo lance un hechizo. Si ha lanzado el hechizo con 1 Potencia o menos, ignora el efecto de la carta de hechizo.
   • Experto: Instantáneo: Juega esta carta inmediatamente después de que el enemigo lance un hechizo. Ignora el efecto de la carta de hechizo.

28. Erudito [Desarrollo]:
   • Básico: Instantáneo: Elige 1 carta de tu descarte y añádela a tu mano.
   • Experto: Mapa: Retira hasta 2 cartas de característica de tu mano o del descarte. Coge 2 cartas de característica potenciada y colócalas en la parte superior de tu descarte. Retira el Erudito.

29. Exploración [Aventura]:
   • Básico: Instantáneo: Juega esta carta cuando vayas a buscar para buscar(3).
   • Experto: Instantáneo: Juega esta carta cuando vayas a buscar para buscar(5).

30. Hechicería [Magia]:
   • Básico: Instantáneo: +1 Potencia. Después, roba 1 carta.
   • Experto: Instantáneo: +2 Potencia. Después, roba 1 carta.

31. Táctica [Combate]:
   • Básico: Instantáneo: Al comienzo del combate, intercambia la posición de 2 de tus unidades.
   • Experto: Activación: Durante el combate, intercambia la posición de 2 de tus unidades.

32. Sabiduría [Desarrollo]:
   • Básico: Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(3) en vez de buscar(2).
   • Experto: Instantáneo: Comprar hechizos en esta ciudad cuesta 2 Oros menos. Cuando compres hechizos de tu cofradía de magos, busca(4) en vez de buscar(2).

👉 **[Abrir el Visor Completo de las 32 Habilidades Secundarias ➔](tab:skills)**`
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

CATÁLOGO COMPLETO DE HECHIZOS OFICIALES POR ESCUELA DE MAGIA:

🌪️ ESCUELA DE MAGIA DE AIRE:
1. Celeridad [Básica]: En Curso: Aumenta la Iniciativa de la unidad seleccionada (+1 / +2 / +3 según Poder).
2. Contragolpe [Avanzada]: Instantáneo: Retira el cubo negro de activación de contraataque; la unidad puede contraatacar de nuevo.
3. Escudo aéreo [Básica]: En Curso: La unidad seleccionada gana Defensa (+1 / +2 / +3) al ser atacada por una unidad a distancia.
4. Espejo mágico [Avanzada]: Instantáneo: Redirige un hechizo enemigo dirigido a tu unidad hacia un nuevo objetivo.
5. Fortuna [Básica]: Instantáneo: Permite volver a lanzar dados de tesoro, recurso o ataque (1 / 2 / 3 veces).
6. Invocar elemental de aire [Avanzada]: Activación: Invoca unidades de elementales de aire en un espacio vacío.
7. Precisión [Básica]: Instantáneo: La unidad a distancia ignora penalizadores no adyacentes y gana Ataque (+1 / +2 / +3).
8. Protección de aire [Avanzada]: Instantáneo: Cancela e ignora el efecto de un hechizo de la escuela de aire enemigo.
9. Puerta dimensional [Avanzada]: Mapa: Mueve al héroe a través de zonas (1 / 2 / 3) ignorando obstáculos intermediarios.
10. Rayo en cadena [Avanzada]: Activación: Daño eléctrico en cadena a la unidad objetivo y a las 2 unidades más cercanas.
11. Rayo disruptor [Básica]: En Curso: La unidad seleccionada no puede usar su habilidad especial durante todo el combate.
12. Relámpago [Básica]: Activación: Inflige daño eléctrico directo (2 / 3 / 4 Heridas) a la unidad seleccionada.
13. Ver aire [Básica]: Mapa: Otorga recursos de aventura inmediatos (3 Oros / 2 Materiales / 1 Objeto de valor).
14. Vuelo [Avanzada]: En Curso: El héroe atraviesa zonas bloqueadas y gana Puntos de Movimiento (+0 / +1 / +2).

💧 ESCUELA DE MAGIA DE AGUA:
1. Alborozo [Avanzada]: En Curso: Permite volver a lanzar dados de ataque durante una activación, ronda o combate.
2. Anillo gélido [Avanzada]: Activación: Inflige daño por congelación (1 / 2 / 3 Heridas) a 2 unidades adyacentes a la casilla elegida.
3. Bendición [Básica]: Instantáneo: La unidad ignora la tirada del dado de ataque obteniendo el valor máximo (+0 / +1 / +2 Ataque).
4. Clon [Avanzada]: En Curso: Duplica una unidad aliada; el clon actúa igual pero tiene únicamente 1 Punto de Salud.
5. Curación [Básica]: Instantáneo: Retira efectos o parálisis y remueve Heridas (1 / 2 / 3) de la unidad aliada.
6. Debilidad [Básica]: Instantáneo: Reduce el Ataque (-1 / -2 / -3) de la unidad enemiga seleccionada.
7. Disipar [Básica]: Instantáneo: Anula y retira todos los efectos En Curso activos sobre una unidad y su casilla.
8. Invocar elemental de agua [Avanzada]: Activación: Invoca unidades de elementales de agua en un espacio vacío.
9. Olvido [Básica]: En Curso: Impide que una unidad a distancia enemiga pueda atacar en su próxima activación.
10. Paso acuático [Avanzada]: Mapa: Permite al héroe cruzar del mapa terrestre al marino sin barco y otorga movimiento (+0 / +1 / +2).
11. Plegaria [Avanzada]: Instantáneo: Incrementa el Ataque, Defensa o Iniciativa (+1 / +2 / +3) de la unidad seleccionada.
12. Protección de agua [Avanzada]: Instantáneo: Cancela e ignora el efecto de un hechizo de la escuela de agua enemigo.
13. Retirar obstáculo [Básica]: Instantáneo: Elimina obstáculos físicos (muros, puertas, barreras) del tablero de combate.
14. Teletransporte [Avanzada]: Activación: Traslada una unidad aliada a cualquier espacio vacío del tablero sin restricción.

🔥 ESCUELA DE MAGIA DE FUEGO:
1. Ansia de sangre [Básica]: Instantáneo: Otorga bonificación de Ataque (+1 / +2 / +3) a la unidad terrestre o voladora.
2. Bola de fuego [Avanzada]: Activación: Explota infligiendo daño (1 / 2 / 3 Heridas) a 2 casillas adyacentes elegidas.
3. Ceguera [Básica]: Activación: Coloca una ficha de Parálisis en la unidad seleccionada dejándola inactiva.
4. Escudo de fuego [Avanzada]: En Curso: Devuelve daño (1 / 2 / 3 Heridas) a cualquier unidad adyacente que ataque a la protegida.
5. Frenesí [Avanzada]: Instantáneo: El ataque de la unidad seleccionada ignora por completo la Defensa enemiga.
6. Furia asesina [Avanzada]: En Curso: La unidad entra en frenesí obligándola a atacar o avanzar a la unidad más cercana.
7. Infortunio [Básica]: Instantáneo: Anula un resultado de dado de ataque o un bonus de ataque enemigo cuando ataca.
8. Inferno [Avanzada]: Activación: Lanza dados de ataque infligiendo daño masivo a la casilla objetivo y adyacentes.
9. Invocar elemental de fuego [Avanzada]: Activación: Invoca unidades de elementales de fuego en un espacio vacío.
10. Maldición [Básica]: Instantáneo: Reduce la Defensa (-1 / -2 / -3) de la unidad enemiga seleccionada.
11. Matagigantes [Avanzada]: Instantáneo: Otorga múltiples tiradas de ataque devastadoras al atacar unidades de tier Oro.
12. Mina [Avanzada]: En Curso: Despliega fichas de minas ocultas en el tablero que explotan al paso de tropas enemigas.
13. Muro de fuego [Básica]: En Curso: Crea una barrera de llamas que inflige daño (1 / 2 / 3 Heridas) a quien la cruce.
14. Protección de fuego [Avanzada]: Instantáneo: Cancela e ignora el efecto de un hechizo de la escuela de fuego enemigo.
15. Sacrificio [Avanzada]: Activación: Transfiere Puntos de Salud de una unidad a otra para resucitar o sanar tropas.
16. Visiones [Básica]: Instantáneo: Examina y reordena las cartas de unidades neutrales de cualquier mazo.

🌿 ESCUELA DE MAGIA DE TIERRA:
1. Antimagia [Básica]: En Curso: Otorga inmunidad completa impidiendo que la unidad sea objetivo de hechizos.
2. Arenas movedizas [Básica]: En Curso: Oculta fichas de arenas movedizas en el tablero que inmovilizan a las tropas.
3. Campo de fuerza [Básica]: En Curso: Despliega un obstáculo físico de campo de fuerza que bloquea el paso.
4. Escudo [Básica]: Instantáneo: Incrementa la Defensa (+1 / +2 / +3) contra ataques de unidades terrestres o voladoras.
5. Implosión [Avanzada]: Activación: Aplasta al objetivo infligiendo daño gravitacional masivo (2 / 4 / 6 Heridas).
6. Invocar elemental de tierra [Avanzada]: Activación: Invoca unidades de elementales de tierra en un espacio vacío.
7. Lentitud [Básica]: En Curso: Reduce la Iniciativa (-1 / -2 / -3) de la unidad enemiga durante todo el combate.
8. Pesar [Avanzada]: Instantáneo: Cancela e ignora por completo la próxima activación de una unidad enemiga.
9. Piel de piedra [Básica]: Instantáneo: Aumenta la Defensa (+1 / +2 / +3) de la unidad seleccionada.
10. Portal a la ciudad [Avanzada]: Mapa: Teletransporta al héroe de inmediato a cualquier ciudad o asentamiento aliado.
11. Protección de tierra [Avanzada]: Instantáneo: Cancela e ignora el efecto de un hechizo de la escuela de tierra enemigo.
12. Resurrección [Avanzada]: Instantáneo: Anula un ataque letal salvando a la unidad aliada que iba a ser reducida a 0 PS.
13. Terremoto [Básica]: Instantáneo: Destruye muros/puertas en asedios e inflige daño a tropas contiguas.
14. Ver tierra [Básica]: Instantáneo: Reclama una mina enemiga a distancia sustituyendo el cubo de control por el tuyo.

🌟 HECHIZO UNIVERSAL (TODAS LAS ESCUELAS):
1. Flecha mágica [Básica]: Activación: Inflige daño mágico directo (1 / 2 / 3 Heridas). Pertenece a las 4 escuelas de magia (el lanzador elige la escuela al conjurarlo).

👉 **[Abrir el Visor Completo de Hechizos ➔](tab:spells)**`
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
• Ubicaciones Marítimas: Cofre del Mar, Restos Flotantes, Sirena, Boya, Barco Abandonado, Naufragio, Templo del Mar, Náufrago Superviviente, Tumba Marina, Barril Marítimo.

👉 **[Abrir el Visor Completo de Lugares del Mapa ➔](tab:locations)**`
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
12. Utopía del Dragón: 1 Dragón Negro, 1 Dragón Dorado, 1 Dragón de Cristal, 1 Dragón Hada. Recompensa: 40 Oro + Busca (3) en Artefactos.

👉 **[Abrir el Visor Completo de Unidades de Combate y Reclutamiento ➔](tab:units)**`
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

P: ¿Se pueden jugar varios hechizos en el mismo turno?
R: En la fase de mapa puedes jugar múltiples hechizos de mapa si dispones de ellos. Sin embargo, en combate táctico existe un límite estricto de 1 Hechizo Primario por ronda de combate por jugador (los hechizos jugados desde Pergaminos de Hechizo no cuentan para este límite).

P: ¿Cómo funciona la reducción de daño por Defensa?
R: La Defensa de la unidad defensora reduce directamente el daño final del ataque físico. Sin embargo, la Defensa NO reduce el daño recibido por Hechizos, daño de Muro de Fuego, Minas Terrestres o Daño Elemental de Conflujo.

P: ¿Qué ocurre si se destruyen todas mis tropas en combate?
R: Si tu Mazo de Unidades se queda sin tropas tras un combate, repones de forma gratuita e inmediata tu mazo con las unidades iniciales del escenario. Las unidades de facción derrotadas siempre pueden volver a reclutarse mediante la Ficha de Población.

P: ¿Se pierden las cartas de Artefacto o Hechizo al morir un Héroe Principal?
R: No. El héroe derrotado se desplaza a una Ciudad o Asentamiento propio, paga 5 Monedas de Oro al vencedor, entrega 1 Cubo de Facción y conserva todo su Mazo de Fuerza y Magia intacto.

P: ¿Qué diferencia a las tropas de un Banco de Criaturas?
R: Las unidades de bancos de criaturas no tienen rango/tier (Bronce, Plata, Oro). No les afectan hechizos o habilidades que dependan del tier (como Berserk). Además, la IA las ataca siempre en último lugar.

FE DE ERRATAS OFICIALES:
• Molino de Viento (Windmill) en la loseta #N3: Debido a una errata de imprenta muestra un "?". La regla oficial establece que otorga "+1 Objeto de Valor" de forma inmediata.

WIKI OFICIAL DE LA COMUNIDAD:
Para consultas detalladas de cartas específicas e interacciones complejas, se puede consultar la Fan-Made Wiki oficial: https://en.homm3bg.wiki/`
  }
];
