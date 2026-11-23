# syntax=docker/dockerfile:1

FROM node:26-slim AS build
ENV ASTRO_TELEMETRY_DISABLED=1
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
# Install the pnpm version pinned by package.json's `packageManager`.
RUN npm install --global "$(node -p 'require("./package.json").packageManager')"
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
