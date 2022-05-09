const { assert, expect } = require('chai');
const { Given, When, Then } = require('@cucumber/cucumber');
const accountPage = require('../pageObject/selva/account.page');

Given("User is on Account page", async () => {
    await browser.url('/account');
})

When("User click Logout section", async () => {
    await accountPage.logOut();
})


