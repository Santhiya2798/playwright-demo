import { test } from '@playwright/test';

test('file download demo', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/download');

  const downloadPromise = page.waitForEvent('download');

  await page.click('text=sample.pdf');

  const download = await downloadPromise;

  await download.saveAs('downloads/sample.txt');

});