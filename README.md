# Cypress Automation Notes

## INSTALLING CYPRESS
Cypress is written in JavaScript and therefore is installed using Node.js.

To install Cypress, do the following steps 
- Install Node.js
- Add the path to environment variables. In Mac the path is already present in the bash_profile
- Install VSCode
- Create a new folder for Cypress automation scripts from the terminal in VSCode (mkdir directory name) 
- Navigate to that directory (cd directory name)
- Create `package.json` file (similar to pom.xml in maven)
- Install Cypress using the command npm install cypress –save-dev (--save-dev creates a new entry in package.json)
- After installing Cypress, create a new folder called integration under Cypress > cypress folder in VSCode
- Create another folder called examples under the integration folder
- Create a new file called Test1.js in the examples folder. A test file is called a spec file in Cypress
- Set the path in cypress.config.js so that Cypress Test Runner will know what specs to execute. (*.js will take any spec in the folder called examples and execute. This is similar to Java class in Selenium). Cypress Test Runner constantly listens to the specPattern field

## WORKING WITH CYPRESS
To open Cypress Test Runner, type the command in vscode terminal : 
```sh
 node_modules/.bin/cypress open 
```

Running tests using Cypress Test Runner will always be in HEADED (browser will open) mode.
Cypress supports CHROME, FIREFOX, EDGE, AND ELECTRON. Cypress does not support INTERNET EXPLORER.
Well known testing frameworks for Javascript are JASMINE and MOCHA. Cypress recommends Mocha as the framework. It comes bundled with Cypress and need not be installed separately.
Like in Selenium, you do not have to crete a Webdriver object. Cypress comes with a built in object which is cy
Cypress automation commands can be run from the command line and the default execution method is HEADLESS (The execution occurs without the brouwser being opened) and uses the ELECTRON brouser which comes bundled when Cypress is installed. 
Command to run all test cases is: ./node_modules/.bin/cypress run. This will make Cypress run automation in HEADLESS mode. 
To run a single test case (soec file), the command is: ./node_modules/.bin/cypress run --spec "cypress/integration/examples/Test1.js"
To run the test in HEADED mode, the command is: ./node_modules/.bin/cypress run --headed. 
To run the test in a specific browser, the command is: ./node_modules/.bin/cypress run --browser chrome 

CYPESS PROJECT STRUCTURE:
The fixtures folder stores all the test data used for automating. 
The Integration folder stores all the test cases used for automation.
Any customizations required on invoking a browser are in the Plugins section. They are listeners.
The Support folder has all the reusable commands or methods that can used across multiple spec files.
The naming convention of the folders is recommended by cypress so everything is easily accessible to the tests that are written. 
Project level settings can be set in the cypress.config.js file (previously known as cypress.json)

AUTOMATING WITH CYPRESS
Selenium supports many HTML locators like ID, name, classname, tagname, xpath, cssSelector, etc. but Cypress supports ONLY CSS SELECTOR
Building CSS based on 
    ID - #IDname
    classname - .classname   
    [If classname has a space within the name, replace it with a .] 
    [If there are multiple classnames for an element, then the css can be written as tagname.classname]
    syntax for css with any attribute - tagname[attribute = value]  tagname is optional
    To traverse from parent to child using css - parent-tagname child-tagname. Separate the tagnames with space. In xpath we use forward slash

cy.visit - gets the URL
cy.get - gets the locator of the HTML element.
.find() -- gets the locator within the parent when we use parent child chaining.
.each() -- used to iterate on each element in the list
.text() -- gets the text of the locator
.click() -- allows user to click on the element.

Asynchronous behavior of any tool developed on node.js: Each statement in the program does not wait for the previous statement to execute. 
Within a mattter of milliseconds, all the statemtns in the program will hit the server. Any statement that is available to execute will be executed. There is not guarantee of the execution of sequential execution.

Although Cypress is on node.js and asynchronous, it has an engine that handles the program synchronously which means stataemtns will run in order.
In asynchronous programming, every statement returns a promise. Promise is a state of the step that is being executed. Promise has 3 states: resolved, pending, and rejected. Until the promise of the previous step is resolved, we should not execute the next step.
The method that ensures the previous step is resolved is then(). User would need to include the then method for each statemtnt to make it synchronous.
But Cypress developers have wrapped the then() method and made it synchronous.

There are instances where the user would have to take care of the asynchronous nature of Cypress if the Cypress architechture is tweaked.
Text() is not a Cypress method. It is a JQuery method.

Because Cypress is asynchronous, and has been built to resolve promises to make it synchronous, we cannot assign variables to locators directly ex: const l = cy.get('.products'). Instead this can be achieved by aliasing. 

In other automation tools, print statement will print the result in the console/terminal of the editor. But because cypress works directly on the browser (without any json, or external APIs), it prints to the browser console.

Cypress provides a method called **check**  specific for checkboxes and radio buttons. This is more reliable than click().

Assertions can be concatenated by using **.and** . Assertion for a property is **have** and for behavior is **be**


Multiple checkboxes can be checked by including the values of the elements in the check method

Static dropdowns have fixed values while dynamic dropdowns display suggestions based the user's input.
## STATIC DROPDOWNS
- Static dropdowns always have **select** as the tagname
- For static dropdowns, cypress has a method called select which can take either the name of the element or the value of the element.



https://rahulshettyacademy.com/seleniumPractise/#/