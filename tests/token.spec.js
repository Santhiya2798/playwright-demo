import { test, expect, request } from '@playwright/test';

test('Token Based Auth Example', async () => {

  const apiContext = await request.newContext({
    baseURL: 'https://reqres.in/api',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  const loginResponse = await apiContext.post('/login', {
    data: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    }
  });

  // 🔥 Debug first
  const rawText = await loginResponse.text();
  console.log('Raw Response:', rawText);

  await expect(loginResponse).toBeOK();

  // ✅ Safe parse
  let loginBody;
  try {
    loginBody = JSON.parse(rawText);
  } catch (e) {
    throw new Error('Response is not JSON. Actual response: ' + rawText);
  }

  const token = loginBody.token;

  console.log('Token:', token);

  expect(token).toBeDefined();
});