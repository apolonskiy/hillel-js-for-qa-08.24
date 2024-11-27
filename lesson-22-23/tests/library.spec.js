import { test, expect } from '@playwright/test';
import { LoginPage, LibraryPage, LoginForm } from "../src/pageObjects";
import { getLibraryQuery } from '../src/graphqlQueries';
import { deleteAttachmentQuery } from '../src/graphqlQueries/attachmentQueries';


let loginPage;
/** @type {LibraryPage} */
let libraryPage;

const userEmail = 'test-23@hillel.com';
const userPwd = 'passW0Rd!';
const fileName = 'random.json';
const fileSubPath = `/jsons/${fileName}`

test.describe('Login as existing user and manage Library', () => {
  test.beforeEach(async({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToPage()
    libraryPage = new LibraryPage(page)
    libraryPage = await loginPage.executeLogin(userEmail, userPwd);
  })

  test.afterEach(async({ request, baseURL, context }) => {
    const Cookie = (await context.cookies()).reduce((acc, curr) => `${acc}${curr.name}=${curr.value}; `, '').trim();
    const headers = { Cookie };
    const libraryResponse = await request.post(`${baseURL}/api/graphql`, {
      data: {
        operationName: 'Library',
        query: getLibraryQuery,
        variables: {
          input: {
            currentFolderId: null
          }
        } 
      }, 
      headers
    })
    for await(const { id } of (await libraryResponse?.json()).data?.library?.attachments){
      await request.post(`${baseURL}/api/graphql`, { data: {
        operationName: 'DeleteAttachment',
        query: deleteAttachmentQuery,
        variables: {
          input: {
            attachmentId: id
          }
        } 
      },
      headers
      })
    }
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