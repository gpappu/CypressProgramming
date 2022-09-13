/// <reference types = "Cypress"/>
describe('mousehover', function(){

    it('mousehover', function(){
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Reload').click()
        cy.url().should('include', "Practice")


    })





})