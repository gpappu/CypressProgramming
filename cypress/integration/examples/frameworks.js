/// <reference types = "cypress"/>
//import { slowCypressDown } from "cypress-slow-down"
//slowCypressDown(500)

describe("frameworks", function () 
{
    before(() => 
    {
        cy.log('this block will execute before all tests in the describe block')        
    })

    beforeEach(()=>
    {
        cy.log('Use the data in the fixture folder')
        cy.fixture('example').then(function(testdata)
        {
            this.data = testdata

        })
    
    })

   xit("textbox", function()
    {
        cy.on('uncaught:exception', (err, runnable) => { return false; });
        cy.visit(this.data.url)
        cy.get('.card-up').eq(1).click()
        cy.wait(2000)
        cy.get('.icon').eq(0).click()
        cy.get('#item-0').eq(0).click()
        cy.get('#userName').type(this.data.name)
        cy.get('#userEmail').type(this.data.email)
        cy.get('#currentAddress').type(this.data.currentaddr)
        cy.get('#permanentAddress').type(this.data.permaddress)
        cy.get('#submit').click()
        cy.wait(2000)
        cy.get('#output').should('be.visible')
        cy.get('#name').should('have.text', 'Name:'+this.data.name)    
        cy.get('#email').should('have.text', 'Email:'+this.data.email)
            

    })

    it("addToCart", function()
    {
        cy.on('uncaught:exception', (err, runnable) => { return false; });
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2) > .nav-link').click()
        cy.wait(2000)
        this.data.prodname.forEach(function(element) 
        {
            cy.selectproduct(element)
        });
        cy.get('.nav-link.btn.btn-primary').click()
       
    })


})