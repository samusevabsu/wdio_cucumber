class AccountPage {

    get logOutSect() {
        return $('div[data-testid="account-log-out"]');
    }

    get logOutConfirm() {
        return $('div[data-testid="logout-confirm"]');
        
    }

    async logOut() {
        await this.logOutSect.click();
        await this.logOutConfirm.waitForClickable();
        await this.logOutConfirm.click()
    }

}

module.exports = new AccountPage();