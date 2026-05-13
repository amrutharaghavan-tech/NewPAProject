const { test, expect } = require('@playwright/test');
const { poManager } = require('./pageObjects/poManager');



test(`@web Verify register link from login page`, async ({ page }) => // browser is a builtin playwright fixtures  
{
    const pages = new poManager(page);
    const rPage = await pages.createRegister();
    await rPage.gotoRegister();
    await expect(page.getByText("Create your account")).toBeTruthy();
});
test(`@web New User register with valid data`, async ({ page }) => // browser is a builtin playwright fixtures  
{
    const pages = new poManager(page);
    //   uname= "amrutharaghavan@abc.com"
    //   uname= "amrutharaghavan@abc1.com",
    //  password="Hell0@W0rld"
    const rPage = await pages.createRegister();
    await rPage.tryRegister("amrutharaghavan@abc3.com", "Hell0@W0rld", "Hell0@W0rld");
    await expect(page.locator('#user-email-display')).toHaveText('amrutharaghavan@abc3.com');
});

test(`@web Registering with duplicate mail id`, async ({ page }) => // browser is a builtin playwright fixtures  
{
    const pages = new poManager(page);
    const rPage = await pages.createRegister();
    await rPage.tryRegister("amrutharaghavan@abc3.com", "Hell0@W0rld", "Hell0@W0rld");
    await expect(page.getByText('Email already registered')).toBeVisible();


});


test(`@web Password mismatch while register`, async ({ page }) => // browser is a builtin playwright fixtures  
{
    const pages = new poManager(page);
    const rPage = await pages.createRegister();
    await rPage.tryRegister("amrutharaghavan@abcx.com", "Hell0@W0rld", "Hell0$W0rld");
    await expect(page.getByText('Passwords do not match')).toBeVisible();


});
test(`@web Invalid Email`, async ({ page }) => // browser is a builtin playwright fixtures  
{
    const pages = new poManager(page);
    const rPage = await pages.createRegister();
   // await rPage.gotoRegister();
    await rPage.tryRegister("amrutha", "Hell0@W0rld", "Hell0@W0rld");
    await expect(page.getByText('Enter a valid email')).toBeVisible();

});
test.only(`@web verify password validation`, async ({ page }) => // browser is a builtin playwright fixtures  
{
    const pages = new poManager(page);
    const rPage = await pages.createRegister();
   // await rPage.gotoRegister();
    await rPage.checkValidPassword("amrutharaghavan@abcx.com", "abcdef");
    await expect(page.getByText('Password does not meet the requirements below')).toBeVisible();

});