# STAGE 1: BUILDER
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# STAGE 2: PRODUCTION
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# FORCE FIX: Switch Nginx to run as 'root' user in the main config
# This bypasses all permission issues with the mounted files.
RUN sed -i 's/user  nginx;/user  root;/g' /etc/nginx/nginx.conf

# Remove default assets
RUN rm -rf ./*

# Copy assets
COPY --from=builder /app/build .

# Copy Config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Permissions (Just in case)
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]