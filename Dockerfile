# Name the node stage "build"
FROM node:14.17.0-alpine AS build
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# Install node modules 
RUN npm install
# Build assets
RUN npm run build


# nginx state for serving content
FROM nginx:1.21.0-alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy nginx.conf to nginx config directory
COPY nginx.conf /etc/nginx/conf.d
# Copy static assets from builder stage
COPY --from=build /app/dist .
# Port to listent http requests
EXPOSE 80
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]