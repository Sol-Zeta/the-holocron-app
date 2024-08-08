describe('In detail page "/{id}"', () => {
  beforeEach(() => cy.visit('/1'));
  it('The header with title and subtitle should be visible', () => {
    cy.checkAppHeader();
  });
  it('When the user clicks on the "back to list" link, app should redirect to root page', () => {
    cy.scrollTo('bottom');
    cy.get('[data-testid="BackLink"]').scrollIntoView().should('be.visible');
    
    cy.get('[data-testid="BackLink"]').scrollIntoView().click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
  });
});
