
/* describe is used to set up a test suite and it is used to set up the test case
describe takes in 2 arguements, one name of the test suite and the other a function that bundles all of the it statements */

// The following header enabales intellisense in Cypress
/// <reference types = "Cypress"/> 
describe('My First Test Suite', function () {

    it('My first test case', function () {
        // all test steps go in this block.
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('c')
        cy.wait(3000)
        //cy.get('.product').should('have.length', 7) 
        // This test failed because there was an additionla element that was invisible. To extract elements taht are visible, add :visible
        //cy.get('.product:visible').should('have.length', 7) 

        // /an alternate way of finding all visible elements is by using parent child chaining
        // By using parent child chaining, the scope of the finding elements is confined to the parent block instead of searching the entire page.

        // cy.get('.products').find('.product').should('have.length', 7)

        // out of the 7 products retrieved, if the 4th product needs to be added to the cart, the code would be:
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click() // eq selects an index from an array 

        // In future, if many more products are added to the website and we need to retrieve the same product, the code will be:
        cy.get('.products').find('.product').each(($el, index, $list) => {   // each allows user to iterate on every itme in the list of items
            const veg_test = $el.find('.product-name').text()// This statement gets the text of the element.
            if (veg_test.includes('Cucumber')) {
                cy.wrap($el).find('button').click()
            }

        })
        

        // If non Cypress code is introduced, user would have to resolve the promise manually by including the method called then().Example code is below:
        // To print the text of the logo
        //const logo = cy.get('div.brand.greenLogo')
        //cy.log(logo.text())
        // The above statment will throw an error saying: "logo.text is not a function"...
        // because Cypress does not know how to resolve the promise of the statement with the variabale.
        // In this case, the user would have to take care of the promise by writing the following code.
        cy.get('div.brand.greenLogo').then(function (logoelement) {
            cy.log(logoelement.text())

        })

        // Because Cypress is asynchronous, and has been built to resolve promises to make it synchronous, 
        // we cannot assign variables to locators directly ex: const l = cy.get('.products'). 
        // Instead this can be achieved by aliasing. 
        cy.get('.products').as('productlocator') // This is aliasing

        // The following statemrnt can now be written as
        // cy.get('.products').find('.product').should('have.length', 7)
         cy.get('@productlocator').find('.product').should('have.length', 7)

    })

})