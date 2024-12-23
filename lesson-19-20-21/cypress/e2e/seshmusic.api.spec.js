import { LandingPage, RegisterPage } from '../support/pageObjects'


const landingPage = new LandingPage() 
const registerPage = new RegisterPage() 
let randomUserData;
describe('Registration spec', () => {

  context('Registration via extended Cypress command', () => {

    before(function() {
      randomUserData = RegisterPage.generateUserData();
      console.log(randomUserData)
      cy.intercept('POST', '/v1/accounts:signUp*').as('signUpRequest');
      cy.intercept('POST', '/v1/accounts:lookup*').as('lookupRequest');
      cy.intercept('POST', '/v1/token*', (req) => {
        req.on('response', (res) => {
          res.send({
            statusCode: 201
          })
        })
      }).as('tokenRequest');
      
      cy.register(randomUserData)
      cy.wait('@tokenRequest').then(tokenRequest=> {
        cy.log(tokenRequest);
        console.log(tokenRequest)
        cy.wrap(tokenRequest.response.body.id_token).as('idToken')
      })
    })

    beforeEach(function() {
      cy.setCookie('id_token', this.idToken);
    })

    afterEach(() => {
      landingPage.visit()
      landingPage.clickSignUpLink()
      registerPage.logOut()
      landingPage.visit()
      cy.wait(500)
      landingPage.clickLogoutIfVisible()
    })
    it('Verify intercept for api testing', () => {
      // cy.wait('@signUpRequest').then(signUpRequest=> {
      //   //requestCheck
      //   expect(signUpRequest.request.body.clientType).to.equal("CLIENT_TYPE_WEB")
      //   expect(signUpRequest.request.body.email).to.equal(randomUserData.email)
      //   expect(signUpRequest.request.body.password).to.equal(randomUserData.password)
      //   expect(signUpRequest.request.body.returnSecureToken).to.equal(true)

      //   //responseCheck
      //   expect(signUpRequest.response.body.email).to.equal(randomUserData.email.toLowerCase())
      //   expect(signUpRequest.response.body.password).to.be.undefined
      //   expect(signUpRequest.response.body.kind).to.equal('identitytoolkit#SignupNewUserResponse')
      //   expect(signUpRequest.response.body.expiresIn).to.equal('3600')
      //   expect(signUpRequest.response.body.idToken).to.be.a('string')
      //   expect(signUpRequest.response.body.refreshToken).to.be.a('string')
      // })
      // cy.wait('@lookupRequest').then(lookupRequest=> {
      //   cy.log(lookupRequest);
      //   console.log(lookupRequest)
      // })
    })

    it('Verify login by setting cookies', function() {
      cy.visit('/app/my-library')

      cy.request({
        method: 'POST',
        url: '/api/graphql',
        body: { "operationName":"CurrentUser","variables":{},"query":"query CurrentUser {\n  currentUser {\n    ...UserBase\n    __typename\n  }\n}\n\nfragment UserBase on User {\n  id\n  ...UserDetails\n  __typename\n}\n\nfragment UserDetails on User {\n  email\n  firstName\n  lastName\n  artistName\n  profileImageUrl\n  __typename\n}" },
        headers: {
          Cookie: `id_token=${this.idToken}; test=val;`
        },
        failOnStatusCode: false
      }).then((resp) => {
        console.log(resp);
      })

      cy.request({
        method: 'POST',
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
        qs: {
          key: 'AIzaSyBrIfDtr_mK9H04n_tS6lKF5mWdpcG3Hz0'
        },
        body: { clientType: "CLIENT_TYPE_WEB",
          email: randomUserData.email,
          password: randomUserData.password,
          returnSecureToken: true, },
        failOnStatusCode: false
      }).then((resp) => {
        console.log('LOGIN RESPO:>>>>>',resp);
      })
      cy.pause()
    })
  })
})

describe('Register with Intercepting without stubbing', () => {

  context('Intercepting requests', () => {

    beforeEach(function() {
      cy.intercept('POST', '/v1/accounts:signUp*').as('signUpRequest');
      randomUserData = RegisterPage.generateUserData();
      cy.register(randomUserData);
    })

    it('Intercepring registration calls', function() {
      cy.wait('@signUpRequest').then((xhr) => {
        //request
        expect(xhr.request.body.email).to.equal(randomUserData.email)
        expect(xhr.request.body.password).to.equal(randomUserData.password)

        //response
        expect(xhr.response.body.email).to.equal(randomUserData.email.toLowerCase())
        expect(xhr.response.body.expiresIn).to.equal("3600")
        expect(xhr.response.body.idToken).to.be.a('string')
        expect(xhr.response.body.kind).to.equal('identitytoolkit#SignupNewUserResponse')
      })
    })
  })

})

describe('Register with Intercepting with stubbing', () => {

  context('Intercepting requests', () => {

    beforeEach(function() {
      cy.intercept('POST', '/v1/accounts:signUp*',  (req) => {
        // req.reply({statusCode: 400, body: { idToken: 'invalid' }})
        req.on('response', (res) => {
          console.log('res.body.email',res.body.email)
          res.body.email = 'fakeEmail@email.com'
          res.send(res.body);
        })
      }).as('signUpRequest');
      randomUserData = RegisterPage.generateUserData();
      cy.register(randomUserData);
    })

    it('Intercepring registration calls', function() {
      cy.wait('@signUpRequest').then((xhr) => {
        console.log(xhr);
        //request
        expect(xhr.request.body.email).to.equal(randomUserData.email)
        expect(xhr.request.body.password).to.equal(randomUserData.password)

        //response
        expect(xhr.response.body.email).to.equal('fakeEmail@email.com')
        expect(xhr.response.body.expiresIn).to.equal("3600")
        expect(xhr.response.body.idToken).to.be.a('string')
        expect(xhr.response.body.kind).to.equal('identitytoolkit#SignupNewUserResponse')
      })
    })
  })

})

describe('Register with Intercepting and using response for repeated signIn', () => {

  context('Intercepting requests', () => {

    before(function() {
      cy.intercept('POST', '/v1/accounts:signUp*').as('signUpRequest');
      cy.intercept('POST', '/v1/token*').as('tokenRequest');
      randomUserData = RegisterPage.generateUserData();
      cy.register(randomUserData);
      cy.wait('@tokenRequest').then((xhr) => {
        cy.wrap(xhr.response.body.id_token).as('idToken')
      })
    })

    beforeEach(function() {
      cy.setCookie('id_token', this.idToken)
    })

    afterEach(() => {
      landingPage.visit()
      landingPage.clickSignUpLink()
      registerPage.logOut()
      landingPage.visit()
      cy.wait(500)
      landingPage.clickLogoutIfVisible()
    })

    // it.skip('Visit 1', function() {
    //   cy.visit('/app/my-library')
    // })

    // it.skip('Visit 2', function() {
    //   cy.visit('/app/my-library')
    //   cy.pause()
    // })

    it('Request based on existing token', function() {
      console.log('randomUserData',randomUserData)
      cy.api({
        method: 'POST',
        url: '/api/graphql', 
        body: { "operationName":"CurrentUser","variables":{},"query":"query CurrentUser {\n  currentUser {\n    ...UserBase\n    __typename\n  }\n}\n\nfragment UserBase on User {\n  id\n  ...UserDetails\n  __typename\n}\n\nfragment UserDetails on User {\n  email\n  firstName\n  lastName\n  artistName\n  profileImageUrl\n  __typename\n}" },
        headers: {
          Cookie: `id_token=${this.idToken}`
        },
        failOnStatusCode: false
      }).then((response) => {
        console.log('response.data', response)
        expect(response.body.data.currentUser.artistName).to.equal(randomUserData.artistName)
        expect(response.body.data.currentUser.email).to.equal(randomUserData.email.toLowerCase())

      })

      cy.request({
        method: 'POST',
        qs: {
          key: 'AIzaSyBrIfDtr_mK9H04n_tS6lKF5mWdpcG3Hz0'
        },
        url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword', 
        body: {
          email: randomUserData.email,
          password: randomUserData.password,
          returnSecureToken: true
        },
        failOnStatusCode: false
      }).then((response) => {
        console.log('response.data', response)
        cy.setCookie('id_token', response.body.idToken)

      })
      cy.visit('/app/my-library');
      cy.pause()
    })
  })

})