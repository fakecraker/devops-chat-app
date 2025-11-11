# 🏗️ Use a lightweight Node.js base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first (for better caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy remaining source code
COPY . .

# Expose backend port
EXPOSE 5001

# Start the server
CMD ["node", "src/index.js"]
