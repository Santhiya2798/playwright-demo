import { test, expect, request } from '@playwright/test';

test('POST Request using Context', async () => {

  const apiContext = await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });

  const response = await apiContext.post('/posts', {
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      title: 'Playwright',
      body: 'API Testing',
      userId: 1
    }
  });

  const responseBody = await response.json();

  console.log(responseBody);

  expect(response.status()).toBe(201);
});