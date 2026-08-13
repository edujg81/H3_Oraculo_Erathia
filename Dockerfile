# Dockerfile para la aplicación Node + React en producción
FROM node:18-alpine AS builder
WORKDIR /usr/src/app

# Copia dependencias primero para cachear npm install
COPY package.json package-lock.json* ./
RUN npm ci

# Copia el resto de la aplicación y compila
COPY . .
RUN npm run build

# Runtime mínimo
FROM node:18-alpine AS runtime
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/package-lock.json* ./

RUN npm ci --production

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/server.cjs"]
