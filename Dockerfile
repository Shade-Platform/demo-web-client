# Use the latest LTS version of Node.js
FROM node:18-alpine
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install

# Install serve to show the website
RUN npm i -g serve
 
# Copy the rest of the files
COPY . .
 
# Build the webapp
RUN npm run build

# Expose the dev port
EXPOSE 3000
 
# Serve the webapp
CMD [ "serve", "-s", "dist" ]