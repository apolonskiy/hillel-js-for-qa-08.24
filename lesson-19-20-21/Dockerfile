FROM cypress/browsers:node-22.12.0-chrome-131.0.6778.108-1-ff-133.0-edge-131.0.2903.70-1

WORKDIR /e2e

COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress

RUN npm i

ENTRYPOINT ["npx", "cypress", "run"]