const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportTitle: 'App Tests Report',
    reportPageTitle: 'Sample Tests Report',
    videoOnFailOnly: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env: {
    testenv: process.env.CYPRESS_TEST_ENV,
  },
  video: true,
});
