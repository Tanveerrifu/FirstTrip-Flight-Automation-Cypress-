import FlightSearchPage from "../../pages/FlightSearchPage";
import SearchResultPage from "../../pages/SearchResultPage";

describe("FirstTrip Flight Search Automation", () => {
  const flightSearchPage = new FlightSearchPage();
  const searchResultPage = new SearchResultPage();

  before(() => {
    cy.visit("/flight");
  });

  it("Should select One Way trip", () => {
    flightSearchPage.oneWayRadio().click({ force: true });
  });

  it("Should select departure date as tomorrow", () => {
    flightSearchPage.departureDateInput().click();
    cy.wait(3000);
    flightSearchPage.selectTomorrowDate();
  });

  it("Should search for available flights", () => {
    cy.wait(5000);
    flightSearchPage.searchButton().click();
    cy.url().should("include", "flight");
    cy.wait(3000);
  });

  it("Should select the first flight from search results", () => {
    searchResultPage.selectFirstFlight();
  });

  it("Should display Sign In modal after selecting flight", () => {
    searchResultPage.signInModal().should("be.visible");
  });

  it.skip("Should close the Sign In modal", () => {
    searchResultPage.closeSignInModal();
    searchResultPage.signInModal().should("not.exist");
  });

  it("Capture all flight prices into an array", () => {
    searchResultPage.getAllFlightPrices();
    searchResultPage.printAllFlightPrices();
  });
});
