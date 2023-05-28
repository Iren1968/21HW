const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'ht8vzr',

  e2e: {
    baseUrl: 'https://santa-secret.ru/',
    testIsolation: false,
    specPattern: '**/*.cy.js',
    //pageLoadTimeout: 200000,
    watchForFileChanges: false,
    testIsolation: false,
    supportFile: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
    env: {
      environment: 'staging',
      mail: 'kapadolgova@gmail.com',
      password: 'Gibbon45',
    },
  },
});
