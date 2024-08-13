import {defineConfig, devices} from '@playwright/test';
import dotenv = require("dotenv")
import path = require("path")

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();
dotenv.config({
    path:`./env/.env.${process.env.ENV}`
});

// Alternatively, read from "../.env" file.
dotenv.config({path: path.resolve(__dirname, '..', '.env')});
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    timeout: 2* 10 * 1000,
    expect: {
        timeout: 60 * 1000,
    },
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: 'html',
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* TodoPage URL to use in actions like `await page.goto('/')`. */
        // baseURL: 'http://127.0.0.1:3000',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        video: 'on',
        baseURL: process.env.STAGING === 'dev' ? 'http://grit-dev.dev.kincloud.io' : 'https://grit.staging.kincloud.io/',
        launchOptions: {
            // 1
            args: ["--start-maximized"],
        },
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'setup db',
            testMatch: /global\.setup\.ts/,
            teardown: 'cleanup db',
        },
        {
            name: 'cleanup db',
            testMatch: /global\.teardown\.ts/,
        },
        {
            name: 'Microsoft Edge',
            use: {
                ...devices['Desktop Edge'],
                channel: 'msedge',
                viewport: {width: 1920, height: 1080},
            },
            dependencies: ['setup db'],
        },
        // {
        //     name: 'chromium',
        //     use: {
        //         ...devices['Desktop Chrome'],
        //         viewport: {width: 1920, height: 1080}
        //     },
        // },

        // {
        //   name: 'firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },

        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },

        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },

        /* Test against branded browsers. */


        // {
        //   name: 'Google Chrome',
        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        // },
    ],

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});
