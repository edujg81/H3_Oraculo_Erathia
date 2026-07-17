# 🔮 Heroes III - Oráculo de Erathia

> **Asesor de partidas inteligente y base de conocimientos interactiva para "Heroes of Might and Magic III: El Juego de Mesa".**

Este sistema es un asistente digital integral diseñado para enriquecer las partidas de tablero de **Heroes of Might and Magic III: Board Game**. Con una interfaz oscura optimizada ("Slate Dark") que evoca la estética clásica del juego, combina una base de reglas interactiva, utilidades de control en tiempo real (turnos, dados, rondas) y un oráculo impulsado por Inteligencia Artificial (**Sandro el Sabio**) para resolver cualquier disputa de reglas al instante.

---

## 🗺️ Vista General de Módulos (Bento Dashboard)

La aplicación está organizada en un sistema modular interactivo y reactivo:

1. **Consulta a Sandro (Chat inteligente)**
   * Chatea con **Sandro el Sabio**, un oráculo de IA con conocimiento profundo sobre el reglamento, la colocación de losetas, combate táctico, asedios y cartas de hechizo.
   * Permite consultas personalizadas directas para resolver dudas rápidas sin interrumpir el flujo de juego.

2. **Reglas y FAQs (Rules Browser)**
   * Base de datos categorizada con menús interactivos que contienen reglas oficiales de movimiento, exploración, combate táctico, asedio, magias y acciones de ciudad.
   * Permite enviar cualquier sección de reglas directamente a Sandro con un clic para recibir una explicación detallada o resolver un caso de uso particular.

3. **Misiones (Scenarios Database)**
   * Selector interactivo de escenarios y campañas oficiales del juego de mesa con resúmenes de preparación, objetivos de victoria y losetas necesarias para el mapa.

4. **Unidades (Calculadora de Reclutamiento y Fichas)**
   * Visor exhaustivo de estadísticas (Ataque, Defensa, Vida, Iniciativa, Tipo de unidad y Habilidades pasivas/activas) para todas las facciones: *Castillo, Necrópolis, Mazmorra, Murallas, Torre, Infierno, Bastión, Fortaleza, Confluencia, Bahía (Cove)*, unidades *Neutrales*, *Invocaciones* y defensores de *Bancos*.
   * Calculadora automática del coste de reclutamiento (Oro, Materiales y Objetos de Valor).

5. **Héroes (Heroes Viewer)**
   * Ficha interactiva de héroes de todas las facciones. Permite simular la subida de nivel, consultando la ampliación del límite de mano de cartas al inicio de cada ronda y la obtención de Coronas de Experto.

6. **Habilidades Secundarias (Skills Browser)**
   * Buscador interactivo de habilidades del juego (Logística, Tiro con Arco, Necromancia, Sabiduría, etc.) detallando los efectos de nivel Básico y Experto.

7. **Máquinas de Guerra (War Machines)**
   * Simulador táctico interactivo con cálculos y tiradas de dados dedicados para Balista, Catapulta, Carro de Municiones, Tienda de Auxilio y el Cañón de Bahía.

8. **Localizaciones del Mapa (Map Locations)**
   * Guía completa de losetas de mapa y estructuras (minas de recursos, criptas, utopías, santuarios) con sus respectivos costes, defensas y recompensas.

9. **Gestión de Partida (Timer, Rondas y Dados)**
   * **Temporizador global de partida** y **reloj de turno por jugador** con pitidos de cuenta atrás audibles (en los últimos 10 segundos) y alarma de tiempo agotado.
   * **Gestor de jugadores** para añadir nombres y asignar facciones del juego de mesa con colores temáticos personalizados.
   * **Contador de rondas unificado** que sincroniza automáticamente si la ronda actual es de *Recursos* (impar) o *Astrológica* (par).
   * **Simulador de dados en 3D/Visual**:
     * *Dado de Combate Táctico* (Rango de -1, 0, a +1) con cálculo de impactos críticos o fallos.
     * *Dado de Recursos* (Oro, Madera/Mineral, Recursos Valiosos).
     * *Dado de Tesoros* (Ganancia de EXP, Artefactos, dados de recursos).

10. **Manual Completo / PDF**
    * Generador interactivo y exportador del compendio resumido de reglas oficiales estructurado en formato amigable para impresión o lectura rápida.

---

## 🛠️ Stack Tecnológico

El proyecto está construido bajo una arquitectura moderna **Full-Stack (Client-Server)** de alto rendimiento:

* **Frontend:**
  * **React 19** con **TypeScript** para un tipado estricto y seguro de la lógica del juego.
  * **Vite 6** como motor de empaquetado ultra-rápido.
  * **Tailwind CSS 4** para el diseño de componentes premium, transiciones fluidas y bento-grids adaptables.
  * **Motion** (de `motion/react`) para micro-animaciones táctiles y de estado.
  * **Lucide-React** para un set unificado de iconos profesionales.

* **Backend / API Server:**
  * **Express** (NodeJS) como servidor seguro que expone endpoints para canalizar peticiones y proxies de seguridad de API keys.
  * **Google GenAI SDK (`@google/genai`)** para la comunicación fluida con los modelos Gemini y la ejecución del chatbot inteligente de Sandro.
  * **tsx** para la ejecución directa de TypeScript en el servidor de desarrollo y **esbuild** para generar un paquete optimizado CommonJS (`dist/server.cjs`) en producción.

---

## 🧠 Base de Conocimiento de Sandro

Sandro (el chat de IA) no responde solo con lo que "sabe" el modelo: cada consulta se acompaña de un contexto (`systemInstruction`) construido en `server.ts` a partir de dos fuentes:

1. **`src/data/rulesKB.ts`** — el reglamento en sí (`RuleSection[]`): mecánicas de combate, asedio, mapa, modos de juego, FAQs, etc. Se incluye **siempre, entero**, en cada consulta.
2. **`src/data/knowledgeIndex.ts`** — un índice generado a partir de las bases de datos "de UI" (`heroesData.ts`, `unitsData.ts`, `skillsData.ts`, `townsData.ts`) que cubre los **64 héroes**, **~156 unidades**, **32 habilidades secundarias** y **10 ciudades** del juego. Para no disparar el tamaño (y el coste) del prompt en cada mensaje:
   - Se incluye siempre un **catálogo compacto** (solo nombres, ~7.000 caracteres) para que Sandro sepa qué existe.
   - Solo se añade la **ficha detallada completa** de un héroe/unidad/habilidad/ciudad cuando su nombre aparece mencionado en los últimos mensajes del usuario (`getRelevantEntitySections`), con coincidencia por límites de palabra para evitar falsos positivos (p. ej. que "función" no dispare al héroe "Iona").

### Arquitectura de los datos del juego (`src/data/`)

| Archivo | Contenido | Usado por |
|---|---|---|
| `heroesData.ts` | Estadísticas, habilidad inicial y especialidad de los 64 héroes | `HeroesViewer`, `SkillsBrowser`, base de conocimiento |
| `unitsData.ts` | Estadísticas, coste y habilidades de las unidades reclutables y neutrales | `RecruitmentCalculator`, base de conocimiento |
| `skillsData.ts` | Catálogo oficial de las 32 Habilidades Secundarias | `SkillsBrowser`, base de conocimiento |
| `townsData.ts` | Edificios, costes y unidades reclutables por ciudad | `TownsViewer`, base de conocimiento |
| `spellsData.ts` | Catálogo de hechizos | `SpellCardsViewer` |
| `rulesKB.ts` | Reglamento completo estructurado en secciones | `RulesBrowser`, `/api/chat` |
| `knowledgeIndex.ts` | Genera el catálogo + fichas indexadas para Sandro a partir de los anteriores | `server.ts` |

> **Si añades o corriges un héroe, unidad, habilidad o ciudad**, hazlo en su archivo de datos correspondiente (`heroesData.ts`, `unitsData.ts`, `skillsData.ts` o `townsData.ts`); `knowledgeIndex.ts` lo recoge automáticamente sin necesidad de tocarlo, y tanto la UI como Sandro quedan actualizados a la vez.

---

## ⚡ Rendimiento y arquitectura del frontend

* Las 12 vistas del *bento dashboard* se cargan con **`React.lazy` + `Suspense`** (`src/App.tsx`): solo se descarga el código de la pestaña activa, no las 12 de golpe. Esto reduce el bundle inicial de ~1,25 MB a ~245 KB.
* La lógica del cronómetro/reloj de turno y de los dados/máquinas de guerra vive en hooks dedicados (`src/hooks/useGameTimer.ts`, `src/hooks/useDiceRoller.ts`) para mantener `App.tsx` más manejable, mientras el estado de jugadores/ronda permanece centralizado en `App.tsx` (necesario para sincronizar el panel lateral).

---

## 🔒 Seguridad del endpoint `/api/chat`

Para proteger la cuota de la clave de Gemini en despliegues públicos, `server.ts` valida y limita cada petición:

* Historial de mensajes: entre 1 y 40 entradas, cada una ≤ 4.000 caracteres.
* Límite de tamaño de body: 100 KB.
* **Rate limiting** en memoria: 20 peticiones cada 10 minutos por IP (`trust proxy` activado para funcionar tras el proxy de Cloud Run).
* El cliente (`ChatAdvisor.tsx`) trunca el historial enviado a los últimos 30 mensajes y valida la longitud antes de enviar, para no romper conversaciones largas contra estos límites.

---

### Requisitos Previos

* Node.js v18 o superior instalado.
* Una clave API de Gemini válida (definida como variable de entorno).

### Paso 1: Configurar Variables de Entorno

Crea un archivo `.env` en el directorio raíz o copia el archivo de ejemplo:

```bash
cp .env.example .env
```

Define tu clave de Gemini:

```env
GEMINI_API_KEY=tu_clave_api_aqui
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

### Paso 3: Ejecutar en Modo Desarrollo

Levanta el servidor local que compila tanto el frontend (Vite) como el backend (Express + tsx) en el puerto `3000`:

```bash
npm run dev
```

Abre tu navegador en `http://localhost:3000`.

### Paso 4: Construir para Producción

Compila tanto los recursos estáticos del cliente como el backend empaquetado:

```bash
npm run build
```

Esto generará el cliente estático en `dist/` y el bundle unificado de Node en `dist/server.cjs`.

### Paso 5: Ejecutar en Producción

Inicia la aplicación compilada:

```bash
npm run start
```

---

## 📜 Licencia y Atribución

Este proyecto es una herramienta de apoyo creada por fans y para fans. No tiene fines comerciales y no está afiliada, autorizada ni asociada de ninguna manera con **Archon Studio** ni con **Ubisoft**, los creadores oficiales de *Heroes of Might and Magic III* y de su versión de juego de mesa. Todos los nombres de facciones, criaturas, héroes y mecánicas son propiedad intelectual de sus respectivos dueños.

---

*Desarrollado en honor a Sandro el Sabio, el nigromante supremo de Deyja.* 💀🔮