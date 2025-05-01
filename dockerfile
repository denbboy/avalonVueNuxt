# ========================
# STAGE 1 - Build Stage
# ========================
FROM node:18-alpine AS builder

# Install build dependencies for sharp
RUN apk add --no-cache \
    vips vips-dev fftw-dev gcc g++ make python3 libc6-compat

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies, including dev dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the Nuxt project for production
RUN npm run build

# ========================
# STAGE 2 - Production Stage
# ========================
FROM node:18-alpine

# Install runtime dependencies for sharp
RUN apk add --no-cache vips libc6-compat

# Set the working directory
WORKDIR /app

# Copy only package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the built project from the builder stage
COPY --from=builder /app/.output ./.output

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Expose the application port
EXPOSE 3000

# Start the Nuxt application in production mode
CMD ["node", ".output/server/index.mjs"]
