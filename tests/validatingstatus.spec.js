import { test, expect, request } from '@playwright/test';

test('Validate Status & Response Body', async () => {

  const apiContext = await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });

  const response = await apiContext.get('/posts/1');

  // ✅ Status Validation
  await expect(response).toBeOK();

  // ✅ Body Validation
  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body.userId).toBe(1);
  expect(body).toHaveProperty('title');
  expect(body.title).not.toBe('');
  console.log(response.status());
});