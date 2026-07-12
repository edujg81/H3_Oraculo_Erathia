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

## 🎨 Diseño Visual, Layout y Responsive

1. **Esquema de Colores Premium:** Utiliza colores de fondo extremadamente oscuros (`#0d0a09` y `#1b1311`) con un gradiente radial central, y bordes finos de tono pizarra (`border-slate-800`).
2. **Sin desplazamiento en Listas críticas:** Evita barras de desplazamiento vertical u horizontal redundantes en listas principales (como la lista de tropas en la calculadora de reclutamiento). Utiliza el espaciado y la distribución natural de Tailwind para expandir los contenedores.
3. **Mapeo de iconos consistentes:** Utiliza únicamente iconos importados desde `lucide-react`. No introduzcas SVGs crudos e inline a menos que sea estrictamente necesario.
4. **Micro-animaciones:** Aplica transiciones suaves y aceleraciones con `motion` (de `motion/react`) al alternar pestañas o desplegar detalles de cartas para ofrecer una sensación moderna y táctil.

---

## 💻 Calidad del Código y Linter

1. **Validación del Linter:** Tras cada cambio de código, asegúrate de ejecutar `lint_applet` para garantizar que la compilación de TypeScript no tenga advertencias ni errores de tipos (`tsc --noEmit` debe dar exit 0).
2. **Re-renders infinitos en React:** Sé extremadamente cuidadoso con los dependency arrays de `useEffect`. Nunca introduzcas objetos complejos o arrays directamente como dependencias a menos que estén estabilizados.
3. **Persistencia y Estado:** Toda la información de rondas, jugadores, modos de juego y tiempos de reloj se centraliza en el estado del componente principal `/src/App.tsx` para sincronizar correctamente el bento de control lateral con el panel principal de gestión de partida.
