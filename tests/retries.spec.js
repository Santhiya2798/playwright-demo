import { test, expect } from '@playwright/test';


let attempt = 0;


test('Retry Demo Test', async ({ page }) => {
  attempt++;
  console.log(`👉 Attempt number: ${attempt}`);


  await page.goto('https://example.com');


  // Fail first time, pass second time
  if (attempt === 1) {
    expect(1).toBe(2); // ❌ fail
  } else {
    expect(1).toBe(1); // ✅ pass
  }
});
