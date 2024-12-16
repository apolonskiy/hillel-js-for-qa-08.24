import { test, expect } from '@playwright/test';
import { LoginPage, LibraryPage } from "../../src/pageObjects";



let loginPage;
/** @type {LibraryPage} */
let libraryPage;

const userEmail = 'test-23@hillel.com';
const userPwd = 'passW0Rd!';


test.describe('Login as existing user and manage Library', () => {
  test.beforeEach(async({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToPage()
    libraryPage = new LibraryPage(page)
    libraryPage = await loginPage.executeLogin(userEmail, userPwd);
  })

  test('Library page screenshot testing', async () => {
    await libraryPage.waitForPageToLoad();
    await expect(libraryPage.page).toHaveScreenshot('library.png');
  })

})