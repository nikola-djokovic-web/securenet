# --- build stage ---
    FROM node:24-alpine AS builder
    WORKDIR /app
    COPY package*.json ./
    RUN npm ci
    COPY . .
    RUN npm run build   # rezultat ide u /app/dist
    
    # --- runtime stage (Nginx) ---
    FROM nginx:alpine AS runner
    COPY --from=builder /app/dist /usr/share/nginx/html
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    