import { test } from '@playwright/test';

test('checkbox nth example', async ({ page }) => {

  await page.goto('https://demoqa.com/radio-button');
  
await page.getByRole('radio').nth(1).click();

});