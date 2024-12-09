import { test as base } from '@playwright/test';
import { LoginPage } from '../pageObjects'

const userEmail = process.env.USER_NAME;
const userPwd = process.env.USER_PASSWORD;

export const test = base.extend({
  /**
   * @type {import('../pageObjects').LibraryPage}
   */
  libraryPage: async ({ page, context }, use) => {
    const loginPage = new LoginPage(page, context);
    await loginPage.navigateToPage();
    await use(await loginPage.executeLogin(userEmail, userPwd));
    await loginPage.clearCookies();
    await loginPage.navigateToPage();
    await page.waitForTimeout(2000)
  },
    /**
   * @type {import('../pageObjects').LoginPage}
   */
  loginPage: async ({page}, use) => {
    await use(new LoginPage(page));
  }
});