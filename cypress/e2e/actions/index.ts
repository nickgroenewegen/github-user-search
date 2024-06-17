export const searchFor = (searchTerm: string) => {
  cy.get('#search')
    .type(searchTerm)
  cy.get('[data-test-id="search-form"]')
    .submit()
}

export const assertSearch = (searchTerm: string) => {
  searchFor(searchTerm)
  cy.url()
    .should('include', `/search?q=${searchTerm}`)
  cy.get('[data-test-id="search-results"]')
    .contains(searchTerm)
}

export const assertSearchValidation = (searchTerm: string) => {
  // Validating the server validation due to https://github.com/cypress-io/cypress/issues/6678
  searchFor(searchTerm)
  cy.get('[data-test-id=search-form-validation-message]')
    .contains('Please provide valid input')
}
