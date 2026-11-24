# syntax=docker/dockerfile:1

FROM node:26-slim AS build
ENV ASTRO_TELEMETRY_DISABLED=1
WORKDIR /app
COPY package.json bun.lock bunfig.toml ./
COPY tools/lint/package.json tools/lint/
# Install the Bun version pinned by package.json's `packageManager`.
RUN npm install --global --allow-scripts=bun "$(node -p 'require("./package.json").packageManager')"
RUN bun ci
COPY . .
RUN bun run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
