import { test } from '@playwright/test';

test('checkbox and radio demo', async ({ page }) => {

  await page.goto('https://demoqa.com/checkbox');

await page.getByRole('checkbox', { name: 'Select Home' }).click();


 await page.screenshot({ path: 'test.png' });


});