import { test, expect } from '@playwright/test';


test('Normal test', async () => {
  console.log('I run normally');
});


test.skip('Skipped test', async () => {
  console.log('I will not run');
});


test.only('Only test', async () => {
  console.log('Only me runs');
});


test.fail('Expected to fail', async () => {
  expect(1).toBe(2);
});


test.slow('Slow test', async () => {
  await new Promise(r => setTimeout(r, 3000));
});
