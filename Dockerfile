# Use an official Node.js runtime as the base image for the build stage
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the build stage container
COPY package*.json ./

# Install the dependencies specified in package.json
RUN npm install

# Copy the rest of the application into the build stage container
COPY . .

# Create a production build (Optional, if using CRA)
# RUN npm run build

# Final Stage: Setup the production environment
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app /usr/src/app

# Expose the port the app runs on
EXPOSE 3000

# Set environment variable for polling
ENV CHOKIDAR_USEPOLLING=true

# Start the React application
CMD ["npm", "start"]
