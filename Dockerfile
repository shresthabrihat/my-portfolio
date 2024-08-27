# Build Stage: Use an official Node.js runtime as the base image for building the React app
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install the dependencies specified in package.json
RUN npm install

# Copy the rest of the application into the container
COPY . .

# Final Stage: Setup the production environment
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the build files from the previous stage
COPY --from=build /usr/src/app /usr/src/app

# Expose the port the app runs on
EXPOSE 3000

# Set environment variable for polling
ENV CHOKIDAR_USEPOLLING=true

# Start the React application
CMD ["npm", "start"]
