import { test } from '@playwright/test';

test('record video manually', async ({ browser }) => {
  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: { width: 1280, height: 720 }
    }
  });

  const page = await context.newPage();
  await page.goto('https://example.com');

  await page.close();
  await context.close(); // ⚠️ MUST close to save video
});