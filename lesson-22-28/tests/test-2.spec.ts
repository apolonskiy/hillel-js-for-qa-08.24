import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://seshmusic.io/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('test-23@hillel.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('passW0Rd!');
  await expect(page.getByLabel('Email')).toHaveValue('test-23@hillel.com');
  await expect(page.getByLabel('Password')).toHaveValue('passW0Rd!');
  await expect(page.getByLabel('form')).toContainText('Log in');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('heading', { name: 'My library' })).toBeVisible();
  await expect(page.getByRole('heading')).toContainText('My library');
  await expect(page.getByRole('button', { name: 'Create folder' })).toBeVisible();
  await page.getByRole('button', { name: 'Create folder' }).click();
  await page.getByPlaceholder('Enter folder name').click();
  await page.getByPlaceholder('Enter folder name').fill('New folder');
  await page.getByRole('button', { name: 'Create' }).click();

  await page.getByTestId('dropzone').getByRole('button').nth(1).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
});