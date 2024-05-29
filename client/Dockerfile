# Use an official node runtime as a parent image
FROM node:18.17.0-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Install expo-cli globally


# Expose port 8081
EXPOSE 8081

# Start the Expo server
CMD ["expo", "start"]
