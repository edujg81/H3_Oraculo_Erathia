# Entorno de Desarrollo (DEV_ENVIRONMENT)

Este archivo recoge pasos y consejos para poner en marcha el proyecto localmente con la versión de Node recomendada y evitar problemas de compatibilidad.

## Requisitos

- nvm para Windows (nvm-windows) o Volta (opcional pero recomendado)
- **Node.js 20.x o superior** (recomendado: 20.20+ para desarrollo local). Las dependencias actuales requieren Node >=20.
- npm (v>=9) o usa el `npm.cmd` incluido con la instalación de Node de nvm

## Usando nvm (Windows)

1. Instala `nvm-windows` si aún no lo tienes: https://github.com/coreybutler/nvm-windows
2. Instala y usa la versión recomendada de Node:

```powershell
nvm install 20.20.2
nvm use 20.20.2
node -v
```

3. Asegúrate de usar el `npm` correspondiente a esa versión de Node. En nvm para Windows, el binario queda en `C:\Users\<usuario>\AppData\Roaming\nvm\v20.20.2\npm.cmd`.

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

## Contenedores y CI

La CI (GitHub Actions en `.github/workflows/ci.yml`) usa **Node 20** por defecto para garantizar compatibilidad con todas las dependencias del proyecto.
