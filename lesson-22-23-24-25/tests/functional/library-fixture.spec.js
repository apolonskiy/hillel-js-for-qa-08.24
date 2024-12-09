import { test } from "../../src/fixtures/login.fixture";

const fileName = 'random.json';
const fileSubPath = `/jsons/${fileName}`;

test.beforeEach(async ({ loginPage, page }) => {
//   console.log(loginPage);
})

test('Fixture library manage single file', async ({ libraryPage }) => {
  await libraryPage.waitForPageToLoad();
  await libraryPage.isUploadNotVisible(fileName)
  await libraryPage.uploadFile(fileSubPath);
  await libraryPage.isUploadVisible(fileName)
  await libraryPage.deleteUploadedFile(fileName);
  await libraryPage.page.waitForTimeout(1500);
  await libraryPage.isUploadNotVisible(fileName)
})