FROM node:18-alpine
# Crear directorio de la app
WORKDIR /app
# Copiar package.json y package-lock.json (o yarn.lock)
COPY package*.json ./
# Instalar dependencias
RUN npm install
# Copiar el resto del código
COPY dist ./
# Puerto que usará la app
EXPOSE 3000
# Comando para arrancar la app usando el JS compilado
CMD ["node", "dist/server.js"]
