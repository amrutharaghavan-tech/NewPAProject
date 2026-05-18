class eventsPage {
    constructor(page) {
        this.page = page;
        this.btnAddEvent = page.getByRole('button', { name: 'Add New Event' });
        this.eventTitle = page.getByTestId('event-title-input');

        this.eventDescription =
            page.getByPlaceholder('Describe the event…');
        this.category = page.locator('#category');
        this.city = page.getByLabel('City');
        this.venue = page.getByLabel('Venue');
        this.evetdateTime = page.getByLabel('Event Date & Time*');
        this.price = page.getByLabel('Price ($)*');
        this.seats = page.getByLabel('Total Seats*');
        this.imgUrl = page.getByLabel('Image URL (optional)');
        this.btnSaveEvent = page.getByRole('button', { name: /add event/i });

    }
    async getEventTitle() {
        return await this.eventTitle.first().textContent();
    }
    async addEvent(eventData) {
        if (!eventData?.Event) {
            throw new Error('Invalid event test data');
        }
        await this.btnAddEvent.click();
        await this.page.getByRole('heading', { name: '+ New Event' }).waitFor();
        await this.eventTitle.fill(eventData.Event.title);
        await this.eventDescription.fill(eventData.Event.description);
        await this.category.selectOption({ label: eventData.Event.category });
        await this.city.fill(eventData.Event.city);
        await this.venue.fill(eventData.Event.venue);

        await this.price.fill(eventData.Event.price.toString());
        await this.seats.fill(eventData.Event.seats.toString());
        await this.imgUrl.fill(eventData.Event.imgUrl);
        await this.evetdateTime.fill(eventData.Event.dateTime);
        await this.btnSaveEvent.click();
    }
}
module.exports = { eventsPage };