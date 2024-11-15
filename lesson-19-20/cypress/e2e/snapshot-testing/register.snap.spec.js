import { LandingPage, RegisterPage } from '../../support/pageObjects'


const landingPage = new LandingPage() 
let registerPage;
describe.only('Registration spec', () => {

  before(() => {
    registerPage = new RegisterPage()
  })

  context('Registration UI tests', () => {
    beforeEach(() => {
      registerPage.visit()
    })

    it('Registration UI snapshot testing', () => { 

      cy.matchImageSnapshot('Registration UI snapshot testing',{
        failureThreshold: 0.1,
      });

      landingPage.visit()
      cy.matchImageSnapshot('landing page test', {
        failureThreshold: 0.4,
      });
    })
  })
})