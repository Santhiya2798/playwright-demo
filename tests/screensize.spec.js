import { test } from '@playwright/test';

test.use({
  viewport: { width: 128, height: 720 }
});

test('custom screen size', async ({ page }) => {
  await page.goto('https://example.com');
});