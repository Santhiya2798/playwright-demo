import { test, expect, request } from '@playwright/test';
import testData from '../fixtures/testData.json';

test('Using Fixture Data Example', async () => {

  const apiContext = await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  });

  // 🔹 Use fixture data
  const response = await apiContext.post('/posts', {
    data: testData.createPost
  });

  await expect(response).toBeOK();

  const body = await response.json();

  console.log(body);

  expect(body.title).toBe(testData.createPost.title);
});