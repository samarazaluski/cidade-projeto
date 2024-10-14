# Estágio 1: Build da aplicação
FROM node:14 as build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Estágio 2: Servir a aplicação
FROM nginx:alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
