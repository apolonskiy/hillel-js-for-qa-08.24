import BasePage from "../BasePage";

export default class LoginForm extends BasePage {

  locators = {
    emailInput: this.page.locator('input[name="email"]'),
    passwordInput: this.page.locator('input[name="password"]'),
  }

  async filInForm(email,password){
    await this.locators.emailInput.type(email);
    await this.locators.passwordInput.type(password);
  }

}