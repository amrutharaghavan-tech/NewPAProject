const { loginPage } = require('./loginPage');
const { register } = require('./register');
const { menuPage } = require('./menuPage');
const { eventsPage } = require('./eventsPage');


class poManager {

    constructor(page) {
        this.page = page;
        this.logIn = new loginPage(this.page);
        this.register = new register(this.page);
        this.menuPage = new menuPage(this.page);
        this.eventsPage = new eventsPage(this.page);
    }
    async createLogin() {
        return this.logIn;
    }

    async createRegister() {
        return this.register;
    }

    async createMenu() {
        return this.menuPage;
    }
    async createEvents() {
        return this.eventsPage;
    }
}
module.exports = { poManager };