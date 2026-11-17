# Build the static site, then serve it with nginx.
# Coolify: choose the build pack "Dockerfile", port 80.

FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

# Coolify only routes traffic to a container that reports healthy.
# 127.0.0.1 on purpose: nginx listens on IPv4, "localhost" can resolve to IPv6.
HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://127.0.0.1/healthz || exit 1
