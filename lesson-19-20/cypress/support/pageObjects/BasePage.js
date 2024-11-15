export default class BasePage {

  logOut() {
    cy.wait(300)
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.setCookie('id_token', 'qwe')
    cy.clearCookie('id_token');
    cy.wait(300)
  }
}