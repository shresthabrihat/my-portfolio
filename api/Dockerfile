# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# # Install server dependencies
COPY package*.json ./

# Install client dependencies
RUN npm install

# Copy the rest of the server code
COPY . .
# Copy the .env file
COPY .env .env

# Expose the port the server will run on
EXPOSE 8080

# Command to run the server
CMD [ "npm", "start" ]