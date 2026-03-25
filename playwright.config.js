// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Run tests fully in parallel */
  fullyParallel: true,

  /* Fail build if test.only is left */
  forbidOnly: !!process.env.CI,

  /* Retries */
  retries: process.env.CI ? 2 : 1,

  /* Workers (parallel threads) */
  workers: process.env.CI ? 2 : 4, // 🔥 added properly

  /* Reporter */
  reporter: 'html',


  /* Shared settings */
  use: {
    trace: 'on', // works now because retries = 1
    video: 'retain-on-failure', // 🔥 added (very useful)
    screenshot: 'only-on-failure', // optional but smart
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});