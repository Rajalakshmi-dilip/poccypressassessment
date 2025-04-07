const { defineConfig } = require('cypress');

module.exports = defineConfig({
  experimentalStudio: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'report',
    overwrite: false,
    html: true,
    json: true
  },
  retries: {
    runMode: 2,
    openMode: 0
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
