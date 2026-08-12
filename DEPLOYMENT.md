# Despliegue (Deployment)

Guía rápida para construir y desplegar la aplicación (opciones: Docker / Cloud Run).

Requisitos previos
- Node.js (desarrollo recomendado: 18.20.8). Para despliegue puede elegirse Node 18 o 20 según la política del equipo.
- Docker (para crear imágenes) o Google Cloud SDK para Cloud Run.

1) Preparar build local

- Instala dependencias y construye el frontend y el bundle del servidor:

```bash
npm ci
npm run build
```

- Resultado: `dist/` (frontend compilado) y un bundle de servidor (si usas `esbuild` o `tsc` para compilar `server.ts` a `dist/server.js`).

2) Docker (imagen mínima)

Ejemplo de `Dockerfile` (base: Node 18 slim):

```dockerfile
FROM node:18-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --production=false
COPY . .
RUN npm run build

FROM node:18-slim AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/dist ./dist
COPY package*.json ./
RUN npm ci --production
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

Notas:
- Si prefieres Node 20 para producción (algunos paquetes recientes requieren Node >=20), cambia la imagen base a `node:20-slim`.
- Ajusta `CMD` según el resultado de tu proceso de build (por ejemplo `node dist/server.js`).

3) Construir la imagen y probar localmente

```bash
docker build -t h3-oraculo:latest .
docker run --rm -p 3000:3000 -e NODE_ENV=production -e GEMINI_API_KEY="<tu_key>" h3-oraculo:latest
```

4) Despliegue a Cloud Run (ejemplo con Google Cloud)

```bash
gcloud builds submit --tag gcr.io/<PROJECT_ID>/h3-oraculo:latest
gcloud run deploy h3-oraculo --image gcr.io/<PROJECT_ID>/h3-oraculo:latest --platform managed --region europe-west1 --allow-unauthenticated --memory 512Mi --concurrency 20
```

Opciones recomendadas para Cloud Run
- Memory: 512Mi (ajustar a carga y uso de LLM)
- Concurrency: 10-20
- Autoscaling: dejar por defecto, limitar instancias máximas según presupuesto
- Variables de entorno: configurar `GEMINI_API_KEY` como secret en el proveedor y mapearla como variable de entorno.

5) Gestión de Secrets
- No incluyas claves en la imagen. Usa Secret Manager (Cloud Run secrets) o variables de entorno configuradas en el servicio. Ver `SECURITY.md`.

6) Healthchecks y logging
- Cloud Run ya provee logging integrado. Añade métricas y healthchecks si despliegas en Kubernetes.

7) Rollback
- Mantén tags de imagen semánticos (por ejemplo `v1.0.3`) para rollback fácil.

8) Checklist pre-despliegue
- `npm run build` sin errores
- `GEMINI_API_KEY` configurado en env/secret manager
- `NODE_ENV=production` en la instancia
- Revisar límites de cuota del proveedor de IA para evitar costes inesperados

