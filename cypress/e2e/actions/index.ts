export const searchFor = (searchTerm: string) => {
  cy.get('#search').type(searchTerm)
  cy.get('[data-test-id="search-form"]').submit()
}

export const assertSearch = (searchTerm: string) => {
  searchFor(searchTerm)
  cy.url().should('include', `/search?q=${searchTerm}`)
  cy.get('[data-test-id="search-results"]').contains(searchTerm)
}
