import { test, expect } from '@playwright/test';
import LibraryPage from '../pageObjects/LibraryPage';
import LoginPage from "../pageObjects/LoginPage";

let loginPage;
let libraryPage;

const userEmail = 'test-23@hillel.com';
const userPwd = 'passW0Rd!';
const fileName = 'random.json';
const fileSubPath = `/jsons/${fileName}`

test.describe('Login as existing user and manage Library', () => {
    test.beforeEach(async({page}) => {
        loginPage = new LoginPage(page);
        libraryPage = new LibraryPage(page);
        await loginPage.visitPage()
        await loginPage.executeLogin(userEmail, userPwd);
    })

    test('Upload of new file nad removal afterwards works', async() => {
        expect(await libraryPage.isUploadVisible(fileName)).toBeFalsy()
        await libraryPage.uploadFile(fileSubPath);
        expect(await libraryPage.isUploadVisible(fileName)).toBeTruthy();
        await libraryPage.deleteUploadedFile(fileName);
        await libraryPage.page.waitForTimeout(1500);
        expect(await libraryPage.isUploadVisible(fileName)).toBeFalsy()
    })

    test('Library page screenshot testing', async () => {
        await libraryPage.waitForPageToLoad();
        await expect(libraryPage.page).toHaveScreenshot('library.png');
    })
})