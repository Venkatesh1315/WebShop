import { defineConfig } from "cypress";

export default defineConfig({

  e2e: {

   baseUrl : 'https://demowebshop.tricentis.com/',
   

    defaultCommandTimeout: 9000, 
    responseTimeout: 30000, 
    
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
      
      
      on('task', {
        ctrLogFiles() {
          // Your task logic here
          // For example, return some logs or process files
          return null; // or an appropriate result
        },
        ctrLogMessages() {
          // Your ctrLogMessages logic here
          return null; // or the desired output
        },
      });
      

    
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/Tests/*.ts'
  },
  env:
  {
    URL:'https://demowebshop.tricentis.com/',
    
  }
});

