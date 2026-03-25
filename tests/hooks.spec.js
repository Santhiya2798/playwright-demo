import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log('🚀 beforeAll → Runs once');
});

test.beforeEach(async ({ page }) => {
  console.log('🔄 beforeEach → Runs before every test');
  await page.goto('https://example.com');
});

test.afterAll(async () => {
  console.log('🧹 afterAll → Runs once at end');
});

test('Test 1', async ({ page }) => {
  console.log('✅ Executing Test 1');
});

test('Test 2', async ({ page }) => {
  console.log('✅ Executing Test 2');
});