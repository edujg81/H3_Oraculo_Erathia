# Auditoría de contenido

Documento de control para revisar y corregir el contenido de **Heroes III of Might & Magic: The Board Game**, edición en castellano.

## Objetivo y alcance

Verificar que toda la información visible en la aplicación sea fiel al juego de mesa en castellano, esté respaldada por una fuente comprobable y use la terminología oficial. Esta auditoría cubre reglas, datos, textos de interfaz, referencias del manual y flujos de gestión de partidas.

La auditoría no autoriza a completar huecos con datos del videojuego, traducciones no oficiales, recuerdos del revisor o inferencias. Cuando no exista evidencia suficiente, registrar `Dato no verificado` y bloquear la publicación de ese dato.

## Configuración de la auditoría

- Temperatura: `0.0`
- Top-P: `0.1`
- Fuente normativa: reglamento y componentes de la edición en castellano del juego de mesa.
- Fuentes auxiliares: `MANUAL.md`, `REGLAS_Y_FAQS.md`, `src/data/` y pruebas del proyecto. Sirven para localizar y comprobar contenido, pero no sustituyen la fuente normativa.

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
- [ ] Revisar combate táctico: iniciativa, ataques, defensa, alcance, movimiento, daño, moral y suerte.
- [ ] Revisar héroes, habilidades, experiencia, objetos, hechizos y efectos persistentes.
- [ ] Revisar recursos, economía, reclutamiento, edificios, mejoras y límites.
- [ ] Revisar excepciones, desempates, aclaraciones y estados de derrota.
- [ ] Comparar cada cifra y condición con la fuente normativa y registrar discrepancias.

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

### Acciones de corrección bloqueadas

- [ ] Adjuntar o identificar la página/sección exacta del reglamento castellano para los puntos aún marcados como `[~]`.
- [ ] Corregir en `rulesKB.ts` el límite de Héroes Secundarios y cualquier otra versión divergente, una vez completada la trazabilidad normativa.
- [ ] Regenerar/revisar el contexto de Sandro y la vista `RulesBrowser` tras la reconciliación.
- [ ] Añadir la regla opcional de ingresos a la interfaz y al contexto de Sandro solo con su condición explícita: todas las rondas salvo la primera.
- [ ] Crear una matriz de condiciones de victoria comunes, por modo y por escenario.
- [ ] Crear una tabla normativa de transiciones de movimiento: tierra, mar, subterráneo, puertas, monolitos y torbellinos.
- [~] Propagar la regla confirmada de ciudades capturadas a `reglasCombinadas.ts`, `rulesKB.ts`, componentes y pruebas, manteniendo separadas la propiedad funcional de los edificios y el control territorial para la victoria. **Bases actualizadas:** `reglasCombinadas.ts` y `rulesKB.ts`. Pendientes: componentes y prueba específica.
- [ ] Comparar los lugares señalizables, visitables y revisitables con sus componentes físicos y con `MapLocationsViewer.tsx`.
- [ ] Añadir pruebas que impidan reintroducir límites, fases o condiciones de victoria contradictorias.

## 2. Ciudades

Fuente de implementación: `src/data/townsData.ts` y `src/components/TownsViewer.tsx`.

- [ ] Confirmar las ciudades y facciones incluidas en la edición castellana.
- [ ] Verificar nombre, facción, edificios, costes, requisitos, producción y efectos.
- [ ] Verificar orden, etiquetas, iconos y textos mostrados en la interfaz.
- [ ] Confirmar que las mejoras y restricciones no proceden del videojuego.
- [ ] Probar búsqueda, filtros y navegación de cada ciudad.

## 3. Hechizos

Fuente de implementación: `src/data/spellsData.ts`, `key_spells_data.txt`, `spells.txt` y `src/components/SpellCardsViewer.tsx`.

- [ ] Confirmar nombre castellano, escuela o categoría, nivel y requisitos.
- [ ] Verificar coste, alcance, objetivo, duración, tirada, daño y condiciones.
- [ ] Revisar diferencias entre combate, mapa y efectos sobre unidades o héroes.
- [ ] Confirmar que las restricciones y excepciones están completas.
- [ ] Probar que cada hechizo se muestra y se busca con su nombre oficial.

## 4. Máquinas de Guerra

Fuente de implementación: `src/data/warMachinesData.ts`, `MANUAL.md` y `src/components/WarMachinesViewer.tsx`.

- [ ] Confirmar catálogo, nombres castellanos y disponibilidad de cada máquina.
- [ ] Verificar coste, requisitos, posición, iniciativa, alcance, dados, daño y efectos.
- [ ] Revisar reglas de adquisición, uso, pérdida, reemplazo y restricciones.
- [ ] Confirmar la interacción con héroes, unidades y fases del combate.
- [ ] Probar que la ficha visible coincide con la fuente normativa.

## 5. Misiones y Escenarios

Fuente: reglamento, escenarios y componentes de la edición castellana; registrar en cada tarea el archivo o recurso concreto.

- [ ] Inventariar todos los escenarios y misiones disponibles en la aplicación.
- [ ] Verificar preparación, mapa, jugadores, facciones, objetivos y condiciones de finalización.
- [ ] Verificar reglas especiales, recompensas, restricciones, rondas y desempates.
- [ ] Confirmar que los nombres y textos no proceden de una expansión o edición distinta.
- [ ] Probar selección, carga, reinicio y visualización de cada escenario.

## 6. Lugares del Mapa

Fuente de implementación: `src/data/locationsData.ts` y `src/components/MapLocationsViewer.tsx`.

- [ ] Inventariar cada lugar representado en la aplicación.
- [ ] Verificar nombre, tipo, requisitos de visita, encuentros, recompensas y efectos.
- [ ] Confirmar condiciones de control, ocupación, combate y resolución de efectos.
- [ ] Revisar iconos, colores, filtros y textos de estado frente a los componentes del juego.
- [ ] Probar búsqueda y navegación sin ocultar lugares válidos ni crear lugares inexistentes.

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