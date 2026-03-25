import { test, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 13']
});

test('mobile view test', async ({ page }) => {
  await page.goto('https://example.com');
});