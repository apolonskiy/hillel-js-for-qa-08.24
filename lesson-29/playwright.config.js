import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'],
    ['html'],
    [
      '@testomatio/reporter/lib/adapter/playwright.js',
      {
        apiKey: process.env.TESTOMATIO,
      },
    ],
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {  
    baseURL: process.env.BASE_URL,
    httpCredentials: { username: 'guest', password: 'welcome2qauto', send: 'always' },
    actionTimeout: 5000,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    video: 'on'
  },

  /* Configure projects for major browsers */
  projects: [
    { name: 'setup', testMatch: '*.setup.js', use: {
      ...devices['Desktop Chrome'], 
      channel: 'chrome',
    } },
    {
      name: 'Google Chrome',
      use: { 
        ...devices['Desktop Chrome'], 
        channel: 'chrome',
        storageState: 'session-storage.json'
      },
      dependencies: ['setup'],
    },

    { name: 'setup-chromium', testMatch: '*.setup.js', use: {
      ...devices['Desktop Chrome'], 
    } },
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'], 
        storageState: 'session-storage.json'
      },
      dependencies: ['setup-chromium'],
    },
  ],
});

