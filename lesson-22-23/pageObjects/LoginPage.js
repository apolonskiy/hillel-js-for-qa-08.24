import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
    constructor(page) {
        super(page)
        this.pageUrl = '/auth/login'
    }

    locators = {
        emailInput: this.page.locator('input[name="email"]'),
        passwordInput: this.page.locator('input[name="password"]'),
        loginButton: this.page.getByRole('button', {name: 'Log in'})
    }

    async visitPage(){
        await this.page.goto(`${this.baseUrl}${this.pageUrl}`);
    }

    async executeLogin(email, password){
        await this.locators.emailInput.type(email);
        await this.locators.passwordInput.type(password);
        await this.locators.loginButton.click();
    }

}