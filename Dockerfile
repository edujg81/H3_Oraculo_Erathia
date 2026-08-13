# Dockerfile para la aplicación Node + React en producción
# ================================
# BUILD
# ================================
FROM node:20-alpine AS builder
WORKDIR /usr/src/app

# Copia dependencias primero para cachear npm install
COPY package.json package-lock.json* ./
RUN npm ci

# Copia el resto de la aplicación y compila
COPY . .
RUN npm run build

# ================================
# RUNTIME
# ================================
# Runtime mínimo
FROM node:20-alpine AS runtime
WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/package-lock.json ./package-lock.json

RUN npm ci --omit=dev

EXPOSE 3000
CMD ["node", "dist/server.js"]
