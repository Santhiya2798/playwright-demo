import { test, expect, request } from '@playwright/test';

test('Query Params Example', async () => {

  const apiContext = await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });

  const response = await apiContext.get('/posts', {
    params: {
      userId: 1
    }
  });

  const body = await response.json();

  console.log(body);

  expect(response.status()).toBe(200);
  
});