import { test } from '@playwright/test';

test('iframe example', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/iframe');

  const frame = page.frameLocator('#mce_0_ifr');

  const text = await frame.locator('#tinymce').textContent();

  console.log("Text inside iframe:", text);

});