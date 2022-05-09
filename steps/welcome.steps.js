const { assert, expect } = require('chai');
const { Given, When, Then } = require('@cucumber/cucumber');
const welcomePage = require('../pageObject/selva/welcome.page');
const loginPage = require('../pageObject/selva/login.page');
const passportPage = require('../pageObject/selva/passport.page');


Given("User is on Welcome page", async () => {
    await browser.url('/welcome');
});

When("User clicks Login button", async () => {
    await welcomePage.signIn.waitForDisplayed();
    await welcomePage.signIn.click();
});



When(/^User enters "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    console.log('aaa!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    await loginPage.login(username, password);
});


Then("Profile icon is displayed", async () => {
    await passportPage.checkUserIconIsDisplayed();
})

