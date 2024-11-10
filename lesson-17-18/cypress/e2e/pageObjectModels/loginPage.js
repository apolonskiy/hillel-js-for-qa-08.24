class LoginDetails {
    defaultCredentials = {
        username: "guest",
        password: "welcome2qauto",
    }

    navigateToMainPageWithLogin(credentials = this.defaultCredentials) {
        cy.visit('https://qauto.forstudy.space/', { auth: credentials})
    }

}

export default LoginDetails;