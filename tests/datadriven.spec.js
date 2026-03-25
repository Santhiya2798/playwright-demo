import { test, expect } from '@playwright/test';


test.describe('Data Driven Login Demo', () => {


  const testData = [
    ['standard_user', 'secret_sauce'],
    ['locked_out_user', 'secret_sauce'],
    ['invalid_user', 'wrong_pass'],
  ];


  testData.forEach(([username, password]) => {


    test(`Login test with ${username}`, async ({ page }) => {


      await page.goto('https://www.saucedemo.com/');


      await page.fill('#user-name', username);
      await page.fill('#password', password);
      await page.click('#login-button');


      if (username === 'standard_user' && password === 'secret_sauce') {
        await expect(page).toHaveURL(/inventory/);
      } else {
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      }


    });


  });


});
