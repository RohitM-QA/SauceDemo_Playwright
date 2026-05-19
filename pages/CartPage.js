class CartPage{
    constructor(page){
        this.page = page;

        this.cartItems = page.locator('.inventory_item_name');
        this.checkoutButton = page.locator('#checkout');
    }

    async getCartItemsname() {
        return await this.cartItems.textContent();
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
}

module.exports = CartPage;