/// <reference types = "Cypress"/>



describe('alertsandpopups_childwindows', function () {
    it('alerts', function () {
        cy.visit('http://www.qaclickacademy.com/practice.php/')
        cy.title()


        cy.get('#alertbtn').click()

        // To assert if the text of the alert is correct. the following code can be used.
        cy.on('window:alert', (alerttext)=>
        {
            expect(alerttext).to.equal('Hello , share this practice page and share your knowledge')

        })

        // To assert the text of a popup that has the confirm and cancel buttons, the following code can be used.

        cy.get('#confirmbtn').click()

        cy.on('window:confirm', (popuptext)=>
        {
            expect(popuptext).to.equal('Hello , Are you sure you want to confirm?')

        })

        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.title()
        cy.go('back')

    })

  


 





})