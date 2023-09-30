export const sampleTest = () => {
  cy.visit("/");
  const testenv = Cypress.env("testenv");
  cy.wait(5000);
  const headText =
    testenv === "dev"
      ? "OtherBranch"
      : testenv === "stage"
      ? "StagingBranch"
      : "";
  cy.get("h1#head-text").contains(headText);
};
