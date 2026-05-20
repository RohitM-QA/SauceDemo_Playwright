class CheckoutPage {
    constructor(page){
        this.page = page;

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.zipCode = page.locator('#postal-code');

        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');

        this.successMessage = page.locator('.complete-header');
    }

    async enterCheckoutDetails(details) {
        await this.firstName.fill(details.firstName);
        await this.lastName.fill(details.lastName);
        await this.zipCode.fill(details.zipCode);
    }

    async clickContinueButton(){
        await this.continueButton.click();
    }

    async clickFinishButton(){
        await this.finishButton.click();
    }

    async verifySuccessMessage(){
        return await this.successMessage.textContent();
    }
}

module.exports = CheckoutPage;