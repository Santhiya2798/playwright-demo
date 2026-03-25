import { test, expect } from '@playwright/test';

test('Masking Dynamic Content Demo', async ({ page }) => {

  // Step 1: Open page
  await page.goto('https://example.com');

  // Step 2: Inject dynamic content (simulating time changing)
  await page.evaluate(() => {
    const p = document.createElement('p');
    p.className = 'dynamic-time';
    p.innerText = 'Time: ' + new Date().toLocaleTimeString();
    document.body.appendChild(p);
  });

  // Step 3: Wait a bit (so time changes every run)
  await page.waitForTimeout(1000);

  // ❌ Try WITHOUT mask first (comment mask below to show failure)
  // await expect(page).toHaveScreenshot('no-mask.png', { fullPage: true });

  // ✅ WITH mask (this will stabilize test)
  await expect(page).toHaveScreenshot('mask.png', {
    fullPage: true,
    mask: [page.locator('.dynamic-time')]
  });

});