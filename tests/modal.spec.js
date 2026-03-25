import { test, expect } from '@playwright/test';

test('simple modal example', async ({ page }) => {

  await page.goto('https://demoqa.com/modal-dialogs');

  // open modal
  await page.click('#showSmallModal');

  // verify modal text
  await expect(page.getByText('This is a small modal')).toBeVisible();

  // close modal
  await page.click('#closeSmallModal');

  console.log("Modal handled successfully");

});