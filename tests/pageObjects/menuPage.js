class menuPage {
    constructor(page) {
        this.page = page;
        this.home = page.getByTestId('nav-home');
        this.events = page.getByTestId('nav-events');
        this.myBookings = page.getByTestId('nav-bookings');

    }
    async gotoHome() {
        await this.home.click();
        await this.page.getByText("Featured Events").waitFor();
    }
    async gotoEvents() {
        await this.events.click();
        await this.page.getByText("Upcoming Events").waitFor();
    }       
    async gotoMyBookings() {
        await this.myBookings.click();
        await this.page.getByText("My Bookings").waitFor();
    }       
}
module.exports = { menuPage };  
