FROM alpine:latest

RUN apk add --no-cache npm

WORKDIR '/app'

COPY package.json .
COPY package-lock.json .
RUN npm ci --omit=dev && npm cache clean --force

COPY . .
CMD ["npm", "run", "start"]