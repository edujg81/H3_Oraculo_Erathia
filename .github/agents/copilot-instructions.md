# Reglas de Generación de IA para el Proyecto

## Modo 1: Datos y Reglas de Juego (ESTRICTO)
- Si pido información sobre atributos, estadísticas, reglas o builds de un juego:
  - Actúa como un motor de datos determinista (Temperatura equivalente 0.0, Top-P equivalente 0.1).
  - No inventes, infieras ni asumas ningún dato no presente en el contexto adjunto.
  - Si falta un dato obligatorio, responde exactamente: `null` o `"Dato no verificado"`.
  - Si pido JSON, responde ÚNICAMENTE con el objeto JSON puro sin bloques de Markdown ni texto conversacional.

## Modo 2: Frontend (React + Tailwind CSS)
- Usa únicamente clases utilitarias de Tailwind CSS.
- Diseña componentes funcionales modernos para React (`.jsx`/`.tsx`) con estética gaming.
- No añadidas librerías CSS externas que no sean Tailwind.
- Temperatura equivalente 0.3, Top-P equivalente 0.8.