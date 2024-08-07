describe('App', () => {
  it('Should render the title and subtitle in root detail pages', () => {
    cy.visit('/');
    cy.checkAppHeader();
    cy.visit('/42');
    cy.checkAppHeader();
  });
});
