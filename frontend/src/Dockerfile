# 1. Build our Angular app
FROM node:latest as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 2. Deploy our Angular app to NGINX
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
## Replace the default nginx index page with our Angular app
COPY --from=builder /app/dist/angular-test/browser .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
