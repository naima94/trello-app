/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/43980845040')
})

it('Chaining commands', () => {

  cy
    .get('[data-cy="task"]')
    .eq(1)
    .should('have.text', 'task 1')

});