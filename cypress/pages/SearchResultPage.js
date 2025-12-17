class SearchResultPage {

  selectFirstFlight() {
    cy.contains('Select').first().click();
  }

  signInModal() {
    return cy.contains('Sign In');
  }

  closeSignInModal() {
    cy.contains('Back').click();
  }

  getAllFlightPrices() {
  const prices = [];

  cy.get('.self-end.font-bold.text-brand-1.md\\:text-xl')
    .each(($el) => {
      const priceText = $el.text().trim();
      prices.push(priceText);
    })
    .then(() => {
      cy.log('Captured Prices:', prices);
      expect(prices.length).to.be.greaterThan(0);
    });

  return prices;
}
printAllFlightPrices() {
  const prices = [];

  cy.get('.self-end.font-bold.text-brand-1.md\\:text-xl')
    .each(($el) => {
      const priceText = $el.text().trim();
      prices.push(priceText);
    })
    .then(() => {
      cy.log('Flight Prices:', prices.join(', '));
      console.log('Flight Prices:', prices);
    });
}


}

export default SearchResultPage;
