describe("Country list initialization of url query", () => {
  it("successfully initializes ?page query", () => {
    cy.visit("/countries");
    cy.get("[data-testid=nextButton]").click();
    cy.url().should("include", "?page");
    cy.get("[data-testid=countryName]");
  });
});

describe("Country list - back button disabled", () => {
  it("blocks the back button on first page", () => {
    cy.visit("/countries");
    cy.get("[data-testid=backButton]").should("be.disabled");

    cy.get("[data-testid=nextButton]").click();
    cy.get("[data-testid=nextButton]").click();

    cy.get("[data-testid=backButton]").click();
    cy.get("[data-testid=backButton]").click();

    cy.get("[data-testid=backButton]").should("be.disabled");
  });
});

describe("Country list - last page button disabled", () => {
  it("disables the next button on last page", () => {
    cy.visit("/countries");
    for (let i = 0; i < 21; i++) {
      cy.get("[data-testid=nextButton]").click();
    }
    cy.get("[data-testid=nextButton]").should("be.disabled");
  });
});

describe("Country list - Click test", () => {
  it("successfully clicks & loads first, third and last country", () => {
    cy.visit("/countries");
    cy.get("[data-testid=countryName]").first().click();
    cy.get("[data-testid=countryName]");
    cy.go("back");
    cy.get("[data-testid=countryName]").eq(3).click();
    cy.get("[data-testid=countryName]");
    cy.go("back");
    cy.get("[data-testid=countryName]").last().click();
    cy.get("[data-testid=countryName]");
  });
});
