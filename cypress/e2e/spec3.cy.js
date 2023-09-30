const { sampleTest } = require("../support/utils");

describe("Template Spec 3", () => {
  it("Passing Test", () => {
    cy.wait(7000);
    sampleTest();
  });
});
