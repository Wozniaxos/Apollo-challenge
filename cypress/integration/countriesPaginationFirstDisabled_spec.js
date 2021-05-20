describe('Country Click test', () => {
    it('successfully clicks & loads first, third and last country', () => {
      cy.visit('/countries')
      cy.contains('button','Wróć').should('be.disabled')
      for (let i=0;i <2;i++) {
        cy.contains('button','Dalej').click()
      }
      for (let i=0;i <2;i++) {
        cy.contains('button','Wróć').click()
      }
      cy.contains('button','Wróć').should('be.disabled')
    })
  })