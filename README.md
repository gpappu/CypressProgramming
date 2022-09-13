# Cypress Automation Notes

## INSTALLING CYPRESS
Cypress is written in JavaScript and therefore is installed using Node.js.

To install Cypress, do the following steps 
1. Install Node.js

2. Add the path to environment variables. In Mac the path is already present in the bash_profile

3. Install VSCode

4. Create a new folder for Cypress automation scripts from the terminal in VSCode (mkdir <directoryname>) 

5. Navigate to that directory (cd <directoryname>)

6. Create `package.json` file (similar to pom.xml in maven)

7. Install Cypress using the command ` npm install cypress –save-dev`  **(--save-dev creates a new entry in package.json)**

8. After installing Cypress, create a new folder called integration under **Cypress > cypress** folder in VSCode

9. Create another folder called examples under the ))**integration** folder

10. Create a new file called Test1.js in the examples folder. A test file is called a spec file in Cypress

11. *Set the following path in **cypress.config.js** in the **e2e** block  so that Cypress Test Runner will know what specs to execute.
```sh
specPattern: 'cypress/integration/examples/*.js'
```

 (*.js will take any spec in the folder called examples and execute. This is similar to Java class in Selenium).**

12. Cypress Test Runner constantly listens to the specPattern field

## WORKING WITH CYPRESS
1. To open Cypress Test Runner, type the command in vscode terminal : 
```sh
 ./node_modules/.bin/cypress open 
```

2. Running tests using Cypress Test Runner will always be in HEADED (browser will open) mode.
3. Cypress supports CHROME, FIREFOX, EDGE, AND ELECTRON. 4. Cypress does not support INTERNET EXPLORER.
5. Well known testing frameworks for Javascript are **JASMINE** and **MOCHA**. Cypress recommends **Mocha** as the framework. It comes bundled with Cypress and need not be installed separately.
6. Like in Selenium, you do not have to create a Webdriver object. Cypress comes with a built in object which is **cy**
7. Cypress automation commands can be run from the command line and the default execution method is **HEADLESS** (The execution occurs without the brouwser being opened) and uses the **ELECTRON** brouser which comes bundled when Cypress is installed. 
8. **Command to run all test cases is:**
``` sh
 ./node_modules/.bin/cypress run
  ```
**This will make Cypress run automation in HEADLESS mode.**

9. **To run a single test case (spec file), the command is:**
``` sh
 ./node_modules/.bin/cypress run --spec "cypress/integration/examples/Test1.js"
 ```
10. **To run the test in HEADED mode, the command is:**
``` sh
 ./node_modules/.bin/cypress run --headed. 
 ```

11.**To run the test in a specific browser, the command is:
``` sh
./node_modules/.bin/cypress run --browser <browsername>
```

## CYPESS PROJECT STRUCTURE:
1. The fixtures folder stores all the test data used for automating. 

2. The Integration folder stores all the test cases used for automation. 

3. Any customizations required on invoking a browser are in the Plugins section. They are listeners.
4. The Support folder has all the reusable commands or methods that can used across multiple spec files.
5. The naming convention of the folders is recommended by cypress so everything is easily accessible to test files (.js files). 
6. Project level settings can be set in the cypress.config.js file (previously known as cypress.json)

## TURNING OFF UNCAUGHT EXCEPTIONS
1. TO TURN OFF UNCAUGHT EXCEPTIONS USE THE FOLLWING COMAMND: `cy.on('uncaught:exception', (err, runnable) => { return false; });` RIGHT AABOVE THE FIRST STATEMENT OF YOUR PROGRAM

## AUTOMATING WITH CYPRESS
1. Selenium supports many HTML locators like ID, name, classname, tagname, xpath, cssSelector, etc. but Cypress supports **ONLY CSS SELECTOR**
2. Building CSS based on

    - ID `#IDname`
    - classname `.classname`
    - If classname has a space within the name, replace it with a `.`
    - If there are multiple classnames for an element, then the css can be written as **tagname.classname**
    - Syntax for css with any attribute `tagname[attribute = value]`  . **Tagname is optional**
    - To traverse from parent to child using css ` parent-tagname child-tagname` . *Separate the tagnames with space. In xpath we use forward slash* 

3. `cy.visit` - gets the URL
4. `cy.get` - gets the locator of the HTML element.
5. `.find()` -- gets the locator within the parent when we use **parent child chaining**.
6. `.each()` -- used to iterate on each element in the list
7. `.text()` -- gets the text of the locator
8 `.click()` -- allows user to click on the element.

## Asynchronous behavior of any tool developed on node.js: 
1. Each statement in the program does not wait for the previous statement to execute. 

2. Within a mattter of milliseconds, all the statemtns in the program will hit the server. 

3. Any statement that is available to execute will be executed. 

4. There is no guarantee of sequential execution. 

5. Although Cypress is on node.js and asynchronous, it has an engine that handles the program synchronously which means stataemtns will run in sequential order.

6. In asynchronous programming, every statement returns a promise. 
    - Promise is a state of the step that is being executed. - Promise has 3 states: resolved, pending, and rejected. - Until the promise of the previous step is resolved, we should not execute the next step.
    - The method that ensures the previous step is resolved is then(). 
    - User would need to include the then() method for each statemtnt to make it synchronous.

7. **All cypress comamnds have the then() method wrapped which makes it synchronous.**

8. In case non-cypress methods are used, the user would have to take care of the promise to execute statements in order.

9. **Text()** is not a Cypress method. It is a JQuery method.

10. Because Cypress is asynchronous, and has been built to resolve promises to make it synchronous, we cannot assign variables to locators directly ex: const l = cy.get('.products'). **Instead this can be achieved by aliasing.**

11. ***In other automation tools, print statement will print the result in the console/terminal of the editor. But because cypress works directly on the browser (without any json, or external APIs), it prints to the browser console.***

12. Cypress provides a method called **check**  specific for **checkboxes and radio buttons.** This is more reliable than click().

13. Assertions can be concatenated by using **.and** . Assertion for a property is **have** and for behavior is **be**

14. Multiple checkboxes can be checked by including the values of the elements in the check method

15. Static dropdowns have fixed values while dynamic dropdowns display suggestions based the user's input.
    - Static dropdowns always have **select** as the tagname
    - For static dropdowns, cypress has a method called **`select()`** which can take either the name of the element or the value of the element.

## Alerts, popup windows, web tables, mouse hover
1. Cypress **always** works on parent windows and **does not like child windows and popup windows.**
2. Cypress is built to auto accept popup windows and does not need any code to handle alerts.
3. **Cypress has the ability to control and manipulate the browser DOM unlike other automation tools.**
4. To fire any alert in cypress, window:alert can be used to access the content of the alert.
5. **When dealing with web tables, we can navigate to the next column by using the expression `parent_tagname child_tagname:nth-child(column number)`. EX: `tr td:nth-child(2)` will take the user to the 2nd column in a table that has 3 columns.**
6. **To navigate to the sibling, we can use the method called next() which is used only on cy.get and is a JQuery method and not a cypress method. Therefore the promise has to be resolved by the user as cypress will not be handle it.**
7. Cypress does not support actions like mouse hover. The workaround is using the JQuery method called **show()**

## Child Windows
1. Cypress does not support opening child windows and new windows. They suggest clicking on the url directly instead of writing code to open a child window or a new window.
2. To get the url of the child window or a new window, we can use the jquery method called **prop()** but because prop is a jquery method, the promise has to be resolved first by using the then() nethod.
3. For an URL to open in a child window, the developer would include a <target> attribute in the HTML code. Target attribute specifies where to open the linked document.
4. For cypress to handle automating child windows, the user would have to mimic opening the child window URL in the current working window, and not a new window.
5. To achieve this, the HTML DOM would have to be manipulated to delete the <target> attribute.
6. **As cypress supports all JQuery functions, the removeAttr() can be used to remove the <target> atttibute by using the cypress method called invoke(functionName)**
7. **Once the target attribute is removed, the webpage will open in the current browser window.** This is one alternative.
8. The other alternative is to get the value of the `href` attribute and make cypress directly click on the href link which is done using the **prop()** JQuery method that helps to get the property value. BUT this also will not be possible as Cypress does not allow visiting a unique domain when the main domain has already been set up using the visit method. You cannot use visit method for multiple domains.

## iFrames
1. Cypress originally could not support frames but now can support them.
2. An inline frame (iframe is a HTML element that loads another HTML page within the document. It essentially puts another webpage within the parent page. They are commonly used for advertisements, embedded videos, web analytics and interactive content.
3. For Cypress to handle an iframe, we need to install a plug-in using **npm** and the command is `npm install -D cypress-iframe`. **This command has to be used at the project level where the node_modules is present.**
4.After we install the plug-in, we have to import it into our spec file and the command is `import "cypress-ifram"`
5.To add intellisense for ifrane, add this additional line of code `///<reference-types ="cypress-iframe"/>`
6. `cy.frameloaded` will give cypress the knowledge of the frame within which it would have to find the elements.
7. `cy.iframe()` will allow cypress to switch from the main window to the frame and look for elements within that frame.

## Test Frameworks in Cypress using Mocha Framework (These are similar to Annotations in TestNG framework used for Selenium)
1. During the development of any automation framework, one of the key concepts is handling the pre and post conditions for a test case or test suite. There can be multiple situations where a specific action needs to be performed before/after either each test case or before/after all the test cases in the test suite. Following the same path, Cypress also provides the constructs which are also known as Cypress Hooks which help in performing a particular set of actions just before/after each test case or before/after all the test cases in the test suite. 

    What are the constructs of a Cypress Test Script?
    What are Cypress Hooks and How to use Hooks in Cypress?
        **Before() Hook - executes before all it() blocks**
        **After() Hook - executes after all it() blocks**
        **BeforeEach() Hook - executes before each it() block**
        **AfterEach() Hook - executes after each it() block**
        How to define hooks in a Cypress TestScript?
        How to include/exclude a Testcase from the TestSuite?

    ## Retrieving data externally from the fixtures folder 
    1. Cypress gives us the option of retrieving data from external sources instead of putting the data in spec files (Ex: typing name in the name field)
    2. All the setup for the test should be written out in the **before()** hook
    3. cypress has an option to call the .json file in the fixture folder by using the command `cy.fixture('filename')`. But this statement would have to be resolved first and for that to happen, we need to use the `then(function(testdata){})` and create a variable which has access to all the data in the .json file. 
    4. The scope of the `testdata` variable is limited to the **before()** block. To be able to use that variable in the entire class (spec file), another variable would have to be declared with the keyword `this.` and assign the `testdata`variable to this new variable.
        **code would look like** `this.data = testdata`
    5. `this` keyword is used to make the object global so the variable can be used in the entire spec file.

    ## Custom Cypress Commands 
    1. If there is a piece of code that is used repeatedly within one test case or across multiple test cases, we can write the code withtin the support>commands.js file and call it within the spec file using the name of the command.  
    2. Following is the example of adding custom cypress commands:
    ```js 
    // selectproduct is the name of the function and prodname is the parameter that the function takes
   Cypress.Commands.add('selectproduct', (prodname) => 
   {
        cy.get('.card-title').each((el, index, $list) =>
        {
            if (el.text().includes("Blackberry")) 
            {
            cy.get('.btn.btn-info').eq(index).click()
            }


        })

    })
    
    ```
    3. The command to call the function in the test case is `cy.selectproduct("Blackberry")`
    4. We can also optimize the code by adding the prodname in the fixtures folder so that nothing will be hardcoded. 
    5. `cy.pause()` and `cy.debug()` can be used to debug the code.

## Page object Design Pattern
1. What is the page object design pattern?
Page Object Model, also known as POM, is a design pattern in Selenium or Cypress that creates an object repository for storing all web elements. It is useful in reducing code duplication and improves test case maintenance. In Page Object Model, consider each web page of an application as a class file.
2. Let's say, our web application has 4 pages, and each page has a lot of webelemets. We would create 4 class files, one for each page of the application and store all the page objects in that class. 
3. The adavantage is easy test case maintenance. 
4. Create a class file for each page of the web application. Each page object will be defined as a method. After defining all page objects, include the following command:  `export default <classname>` 
5. Once the class file is ready, it has to be imported into the spec file `import <classname> from "../pageobjects/classfile.js"`
6. In real world cases, page objects are placed in support folder. The syntax to add them to the spec file is `
`import classname from "../../support/pageobjects/classname.js`
7. After importing the class file, an object has to be created for that class. syntax is `const objectname = new classname()`
8. Once that object is declared, all the methods will be available.


## Cypress Dashboard
It is a cloud server that records all tests perforned. Test and debug faster with the Cypress Dashboard. The Cypress Dashboard increases test velocity while giving total visibility into tests running in your CI pipeline. It provides reports as well.
The dashboard provides an output of the test, a video recording, and a screenshot (only if the test fails.)

If investing in Cypress Dashboard is not a possibility, then there is an alternative reporting plugin caalled **mochawesome** which will create a html report that can be shared with other stakeholders. Mochawesome does not have screenshots or recordings like the Cypress dashboard.

## Runiing tests using script commands in package.json
1. Usuallly when we run tests from command line, we write the entire command `.node_modules/.bin/cypress run --spec "etc" `This command can be included in the script section of package.json and given a name so that we can run the same command as `npm run <scriptname>` Ex: `npm run test`
2. Multiple scripts can be written to be run in head mode, chrome browser, with recording on dashboard, with mochawesome reporting, etc.
3. We can also run multiple spec files by giving the path of each spec file separated by commas. The alternate way is to create a new folder under integration and include those spec files required to be executed and then add that path to the script in package.json
4. Another feature that cypress has is that if a test fails, it will try to run it another time before it reports a failure. This feature is called **cypress retry** and this is set in the cypress.config.js file. 
5. Even though cypress retries the test n times, the log will show it as one test but each time the test is executed, a new set of screenshots will be generated. 

## Continuous Integration with Jenkins
1. Download Generic jenkins.war file 
2. In the terminal or command prompt, navigate to the directory where jenksns.war is located 
3. Type the command `java -jenkins.war -httpport=9090`
4. Jenkins will start in the local server in the port 9090.







   

    















https://rahulshettyacademy.com/seleniumPractise/#/