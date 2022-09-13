const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rkvi1t',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
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
