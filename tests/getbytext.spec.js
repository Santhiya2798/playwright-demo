import { test } from '@playwright/test';

test('check learn more text', async ({ page }) => {

  await page.goto('https://example.com');

  const learnMore = page.getByText('Learn more');

  if (await learnMore.isVisible()) {
    console.log("Text 'Learn more' is present in the page");
  } else {
    console.log("Text 'Learn more' is NOT present");
  }

});