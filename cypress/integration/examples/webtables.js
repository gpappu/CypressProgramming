/// <reference types = "Cypress"/>
describe('webtables', function () {

    it('webtables', function () {

        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
        cy.get('table[name = "courses"] tbody tr td:nth-child(2)').each(($el, index, $list) =>
        {
            if($el.text() == 'WebServices / REST API Testing with SoapUI') {
            cy.get('table[name = "courses"] tbody tr td:nth-child(2)').eq(index).next().then(function(price){

                price.text()
                expect(price.text()).to.equal('35')

            })
            }




        } )


    })


})
