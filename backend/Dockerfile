# Use Node.js as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire backend project to the working directory
COPY . .

# Build the NestJS project
RUN npm run build

# Expose the backend service port (default for NestJS)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]