/// <reference types = "cypress"/>

import HomePage from '../pageobjects/homepage'
import ProductPage from '../pageobjects/ProductPage'
import checkoutPage from '../pageobjects/checkoutPage'
import purchasePage from '../pageobjects/purchasePage'

// This will import the page objects from the javascript class

// that we just wrote 

describe('NewFramework', function () {
    before(() => {
        cy.log('print this before all tests')

    })

    beforeEach(() => 
    {
        cy.fixture('example').then(function (testdata) {
            this.data = testdata

        })
    })

    it('HomePage', function () {
        cy.on('uncaught:exception', (err, runnable) => { return false; });
        const homepage = new HomePage()
        const shopproducts = new ProductPage()
        const checkout = new checkoutPage()
        const purchasebutton = new purchasePage()

        cy.visit(Cypress.env('url'))
        homepage.getName().type(this.data.name)
        homepage.getEmail().type(this.data.email)
        homepage.getPassword().type(this.data.password)
        homepage.getGender().select(this.data.gender)
        homepage.getTwoWayDataBinding().should('have.value', this.data.name)
        homepage.getShopTab().click()

        this.data.prodname.forEach(function (element) {
            cy.selectproduct(element)
        })
        shopproducts.addProducts().click()
        var sum = 0
        checkout.getSum().each((el, index, $list) =>
        {
            cy.log(el.text())
            const sumText = el.text().split(' ')
            var sumValue = Number(sumText[1].trim())
            //cy.log(sumValue)
            sum = Number(sum) + sumValue
            
        }).then(function()
        {
            cy.log(sum)

        })

       checkout.getTotal().then(function(el) 
        {
            const totalText = el.text().split(" ")
            var totalValue = Number(totalText[1].trim())
            expect(sum).to.equal(totalValue)
            
        })           

      
        checkout.clickCheckOut().click()

        purchasebutton.inputCountry().type("India")
        Cypress.config('defaultCommandTimeout', 10000)
        purchasebutton.selectCountry().each((el, index, $list) => 
        {
            if (el.text() == "India") {
                purchasebutton.selectCountry().click()
            }
        })
        purchasebutton.agreeCheckbox().click({force: true})
        purchasebutton.clickPurchase().click()
        //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks')
        // the above statement fails because when cypress grabs the text, it includes some additional characters which fail the test.
        // The alternate statement is 
        purchasebutton.validateAlert().then(function(element)
        {
            expect(element.text().includes('Success! Thank you! Your order will be delivered in next few weeks')).to.be.true
        })
    })


})