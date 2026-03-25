import { test, expect } from '@playwright/test';

test('Intercept API and Mock Response', async ({ page }) => {

  await page.route('**/api/users', async route => {

    // 🔹 Fake response
    const mockData = {
      id: 1,
      name: 'Ajith',
      role: 'Tester'
    };

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockData)
    });
  });

  await page.goto('https://example.com');

});