import { test, request as apiRequest, expect } from '@playwright/test';

test('Api test - can get and delete all cars', { tag: '@showcase' }, async({ browser, request }) => {
  // const requestCustom = await apiRequest.newContext();
  const context = await browser.newContext({ httpCredentials: { username: 'guest', password: 'welcome2qauto', send: 'always' } })
  const page = await context.newPage();
  await page.goto('https://qauto.forstudy.space');
  const cookies = await context.cookies();
  const cookiesParsed = cookies.reduce((acc, curr) => `${acc}${curr.name}=${curr.value}; `, '');
  const headers = { cookies: cookiesParsed };
  const response = await request.get('https://qauto.forstudy.space/api/cars', { headers });
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toEqual(200);
  const respJson = await response.json();
  console.log(respJson.data.length);
  console.log(headers)
  if(respJson.data.length){
    for await (const { id } of respJson.data){
      console.log(headers)
      const responseDelete = await request.delete(`https://qauto.forstudy.space/api/cars/${id}`, { headers });
      expect(responseDelete.ok()).toBeTruthy();
      expect(responseDelete.status()).toEqual(200);
      const responseDeleteJson = await responseDelete.json();
      expect(responseDeleteJson.data.carId).toEqual(id);
    }
  }
})