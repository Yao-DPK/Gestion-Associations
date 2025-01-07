# Use Node.js as base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application files
COPY . .

# Expose port for Angular development server
EXPOSE 4200

# Run Angular app in development mode
CMD ["npm", "start"]