class register {

    constructor(page) {

        this.page = page;
        this.email = page.locator('#register-email');
        this.password = page.locator('#register-password');
        this.cpassword = page.getByRole('textbox', { name: 'Password' }).last();
        this.btnCreateAcccount = page.getByRole('button', { name: 'Create Account' });
        this.lnkRegister = page.getByRole('link', { name: 'Register' });


    }
    async gotoRegister() {


        await this.page.goto('https://eventhub.rahulshettyacademy.com/login');
        await this.lnkRegister.click();
        await this.page.getByText("Create your account").waitFor();
    }


    async tryRegister(email, pwd, cpwd) {
        await this.page.goto('https://eventhub.rahulshettyacademy.com/register');
        await this.email.fill(email);
        await this.password.fill(pwd);
        await this.cpassword.fill(cpwd);
        await this.btnCreateAcccount.click();

    }
    async tryRegister(email, pwd, cpwd) {
        await this.page.goto('https://eventhub.rahulshettyacademy.com/register');
        await this.email.fill(email);
        await this.password.fill(pwd);
        await this.cpassword.fill(cpwd);
        await this.btnCreateAcccount.click();

    }
       async tryRegister(email, pwd, cpwd) {
        await this.page.goto('https://eventhub.rahulshettyacademy.com/register');
        await this.email.fill(email);
        await this.password.fill(pwd);
        await this.cpassword.fill(cpwd);
        await this.btnCreateAcccount.click();

    }
    async checkValidPassword(email, pwd) {
        await this.page.goto('https://eventhub.rahulshettyacademy.com/register');
        await this.email.fill(email);
        await this.password.fill(pwd);
        await this.cpassword.fill(pwd);
        await this.btnCreateAcccount.click();

    }
}
module.exports = { register };