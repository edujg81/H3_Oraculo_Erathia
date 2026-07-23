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
 *
 * Compendio completo e indexado de reglas, componentes, mecánicas, construcciones,
 * modos de juego y campañas oficiales en español de España.
 */

export const reglasCombinadas: RuleSection[] = [
  // =========================================================================
  // LIBRO DE REGLAS BASE
  // =========================================================================
  {
    id: "cap-1-componentes",
    title: "1. Lista de Componentes del Juego Base",
    category: "components",
    content: `LISTA OFICIAL DE COMPONENTES DE HEROES OF MIGHT AND MAGIC III: THE BOARD GAME (JUEGO BASE):

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
    id: "cap-2-resumen-modos",
    title: "2. Resumen del Juego y Modos de Juego",
    category: "modes",
    content: `DESCRIPCIÓN GENERAL Y MODOS DE JUEGO:

En las tierras de Antagarich, los héroes exploran paisajes indómitos, recuperan artefactos, descubren asentamientos y reclutan criaturas. Cada partida forma parte de un escenario o campaña con su propio mapa, condiciones de victoria y reglas.

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
   - Partidas cooperativas en las que todos los jugadores comparten el mismo objetivo contra el juego.`
  },
  {
    id: "cap-3-preparacion-y-orden",
    title: "3. Preparación de la Partida, Rondas y Turnos",
    category: "setup",
    content: `PREPARACIÓN DE LA PARTIDA Y ESTRUCTURA DE RONDAS:

PASOS DE PREPARACIÓN DE LA PARTIDA:
1. Elegir escenario del libro de misiones (ej. "Un nuevo mundo").
2. Escoger facción (Castillo, Mazmorra o Necrópolis) y Héroe Principal.
3. Extraer componentes de facción (carta de héroe, miniaturas, losetas de edificio, tablero de ciudad, cartas de unidad, especialidad, habilidad, cubos y fichas de acción).
4. Colocar cubo de facción en el nivel 1 de la carta de héroe.
5. Preparar mapa según diagrama del escenario y colocar tableros de ciudad con losetas de edificios iniciales.
6. Configurar mazo inicial de fuerza y magia: cartas de característica de la carta de héroe + Flecha mágica (1 si es Fuerza, 2 si es Magia) + cartas de habilidad y especialidad de Nivel 1.
7. Preparar mazos neutrales (bronce, plata, oro, azur), mazo de astrología, marcador de rondas (cubo negro en casilla 1) y tablero de combate.
8. Determinar jugador inicial (nombrar 5 unidades neutrales o tirada de dado de ataque).

ORDEN DE LAS RONDAS:
Las rondas se alternan en el marcador de rondas:
- Ronda de Recursos: Todos los jugadores cobran ingresos de sus ciudades, asentamientos y minas.
- Ronda Astrológica: Se roba y resuelve una carta de Anuncio Astrológico con efectos globales para la ronda.

TURNOS DE LOS JUGADORES:
- Al comienzo del turno, ajusta tu mano robando o descartando hasta tu límite de mano actual.
- Acciones de Ciudad (1 vez por ronda): Usar ficha de Construcción, Población o Libro de Hechizos.
- Acciones de Moral: Gastar 1 ficha de moral positiva para robar 1 carta, descartar/robar el mismo número, o repetir tirada de dado. (La Necrópolis ignora moral).
- Acciones de Movimiento: Gastar PM para mover al héroe (1 zona por PM), entablar combate, descubrir losetas ocultas o colocar losetas lejanas.`
  },
  {
    id: "cap-4-heroes",
    title: "4. Reglamento de Héroes: Principal, Secundario y Niveles",
    category: "heroes",
    content: `TIPOS DE HÉROES Y DESARROLLO DE NIVEL:

HÉROE PRINCIPAL:
- Representado por miniatura y carta de héroe.
- Tiene 3 Puntos de Movimiento (PM) por turno.
- Es el único que utiliza el mazo de fuerza y magia, gana experiencia (EXP) y sube de nivel (del 1 al 7).
- La carta de héroe detalla: Nombre, Clase, Tipo (Fuerza/Magia), Color de facción, Ataque, Defensa, Poder Mágico, Conocimiento, Habilidad Inicial y Especialidad.

HÉROES SECUNDARIOS:
- Reclutable por 10 de oro usando la ficha de Población si posees ciudad o asentamiento.
- Usa la segunda miniatura de facción, posee 2 PM y no tiene carta de héroe propia.
- No gana experiencia ni usa el mazo de fuerza y magia. En combate lucha con tus cartas de unidad.
- Si es derrotado, se retira de la partida y entrega un cubo de facción al vencedor; se puede volver a reclutar en tu siguiente turno.

EFECTOS DE NIVEL (Niveles 1 a 7):
- Nivel 1: Límite de mano 4. Añade 1.ª carta de especialidad.
- Nivel 2: Busca (2) en mazo de habilidades. Permite jugar 1 efecto avanzado por ronda.
- Nivel 3: Límite de mano 5. Busca (2) en mazo de habilidades.
- Nivel 4: Añade 2.ª carta de especialidad. Permite jugar 2 efectos avanzados por ronda.
- Nivel 5: Límite de mano 6. Busca (2) en mazo de habilidades.
- Nivel 6: Añade 3.ª carta de especialidad. Permite jugar 3 efectos avanzados por ronda.
- Nivel 7: Límite de mano 7. Busca (2) en mazo de habilidades.`
  },
  {
    id: "cap-5-construccion-mazo",
    title: "5. Construcción del Mazo, Cartas y Cofradía de Magos",
    category: "magic",
    content: `CONSTRUCCIÓN DEL MAZO DE FUERZA Y MAGIA Y TIPOS DE CARTAS:

Mazo Inicial: 9 cartas (características base del héroe + Flecha Mágica + Habilidad Nivel 1 + Especialidad Nivel 1).

TIPOS DE EFECTOS EN CARTAS:
- Instantáneos (Rayo): Se resuelven de inmediato.
- De Activación (Flecha): Se juegan durante la activación de tu unidad antes de atacar.
- De Mapa (Mundo): No se pueden usar en combate.
- Continuos (Bucle): Duran hasta consumirse o hasta el comienzo del próximo turno del jugador.

CATEGORÍAS DE CARTAS:
1. Cartas de Habilidad y Característica:
   - Tienen efecto básico y efecto avanzado (icono de corona). Requieren nivel de héroe suficiente para efectos avanzados.
   - Las cartas de facción específica (ej. Necromancia para Necrópolis) solo pueden ser jugadas por dicha facción.
2. Cartas de Artefacto:
   - Divididos en Menores, Mayores y Reliquias. Se obtienen explorando, derrotando enemigos o mediante dados de tesoro.
3. Cartas de Hechizo y Cofradía de Magos:
   - No tienen coste inicial, pero se fortalecen añadiendo cartas de Poder Mágico/descarte.
   - Máximo 1 hechizo por ronda de combate.
   - Al construir la Cofradía de Magos en la ciudad, busca (2) dos veces en el mazo de hechizos.
   - En rondas posteriores se pueden comprar hechizos adicionales pagando el coste de ciudad con la ficha de Libro de Hechizos.`
  },
  {
    id: "cap-6-recursos",
    title: "6. Tipos de Recursos y Dado de Recursos",
    category: "general",
    content: `RECURSOS Y DADO DE SUMINISTROS:

LOS 3 TIPOS DE RECURSOS:
1. Oro: Moneda principal usada para construir edificios, reclutar unidades y comprar hechizos.
2. Materiales de Construcción: Requeridos para edificaciones urbanas y estructuras avanzadas.
3. Objetos de Valor: Recursos raros (cristal, gemas, mercurio) consumidos por unidades de élite (Oro/Azur) y magias superiores.

RESULTADOS DEL DADO DE RECURSOS:
- 2 Materiales de construcción
- 4 Materiales de construcción
- 1 Objeto de valor
- 2 Objetos de valor
- 3 de Oro
- 6 de Oro

Intercambio de recursos: Se realiza en el Mercadillo o mediante eventos siguiendo la Tabla de Comercio.`
  },
  {
    id: "cap-7-ciudad",
    title: "7. Desarrollo Urbano: Edificios y Asedios",
    category: "town",
    content: `GESTIÓN DE LA CIUDAD Y ASEDIO DE ASENTAMIENTOS:

EDIFICIOS Y SUS FUNCIONES:
- Alcaldía: Otorga ingresos adicionales de oro por ronda de recursos o habilidad pasiva de facción.
- Ciudadela: Permite reforzar unidades (de "unas pocas" a "manada"). Añade murallas, puerta y torre de arqueros cuando tu ciudad es asediada.
- Viviendas de Unidades (Niveles 1, 2 y 3): Desbloquean reclutamiento de unidades de Bronce (Nivel 1), Plata (Nivel 2) y Oro (Nivel 3).
- Cofradía de Magos: Permite buscar e incorporar cartas de hechizo a tu mazo.
- Edificios Específicos de Facción: Otorgan bonificaciones únicas propias de cada pueblo.

REGLAS DE CONSTRUCCIÓN:
- Máximo 1 edificio por ronda pagando su coste y girando la ficha de Construcción.

ASEDIOS Y CAPTURA DE CIUDADES:
- Si asedias un asentamiento o ciudad enemiga desprotegida, el defensor puede pagar 8 de oro para transportar solo a su ejército a defender la plaza (sin héroe principal ni mazo de mano).
- Al capturar una ciudad enemiga, sustituyes su cubo por uno de tu facción. No puedes reclutar unidades ni usar edificios de otras facciones en ciudades capturadas.`
  },
  {
    id: "cap-8-elementos-mapa",
    title: "8. Elementos del Mapa: Losetas, Lugares, Asentamientos y Minas",
    category: "map",
    content: `EXPLORACIÓN DEL MAPA DE AVENTURA:

LOSETAS DE MAPA:
- Compuestas por 7 zonas hexagonales.
- Clasificadas por dificultad en el dorso: Iniciales (I), Lejanas (II-III), Cercanas (IV-V) y Centrales (VI-VII).
- Al colocar nuevas losetas lejanas, deben situarse adyacentes al héroe y a al menos 2 losetas existentes con camino válido.

TIRADA EN DADO DE TESORO (En zonas marcadas con cofre):
- Dado de recursos: Tira 1 dado de recursos.
- 2 Dados de recursos: Tira 2 dados de recursos y elige uno.
- ½ Nivel de experiencia: Gana medio nivel de EXP.
- Artefacto: Busca (2) en el mazo de artefactos.

CATEGORÍAS DE LUGARES EN EL MAPA:
1. Visitables (Cubo negro): Un solo uso. (Ej. Piedra de aprendizaje [+1 EXP], Árbol de la sabiduría, Cabaña de la bruja, Templo, Fuente de la juventud, Tumba del guerrero, Jardín místico, Molino de agua, Molino).
2. Re-visitables (Acceso recurrente): (Ej. Establos [+1 PM], Santuario [zona de protección], Mercadillo [comercio], Manantial mágico).
3. Señalizables (Cubo de color):
   - Asentamientos: Otorgan +5 oro, +2 materiales, +1 objeto de valor o reforzar 1 unidad por la mitad del coste.
   - Minas: Producen minerales (2 materiales), alquimista/cristal/gemas (1 objeto de valor) o mina de oro (5 oro). La primera señalización otorga ingresos instantáneos.
   - Obeliscos: Efectos según escenario y búsqueda del Grial.`
  },
  {
    id: "cap-9-unidades",
    title: "9. Unidades, Estadísticas, Categorías y Neutrales",
    category: "units",
    content: `REGLAMENTO COMPLETO DE UNIDADES Y EJÉRCITO:

CARA DE LA CARTA Y ESTADÍSTICAS:
- Las cartas tienen dos caras: "Unas pocas" (básica) y "Manada" (reforzada).
- Atributos: Ataque, Defensa, Puntos de Salud (PS), Iniciativa, Coste de Reclutamiento y Coste de Refuerzo.
- Límite de ejército en combate: Máximo 5 unidades desplegadas simultáneamente.

CATEGORÍAS DE MOVIMIENTO Y ATAQUE DE UNIDADES:
- Terrestre: Se mueve hasta 3 espacios y ataca cuerpo a cuerpo a unidades adyacentes.
- Voladora: Se mueve hasta 3 espacios ignorando obstáculos de combate y ataca cuerpo a cuerpo.
- A distancia: Se mueve hasta 1 espacio (sin atacar tras mover). Ataca a cualquier distancia salvo si tiene enemigos adyacentes o ataca a la retaguardia enemiga estando en la suya (-1 al dado de ataque o penalización de combate de tirar 2 dados y elegir el menor).

CATEGORÍAS DE UNIDADES Y REQUISITOS DE EDIFICIO:
- Bronce (Tier 1): Requieren Vivienda de Nivel 1. (Castillo: Alabarderos, Arqueros, Grifos / Mazmorra: Trogloditas, Arpías, Ojos Maléficos / Necrópolis: Esqueletos, Zombis, Espectros).
- Plata (Tier 2): Requieren Vivienda de Nivel 2. (Castillo: Cruzados, Fanáticos / Mazmorra: Medusas, Minotauros / Necrópolis: Vampiros, Liches).
- Oro (Tier 3): Requieren Vivienda de Nivel 3. (Castillo: Campeones, Arcángeles / Mazmorra: Mantícoras, Dragones Negros / Necrópolis: Caballeros del Terror, Dragones Fantasma).
- Azures (Neutrales Nivel 4): Las más poderosas. Se reclutan únicamente mediante la habilidad Diplomacia teniendo Vivienda Nivel 3.`
  },
  {
    id: "cap-10-combate",
    title: "10. Reglamento Táctico de Combate",
    category: "combat",
    content: `SISTEMA TÁCTICO DE COMBATE EN TABLERO 4 × 5:

PREPARACIÓN DEL COMBATE:
- Despliegue de hasta 5 unidades en vanguardia y retaguardia.
- Duración: Combates contra neutrales de bronce, plata u oro duran 1 ronda (prolongable pagando 1 PM por ronda extra). Combates contra neutrales azures y héroes enemigos duran hasta la victoria, rendición o retirada.

TERMINOLOGÍA Y MECÁNICAS DE COMBATE:
- Orden de Iniciativa: Las unidades actúan en orden decreciente de Iniciativa. A igual iniciativa, activa primero el atacante.
- Acciones de la Unidad: Moverse, Atacar, Defenderse (gana ficha de defensa) o Esperar.
- Dado de Ataque: Dado rojo (-1, 0, +1) sumado al valor de Ataque de la unidad.
- Cálculo de Daño: Daño = (Ataque + Dado de Ataque) - Defensa defensora. El daño se aplica en fichas de heridas.
- Contraataque: 1 contraataque por ronda de la unidad defensora superviviente adyacente.
- Obstáculos de combate: Cartas en el tablero, murallas, puertas y torre de arqueros en asedios.

FINAL DEL COMBATE Y EXPERIENCIA:
- Ganar EXP: Si la dificultad/nivel enemigo es menor que tu héroe: 0 EXP. Si es igual: 1 EXP. Si es mayor: 2 EXP. Vencer unidades azures otorga directamente el Nivel 7.
- Combate Rápido: Si tu héroe supera en 1 o más el nivel de dificultad neutral, las tropas huyen y ganas sin combatir.
- Rendición/Retirada: Rendirse ante un héroe enemigo cuesta entregar 10 de oro a tu oponente y reaparecer en tu ciudad.`
  },
  {
    id: "cap-11-ia",
    title: "11. Reglamento del Jugador Automático (IA / Solitario)",
    category: "modes",
    content: `REGLAS DE ACTUACIÓN Y COMBATE DE LA IA:

MAZO Y DIFICULTAD DE LA IA:
- La IA utiliza un mazo especial con cartas clasificadas por dificultad (Fácil, Normal, Difícil e Imposible).

REGLAS DE COMBATE DE LA IA:
- En cada activación de unidad de la IA, roba 1 carta del mazo de la IA y resuelve sus efectos y hechizos.
- Unidades terrestres y voladoras atacan prioritariamente a unidades del jugador de la misma categoría. Si no es posible, atacan a la más cercana o de categoría inferior.
- Unidades a distancia de la IA priorizan unidades a distancia enemigas de su misma categoría, luego de menor categoría y finalmente de mayor categoría.

REGLAS DE MOVIMIENTO DE LA IA EN EL MAPA (3 PM por turno):
1. Comprobar si hay héroe del jugador en la misma loseta -> Moverse hacia él para combatir.
2. Comprobar si hay minas o asentamientos sin su cubo en la loseta -> Moverse para señalizarlos.
3. Si 1 y 2 no son posibles -> Moverse hacia la ciudad del jugador.`
  },
  {
    id: "cap-12-opciones-dificultad",
    title: "12. Opciones de Juego, Dificultad y Comercio",
    category: "modes",
    content: `OPCIONES DE CONFIGURACIÓN Y TABLAS OFICIALES:

NIVELES DE DIFICULTAD Y BONIFICADORES INICIALES:
- Fácil: Lanza 2 dados de recursos y añade ambos resultados O busca (2) dos veces en el mazo de artefactos.
- Normal: Lanza 2 dados de recursos y elige uno O busca (2) en el mazo de artefactos.
- Difícil: Lanza 1 dado de recursos O revela artefactos hasta encontrar 1 artefacto menor.
- Imposible: Sin bonificadores iniciales.

CONDICIONES DE VICTORIA:
- La más habitual es eliminar a todas las facciones enemigas capturando sus ciudades y asentamientos.
- Un jugador sin ciudad ni asentamientos durante 3 rondas consecutivas queda eliminado.

TABLA DE COMERCIO EN EL MERCADILLO:
- Vender 1 Objeto de valor -> Comprar 3 de Oro ó 2 Materiales de construcción.
- Vender 3 Materiales de construcción -> Comprar 1 de Oro ó 1 Objeto de valor.
- Vender 6 de Oro -> Comprar 1 Objeto de valor.
- Vender 2 de Oro -> Comprar 1 Material de construcción.
- Retirar 1 carta de la mano -> Otorga 1 de Oro.`
  },
  {
    id: "cap-13-14-creditos",
    title: "13 y 14. Notas y Créditos Oficiales",
    category: "general",
    content: `INFORMACIÓN EDITORIAL Y CRÉDITOS OFICIALES:

CRÉDITOS DE DESARROLLO (ARCHON STUDIO & UBISOFT):
- Diseño de Reglas: Kamil Białkowski, Jacek Karpowicz, Aleksander Kubiak, Jakub S. Olekszyk.
- Diseño del Modo Solitario: Aleksander Kubiak.
- Diseño de Reglas de Torneo: Kamil Białkowski.
- Edición y Arte: Anna Gut, Patryk Kubiak, Iana Vengerova, Tomasz Badalski.
- Dirección de Marca Ubisoft: Eric Damian-Vernet, Theo Gallego, Vicky Malineau.
- Edición Española: Spieletexter Ludiversal Translations (Traducción: Lis Díez Bourgoin; Corrección: Jael Herrera Gómez).
- ©2022 Archon Studio & ©2022 Ubisoft Entertainment.`
  },
  {
    id: "cap-15-ayuda-juego",
    title: "15. Ayuda de Juego y Glosario de Símbolos del Mapa",
    category: "faq",
    content: `AYUDA DE JUEGO Y SIMBOLOGÍA COMPLETA DEL MANUAL:

SÍMBOLOS EN EL MAPA Y EFECTOS:
- I-VII: Indica la dificultad de la zona y nivel de unidades neutrales.
- Cofre: Lanza dado de tesoro y recibe el bonificador.
- Pico/Pala: Lanza dado de recursos y recibe los recursos.
- Estrella (Experiencia): Gana la mitad de un nivel de experiencia.
- Libro: Busca (2) en el mazo de hechizos.
- Ankh/Artefacto: Busca (2) en el mazo de artefactos.
- Pluma verde: Gana moral positiva.
- Pluma negra: Gana moral negativa.
- Casco/Herradura: Gana +1 Punto de Movimiento (PM) adicional.

RECUERDO RÁPIDO DE ACCIONES DE MORAL:
- Moral Positiva: Robar 1 carta, volver a lanzar 1 dado, o descartar/robar el mismo número de cartas.
- Moral Negativa: Si ya posees moral negativa y recibes otra, descarta todas tus cartas al final del turno. (Necrópolis ignora la moral).`
  },

  // =========================================================================
  // EXPANSIÓN MURALLAS (RAMPART) Y LIBRO DE MISIONES
  // =========================================================================
  {
    id: "rampart-01-componentes",
    title: "Murallas 1. Lista de Componentes de la Expansión Murallas",
    category: "components",
    content: `COMPONENTES INCLUIDOS EN LA EXPANSIÓN MURALLAS (RAMPART):

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
- 1 Ficha de construcción, 1 de población, 1 de libro de hechizos, 1 de moral
- 30 Cubos acrílicos (10 negros, 20 verdes)`
  },
  {
    id: "rampart-02-nuevos-elementos",
    title: "Murallas 2. Nuevos Elementos: Efectos Permanentes, Máquinas de Guerra y Mapa",
    category: "combat",
    content: `NUEVAS MECÁNICAS E INTRODUCCIONES DE LA EXPANSIÓN:

1. CARTAS DE EFECTO PERMANENTE (Icono Infinito ∞):
   - Otorgan un bonificador pasivo o condición continua.
   - Al jugarse, la carta se coloca frente al jugador y permanece activa hasta descartarse o sustituirse.
   - Cada héroe solo puede tener 1 carta de efecto permanente activa a la vez.
   - Permiten usar efectos básicos o avanzados (según el nivel del héroe), pero no se apilan entre sí.

2. MÁQUINAS DE GUERRA (Balista, Catapulta, Carro de Municiones, Tienda de Primeros Auxilios):
   - Se compran en la Fábrica de Máquinas de Guerra o en el Mercadillo.
   - Comprar una máquina de guerra en un Mercadillo impide realizar otras acciones en esa visita y cuesta 3 de oro adicionales sobre su precio de fábrica.

3. NUEVAS LOCALIZACIONES DEL MAPA:
   - Fábrica de Máquinas de Guerra (Re-visitable): Permite comprar máquinas de guerra.
   - Aserradero (Mina - Señalizable): Produce pasivamente 2 Materiales de Construcción por ronda de recursos.`
  },
  {
    id: "rampart-03-modo-alianza",
    title: "Murallas 3. Reglamento Oficial del Modo Alianza (2 contra 2)",
    category: "modes",
    content: `REGLAS ADICIONALES PARA PARTIDAS EN EQUIPO (2v2):

REQUISITOS Y REGLAS DE ALIANZA:
- Requiere 4 jugadores forming 2 alianzas de 2 jugadores.
- Cada jugador elige su facción al inicio. La alianza dura todo el escenario.
- Intercambio de Artefactos: Dos héroes aliados pueden intercambiarse artefactos de la mano si se encuentran en zonas adyacentes.
- Intercambio Libre de Recursos: Los miembros de la misma alianza pueden transferir y compartir recursos libremente durante el turno de cualquiera de ellos, sin importar la posición de sus héroes en el mapa.
- Control de Zonas: Un jugador no puede señalizar ni capturar un lugar que ya esté señalizado por su compañero de alianza.

CONDICIONES DE FIN DE ESCENARIO:
- Los héroes aliados comparten la victoria o la derrota por igual. No hay recuento individual de puntos.`
  },
  {
    id: "rampart-04-escenario-el-desafio",
    title: "Murallas 4. Escenario Alianza: 'El Desafío' (4 Jugadores)",
    category: "modes",
    content: `ESCENARIO ALIANZA 'EL DESAFÍO':

NARRATIVA: El rey va a morir y desafía a quien construya el Grial en la capital Osha a convertirse en su sucesor.
- Jugadores: 4 (2v2). Duración: 11-14 rondas.
- Preparación del Mapa: 4 losetas iniciales (I), 8 lejanas (II-III), 8 cercanas (IV-V con 4 obeliscos), 2 centrales (VI-VII con 1 grial).

RECURSOS E INGRESOS INICIALES:
- Suministros: 16 Oro, 4 Materiales, 1 Objeto de Valor.
- Ingresos: 10 Oro, 0 Materiales, 0 Objetos de Valor.
- Edificio inicial: Vivienda de Bronce. Tropas iniciales: 2 manadas de Bronce de menor coste.

REGLAS DEL ESCENARIO:
- Visitar un Obelisco permite lanzar 2 dados de tesoro y resolver 1.
- No se puede acceder a la zona del Grial hasta que la alianza haya visitado al menos 4 obeliscos diferentes.
- Excavar la Ficha de Grial requiere gastar 2 PM en la zona del Grial.
- Si el héroe con el Grial es derrotado en combate o se rinde, la ficha de Grial cae en esa zona o pasa al vencedor.
- Entregar el Grial en la ciudad otorga +5 de ingresos de Oro.
- Victoria: Conseguir la ficha de Grial y llevarla a la ciudad natal de tu facción.`
  },
  {
    id: "rampart-05-escenario-oro-enano",
    title: "Murallas 5. Escenario Enfrentamiento: 'Oro Enano' (2-3 Jugadores)",
    category: "modes",
    content: `ESCENARIO ENFRENTAMIENTO 'ORO ENANO':

NARRATIVA: Fiebre del oro tras el hallazgo del minero enano Invis Smythers.
- Jugadores: 2 o 3. Duración: 10 rondas.

RECURSOS E INGRESOS INICIALES:
- Suministros: 15 Oro, 3 Materiales, 1 Objeto de Valor.
- Ingresos: 10 Oro, 2 Materiales, 0 Objetos de Valor.
- Tropas iniciales: 1 manada de Bronce de mayor coste.

REGLAS ESPECIALES:
- Prohibido el uso de cartas que otorguen recursos directos (se descartan y se roba otra al buscar).
- Solo los héroes principales pueden reclamar el Grial.
- La Ficha de Grial concede 15 Oro inmediatos y +5 de ingresos al llegar a la ciudad.
- Evento contrarreloj: En las rondas 2, 4, 6, 8 y 10, retira todos los cubos negros de los molinos y molinos de agua.
- Victoria: Acumular 75 de Oro en tu reserva al final de cualquier ronda.`
  },
  {
    id: "rampart-06-campana-mision-1",
    title: "Murallas 6. Campaña 'La Venganza se Sirve Fría' - Misión 1: En Busca de un Asesino",
    category: "modes",
    content: `CAMPAÑA DE LAS MURALLAS - ESCENARIO 1: EN BUSCA DE UN ASESINO

HISTORIA: Asesinato de lord Falorel (descubierto como un señor vampiro infiltrado de Deyja) y la invasión de Soledare.
- Héroe Principal del Jugador: Gelu (Facción Murallas). Duración: 11 rondas.
- Enemigos de la IA (Necrópolis): Aislinn, Galthran y el Ejército de la Ciudad.

REGLAS Y EVENTOS DESTACADOS:
- Visitar un obelisco por primera vez activa el rescate o ruinas de Soledare.
- Derrotar ejércitos enemigos otorga 2 Objetos de Valor.
- Evento Ronda 7: La dificultad de todos los combates del mapa aumenta en +1.
- Victoria: Derrotar a todos los ejércitos enemigos de la Necrópolis.`
  },
  {
    id: "rampart-07-campana-mision-2",
    title: "Murallas 7. Campaña 'La Venganza se Sirve Fría' - Misión 2: Paz Definitiva",
    category: "modes",
    content: `CAMPAÑA DE LAS MURALLAS - ESCENARIO 2: PAZ DEFINITIVA

HISTORIA: La druida Gem investiga el asesinato de lord Fayette, resucitado por los nigromantes como un Caballero del Terror.
- Héroe Principal del Jugador: Gem (Facción Murallas). Duración: 13 rondas.
- Enemigos de la IA (Necrópolis): Guardias de lord Fayette y Lord Fayette.

REGLAS Y EVENTOS DESTACADOS:
- En la zona de ciudad de la loseta de Necrópolis, lucha contra la guarnición con 3 murallas y 1 puerta.
- Teletransporte Místico: Los obeliscos de las losetas cercanas de Necrópolis y Mazmorra están interconectados y teletransportan al héroe de una a otra.
- Victoria: Derrotar a lord Fayette para liberar su alma.`
  },
  {
    id: "rampart-08-campana-mision-3",
    title: "Murallas 8. Campaña 'La Venganza se Sirve Fría' - Misión 3: Agentes de la Venganza",
    category: "modes",
    content: `CAMPAÑA DE LAS MURALLAS - ESCENARIO 3: AGENTES DE LA VENGANZA

HISTORIA: Gem y Gelu unen sus fuerzas para invadir Deyja y detener el complot del nigromante Sandro antes de que complete un artefacto destructivo.
- Héroes del Jugador: Gem y Gelu. Duración: 12 rondas.
- Enemigos de la IA: Charna, Galthran y Vidomina.

REGLAS Y EVENTOS DESTACADOS:
- Dificultad Aumentada: Todos los combates en losetas de Necrópolis tienen +1 a la dificultad de zona.
- Combate Final en el Castillo Crypthome (Utopía del Dragón): Enfrentamiento masivo contra Vidomina. La manada de esqueletos enemiga equipa las cartas de especialidad de Sandro y realiza un ataque gratuito.
- Gelu o Gem otorgan bonificaciones directas de daño al inicio de la batalla final.
- Victoria: Derrotar al ejército enemigo en la Utopía del Dragón.`
  },

  // =========================================================================
  // METAS AMPLIADAS (STRETCH GOALS) Y LIBRO DE MISIONES
  // =========================================================================
  {
    id: "sg-01-componentes",
    title: "Metas Ampliadas 1. Lista de Componentes y Nuevas Localizaciones",
    category: "components",
    content: `COMPONENTES Y NUEVOS LUGARES DE LAS METAS AMPLIADAS (STRETCH GOALS):

LOSETAS Y COMPONENTES:
- 15 Losetas de mapa (1 inicial, 10 lejanas, 3 cercanas, 1 central)
- 1 Tablero de ciudad, 1 libro de misiones, 1 ayuda de juego
- 2 Miniaturas de héroe, 7 miniaturas de unidad, 7 cartas de héroe a doble cara
- 28 Cartas de unidad neutral, 11 de artefacto, 7 de hechizo, 11 de habilidad, 42 de especialidad
- 7 Cartas de característica, 12 fichas de oro, 9 materiales, 8 objetos de valor, 10 fichas de daño
- 30 Cubos acrílicos (10 negros, 20 azul claro)

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
    id: "sg-02-escuelas-magia-miniaturas",
    title: "Metas Ampliadas 2. Escuelas de Magia, Efectos Permanentes y Reglas de Miniaturas",
    category: "magic",
    content: `NUEVAS MECÁNICAS DE JUEGO (METAS AMPLIADAS):

ESCUELAS DE MAGIA (Aire, Fuego, Tierra, Agua):
- Cada carta de hechizo pertenece a una de las 4 escuelas de magia.
- Flecha Mágica: Pertenece a todas las escuelas de magia a la vez, pero solo puede beneficiarse del bonificador de una escuela simultáneamente.

CARTAS DE EFECTO PERMANENTE (Icono Infinito ∞):
- Permanece en mesa frente al jugador tras jugarse.
- Cada héroe solo puede mantener 1 carta de efecto permanente a la vez.

REGLAS ADICIONALES PARA MINIATURAS DE UNIDAD EN TABLERO:
- Al robar unidades neutrales en combate: descarta y roba otra si robas la misma unidad neutral más de una vez, una unidad que ya tengas en tu ejército, o una unidad de tu propia facción.
- Al reclutar neutrales: prohibido reclutar unidades controladas por otro jugador.`
  },
  {
    id: "sg-03-campana-dungeon",
    title: "Metas Ampliadas 3. Campaña Mazmorra: 'La Sangre del Dragón' (Mutare)",
    category: "modes",
    content: `CAMPAÑA DE LA MAZMORRA: LA SANGRE DEL DRAGÓN (3 Escenarios):

PROTAGONISTA: La señora Mutare busca el legendario Vial de Sangre de Dragón para transformarse en dragón y dominar Nighon.

ESCENARIO 1: LIMPIEZA DE ASPIRANTES (11 Rondas)
- Héroe: Mutare. Límite Nivel 4. Sin viviendas de Nivel 3.
- Enemigos IA: Caomham y Preuet.
- Misión: Capturar la ciudad inicial (guarnición Nivel III) y eliminar a ambos héroes rivales.

ESCENARIO 2: SANGRE DEL PADRE DRAGÓN (11 Rondas)
- Héroe: Mutare o Alamar.
- Enemigos IA: Vanguardia de Ordwald (se desplaza veloz hacia la Utopía del Dragón) y Dragones Guardianes.
- Regla: Visitar obeliscos detiene el avance de la vanguardia enemiga por 1 turno.
- Victoria: Llegar a la Utopía del Dragón y derrotar a los Dragones Guardianes antes de que Ordwald alcance el lugar.

ESCENARIO 3: SED DE SANGRE (10 Rondas)
- Héroe: Mutare (tras beber del Vial, transformada en dragón) o Alamar.
- Enemigos IA: Cuatro señores de Nighon que atacan en oleadas sucesivas hasta llegar a Ordwald.
- Regla Especial: En la Utopía del Dragón se pueden reclutar dragones azures si se poseen viviendas de Nivel 3.
- Victoria: Sobrevivir y derrotar a todos los señores enemigos en combate.`
  },
  {
    id: "sg-04-campana-necropolis",
    title: "Metas Ampliadas 4. Campaña Necrópolis: 'El Ascenso del Nigromante' (Sandro)",
    category: "modes",
    content: `CAMPAÑA DE LA NECRÓPOLIS: EL ASCENSO DEL NIGROMANTE (3 Escenarios):

PROTAGONISTA: Sandro el Nigromante avanza hacia Deyja reuniendo artefactos legendarios (Capa del Rey No Muerto y Armadura de los Malditos) contra su antiguo maestro Ethric.

ESCENARIO 1: OBJETIVO (8 Rondas)
- Héroe: Sandro o Tamika. Límite Nivel 4.
- Enemigos IA: Shiva y Jeddite (utiliza la carta de especialidad Resurrección VI).
- Victoria: Derrotar a Shiva y Jeddite en combate.

ESCENARIO 2: MAESTRO (10 Rondas)
- Héroe: Sandro o Tamika. Límite Nivel 5.
- Enemigos IA: Ivor y Ethric (su antiguo maestro).
- Regla Especial: Si Ethric es atacado en su ciudad, cuenta con 3 murallas, puerta y torre de arqueros. Se pueden pagar 10 de Oro para ralentizar su movimiento a 2 zonas/ronda.
- Victoria: Derrotar a Ivor y Ethric.

ESCENARIO 3: DUQUE ALARICE (11 Rondas)
- Héroe: Sandro o Tamika.
- Enemigos IA: Thorgrim, Melodia y el Duque Alarice.
- Regla Especial: El asentamiento enano aumenta la producción de Oro en +10. En el combate final contra el Duque Alarice, una unidad de Momias enemiga ataca en primer lugar antes de cualquier activación.
- Victoria: Derrotar a todos los héroes enemigos y triunfar en la Utopía del Dragón.`
  },
  {
    id: "sg-05-campana-tower",
    title: "Metas Ampliadas 5. Campaña Torre: 'Matadragones' (Dracon)",
    category: "modes",
    content: `CAMPAÑA DE LA TORRE: EL MATADRAGONES (4 Escenarios):

PROTAGONISTA: Dracon realiza las pruebas preparadas por su madre para convertirse en el matadragones definitivo, enfrentándose a las wyrms más letales.

ESCENARIO 1: DRAGONES DE CRISTAL (9 Rondas)
- Héroes: Dracon o Solmyr (Facción Torre).
- Misión: Revelar las losetas lejanas, visitar un obelisco y derrotar al ejército de Dragones de Cristal.

ESCENARIO 2: DRAGONES HERRUMBROSOS (11 Rondas - Requiere Fortaleza)
- Héroes: Dracon o Solmyr.
- Misión: Capturar 3 minas infestadas de ácido (sufriendo parálisis y reducción de tropas) y derrotar al ejército final en el Estanque de Gemas.

ESCENARIO 3: DRAGONES HADA (13 Rondas - Requiere Murallas)
- Héroes: Dracon o Solmyr.
- Misión: Superar las ilusiones del duendecillo Erik, capturar los 4 asentamientos oprimidos y abrir la Caja de Pandora para derrotar a los 3 Dragones Hada.

ESCENARIO 4: DRAGONES AZURES (11 Rondas)
- Héroes: Dracon o Solmyr.
- Misión: Visitar los 3 obeliscos derrotando en cada uno a un ejército dragón (Cristal, Negro o Azure) para desbloquear la Utopía del Dragón final y vencer al mítico Dragón Azure.`
  },

  // =========================================================================
  // EXPANSIÓN FORTALEZA (FORTRESS) Y LIBRO DE MISIONES "JUGANDO CON FUEGO"
  // =========================================================================
  {
    id: "fortress-01-componentes",
    title: "Fortaleza 1. Lista de Componentes de la Expansión Fortaleza",
    category: "components",
    content: `COMPONENTES INCLUIDOS EN LA EXPANSIÓN FORTALEZA (FORTRESS):

LOSETAS Y TABLEROS:
- 7 Losetas de mapa (1 inicial [S5], 3 lejanas [F13, F14, F15], 2 cercanas [N9, N10], 1 central [C1])
- 1 Tablero de ciudad de la facción Fortaleza (Fortress)
- 1 Libro de misiones de Fortaleza (28 páginas)
- 1 Ayuda de juego

MINIATURAS Y CARTAS:
- 2 Miniaturas de héroe (Adrienne y Wystan)
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
    id: "fortress-02-nuevos-elementos-eventos",
    title: "Fortaleza 2. Cartas de Evento y Nuevas Localizaciones (Erudito)",
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
    id: "fortress-03-modo-alianza-arrogancia",
    title: "Fortaleza 3. Modo Alianza y Escenario 'Arrogancia' (4 Jugadores)",
    category: "modes",
    content: `ESCENARIO ALIANZA 'ARROGANCIA':

NARRATIVA: Cuatro culturas vivían en paz hasta que las ambiciones de conquista desataron la guerra mundial.
- Jugadores: 4 (2v2). Duración: 12 rondas.
- Preparación del Mapa: 4 losetas iniciales (I), 8 lejanas (II-III), 8 cercanas (IV-V con 4 obeliscos), 2 centrales (VI-VII con 1 grial).

RECURSOS E INGRESOS INICIALES:
- Suministros: 13 Oro, 4 Materiales, 1 Objeto de Valor.
- Ingresos: 10 Oro, 0 Materiales, 0 Objetos de Valor.
- Tropas iniciales: 2 "unas pocas" de Bronce de mayor coste.

REGLAS DEL ESCENARIO:
- Solo los héroes principales pueden reclamar la ficha de Grial.
- La alianza debe visitar al menos 4 obeliscos diferentes antes de poder entrar en la zona del Grial.
- Excavar la Ficha de Grial exige gastar 2 PM en la zona del Grial.
- Entregar el Grial en la ciudad otorga +5 a los ingresos de Oro.
- Evento Contrarreloj: Al comienzo de las rondas 3, 6 y 9, todos los héroes ganan 1 Ficha de Moral positiva.
- Victoria: Entregar la ficha de Grial en una ciudad de la alianza antes del final de la ronda 12.`
  },
  {
    id: "fortress-04-modo-enfrentamiento-grial",
    title: "Fortaleza 4. Escenario Enfrentamiento: 'En Busca del Grial' (2-3 Jugadores)",
    category: "modes",
    content: `ESCENARIO ENFRENTAMIENTO 'EN BUSCA DEL GRIAL':

NARRATIVA: Búsqueda competitiva del grial perdido en las ciénagas antes de que caiga en manos enemigas.
- Jugadores: 2 o 3. Duración: 10-13 rondas.

RECURSOS E INGRESOS INICIALES:
- Suministros: 16 Oro, 4 Materiales, 1 Objeto de Valor.
- Ingresos: 10 Oro, 0 Materiales, 0 Objetos de Valor.
- Tropas iniciales: 2 manadas de Bronce de menor coste.

REGLAS ESPECIALES:
- Requiere haber visitado al menos 2 obeliscos diferentes para poder acceder a la zona del Grial.
- Extraer el Grial consume 2 PM. Llevarlo a la ciudad natal otorga +5 de ingresos de Oro.
- Evento contrarreloj: Al inicio de las rondas 3 y 9, todos los héroes ganan +1 Punto de Movimiento (PM).
- Victoria: El héroe principal debe recuperar la ficha de Grial y entregarla en la ciudad de su facción antes del fin de la ronda 10 (se extiende a la ronda 13 si un héroe posee el Grial al final de la ronda 10).`
  },
  {
    id: "fortress-05-campana-mision-1",
    title: "Fortaleza 5. Campaña 'Jugando con Fuego' - Misión 1: Cosecha de Ciudades",
    category: "modes",
    content: `CAMPAÑA DE LA FORTALEZA - ESCENARIO 1: COSECHA DE CIUDADES

HISTORIA: La bruja de fuego Adrienne regresa a Tatalia y descubre que la secta ilegal de Lord Haart está masacrando y resucitando a los aldeanos.
- Héroe del Jugador: Adrienne o Wystan (Facción Fortaleza). Duración: 13 rondas.
- Enemigos de la IA: "Merodeadores Nocturnos" (Necrópolis).

REGLAS Y EVENTOS DESTACADOS:
- Límite de Experiencia: Nivel 5 máximo.
- Al combatir contra neutrales, la primera unidad de Bronce robada se sustituye por Zombis.
- Captura de la Ciudad de Basdar: Defendida por un ejército neutral Nivel III. Permite refundar la base de operaciones tataliana.
- Requisitos de Victoria Doble:
  1. Pagar tributo a los corruptos señores erathianos: 40 Oro, 20 Materiales y 10 Objetos de Valor.
  2. Entrar en la zona con obelisco para combatir y derrotar al ejército de los Merodeadores Nocturnos (vampiros con +2 de iniciativa) y rescatar al caballero Sir Michael.`
  },
  {
    id: "fortress-06-campana-mision-2",
    title: "Fortaleza 6. Campaña 'Jugando con Fuego' - Misión 2: La Marcha de los No Muertos",
    category: "modes",
    content: `CAMPAÑA DE LA FORTALEZA - ESCENARIO 2: LA MARCHA DE LOS NO MUERTOS

HISTORIA: Lord Haart instala guardias de no muertos en las viviendas de Tatalia para convertir cada nuevo recluta en soldados esqueleto. Adrienne debe desmantelar su red de levantamientos.
- Héroe del Jugador: Adrienne o Wystan. Duración: 12 rondas.
- Enemigo de la IA: Nagash (Necrópolis).

REGLAS Y EVENTOS DESTACADOS:
- Infección Creciente: Las unidades neutrales de Bronce son sustituidas progresivamente por Esqueletos, Zombis y Espectros conforme avanzan las rondas.
- Obelisco Teletransportador: El obelisco de la loseta cercana de Fortaleza teletransporta al héroe a la zona del obelisco de la loseta cercana de Mazmorra.
- Combate contra Nagash: Se desencadena al intentar señalizar la segunda localización mística (Nagash cuenta con muralla y puerta en batalla).
- Victoria: Señalizar (colocar cubo de facción) todos los asentamientos y minas del mapa y vencer al ejército de Nagash.`
  },
  {
    id: "fortress-07-campana-mision-3",
    title: "Fortaleza 7. Campaña 'Jugando con Fuego' - Misión 3: El Incendio de Tatalia",
    category: "modes",
    content: `CAMPAÑA DE LA FORTALEZA - ESCENARIO 3: EL INCENDIO DE TATALIA

HISTORIA: Confrontación definitiva contra Lord Haart y sus dos seguidores no muertos para purificar Tatalia con fuego primordial.
- Héroe del Jugador: Adrienne o Wystan. Duración: 14 rondas.
- Enemigos de la IA: Seguidor 1, Seguidor 2 y Lord Haart.

REGLAS Y EVENTOS DESTACADOS:
- Dificultad Aumentada: Todos los combates en el mapa tienen +1 a la dificultad de zona.
- Misiones de los Tomos Elementales:
  • Tomo de Tierra: Visitar el obelisco y sacrificar un artefacto de Defensa o una unidad de Plata para conseguir el tomo y la capacidad de transmutar artefactos en hechizos.
  • Tomo de Fuego: Visitar el segundo obelisco y sacrificar un artefacto Reliquia o 4 Objetos de Valor.
- Enfrentamiento Final contra Lord Haart (Utopía del Dragón): En la primera ronda del combate, Adrienne puede lanzar 1 hechizo de la Escuela de Tierra y 1 de la Escuela de Fuego con el máximo Poder Mágico (sin consumir el límite de hechizos y conservándolos en la mano).
- Victoria: Visitar ambos obeliscos obteniendo los dos tomos y derrotar a Lord Haart y sus dos seguidores.`
  },

  // =========================================================================
  // EXPANSIÓN INFERNO Y LIBRO DE MISIONES
  // =========================================================================
  {
    id: "inferno-01-componentes",
    title: "Inferno 1. Lista de Componentes de la Expansión Inferno",
    category: "components",
    content: `COMPONENTES INCLUIDOS EN LA EXPANSIÓN INFERNO:

LOSETAS Y TABLEROS:
- 7 Losetas de mapa (1 inicial, 3 lejanas, 2 cercanas, 1 central)
- 1 Tablero de ciudad de la facción Inferno
- 1 Libro de misiones de Inferno (16 páginas)
- 1 Ayuda de juego

MINIATURAS Y CARTAS:
- 2 Miniaturas de héroe y 1 miniatura de ciudad (Utopía del Infierno / Ciudad de Inferno)
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
    id: "inferno-02-nuevos-elementos",
    title: "Inferno 2. Nuevos Elementos: Cartas de Característica Potenciada, Invocar e Inmunidad de los Efrits",
    category: "combat",
    content: `NUEVAS MECÁNICAS E INTRODUCCIONES DE LA EXPANSIÓN INFERNO:

1. CARTAS DE CARACTERÍSTICA POTENCIADA (20 Cartas):
   - Funcionan de forma similar a las cartas de característica básicas, pero otorgan un único efecto potenciado sin requerir el uso de la categoría Experto.
   - Se obtienen al visitar la localización 'Eje Estelar', intercambiando una carta de característica de tu mano por la correspondiente carta potenciada del mismo tipo.
   - También se pueden adquirir mediante cartas de artefacto, habilidades específicas o anuncios astrológicos.

2. MECÁNICA DE INVOCAR:
   - Permite añadir una nueva unidad al tablero de combate durante una batalla.
   - La unidad invocada se despliega en un espacio libre adyacente a la unidad que realiza la acción de invocar.
   - Activación en el turno: Si la iniciativa de la unidad invocada es menor o igual a la de la unidad activa en ese momento, la unidad invocada actuará en la misma ronda. En caso contrario, se considera ya activada para esa ronda.
   - Tras finalizar el combate, salvo indicación contraria, la unidad invocada se añade permanentemente a tu mazo de unidades.
   - Regla de Señores del Abismo: Su habilidad de invocación solo se puede usar 1 vez por combate y no puede invocar demonios neutrales. Al reforzar la unidad de demonios invocada no se paga coste de Oro.

3. INMUNIDAD DE LOS EFRITS A LA MAGIA DE FUEGO:
   - Las unidades de Efrits (tanto en versión 'Manada' como unidad neutral) ignoran todo el daño provocado por cartas de hechizo pertenecientes a la Escuela de Magia de Fuego.
   - Otros efectos secundarios de hechizos de Fuego no relacionados con el daño directo sí afectan a los Efrits.`
  },
  {
    id: "inferno-03-lugares-mapa",
    title: "Inferno 3. Nuevas Localizaciones: Eje Estelar y Ciudad Aleatoria",
    category: "map",
    content: `NUEVAS LOCALIZACIONES DEL MAPA (EXPANSIÓN INFERNO):

1. EJE ESTELAR (Señalizable):
   - Al visitar un Eje Estelar, puedes retirar una carta de característica de tu mano y sustituirla por una Carta de Característica Potenciada del mismo tipo.
   - Múltiples héroes de distintas facciones pueden visitar el mismo Eje Estelar y colocar sus respectivos cubos en la zona. Cuenta como zona vacía para las facciones que ya lo hayan visitado.

2. CIUDAD ALEATORIA (Señalizable / Asedio):
   - Descubrimiento: Al revelar la loseta con Ciudad Aleatoria, cada jugador tira 2 dados de recurso. El jugador con mayor cantidad de recursos resultantes elige una facción no presente en la partida para defender la plaza.
   - Guarnición de Asedio: Está defendida por 1 manada de Bronce, 2 manadas de Plata y 2 "unas pocas" de Oro de la facción seleccionada (sin carta de Torre de Arqueros).
   - Recompensas: El jugador que la señalice por primera vez recibe 10 de Oro inmediatamente. Además, la Ciudad Aleatoria genera +10 de ingresos pasivos de Oro al inicio de cada ronda de recursos.`
  },
  {
    id: "inferno-04-modo-alianza-dos-tierras",
    title: "Inferno 4. Escenario Alianza: 'El Cuento de las Dos Tierras' (4 Jugadores)",
    category: "modes",
    content: `ESCENARIO ALIANZA 'EL CUENTO DE LAS DOS TIERRAS':

NARRATIVA: Conflicto total entre los continentes Este y Oeste de Varesburg.
- Jugadores: 4 (2v2). Duración: 11-13 rondas.
- Preparación del Mapa: 4 losetas iniciales (I), 8 cercanas (IV-V con 4 obeliscos), 8 lejanas (II-III).

RECURSOS E INGRESOS INICIALES:
- Suministros: 14 Oro, 4 Materiales, 1 Objeto de Valor.
- Ingresos: 10 Oro, 0 Materiales, 0 Objetos de Valor.
- Edificios e Unidades Iniciales: Vivienda de Bronce y 2 manadas de Bronce de menor coste.

REGLAS ESPECIALES DEL ESCENARIO:
- Al visitar un obelisco, el héroe gana 1 Ficha de Moral positiva.
- Los jugadores pueden utilizar su mazo de fuerza y magia pagando oro para defender su ciudad natal.
- Evento contrarreloj: En las rondas 4 y 9, todos los jugadores lanzan y resuelven 1 dado de recurso.
- Victoria: La alianza debe controlar 12 losetas al final de una ronda o capturar una ciudad enemiga y mantenerla bajo control durante 2 rondas consecutivas.`
  },
  {
    id: "inferno-05-modo-enfrentamiento-destino-carpe-diem",
    title: "Inferno 5. Escenarios Enfrentamiento: 'Destino Manifiesto' (3 Jugadores) y 'Carpe Diem' (2 Jugadores)",
    category: "modes",
    content: `ESCENARIOS DE MODO ENFRENTAMIENTO (EXPANSIÓN INFERNO):

1. DESTINO MANIFIESTO (3 Jugadores, 12-14 Rondas):
   - Narrativa: Dominar las tierras superpobladas para consolidar la hegemonía de tu reino.
   - Suministros: 12 Oro, 4 Materiales, 0 Objetos de Valor.
   - Edificios iniciales: Vivienda de Bronce y Cofradía de Magos. Unidades: 1 manada de Bronce de mayor coste.
   - Reglas: Visitar obeliscos otorga 1 Ficha de Moral. Se puede defender la ciudad con el mazo de fuerza y magia.
   - Evento contrarreloj: Rondas 4 y 9 (+1 Punto de Movimiento).
   - Victoria: Controlar 7 losetas al final de una ronda o mantener capturada la ciudad enemiga durante 2 rondas consecutivas.

2. CARPE DIEM (2 Jugadores, 14 Rondas):
   - Narrativa: Lucha directa por reclamar el trono vacante conquistando la Ciudad Aleatoria central.
   - Suministros: 10 Oro, 3 Materiales, 1 Objeto de Valor.
   - Edificios iniciales: Vivienda de Bronce y Cofradía de Magos. Unidades: 1 manada de Bronce de mayor coste.
   - Reglas: Un héroe en la loseta central no puede entrar directamente en la loseta inicial enemiga.
   - Evento contrarreloj: Rondas 3, 6 y 9 (+1 Punto de Movimiento para el héroe del segundo jugador).
   - Victoria: Conquistar la Ciudad Aleatoria situada en la loseta central antes del final de la ronda 14.`
  },

  // =========================================================================
  // LIBRO DE TORNEO (TOURNAMENT BOOK)
  // =========================================================================
  {
    id: "torneo-01-construccion-y-puntuacion",
    title: "Torneo 1. Modo Torneo: Construcción del Mapa de Escenario y Sistema de Puntuación (PV)",
    category: "modes",
    content: `REGLAMENTO OFICIAL DEL MODO TORNEO (COMPETITIVO 1v1):

PASOS PARA CONSTRUIR EL MAPA DE ESCENARIO DE TORNEO:
1. Determinación de Orden Inicial: Ambos jugadores lanzan 2 dados de recurso. El jugador con mayor cantidad de recursos resultantes elige quién empieza y quién es segundo. El segundo jugador recibe 1 Ficha de Moral al comienzo de la partida.
2. Losetas Centrales: Colocar las losetas centrales asignadas al escenario en el centro del mapa. El jugador inicial las descubre y las rota libremente.
3. Colocación de Losetas Cercanas: Comenzando por el segundo jugador, añaden por turnos sus losetas cercanas una a una.
   a) Siempre que sea posible, las losetas cercanas deben situarse adyacentes a las centrales.
   b) En cada escenario, al menos 2 losetas cercanas deben incluir un obelisco.
4. Losetas Iniciales: El jugador inicial coloca su loseta inicial adyacente a al menos una cercana. El segundo jugador coloca la suya en el extremo opuesto del mapa (la posición más alejada por número de losetas).
5. Colocación de Losetas Lejanas: Empezando por el jugador inicial, añaden por turnos sus losetas lejanas. La primera loseta lejana de cada jugador debe colocarse adyacente a su propia loseta inicial.
6. Rotación Libre: Todas las losetas se colocan descubiertas y pueden rotarse libremente según las reglas generales de colocación.

SISTEMA OFICIAL DE PUNTUACIÓN (PUNTOS DE VICTORIA - PV):
Al llegar al límite de rondas o al cumplirse la condición de victoria del escenario, la partida finaliza y se contabilizan los PV:
• +4 PV por derrotar al Héroe Principal enemigo (una sola vez por escenario).
• +2 PV por derrotar al Héroe Secundario enemigo.
• +1 PV por cada mina o asentamiento bajo tu control.
• +1 PV por cada edificio construido en tus ciudades.
• +1 PV por cada 2 cartas de artefacto en tu mazo de fuerza y magia.
• +1 PV por cada nivel de experiencia de tu Héroe Principal.
• +X PV por objetivos adicionales especificados en el escenario.
Ganador: El jugador con mayor puntuación acumulada de PV.`
  },
  {
    id: "torneo-02-reglas-adicionales-opcionales",
    title: "Torneo 2. Reglas Adicionales, Cartas Excluidas, Observatorio de Caoba y Reglas Opcionales",
    category: "modes",
    content: `REGLAS ADICIONALES Y OPCIONALES PARA ESCENARIOS DE TORNEO:

REGLAS ADICIONALES DE TORNEO (Aplica a todos los escenarios competitivos):
1. Cartas Prohibidas/Retiradas de la partida:
   - Carta de habilidad: Diplomacia (se elimina del mazo).
   - Carta de artefacto: Reloj de la Hora Aciaga (se elimina del mazo).
2. Regla de Mulligan Inicial: Al comienzo de la primera ronda, cada jugador puede devolver la mano inicial robada a su mazo de fuerza y magia, barajarlo y robar una mano completamente nueva.
3. Bonificador del Segundo Jugador: El segundo jugador empieza con 1 Ficha de Moral activa.
4. Acción Adicional con Ficha de Moral: Durante la acción 'Buscar', puedes gastar 1 Ficha de Moral para descartar todas las cartas recién robadas y volver a buscar el mismo número de cartas en los mazos de artefactos, hechizos o habilidades.
5. Puntuación de Artefactos Retirados: Cualquier artefacto retirado o consumido se coloca junto a tu mazo de fuerza y magia y contabiliza para la puntuación final de PV.
6. Nuevo Lugar del Mapa - OBSERVATORIO DE CAOBA (Visitable):
   - Al visitarlo, elige 1 loseta adyacente que no contenga un héroe y rotala como prefieras, manteniendo siempre una orientación válida según las reglas de colocación.

REGLAS OPCIONALES DE TORNEO (Ajuste de Mazos por Rango de Zona):
1. División del Mazo de Artefactos (Menores → Mayores → Reliquias):
   - Losetas Iniciales y Lejanas: Solo se obtienen artefactos Menores.
   - Losetas Cercanas: Se obtienen artefactos Mayores y Reliquias.
   - Losetas Centrales: Se pueden obtener artefactos Menores, Mayores y Reliquias.
2. División del Mazo de Hechizos (Básicos vs Avanzados):
   - Nota: Flecha Mágica cuenta como hechizo básico.
   - Losetas Iniciales y Lejanas: Solo se consiguen hechizos Básicos.
   - Losetas Cercanas y Centrales: Se pueden conseguir hechizos Básicos y Avanzados.`
  },
  {
    id: "torneo-03-escenarios-oficiales",
    title: "Torneo 3. Escenarios Oficiales de Torneo: 'Última Oportunidad', 'La Gran Carrera' y 'Herencia Inesperada'",
    category: "modes",
    content: `ESCENARIOS OFICIALES DE TORNEO (1v1):

1. ÚLTIMA OPORTUNIDAD (1v1, Duración: 8 Rondas):
   - Narrativa: Conflicto directo decretado por el rey para establecer un señor definitivo.
   - Preparación: 2 iniciales (I), 4 cercanas (IV-V con 2 obeliscos), 4 lejanas (II-III).
   - Suministros: 10 Oro, 3 Materiales, 1 Objeto de Valor. Ingresos: 10 Oro, 0 Mat, 0 Obj.
   - Edificios y Tropas: Vivienda de Bronce y 3 "unas pocas" de Bronce.
   - Regla Especial: Visitar un obelisco otorga 1 Ficha de Moral.
   - Condición de Victoria: Derrotar al Héroe Principal del oponente. Si la ronda 8 concluye sin victoria directa, el ganador se decide por recuento de Puntos de Victoria (PV).

2. LA GRAN CARRERA (1v1, Duración: 11 Rondas):
   - Narrativa: Competición por alcanzar la torre donde la princesa está recluida y controlar la Utopía del Dragón.
   - Preparación: 2 iniciales (I), 4 cercanas (IV-V con 2 obeliscos), 1 central (VII-VIII con Utopía del Dragón), 4 lejanas (II-III).
   - Suministros: 10 Oro, 3 Materiales, 1 Objeto de Valor. Ingresos: 10 Oro, 0 Mat, 0 Obj.
   - Regla Especial: Al visitar un obelisco elige 1 de 3 opciones: (a) Ganar 1 Ficha de Moral, (b) Lanzar 1 dado de recurso, o (c) Lanzar 1 dado de tesoro.
   - Puntuación Adicional: Controlar la Utopía del Dragón al final otorga +3 PV directos.
   - Condición de Victoria: Capturar por primera vez la Utopía del Dragón activa 1 ronda final extra antes del recuento de PV.

3. HERENCIA INESPERADA (1v1, Duración: 14 Rondas):
   - Narrativa: Conflicto territorial tras heredar un castillo vecino disputado.
   - Preparación: 2 iniciales (I), 4 cercanas (2 con obelisco, 2 sin obelisco), 2 centrales (VI-VII con zona del Grial y Utopía del Dragón), 6 lejanas (II-III).
   - Suministros: 10 Oro, 3 Materiales, 1 Objeto de Valor. Ingresos: 10 Oro, 0 Mat, 0 Obj.
   - Regla Especial: Al visitar un obelisco elige 1 de 2 opciones: (a) Lanzar 1 dado de recurso + 1 dado de tesoro y elegir 1 resultado, o (b) Buscar (2) en el mazo de artefactos.
   - Acceso al Grial: Requiere visitar al menos 2 obeliscos diferentes o que el Grial haya sido tomado por un héroe. Excavar el Grial consume 2 PM.
   - Puntuación Adicional: +3 PV por controlar la Utopía del Dragón / +3 PV por poseer la ficha del Grial.
   - Condición de Victoria: Capturar la Utopía del Dragón y reclamar el Grial activa 1 ronda final extra antes del recuento definitivo de PV.`
  },
  {
    id: "torneo-04-creador-escenarios",
    title: "Torneo 4. Creador de Escenarios Personalizados (Guía de 13 Pasos)",
    category: "modes",
    content: `GUÍA PASO A PASO PARA EL DISEÑO DE ESCENARIOS PERSONALIZADOS:

PASOS DE CREACIÓN DE UN ESCENARIO:
1. Título y Descripción: Asignar un nombre temático y contexto narrativo.
2. Cantidad de Jugadores: Definir el número de participantes (2 a 3 en juego base, ampliable con expansiones).
3. Duración del Escenario: Establecer el límite de rondas en el marcador (recomendado máximo 16 rondas).
4. Diseño e Inventario del Mapa: Asignar al menos 1 loseta inicial (I), 2 cercanas (IV-V) y 2 lejanas (II-III) por jugador para asegurar acceso simétrico a los recursos.
5. Recursos Iniciales: Definir la reserva inicial (estándar: 15 Oro, 3 Materiales, 1 Objeto de Valor).
6. Ingresos Iniciales: Fijar los ingresos por ronda (estándar: «10» Oro, «0» Materiales, «0» Objetos de Valor).
7. Edificios Iniciales: Determinar con qué construcciones urbanas arranca cada jugador (ej. Vivienda Nivel 1, Cofradía de Magos, Alcaldía).
8. Unidades Iniciales: Seleccionar tropas de partida (estándar: 3 "unas pocas" de Bronce).
9. Bonificadores Iniciales: Asignar ventajas iniciales en campañas o escenarios asimétricos.
10. Reglas Especiales del Escenario: Especificar mecánicas únicas en obeliscos, Utopía del Dragón o zonas mágicas.
11. Condiciones de Victoria: Determinar los criterios de triunfo (eliminación, recolección de recursos, control de zonas o recuento de PV).
12. Marcador de Rondas: Establecer resoluciones al alcanzar el límite máximo de tiempo.
13. Eventos Contrarreloj: Diseñar disparadores automáticos en rondas clave (ej. incremento de dificultad, eventos climáticos o refuerzos).`
  },

  // =========================================================================
  // EXPANSIÓN CAMPO DE BATALLA (BATTLEFIELD)
  // =========================================================================
  {
    id: "batalla-01-componentes",
    title: "Campo de Batalla 1. Lista de Componentes de la Expansión Campo de Batalla",
    category: "components",
    content: `COMPONENTES INCLUIDOS EN LA EXPANSIÓN CAMPO DE BATALLA (BATTLEFIELD):

TABLEROS Y REGLAMENTOS:
- 1 Tablero de Campo de Batalla (cuadrícula hexagonal ampliada)
- 1 Libro de reglas de Campo de Batalla (16 páginas)
- 2 Ayudas de juego de consulta rápida

OBSTÁCULOS Y FICHAS:
- 10 Fichas de obstáculo a doble cara (Efecto, Obstáculo, Muralla/Puerta)
- 1 Ficha de iniciativa (para desempatar turnos de unidades en combate)

MAZOS Y CARTAS:
- 50 Cartas de aventura (tipos Combate y Evento)
- 10 Cartas de moral positiva
- 10 Cartas de moral negativa`
  },
  {
    id: "batalla-02-preparacion-y-mazos-moral",
    title: "Campo de Batalla 2. Preparación y Mazos de Moral Positiva/Negativa",
    category: "combat",
    content: `PREPARACIÓN DEL CAMPO DE BATALLA Y SISTEMA DE MAZOS DE MORAL:

PREPARACIÓN GENERAL:
- En los modos Aventura y Escaramuzas, se retiran de la partida las cartas de habilidad 'Diplomacia' y 'Logística'.
- Se coloca el tablero de campo de batalla entre los jugadores, con los mazos de aventura y moral cerca del marcador de rondas.
- Puesta a punto de recursos iniciales en Modo Aventura: 15 Oro, 3 Materiales, 1 Objeto de Valor. Ingresos: 10 Oro, 0 Materiales, 0 Objetos de Valor.

MAZOS DE MORAL (POSITIVA Y NEGATIVA):
Sustituyen a las fichas de moral en los modos Aventura y Escaramuzas (u opcionalmente en partidas normales):
1. Mazo de Moral Positiva:
   - Al ganar moral positiva, descarta 1 carta de moral negativa activa. Si no tienes, busca (2) en el mazo de moral positiva, pon 1 boca arriba junto a tu héroe y devuelve la otra al fondo del mazo.
   - Máximo de 2 cartas de moral positiva activas simultáneamente. Se resuelven cuando lo desees para aplicar sus efectos y se devuelven al fondo del mazo.
2. Mazo de Moral Negativa:
   - Al recibir moral negativa, descarta 1 carta de moral positiva activa por cada carta negativa que debas robar. Si no posees moral positiva, roba del mazo negativo y déjala boca arriba junto a tu héroe.
   - Se activan obligatoriamente cuando se produce la condición desencadenante indicada en la carta. Las cartas del mazo negativo nunca se agotan.`
  },
  {
    id: "batalla-03-modo-aventura",
    title: "Campo de Batalla 3. Modo Aventura: Rondas, Cartas de Aventura y Rondas Astrológicas",
    category: "modes",
    content: `REGLAS DEL MODO AVENTURA (SUSTITUCIÓN DE MAPA POR MAZO):

MODO AVENTURA (1v1 Competitivo):
- Sustituye la exploración del mapa de losetas por un mazo de cartas de Aventura y permite controlar hasta 7 unidades en el ejército.
- Duración según tamaño elegido: Pequeño (9 rondas), Medio (13 rondas) o Grande (16 rondas).

ESTRUCTURA DE LAS RONDAS DE AVENTURA:
1. Selección de Cartas: El jugador inicial roba 3 cartas de aventura, escoge 1 para sí, pasa las 2 restantes al enemigo (que escoge 1 y descarta la otra).
2. Resolución o Reserva: Cada jugador resuelve su carta escogida o la guarda boca abajo en su carta de héroe (máximo 1 carta guardada por jugador).
3. Cartas de Efecto Directo: Cartas (incluidas especialidades de héroe) que otorgan recursos, movimiento o descuentos se usan 1 vez y se retiran.
4. Rondas Astrológicas: En lugar de revelar anuncio astrológico, los jugadores eligen entre:
   a) Aumentar en +1 nivel cualquiera de sus marcadores de ingresos.
   b) Lanzar 1 dado de recurso, aumentar en +1 nivel el ingreso correspondiente y cobrar la ganancia básica inmediata (5 Oro, 2 Materiales o 1 Objeto de Valor).

RESOLUCIÓN DE CARTAS DE AVENTURA:
• Cartas de Combate: Elige nivel de poder de combate objetivo. Selecciona 2 unidades de tu ejército, suma sus ataques y lanza 2 dados de ataque rojos.
  - Éxito (Total >= Poder): Ganas la recompensa básica + la recompensa de batalla.
  - Fracaso (Total < Poder): Ganas solo la recompensa básica y colocas 1 ficha de Parálisis/Aturdido en 1 de las unidades participantes.
• Cartas de Evento: Aplica de inmediato el efecto descrito en la carta (los eventos de obelisco escalan con cada carta de obelisco jugada).

CONDICIÓN DE VICTORIA EN MODO AVENTURA:
Al finalizar la última ronda, se disputa la batalla táctica en el tablero de campo de batalla. Gana el jugador que elimine a todas las unidades desplegadas del oponente.`
  },
  {
    id: "batalla-04-modo-escaramuzas",
    title: "Campo de Batalla 4. Modo Escaramuzas: Plantillas Tácticas (Grande, Medio y Pequeño)",
    category: "modes",
    content: `REGLAS DEL MODO ESCARAMUZAS (BATALLA TÁCTICA DIRECTA):

En el Modo Escaramuzas se omite la fase de aventura y se entra de forma inmediata al combate utilizando plantillas predeterminadas según la escala:

PLANTILLAS Y CONFIGURACIÓN DE MAZOS:
1. Escaramuza GRANDE (Héroe Nivel 7):
   - Incluye todas las cartas de especialidad de tu héroe.
   - Roba 6 cartas de habilidad (retira 2), 4 cartas de artefacto (retira 1), 3 cartas de hechizo si es de Fuerza o 5 si es de Magia.
   - Despliega tus 7 cartas de unidad por la cara 'Manada'.

2. Escaramuza MEDIA (Héroe Nivel 5):
   - Incluye cartas de especialidad de Nivel I y IV.
   - Roba 4 cartas de habilidad (retira 1), 3 cartas de artefacto (retira 1), 2 cartas de hechizo si es de Fuerza o 4 si es de Magia.
   - Despliega tus unidades de Bronce y Plata por la cara 'Manada' (el resto por 'Unas pocas').

3. Escaramuza PEQUEÑA (Héroe Nivel 3):
   - Incluye carta de especialidad de Nivel I.
   - Roba 3 cartas de habilidad (retira 1), 2 cartas de artefacto (retira 1), 1 carta de hechizo si es de Fuerza o 2 si es de Magia.
   - Despliega tus unidades de Bronce y Plata por la cara 'Unas pocas'.

CONDICIÓN DE VICTORIA EN ESCARAMUZAS:
Derrotar a todas las unidades desplegadas por el oponente en el tablero de campo de batalla.`
  },
  {
    id: "batalla-05-tactica-y-asaltos",
    title: "Campo de Batalla 5. Reglas de Combate en Tablero, Obstáculos, Iniciativa y Asedio",
    category: "combat",
    content: `REGLAS TÁCTICAS DE COMBATE EN EL TABLERO DE CAMPO DE BATALLA:

DESPLIEGUE Y OBSTÁCULOS:
- Robar Mano: Roba cartas de tu mazo de fuerza y magia hasta tu límite de mano.
- Colocación de Obstáculos: Fichas a doble cara (Efecto, Obstáculo, Muralla/Puerta). Se colocan por turnos empezando por el atacante/jugador inicial. Ningún obstáculo puede ser adyacente a otro obstáculo ni a la zona de despliegue de un jugador. Las miniaturas cuentan como obstáculos.
- Muro de Fuego: Se coloca el obstáculo de efecto Muro de Fuego en la casilla y la carta de hechizo cerca del tablero.

MODIFICACIONES AL SISTEMA DE COMBATE:
1. Movimiento de Unidades: La capacidad de movimiento en casillas es igual a la Iniciativa de la unidad (ej. Iniciativa 8 = movimiento de hasta 8 casillas). Al terminar su activación, se marca con un cubo de facción.
2. Unidades a Distancia: Pueden moverse y atacar. Sufren penalización de combate (-1 al dado o tirar 2 dados y elegir el peor) si atacan a unidades adyacentes O si la unidad objetivo está a 8 o más casillas de distancia.
3. Mazo de Fuerza y Magia: El límite de cartas avanzadas jugables se aplica por cada ronda de combate. Al final de la ronda de combate, roba 2 cartas de tu mazo y recupera 1 uso de Experto (sin sobrepasar el límite del héroe).
4. Ficha de Iniciativa: Se entrega al jugador atacante/inicial al inicio del combate. Se usa para desempatar la activación cuando unidades de ambos bandos tienen la misma iniciativa (actúa primero quien posee la ficha). Al activarse todas las unidades de esa iniciativa, la ficha pasa al oponente.

REGLAS DE ASEDIO EN EL TABLERO DE BATALLA:
- Solo se colocan fichas de murallas y puertas en el tablero.
- Las unidades del defensor pueden atravesar las puertas como casillas libres.
- Para destruir murallas o puertas, una unidad atacante debe golpearlas desde una casilla adyacente.`
  },

  // =========================================================================
  // RESPUESTA ASTROLÓGICA (FAQ Y COMENTARIOS DE LOS DISEÑADORES)
  // =========================================================================
  {
    id: "faq-01-mecanicas-y-heroes",
    title: "FAQ Diseñadores 1. Mecánicas de Juego Generales y Lógica de Héroes",
    category: "general",
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
    category: "combat",
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
    category: "combat",
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
    id: "faq-04-solitario-y-diferencias-pc",
    title: "FAQ Diseñadores 4. Modo Solitario (IA) y Diferencias Clave PC vs Juego de Mesa",
    category: "general",
    content: `RESPUESTAS Y ACLARACIONES OFICIALES DE LOS DISEÑADORES (SOLITARIO Y DIFERENCIAS PC):

REGLAS DEL MODO SOLITARIO Y HÉROES DE IA:
• Experiencia por Derrotar IA: Solo recibes la experiencia y recompensas indicadas explícitamente en el escenario. Si no se indica nada, no ganas EXP.
• Estado Especial de la IA: Se refiere a estados de alteración negativos infligidos a las tropas del jugador (ej. Parálisis/Aturdido).
• Cartas de Ataque/Defensa de la IA: Se colocan directamente sobre la carta de unidad del ejército de la IA afectada y actúan como un efecto continuo hasta su resolución.
• Rendición en Campaña Solitario: No es posible rendirse contra la IA. Retirarse de un combate contra tropas neutrales cuenta como derrota en la campaña.

DIFERENCIAS PRINCIPALES ENTRE EL VIDEOJUEGO DE PC Y EL JUEGO DE MESA:
1. Reclutamiento desde Cualquier Lugar: En el juego de mesa NO es necesario regresar a la ciudad para reclutar unidades. Puedes reclutar desde cualquier zona del mapa una vez por ronda si tienes la ficha de población disponible.
2. Cabaña de la Bruja: A diferencia de PC, cada Cabaña de la Bruja en la loseta solo se puede visitar 1 SOLA VEZ por partida por jugador.
3. Héroes Adicionales: El número máximo de héroes adicionales reclutables es 1 (un único Héroe Secundario).
4. Ficha de Moral Positiva: En el juego de mesa, la moral positiva no otorga un turno/activación extra completo a la unidad; otorga acciones estratégicas especiales de la lista de reglas.
5. Habilidad Resistencia: Puede utilizarse para anular cualquier hechizo en combate, incluidos hechizos potenciadores que el enemigo lance sobre sus propias tropas.
6. Habilidad de Enanos: Su resistencia mágica se activa con cualquier hechizo o especialidad que los tome como objetivo, incluso si lo lanza su propio jugador.
7. Restricciones de Hechizos por Facción: No existen restricciones de facción para aprender o lanzar hechizos (salvo la habilidad exclusiva de Nigromancia).
8. Categoría de Unidades a Distancia: Si una unidad enemiga se coloca adyacente, la unidad conserva su categoría a distancia, pero queda restringida a realizar ataques cuerpo a cuerpo adyacentes o mover.
9. Límite de Hechizos por Ronda: El límite estándar es de 1 hechizo por ronda de combate (ampliable mediante cartas de Conocimiento Experto o habilidades).
10. Reutilización de Cartas y Artefactos: Cada carta se usa 1 vez por ciclo. Al agotarse el mazo de fuerza y magia, se baraja el descarte formando un mazo nuevo, permitiendo volver a robar y usar las cartas.`
  },

  // =========================================================================
  // LIBRO DE MISIONES DEL JUEGO BASE (MISSION BOOK)
  // =========================================================================
  {
    id: "misiones-01-preparacion-y-modos",
    title: "Misiones 1. Preparación del Escenario y Reglas Universales de Enfrentamiento",
    category: "modes",
    content: `PREPARACIÓN GENERAL DEL ESCENARIO Y MODO ENFRENTAMIENTO:

PASOS PARA PREPARAR UN ESCENARIO:
1. Elección de Escenario: Seleccionar un escenario oficial del libro de misiones o diseñar uno personalizado.
2. Selección de Facciones y Componentes: Cada jugador escoge su facción y reúne su carta de héroe, tablero de ciudad, miniaturas, cartas de unidad, especialidades y cubos de facción.
3. Disposición del Mapa: Ensamblar las losetas de mapa indicadas en el diagrama del escenario (incluyendo reservas individuales lejanas II-III si corresponde).
4. Recursos e Ingresos Iniciales: Ajustar los marcadores de recursos e ingresos según la ficha del escenario.
5. Edificios y Tropas Iniciales: Colocar los edificios de inicio en el tablero de ciudad y preparar el mazo de ejército.
6. Eventos Contrarreloj: Colocar cubos negros en las casillas correspondientes del marcador de rondas. Al alcanzar la ronda, se activa y retira el cubo.
7. Jugador Inicial: Determinar qué jugador comienza la partida.

CONDICIONES UNIVERSALES DE VICTORIA Y ELIMINACIÓN EN MODO ENFRENTAMIENTO (2-3 JUGADORES):
• Pérdida por Control Territorial: Si un jugador no controla ninguna ciudad ni asentamiento durante 3 rondas consecutivas, queda inmediatamente eliminado.
• Pérdida en Asedio: Si tu Héroe Principal es derrotado defendiendo tu ciudad asediada y no posees otras ciudades o asentamientos, quedas eliminado.
• Victoria por Último Superviviente: Si todos los oponentes quedan eliminados, ganas la partida.
• Victoria por Cubos de Facción (3+ Jugadores): Si consigues un cubo de facción de cada oponente activo (derrotando a sus héroes o capturando sus ciudades), ganas la partida.`
  },
  {
    id: "misiones-02-escenarios-enfrentamiento",
    title: "Misiones 2. Escenarios de Enfrentamiento: 'El Retiro de los Monjes', 'Un Mundo Feliz' y 'Todos para Uno'",
    category: "modes",
    content: `ESCENARIOS COMPETITIVOS DEL MODO ENFRENTAMIENTO:

1. EL RETIRO DE LOS MONJES (2 Jugadores, Duración: 7 Rondas):
   - Preparación del Mapa: 2 losetas iniciales (I), 2 cercanas (IV-V), 2 lejanas (II-III).
   - Recursos e Ingresos: Inicio con 15 Oro, 4 Materiales, 2 Objetos de Valor. Ingresos: «15» Oro, «2» Materiales, «1» Objeto de Valor.
   - Edificios y Tropas: Vivienda Nivel 1, Ciudadela, Cofradía de Magos. Ejército: 2 "unas pocas" de Bronce con mayor coste.
   - Reglas Especiales:
     • Cofradía inicial permite buscar (3) una vez (en vez de buscar (2) dos veces).
     • Se prohíbe reclutar Héroe Secundario.
     • En rondas de recursos, elige entre +2 Materiales o +1 Objeto de Valor adicional.
     • Al visitar un obelisco por 1ª vez, lanza 2 dados de recurso y añade 1 resultado.
     • Al defender tu ciudad de facción, no pagas transporte para trasladar el ejército y puedes usar tu mazo de fuerza y magia.
   - Victoria: Derrotar al héroe enemigo en combate. En la ronda 7, si no hay vencedor, combate final automático (el de mayor EXP ataca).

2. UN MUNDO FELIZ (2-3 Jugadores, Duración: 8-9 Rondas):
   - Preparación (2j): 2 iniciales, 2 cercanas, 4 lejanas (2 por jugador).
   - Preparación (3j): 3 iniciales, 3 cercanas, 6 lejanas (2 por jugador).
   - Recursos e Ingresos: Inicio con 15 Oro, 3 Materiales, 1 Objeto de Valor. Ingresos: «10» Oro, «2» Materiales, «1» Objeto de Valor.
   - Edificios y Tropas: Vivienda Nivel 1. Ejército: 1 "unas pocas" de Bronce de mayor coste + 1 "Manada" de Bronce de menor coste.
   - Reglas Especiales: Visitar obelisco otorga tirada de 2 dados de recurso (elige 1). Derrotar héroe enemigo otorga 20 Oro.
   - Evento Contrarreloj (Rondas 3, 6, 9): Refresca (retira cubos negros) de todos los molinos y molinos de agua.
   - Victoria: Controlar 5 o más minas al final de una ronda activa 1 ronda final. Gana quien controle más minas al terminar.

3. TODOS PARA UNO (3 Jugadores, Duración: 11 Rondas):
   - Preparación: 3 iniciales, 6 cercanas (3 con obelisco), 1 central con Grial, 6 lejanas (2 por jugador).
   - Recursos e Ingresos: Inicio con 10 Oro, 0 Mat, 0 Obj. Ingresos: «15» Oro, «2» Mat, «1» Obj.
   - Edificios y Tropas: Vivienda Nivel 1, Alcaldía, Ciudadela. Ejército: 1 "unas pocas" de Bronce mayor coste + 1 "unas pocas" de Plata menor coste. Héroe empieza a Nivel 3 y busca (2) dos veces en mazo de habilidades.
   - Reglas Especiales: Obelisco lanza 2 dados de tesoro (elige 1). Capturar ciudad enemiga transfiere sus ingresos e inflige +15 Oro, +2 Mat, +1 Obj al conquistador. Derrotar héroe principal da 10 Oro. Perder héroe principal implica eliminación directa.
   - Acceso al Grial: Requiere 2 obeliscos y 2 PM en la zona.
   - Victoria: Depositar el Grial en tu ciudad o ser el último jugador restante en pie.`
  },
  {
    id: "misiones-03-modo-cooperativo",
    title: "Misiones 3. Modo Cooperativo y Escenarios: 'Los Campeones de Gelea' y 'Misión Maldita'",
    category: "modes",
    content: `REGLAS GENERALES Y ESCENARIOS COOPERATIVOS:

MECÁNICAS COOPERATIVAS GENERALES (2-3 Jugadores):
- Todos los jugadores están aliados para superar los objetivos del escenario.
- Las unidades neutrales en combate son gestionadas mediante las reglas de la IA del modo solitario.
- Los Mercadillos permiten transferir recursos comprados o vendidos a cualquier otro jugador aliado.
- Prohibición de Agresión: No se permite atacar héroes aliados ni capturar minas/asentamientos de otros jugadores.

1. LOS CAMPEONES DE GELEA (2-3 Jugadores, Duración: 11 Rondas):
   - Preparación: 2-3 iniciales, 4-6 cercanas (con obeliscos), 1 central con Utopía del Dragón, 4-6 lejanas reservadas.
   - Recursos e Ingresos: Inicio con 15 Oro, 3 Mat, 1 Obj. Ingresos: «10» Oro, «0» Mat, «0» Obj.
   - Edificios y Tropas: Vivienda Nivel 1 y 3 "unas pocas" de Bronce.
   - Reglas Especiales: Obelisco lanza 2 dados de tesoro (elige 1). La Utopía del Dragón exige haber visitado al menos 2 obeliscos (en 2j) o 3 obeliscos (en 3j). Al visitar la Utopía, coloca 1 cubo de tu facción.
   - Evento Contrarreloj (Rondas 4 y 8): Refresca molinos y molinos de agua.
   - Victoria: Colocar un cubo de facción de cada jugador en la Utopía del Dragón antes de que concluya la ronda 11.

2. MISIÓN MALDITA (2-3 Jugadores, Ajustable según Dificultad):
   - Duración por Dificultad: Fácil (8 rondas), Normal (10 rondas), Difícil (12 rondas), Imposible (14 rondas).
   - Recursos e Ingresos: Inicio con 6 Oro, 2 Mat, 0 Obj. Ingresos: «10» Oro, «2» Mat, «1» Obj.
   - Edificios y Tropas: Vivienda Bronce, Vivienda Plata, Ciudadela. Ejército: 1 "unas pocas" de Plata con menor coste.
   - Mazo Personalizado de la Utopía del Dragón:
     a) Fácil: 5 Bronce, 5 Plata, 3 Oro, 1 Azur
     b) Normal: 4 Bronce, 5 Plata, 3 Oro, 2 Azur
     c) Difícil: 2 Bronce, 5 Plata, 5 Oro, 3 Azur
     d) Imposible: 1 Bronce, 5 Plata, 7 Oro, 4 Azur
   - Reglas de Combate en Utopía: Al entrar, se roban 5 cartas del mazo de la Utopía. Las tropas derrotadas van a su mazo normal; las supervivientes se devuelven al mazo de la Utopía y se barajan. Prolongar combate contra Azur cuesta 1 PM por ronda.
   - Victoria: Eliminar por completo a todas las unidades neutrales del mazo personalizado de la Utopía del Dragón.`
  },
  {
    id: "misiones-04-modo-campana-castillo",
    title: "Misiones 4. Modo Campaña en Solitario y Campaña del Castillo ('Larga Vida a la Reina')",
    category: "modes",
    content: `REGLAS DE CAMPAÑA EN SOLITARIO Y CAMPAÑA DEL CASTILLO:

REGLAS DE CAMPAÑA EN SOLITARIO:
- Héroes Enemigos (IA): Controlados mediante el Mazo de la IA (Magia, Fuerza, Habilidad) y Mazo de Hechizos de la IA. Las habilidades no se descartan al usarse.
- Ingresos Estándar: «10» Oro, «0» Materiales, «0» Objetos de Valor.
- Transición entre Escenarios: Conservas las cartas de característica, la especialidad Nivel 1 y escoges 5 cartas del mazo actual para el siguiente escenario. El héroe vuelve a Nivel 1 de experiencia.

CAMPAÑA DEL CASTILLO: 'LARGA VIDA A LA REINA' (Catherine Ironfist):

MISIÓN 1: DE REGRESO AL HOGAR (8 Rondas):
- Preparación: Catherine (Castillo) desembarca para combatir la invasión de Mazmorra. Límite de nivel de héroe: Nivel 4.
- Reglas Especiales: No se pueden construir edificios en la ciudad, pero se permite reclutar y reforzar unidades de Bronce y Plata libremente.
- Evento 'Dos Caminos':
  a) Camino Verde (Praderas): Tránsito normal, bonificadores estándar.
  b) Camino Nevado: Terreno difícil (-1 PM de movimiento), pero duplica todos los bonificadores de zonas visitadas.
- Cueva Subterránea de Mazmorra: Entrar requiere superar encuentros con cubos violetas (dificultad = Nivel de héroe + trogloditas). Debes ganar al menos 2 cubos violetas para acceder a la ciudad.
- Victoria: Capturar la ciudad de Mazmorra y liberar a Rion.

MISIÓN 2: ÁNGELES GUARDIANES (10 Rondas):
- Selección de Héroe: Catherine o Rion. Límite de nivel: Nivel 5.
- Enemigos de la IA: Primer Señor de Mazmorra y Segundo Señor de Mazmorra (esperando en zonas cercanas).
- Asentamiento Fair Feather: Al combatir contra neutrales en esta zona, añade una manada de medusas. Al capturarlo, construyes el edificio 'Gloria de Erathia' gratis.
- Victoria: Derrotar a ambos héroes enemigos de la IA antes de la ronda 10.

MISIÓN 3: LA LIBERACIÓN DE STEADWICK (13 Rondas):
- Preparación: Héroe empieza a Nivel 2. Producción extra +2 Materiales.
- Eventos Contrarreloj (Invasores en Marcha): Héroes atacantes de Mazmorra aparecen en las rondas 5 y 8 y avanzan hacia tu ciudad.
- Rescate del General Kendal (Asentamiento): Vencer combate te otorga un Héroe Secundario gratis (o 10 Oro) + Ficha de Moral (o buscar 2 artefactos).
- Enfrentamiento Final: Atacar el castillo ocupado de Steadwick en la loseta central de Utopía del Dragón contra una guarnición masiva (Medusas, Minotauros, Mantícoras, Dragones Negros).
- Victoria: Liberar la Utopía del Dragón de Steadwick antes del final de la ronda 13.`
  },
  {
    id: "misiones-05-tablas-dificultad-y-comercio",
    title: "Misiones 5. Tablas Oficiales de Referencia: Comercio de Recursos y Dificultad de Zonas (Niveles I-VII)",
    category: "general",
    content: `TABLAS DE REFERENCIA OFICIALES DEL LIBRO DE MISIONES:

TABLA DE COMERCIO (Ratios en Mercadillos):
• Vender Oro (6 Oro): Compras 1 Objeto de Valor.
• Vender Oro (2 Oro): Compras 1 Material.
• Vender Objeto de Valor (1 Obj): Compras 3 Oro.
• Vender Objeto de Valor (1 Obj): Compras 2 Materiales.
• Vender Materiales (1 Mat): Compras 1 Oro.
• Vender Materiales (3 Mat): Compras 1 Objeto de Valor.

TABLA DEL NIVEL DE DIFICULTAD DE LAS ZONAS (NIVELES I A VII):
Determina el número y tipo de cartas de unidad neutral que se roban al iniciar combate en una zona según la dificultad elegida:

1. Nivel I:
   - Fácil / Normal: 1 Bronce
   - Difícil: 2 Bronce
   - Imposible: 3 Bronce

2. Nivel II:
   - Fácil / Normal: 2 Bronce
   - Difícil: 3 Bronce
   - Imposible: 2 Bronce, 1 Plata

3. Nivel III:
   - Fácil: 1 Bronce, 1 Plata
   - Normal: 2 Bronce, 1 Plata
   - Difícil: 1 Bronce, 2 Plata
   - Imposible: 3 Plata

4. Nivel IV:
   - Fácil: 2 Bronce, 1 Plata
   - Normal: 1 Bronce, 2 Plata
   - Difícil: 3 Plata
   - Imposible: 2 Plata, 1 Oro

5. Nivel V:
   - Fácil: 2 Bronce, 1 Plata, 1 Oro
   - Normal: 1 Bronce, 2 Plata, 1 Oro
   - Difícil: 2 Plata, 2 Oro
   - Imposible: 1 Plata, 3 Oro

6. Nivel VI:
   - Fácil: 2 Bronce, 2 Plata, 1 Oro
   - Normal: 1 Bronce, 2 Plata, 2 Oro
   - Difícil: 2 Plata, 3 Oro
   - Imposible: 1 Plata, 4 Oro

7. Nivel VII (Utopía / Zonas Supremas):
   - Fácil: 1 Azur
   - Normal: 2 Azur
   - Difícil: 2 Azur, 1 Oro
   - Imposible: 2 Azur, 2 Oro

BONIFICADORES INICIALES SEGÚN DIFICULTAD DE ESCENARIO:
• Fácil: 2 tiradas de dado de recurso O 2 tiradas de dado de tesoro.
• Normal: 2 tiradas de dado de recurso (elige 1) O Buscar (2) en mazo de tesoros.
• Difícil: 1 tirada de dado de recurso O roba 1 artefacto Menor.
• Imposible: Sin bonificadores iniciales (n/a).`
  },

  // =========================================================================
  // SUPLEMENTO DEL REGLAMENTO - ESCENARIO INTRODUCTORIO TUTORIAL
  // =========================================================================
  {
    id: "suplemento-01-descripcion-y-preparacion",
    title: "Suplemento 1. Escenario Introductorio Tutorial: Configuración y Mazos Iniciales (Necrópolis vs Mazmorra)",
    category: "modes",
    content: `GUÍA Y CONFIGURACIÓN DEL ESCENARIO INTRODUCTORIO TUTORIAL:

DESCRIPCIÓN GENERAL DEL ESCENARIO INTRODUCTORIO:
- Enfrentamiento 1v1 guiado diseñado para aprender las mecánicas esenciales sin leer los reglamentos completos previamente.
- Facciones del Tutorial: Necrópolis (Gris - Tamika) vs Mazmorra (Púrpura - Mutare).
- Objetivo de Victoria: Explorar el mapa, desarrollar héroes y ejércitos, y derrotar al Héroe Principal enemigo en combate directo.

DISPOSICIÓN DEL MAPA E INVENTARIO INICIAL:
• Losetas de Mapa: Losetas iniciales de Necrópolis (S1) y Mazmorra (S2), losetas lejanas II-III (F4, F5, F7, F8) y cercanas IV-V (N1, N2).
• Tablero de Combate Táctico (4×5): Situado junto al mapa principal.
• Cubos de Facción: 20 cubos grises para Necrópolis, 20 cubos púrpuras para Mazmorra.
• Recursos e Ingresos Iniciales:
  - Recursos Iniciales: 15 Oro, 4 Materiales, 1 Objeto de Valor.
  - Ingresos Iniciales en Marcador: «10» Oro, «2» Materiales, «1» Objeto de Valor.
• Tropas Iniciales: Se asignan las 3 cartas de unidad de Bronce (lado 'Unas pocas' bocarriba) a cada jugador.

CONFIGURACIÓN DE MAZOS DE FUERZA Y MAGIA PRECONFIGURADOS (9 CARTAS INICIALES):
1. Tamika (Necrópolis):
   - 1× Carta de Ataque
   - 2× Cartas de Defensa
   - 2× Cartas de Poder
   - 1× Carta de Conocimiento
   - 1× Carta de Habilidad 'Ofensiva'
   - 1× Carta de Especialidad 'Caballero del Terror I'
   - 1× Carta de Hechizo 'Flecha Mágica'

2. Mutare (Mazmorra):
   - 2× Cartas de Ataque
   - 2× Cartas de Defensa
   - 1× Carta de Poder
   - 1× Carta de Conocimiento
   - 1× Carta de Habilidad 'Táctica'
   - 1× Carta de Especialidad 'Dragones I'
   - 1× Carta de Hechizo 'Flecha Mágica'`
  },
  {
    id: "suplemento-02-ejemplo-de-ronda",
    title: "Suplemento 2. Ejemplo Guiado de la Primera Ronda Paso a Paso (Tamika y Mutare)",
    category: "general",
    content: `EJEMPLO GUIADO Y FLUJO DETALLADO DE LA PRIMERA RONDA DEL TUTORIAL:

TURNO DEL JUGADOR INICIAL (NECRÓPOLIS - TAMIKA):
1. Robo de Mano: Roba sus 9 cartas preconfiguradas y toma 3 fichas de Puntos de Movimiento (PM) verdes.
2. 1er PM (Movimiento a Tesoro Nivel I):
   - Mueve al campo de cofre del tesoro custodiado por Arpías (Nivel I).
   - Combate Táctico: Tamika coloca sus 3 unidades en la retaguardia. Se revela la unidad neutral Arpías (Iniciativa 8, Voladora).
   - Activación de Arpías: Vuelan y atacan a los Espectros. Tamika responde jugando 2 cartas instantáneas de Defensa +1 (defensa total sube a 2). Arpías infligen solo 1 daño gracias a la defensa.
   - Habilidad de Arpías: Ignoran represalia y regresan volando a su casilla de origen.
   - Activación de Espectros (Iniciativa 6): Habilidad de activación cura 1 daño recibido. Mueven hacia las Arpías. Tamika juega carta de Ataque + Especialidad 'Caballero del Terror' (+1 Ataque, total 5). Tira dado de ataque y destruye a las Arpías.
   - Recompensas: Ganancia de +1 EXP por combate + +1 EXP por cofre del tesoro. Tamika alcanza Nivel II (Nivel Plata).
   - Búsqueda de Habilidad (Nivel Plata): Realiza Búsqueda (2) en el mazo de habilidades y añade la nueva carta DIRECTAMENTE a su MANO.
3. 2º PM (Movimiento a Mina Nivel I):
   - Entra en la mina de Materiales. Combate Rápido Automático: Como el nivel del héroe (Nivel II) supera el nivel del campo (Nivel I), las tropas neutrales huyen sin combatir.
   - Captura de Mina: Coloca un cubo gris de Necrópolis, sube el marcador de ingresos de Materiales y cobra la producción inmediata (+2 Materiales).
4. 3er PM (Exploración de Loseta):
   - Gasta 1 PM para voltear y rotar una loseta lejana adyacente (II-III), asegurando que los caminos queden conectados.

TURNO DEL SEGUNDO JUGADOR (MAZMORRA - MUTARE):
1. Robo de Mano: Roba sus 9 cartas y toma 3 PM.
2. 1er PM (Recolección de Recurso): Se mueve a un campo con dado de recursos, tira dado de recurso gris, cobra el botín y coloca un cubo negro.
3. 2º PM (Combate Nivel I con Alabarderos):
   - Arpías de Mutare se activan y atacan a los Alabarderos. Sobreviven y realizan ataque de represalia (gastando su represalia de la ronda).
   - Ojos Maléficos (A Distancia) se activan. Mutare lanza 'Flecha Mágica' (1 hechizo por ronda) potenciado con carta de Poder (+1 daño). Alabarderos destruidos.
   - Recompensa: Mutare gana +1 EXP, abre el tesoro del campo y recibe botín del dado de tesoro.
4. 3er PM: Regresa con su héroe a la ciudad.`
  },
  {
    id: "suplemento-03-acciones-ciudad-y-moral",
    title: "Suplemento 3. Desarrollo de Ciudad, Acciones de Moral y Gestión de Mano/Experiencia",
    category: "general",
    content: `SISTEMA DE DESARROLLO, ACCIONES DE CIUDAD, MORAL Y SUBIDAS DE NIVEL:

INICIO DE NUEVA RONDA Y ALTERNANCIA DE TIPOS:
• Rondas Astrológicas (Casillas inferiores con sextante): Revelan y resuelven la primera carta del mazo de Anuncios Astrológicos (efecto global para todos los jugadores).
• Rondas de Recursos (Casillas superiores con cristales): Todos los jugadores cobran sus ingresos según el marcador de producción de su tablero de ciudad.

ACCIONES DE CIUDAD (FICHAS ACTIVAS EN TABLERO URBANOS):
Se realizan en cualquier momento fuera de combate (incluso en el turno del oponente como reacción):
1. Ficha de Construcción: Permite erigir un edificio pagando su coste en recursos. Las viviendas deben construirse en orden de nivel: Bronce () → Plata () → Oro ().
2. Ficha de Población:
   - Reclutar: Compra unidades de la facción (lado 'Unas pocas') según viviendas construidas.
   - Reforzar: Voltea la carta de unidad de 'Unas pocas' a 'Manada' (requiere edificio Ciudadela). Si la unidad sufre daño igual a sus PS, se degrada a 'Unas pocas' y el daño sobrante se transfiere.
   - Contratar Héroe Secundario: Permite reclutar el segundo héroe de la facción.
3. Ficha de Libro de Hechizos: Requiere tener la Cofradía de Magos (no se puede usar en la misma ronda en que se construyó la Cofradía) para buscar y comprar hechizos.

ACCIONES DE MORAL (FICHAS Y REGLAS EXCLUSIVAS):
• Moral Positiva (Gastable en cualquier momento):
  a) Robar 1 carta del mazo de fuerza y magia.
  b) Descartar N cartas de la mano y robar la misma cantidad.
  c) Volver a tirar un dado recién lanzado.
• Moral Negativa: Acumular una 2ª ficha de moral negativa obliga a descartar TODA la mano al final del turno.
• IMPORTANTE: La facción Necrópolis es completamente inmune a la moral (no puede ganar ni perder moral).

SUBIDAS DE NIVEL, TAMAÑO DE MANO Y EXPERTO:
• Niveles Plata (II, III, V, VII): Búsqueda (2) en mazo de Habilidades.
• Niveles Oro (IV, VI): Añade la carta de Especialidad del Héroe del nivel correspondiente a la mano.
• Límite de Tamaño de Mano: Empieza en 4 cartas. Aumenta en +1 en los Niveles III, V y VII.
• Usos de Experto (Corona): Indica cuántas veces por ronda se pueden activar los efectos inferiores mejorados (nivel Experto) de las cartas.`
  },
  {
    id: "suplemento-04-combate-avanzado-y-asedio",
    title: "Suplemento 4. Reglas Tácticas de Combate, Unidades (Terrestres/Voladoras/Distancia) y Asedio Urbano",
    category: "combat",
    content: `REGLAS TÁCTICAS AVANZADAS DE COMBATE Y MECÁNICAS DE ASEDIO:

GESTIÓN DE COMBATE Y LÍMITES DE TIEMPO:
• Límite de Combate contra Neutrales (Bronce, Plata, Oro): Dura máximo 1 ronda de combate. Prolongar otra ronda cuesta 1 PM adicional; de lo contrario, el héroe debe retirarse a la casilla de origen.
• Sin Límite de Tiempo: Combates contra unidades neutrales Azur () o contra héroes enemigos.

TIPOS DE UNIDADES Y RESTRICCIONES DE MOVIMIENTO/ATAQUE:
1. Unidades Terrestres (Ground): Mueven hasta 3 casillas ortogonales y atacan objetivos adyacentes. No pueden atravesar otras unidades.
2. Unidades Voladoras (Flying): Mueven hasta 3 casillas y atacan adyacente. Pueden volar por encima de otras cartas en el tablero.
3. Unidades A Distancia (Ranged):
   - Disparan a cualquier enemigo sin límite de distancia y luego se mueven 1 casilla (no pueden mover antes de atacar).
   - Penalización de Combate (Tirar 2 dados de ataque y elegir el peor resultado): Aplica si atacan a una unidad adyacente O si atacan desde la retaguardia a una unidad enemiga en la retaguardia opuesta.
   - Si inician turno adyacentes a un enemigo, están obligadas a atacar a la unidad adyacente.

ACCIONES DE UNIDAD E ICONOGRAFÍA TÁCTICA:
• Acción de Defensa de Unidad: Pone ficha de defensa. Si la unidad es atacada, tira dado de ataque: con +1 recibe +1 de defensa adicional. No se puede defender 2 turnos seguidos. Las tropas neutrales NUNCA defienden.
• Parálisis / Aturdido: Anula la activación de la unidad. Sufrir cualquier daño retira la ficha de parálisis y permite actuar o contraatacar.

MECÁNICAS DE ASEDIO A CIUDADES:
• Defender sin Héroe: El jugador defensor puede pagar 8 Oro para trasladar sus tropas a defender la ciudad sin su héroe (no podrá jugar cartas de mano).
• Componentes de Asedio (Con Ciudadela): El defensor coloca Murallas y Puerta en la fila central. La Torre de Arqueros actúa como unidad a distancia fuera del tablero.
• Destrucción de Fortificaciones: Ataques cuerpo a cuerpo adyacentes de unidades terrestres o voladoras destruyen automáticamente murallas o puertas (sin tirada de dado ni uso de cartas).
• Cobertura Defensiva: Tropas defensoras tras muralla o puerta reducen en -1 el daño recibido de ataques a distancia.`
  },
  {
    id: "suplemento-05-catalogo-de-ubicaciones",
    title: "Suplemento 5. Catálogo Completo de Ubicaciones del Mapa (Visitables, Revisitables y Señalizables)",
    category: "components",
    content: `CATÁLOGO OFICIAL DE CAMPOS Y UBICACIONES DEL MAPA:

CLASIFICACIÓN DE CAMPOS:
• Visitables: Se resuelven 1 vez y se marcan con un cubo negro.
• Revisitables: Se pueden usar múltiples veces regresando al campo o gastando 1 PM si el héroe ya se encuentra en él.
• Señalizables: Se capturan con cubos de facción para alterar marcadores de producción de recursos.

LISTA Y EFECTOS DE UBICACIONES DEL MAPA:
1. Piedra de Aprendizaje (Visitable): Otorga +1 EXP al héroe principal.
2. Manantial Mágico (Visitable): Mira las 3 primeras cartas de tu descarte y añade 1 a tu mano. Devuelve el resto arriba.
3. Mina (Señalizable): Coloca cubo de facción y aumenta el marcador de ingresos correspondiente en +1. Si se captura por 1ª vez, otorga producción inmediata.
4. Jardín Místico (Visitable): Elige entre ganar +2 Oro o +1 Objeto de Valor.
5. Observatorio de Caoba (Visitable): Voltea y descubre una loseta de mapa adyacente boca abajo.
6. Símbolo de Recursos (Visitable): Tira 1 o 2 dados de recurso (según icono) y resuelve 1 resultado.
7. Santuario del Encantamiento (Visitable): Realiza Búsqueda (2) en el mazo de hechizos.
8. Templo (Visitable): Otorga 1 Ficha de Moral Positiva.
9. Ciudad (Señalizable): Bastión urbano. Perder tu ciudad le otorga al oponente 3 rondas para ganar la partida a menos que sea reconquistada.
10. Mercadillo (Revisitable): Permite intercambiar recursos según la Tabla de Comercio O eliminar 1 carta de la mano por +1 Oro (no se pueden eliminar especialidades, estadísticas, habilidad inicial ni Flecha Mágica).
11. Símbolo de Tesoro (Visitable): Tira 1 o 2 dados de tesoro (según icono) y resuelve 1 resultado.
12. Árbol del Conocimiento (Visitable): Paga 3 Objetos de Valor o 10 Oro para ganar +2 EXP.
13. Tumba del Guerrero (Visitable): Realiza Búsqueda (2) en el mazo de artefactos dos veces. Otorga 2 fichas de moral negativa.
14. Molino de Agua (Visitable): Otorga +3 Oro.
15. Molino (Visitable): Otorga +1 Objeto de Valor.
16. Santuario (Revisitable): Zona de paz. Los héroes no pueden ser atacados mientras permanezcan en este campo.
17. Establos (Revisitable): Otorga +1 PM adicional válido únicamente durante el turno actual.`
  }
];

export const rulesKB = reglasCombinadas;




