describe("template spec", () => {
  it("Passing Test", () => {
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
});
