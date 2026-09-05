# HEROES OF MIGHT AND MAGIC III: THE BOARD GAME — REGLAMENTO DEFINITIVO

Compendio legible y reorganizado de los manuales Markdown de `src/assets/rules/`. Incluye componentes, preparación, reglas, procedimientos, tablas, lugares, variantes, aclaraciones oficiales, expansiones y comentarios de diseño. **No incluye escenarios, misiones ni campañas**, que están en [ESCENARIOS_Y_MISIONES.md](ESCENARIOS_Y_MISIONES.md). Se excluyen también los datos editoriales.

## Fuentes integradas

- `HoMM-Rulebook_ESP.md`
- `Heroes3_Espanol_Rules_Rewrite_1_3.md`
- `Heroes3_Rules_Rewrite_2_0_dev.md`
- `ESP HoMM - Rulebook Supplement - WEB_ESP.md`
- `HoMM-Mission-Book_ESP.md` y `HoMM-Tournament-Book_ESP.md` (solo reglas generales y creador de escenarios)
- `HoMM-Battlefield-Rulebook_ESP.md`
- `HoMM-Designer’s-Commentary_ESP.md` (solo aclaraciones y comentarios de reglas)
- Manuales de Conflujo, Cala, Murallas, Bastión, Fortaleza, Inferno, SG, SG2 y Batallas Navales (solo reglas no específicas de escenario).

## Jerarquía de resolución

Cuando dos reglas entren en conflicto, aplícalas en este orden:

1. Carta jugada o efecto activo.
2. Carta de unidad.
3. Tablero de ciudad.
4. Libro de misiones o expansión.
5. Reglamento general.

---

## Índice

1. [Componentes](#1-componentes)
2. [Preparación de partida](#2-preparación-de-partida)
3. [Rondas y turnos](#3-rondas-y-turnos)
4. [Héroes y niveles](#4-héroes-y-niveles)
5. [Mazos y cartas](#5-mazos-y-cartas)
6. [Recursos y ciudad](#6-recursos-y-ciudad)
7. [Mapa y lugares](#7-mapa-y-lugares)
8. [Unidades](#8-unidades)
9. [Combate](#9-combate)
10. [IA y asedios](#10-ia-y-asedios)
11. [Modos y variantes](#11-modos-y-variantes)
12. [Campo de Batalla](#12-campo-de-batalla)
13. [Expansiones de facción](#13-expansiones-de-facción)
14. [SG y reglas modulares](#14-sg-y-reglas-modulares)
15. [Batallas Navales](#15-batallas-navales)
16. [Aclaraciones oficiales](#16-aclaraciones-oficiales)
17. [Comentarios de diseño](#17-comentarios-de-diseño)

---

## 1. Componentes

### 1.1 Juego base

| Grupo | Componentes |
|---|---|
| Tableros | 3 tableros de ciudad; 1 tablero de combate |
| Losetas | 3 iniciales I; 9 lejanas II-III; 6 cercanas IV-V; 2 centrales VI-VII |
| Miniaturas | 6 de héroe; unidades de las facciones |
| Dados | 2 de ataque; 3 de recursos; 3 de tesoro |
| Recursos | Oro; Materiales de construcción; Objetos de valor |
| Marcadores | Rondas; construcción; población; libro de hechizos; movimiento; daño; moral; grial; cubos de facción y cubos negros |
| Cartas | Héroe; unidad; unidad neutral; característica; habilidad; especialidad; artefacto; hechizo; IA; muralla; puerta; torre de arqueros; anuncio astrológico |

### 1.2 Contenido modular

| Contenido | Elementos añadidos |
|---|---|
| Campo de Batalla | Tablero, obstáculos, iniciativa, aventura y moral |
| Facciones | Tablero de ciudad, héroes, unidades, edificios y cartas propias |
| Conflujo | Losetas elementales, monolitos, invocaciones, tiempo y muro de fuego |
| Cala | Mar, torbellinos, debilidad, clonación, barcos y máquinas de guerra |
| Murallas | Efectos permanentes, lugares de bosque y máquinas de guerra |
| Bastión | Subterráneo, puertas, pergaminos, ataque, corrosión y arenas movedizas |
| Fortaleza | Eventos y escuelas de magia |
| Inferno | Características potenciadas, Invocar y Ciudad Aleatoria |
| SG/SG2 | Cartas permanentes, caos, draft, minas, campo de fuerza, Pandora y unidades especiales |
| Batallas Navales | Tableros navales, bancos de criaturas y fichas de pila |

---

## 2. Preparación de partida

### 2.1 Procedimiento completo

1. Selecciona un escenario del libro de misiones.
2. Elige facción y héroe principal.
3. Toma tablero de ciudad, miniaturas, edificios, unidades, cartas, cubos y fichas de la facción.
4. Coloca el cubo del héroe en el nivel I.
5. Dispón las losetas indicadas y orienta la inicial.
6. Coloca edificios, ingresos y recursos iniciales.
7. Separa fichas de recursos, daño, movimiento, moral y defensa.
8. Separa las unidades neutrales en mazos por nivel.
9. Forma los mazos de habilidades, artefactos y hechizos. Revela la carta superior de cada descarte.
10. Forma el mazo inicial de fuerza y magia con nueve cartas.
11. Añade Flecha mágica: una copia para héroe de Fuerza y dos para héroe de Magia, salvo excepción.
12. Añade habilidad inicial y especialidad de nivel I.
13. Baraja el mazo inicial.
14. Coloca el tablero de combate y el marcador de rondas con cubo negro en 1.
15. Baraja anuncios astrológicos.
16. Marca eventos contrarreloj con cubos negros.
17. Elige jugador inicial; permanece inicial durante la partida.

### 2.2 Dificultad y bonificación

| Dificultad | Bonificación inicial |
|---|---|
| Fácil | Lanza 2 dados de recursos y conserva ambos, o Buscar (2) dos veces en artefactos |
| Normal | Lanza 2 dados y conserva uno, o Buscar (2) en artefactos |
| Difícil | Lanza 1 dado, o revela hasta obtener un artefacto menor |
| Imposible | Sin bonificación |

La primera ronda no concede producción; solo se reciben los recursos iniciales.

---

## 3. Rondas y turnos

### 3.1 Inicio de ronda

1. Reactiva construcción, población y libro de hechizos.
2. Reactiva fichas de movimiento.
3. Recupera usos de efectos de experto.
4. En rondas de recursos, recibe producción.
5. En rondas astrológicas, roba y resuelve un anuncio.
6. Resuelve eventos contrarreloj.
7. Juega turnos en sentido horario.
8. Avanza el cubo negro al finalizar la ronda.

Las rondas impares suelen ser de recursos y las pares astrológicas, salvo que el escenario o una expansión indique otro orden. Fortaleza añade cartas de evento en rondas de recursos, excepto la primera.

### 3.2 Inicio de turno

1. Descarta cualquier número de cartas.
2. Si superas el límite de mano, descarta hasta igualarlo.
3. Roba hasta alcanzar el límite.
4. Resuelve efectos de inicio de turno.

### 3.3 Acciones de movimiento

Cada punto de movimiento permite una acción:

- Mover el héroe a una zona adyacente.
- Reutilizar la zona actual.
- Continuar un combate neutral una ronda.
- Descubrir una loseta adyacente.
- Colocar una loseta lejana de la reserva.

Los héroes aliados pueden atravesarse, pero no terminar en la misma zona. Los puntos obtenidos por un efecto solo duran el turno actual.

### 3.4 Acciones de ciudad

Cada ficha se puede usar una vez por ronda:

| Ficha | Acción |
|---|---|
| Construcción | Construir un edificio pagando su coste |
| Población | Reclutar, reforzar o contratar héroe secundario |
| Libro de hechizos | Comprar hechizos si existe Cofradía de Magos |

---

## 4. Héroes y niveles

### 4.1 Héroe principal

- Tiene miniatura, carta, mazo propio y 3 PM base.
- Comienza en nivel I y puede llegar al VII.
- Es el único que gana experiencia y usa el mazo durante combate.
- Gana experiencia por combates, lugares, tesoros y efectos de cartas.

| Nivel | Límite de mano | Usos experto | Recompensa de nivel |
|---|---:|---:|---|
| I | 4 | 0 | Especialidad I |
| II | 4 | 1 | Buscar (2) Habilidades |
| III | 5 | 1 | Buscar (2) Habilidades |
| IV | 5 | 2 | Especialidad IV |
| V | 6 | 2 | Buscar (2) Habilidades |
| VI | 6 | 3 | Especialidad VI |
| VII | 7 | 3 | Buscar (2) Habilidades |

Cada 2 puntos de experiencia equivalen a un nivel. Las características impresas en la carta del héroe se usan para crear el mazo inicial, no como efectos recurrentes.

### 4.2 Héroe secundario

1. Controla una ciudad o asentamiento.
2. Voltea la ficha de población.
3. Paga 10 Oro.
4. Coloca la segunda miniatura.

Tiene 2 PM, no gana experiencia, no tiene carta de héroe y no puede jugar cartas de mano ni del mazo de fuerza y magia. Puede usar las unidades del jugador. Si es derrotado, se elimina; puede volver a reclutarse en un turno posterior.

---

## 5. Mazos y cartas

### 5.1 Tipos de cartas

El juego incluye los siguientes tipos de cartas, cada una con funciones y reglas específicas:

| Tipo de carta | Descripción |
|---|---|
| **Cartas de Característica** | Tienen un efecto básico y un efecto experto más potente que requiere gastar un uso de *Efecto Experto*. Definen las estadísticas Ataque, Defensa, Poder y Conocimiento del Héroe. Existen versiones potenciadas (*Empowered*) en expansiones. |
| **Cartas de Hechizo** | Su efecto depende del Poder ($P$) pagado al jugarlas (descartando o usando cartas con efecto de Poder). Se dividen en 4 Escuelas de Magia: **Aire**, **Fuego**, **Tierra** y **Agua**. Los hechizos con un símbolo son Básicos; con cuatro símbolos idénticos, Expertos. *Flecha mágica* es básica y eliges su escuela al lanzarla. Límite de **1 carta de hechizo por jugador y ronda de combate** (salvo efectos que lo aumenten). |
| **Cartas de Especialidad de Héroe** | Se obtienen al subir de nivel (niveles I, IV y VI). No están limitadas por la regla de 1 hechizo por ronda de combate. Cada héroe tiene 3 cartas de especialidad únicas. |
| **Cartas de Artefacto** | Divididas en 3 niveles: **Menor**, **Mayor** y **Reliquia**. Se obtienen explorando el mapa y tienen un efecto superior y otro inferior. |
| **Cartas de Pergamino de Hechizo** (Exp. Bastión) | Otorgan cartas de hechizo ocultas con reglas especiales para lanzarlas sin coste de Poder completo. |
| **Cartas de Máquina de Guerra** (Exp. Bastión/Murallas) | Cartas permanentes que se compran en un puesto comercial o fábrica de máquinas de guerra. |
| **Cartas de Habilidad** | Tienen un efecto básico y un efecto experto más potente. Requieren gastar un uso de *Efecto Experto*. Las cartas de *Nigromancia* son exclusivas de Necrópolis (si otro jugador las roba, las descarta por otra o las descarta pasivamente). Existen versiones potenciadas en expansiones. |
| **Cartas de Unidad** | Cartas de doble cara (lado "Pocos" / lado "Manada") que representan las 7 unidades de cada facción. Se usan para reclutar y reforzar. |
| **Cartas de Unidad Neutral** | Unidades reclutables que no pertenecen a ninguna facción jugable. |
| **Cartas de IA** | Cartas que controlan el comportamiento de los enemigos en modo solitario/cooperativo. Incluyen mazos de hechizos, habilidades y unidades específicas por escenario. |
| **Cartas de Muralla / Puerta / Torre de Arqueros** | Cartas de fortificación usadas en asedios y Campo de Batalla. Las unidades tras un Muro o Puerta intactos reducen en 1 el daño de ataque recibido a distancia. |
| **Cartas de Anuncio Astrológico** | Se roban en rondas astrológicas y afectan a todos los jugadores (clima, bonificaciones, eventos globales). |
| **Cartas de Evento** (Exp. Fortaleza) | Se roban al inicio de cada ronda de recursos (excepto la primera). Describen eventos que afectan a diversos aspectos de la partida y se resuelven inmediatamente. |
| **Cartas de Habilidad Potenciada** (Exp. Batallas Navales) | Versiones mejoradas de las cartas de habilidad estándar. Se obtienen entregando una ficha de habilidad potenciada al adquirir la habilidad. Existe una sola copia de cada una en la partida. |
| **Cartas de Característica Potenciada** (Exp. Infierno) | Versiones mejoradas de las cartas de característica (Ataque, Defensa, Poder y Conocimiento), exclusivas de la facción Infierno. |

### 5.2 Reglas comunes

| Acción | Resolución |
|---|---|
| Buscar (X) | Mira X cartas superiores, conserva una y descarta el resto, o toma la carta superior del descarte |
| Robar | Las cartas obtenidas van a la mano salvo indicación contraria |
| Mazo agotado | Baraja su pila de descarte |
| Carta retirada | Vuelve a la caja y no se reincorpora |

### 5.3 Tipos de efecto

- **Instantáneo:** se resuelve inmediatamente.
- **Activación:** se juega al activar una unidad.
- **Mapa:** no se usa durante combate.
- **Continuo:** dura hasta agotarse o hasta el inicio del siguiente turno.
- **Permanente:** queda frente al jugador; máximo una por héroe.

### 5.4 Hechizos

- Solo 1 carta de hechizo por jugador y ronda de combate.
- El Poder se obtiene descartando o usando cartas con efecto de Poder.
- Los hechizos ignoran Defensa y colocan el daño indicado por su texto.
- Flecha mágica pertenece a las cuatro escuelas, pero solo recibe el bonificador de una por lanzamiento.
- La Cofradía de Magos permite Buscar y comprar hechizos.

### 5.5 Aclaraciones de cartas

- Las especialidades que imitan hechizos no son hechizos y no consumen el límite de hechizos.
- Una carta con efecto continuo permanece en juego junto a la unidad o héroe afectado.
- Las cartas instantáneas pueden jugarse durante el combate enemigo, antes de la tirada de ataque.
- El efecto de una carta se resuelve antes de descartarla.
- Si una carta exige elegir varios objetivos, los elige quien la juega, respetando el texto.

---

## 6. Recursos y ciudad

### 6.1 Recursos

| Recurso | Uso principal |
|---|---|
| Oro | Héroes, unidades, comercio, edificios y hechizos |
| Materiales | Edificios y efectos de expansión |
| Objetos de valor | Edificios y unidades de nivel alto |

### 6.2 Dado de recursos

| Resultado | Ganancia |
|---|---|
| 2 | Materiales |
| 4 | Materiales |
| 1 | Objeto de valor |
| 2 | Objetos de valor |
| 3 | Oro |
| 6 | Oro |

### 6.3 Edificios

| Edificio | Función |
|---|---|
| Alcaldía | Producción adicional o habilidad de facción |
| Ciudadela | Refuerzo y defensas de asedio |
| Vivienda I-III | Reclutamiento de unidades por nivel |
| Cofradía de Magos | Obtención y compra de hechizos |
| Edificio de facción | Efecto propio de la facción |

Las viviendas se construyen de nivel I a III. Solo se construye un edificio por ronda.

### 6.4 Comercio

| Intercambio | Resultado |
|---|---|
| 6 Oro | 1 Material |
| 2 Oro | 1 Valioso |
| 1 Material | 3 Oro |
| 1 Material | 2 Valiosos |
| 3 Materiales | 1 Valioso |

No se pueden retirar especialidades, características, habilidad inicial ni Flecha mágica salvo efecto específico.

### 6.5 Asentamientos y minas

Al señalizar un asentamiento, elige una bonificación: +5 ingresos de Oro, +2 Materiales, +1 Valioso o refuerzo de Bronce/Plata a mitad de coste. El primer reclamante obtiene además la recompensa inmediata.

| Mina | Producción |
|---|---:|
| Oro | 5 Oro |
| Minerales | 2 Materiales |
| Cristal | 1 Valioso |
| Gemas | 1 Valioso |
| Alquimista | 1 Valioso |

---

## 7. Mapa y lugares

### 7.1 Losetas

| Tipo | Nivel | Uso |
|---|---|---|
| Inicial | I | Punto de partida |
| Lejana | II-III | Exploración y reservas personales |
| Cercana | IV-V | Zonas de dificultad media/alta |
| Central | VI-VII | Zonas de máxima dificultad |

Las líneas finas separan zonas transitables. Las líneas gruesas bloquean el movimiento. Las zonas con bordes amarillos están bloqueadas, salvo excepción expresa.

### 7.2 Categorías

| Categoría | Regla |
|---|---|
| Visitable | Resuelve al entrar y coloca cubo negro |
| Señalizable | Coloca cubo de facción y obtiene beneficio permanente |
| Revisitable | Puede usarse varias veces pagando PM cuando proceda |

### 7.3 Lugares base

| Lugar | Categoría | Efecto |
|---|---|---|
| Ciudad | Señalizable | Base de facción y objetivo de asedio |
| Asentamiento | Señalizable | Producción y bonificación elegida |
| Mina de Oro | Señalizable | 5 Oro por ronda |
| Mina de Minerales | Señalizable | 2 Materiales por ronda |
| Laboratorio de Alquimista | Señalizable | 1 Valioso por ronda |
| Mina de Cristal | Señalizable | 1 Valioso por ronda |
| Estanque de Gemas | Señalizable | 1 Valioso por ronda |
| Molino de Agua | Visitable | 3 Oro |
| Molino | Visitable | 2 Materiales |
| Jardín Místico | Visitable | 2 Materiales o 1 Valioso |
| Santuario del Gesto Mágico | Visitable | Buscar (2) Hechizos |
| Santuario del Encantamiento | Visitable | Pagar 3 Oro: Buscar (2) Hechizos |
| Piedra de Aprendizaje | Visitable | +1 Experiencia |
| Templo | Visitable | Moral positiva |
| Tumba del Guerrero | Visitable | Buscar (2) Artefactos dos veces; 2 moral negativa |
| Fuente de la Juventud | Visitable | +1 PM y moral positiva |
| Árbol de la Sabiduría | Visitable | 3 Oro o 1 Valioso: +2 Experiencia |
| Cabaña de la Bruja | Visitable | Retirar una Habilidad o manipular la carta superior |
| Observatorio | Visitable | Descubrir loseta adyacente |
| Establos | Revisitable | +1 PM este turno |
| Santuario | Revisitable | Protección contra ataques de héroes |
| Mercadillo | Revisitable | Comercio y retirada de cartas |
| Manantial Mágico | Visitable | Recuperar 1 de las 3 cartas superiores del descarte |
| Grial | Señalizable | Obtener ficha de grial |
| Utopía del Dragón | Señalizable | Recompensa según escenario |
| Obelisco | Señalizable | Efecto según escenario |
| Cofre del Tesoro | Visitable | Dados de tesoro |
| Símbolo de Artefacto | Visitable | Buscar (2) Artefactos |
| Símbolo de Recursos | Visitable | Dados de recursos |

### 7.4 Movimiento y descubrimiento

1. Gasta 1 PM.
2. Descubre la loseta adyacente o colócala según el mapa.
3. Oriéntala manteniendo una conexión válida.
4. Resuelve la zona al entrar.
5. Coloca cubo negro si es visitable.

---

## 8. Unidades

### 8.1 Atributos

| Atributo | Significado |
|---|---|
| Ataque | Daño base antes del dado |
| Salud | Daño que puede recibir |
| Defensa | Reduce daño de ataques |
| Iniciativa | Orden de activación |
| Reclutamiento | Coste para obtener la unidad |
| Refuerzo | Coste para pasar a Manada |
| Habilidad | Regla especial de la carta |

### 8.2 Tipos de unidad

| Tipo | Movimiento y ataque |
|---|---|
| Terrestre | Hasta 3 espacios; ataque adyacente |
| Voladora | Hasta 3 espacios; ignora obstáculos; ataque adyacente |
| A distancia | Mueve 1 o ataca; penalización si está adyacente o dispara de retaguardia a retaguardia |

### 8.3 Reclutamiento y refuerzo

- Reclutar exige la vivienda del nivel correspondiente y pagar el coste.
- Reforzar exige vivienda, Ciudadela y coste de refuerzo.
- Solo se eligen hasta 5 cartas de unidad para cada combate.
- Las unidades neutrales se separan en Bronce, Plata, Oro y Azur.
- Diplomacia puede permitir reclutar unidades neutrales.

---

## 9. Combate

### 9.1 Preparación

1. Coloca hasta 5 unidades propias.
2. Roba neutrales según dificultad y mazo correspondiente.
3. Coloca terrestres/voladoras en vanguardia y unidades a distancia en retaguardia.
4. Ordena por Iniciativa.
5. Resuelve rondas hasta cumplir la condición de combate.

### 9.2 Activación

1. Activa la unidad con mayor Iniciativa.
2. Muévela y/o ataca; o elige Defensa.
3. Juega cartas de Activación o Instantáneas en el momento permitido.
4. Lanza el dado de ataque.
5. Calcula Ataque + dado - Defensa.
6. Coloca daño.
7. Resuelve contraataque si procede.
8. Marca la unidad activada.

En empates de iniciativa, el atacante activa primero y después se alternan unidades empatadas. En Campo de Batalla se aplica la ficha de iniciativa.

### 9.3 Reglas especiales

- El hechizo ignora Defensa y aplica el daño de su carta.
- La parálisis impide la siguiente activación; cualquier daño mínimo 1 retira la ficha.
- Una unidad que sobrevive a un ataque adyacente puede contraatacar una vez por ronda.
- Las habilidades de unidad solo funcionan en combate, salvo que su texto diga lo contrario.
- Los efectos instantáneos pueden jugarse antes de la tirada de ataque, incluso durante la activación enemiga.

### 9.4 Duración

| Combate | Regla |
|---|---|
| Neutral Bronce/Plata/Oro | 1 ronda; +1 PM por ronda adicional o retirada |
| Neutral Azur | Sin límite; no retirada |
| Héroe/IA/PvP | Sin límite; no retirada normal |
| Combate Rápido | Victoria automática si nivel de héroe > dificultad |

### 9.5 Asedio

Si se defiende sin héroe, paga 8 Oro y combate solo con el ejército. Con Ciudadela se colocan tres murallas, una puerta y torre de arqueros. Las murallas bloquean movimiento terrestre y reducen daño a distancia según la regla activa; se destruyen con ataques adyacentes.

---

## 10. IA y asedios

### 10.1 Movimiento de héroe IA

1. Ataca al héroe jugador en su misma loseta.
2. Señaliza una mina/asentamiento disponible.
3. Avanza hacia la ciudad del jugador.
4. Repite hasta agotar sus 3 PM.

### 10.2 Prioridad de objetivos

1. Unidad de la misma categoría y nivel.
2. Nivel inferior más alto.
3. Nivel superior más bajo.
4. Voladora o a distancia válida.
5. Desempate: unidad más cercana a ser eliminada; después decide el jugador.

### 10.3 Hechizos de IA

| Hechizo | Objetivo |
|---|---|
| Bola de Fuego/Rayo en Cadena | Grupo con unidades adyacentes y mayor nivel |
| Piel de Piedra | Unidad con mayor Defensa |
| Curación | Unidad con más daño, priorizando nivel alto |
| Escudo de Fuego | Unidad apta; se retrasa si ya se activó más de la mitad |
| Debilidad | Objetivo que vaya a contraatacar |

---

## 11. Modos y variantes

### 11.1 Enfrentamiento

Modo competitivo para 2-3 jugadores. Perder todos los asentamientos durante 3 rondas elimina. Perder al héroe principal defendiendo la última ciudad elimina. Ser el último jugador o reunir cubos de facción enemigos puede dar la victoria según el escenario.

### 11.2 Campaña

Modo solitario contra IA. La IA se mueve después del jugador. No se permite rendirse ante la IA. Entre escenarios: junta mano y descarte, conserva características y especialidad I, retira especialidades superiores, elige 5 cartas restantes y reinicia experiencia a nivel I. Los pergaminos no se conservan.

### 11.3 Alianza

Cuatro jugadores en equipos de dos. Los aliados comparten victoria y derrota. Artefactos solo se intercambian con héroes adyacentes; los recursos pueden intercambiarse sin adyacencia. No se señaliza una zona ya señalizada por el aliado.

### 11.4 Cooperativo

Todos los jugadores son aliados. Los neutrales se controlan con IA. El Mercadillo permite transferir recursos. Si un jugador cumple la condición común, todos ganan.

### 11.5 Creador de escenarios

Para crear un escenario se deben fijar, en este orden:

1. Nombre y descripción.
2. Jugadores y modo.
3. Duración.
4. Losetas y mapa.
5. Recursos iniciales.
6. Ingresos.
7. Edificios y unidades iniciales.
8. Bonificadores.
9. Reglas de lugares.
10. Victoria y derrota.
11. Eventos contrarreloj.

---

## 12. Campo de Batalla

### 12.1 Componentes y preparación

Incluye tablero de campo, 10 obstáculos, ficha de iniciativa, 50 cartas de aventura y mazos de moral positiva/negativa.

Los obstáculos tienen tres tipos: efecto, obstáculo y muralla/puerta. Ningún obstáculo puede quedar adyacente a otro ni a una zona de despliegue. Las miniaturas también cuentan como obstáculos.

### 12.2 Modo Aventura

1. Prepara héroes, ciudad, unidades, mazos y tablero.
2. Elige tamaño: Pequeño 9 rondas, Medio 13, Grande 16.
3. Al inicio de cada ronda, el jugador inicial roba 3 cartas de aventura.
4. Se queda una carta y pasa las otras dos al oponente.
5. El oponente se queda una y descarta la otra.
6. Resuelve o guarda como máximo una carta.
7. En la última ronda no se roban cartas.
8. Al terminar, se prepara el combate final.

Las cartas de aventura son Combate o Evento. En Combate se eligen 2 unidades, se suma su Ataque y se lanzan 2 dados. Si se iguala o supera el Poder elegido, se obtienen recompensa básica y de batalla. Si se falla, se obtiene la básica y una unidad queda aturdida.

### 12.3 Modo Escaramuzas

- **Pequeño:** héroe nivel 3; unidades en «unas pocas».
- **Medio:** héroe nivel 5; especialidades I y IV; 4 habilidades, se retira 1; 3 artefactos, se retira 1.
- **Grande:** héroe nivel 7; todas las especialidades; 6 habilidades, se retiran 2; 4 artefactos, se retira 1.

La victoria exige eliminar todas las unidades enemigas.

### 12.4 Cambios de combate

- El movimiento equivale a la Iniciativa.
- Unidades a distancia: pueden mover o atacar; penalización por adyacencia y por distancia de 8 o más casillas.
- La ficha de iniciativa rompe empates y alterna el derecho de actuar primero.
- En partidas normales se pueden usar obstáculos y mazos de moral.
- Contra neutrales se ignora el límite de rondas y no se paga PM para prolongar.

---

## 13. Expansiones de facción

### 13.1 Reglas comunes

- Las cartas permanentes tienen límite de una por héroe.
- Las escuelas de magia son Aire, Fuego, Tierra y Agua.
- Flecha Mágica puede beneficiarse de una sola escuela por lanzamiento.
- Las fichas de tiempo pierden 1 punto al final de cada ronda.
- Los monolitos pueden ser unidireccionales o bidireccionales.
- Las máquinas de guerra se compran en Fábrica o Mercadillo; el Mercadillo consume toda la visita y aplica el recargo de la carta.

### 13.2 Conflujo

| Elemento | Regla |
|---|---|
| Loseta elemental | Hechizos de la escuela correspondiente aumentan su efecto/valor en 1 |
| Invocar | Añade una unidad a un espacio válido; se activa según iniciativa |
| Invocada por hechizo | Se retira al finalizar el combate salvo excepción |
| Muro de fuego | Daña a quien comienza, termina o atraviesa su espacio |
| Daño elemental | Ignora Defensa |
| Monolito | Transporta entre entradas y salidas codificadas |

### 13.3 Cala

| Elemento | Regla |
|---|---|
| Tierra a mar | Termina el movimiento del héroe |
| Torbellino | Conecta fichas; con tres, el dado de ataque determina destino |
| Viaje por torbellino | Hace perder 1 unidad |
| Debilidad | -1 o -2 Ataque; una por unidad |
| Clon | 1 PS, 0 Defensa; se destruye con cualquier daño |
| Barco | Sustituye miniatura al entrar en zona marina |

Lugares marinos: Pecio, Barril Marino, Superviviente de Naufragio, Boya, Naufragio, Templo del Mar, Cofre Marino, Restos de Naufragio, Barco Abandonado, Sirena, Tumba y lugares de las fichas del escenario.

### 13.4 Murallas

Añade cartas de efecto permanente, lugares de bosque y máquinas de guerra. Una máquina comprada en Mercadillo impide realizar otra acción en esa visita y añade el recargo indicado.

### 13.5 Bastión

| Elemento | Regla |
|---|---|
| Puerta subterránea | Une entrada y salida sin coste de PM adicional |
| Pergamino | Contiene 2 hechizos; permite lanzarlos sin Poder completo; máximo 2 |
| Ficha de ataque | +1 o +2 Ataque; una por unidad |
| Corrosión | -1 Defensa hasta mínimo 0; una por unidad |
| Arenas movedizas | Ficha vacía o detención de movimiento/activación |
| Fondo reservado | Separa costes de reclutamiento; vender unidad recupera el coste |

### 13.6 Fortaleza

- Añade cartas de Evento en rondas de recursos, salvo la primera.
- El jugador que roba el evento empieza la resolución; si no se indica orden, se resuelve en sentido horario.
- Las cartas de Evento vuelven a barajarse después de resolverlas.
- Las escuelas de magia son Aire, Fuego, Tierra y Agua.

### 13.7 Inferno

| Elemento | Regla |
|---|---|
| Característica potenciada | Sustituye otra del mismo tipo |
| Invocar | Coloca unidad adyacente a la invocadora |
| Ciudad Aleatoria | 1 manada II, 2 manadas I y 2 «unas pocas» I; sin torre de arqueros |
| Efrits | Inmunes al daño de hechizos de Fuego, no a otros efectos |

---

## 14. SG y reglas modulares

### 14.1 Reglas de IA de campañas

- La IA se mueve después del jugador.
- No se permite rendirse ante héroes IA.
- Las cartas defensivas permanecen hasta consumirse.
- Los mazos de IA pueden ser compartidos.
- Si falta un hechizo IA, se sustituye por Flecha Mágica.
- Si falta una habilidad IA que tiene el jugador, se retira del mazo del jugador y este compensa con Buscar (3).

### 14.2 Cartas del caos

Cuando una carta vaya a descartarse, se elimina en su lugar y se roba la carta superior del mazo correspondiente. Características y especialidades se descartan normalmente.

### 14.3 Draft inicial

1. Aparta habilidad inicial y especialidad I.
2. Baraja Artefactos, Habilidades y Hechizos.
3. Cada jugador roba 2 de cada mazo, conserva una y pasa las restantes.
4. Repite en dirección contraria.
5. Añade características.
6. Conserva las cartas requeridas para formar un mazo inicial de 9.

### 14.4 Lugares SG

| Lugar | Efecto |
|---|---|
| Mercado Negro | Comprar artefactos del descarte por rareza |
| Universidad | Pagar 60 Oro para Buscar (4) en habilidades del descarte |
| Mercado del Tiempo | Retirar carta y Buscar (2) en cualquier mazo |
| Prisión | Obtener héroe secundario o 3 Oro si ya se tiene uno |
| Taberna | Pagar 7 Oro para obtener héroe secundario y hacer descartar al rival |
| Biblioteca de la Iluminación | Pagar 3 Oro para sustituir una característica |
| Fuerte de la Colina | Reforzar con -3 coste |

### 14.5 Reglas de hechizos complejos IA

- **Ataque múltiple:** busca grupos adyacentes.
- **Defensa instantánea:** protege la mayor Defensa.
- **Curación:** elimina el mayor daño acumulado.
- **Escudo de Fuego:** se reserva si la mayoría ya se activó.
- **Debilidad:** se usa para impedir contraataque.

---

## 15. Batallas Navales

### 15.1 Tablero naval

- Elimina los dos espacios centrales.
- Las unidades terrestres rodean el centro por izquierda o derecha.
- Las voladoras sobrevuelan los espacios eliminados, pero no terminan allí.
- Puede usarse en cualquier combate situado en loseta marina.

### 15.2 Bancos de criaturas

Los bancos convierten zonas bloqueadas en visitables. Se roba el conjunto fijo de cuatro defensores del banco y se colocan en las cuatro esquinas enemigas. El jugador puede colocar hasta cinco unidades en las casillas centrales.

| Dificultad | Fichas de pila |
|---|---:|
| Fácil | 1 |
| Normal | 2 |
| Difícil | 3 |
| Imposible | 4 |

No hay límite de rondas, no se paga PM para prolongar, no existe Combate Rápido y no se gana Experiencia. Las unidades apiladas retiran una ficha cuando el daño alcanza sus PS máximos y el excedente se aplica después.

### 15.3 Bancos y recompensas

| Banco | Defensores | Recompensa base |
|---|---|---|
| Barco Abandonado | 4 Elementales de agua | 10 Oro + 7 Oro |
| Pirámide | 2 Gólems de oro + 2 Gólems de diamante | Buscar (5) Hechizos |
| Naufragio | 4 Espectros | 10 Oro + 5 Valiosos |
| Colmena de Libélulas | 4 Libélulas | 1 unidad de Libélulas |
| Depósitos de Medusas | 4 Medusas | 6 Oro + 1 Valioso |
| Tesorería Enana | 4 Enanos | 7 Oro |
| Conservatorio de Grifos | 4 Grifos | 1 unidad de Grifos |
| Banco de Nagas | 4 Nagas | 6 Oro + 2 Valiosos |
| Cripta | Esqueleto, Zombi, Espectro, Vampiro | 6 Oro |
| Tesoro de los Familiares | 4 Familiares | 3 Oro |
| Reservas del Cíclope | 4 Cíclopes | 8 Oro + 2 Valiosos |
| Utopía del Dragón | Dragón negro, dorado, cristal y hada | 40 Oro + Buscar (3) Artefactos |

Cada unidad apilada derrotada concede la recompensa extra definida por su banco.

---

## 16. Aclaraciones oficiales

### 16.1 Interacciones de mapa y turnos

- La producción no se recibe en la primera ronda.
- Entrar en una zona obliga a resolverla, empezando por el combate.
- Para reutilizar una zona ocupada hay que gastar PM aunque no se mueva el héroe.
- Dos héroes pueden estar en la misma loseta, pero nunca en la misma zona.
- Las zonas con grial siguen teniendo una sola ficha; tras recogerla, la otra se considera vacía aunque pueda activar combate.
- Un asentamiento ya controlado por ti o por un aliado no puede volver a señalizarse.

### 16.2 Cartas y hechizos

- Las cartas obtenidas van a la mano, no al descarte.
- Las cartas instantáneas pueden jugarse durante el turno enemigo si afectan al combate del héroe principal.
- Las especialidades que imitan hechizos no son hechizos y no cuentan para el límite.
- Los hechizos ignoran Defensa y no tiran dado de ataque.
- Un efecto continuo termina al descartar su carta.
- Solo hay una carta permanente activa.

### 16.3 Combate

- La adyacencia del tablero de combate es ortogonal; en Campo de Batalla comparten borde.
- El fuego amigo se aplica si el texto del efecto alcanza unidades aliadas.
- Una unidad paralizada puede contraatacar si recibe daño y cumple las condiciones; el daño retira la parálisis.
- Las unidades neutrales no pueden elegir Defensa o Movimiento si pueden atacar; deben atacar o acercarse.
- Las habilidades de unidad no funcionan en el mapa salvo que su texto lo indique.
- Las cartas instantáneas se juegan antes de la tirada de ataque.
- Si se pierde contra neutrales y se pierden todas las unidades, el héroe vuelve a una ciudad/asentamiento controlado y recibe sus unidades iniciales.
- Si un combate neutral termina sin vencedor y no se paga PM para continuar, el héroe vuelve a la última zona visitada.

### 16.4 Unidades

- Una unidad que ataca dos veces tira el dado de ataque por separado en cada ataque.
- Las cartas y efectos sobre una unidad permanecen al voltearla a «unas pocas» salvo que el efecto diga lo contrario.
- Una unidad que ignora contraataques lo ignora en todos sus ataques aplicables.
- Los efectos pasivos de unidad funcionan en combate, no en el mapa.
- Si un dragón ataca a dos objetivos en línea, solo recibe contraataque del objetivo adyacente.
- Las habilidades de momias, cruzados, efrits, dragones negros, dragones fantasma, wyverns y otras unidades se resuelven según el texto de su carta.

---

## 17. Comentarios de diseño

Esta sección conserva las aclaraciones conceptuales del documento de comentarios del diseñador, sin datos editoriales:

- El juego toma del videojuego la exploración, el crecimiento del héroe, la gestión de ciudad, la construcción de ejército y el combate táctico, pero adapta sus escalas para una partida de mesa.
- Las facciones, héroes, edificios, unidades, recursos y escuelas de magia se diseñan para crear identidades mecánicas distintas.
- Las cartas permiten que el héroe evolucione sin convertir cada partida en una campaña obligatoria.
- La IA usa prioridades deterministas para reducir decisiones arbitrarias y hacer reproducible el modo solitario.
- Los escenarios son el marco narrativo y regulan duración, dificultad, mapa y condiciones de victoria; por eso sus fichas se mantienen separadas en el documento de escenarios.
- El Campo de Batalla busca representar el combate táctico directo, mientras el mapa representa exploración, economía y desarrollo.
- Las expansiones añaden módulos independientes para poder combinar facciones, navegación, subterráneo, elementos, bancos de criaturas y combates especiales sin alterar el núcleo.

---

## Nota de alcance

Este archivo contiene el reglamento, las ayudas de consulta, los componentes, procedimientos, tablas, lugares, aclaraciones y comentarios de diseño. Los escenarios, misiones, campañas, sus preparaciones particulares, eventos y condiciones específicas están exclusivamente en [ESCENARIOS_Y_MISIONES.md](ESCENARIOS_Y_MISIONES.md). Los datos editoriales se han omitido.
