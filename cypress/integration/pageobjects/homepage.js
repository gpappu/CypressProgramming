class HomePage //class declaration in javascript
{
    getName()
    {
        return cy.get('[name="name"]').eq(0)
    }

    getEmail()
    {
       return cy.get('[name="email"]')

    }

    getPassword()
    {
        return cy.get('#exampleInputPassword1')
    }

    getGender()
    {
        return cy.get('select')
    }

    getIceCreamCheckbox()
    {
        return cy.get('##exampleCheck1')
    }

    getEntrepreneurRadioButton()
    {
        return cy.get('##inlineRadio3')
    }

    getTwoWayDataBinding()
    {
        return cy.get('[name="name"]').eq(1)
    }

    getShopTab()
    {
         return cy.get(':nth-child(2) > .nav-link')
    }

}

export default HomePage // makes the class availble to all files in the framework