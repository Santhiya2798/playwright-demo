import { test } from '@playwright/test';

test('print screen size', async ({ page }) => {
  await page.goto('https://example.com');

  const size = page.viewportSize();
  console.log('Viewport size:', size);
});