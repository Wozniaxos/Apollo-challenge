describe('The Home Page To List', () => {
    it('successfully loads & links to countries list', () => {
      cy.visit('/') // change URL to match your dev URL
      cy.contains('a','Go to Countries').click()
      cy.url().should('include','/countries')
    })
  })