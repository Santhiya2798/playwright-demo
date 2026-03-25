import { test } from '@playwright/test';

test('geolocation test', async ({ browser }) => {

  const context = await browser.newContext({
    geolocation: { latitude: 13.0827, longitude: 80.2707 },
    permissions: ['geolocation']
  });

  const page = await context.newPage();

  await page.goto('https://www.google.com');

});