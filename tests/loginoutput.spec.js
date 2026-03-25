import { test, expect, request } from '@playwright/test';

test('Logging API Output', async () => {

  const apiContext = await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });

  const response = await apiContext.get('/posts/1');

  // 🔹 Log status
  console.log('Status Code:', response.status());

  // 🔹 Log headers
  console.log('Headers:', response.headers());

  // 🔹 Log body
  const body = await response.json();
  console.log('Response Body:', body);

  await expect(response).toBeOK();
});