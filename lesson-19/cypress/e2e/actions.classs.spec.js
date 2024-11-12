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

  it.only('Drag and Drop with NPM package', () => {
    cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    cy.wait(1000)
    cy.contains('div[class="dragableBox"][id*="box"]', 'Oslo').drag('div[id="box101"]', { force: true })
    cy.get('div[id="box101"]').trigger('mouseup', { which:1, force: true });
    cy.get('div[id="box101"]').find('div[class="dragableBox"][id*="box"]').should('have.text', 'Oslo')
  })


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