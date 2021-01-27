FROM yourserver.com/alpine-node:latest
COPY . /app
WORKDIR /app
RUN npm publish
