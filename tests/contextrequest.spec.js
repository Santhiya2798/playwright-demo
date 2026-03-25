import { test, expect, request } from '@playwright/test';

test('Create Request Context Example', async () => {

  const apiContext = await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  });

  // GET Request
  const response = await apiContext.get('/posts/1');

  console.log(await response.json());

  expect(response.status()).toBe(200);

});