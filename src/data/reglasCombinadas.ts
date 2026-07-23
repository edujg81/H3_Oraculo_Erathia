import { RuleSection } from '../types';

/**
 * REGLAS COMBINADAS - REGLAMENTO OFICIAL Y EXPANSIONES
 * Fuentes Oficiales Archon Studio / Ubisoft:
 * 1. Libro de Reglas Base (HoMM-Rulebook_ESP.pdf, v1.0 ESP)
 * 2. Expansión Murallas y Libro de Misiones (HoMM-Rampart-Mission-Book_ESP.pdf, v1.0 ESP)
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
- Requiere 4 jugadores formando 2 alianzas de 2 jugadores.
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
  }
];

export const rulesKB = reglasCombinadas;
