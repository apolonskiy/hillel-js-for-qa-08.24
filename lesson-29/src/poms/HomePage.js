import BasePage from './BasePage';
export default class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.url = '/'
  }

  selectors = {
    signInButton: this.page.locator('.header_right .header_signin'),
    logoutButton:  this.page.locator('.icon-logout'),
    email:this.page.locator('#signinEmail'),
    password: this.page.locator('#signinPassword'),
    loginButton:  this.page.locator('.modal-footer .btn-primary'),
  };

  async openLogInForm() {
    await this.selectors.signInButton.click();
  }

  async logIn(email, password){
    await this.selectors.email.fill(email);
    await this.selectors.password.fill(password);
    await this.selectors.loginButton.click();
  }

  async logOut() {
    await this.selectors.logoutButton.click();
  }
}