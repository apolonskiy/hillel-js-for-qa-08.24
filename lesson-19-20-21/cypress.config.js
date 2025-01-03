import { defineConfig } from "cypress";
// import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin'
import fs from 'fs-extra';
import * as path from 'path';

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

  return fs.readJsonSync(pathToConfigFile)
}

export default defineConfig({
  retries: { runMode: 0, openMode: 0 },
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  defaultCommandTimeout: 10000,
  viewportWidth: 1400,
  viewportHeight: 900,
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    "overwrite": false,
    "html": false,
    "json": true
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // addMatchImageSnapshotPlugin(on)
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })

      const configFile = config.env.configFile || 'dev'
      const configJson = getConfigurationByFile(configFile);
      config = { ...config, ...configJson };

      // config.baseUrl = config.env.BASE_URL || 'https://staging-bpm-colab.vercel.app'
      return config
    },
  },
});
