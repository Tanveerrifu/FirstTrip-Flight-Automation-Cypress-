describe('API Health Check', () => {
  it('Verify site is reachable', () => {
    cy.request('https://firsttrip.com')
      .its('status')
      .should('eq', 200);
  });
});
