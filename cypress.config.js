const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ht8vzr",

  e2e: {
    baseUrl: "https://staging.lpitko.ru",
    testIsolation: false,
    specPattern: "**/*.cy.js",
    //pageLoadTimeout: 200000,
    watchForFileChanges: false,
    testIsolation: false,
    supportFile: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //return config;
    },
    env: {
      environment: "staging",
      mail: "kapadolgova@gmail.com",
      password: "Gibbon45",
    },
  },
});
