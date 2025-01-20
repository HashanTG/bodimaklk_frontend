# Use an official Node image for building
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the Vite project
RUN npm run build

# -------------------------------------
# Serve the built project using nginx
# -------------------------------------
FROM nginx:stable-alpine

# Copy the build output to nginx's html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: replace the default nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
