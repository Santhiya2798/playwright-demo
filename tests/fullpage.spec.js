import { test, expect } from '@playwright/test';

test('Full Page Screenshot', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveScreenshot({
    fullPage: true
  });
});

test('Element Screenshot', async ({ page }) => {
  await page.goto('https://example.com');

  const heading = page.locator('h1');

  await expect(heading).toHaveScreenshot();
});