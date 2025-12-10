# --- STAGE 1: BUILDER (Contains all heavy tools) ---
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
# We install everything (including vulnerabilities) just to build the app
RUN npm install
COPY . .
RUN npm run build

# --- STAGE 2: PRODUCTION (Clean & Secure) ---
FROM node:22-alpine
WORKDIR /app

# We install ONLY the web server (serve) globally
RUN npm install -g serve

# We copy ONLY the built static files from the builder stage
# The 'node_modules' folder (with the virus) is LEFT BEHIND.
COPY --from=builder /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
