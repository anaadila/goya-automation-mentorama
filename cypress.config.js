const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());

    },
    specPattern: '**/*.feature', 
    supportFile: false,
  },
  env: {
    'cypress-cucumber-preprocessor': {
      nonGlobalStepDefinitions: false 
    }
  }
});