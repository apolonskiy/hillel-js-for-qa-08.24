import { test as baseTest } from '@playwright/test';
import { RegistrationPage } from '../../src'

export const testNoSession = baseTest.extend({
  registrationPage: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: { cookies: [], origins: [] } });
    const page = await context.newPage()
    const registrationPage = new RegistrationPage(page);
    await use(registrationPage, page);
    await context.close();
  },
});