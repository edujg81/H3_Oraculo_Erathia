# Dockerfile optimizado para la aplicación Node + React en producción
# ================================
# FASE 1: BUILD (Compilación)
# ================================
# Usamos Node 22 Alpine para coincidir con tu entorno local real
FROM node:22-alpine AS builder
WORKDIR /usr/src/app

# Copia dependencias primero para cachear la capa de npm install
COPY package.json package-lock.json* ./

# Instalamos todas las dependencias (incluyendo devDependencies para compilar React)
RUN npm ci --legacy-peer-deps

# Copia el resto del código fuente y compila la SPA y el Servidor
COPY . .
RUN npm run build

# ================================
# FASE 2: RUNTIME (Producción Mínima)
# ================================
FROM node:22-alpine AS runtime
WORKDIR /usr/src/app

# Declaramos explícitamente el entorno de producción
ENV NODE_ENV=production

# Copiamos únicamente los artefactos listos y los manifiestos
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/package-lock.json ./package-lock.json

# Instalamos SOLAMENTE las dependencias de producción, tolerando el árbol heredado
RUN npm ci --omit=dev --legacy-peer-deps

# SEGURIDAD: Cambiamos al usuario sin privilegios integrado en Alpine para proteger el QNAP
USER node

EXPOSE 3000

# Arrancamos la aplicación
CMD ["node", "dist/server.js"]