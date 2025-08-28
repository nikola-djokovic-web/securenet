# --- deps ---
    FROM node:24-alpine AS deps
    WORKDIR /app
    COPY package*.json ./
    RUN npm ci
    
    # --- build ---
    FROM node:24-alpine AS builder
    WORKDIR /app
    COPY --from=deps /app/node_modules ./node_modules
    COPY . .
    RUN npm run build
    
    # --- runtime ---
    FROM node:24-alpine AS runner
    WORKDIR /app
    ENV NODE_ENV=production
    ENV HOST=0.0.0.0
    ENV PORT=3000
    
    # umesto da kopiraš *ceo* /app, kopiraj samo što ti treba
    COPY --from=builder /app/package*.json ./
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public
    
    EXPOSE 3000
    CMD ["npm", "run", "start", "--", "-p", "3000", "-H", "0.0.0.0"]
    