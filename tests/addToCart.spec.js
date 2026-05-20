const { test, except, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

const data = require('../fixtures/testData.json');

test('Add to Cart Test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await page.goto('/');

    await loginPage.login(
        data.standardUser.username,
        data.standardUser.password
    );

    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await expect(page).toHaveURL(/cart/);

});