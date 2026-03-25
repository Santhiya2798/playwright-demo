import { test, expect, request } from '@playwright/test';

test('API Key Example', async () => {

  const apiContext = await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com', // ✅ real API
    extraHTTPHeaders: {
      'x-api-key': '123456' // (this API ignores it, but good for demo)
    }
  });

  const response = await apiContext.get('/posts/1');

  expect(response.status()).toBe(200);
});

