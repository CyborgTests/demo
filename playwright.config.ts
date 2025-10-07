import 'dotenv/config'
import { defineConfig, devices } from "@playwright/test";

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
    //     url: "http://localhost:3000",
    //     // Set token if your server instance has authentication enabled
    //     // token: '1234',
    //     reportPath: "test-results/blob.zip",
    //     // Any custom metadata to attach to this blob (strings)
    //     resultDetails: {
    //       manual: true,
    //       executedBy: process.env.CYBORGTESTS_OWNER || "unknown",
    //       testRun: "demo-run-2",
    //     },
    //     // Automatically trigger HTML report generation, shards supported
    //     triggerReportGeneration: true,
    //   },
    // ],
    ["html", { open: "on-failure" }],
    ["list"],
  ],
  use: {
    trace: "retain-on-failure",
    video: "on",
    screenshot: {
      mode: "on",
      fullPage: true,
    },
    headless: false,
    baseURL: "https://shopdemo-alex-hot.koyeb.app/",
  },
  projects: [
    {
      // grep: new RegExp(process.env.QA_USERNAME || execSync('git config user.name', { encoding: 'utf8' }).trim() || ""),
      name: "cyborg",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});
