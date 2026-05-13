class loginPage {

    constructor(page) {

        this.page = page;
        this.username = page.locator('input#email');
        this.password = page.locator("[type='password']");
        this.loginBttn = page.getByRole('button', { name: 'Sign In' });


    }

    async tryLogin(uname, pwd) {
        await this.page.goto('https://eventhub.rahulshettyacademy.com/login');
        await this.username.fill("");//To clear any exiting content
        await this.password.fill("");//To clear any exiting content
        await this.username.fill(uname);
        await this.password.fill(pwd);
        await this.page.getByRole('button', { name: 'Sign In' }).click();
    }
    async validLogin(uname, pwd) {
        await this.username.fill(uname);
        await this.password.fill(pwd);
        await this.loginBttn.click();
        await this.page.waitForLoadState('networkidle');




    }
}
module.exports = { loginPage };