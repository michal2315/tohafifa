# Builds the Hafifa site and serves it with nginx.
#
# Inside the closed network, point REGISTRY at Artifactory's Docker remote, e.g.:
#   docker build --build-arg REGISTRY=artifactory.example/docker-remote .

ARG REGISTRY=docker.io

FROM ${REGISTRY}/library/node:20-alpine AS build
WORKDIR /app

# Install dependencies first so this layer is cached when only content changes.
COPY package.json package-lock.json ./
COPY packages/shared/package.json packages/shared/
COPY apps/site/package.json apps/site/
COPY apps/api/package.json apps/api/
RUN npm ci --ignore-scripts

COPY . .
RUN npm run build -w packages/shared && npm run build -w apps/site

# nginx-unprivileged runs as non-root on port 8080, as OpenShift requires.
FROM ${REGISTRY}/nginxinc/nginx-unprivileged:1.27-alpine
# Templates in /etc/nginx/templates are filled with environment variables at startup.
COPY deploy/nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/apps/site/build /usr/share/nginx/html
# Where nginx forwards /api. Override in OpenShift with the API service's address.
ENV API_UPSTREAM=http://hafifa-api:3001
EXPOSE 8080
