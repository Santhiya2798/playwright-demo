import { test } from '@playwright/test';

test('shadow dom search', async ({ page }) => {

  await page.goto('https://books-pwakit.appspot.com/');

  await page.locator('book-app').locator('input').fill('playwright');

  console.log("Typed inside Shadow DOM search box");

});