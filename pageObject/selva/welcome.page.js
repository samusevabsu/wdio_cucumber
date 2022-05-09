class WelcomePage {

    get signIn() {
        return $('div[data-testid="sign_in_button"]');
    }
}

module.exports = new WelcomePage();