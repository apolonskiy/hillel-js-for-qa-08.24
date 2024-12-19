export default class RegistrationPage {

  constructor(page) {
    this.page = page;
  }

  selectors = {
    registrationButton: () => this.page.locator('.btn-link:has-text("Registration")'),
    name: () => this.page.locator('#signupName'),
    lastName: () => this.page.locator('#signupLastName'),
    email: () => this.page.locator('#signupEmail'),
    password: () => this.page.locator('#signupPassword'),
    confirmPassword: () => this.page.locator('#signupRepeatPassword'),
    registerButton: () => this.page.getByRole('button', { name: 'Register' }),
    closeButton: () => this.page.getByRole('button', { name: 'Close' }),  
    mainTitle: () => this.page.getByRole('heading', { name: 'Registration' }),
    nameTitle: () => this.page.locator('#signupName').locator('xpath=preceding-sibling::*'),
    lastNameTitle: () => this.page.locator('#signupLastName').locator('xpath=preceding-sibling::*'),
    emailTitle: () => this.page.locator('#signupEmail').locator('xpath=preceding-sibling::*'),
    passwordTitle: () => this.page.locator('#signupPassword').locator('xpath=preceding-sibling::*'),
    confirmPasswordTitle: () => this.page.locator('#signupRepeatPassword').locator('xpath=preceding-sibling::*'),
    successMessage: () => this.page.locator('.alert-success'),
    error: () => this.page.locator('.invalid-feedback'),
  }
      
  async openRegistationForm(){
    await this.selectors.registrationButton().click();
  }

  async registerUser(name,lastName,email,password,confirmPassword){
    await this.selectors.name().fill(name);
    await this.selectors.lastName().fill(lastName);
    await this.selectors.email().fill(email);
    await this.selectors.password().fill(password, { sensitive: true });
    await this.selectors.confirmPassword().fill(confirmPassword, { sensitive: true });
    await this.selectors.registerButton().click();
  }

}