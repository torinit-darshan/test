const { sampleTest } = require("../support/utils");

describe("Template Spec 2", () => {
  it("Passing Test", () => {
    cy.wait(10000);
    sampleTest();
  });
});
