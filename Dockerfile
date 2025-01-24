FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --force

# Copy the rest of the code
COPY . .

# Build the application
RUN npm run build

# Production image
FROM node:18
WORKDIR /app

# Copy only the build artifacts and necessary files
COPY --from=builder /app/build /app/build
COPY package.json package-lock.json ./
RUN npm install --production

# Expose the application port
EXPOSE 3000

# Set the default command
CMD ["npm", "start"]

