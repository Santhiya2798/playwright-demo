import { test, expect } from '@playwright/test';

test('Threshold Demo', async ({ page }) => {

  await page.goto('https://example.com');

  // Force small visual change
  await page.evaluate(() => {
    document.body.style.border = "2px solid red";
  });

  // Try without threshold (will fail)
  // await expect(page).toHaveScreenshot('no-threshold.png', { fullPage: true });

  // With threshold (will pass)
  await expect(page).toHaveScreenshot('with-threshold.png', {
    fullPage: true,
    maxDiffPixels: 500   // allow small difference
  });

});