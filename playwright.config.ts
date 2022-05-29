import { loadEnvConfig } from '@next/env';
import { devices, type PlaywrightTestConfig } from '@playwright/test';

loadEnvConfig(process.cwd());

const config: PlaywrightTestConfig = {
  testDir: 'e2e',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'line',
  webServer: {
    command: 'yarn start',
    port: 3000,
  },
  use: {
    trace: 'on-first-retry',
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
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
    // {
    //   name: 'webkit tablet',
    //   use: { ...devices['iPad (gen 7)'] },
    // },
    {
      name: 'chromium mobile',
      use: { ...devices['Pixel 5'] },
    },
    // {
    //   name: 'webkit mobile',
    //   use: { ...devices['iPhone 13'] },
    // },
  ],
};

export default config;
