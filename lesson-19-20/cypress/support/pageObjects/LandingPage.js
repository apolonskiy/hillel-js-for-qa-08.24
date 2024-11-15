import BasePage from "./BasePage"

export default  class LandingPage extends BasePage {
  pageUrl = '/'

  selectors = {
    logoLink: () => cy.get('[data-testid="custom-theme-provider"] header a[href="/"]'),
    signUpLink: () => cy.get('[data-testid="custom-theme-provider"] header a[href="/auth/sign-up"]')
  } 

  get logoLink() {
    return cy.get('[data-testid="custom-theme-provider"] header a[href="/"]')
  }

  get loginButton() {
    return cy.get('[data-testid="custom-theme-provider"] header a[href="/auth/login"]')
  }

  get logoutButton() {
    return cy.contains('[data-testid="custom-theme-provider"] header button', 'Logout')
  } 

  get signUpLink() { 
    return cy.get('[data-testid="custom-theme-provider"] header a[href="/auth/sign-up"]')
  }

  visit() {
    cy.visit(this.pageUrl)
  }

  getMainHeadingText(text) {
    return cy.contains('[data-testid="custom-theme-provider"] main h1', text)
  }

  clickSignUpLink() {
    this.signUpLink.click()
  }

  clickSignUpLinkFromSelector() {
    this.selectors.signUpLink().click()
  }

  clickLogoutButton() {
    this.logoutButton.click()
    cy.wait(500)
  }

  // conditionalAction() {
  //   // cy.get('useg-guide-close-button').should('be.visible').click()
  //   cy.wait(3000-5000)
  //   cy.get('body').then($body => {
  //     if($body.find('useg-guide-close-button').length > 0) {
  //       cy.get('useg-guide-close-button').click()
  //     }
  //   })
  // }

  clickLogoutIfVisible() {
    cy.get('[data-testid="custom-theme-provider"] header').then($header => {
      if($header.find('[type="button"]').length > 0) {
        this.clickLogoutButton()
      } 
    })
    cy.wait(500)
  }

}