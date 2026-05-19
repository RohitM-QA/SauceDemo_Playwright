class InventoryPage {
    constructor(page){
        this.page = page;

        this.inventoryTitle = page.locator('.title');
        this.addToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.shoppingCart = page.locator('.shopping_cart_link');    
    }

    async addBackpackToCart() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.shoppingCart.click;
    }

    async getPageTitle() {
    return await this.inventoryTitle.textContent();
  }

}

module.exports = InventoryPage;