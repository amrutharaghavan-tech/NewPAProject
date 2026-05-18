const { test } = require('@playwright/test');
const { poManager } = require('./pageObjects/poManager');

test('global login setup', async ({ page }) => {
    const lPage = await pages.createLogin();
    await lPage.tryLogin("amrutharaghavan@abc.com", "Hell0@W0rld");
    await lPage.waitForURL('**/dashboard');
    await lPage.locator('#user-email-display').toHaveText('amrutharaghavan@abc.com');
    await lPage.context().storageState({
        path: 'auth/user.json'
    });
});