# Use official Node.js image as base
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your app will run on (optional, depends on your app)
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
