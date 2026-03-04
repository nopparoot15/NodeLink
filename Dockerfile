# Stage 1: Builder
FROM node:25-alpine AS builder

RUN apk add --no-cache git

WORKDIR /app

COPY package.json ./

RUN npm install

# Stage 2: Runner
FROM node:25-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY src/ ./src/
COPY config.default.js ./config.default.js
COPY config.js ./config.js
COPY package.json ./package.json

EXPOSE 2333

ENV NODELINK_SERVER_PORT=2333 \
    NODELINK_SERVER_HOST=0.0.0.0 \
    NODELINK_CLUSTER_ENABLED=true

CMD ["npm", "start"]
