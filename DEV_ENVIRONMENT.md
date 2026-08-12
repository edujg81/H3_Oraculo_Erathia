# Entorno de Desarrollo (DEV_ENVIRONMENT)

Este archivo recoge pasos y consejos para poner en marcha el proyecto localmente con la versión de Node recomendada y evitar problemas de compatibilidad.

## Requisitos

- nvm para Windows (nvm-windows) o Volta (opcional pero recomendado)
- Node.js 18.20.8 (recomendado para desarrollo local)
- npm (v>=9) o usa el `npm.cmd` incluido con la instalación de Node de nvm

## Usando nvm (Windows)

1. Instala `nvm-windows` si aún no lo tienes: https://github.com/coreybutler/nvm-windows
2. Instala y usa la versión recomendada de Node:

```powershell
nvm install 18.20.8
nvm use 18.20.8
node -v
```

3. Asegúrate de usar el `npm` correspondiente a esa versión de Node. En nvm para Windows, el binario queda en `C:\Users\<usuario>\AppData\Roaming\nvm\v18.20.8\npm.cmd`.

## Instalación de dependencias

En la raíz del proyecto:

```bash
npm install
```

> Si tu `npm` del sistema es muy antiguo, puedes ejecutar el `npm.cmd` de nvm (ver ruta anterior) o actualizar npm globalmente.

## Notas sobre `undici` y `@google/genai`

- El proyecto está pinneado a `undici@6.17.0` para garantizar compatibilidad con Node 18. Si subes a Node 20 o superior, considera actualizar `undici` y `@google/genai` a versiones más recientes.
- Puedes ver advertencias `EBADENGINE` durante `npm install` si algunos paquetes exigen Node >=20; son advertencias, no bloqueos.

## Variables de entorno

Copia el ejemplo y define tus secretos locales:

```bash
cp .env.example .env
# o crea .env manualmente
```

Rellena `.env` con:

```env
GEMINI_API_KEY=tu_clave_gemini
APP_URL=http://localhost:3000
```

## Ejecutar en modo desarrollo

```bash
npm run dev
```

Esto lanza `tsx server.ts` (backend) y Vite en `middlewareMode` para servir la UI.

## Contenedores y CI

Si tu CI usa un runner con Node 20+, puedes ajustar las versiones de `undici` y `@google/genai` en `package.json` y regenerar `package-lock.json` en el pipeline para evitar advertencias locales.
