# Propuestas de Mejora de la Documentación

Resumen de mejoras que añadirían claridad y facilitarían contribuciones futuras.

✅ **Completadas:**
1. Documentar la compatibilidad de Node y dependencias — `DEV_ENVIRONMENT.md` creado con instrucciones para `nvm`/Volta y notas sobre Node 22.20+.
2. Añadir guía de despliegue/producción — `DEPLOYMENT.md` con pasos para Cloud Run, variables de entorno, límites de cuota, y el proceso de build (`npm run build`, subir `dist/`).
3. Testing y Linting — Documentados comandos de test y lint en `DEV_ENVIRONMENT.md` y `README.md`.
4. API y contratos — Documentado en `API.md` con payloads, validaciones y respuestas de error.
5. Documentación de datos — `DATA_README.md` explica la estructura de `src/data/` y formato de `rulesKB.ts` y `knowledgeIndex.ts`.
6. Notas de seguridad — `SECURITY.md` con recomendaciones para rotación de claves, manejo de secrets y límites de petición.

📋 **Pendientes / Mejoras opcionales:**
- Añadir un badge o nota en `README.md` con la versión recomendada de Node (22.20+).
- Instrucciones para configurar pre-commit hooks (husky) y reglas de formateo.
- PR template para estandarizar descripciones de pull requests.
- Documentar el endpoint `/api/chat` en `README.md` (ya cubierto en `API.md`).

Puedes indicarme cuál de estas propuestas quieres que implemente primero y la añadiré como archivo MD con contenido detallado.
