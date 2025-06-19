# Use Node.js official image
FROM node:18-alpine

# Set working directory
WORKDIR /opt/backendDocker

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port 8000
EXPOSE 8000

# Start the backend server
CMD ["npm", "start"]
