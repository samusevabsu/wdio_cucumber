const { assert, expect } = require('chai');
const { Given, When, Then } = require('@cucumber/cucumber');
const passportPage = require('../pageObject/selva/passport.page');


Given("User is on Passport page", async () => {
    await passportPage.footerIconPassport.waitForDisplayed();
    await passportPage.footerIconPassport.click();
})

Then("Income section exist", async () => {
    await passportPage.incomeSection.waitForDisplayed();
    expect(await passportPage.incomeSection).to.exist;
})

Then("Rent section exist", async () => {
    await passportPage.rentSection.waitForDisplayed();
    expect(await passportPage.rentSection).to.exist;
})
