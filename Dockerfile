# BUILD
FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# SERVE
RUN npm install -g http-server
EXPOSE 8080
CMD ["http-server", "dist"]