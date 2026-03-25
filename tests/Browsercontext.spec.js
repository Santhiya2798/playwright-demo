import { test, expect, chromium } from '@playwright/test';

test('browser context example', async () => {
  const browser = await chromium.launch();

  const context = await browser.newContext(); // 🔥 new isolated session
  console.log(context);
  const page = await context.newPage();

  await page.goto('https://example.com');

  await browser.close();
});