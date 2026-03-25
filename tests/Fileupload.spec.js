import { test, expect } from '@playwright/test';

test('file upload demo', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/upload');
  await page.setInputFiles('#file-upload','tests/Happy ears hearing center.png')
  await page.waitForTimeout(10000);
    await page.click('#file-submit');

});