const { sampleTest } = require("../support/utils");

describe("Template Spec 1", () => {
  it("Passing Test", () => {
    cy.wait(5000);
    sampleTest();
  });
});
