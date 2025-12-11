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

# Remove default assets
RUN rm -rf ./*

# Copy assets
COPY --from=builder /app/build .

# FIX: Grant Read Permissions to EVERYONE (chmod a+r)
# This rules out any "user mismatch" issues completely.
RUN chmod -R a+r /usr/share/nginx/html && \
    find /usr/share/nginx/html -type d -exec chmod a+x {} \;

# Copy Config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]