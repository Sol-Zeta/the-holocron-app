# Parent image
FROM node:18-alpine AS base

# Install dependencies when needed
FROM base AS deps

# Install packages with no cache
RUN apk add --no-cache libc6-compat

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the Next.js application
RUN npm run build

# Stage 2: Create the final image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app
ENV NODE_ENV=production

#creates a system group named nodejs 
RUN addgroup --system --gid 1001 nodejs

#creates a system group named nextjs 
RUN adduser --system --uid 1001 nextjs

# Copy only the necessary files from the builder stage
COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static


# COPY --from=builder /usr/src/app/package.json ./
# COPY --from=builder /usr/src/app/.next ./

# # Install production dependencies
# RUN npm install --only=production

# Expose the port your app runs on
EXPOSE 3000

# Set Environment port
ENV PORT=3000

# Define the command to run your app
CMD ["node", "server.js"]
