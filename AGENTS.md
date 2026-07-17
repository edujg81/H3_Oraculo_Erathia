# 🔮 Instrucciones para Agentes de Codificación (AGENTS.md)

Este documento detalla las convenciones, directrices y reglas específicas del proyecto **Heroes III - Oráculo de Erathia** para garantizar la coherencia del diseño, la exactitud del reglamento y la estabilidad de la aplicación.

---

## 🇪🇸 Política de Idioma

1. **Idioma de la interfaz:** Todo el contenido de cara al usuario final (textos, etiquetas, descripciones, botones, estados) debe estar redactado en **Español de España**, utilizando la terminología oficial de la traducción española de **Heroes of Might and Magic III: El Juego de Mesa**.
2. **Consultas a Sandro (IA):** El modelo de lenguaje debe responder en español con un tono misterioso pero servicial, personificando a *Sandro el Sabio Nigromante*.

---

## 🐉 Convención de Nombres de Criaturas y Facciones

Es sumamente crítico respetar la ortografía y el formato exacto de las unidades del juego, ya que la base de datos de reclutamiento las mapea estrictamente por su nombre como clave. Siempre que añadas o modifiques lógica de criaturas, mantén las siguientes denominaciones:

* **Facciones oficiales:**
  * `castillo` (Castillo - Castle)
  * `necropolis` (Necrópolis - Necropolis)
  * `mazmorra` (Mazmorra - Dungeon)
  * `rampart` (Murallas - Rampart)
  * `torre` (Torre - Tower)
  * `infierno` (Inferno)
  * `stronghold` (Bastión - Stronghold)
  * `fortaleza` (Fortaleza - Fortress)
  * `confluencia` (Conflujo - Conflux)
  * `cove` (Cala - Cove)
  * `neutrales` (Neutrales)
  * `invocaciones` (Invocaciones)

* **Denominación específica de Gólems (¡Muy Importante!):**
  * Debe llevar tilde: **Gólems** (en plural) o **Gólem** (en singular).
  * Ejemplos exactos del código:
    * `Gólems de hierro`
    * `Gólems de acero`
    * `Gólems de oro`
    * `Gólems de diamante`
    * `Gólems de hierro (Neutral)`

* **Denominación de unidades de Infierno:**
  * `Familiares` (en lugar de Diablillos o Duendecillos)
  * `Magogs` (en lugar de Gogs)
  * `Cerberos` (en lugar de Sabuesos)
  * `Demonios`
  * `Señores del abismo` (en minúscula la "a" de abismo, en lugar de Demonios del Abismo)
  * `Efrits` (en lugar de Efreet o Efreet Sultanes)
  * `Archidiablos` (en lugar de Diablos o Archidemonios)

* **Denominación de unidades de Murallas:**
  * `Centauros`
  * `Enanos`
  * `Elfos`
  * `Pegasos`
  * `Dendroides`
  * `Unicornios`
  * `Dragones dorados` (con d minúscula en "dorados")

---

## 🗂️ Arquitectura de Datos y Base de Conocimiento de Sandro

1. **Los datos del juego viven en `src/data/`, nunca dentro de un componente.** `heroesData.ts` (héroes), `unitsData.ts` (unidades/criaturas reclutables y neutrales), `skillsData.ts` (las 32 Habilidades Secundarias), `townsData.ts` (ciudades) y `spellsData.ts` (hechizos) son la única fuente de verdad. Los componentes de UI (`HeroesViewer`, `RecruitmentCalculator`, `SkillsBrowser`, `TownsViewer`, `SpellCardsViewer`) solo los importan y renderizan; no declares arrays de datos de juego dentro de un `.tsx`.
2. **Por qué importa esto:** `src/data/knowledgeIndex.ts` construye automáticamente, a partir de esos mismos archivos, el contexto adicional que recibe Sandro (el chat de IA) en `server.ts` — ver la sección "Base de Conocimiento de Sandro" del `README.md`. Si un dato de juego solo existe dentro de un componente, Sandro no puede "verlo" y el jugador recibirá una respuesta menos precisa o inventada.
3. **Al añadir o corregir un héroe/unidad/habilidad/ciudad**, edita únicamente su archivo de datos en `src/data/`. No hace falta tocar `knowledgeIndex.ts` ni `server.ts`: la indexación (catálogo + fichas + alias de búsqueda) se regenera sola a partir de los datos.
4. **Alias de búsqueda:** `knowledgeIndex.ts` usa el nombre propio (héroe, unidad, habilidad) o el nombre de ciudad/facción como alias para decidir si una ficha es relevante a la pregunta del usuario. Si el nombre que añades tiene variantes conocidas (alias, apodos, traducción inglesa), regístralas en la función `registerAliases` correspondiente para que Sandro también las reconozca.
5. **No mezcles esta base "consultable" con `rulesKB.ts`.** `rulesKB.ts` son las reglas del juego en sí y se envían siempre completas a Sandro; los datos de `knowledgeIndex.ts` son un catálogo mucho más grande que solo se envía en detalle cuando el nombre correspondiente aparece en la conversación (para no disparar el coste/tamaño del prompt). Si añades una nueva categoría de datos consultables, sigue este mismo patrón de inclusión selectiva en lugar de añadirla entera a `rulesKB.ts`.

---

## 🖥️ Arquitectura del Frontend (`App.tsx`)

1. **Nuevas vistas del bento dashboard deben cargarse con `React.lazy`**, igual que las 12 existentes (ver el bloque de imports al inicio de `src/App.tsx`), y renderizarse dentro del `<Suspense>` ya existente. No vuelvas a un `import` estático de un componente de vista: eso reintroduce el problema de bundle único que se corrigió (de ~1,25 MB a ~245 KB).
2. **Lógica de estado autocontenida** (temporizadores, tiradas de dados, y similares que no necesiten sincronizarse con el bento lateral) debe extraerse a un hook propio en `src/hooks/` (ver `useGameTimer.ts`, `useDiceRoller.ts`), no vivir inline en `App.tsx`. El estado de jugadores/ronda/modo de partida sigue centralizado en `App.tsx` (regla existente, ver más abajo), ya que sí necesita sincronizar el bento lateral.

---

1. **Esquema de Colores Premium:** Utiliza colores de fondo extremadamente oscuros (`#0d0a09` y `#1b1311`) con un gradiente radial central, y bordes finos de tono pizarra (`border-slate-800`).
2. **Sin desplazamiento en Listas críticas:** Evita barras de desplazamiento vertical u horizontal redundantes en listas principales (como la lista de tropas en la calculadora de reclutamiento). Utiliza el espaciado y la distribución natural de Tailwind para expandir los contenedores.
3. **Mapeo de iconos consistentes:** Utiliza únicamente iconos importados desde `lucide-react`. No introduzcas SVGs crudos e inline a menos que sea estrictamente necesario.
4. **Micro-animaciones:** Aplica transiciones suaves y aceleraciones con `motion` (de `motion/react`) al alternar pestañas o desplegar detalles de cartas para ofrecer una sensación moderna y táctil.

---

## 💻 Calidad del Código y Linter

1. **Validación del Linter:** Tras cada cambio de código, asegúrate de ejecutar `lint_applet` para garantizar que la compilación de TypeScript no tenga advertencias ni errores de tipos (`tsc --noEmit` debe dar exit 0).
2. **Re-renders infinitos en React:** Sé extremadamente cuidadoso con los dependency arrays de `useEffect`. Nunca introduzcas objetos complejos o arrays directamente como dependencias a menos que estén estabilizados.
3. **Persistencia y Estado:** Toda la información de rondas, jugadores, modos de juego y tiempos de reloj se centraliza en el estado del componente principal `/src/App.tsx` (organizado en hooks, ver sección "Arquitectura del Frontend") para sincronizar correctamente el bento de control lateral con el panel principal de gestión de partida.
4. **Nuevos endpoints en `server.ts`:** sigue el patrón ya establecido en `/api/chat` — valida forma y longitud de cada campo del `body` antes de usarlo, y si el endpoint invoca la API de Gemini (o cualquier servicio de pago por uso), aplica también un límite de peticiones por IP (`isRateLimited`). No confíes en que el frontend ya valida: el backend es la única barrera real contra abuso.