describe('template spec', () => {

  beforeEach(function() {
    console.log('TEST111111')
    cy.login('email', 'pwd')
    cy.visit('/todo')
    cy.get('[class="todo-list"] li').as('initialCount')
  })

  it('passes first', function () {
    cy.get('[class="todo-list"] li').as('initialCountTwo')
    const newTodoName = 'newTodo';
    expect(true).to.equal(true)
    cy.get('[data-test="new-todo"]').type(newTodoName).type('{enter}');
    cy.get('@initialCountTwo').then($initialCount => {
        cy.get('[class="todo-list"] li').eq($initialCount.length - 1).invoke('text').then($createdTodoText => {
        expect($createdTodoText).to.equal(newTodoName);
      })
    }) 


    cy.get('[class="todo-list"] li').eq(0).should('have.text', 'Pay electric bill')
    // cy.get('[class="todo-list"] li').eq(0).invoke('text').then($text => {
    //   expect($text).to.equal('Pay electric bill')
    // })
    // cy.get('[class="todo-list"] li').eq(1).then($secondTodo => {
    //   expect($secondTodo).to.have.text('Pay electric bill')
    // })
  })

    it('passes second', function () {
    cy.get('[class="todo-list"] li').as('initialCountTwo')
    const newTodoName = 'newTodo';

    cy.get('[class="todo-list"] li').eq(0).should('have.text', 'Pay electric bill')
    cy.get('[class="todo-list"] li').eq(0).invoke('text').then($text => {
      expect($text).to.equal('Pay electric bill')
    })
    cy.get('[class="todo-list"] li').eq(1).then($secondTodo => {
      expect($secondTodo).to.have.text('Pay electric bill')
    })
  })
})