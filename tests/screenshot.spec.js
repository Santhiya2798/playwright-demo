import { test, expect } from '@playwright/test';

test('Visual Regression Demo - Full Page', async ({ page }) => {
  await page.goto('https://example.com');
  await page.waitForLoadState('networkidle');

  await expect(page).toHaveScreenshot('homepage.png', {
    fullPage: true
  });
});