import { test, expect, request } from '@playwright/test';

test('API Chaining Example (Create → Get)', async () => {

  // 🔹 Step 1: Create API Context
  const apiContext = await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
    extraHTTPHeaders: {
      'Content-Type': 'application/json'
    }
  });

  // 🔹 Step 2: Create a post (POST)
  const createResponse = await apiContext.post('/posts', {
    data: {
      title: 'Ajith Test Post',
      body: 'Playwright API + UI',
      userId: 1
    }
  });

  // ✅ Validate creation
  await expect(createResponse).toBeOK();

  const createBody = await createResponse.json();

  console.log('Created Response:', createBody);

  const postId = createBody.id;

  // 🔹 Step 3: Get the post (GET)
  const getResponse = await apiContext.get(`/posts/${postId}`);

  // ✅ Validate GET response
  await expect(getResponse).toBeOK();

  const getBody = await getResponse.json();

  console.log('Fetched Response:', getBody);

  // 🔹 Step 4: Validate structure (since API is fake)
  expect(getBody).toHaveProperty('id');

  // ⚠️ Important: Data won't match because API is fake
  // So don't compare title/body here

});