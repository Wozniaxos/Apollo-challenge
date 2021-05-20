describe('Country Click test', () => {
    it('successfully clicks & loads first, third and last country', () => {
      cy.visit('/countries')
      cy.get('h2').first().click()
      cy.get('h1')
      cy.go('back')
      cy.get('h2').eq(3).click()
      cy.get('h1')
      cy.go('back')
      cy.get('h2').last().click()
      cy.get('h1')
    })
  })