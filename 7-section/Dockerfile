FROM alpine:latest AS builder

RUN apk add --no-cache npm

WORKDIR '/app'

COPY package.json .
COPY package-lock.json .
RUN npm ci --omit=dev && npm cache clean --force

COPY . .
RUN npm run build

FROM nginx:latest
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html