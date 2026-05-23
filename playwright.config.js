// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: './tests',
  //timeout for each test
  timeout: 40*1000,
  //timeout for each expect assertion
  expect  : {
    timeout: 40*1000
  },
  //report the results in html format
reporter: 'html',
  use: {
    //define the browser to use for the tests
    browserName: 'chromium',
    //run the tests in headed mode
    headless: false,
    
    
  },

});
//export the config object to be used by Playwright
module.exports = config;

