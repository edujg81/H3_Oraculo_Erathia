# Entorno de Desarrollo (DEV_ENVIRONMENT)

Este archivo recoge pasos y consejos para poner en marcha el proyecto localmente con la versión de Node recomendada y evitar problemas de compatibilidad.

## Requisitos

- nvm para Windows (nvm-windows) o Volta (opcional pero recomendado)
- **Node.js 22.x o superior** (recomendado: 22.20+ para desarrollo local). Las dependencias actuales requieren Node >=22.
- npm (v>=9) o usa el `npm.cmd` incluido con la instalación de Node de nvm

## Usando nvm (Windows)

1. Instala `nvm-windows` si aún no lo tienes: https://github.com/coreybutler/nvm-windows
2. Instala y usa la versión recomendada de Node:

```powershell
nvm install 22.20.1
nvm use 22.20.1
node -v
```

3. Asegúrate de usar el `npm` correspondiente a esa versión de Node. En nvm para Windows, el binario queda en `C:\Users\<usuario>\AppData\Roaming\nvm\v22.20.1\npm.cmd`.

## Instalación de dependencias

En la raíz del proyecto:

```bash
npm install
```

> Si tu `npm` del sistema es muy antiguo, puedes ejecutar el `npm.cmd` de nvm (ver ruta anterior) o actualizar npm globalmente.

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

## Build y pruebas

```bash
npm run build   # Compila frontend y genera dist/server.js (ESM)
npm run lint    # Valida TypeScript sin generar artefactos (tsc --noEmit)
npm test        # Ejecuta tests con Vitest (7 tests pasando actualmente)
```

## Contenedores y CI

La CI (GitHub Actions en `.github/workflows/ci.yml`) usa **Node 22** por defecto para garantizar compatibilidad con todas las dependencias del proyecto. El flujo de CI ejecuta `npm ci`, `npm run lint`, `npm test` y `npm run build` en cada `push` a `main` y en cada `pull_request`.
