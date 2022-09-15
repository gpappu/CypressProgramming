class purchasePage
{
    inputCountry()
    {
        cy.get('#country')
    }

    selectCountry()
    {
        cy.get('.suggestions ul li a')
    }

    agreeCheckbox()
    {
        cy.get('#checkbox2')
    }

    clickPurchase()
    {
        cy.get('.btn.btn-success.btn-lg')
    }

    validateAlert()
    {
        cy.get('.alert')
    }



}

export default purchasePage;
