FROM node:20.18-slim

COPY . e2e

RUN npx -y playwright@1.49.1 install --with-deps

CMD ['npx', 'playwright', 'test']