# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if you have it)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install Expo CLI globally
#RUN npm install -g expo-cli

# Build the project and export the static files
RUN npx expo export --output-dir dist

# Expose the necessary port
EXPOSE 80

# Serve the static files using a simple server
CMD ["npx", "serve", "dist"]