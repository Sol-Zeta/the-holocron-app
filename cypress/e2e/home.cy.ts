describe('In root page "/"', () => {
  beforeEach(() => cy.visit('/?page=1'));
  it('A list of cards should be rendered in the root page', () => {
    cy.get('[data-testid="CardList"]').should('be.visible');
    cy.get('[data-testid="Pagination"]').scrollIntoView().should('be.visible');
  });

  it('A search input should be rendered in the root page', () => {
    cy.get('[data-testid="SearchInput"]').should('be.visible');
  });

  it('When the user enters a term on the search input the cards on the list should be filtered', () => {
    const searchTerm = 'lars';
    cy.get('[data-testid="SearchInput"]').type(searchTerm);

    cy.get('[data-testid="CardList"]').each(($card) => {
      cy.wrap($card).should('contain.text', searchTerm);
    });
  });

  it('A pagination component should be rendered in the root page', () => {
    cy.get('[data-testid="Pagination"]').scrollIntoView().should('be.visible');
  });
});
