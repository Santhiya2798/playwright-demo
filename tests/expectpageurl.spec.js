import { test, expect } from '@playwright/test';

test('check url', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  await expect(page).toHaveURL('https://playwright.dev/s');

  console.log('URL is not valid')

});