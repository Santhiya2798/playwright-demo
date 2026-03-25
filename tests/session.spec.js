import { test, expect } from '@playwright/test';

test('session isolation with real login', async ({ browser }) => {

  // User 1
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  // User 2
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  // Open login page
  await page1.goto('https://the-internet.herokuapp.com/login');
  await page2.goto('https://the-internet.herokuapp.com/login');

  // Login user1
  await page1.fill('#username', 'tomsmith');
  await page1.fill('#password', 'SuperSecretPassword!');
  await page1.click('button[type="submit"]');

  // Don't login user2 (keep it fresh)

  // Assertion
  await expect(page1.locator('.flash.success')).toBeVisible(); // logged in
  await expect(page2.locator('#username')).toBeVisible(); // still login page
});