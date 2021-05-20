describe('Country List Pagination', () => {
    it('successfully loads & links to countries list', () => {
      cy.visit('/countries')
      cy.contains('button','Dalej').click()
      cy.url().should('include','?page')
      cy.get('h2')
      cy.get('h5') // test error
    })
  })