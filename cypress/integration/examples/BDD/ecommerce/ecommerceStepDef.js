//import preprocessor from "cypress-cucumber-preprocessor";
///<reference types  = "cypress"/>
import {Given, When, Then, And} from "cypress-cucumber-preprocessor"
import HomePage from '../../../pageobjects/homepage'
import ProductPage from '../../../pageobjects/ProductPage'
import checkoutPage from '../../../pageobjects/checkoutPage'
import purchasePage from '../../../pageobjects/purchasePage'

const homepage = new HomePage()
const shopproducts = new ProductPage()
const checkout = new checkoutPage()
const purchasebutton = new purchasePage()

Given("I open the home page and fill the form", function()
{
       cy.visit(Cypress.env('url'))
    homepage.getName().type(this.data.name)
    homepage.getEmail().type(this.data.email)
    homepage.getPassword().type(this.data.password)
    homepage.getGender().select(this.data.gender)
    homepage.getTwoWayDataBinding().should('have.value', this.data.name)
    homepage.getShopTab().click()
})

When(' I add products to the cart', function()
{
    this.data.prodname.forEach(function (element) 
    {
        cy.selectproduct(element)
    })
    shopproducts.addProducts().click()
})

And('validate the total amount', function()
{
    var sum = 0
    checkout.getSum().each((el, index, $list) =>
    {
        cy.log(el.text())
        const sumText = el.text().split(' ')
        var sumValue = Number(sumText[1].trim())
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

Then('I select country and submit', function()
{
    purchasebutton.inputCountry().type("India")
    Cypress.config('defaultCommandTimeout', 10000)
    purchasebutton.selectCountry().each((el, index, $list) => 
    {
        if (el.text() == "India") 
        {
            purchasebutton.selectCountry().click()
        }
    })
    purchasebutton.agreeCheckbox().click({force: true})
    purchasebutton.clickPurchase().click()
    purchasebutton.validateAlert().then(function(element)
    {
        expect(element.text().includes('Success! Thank you! Your order will be delivered in next few weeks')).to.be.true
    })
})
