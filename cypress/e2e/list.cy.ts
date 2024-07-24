describe('Card List', () => {
    it('Card List should be rendered in the root page', () => {
      cy.visit('/');
      cy.contains('Luke Skywalker');
    });
  });