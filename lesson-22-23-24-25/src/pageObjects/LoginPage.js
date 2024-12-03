import BasePage from "./BasePage";
import LoginForm from "./components/LoginForm";
import LibraryPage from "./LibraryPage";


export default class LoginPage extends BasePage {
  constructor(page, context) {
    super(page, context)
    this.url = '/auth/login'
    this.loginForm = new LoginForm(page,context);
  }

  get emailInput() {
    return this.page.locator('input[name="email"]')
  }

  locators = {
    loginButton: this.page.getByRole('button', { name: 'Log in' }),
    dummySelector: this.page.locator('inputabsgklj>?M<<><>')
  }

  async executeLogin(email, password){
    await this.loginForm.filInForm(email, password)
    await this.locators.loginButton.click();
    return new LibraryPage(this.page, this.context);
  }


}