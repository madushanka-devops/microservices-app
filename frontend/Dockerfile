FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
# Install dependencies
RUN npm install
COPY . .
# Build the React app
RUN npm run build
# Install the static server
RUN npm install -g serve
EXPOSE 3000
# Start the server
CMD ["serve", "-s", "build", "-l", "3000"]