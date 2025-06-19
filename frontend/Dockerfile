# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /opt/frontendDocker

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Serve the app using a lightweight web server
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
