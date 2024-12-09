import { test } from '@playwright/test';


test.describe.only('Setup-based tests', () => {
  test('Add car after setup login', { tag: '@showcase' }, async({browser}) => {
    const context = await browser.newContext({httpCredentials: {username: 'guest', password: 'welcome2qauto', send: 'always'}})
    const page = await context.newPage();
    await page.goto('https://qauto.forstudy.space');
    await page.getByRole('button', {name: 'Add car'}).click();
    await page.locator('input[id="addCarMileage"]').fill('234')
    await page.waitForTimeout(500);
    await page.getByRole('button', {name: 'Add'}).click();
    await page.pause()
  })

  test('Add car after setup login 2', { tag: '@showcase' }, async({browser}) => {
    const context = await browser.newContext({httpCredentials: {username: 'guest', password: 'welcome2qauto', send: 'always'}})
    const page = await context.newPage();
    await page.goto('https://qauto.forstudy.space');
    await page.getByRole('button', {name: 'Add car'}).click();
    await page.locator('input[id="addCarMileage"]').fill('234')
    await page.waitForTimeout(500);
    await page.getByRole('button', {name: 'Add'}).click();
    await page.pause()
  })
})