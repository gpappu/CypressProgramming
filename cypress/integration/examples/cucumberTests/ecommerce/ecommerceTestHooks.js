before(() => 
{
    cy.log('print this before all tests')

})

beforeEach(() => 
{
    cy.fixture('example').then(function (testdata) {
        this.data = testdata

    })
})