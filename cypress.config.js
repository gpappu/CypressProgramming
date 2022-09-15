const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'rkvi1t',
  e2e:
  {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/examples/BDD/*.feature',
    watchForFileChanges: false,
    defaultCommandTimeout: 6000,
    env:
    {
      url: 'https://rahulshettyacademy.com/angularpractice'
    },
    reporter: "mochawesome",
    retries:
    {
      // Configure retry attempts for `cypress run`
      // Default is 0
      "runMode": 2 // This will make cypress retry the test 2 times. 

    }

  }
});
