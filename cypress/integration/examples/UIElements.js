/// <reference types = "Cypress"/>

describe('UI elements', function(){
    it('checkboxes',  function() 
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // check using click 
        cy.get('#checkBoxOption1').click() ///check using click 
        
        cy.wait(5000)

        // chech using check method and assert that it is checked and has a value of option 3
        cy.get('input#checkBoxOption3').check().should('be.checked').and('have.value', 'option3') 

        cy.wait(6000)

        // uncheck checkbox and assert that it is unchecked.
       cy.get('#checkBoxOption1').uncheck().should('not.be.checked') // check 

       cy.wait(4000)

        // selecting multiple checkboxes by sending values of elements into the check method.
        cy.get('input[type = checkbox').check(['option1', 'option3'])
    } )

    it('staticDropdowns', function()
    {

       cy.get('select').select('option3').should('have.value', 'option3')

    })

    it('dynamicDropdowns', function()
    {
        // For dymamic dropdowns, user enters a text, 
        // and iterated through each option displayed, and selects the requires value based on the text.

        cy.get('#autocomplete').type('Ame')
        cy.get('.ui-menu-item div').each(($el, index, $list) => { 
            if($el.text()== 'Cameroon')
            {
                cy.wrap($el).click()
            }

        })

         cy.get('#autocomplete').should('have.value', 'Cameroon')

    })

    it('visibleAndInvisible', function()
    {
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    })

    it('radiobuttons', function(){
        cy.get('input[value = radio2').check()
        cy.get('input[value = radio2]').should('be.checked')
    })








})

