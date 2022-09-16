/// <reference types = "cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../pageobjects/homepage'
import ProductPage from '../../../pageobjects/ProductPage'
import checkoutPage from '../../../pageobjects/checkoutPage'
import purchasePage from '../../../pageobjects/purchasePage'

const homepage = new HomePage()
const shopproducts = new ProductPage()
const checkout = new checkoutPage()
const purchasebutton = new purchasePage()

Given('I open ecommerce page and fill the form', function()
{
    cy.visit(Cypress.env('url'))
    homepage.getName().type(this.data.name)
    homepage.getEmail().type(this.data.email)
    homepage.getPassword().type(this.data.password)
    homepage.getGender().select(this.data.gender)
    homepage.getTwoWayDataBinding().should('have.value', this.data.name)
    homepage.getShopTab().click()
})

When('products are added to the cart', function()
{
    this.data.prodname.forEach(function (element) 
    {
            cy.selectproduct(element)
    })
    shopproducts.addProducts().click()
})

And('checkout and validate total', function()
{
    var sum = 0
        checkout.getSum().each((el, index, $list) =>
        {
            const sumText = el.text().split(' ')
            var sumValue = Number(sumText[1].trim())
            //cy.log(sumValue)
            sum = Number(sum) + sumValue
            
        })

       checkout.getTotal().then(function(el) 
        {
            const totalText = el.text().split(" ")
            var totalValue = Number(totalText[1].trim())
            expect(sum).to.equal(totalValue)
            
        })  
        checkout.clickCheckOut().click()
})

Then('I select country and validate success message', function()
{
    cy.get('#country').type("India")
    Cypress.config('defaultCommandTimeout', 10000)
    cy.get('.suggestions ul li a').each((el, index, $list) => 
    {
        if (el.text() == "India") {
            cy.get('.suggestions ul li a').click()
        }
    })
    cy.get('#checkbox2').click({force: true})
    cy.get('.btn.btn-success.btn-lg').click()
    cy.get('.alert').then(function(element)
    {
        expect(element.text().includes('Success! Thank you! Your order will be delivered in next few weeks')).to.be.true
    })

})