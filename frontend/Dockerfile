# # Use Node.js base image
# FROM node:22-alpine

# # Set working directory
# WORKDIR /app

# # Copy package files first (for better caching)
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy rest of the app
# COPY . .

# # Expose the frontend port (default Vite = 5173, CRA = 3000)
# EXPOSE 5173

# # Run the frontend development server
# CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


# ===============================
# Stage 1 — Build React (Vite) app
# ===============================
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency files first for caching
COPY package.json package-lock.json ./

# Install dependencies using npm ci for clean install
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the production-ready Vite app
RUN npm run build

# ===============================
# Stage 2 — Serve static files via Nginx
# ===============================
FROM nginx:alpine

# Copy the built files from builder stage to nginx html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose Nginx HTTP port
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
