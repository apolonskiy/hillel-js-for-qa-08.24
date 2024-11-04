class LoginPage {
  getEmailInput() {
    return cy.get('#email');
  }

  getPasswordInput() {
    return cy.get('#password');
  }

  getLoginButton() {
    return cy.get('button[type="submit"]');
  }

  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    this.getEmailInput().type(email);
  }

  fillPassword(password) {
    this.getPasswordInput().type(password);
  }

  clickLoginButton() {
    this.getLoginButton().click();
  }
  
  // Інші методи взаємодії з елементами на сторінці логіну...
}

export default new LoginPage()