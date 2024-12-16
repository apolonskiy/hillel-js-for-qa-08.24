import { test as setup } from '@playwright/test';
import  { HomePage, GaragePage } from '../../src'


const userEmail = process.env.USER_NAME;
const userPassword = process.env.USER_PASSWORD;

setup('login', async({ page }) => {
  const homePage = new HomePage(page);
  const garagePage = new GaragePage(page)
  await homePage.navigateToPage();
  await homePage.openLogInForm();
  await homePage.logIn(userEmail, userPassword)
  await garagePage.waitForGaragePageToLoad()
  await page.context().storageState({ path: 'session-storage.json' });
})