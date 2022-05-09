class LoginPage {

    get inputUserName() {
        return $('input[data-testid="sign_in_email"]');
    }

    get inputUserPassword() {
        return $('input[data-testid="sign_in_password"]');
    }

    get signInBtn() {
        return $('div[data-testid="sign_in_button"]');
    }

    async login(username, password) {
        await this.inputUserName.setValue(username);
        await this.inputUserPassword.setValue(password);
        await this.signInBtn.waitForEnabled();
        await this.signInBtn.click();
        await this.signInBtn.waitForDisplayed({ reverse: true });
    }
}

module.exports = new LoginPage();

