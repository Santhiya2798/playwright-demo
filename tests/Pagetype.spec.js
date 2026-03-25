import { test } from '@playwright/test';

test('fill vs type demo', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  // open search dialog
  await page.getByRole('button', { name: 'Search' }).click();

 // await page.waitForSelector('.DocSearch-Input', { state: 'visible' });

  // wait for search input to appear
  await page.waitForSelector('.DocSearch-Input');

  // locate search input
  const search = page.locator('.DocSearch-Input');

  // type text
  await search.type('Automation', { delay: 200 });



  await page.waitForTimeout(2000);

  // clear the field
  await search.fill('');

  // type again
  await search.type('Playwright', { delay: 200 });

    await page.keyboard.press('Control+A');
  await page.keyboard.press('Backspace');
  await page.screenshot({ path: 'page.png' });

});