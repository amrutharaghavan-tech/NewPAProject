const { test, expect } = require('@playwright/test');
const { poManager } = require('./pageObjects/poManager');
const eventData = require('../testdata/eventData.json');
const { json } = require('node:stream/consumers');

test.use({
    storageState: 'auth/user.json'
});
test(`@regression CheckNavigation`, async ({ page }) => // browser is a builtin playwright fixtures  
{
    await page.goto('https://eventhub.rahulshettyacademy.com/events');
    const pages = new poManager(page);
    const ePage = await pages.createEvents();
    await ePage.addEvent(eventData);
    expect(page.url()).toBe('https://eventhub.rahulshettyacademy.com/admin/events');
    expect(await page.textContent('text=Event created!')).toBeTruthy();
});