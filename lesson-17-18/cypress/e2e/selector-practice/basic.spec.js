import MainPage from '../pageObjectModels/mainPage.js'
import LoginPage from '../pageObjectModels/Lo.js'


const mainPage = new MainPage();


describe('Wikipedia Landing Page testing', () => {

  beforeEach(function() {

    cy.visit('https://www.wikipedia.org/')
    cy.get('[id="searchInput"]').as('searchInput');
    cy.get('@searchInput').invoke('val').then($value => {
      cy.wrap($value).as('initialInputValue')
    })
  })

  it('Showcase', function () {
    cy.get('a[id="js-link-box-en"]')
    cy.get('a').contains('English')
    cy.get('[id="js-link-box-uk"], [id="js-link-box-en"]')

    cy.xpath('//div[@id="search-input"]/input[@id="searchInput"]').type('SomeQuery')
    cy.get('@searchInput').invoke('val').should('not.equal', this.initialInputValue)
    // cy.get('//a[@id="js-link-box-en"]').click()
    cy.get('[data-jsl10n="top-ten-nav-label"]').find('a').eq(3);
    cy.get('[data-jsl10n="top-ten-nav-label"]').children('[class="central-featured-lang lang4"]')
    cy.get('[class="central-featured-lang lang4"]').closest('nav');

    // cy.get('some-selector').invoke('text').then($text => {
    //   const neededText = $text.replace(/\n/gi, '');
    //   expect(neededText).to.equal('expectedText');
    // })

    cy.xpath('//div[@id="search-input"]/input[@id="searchInput"]').invoke('val').should('equal', 'SomeQuery')
    cy.focused().then($elem => {
      cy.wrap($elem).invoke('val').should('equal', 'SomeQuery')
    })
    cy.xpath('//div[@id="search-input"]/input[@id="searchInput"]').invoke('hide').invoke('show')

    cy.window().its('localStorage').then($ls => {
      cy.log(Object.keys($ls))
      cy.log(Object.values($ls))
      console.log($ls)
    })

    // cy.get('input[id="searchInput"]').parent('div').find('button').click()
    // cy.get('input[id="searchInput"]').parents('fieldset').find('button').click()

    cy.get("[class*='lang5']").prev().should('contain.text', 'Espa')
    cy.get("[class*='lang5']").siblings().eq(3).should('exist')

    //.should('be.checked')
    cy.get('div').filter('[class="other-project"]').eq(1)
    cy.get('div').find('[data-jsl10n="wiktionary.name"]').should('exist');

    // cy.get('div').filter('[class="other-project"]').click({multiple: true})
    cy.get('@searchInput').clear()
    cy.get('@searchInput').invoke('val').should('equal', this.initialInputValue)

    cy.get('div').filter('[class="other-project"]').each(($selector, index, $list) => {
      cy.wrap($selector).should('exist')
    })
  }) 
})

let loginPage;

describe.only('Todoes enhanced testing', () => {
  before(() => {
    loginPage = new LoginPage
  })
  beforeEach(() => {
    loginPage.navigateToMainPageWithLogin()
  })

  it.only('homework navitagion', () => {
    mainPage.homeButton().should('exist')
  })
})