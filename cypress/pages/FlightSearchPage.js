class FlightSearchPage {

  oneWayRadio() {
    return cy.get('[data-testid="One Way-input"] > .false');
  }

  departureDateInput() {
    return cy.get('[data-testid="departure-date-input-form-1"] > .flex > .absolute');
  }

  searchButton() {
    return cy.contains('Search');
  }

  selectTomorrowDate() {
  const today = new Date();
  const tomorrowDay = today.getDate() + 1;
  cy.get('[data-testid="departure-date-input-form-1"]').click({ multiple: true });
  cy.get('button, div')
    .not('[aria-disabled="true"]')
    .not('.disabled')
    .contains(new RegExp(`^${tomorrowDay}$`))
    .click();
}

}

export default FlightSearchPage;
