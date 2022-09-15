class checkoutPage
{
    getSum()
    {
        return cy.get('tr td:nth-child(4) strong')
    }

    getTotal()
    {
        return  cy.get('tr td:nth-child(5) h3')
    }
    
    clickCheckOut()
    {
        return cy.get('.btn.btn-success')
    }
}

export default checkoutPage