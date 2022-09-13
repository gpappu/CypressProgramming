class checkoutPage
{
    getSum()
    {
        return cy.get('tr td:nth-child(4) strong')
    }
    clickCheckOut()
    {
        return cy.get('.btn.btn-success')
    }
}

export default checkoutPage