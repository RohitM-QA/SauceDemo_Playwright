const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');

const data = require('../fixtures/testData.json');

// VALID LOGIN TEST
test('Login with valid username and password', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto('/');

  await loginPage.login(
    data.standardUser.username,
    data.standardUser.password
  );

  await expect(page).toHaveURL(/inventory/);
});


// // INVALID LOGIN TEST
// test('Wrong username + correct password', async ({ page }) => {

//   const loginPage = new LoginPage(page);

//   await page.goto('/');

//   await loginPage.login(
//     data.wrong_user.username,
//     data.standardUser.password
//   );
  
//   await expect(page).toHaveURL(/inventory/);

// });