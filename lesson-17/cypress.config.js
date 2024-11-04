const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: { runMode: 2, openMode: 2 },
  screenshotsFolder: 'cypress/testFolder',
  video: true,
  viewportWidth: 1400,
  viewportHeight: 900,
  e2e: {
    baseUrl: 'https://example.cypress.io',
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
