describe('Error Page', () => {
  beforeEach(() => {
    cy.visit('/_error', {failOnStatusCode: false});
  });

  it('should display the correct error message', () => {
    cy.contains(
      'The knowledge you seek is hidden in another galaxy. Please try again or use the Force to guide you back.'
    ).should('be.visible');
  });

it('should redirect to the home page when "Back to the Holocron" button is clicked', () => {
    const { baseUrl } = Cypress.config();
    cy.get('button').contains('Back to the Holocron').should('be.visible');
    cy.get('button').click();
    cy.url().should('eq', `${baseUrl}/`);
  });

  it('should have the correct typography and styles', () => {
    cy.contains("vaj rampu'DI' vay'");
    cy.contains('/ something went wrong /');
  });
});
