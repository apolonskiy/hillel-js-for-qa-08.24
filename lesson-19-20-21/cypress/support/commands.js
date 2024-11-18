import { LandingPage, RegisterPage } from './pageObjects'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('register', (userForm) => {
  const landingPage = new LandingPage();
  const registerPage = new RegisterPage();

  landingPage.visit()
  landingPage.clickSignUpLink()
  registerPage.logOut()
  landingPage.visit()
  cy.wait(500)
  landingPage.clickLogoutIfVisible()
  landingPage.clickSignUpLink()
  registerPage.fillInInitialForm(userForm);
  registerPage.clickSubmitButton();
  registerPage.fillInAdditionalForm(userForm);
  registerPage.clickSubmitButton();
  cy.url().should('contain', '/app/my-library')
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
//   const secretHeader = {
//     headerKey: process.env.KEY
//   }

//   options.headers = {...options.headers, ...secretHeader};
//   originalFn(url, options)
// })