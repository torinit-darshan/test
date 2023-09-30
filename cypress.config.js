const { defineConfig } = require("cypress");
const cypressSplit = require("cypress-split");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportTitle: "App Tests Report",
    reportPageTitle: "Sample Tests Report",
    reportDir: "cypress/results",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: false,
    saveAllAttempts: true,
    overwrite: true,
    removeJsonsFolderAfterMerge: false,
  },
  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      cypressSplit(on, config);
      // IMPORTANT: return the config object
      return config;
    },
  },
  env: {
    testenv: process.env.CYPRESS_TEST_ENV,
  },
  video: true,
});
