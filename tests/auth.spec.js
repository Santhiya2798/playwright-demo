import { test, expect, request } from '@playwright/test';

test('Basic Auth Example', async () => {

  const username = 'user';
  const password = 'pass';

  const encoded = Buffer.from(`${username}:${password}`).toString('base64');

  const apiContext = await request.newContext({
    baseURL: 'https://httpbin.org',
    extraHTTPHeaders: {
      'Authorization': `Basic ${encoded}`
    }
  });

  const response = await apiContext.get('/basic-auth/user/pass');

  expect(response.status()).toBe(200);
  console.log(response.status());
});