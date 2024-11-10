import MainPage from '../pageObjectModels/mainPage.js'
import LoginPage from '../pageObjectModels/loginPage.js'


const mainPage = new MainPage();
const loginPage = new LoginPage();

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


describe.only('Todoes enhanced testing', () => {
  beforeEach(() => {
    cy.visit('/todo')
  })

  it('Delete all TODOs', () => {
    cy.get('ul[class="todo-list"] li[data-id]').should('have.length', 2)
    cy.get('ul[class="todo-list"] li[data-id]').its('length').then($length => {
      for(let i = 0; i < $length; i++){
        cy.get('ul[class="todo-list"] li[data-id]').eq(0).trigger('mouseover');
        cy.get('ul[class="todo-list"] li[data-id] button').eq(0).click({force: true});
      }
    })
    cy.get('ul[class="todo-list"] li[data-id]').should('have.length', 0)
  })

  it('Create new TODO', () => {
    cy.get('ul[class="todo-list"] li[data-id]').should('have.length', 2)
    cy.get('input[data-test="new-todo"]').type('newTodo').type('{enter}')
    cy.get('ul[class="todo-list"] li[data-id]').should('have.length', 3)
  })
  
    it('Can complete created TODO and clear it', () => {
    cy.get('ul[class="todo-list"] li[data-id]').should('have.length', 2)
    cy.get('input[data-test="new-todo"]').type('newTodo').type('{enter}')
    cy.get('ul[class="todo-list"] li[data-id]').eq(2).should('not.have.class', 'completed')
    cy.get('ul[class="todo-list"] li[data-id] input').eq(2).click()
    cy.get('ul[class="todo-list"] li[data-id]').eq(2).should('have.class', 'completed')
    cy.get('button').contains('Clear completed').click()
    cy.get('ul[class="todo-list"] li[data-id]').should('have.length', 2)
  })

  it.only('homework navitagion', () => {
    loginPage.navigateToMainPageWithLogin()
    cy.log('test')
    mainPage.homeButton().should('exist')
  })
})