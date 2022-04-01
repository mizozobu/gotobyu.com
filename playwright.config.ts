import { loadEnvConfig } from '@next/env';
import { PlaywrightTestConfig, devices } from '@playwright/test';

loadEnvConfig(process.cwd());

const config: PlaywrightTestConfig = {
  testDir: 'e2e',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: 'on-first-retry',
  },
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
    {
      name: 'chromium mobile',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'webkit mobile',
      use: { ...devices['iPhone 13'] },
    },
  ],
};

export default config;
