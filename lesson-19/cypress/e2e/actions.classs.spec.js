describe('Class showase', () => {

  it('Select option in dropdown',  () => { 
    cy.visit('https://practice.expandtesting.com/dropdown')
    cy.get('[id="country"]').select('BS')
  })

  it('Checkbox test',  () => { 
    cy.visit('https://practice.expandtesting.com/checkboxes')
    cy.get('div[id="checkboxes"]').find('input').should('not.be.checked')
    cy.get('div[id="checkboxes"]').find('input').click()
    cy.get('input[id="checkbox1"]').should('be.checked')
  })

  //   it('Drag n Drop test',  () => { 
  //     cy.visit('https://practice.expandtesting.com/drag-and-drop')

  //     cy.get('div[id="column-a"]')
  //       .trigger('mousedown', { which: 1 })
  //       .trigger('mousemove', { pageX: 500 })
  //       .trigger('mouseup')
  //   })

  it('Scroll into view',  () => { 
    cy.visit('https://practice.expandtesting.com')

    cy.get('a[class="my-link"]').click()
  })

  it('Assert via should and expect',  () => { 
    cy.visit('https://practice.expandtesting.com')

    cy.get('a[class="my-link"]').should($link => {
      expect($link.text()).to.equal('Expand Testing')
    })
    cy.get('a[class="my-link"]').should('have.text','Expand Testing')
  })
})