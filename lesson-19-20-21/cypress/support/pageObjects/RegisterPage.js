import { faker } from '@faker-js/faker';
import BasePage from './BasePage';

export default  class RegisterPage extends BasePage {

  pageUrl = '/auth/sign-up'

  visit() {
    cy.visit(this.pageUrl)
  }

  get logoLink() {
    return cy.get('[data-testid="custom-theme-provider"] main a[href="/"]')
  }

  get loginLink() {
    return cy.get('[data-testid="custom-theme-provider"] section a[href="/auth/login"]')
  }

  get ssoLoginLink() {
    return cy.get('[data-testid="custom-theme-provider"] section>button')
  }

  get emailInput() {
    return cy.get('[data-testid="custom-theme-provider"] section input[name="email"]')
  }

  get passwordInput() {
    return cy.get('[data-testid="custom-theme-provider"] section input[name="password"]')
  }
    
  get firstNameInput() {
    return cy.get('[data-testid="custom-theme-provider"] section input[name="firstName"]')
  }

  get lastNameInput() {
    return cy.get('[data-testid="custom-theme-provider"] section input[name="lastName"]')
  }

  get artistNameInput() {
    return cy.get('[data-testid="custom-theme-provider"] section input[name="artistName"]')
  }

  getInputErrorText(inputElement) {
    return inputElement.parent().find('p').invoke('text')
  }

  get skipUserInfoFormLink() {
    return cy.get('[data-testid="custom-theme-provider"] section a[href="/app/playground"]')
  }

  get submitButton() {
    return cy.get('[data-testid="custom-theme-provider"] section button[type="submit"]')
  }

  clickLogoLink(){
    this.logoLink.click();
  }

  clickLoginLink(){
    this.loginLink.click();
  }

  fillInInitialForm({ email, password }){
    this.emailInput.type(email)
    this.passwordInput.type(password)
    return this;
  }

  fillInAdditionalForm({ firstName, lastName, artistName }){
    this.firstNameInput.type(firstName)
    this.lastNameInput.type(lastName)
    this.artistNameInput.type(artistName)
    return this;
  }

  clickSubmitButton(){
    this.submitButton.click()
  }

  clickSkipAdditioanlInfoButton(){
    this.skipUserInfoFormLink.click()
  }

  static generateUserData() {
    return {
      email: faker.internet.email(),
      password: faker.internet.password(),
      firstName: 'FirstName',
      lastName: 'LastName',
      artistName: faker.internet.username()
    }
  }

}