import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests', fullyParallel: true, workers: 2, reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4321',
    launchOptions: process.env.PLAYWRIGHT_EXECUTABLE_PATH ? { executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH } : {},
  },
  projects: [
    {name:'desktop',use:{...devices['Desktop Chrome'],viewport:{width:1440,height:1000}}},
    {name:'mobile',use:{...devices['iPhone 13'],defaultBrowserType:'chromium'}},
  ],
  webServer: { command: 'node node_modules/astro/bin/astro.mjs preview --host 127.0.0.1 --port 4321 --ignore-lock', url:'http://127.0.0.1:4321', reuseExistingServer:!process.env.CI, env:{ASTRO_TELEMETRY_DISABLED:'1'} },
});
