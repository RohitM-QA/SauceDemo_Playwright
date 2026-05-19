const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const data = require('../fixtures/testData.json');

test('Valid Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto('/');

  await loginPage.login(
    data.standardUser.username,
    data.standardUser.password
  );

  await expect(page).toHaveURL(/inventory/);
});