import { assertSearch, assertSearchValidation } from './actions'

describe('Github user search', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should contain introductionary content', () => {
    cy.get('h1')
      .should('have.length', 1)
      .and('contain', 'GitHub user search')

    cy.get('p')
      .contains('Query the GitHub search API to find users or organizations you\'re looking for.')
  })

  it('Should be able to search for specific users', () => {
    assertSearch('nickgroenewegen')
  })

  it.only('Should show validation errors when', () => {
    assertSearchValidation('a')
  })
})
