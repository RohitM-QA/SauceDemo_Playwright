const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

const data = require('../fixtures/testData.json');

test('Checkout Process and Print confirmation', async ({ page }) => {

    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await page.goto('/');

    await login.login(
        data.standardUser.username,
        data.standardUser.password
    );

    await inventory.addBackpackToCart();
    await inventory.openCart();

    await cart.clickCheckoutButton();

    await checkout.enterCheckoutDetails(data.checkoutDetails);
    await checkout.clickContinueButton();
    await checkout.clickFinishButton();

    const message = await checkout.verifySuccessMessage();

    console.log('Order Confirmation Message: ', message);
    
    expect(message).toContain('Thank you for your order!');


});