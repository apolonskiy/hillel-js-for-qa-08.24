import { LandingPage, RegisterPage } from '../support/pageObjects'


const landingPage = new LandingPage() 
let registerPage;
let randomUserData;
describe('Registration spec', () => {

  before(() => {
    registerPage = new RegisterPage()
  })

  context('Registration via manual input', () => {
    beforeEach(() => {
      randomUserData = RegisterPage.generateUserData();
      landingPage.visit()
      landingPage.clickSignUpLink()
      cy.log('TEST1')
      console.log('TEST2')
      registerPage.logOut()
      landingPage.visit()
      cy.wait(500)
      landingPage.clickLogoutIfVisible()
      landingPage.clickSignUpLinkFromSelector()
    })

    it('Successful register will fully filled forms', () => { 
      cy.url().then(url => {
        cy.task('log', `URL INSIDE TEST: ${url}`)
      })
      
      registerPage
        .fillInInitialForm(randomUserData)
        .clickSubmitButton();
      registerPage.fillInAdditionalForm(randomUserData);
      registerPage.clickSubmitButton();
      cy.url().should('contain', '/app/my-library')
      cy.get('[data-testid="custom-theme-provider"] aside li').eq(1).invoke('attr', 'data-state').should('equal', 'active');
    })

    it('Successful register will partially filled forms', () => { 
      registerPage.fillInInitialForm(randomUserData);
      registerPage.clickSubmitButton();
      registerPage.clickSkipAdditioanlInfoButton();
      cy.url().should('contain', '/app/my-library')
    })

    it('Negative register will invalid email', () => { 
      registerPage.fillInInitialForm({ email: 'test@@@.com', password: randomUserData.password });
      registerPage.clickSubmitButton();
      registerPage.getInputErrorText(registerPage.emailInput).should('equal', 'Invalid email address')
      cy.url().should('contain', '/auth/sign-up')
    })

    it('Negative register will short password', () => { 
      registerPage.fillInInitialForm({ email: randomUserData.email, password: 'qwe' });
      registerPage.clickSubmitButton();
      registerPage.getInputErrorText(registerPage.passwordInput).should('equal', 'Password must contain least 6 characters')
      cy.url().should('contain', '/auth/sign-up')
    })
  })

  context('Registration via extended Cypress command', () => {
    randomUserData = RegisterPage.generateUserData();
    it('Successful register via Cypress comman', () => {
      cy.register(randomUserData);
    })
  })
})