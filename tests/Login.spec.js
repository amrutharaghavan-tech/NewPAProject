const { test, expect } = require('@playwright/test');
const { poManager } = require('./pageObjects/poManager');

test(`@web Verify eventHub valid login`, async ({ page }) => // browser is a builtin playwright fixtures  
{
    const pages = new poManager(page);
    //   uname= "amrutharaghavan@abc.com"
        //   uname= "amrutharaghavan@abc1.com"
    //  password="Hell0@W0rld"
    const lPage = await pages.createLogin();
    await lPage.tryLogin("amrutharaghavan@abc.com", "Hell0@W0rld");
    await expect(page.locator('#user-email-display')).toHaveText('amrutharaghavan@abc.com');
});

test('EventHub Login -Invalid mailid', async ({ page }) => // browser is a builtin playwright fixtures  
{
    //test('Invalid Login',async ({browser,page})=> 
    // const context= await browser.newContext(); //creating new browser instance.Can give plugin details and cookie deatils as parameter
    // const page=await context.newPage(); 
    //if no argument need to be passed in the broweser then page can be directly set as argument
    //Step 5 and 6 can be commented,and browser can be removed from paramenter
    const pages = new poManager(page);
    const lPage = await pages.createLogin();
    await lPage.tryLogin("amrutharaghavan@abc.co", "Hell0@W0rld");
    // await expect(page.locator('body > div:nth-child(2))')).toHaveText("Invalid email or password");
    await expect(page.getByText('Invalid email or password')).toBeVisible();
});

test('EventHub Login -Invalid password', async ({ page }) => // browser is a builtin playwright fixtures  
{

    const pages = new poManager(page);
    const lPage = await pages.createLogin();
    await lPage.tryLogin("amrutharaghavan@abc.com", "Hell0W0rld");
    // await expect(page.locator('body > div:nth-child(2))')).toHaveText("Invalid email or password");
    await expect(page.getByText('Invalid email or password')).toBeVisible();
});



