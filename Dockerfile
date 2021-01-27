FROM docker-registry.btfinanceira.com.br/alpine-node:latest
COPY . /app
WORKDIR /app
RUN npm publish
