declare global {
  namespace Cypress {
    interface Chainable {
      checkActivePage(pageNumber: number): Chainable<Element>;
      checkAppHeader(): Chainable<Element>;
    }
  }
}
Cypress.Commands.add('checkActivePage', (pageNumber: number) => {
  cy.get('button.Mui-selected').should('have.text', pageNumber.toString());
});
Cypress.Commands.add('checkAppHeader', () => {
  const APP_TITLE = 'The Holocron';
  const APP_SUBTITLE = "Unlock the Galaxy's Secrets";
  cy.contains(APP_TITLE);
  cy.contains(APP_SUBTITLE);
});

export {};
