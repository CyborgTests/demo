import 'dotenv/config'
import { defineConfig, devices } from "@playwright/test";
import { execSync } from "node:child_process";

const qaUsername = process.env.QA_USERNAME || execSync('git config user.name', { encoding: 'utf8' }).trim() || 'unknown';

console.log(qaUsername);

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  timeout: 0,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    // blob reporter is required, produced zip would be uploaded
    // ["blob", { outputFile: "test-results/blob.zip" }],
    // [
    //   "@cyborgtests/reporter-playwright-reports-server",
    //   {
    //     // true by default. Use this if you need to skip this reporter for some cases (local executions for example)
    //     enabled: true,
    //     /**
    //      * Your server url
    //      * @see https://github.com/CyborgTests/playwright-reports-server
    //      */
    //     url: process.env.PLAYWRIGHT_REPORTS_SERVER_URL,
    //     // Set token if your server instance has authentication enabled
    //     // token: '1234',
    //     reportPath: "test-results/blob.zip",
    //     // Any custom metadata to attach to this blob (strings)
    //     resultDetails: {
    //       manual: true,
    //       executedBy: qaUsername,
    //       testRun: "regression-07-10-2025",
    //     },
    //     // Automatically trigger HTML report generation on result uploaded, shards supported
    //     triggerReportGeneration: false,
    //   },
    // ],
    ["html", { open: "never" }],
    ["list"],
  ],
  use: {
    trace: "retain-on-failure",
    video: 'retain-on-failure',
    screenshot: {
      mode: "on",
      fullPage: true,
    },
    headless: false,
    baseURL: "https://shopdemo-alex-hot.koyeb.app/",
  },
  projects: [
    {
      grep: new RegExp(`@${qaUsername}`),
      name: "cyborg",
      use: {
        ...devices["Desktop Chrome"],
        channel: "chrome",
      },
    },
  ],
});
