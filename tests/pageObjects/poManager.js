const { loginPage } = require('./loginPage');
const { register } = require('./register');



class poManager {

    constructor(page) {
        this.page = page;
        this.logIn = new loginPage(this.page);
        this.register = new register(this.page);


    }
    async createLogin() {
        return this.logIn;
    }

    async createRegister() {
        return this.register;
    }
}
module.exports = { poManager };