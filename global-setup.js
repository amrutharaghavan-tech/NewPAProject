const { test } = require('@playwright/test');
const { poManager } = require('./tests/pageObjects/poManager');



async function globalSetup() {
    const { chromium } = require('@playwright/test');
    const browser = await chromium.launch();
    const page = await browser.newPage();

    const pages = new poManager(page);
    const lpage = await pages.createLogin();
    await lpage.tryLogin('amrutharaghavan@abc.com', 'Hell0@W0rld');
    await page.waitForLoadState('networkidle');
    await page.context().storageState({
        path: 'auth/user.json'
    });
    await browser.close();
}
module.exports = globalSetup;

/**
 * Read environment variables from file.
 * // require('dotenv').config();
 * @see https://playwright.dev/docs/test-configuration
 */