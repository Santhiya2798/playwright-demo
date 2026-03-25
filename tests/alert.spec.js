import { test } from '@playwright/test';

test('simple alert example', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // Alert handle
  page.on('dialog', async dialog => {
    console.log("Test message:", dialog.message());
    await dialog.accept();   // click OK
  });

  await page.click('text=Click for JS Alert');

});