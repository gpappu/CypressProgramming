/// <reference types = "Cypress"/> 

describe("GreenKart", function () {

    it('adding items to cart and chaecking out', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('input[type = search]').type('b')
        cy.wait(8000)
        cy.get('.products').find('.product').each(($el, index, $list) => 
        {   // each allows user to iterate on every itme in the list of items
            const item_text = $el.find('.product-name').text()// This statement gets the text of the element.
            if(item_text.includes('Banana'))
            {
                cy.wrap($el).find('button').click()
            }
        })

        cy.get('a[class = cart-icon]').click()
        cy.contains('PROCEED').click()
        cy.wait(5000)
        cy.contains('Place').click()


        

    })


})
