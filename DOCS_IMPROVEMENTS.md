# Propuestas de Mejora de la Documentación

Resumen de mejoras que añadirían claridad y facilitarían contribuciones futuras.

1. Documentar la compatibilidad de Node y dependencias
   - Añadir `DEV_ENVIRONMENT.md` (ya creado) con instrucciones para `nvm`/Volta y notas sobre Node 20.20+.
   - Añadir un badge o nota en `README.md` con la versión recomendada de Node (20.20+).

2. Añadir guía de despliegue/producción
   - Un `DEPLOYMENT.md` con pasos para Cloud Run, variables de entorno, límites de cuota, y el proceso de build (`npm run build`, subir `dist/`).

3. Testing y Linting
   - Documentar comandos de test y lint: `npm run lint` y añadir `npm test` si se crean tests.
   - Instrucciones para configurar pre-commit hooks (husky) y reglas de formateo.

4. Guía para contribuir (CONTRIBUTING.md)
   - Flujo de trabajo: ramas, PR template, convenciones de commit (Conventional Commits), revisión de código.

5. API y contratos
   - Documentar el endpoint `/api/chat` (payload esperado, límites, errores 429/503) en `API.md` o en la sección `README`.

6. Documentación de datos
   - Añadir `DATA_README.md` que explique la estructura de `src/data/` y formato de `rulesKB.ts` y `knowledgeIndex.ts`.

7. Notas de seguridad
   - Recomendaciones para rotación de claves, manejo de secrets en CI/CD, y límites de petición para evitar abusos del servicio de IA.

Puedes indicarme cuál de estas propuestas quieres que implemente primero y la añadiré como archivo MD con contenido detallado.
