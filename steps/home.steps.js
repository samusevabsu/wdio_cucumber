const { assert, expect } = require('chai');
const { Given, When, Then } = require('@cucumber/cucumber');


Then("User is on Home page", async () => {
    const homeUrl = await browser.getUrl();
    console.log(homeUrl);
    expect(homeUrl).to.equal(`${browser.options.baseUrl}/auth/login?guarantor=false`)
})

