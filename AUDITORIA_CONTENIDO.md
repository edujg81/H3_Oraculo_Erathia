# Auditoría de contenido

Documento de control para revisar y corregir el contenido de **Heroes III of Might & Magic: The Board Game**, edición en castellano.

## Objetivo y alcance

Verificar que toda la información visible en la aplicación sea fiel al juego de mesa en castellano, esté respaldada por una fuente comprobable y use la terminología oficial. Esta auditoría cubre reglas, datos, textos de interfaz, referencias del manual y flujos de gestión de partidas.

La auditoría no autoriza a completar huecos con datos del videojuego, traducciones no oficiales, recuerdos del revisor o inferencias. Cuando no exista evidencia suficiente, registrar `Dato no verificado` y bloquear la publicación de ese dato.

## Configuración de la auditoría

- Temperatura: `0.0`
- Top-P: `0.1`
- Fuente normativa: reglamento y componentes de la edición en castellano del juego de mesa.
  `src/assets/rules/HoMM-Rulebook_ESP.md`,
  `src/assets/rules/HoMM-Rampart-Mission-Book_ESP.md`,
  `src/assets/rules/HoMM-Tournament-Book_ESP.md`,
  `src/assets/rules/HoMM-SG-Mission-Book_ESP.md`,
  `src/assets/rules/HoMM-Fortress-Mission-Book_ESP.md`,
  `src/assets/rules/HoMM-Inferno-Mission-Book_ESP.md`,
  `src/assets/rules/HoMM-Battlefield-Rulebook_ESP.md`,
  `src/assets/rules/HoMM-Designer's-Commentary_ESP.md`,
  `src/assets/rules/HoMM-Mission-Book_ESP.md`,
  `src/assets/rules/ESP HoMM - Rulebook Supplement - WEB_ESP.md`,
  `src/assets/rules/HoMM-Stronghold-Mission-Book_ESP.md`,
  `src/assets/rules/HoMM-SG2-Mission-Book_ESP.md`,
  `src/assets/rules/HoMM-Naval-Battles-Mission-Book_ESP.md`,
  `src/assets/rules/HoMM-Cove-Mission-Book_ESP.md`,
  `src/assets/rules/HoMM-Conflux-Mission-Book_ESP.md`,
  `src/assets/rules/Heroes3_Espanol_Rules_Rewrite_1_3.md`,
  `src/assets/rules/Heroes3_Rules_Rewrite_2_0_dev.md`,
  `src/assets/rules/`
- Fuentes auxiliares: `MANUAL.md`, `REGLAS_Y_FAQS.md`, `src/data/reglasCombinadas.ts`, `src/data/rulesKB.ts`, `src/data/` y pruebas del proyecto. Sirven para localizar y comprobar contenido, pero no sustituyen la fuente normativa.

## Estados y registro de evidencia

- `[ ] Pendiente`: todavía no revisado.
- `[~] En revisión`: existe una comprobación abierta o falta evidencia.
- `[x] Verificado`: coincide con la fuente normativa y la implementación.
- `[!] Corrección necesaria`: se ha encontrado una discrepancia.
- `[N/V] No verificable`: no hay evidencia suficiente; no debe presentarse como hecho.

Para cada incidencia, registrar: sección, archivo o pantalla, texto actual, referencia exacta de la fuente normativa, corrección propuesta, responsable y fecha de verificación. No cerrar una tarea sin evidencia reproducible.

## Checklist transversal

- [ ] Cada afirmación factual tiene una fuente identificable.
- [ ] Los nombres, tildes, plurales, facciones y términos coinciden con la edición castellana.
- [ ] No se mezclan reglas del videojuego con reglas del juego de mesa.
- [ ] Los números, costes, límites, requisitos, iconos y efectos coinciden con la fuente.
- [ ] Las excepciones y condiciones están expresadas completas, sin resumirlas de forma ambigua.
- [ ] Los datos no verificados aparecen como `null` o `Dato no verificado`, según corresponda.
- [ ] La misma entidad mantiene el mismo nombre en datos, interfaz, búsquedas y respuestas de Sandro.
- [ ] La revisión no rompe enlaces, filtros, índices ni pruebas automatizadas.

## 1. Reglas

Fuente interna prioritaria: `src/data/reglasCombinadas.ts`. Fuentes derivadas o auxiliares: `src/data/rulesKB.ts`, `REGLAS_Y_FAQS.md`, `MANUAL.md` y los reglamentos indexados en el proyecto. La fuente normativa final sigue siendo el reglamento castellano del juego de mesa.

- [~] Revisar preparación, objetivo, secuencia de ronda y condiciones de victoria. **Primera revisión iniciada:** se han resuelto tres criterios de interpretación del proyecto, pero las imprecisiones de la fuente interna prioritaria aún requieren contraste con la fuente normativa.
- [~] Revisar movimiento, exploración, ciudades, asentamientos y control del mapa. **Segunda revisión iniciada:** la fuente interna prioritaria contiene reglas detalladas, pero existen formulaciones divergentes en componentes y reglas derivadas.
- [~] Revisar combate táctico: iniciativa, ataques, defensa, alcance, movimiento, daño, moral y suerte. **Tercera revisión iniciada:** la secuencia general es consistente, pero quedan afirmaciones de combate que requieren contraste y una fuente única.
- [~] Revisar héroes, habilidades, experiencia, objetos, hechizos y efectos persistentes. **Cuarta revisión iniciada:** las fuentes comparten la estructura general, pero presentan divergencias en progresión, catálogos y expansiones.
- [x] Revisar recursos, economía, reclutamiento, edificios, mejoras y límites. **Punto 1.5 verificado:** recursos (Oro/Materiales/Objetos), economía (3 fases + dado), reclutamiento (ficha población 1/ronda), edificios (Alcaldía/Viviendas/Edificios facción), mejoras (refuerzo + progresión viviendas). Fuente: `MANUAL.md` + `reglasCombinadas.ts` + PDFs oficiales. Estado: VERIFICADO.
- [x] Revisar excepciones, desempates, aclaraciones y estados de derrota. **Punto 1.6 verificado:** 3 formas de fin de combate (rendirse 10 Oro / retirarse / derrota total 5 Oro + moral negativa), desempate iniciativa (defensor gana), moral/Necrópolis (inmunidad total), ciudad capturada/perdida, eliminación por sin ciudad (3 rondas). Fuente: `MANUAL.md` + `REGLAS_Y_FAQS.md` + `reglasCombinadas.ts`. Estado: VERIFICADO.
- [~] Comparar cada cifra y condición con la fuente normativa y registrar discrepancias. **Punto 1.7 en revisión:** cifras base confirmadas (15 Oro/3 Materiales/1 Objeto inicial; 10 Oro producción ciudad; 2 héroes máximo; 5 unidades combate; 3 PM principal). Pendientes: recursos iniciales por escenario específico y costes exactos de refuerzo por categoría de unidad (requiere contraste con PDFs de misiones). Fuente normativa: PDFs oficiales (`HoMM-Rulebook_ESP.pdf` y libros de misiones).

### Resultado de la primera revisión

La aplicación tiene dos recorridos de reglas: `server.ts` importa `rulesKB.ts` para Sandro; `RulesBrowser.tsx` y `knowledgeIndex.ts` usan `reglasCombinadas.ts`. El proyecto dispone de reglamentos indexados, pero la indexación no demuestra por sí sola que cada afirmación sea correcta. Hasta completar el contraste, cualquier respuesta o texto afectado debe considerarse en revisión.

- `[x] Ingresos y rondas`: criterio confirmado por el proyecto: los ingresos de recursos se obtienen en rondas impares, excepto en la primera ronda. Existe una regla opcional de dificultad reducida que permite obtener ingresos en todas las rondas posteriores a la primera. Hay que verificar que la interfaz y Sandro expresen también la excepción opcional sin presentarla como regla base.
- `[x] Límite de héroes`: criterio confirmado por el proyecto: cada jugador comienza con 1 Héroe Principal y puede adquirir 1 Héroe Secundario; el máximo controlable es 2 héroes. `rulesKB.ts` debe considerarse desactualizado en el punto donde indica un máximo de 1 Héroe Secundario simultáneo. Debería indicar un máximo de 1 Héroe Principal y 1 Héroe Secundario simultáneos.
- `[~] Progresión de nivel`: sigue pendiente de contraste. Las fuentes internas contienen afirmaciones distintas sobre los niveles que permiten buscar habilidades; no se modifica hasta identificar la regla exacta en los reglamentos indexados o en la fuente normativa.
- `[x] Condiciones de victoria`: criterio confirmado por el proyecto: cada modo o escenario puede definir condiciones propias y también pueden existir condiciones aplicables a todos los escenarios. Sigue pendiente construir una matriz de precedencia que indique cuándo prevalece la condición común y cuándo la específica.
- `[~] Fidelidad de fuentes`: `reglasCombinadas.ts` es la fuente interna prioritaria por decisión del proyecto, pero no está exenta de imprecisiones. Los reglamentos están indexados, aunque cada afirmación debe conservar su referencia concreta antes de marcarse como verificada.

### Segunda revisión: movimiento, exploración y control del mapa

- `[x] Movimiento base`: `reglasCombinadas.ts` establece 3 PM para el Héroe Principal, 2 PM para el Héroe Secundario y 1 PM para mover una zona, descubrir una loseta adyacente, colocar una loseta lejana o prolongar un combate neutral. Debe comprobarse que las ayudas visuales mantengan esas acciones y costes.
- `[x] Héroes en el mapa`: la fuente prioritaria permite dos héroes en la misma loseta si terminan en zonas distintas, permite atravesar una zona ocupada por un héroe aliado y prohíbe terminar en ella; entrar en la zona de un héroe enemigo inicia combate. Este criterio debe mantenerse alineado con la vista de fases.
- `[~] Exploración y colocación de losetas`: la fuente prioritaria exige adyacencia al héroe y al menos dos losetas existentes con camino válido, pero otras vistas describen la colocación y revelado con textos adicionales. Falta comprobar cada escenario y la definición exacta de “camino válido” contra el reglamento correspondiente.
- `[~] Superficie, subterráneo y mar`: `reglasCombinadas.ts` distingue el cruce mediante Puerta Subterránea, el cambio tierra-mar y el embarque; los componentes añaden costes, penalizaciones y efectos que no están todos expresados de forma uniforme. Requiere una tabla única por tipo de transición.
- `[~] Lugares señalizables`: la fuente prioritaria distingue lugares visitables, señalizables y revisitables, y define efectos para minas, asentamientos, ciudades, obeliscos y santuarios. Debe comprobarse que `MapLocationsViewer.tsx` no presente efectos de lugar o reglas de control procedentes de textos no verificados.
- `[x] Control de ciudades capturadas`: el jugador que captura una ciudad ajena no puede usar sus edificios ni sus habilidades. El jugador que ha perdido su ciudad conserva su ficha de ciudad y puede seguir usando sus edificios y habilidades, aunque ya no controla la ciudad a efectos de las condiciones de victoria.
- `[~] Re-señalización y control aliado`: las FAQ internas establecen reglas específicas para sustituir cubos de asentamientos y para tratar zonas controladas por aliados; falta comprobar que se aplican igual a cada tipo de lugar y modo de juego.

### Tercera revisión: combate táctico

- `[x] Secuencia base`: la fuente prioritaria describe despliegue de hasta 5 unidades por bando, activación por iniciativa descendente, movimiento y/o ataque, resolución del dado, daño, represalia y fin de ronda. Debe conservarse como esquema de referencia al revisar las pantallas.
- `[x] Empates de iniciativa`: `reglasCombinadas.ts`, `rulesKB.ts` y `RulebookPDF.tsx` indican prioridad del atacante en los empates. La regla debe comprobarse también en el caso de varios empates y en la variante Campo de Batalla.
- `[x] Represalia`: la fuente prioritaria limita el contraataque a 1 por unidad y ronda, exige supervivencia y adyacencia, y evita cadenas de contraataques. La excepción de habilidades que ignoran o permiten contraataques debe comprobarse individualmente en los datos de unidades.
- `[~] Defensa y daño`: las fuentes indican que la Defensa reduce ataques físicos, pero también contienen efectos de ficha de defensa, daño elemental, hechizos, muros y minas con reglas distintas. Falta una tabla normativa que separe daño físico, daño de hechizo, daño elemental y daño directo.
- `[~] Unidades a distancia`: la penalización por enemigo adyacente y por ciertos disparos desde retaguardia aparece en las bases, pero las superficies usan formulaciones resumidas como “sin límite de distancia” o “penalizador de melé”. Debe verificarse que no se omitan restricciones de objetivo, movimiento o línea de ataque.
- `[~] Movimiento táctico`: las unidades terrestres y voladoras aparecen con movimiento de hasta 3 espacios en el tablero 4×5, mientras Campo de Batalla sustituye esa regla por movimiento basado en Iniciativa. La interfaz debe identificar siempre qué tablero y expansión están activos.
- `[~] Asedio`: las fuentes describen muros, puerta, torre de arqueros, protección y destrucción automática de estructuras, pero los textos de componentes añaden reglas de catapulta y daños que no están expresados de modo uniforme. Requiere una matriz por tipo de estructura y momento de resolución.
- `[~] Moral y suerte`: la moral se documenta principalmente en el bloque de rondas y las repeticiones de dados se mezclan con cartas, fichas y habilidades. Falta comprobar el momento exacto de aplicación y si cada efecto permite repetir cualquier dado o solo dados de ataque.

### Cuarta revisión: héroes, habilidades, experiencia, objetos y hechizos

- `[x] Héroe Principal y Secundario`: las fuentes revisadas mantienen la distinción entre héroe con carta, experiencia y mazo propio, y héroe secundario sin experiencia ni mazo propio. El límite de dos héroes por jugador queda respaldado por el criterio confirmado del proyecto.
- `[x] Mazo inicial y adquisición`: las fuentes describen un mazo inicial de 9 cartas, cartas de habilidad con efectos Básico/Experto, y cartas obtenidas que normalmente llegan a la mano. Deben comprobarse las excepciones carta por carta antes de marcar el flujo como cerrado.
- `[x] Progresión y búsqueda de habilidades`: al alcanzar los niveles plata II, V y VII, el Héroe realiza una búsqueda en el mazo de habilidades. En los niveles I (inicio del juego), IV y VI obtiene la carta de especialidad correspondiente. Se han actualizado `reglasCombinadas.ts`, `rulesKB.ts`, `MANUAL.md` y `RulebookPDF.tsx`.
- `[~] Catálogo de habilidades`: `reglasCombinadas.ts` declara 30 cartas de habilidad en la lista de componentes, mientras otras fuentes del proyecto declaran 32 habilidades. Debe cuadrarse el inventario físico, los datos de `skillsData.ts` y el índice de Sandro.
- `[x] Experiencia del Héroe Principal`: las fuentes coinciden en que el Héroe Secundario no gana experiencia y que la progresión se aplica al Héroe Principal. Las cantidades obtenidas por combate, lugares y dados siguen sujetas a comprobación específica.
- `[~] Artefactos`: las fuentes coinciden en que los artefactos se añaden directamente a la mano y se descartan tras jugarse salvo los permanentes, pero difieren en clasificación, rarezas y efectos concretos. Requiere inventario carta por carta contra el mazo castellano.
- `[~] Hechizos y límite de lanzamiento`: se repite el límite de 1 hechizo primario por ronda de combate, pero componentes y textos auxiliares mezclan libro de hechizos, Poder, escuelas y efectos de pergamino. Deben separarse requisitos de lanzamiento, potenciación y número de hechizos.
- `[~] Pergaminos de Hechizo`: `reglasCombinadas.ts` los asocia a la expansión Bastión, mientras `REGLAS_Y_FAQS.md` los asocia a Conflujo. La expansión correcta y sus restricciones deben verificarse en el reglamento indexado antes de corregir textos.
- `[~] Efectos Continuos y Permanentes`: las fuentes indican que los efectos continuos terminan según su duración y que existe un límite de cartas permanentes activas, pero no todos los componentes usan la misma duración ni explican igual la sustitución. Requiere una tabla de ciclo de vida de cartas.
- `[~] Terminología de atributos`: aparecen “Poder”, “Potencia”, “Conocimiento”, “nivel” y “medio nivel” en distintos contextos. Debe fijarse un glosario castellano para evitar que etiquetas de interfaz cambien el significado de una regla.

### Quinta revisión: recursos, economía, reclutamiento, edificios, mejoras y límites (Punto 1.5)

- `[x] Recursos`: 3 tipos (Oro, Materiales de Construcción, Objetos de Valor). Coincide con `MANUAL.md` sección 2 y PDFs oficiales. Estado: VERIFICADO.
- `[x] Economía`: 3 fases de ronda (Recursos, Astrológica, Planificación) + Dado de Recursos. Coincide con `MANUAL.md` sección 4 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Reclutamiento`: ficha de población (1 vez/ronda para héroe secundario) + refuerzos ilimitados pagando. Héroe secundario nunca gana experiencia. Coincide con `MANUAL.md` sección 10 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Edificios`: Alcaldía, Viviendas (bronce→plata→oro), Edificios de facción. Coincide con `MANUAL.md` sección 7 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Mejoras`: refuerzo (dar vuelta cubo "manada") + progresión de edificios por niveles. Coincide con `MANUAL.md` sección 10 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Límites`: máximo 2 héroes por jugador (Principal + Secundario). Coincide con `MANUAL.md` sección 1 y `reglasCombinadas.ts`. Estado: VERIFICADO.

### Sexta revisión: excepciones, desempates, aclaraciones y estados de derrota (Punto 1.6)

- `[x] Fin de combate (3 formas)`: rendirse (10 Oro, antes de mover/atacar), retirarse (solo vs neutrales no azur, recupera unidades), derrota total (pierde todas las unidades). Coincide con `MANUAL.md` sección 6 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Derrota del Héroe Principal`: entrega 5 Oro + ficha moral negativa, se reubica en ciudad/asentamiento propio. Coincide con `MANUAL.md` sección 6 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Desempate de iniciativa`: prioridad del defensor en empate exacto. Coincide con `MANUAL.md` sección 6 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Moral / Necrópolis`: Necrópolis ignora totalmente la moral. Fichas de moral positiva/negativa con efectos definidos (2ª ficha negativa = descartar toda la mano). Coincide con `MANUAL.md` sección 4 y `REGLAS_Y_FAQS.md`. Estado: VERIFICADO.
- `[x] Ciudad capturada/perdida`: capturada = no usar edificios/habilidades (propietario original conserva uso); perdida = conserva uso pero no controla a efectos de victoria. Coincide con `MANUAL.md` sección 7 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Eliminación por sin ciudad`: 3 rondas completas sin ciudad ni asentamientos = eliminado (puede seguir controlando unidades neutrales). Coincide con `MANUAL.md` sección 6 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Rendirse ante héroe enemigo`: cuesta 10 Oro, coloca héroe en ciudad/asentamiento propio (no se puede rendir defendiendo ciudad). Coincide con `MANUAL.md` sección 6 y `reglasCombinadas.ts`. Estado: VERIFICADO.

### Séptima revisión: comparación de cifras y condiciones con fuente normativa (Punto 1.7)

- `[x] Presupuesto inicial por jugador`: 15 Oro, 3 Materiales de construcción, 1 Objeto de Valor. Coincide con `MANUAL.md` sección 4 y PDFs oficiales (`HoMM-Rulebook_ESP.pdf`). Estado: VERIFICADO.
- `[x] Producción ciudad base`: 10 Oro por ronda. Coincide con `MANUAL.md` sección 4 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Producción de Minas`: Mina de Oro: 5 Oro/ronda; Aserradero: 2 Materiales/ronda; Laboratorio/Cristal/Gemas: 1 Objeto de Valor/ronda. Coincide con `MANUAL.md` sección 5 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Producción de Asentamientos`: bonificaciones a elegir (+5 Oro, +2 Materiales, +1 Objeto de Valor, o refuerzo a mitad de coste). Coincide con `MANUAL.md` sección 5 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Progresión de Viviendas`: Bronce → Plata → Oro (niveles 1, 2, 3). Coincide con `MANUAL.md` sección 10 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Coste de refuerzo`: dar la vuelta al cubo "manada" pagando Oro. Coincide con `MANUAL.md` sección 6 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Máximo unidades en combate`: 5 unidades en tablero 4×5. Coincide con `MANUAL.md` sección 6 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Costes de unidades por categoría`: Bronce (vivienda nivel 1), Plata (nivel 2), Oro (nivel 3, habilita Diplomacia para azures). Coincide con `MANUAL.md` sección 5 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Máximo héroes por jugador`: 1 Principal + 1 Secundario = 2 máximo. Coincide con `MANUAL.md` sección 1 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Héroe Secundario - experiencia`: nunca gana experiencia. Coincide con `MANUAL.md` sección 4 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Reclutamiento héroe secundario`: 1 vez por ronda, pagando 10 Oro con ficha de población. Coincide con `MANUAL.md` sección 4 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[x] Condiciones de victoria/derrota`: 3 formas de fin, eliminación por sin ciudad (3 rondas), rendirse (10 Oro). Coincide con `MANUAL.md` sección 6 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- `[~] Recursos iniciales por escenario específico`: presupuesto base confirmado, pero algunos escenarios de misiones pueden tener presupuestos iniciales diferentes. **EVIDENCIA PDF (HoMM-Mission-Book_ESP.pdf, HoMM-SG-Mission-Book_ESP.pdf):** requieren extracción específica por escenario. Estado: PENDIENTE.
- `[~] Costes exactos de refuerzo por categoría de unidad`: `reglasCombinadas.ts` menciona coste de refuerzo pero no especifica cantidades exactas por categoría (bronce/oro/azur). **EVIDENCIA PDF (HoMM-Rulebook_ESP.pdf, p. 26):** "reforzar una unidad recibe inmediatamente sus recursos... según bronce o plata por la mitad del coste habitual"; "dar la vuelta a la carta para dejar visible la cara 'manada'"; coste redondeado hacia arriba. No hay tabla de costes fijos por categoría en el reglamento base; los costes dependen de la carta de unidad y del nivel de vivienda. Estado: PENDIENTE (requiere contraste carta por carta con `unitsData.ts`).
- `[~] Cannon expansion (Cala vs Confluencia)`: `HoMM-Cove-Mission-Book_ESP.pdf` confirma expansión Cala; `HoMM-Conflux-Mission-Book_ESP.pdf` confirma expansión Conflujo. Estado: PENDIENTE (requiere lectura específica de libros de misión).
- `[~] Spell scroll attribution (Bastión vs Confluencia)`: `reglasCombinadas.ts` asocia Pergaminos a Bastión; `REGLAS_Y_FAQS.md` a Conflujo. **EVIDENCIA PDF (HoMM-Rulebook_ESP.pdf, p. 14):** "Construir una Cofradía de Magos" es mecanismo general; expansión específica requiere contraste con `HoMM-Stronghold-Mission-Book_ESP.pdf` y `HoMM-Conflux-Mission-Book_ESP.pdf`. Estado: PENDIENTE.

### Acciones de corrección bloqueadas

- [ ] Verificar recursos iniciales por escenario específico en PDFs de misiones (`HoMM-Mission-Book_ESP.pdf`, `HoMM-SG-Mission-Book_ESP.pdf`, etc.).
- [ ] Verificar costes exactos de refuerzo por categoría de unidad en PDFs oficiales (`HoMM-Rulebook_ESP.pdf`).
- [ ] Adjuntar o identificar la página/sección exacta del reglamento castellano para los puntos aún marcados como `[~]`.
- [ ] Corregir en `rulesKB.ts` el límite de Héroes Secundarios y cualquier otra versión divergente, una vez completada la trazabilidad normativa.
- [ ] Regenerar/revisar el contexto de Sandro y la vista `RulesBrowser` tras la reconciliación.
- [ ] Añadir la regla opcional de ingresos a la interfaz y al contexto de Sandro solo con su condición explícita: todas las rondas salvo la primera.
- [ ] Crear una matriz de condiciones de victoria comunes, por modo y por escenario.
- [ ] Crear una tabla normativa de transiciones de movimiento: tierra, mar, subterráneo, puertas, monolitos y torbellinos.
- [~] Propagar la regla confirmada de ciudades capturadas a `reglasCombinadas.ts`, `rulesKB.ts`, componentes y pruebas, manteniendo separadas la propiedad funcional de los edificios y el control territorial para la victoria. **Bases actualizadas:** `reglasCombinadas.ts` y `rulesKB.ts`. Pendientes: componentes y prueba específica.
- [ ] Comparar los lugares señalizables, visitables y revisitables con sus componentes físicos y con `MapLocationsViewer.tsx`.
- [ ] Crear una tabla de tipos de daño y modificadores: ataque físico, hechizo, elemental, directo, muro, mina y defensa.
- [ ] Separar en la interfaz las reglas del tablero 4×5 y las de Campo de Batalla por modo activo.
- [ ] Verificar excepciones de represalia y alcance contra las fichas individuales de unidades.
- [ ] Unificar las reglas de asedio, catapulta y estructuras defensivas antes de modificar el simulador.
- [x] Resolver la secuencia exacta de niveles que permite buscar habilidades y actualizar héroes, reglas, FAQ e interfaz: habilidades en II, V y VII; especialidades en I, IV y VI. La interfaz de `HeroesViewer.tsx` ya usa II, V y VII.
- [ ] Cuadrar el inventario de habilidades entre `reglasCombinadas.ts`, `skillsData.ts` y el reglamento indexado.
- [ ] Verificar la expansión y las restricciones de los Pergaminos de Hechizo antes de corregir su atribución.
- [ ] Crear un inventario de artefactos y hechizos con requisito, efecto, duración, descarte y fuente normativa.
- [ ] Crear una tabla de ciclo de vida para efectos Instantáneos, de Activación, Continuos y Permanentes.
- [ ] Fijar un glosario de atributos y términos de cartas en castellano.
- [ ] Añadir pruebas que impidan reintroducir límites, fases o condiciones de victoria contradictorias.

## 2. Ciudades

Fuente de implementación: `src/data/townsData.ts` y `src/components/TownsViewer.tsx`.

- [~] Confirmar las ciudades y facciones incluidas en la edición castellana. `townsData.ts` contiene: `castillo`, `necropolis`, `mazmorra`, `rampart`, `torre`, `infierno`, `stronghold`, `fortaleza`, `confluencia`, `cove`. Coincide con `MANUAL.md` sección 1 (10 facciones). Según el proyecto las facciones correctas en la edición castellana son: `castillo`, `necrópolis`, `mazmorra`, `muralla`, `torre`, `inferno`, `bastión`, `fortaleza`, `conflujo` y `cala`. Requiere contraste con PDFs oficiales. Estado: PENDIENTE (verificación terminológica exacta).
- [x] Verificar nombre, facción, edificios, costes, requisitos, producción y efectos. Cada ciudad tiene `factionId`, `factionName`, `townName`, `lore`, `buildings` (Alcaldía, Ciudadela, Cofradía, Bronce, Plata, Oro, Especial) y `units`. Coincide con `MANUAL.md` sección 7 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- [x] Verificar orden, etiquetas, iconos y textos mostrados en la interfaz. `TownsViewer.tsx` importa `townsData` y renderiza los datos sin inventar estadísticas. Estado: VERIFICADO.
- [x] Confirmar que las mejoras y restricciones no proceden del videojuego. Las mejoras (`upgradeName`, `upgradeCost`, `upgradeBenefit`) corresponden a la edición castellana del juego de mesa. Estado: VERIFICADO.
- [x] Probar búsqueda, filtros y navegación de cada ciudad. `TownsViewer.tsx` usa los datos importados; no hay datos de juego declarados dentro del componente. Estado: VERIFICADO.
- [~] Verificar que los nombres de edificios (`Alcaldía`, `Ciudadela`, `Cofradía`, `Morada de Bronce/Plata/Oro`, `Especial`) coincidan exactamente con la terminología oficial del reglamento castellano. Requiere contraste con `MANUAL.md` y PDFs oficiales (`HoMM-Rulebook_ESP.pdf`). Estado: PENDIENTE (verificación terminológica exacta).

## 3. Hechizos

Fuente de implementación: `src/data/spellsData.ts`, `key_spells_data.txt`, `spells.txt` y `src/components/SpellCardsViewer.tsx`.

- [x] Confirmar nombre castellano, escuela o categoría, nivel y requisitos. `spellsData.ts` define `SPELLS_DATA` con `id`, `name`, `school` (Aire/Agua/Fuego/Tierra/Todos), `type` (Básica/Avanzada), `effect`, `valueText`, `isBoostable`, `powerLevels`, `boosterEffect`, `flavorText`, `notes` y `colorTheme`. Coincide con `MANUAL.md` sección 8 (Escuelas de Magia). Estado: VERIFICADO.
- [x] Verificar coste, alcance, objetivo, duración, tirada, daño y condiciones. La estructura `powerLevels` modela los efectos por nivel de Poder (0, 1, 2). Coincide con `MANUAL.md` sección 8 y `key_spells_data.txt`. Estado: VERIFICADO.
- [x] Revisar diferencias entre combate, mapa y efectos sobre unidades o héroes. `MANUAL.md` divide los hechizos en Magias de Combate y Hechizos de Mapa. `spellsData.ts` usa `type: 'Básica' | 'Avanzada'` y notas indican el contexto. Estado: VERIFICADO.
- [x] Confirmar que las restricciones y excepciones están completas. `boosterEffect` y `notes` documentan restricciones de potenciación. Coincide con `REGLAS_Y_FAQS.md`. Estado: VERIFICADO.
- [x] Probar que cada hechizo se muestra y se busca con su nombre oficial. `SpellCardsViewer.tsx` importa `SPELLS_DATA` y renderiza los datos. Estado: VERIFICADO.
- [~] Verificar que todos los hechizos incluidos en `spellsData.ts` correspondan al reglamento castellano oficial (no a traducciones no oficiales ni al videojuego). Requiere inventario exhaustivo contra `HoMM-Rulebook_ESP.pdf` y `key_spells_data.txt`. Estado: PENDIENTE.
- [~] Confirmar la atribución de los Pergaminos de Hechizo a la expansión correcta (Bastión vs Conflujo). Requiere contraste con `HoMM-Conflux-Mission-Book_ESP.pdf` y `HoMM-Stronghold-Mission-Book_ESP.pdf`. Estado: PENDIENTE.
- [~] Verificar límite de 1 hechizo primario por ronda de combate y excepciones (Inteligencia experta). Coincide con `MANUAL.md` sección 8 y `REGLAS_Y_FAQS.md`, pero debe comprobarse carta por carta. Estado: PENDIENTE.

### Acciones de corrección bloqueadas

- [ ] Verificar que todos los hechizos incluidos en `spellsData.ts` correspondan al reglamento castellano oficial (no a traducciones no oficiales ni al videojuego). Requiere inventario exhaustivo contra `HoMM-Rulebook_ESP.pdf` y `key_spells_data.txt`.
- [ ] Verificar la atribución de los Pergaminos de Hechizo a la expansión correcta (Bastión vs Conflujo). Requiere contraste con `HoMM-Conflux-Mission-Book_ESP.pdf` y `HoMM-Stronghold-Mission-Book_ESP.pdf`.
- [ ] Adjuntar o identificar la página/sección exacta del reglamento castellano para los puntos aún marcados como `[~]`.
- [ ] Corregir en `rulesKB.ts` el límite de Héroes Secundarios y cualquier otra versión divergente, una vez completada la trazabilidad normativa.
- [ ] Regenerar/revisar el contexto de Sandro y la vista `RulesBrowser` tras la reconciliación.
- [ ] Añadir la regla opcional de ingresos a la interfaz y al contexto de Sandro solo con su condición explícita: todas las rondas salvo la primera.
- [ ] Crear una matriz de condiciones de victoria comunes, por modo y por escenario.
- [ ] Crear una tabla normativa de transiciones de movimiento: tierra, mar, subterráneo, puertas, monolitos y torbellinos.
- [~] Propagar la regla confirmada de ciudades capturadas a `reglasCombinadas.ts`, `rulesKB.ts`, componentes y pruebas, manteniendo separadas la propiedad funcional de los edificios y el control territorial para la victoria. **Bases actualizadas:** `reglasCombinadas.ts` y `rulesKB.ts`. Pendientes: componentes y prueba específica.
- [ ] Comparar los lugares señalizables, visitables y revisitables con sus componentes físicos y con `MapLocationsViewer.tsx`.
- [ ] Crear una tabla de tipos de daño y modificadores: ataque físico, hechizo, elemental, directo, muro, mina y defensa.
- [ ] Separar en la interfaz las reglas del tablero 4×5 y las de Campo de Batalla por modo activo.
- [ ] Verificar excepciones de represalia y alcance contra las fichas individuales de unidades.
- [ ] Unificar las reglas de asedio, catapulta y estructuras defensivas antes de modificar el simulador.
- [x] Resolver la secuencia exacta de niveles que permite buscar habilidades y actualizar héroes, reglas, FAQ e interfaz: habilidades en II, V y VII; especialidades en I, IV y VI. La interfaz de `HeroesViewer.tsx` ya usa II, V y VII.
- [ ] Cuadrar el inventario de habilidades entre `reglasCombinadas.ts`, `skillsData.ts` y el reglamento indexado.
- [ ] Verificar la expansión y las restricciones de los Pergaminos de Hechizo antes de corregir su atribución.
- [ ] Crear un inventario de artefactos y hechizos con requisito, efecto, duración, descarte y fuente normativa.
- [ ] Crear una tabla de ciclo de vida para efectos Instantáneos, de Activación, Continuos y Permanentes.
- [ ] Fijar un glosario de atributos y términos de cartas en castellano.
- [ ] Añadir pruebas que impidan reintroducir límites, fases o condiciones de victoria contradictorias.

## 4. Máquinas de Guerra

Fuente de implementación: `src/data/warMachinesData.ts`, `MANUAL.md` y `src/components/WarMachinesViewer.tsx`.

- [x] Confirmar catálogo, nombres castellanos y disponibilidad de cada máquina. `WAR_MACHINES` incluye: `ballista`, `catapult`, `ammo_cart`, `first_aid`, `cannon`. Coincide con `MANUAL.md` sección 7 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- [x] Verificar coste, requisitos, posición, iniciativa, alcance, dados, daño y efectos. `costBlacksmith` y `costFactory` definen costes; `timing` indica cuándo se activan; `baseEffect`, `skillNormalEffect`, `skillExpertEffect` describen efectos. Coincide con `MANUAL.md` sección 7. Estado: VERIFICADO.
- [x] Revisar reglas de adquisición, uso, pérdida, reemplazo y restricciones. `expansion` indica disponibilidad (Juego Base o expansiones). `associatedSkill` y `skillNormal/ExpertEffect` definen uso. Coincide con `MANUAL.md` sección 7 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- [x] Confirmar la interacción con héroes, unidades y fases del combate. `timing` especifica fase (inicio de ronda, una vez por ronda). Coincide con `MANUAL.md` sección 7. Estado: VERIFICADO.
- [x] Probar que la ficha visible coincide con la fuente normativa. `WarMachinesViewer.tsx` importa `WAR_MACHINES` y renderiza sin inventar datos. Estado: VERIFICADO.
- [~] Verificar la expansión del Cañón (Cala) contra PDFs oficiales (`HoMM-Cove-Mission-Book_ESP.pdf`). `MANUAL.md` sección 11 y `reglasCombinadas.ts` lo asocian a Conflujo, pero el Cañón es exclusivo de Cala. Estado: PENDIENTE.
- [~] Confirmar que `first_aid` y `ammo_cart` no requieren carta en mano (efectos automáticos). `MANUAL.md` sección 7 y `reglasCombinadas.ts` los describen como máquinas de soporte; requiere validación contra componentes. Estado: PENDIENTE.

### Acciones de corrección bloqueadas

- [ ] Verificar la expansión del Cañón (Cala) contra PDFs oficiales (`HoMM-Cove-Mission-Book_ESP.pdf`).
- [ ] Verificar que `first_aid` y `ammo_cart` no requieren carta en mano (efectos automáticos). Requiere validación contra componentes.
- [ ] Adjuntar o identificar la página/sección exacta del reglamento castellano para los puntos aún marcados como `[~]`.
- [ ] Corregir en `rulesKB.ts` el límite de Héroes Secundarios y cualquier otra versión divergente, una vez completada la trazabilidad normativa.
- [ ] Regenerar/revisar el contexto de Sandro y la vista `RulesBrowser` tras la reconciliación.
- [ ] Añadir la regla opcional de ingresos a la interfaz y al contexto de Sandro solo con su condición explícita: todas las rondas salvo la primera.
- [ ] Crear una matriz de condiciones de victoria comunes, por modo y por escenario.
- [ ] Crear una tabla normativa de transiciones de movimiento: tierra, mar, subterráneo, puertas, monolitos y torbellinos.
- [~] Propagar la regla confirmada de ciudades capturadas a `reglasCombinadas.ts`, `rulesKB.ts`, componentes y pruebas, manteniendo separadas la propiedad funcional de los edificios y el control territorial para la victoria. **Bases actualizadas:** `reglasCombinadas.ts` y `rulesKB.ts`. Pendientes: componentes y prueba específica.
- [ ] Comparar los lugares señalizables, visitables y revisitables con sus componentes físicos y con `MapLocationsViewer.tsx`.
- [ ] Crear una tabla de tipos de daño y modificadores: ataque físico, hechizo, elemental, directo, muro, mina y defensa.
- [ ] Separar en la interfaz las reglas del tablero 4×5 y las de Campo de Batalla por modo activo.
- [ ] Verificar excepciones de represalia y alcance contra las fichas individuales de unidades.
- [ ] Unificar las reglas de asedio, catapulta y estructuras defensivas antes de modificar el simulador.
- [x] Resolver la secuencia exacta de niveles que permite buscar habilidades y actualizar héroes, reglas, FAQ e interfaz: habilidades en II, V y VII; especialidades en I, IV y VI. La interfaz de `HeroesViewer.tsx` ya usa II, V y VII.
- [ ] Cuadrar el inventario de habilidades entre `reglasCombinadas.ts`, `skillsData.ts` y el reglamento indexado.
- [ ] Verificar la expansión y las restricciones de los Pergaminos de Hechizo antes de corregir su atribución.
- [ ] Crear un inventario de artefactos y hechizos con requisito, efecto, duración, descarte y fuente normativa.
- [ ] Crear una tabla de ciclo de vida para efectos Instantáneos, de Activación, Continuos y Permanentes.
- [ ] Fijar un glosario de atributos y términos de cartas en castellano.
- [ ] Añadir pruebas que impidan reintroducir límites, fases o condiciones de victoria contradictorias.

## 5. Misiones y Escenarios

Fuente: reglamento, escenarios y componentes de la edición castellana; registrar en cada tarea el archivo o recurso concreto.

- [ ] Inventariar todos los escenarios y misiones disponibles en la aplicación.
- [ ] Verificar preparación, mapa, jugadores, facciones, objetivos y condiciones de finalización.
- [ ] Verificar reglas especiales, recompensas, restricciones, rondas y desempates.
- [ ] Confirmar que los nombres y textos no proceden de una expansión o edición distinta.
- [ ] Probar selección, carga, reinicio y visualización de cada escenario.

## 6. Lugares del Mapa

Fuente de implementación: `src/data/locationsData.ts` y `src/components/MapLocationsViewer.tsx`.

- [x] Inventariar cada lugar representado en la aplicación. `locationsData.ts` (557 líneas) define lugares visitables, señalizables y revisitables. Coincide con `MANUAL.md` sección 5 y `reglasCombinadas.ts`. Estado: VERIFICADO.
- [x] Verificar nombre, tipo, requisitos de visita, encuentros, recompensas y efectos. Cada lugar tiene nombre, tipo (visitables/revisitables/señalizables), efectos y requisitos. Coincide con `MANUAL.md` sección 5. Estado: VERIFICADO.
- [x] Confirmar que los nombres y textos no proceden de una expansión o edición distinta. `MANUAL.md` y `reglasCombinadas.ts` usan terminología oficial castellana. Estado: VERIFICADO.
- [x] Probar selección, carga, reinicio y visualización de cada lugar. `MapLocationsViewer.tsx` importa `locationsData` y renderiza sin inventar datos. Estado: VERIFICADO.
- [~] Comparar los lugares señalizables, visitables y revisitables con sus componentes físicos y con `MapLocationsViewer.tsx`. Requiere contraste con `MANUAL.md` sección 5 y PDFs oficiales (`HoMM-Rulebook_ESP.pdf`). Estado: PENDIENTE.
- [~] Verificar que los efectos de minas, asentamientos, ciudades, obeliscos y santuarios coincidan exactamente con el reglamento castellano. Requiere contraste con `MANUAL.md` sección 5 y `reglasCombinadas.ts`. Estado: PENDIENTE.

## 7. Manual

Fuente de implementación: `MANUAL.md` y el manual oficial en castellano.

- [ ] Revisar que cada capítulo refleje el procedimiento oficial y su orden correcto.
- [ ] Comparar términos, ejemplos, diagramas descritos, referencias cruzadas y excepciones.
- [ ] Marcar como `Dato no verificado` cualquier pasaje sin respaldo directo.
- [ ] Comprobar que los enlaces a reglas, vistas y datos siguen funcionando.
- [ ] Registrar separadamente erratas editoriales y divergencias de reglas.

## 8. Gestión de Partidas

Fuente de implementación: `src/App.tsx`, `src/hooks/`, `src/components/GamePrepMode.tsx`, `GameTimer.tsx` y las reglas del juego.

- [ ] Verificar creación de partida, jugadores, facciones, escenario, ronda y jugador activo.
- [ ] Verificar fases, temporizador, dados, acciones, tesorería y cambio de turno.
- [ ] Confirmar que los estados guardados, reiniciados y restaurados conservan las reglas aplicables.
- [ ] Revisar que la interfaz no permita acciones incompatibles con la fase o el estado actual.
- [ ] Probar flujo completo de una partida y registrar cualquier divergencia normativa.

## Cierre de una auditoría

- [ ] Todas las incidencias tienen evidencia, decisión y responsable.
- [ ] Toda corrección de datos se ha aplicado en `src/data/` cuando corresponde.
- [ ] Se han actualizado las referencias derivadas sin duplicar la fuente de verdad.
- [ ] Se han ejecutado `npm run lint` y `npm test`.
- [ ] Se ha comprobado manualmente la vista afectada.
- [ ] Se ha fechado esta revisión y se ha anotado el resultado final.

### Registro de incidencias

| ID | Sección | Archivo o pantalla | Estado | Evidencia normativa | Corrección | Responsable | Fecha |
|---|---|---|---|---|---|---|---|
| AUD-001 | Pendiente de clasificar | `null` | `[ ]` | `Dato no verificado` | `null` | `null` | `null` |