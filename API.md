# API — Contratos y ejemplos

Este documento describe los endpoints públicos que expone el servidor local `server.ts`.

Base URL: `http://<host>:3000`

---

## GET /api/rules

Descripción: Devuelve la base de conocimiento de reglas (`rulesKB`) usada por el asistente.

Respuesta (200):

```json
{ "rules": [ { "id": "...", "title": "...", "category": "...", "content": "..." }, ... ] }
```

Notas:
- Respuesta útil para poblar búsquedas y filtros en cliente.

---

## POST /api/chat

Descripción: Punto de entrada para la asistencia de chat basada en la base de reglas y el LLM (Sandro).

Request headers:
- `Content-Type: application/json`

Request body (JSON):

```json
{
  "messages": [
    { "role": "user" | "assistant", "content": "...texto..." },
    ...
  ],
  "selectedSectionId": "optional-section-id",
  "customApiKey": "optional-gemini-key"
}
```

Validaciones aplicadas por el servidor:
- `messages` debe ser un array y existir.
- Longitud de `messages`: entre 1 y 40.
- Cada mensaje debe ser un objeto con `role` ("user" o "assistant") y `content` (string, max 4000 chars).
- `selectedSectionId` si está presente debe ser string.
- `customApiKey` si está presente debe ser string (max 200 chars).
- Límite de tamaño del body: 100kb.
- Rate limiting por IP: máximo 20 peticiones cada 10 minutos (puede devolver 429).

Respuestas:
- 200: éxito
```json
{ "text": "Respuesta generada por Sandro..." }
```
- 400: validación fallida, payload inválido. Ejemplo:
```json
{ "error": "Invalid request parameters. 'messages' array is required." }
```
- 429: demasiadas solicitudes
```json
{ "error": "Demasiadas consultas a Sandro en poco tiempo. Espera unos minutos antes de volver a intentarlo." }
```
- 503: servicio de IA no disponible
```json
{ "error": "Servicio de IA no disponible. Por favor, introduce tu API Key en los ajustes del chat o asegúrate de que el servidor la tiene configurada." }
```
- 500: error interno del servidor
```json
{ "error": "Internal server error." }
```

Ejemplo cURL:

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [ { "role": "user", "content": "¿Cómo funciona el asedio?" } ]
  }'
```

Recomendaciones de uso:
- Mantén el tamaño del historial pequeño (20-30 mensajes) para ahorrar tokens.
- Evitar enviar archivos o datos binarios (no están soportados por este endpoint).

