/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/');

});

it('Changing the DOM', () => {

  cy
    .get('[data-cy="star"]').first()
    .invoke('show')
    .click({
      force: true
    })

})