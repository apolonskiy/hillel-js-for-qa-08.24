import { test, expect, request as apiRequest } from '@playwright/test';

let createdCarId;
let requestHeaders;
test.describe('Setup-based tests', () => {

  test.afterEach(async () => {
    const request = await apiRequest.newContext({ httpCredentials: { username: 'guest', password: 'welcome2qauto', send: 'always' } })
    const responseDelete = await request.delete(`https://qauto.forstudy.space/api/cars/${createdCarId}`, { headers: requestHeaders });
    console.log(await responseDelete.json());
    expect(responseDelete.ok()).toBeTruthy();
    expect(responseDelete.status()).toEqual(200);
  })
  test('Add car after setup login', { tag: '@showcase' }, async({ browser }) => {
    const context = await browser.newContext({ httpCredentials: { username: 'guest', password: 'welcome2qauto', send: 'always' } })
    const page = await context.newPage();
    await page.goto('https://qauto.forstudy.space');
    // `${baseURL}/api/cars`
    // const createCarrRequest = page.waitForRequest(/\/api\/cars$/gi);
    const createCarrRequest = page.waitForRequest('**/api/cars');
    // const createCarrRequest = page.waitForRequest(request => {
    //   //request.url() ===`${baseURL}/api/cars`
    //   const requestRegEx =  /\/api\/cars$/gi
    //   return requestRegEx.test(request.url()) && request.method() === 'POST'
    // });
    await page.getByRole('button', { name: 'Add car' }).click();
    await page.locator('input[id="addCarMileage"]').fill('234')
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Add' }).click();
    const requestFinished = await createCarrRequest;
    console.log(await (await requestFinished.response()).json());
  })

  test.only('Add car after setup login 2', { tag: '@showcase' }, async({ browser }) => {
    const context = await browser.newContext({ httpCredentials: { username: 'guest', password: 'welcome2qauto', send: 'always' } })
    const page = await context.newPage();

    await page.route('**/api/cars', async (route, request) => {
      console.log('request.method()',request.method())
      if(request.method() === 'GET'){
      // Fetch original response.
        const response = await route.fetch();
        // replace original response
        const json = await response.json();
        json.data = [];
        await route.fulfill({
        // Pass all fields from the response.
          response,
          // Override response body.
          json
        });
      } else {
        const response = await route.fetch();
        requestHeaders = request.headers();
        // replace original response
        const json = await response.json();
        createdCarId = json.data.id;
        await route.fulfill({
          response,
        });
      }
    });
    await page.goto('https://qauto.forstudy.space');
    await page.getByRole('button', { name: 'Add car' }).click();
    await page.locator('input[id="addCarMileage"]').fill('234')
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Add' }).click();
    await page.waitForResponse((response) =>  response.url().includes('/api/cars'));
  })

  test('List cars without auth should show error', { tag: '@showcase' }, async({ browser }) => {
    const context = await browser.newContext({ httpCredentials: { username: 'guest', password: 'welcome2qauto', send: 'always' } })
    const page = await context.newPage();

    await page.route('**/api/cars', async (route, request) => {
      if(request.method() === 'GET'){
      // const headers = {
      //   ...request.headers(),
      //   cookie: 'sid=invalid;',
      // };
      // console.log('headers',headers)
      // await context.clearCookies();
      // await route.continue({ headers })
      // ------------------------------------
        const fakeResponse = { "status":"error","message":"Not authenticated" }
        const response = await route.fetch();
        // replace original response
        await route.fulfill({
          status: 401,
          // Pass all fields from the response.
          response,
          // Override response body.
          json: fakeResponse
        });
      } else {
        await route.continue()
      }
    });
    await page.pause()
    await page.goto('https://qauto.forstudy.space');
    await page.pause()
  })
})