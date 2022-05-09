const { assert, expect } = require('chai');


class PassportPage {

    get userIcon() {
        return $("div[data-testid='id-profile-icon']");
    }
    get incomeSection() {
        return $("div[data-testid='new_income']");
    }
    get rentSection() {
        return $("div[data-testid='rent']");
    }
    get footerIconPassport() {
        return $("div[data-testid='menu_footer_rent_passport']");
    }

    async checkUserIconIsDisplayed() {
        const isDisplayed = await this.userIcon.isDisplayed();
        expect(isDisplayed).to.be.true;
    }
}

module.exports = new PassportPage();