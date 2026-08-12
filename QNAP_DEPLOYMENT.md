# Despliegue en QNAP TS-251A

Esta guía explica cómo desplegar la aplicación en tu QNAP usando Docker y un servicio webhook que actualiza el código desde GitHub.

## Requisitos

- QNAP TS-251A con Container Station instalado.
- Docker disponible y funcionando.
- Acceso a la red a través de la IP del NAS.
- Clave de GitHub webhooks configurada en el repositorio.

## Archivos incluidos

- `Dockerfile`: construye la aplicación y ejecuta `node dist/server.cjs`.
- `Dockerfile.webhook`: servidor webhook que recibe notificaciones de GitHub.
- `docker-compose.yml`: orquesta los servicios `app` y `webhook`.
- `webhook/server.js`: valida la firma HMAC, actualiza el repo y reinicia el contenedor de la app.

## Variables de entorno necesarias

Añade estas variables a `.env` en la raíz del proyecto:

```env
GEMINI_API_KEY=tu_clave_gemini
GITHUB_WEBHOOK_SECRET=una_clave_secreta_segura
```

## Levantar el stack

En tu QNAP, desde la carpeta del proyecto, ejecuta:

```bash
docker compose up -d --build
```

Esto creará dos servicios:

- `h3oraculo_app`: la aplicación principal.
- `h3oraculo_webhook`: el receptor de GitHub Webhooks.

## Configurar el webhook en GitHub

En tu repositorio GitHub, ve a `Settings > Webhooks`.

- Payload URL: `http://<IP_QNAP>:8080/github-webhook`
- Content type: `application/json`
- Secret: el mismo valor de `GITHUB_WEBHOOK_SECRET`
- Events: `push`

## Comportamiento

Cuando GitHub recibe un `push` a cualquier rama:

1. El webhook valida la firma HMAC.
2. Si el evento es `push`, el servicio descarga los cambios desde GitHub.
3. Actualiza el repositorio con `git fetch` y `git reset --hard origin/main`.
4. Ejecuta `npm ci` y `npm run build`.
5. Reinicia el contenedor `h3oraculo_app` para cargar la versión nueva.

## Notas importantes

- Asegúrate de exponer el puerto `8080` desde tu NAS para que GitHub pueda comunicarse.
- Si no quieres exponerlo directamente, usa un túnel seguro (ngrok, Tailscale, etc.).
- El webhook usa la ruta `/github-webhook` y el método `POST`.
- El contenedor webhook necesita acceso a `/var/run/docker.sock` para reiniciar el contenedor de la app.

## Configuración opcional

- Si solo quieres actualizar en la rama `main`, modifica `GIT_BRANCH` en el servicio `webhook`.
- Si quieres más seguridad, coloca el webhook detrás de un proxy HTTPS.

