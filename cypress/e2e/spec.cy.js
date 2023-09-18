describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    const testenv = Cypress.env("testenv");
    const headText =
      testenv === "dev"
        ? "OtherBranch"
        : testenv === "stage"
        ? "StagingBranch"
        : "";
    cy.get("h1#head-text").contains(headText);
  });

  it("fail", () => {
    cy.visit("/");
    cy.get("h1#head-text").contains("FailHeadText");
  });
});
