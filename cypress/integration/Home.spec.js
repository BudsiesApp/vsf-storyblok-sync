/// <reference types="Cypress" />

context('CI', () => {
  it('can render blok', () => {
    cy.visit('ci')
    cy.contains('ci=working')
    cy.contains('I am testing this')
  })
})

context('CI', () => {
  it('can resolve links', () => {
    cy.visit('url-target')
    cy.contains('ci=url-target')
    cy.get('#internal').click()
    cy.contains('ci=working')
  })
})
