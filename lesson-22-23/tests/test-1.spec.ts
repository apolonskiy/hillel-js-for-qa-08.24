import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://seshmusic.io/');
  await expect(page.getByRole('link', { name: 'Login' })).toBeVisible();
  await expect(page.getByRole('main')).toContainText('The New Standard in Music Collaboration');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email').click();
});