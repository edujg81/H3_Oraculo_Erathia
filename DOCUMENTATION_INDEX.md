# 📚 Índice de Documentación del Proyecto H3_Oraculo_Erathia

Este documento proporciona un resumen de todos los archivos de documentación del proyecto, organizados por categoría y propósito.

## 📁 Estructura General

| Ruta | Descripción |
|------|-------------|
| `README.md` | Documentación principal del proyecto: instalación, uso, arquitectura y conceptos clave |
| `DEV_ENVIRONMENT.md` | Guía para configurar el entorno de desarrollo (Node.js, dependencias, variables de entorno) |
| `DEPLOYMENT.md` | Instrucciones para despliegue en producción (Cloud Run, Docker, QNAP) |
| `API.md` | Contratos y ejemplos para los endpoints del servidor (`/api/chat`, `/api/rules`) |
| `DATA_README.md` | Estructura y buenas prácticas para los archivos de datos en `src/data/` |
| `SECURITY.md` | Recomendaciones de seguridad: gestión de secrets, rotación de claves y límites de petición |
| `CONTRIBUTING.md` | Guía para contribuir: convenciones de nombres, flujo de PR, estilo de código |
| `CHANGELOG.md` | Registro de cambios recientes y versiones del proyecto |
| `QNAP_DEPLOYMENT.md` | Guía específica para despliegue en QNAP TS-251A |
| `PRECOMMIT_HOOK.md` | Instrucciones para configurar hooks de pre-commit (husky + lint-staged) |
| `PULL_REQUEST_TEMPLATE.md` | Plantilla para crear pull requests consistentes y estandarizadas |
| `DOCS_IMPROVEMENTS.md` | Lista de mejoras documentadas y propuestas de mejora |

## 📂 Categorías de Documentación

### 🛠️ Configuración y Desarrollo
- `DEV_ENVIRONMENT.md`: Configuración de Node.js (nvm/volta), variables de entorno y dependencias
- `PRECOMMIT_HOOK.md`: Configuración de husky + lint-staged para mantener consistencia de código

### 🚀 Despliegue y Operación
- `DEPLOYMENT.md`: Despliegue en Cloud Run, Docker y QNAP (incluye Dockerfile)
- `QNAP_DEPLOYMENT.md`: Detalles específicos para QNAP TS-251A con webhook

### 📖 API y Contratos
- `API.md`: Endpoints públicos (`/api/chat`, `/api/rules`), payloads, validaciones y respuestas
- `PULL_REQUEST_TEMPLATE.md`: Plantilla para PRs consistentes

### 📂 Estructura de Datos
- `DATA_README.md`: Organización de `src/data/`, formato de `rulesKB.ts` y `knowledgeIndex.ts`
- `rulesKB.ts`: Reglamento estructurado en secciones (usado por `/api/chat`)

### 🔒 Seguridad
- `SECURITY.md`: Gestión de secrets, rotación de claves y límites de petición

### 📜 Historial y Contribuciones
- `CHANGELOG.md`: Registro de cambios recientes
- `CONTRIBUTING.md`: Convenciones de nombres, flujo de trabajo y estilo de código

## 📌 Notas Importantes

1. **Base de Conocimiento de Sandro**: 
   - Los datos del juego están en `src/data/` (heroesData.ts, unitsData.ts, etc.)
   - `knowledgeIndex.ts` genera el catálogo compacto para Sandro
   - Las modificaciones deben hacerse en los archivos de datos, no en `knowledgeIndex.ts`

2. **Rendimiento del Frontend**:
   - Las 12 vistas del bento dashboard se cargan con `React.lazy` + `Suspense`
   - Reduce el bundle inicial de ~1,25 MB a ~245 KB

3. **Seguridad del endpoint `/api/chat`**:
   - Rate limiting: 20 peticiones cada 10 minutos por IP
   - Límite de tamaño: 100 KB por cuerpo
   - Validación de payload antes de llamar a Gemini

## 📎 Enlaces Rápidos

- [DEV_ENVIRONMENT.md](DEV_ENVIRONMENT.md) - Configuración de desarrollo
- [DEPLOYMENT.md](DEPLOYMENT.md) - Despliegue en producción
- [API.md](API.md) - Endpoints y contratos
- [DATA_README.md](DATA_README.md) - Estructura de datos
- [CONTRIBUTING.md](CONTRIBUTING.md) - Guía para contribuir