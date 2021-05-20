describe('Country Click test', () => {
    it('successfully clicks & loads first, third and last country', () => {
      cy.visit('/countries')
      for (let i=0;i <21;i++) {
        cy.contains('button','Dalej').click()
      }
      cy.contains('button','Dalej').should('be.disabled')
    })
  })