FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
# FORCE FIX: Remove lockfile to ensure overrides are applied during build
RUN rm -f package-lock.json
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
