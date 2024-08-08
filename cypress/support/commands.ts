declare global {
  namespace Cypress {
    interface Chainable {
      checkActivePage(pageNumber: number): Chainable<Element>;
      checkAppHeader(): Chainable<Element>;
    }
  }
}
Cypress.Commands.add('checkActivePage', (pageNumber: number) => {
  cy.visit(`/?page=${pageNumber}`);
  cy.scrollTo('bottom');
  cy.get('button.Mui-selected').should('have.text', pageNumber.toString());
});
Cypress.Commands.add('checkAppHeader', () => {
  const APP_TITLE = 'The Holocron';
  const APP_SUBTITLE = "Unlock the Galaxy's Secrets";
  cy.get('[data-testid="Layout"]').should('be.visible');
  cy.get('[data-testid="Header"]').should('be.visible');
  cy.contains(APP_TITLE);
  cy.contains(APP_SUBTITLE);
});

export {};
