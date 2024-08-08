describe('In detail page "/{id}"', () => {
  beforeEach(() => cy.visit('/1'));
  it('The header with title and subtitle should be visible', () => {
    cy.checkAppHeader();
  });
  it('When the user clicks on the "back to list" link, app should redirect to root page', () => {
    const { baseUrl } = Cypress.config();
    cy.scrollTo('bottom');
    const backLink = cy.get('[data-testid="BackLink"]');
    backLink.scrollIntoView().should('be.visible');

    backLink.click();
    cy.url().should('eq', `${baseUrl}/`);
  });
});
