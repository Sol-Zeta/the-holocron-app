describe('App Test', () => {
  it('Should render the app title', () => {
    cy.visit('/');
    cy.contains('The Holocron');
  });
});
