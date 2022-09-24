Feature: end to end ecommerce validation

    go to url, fill the form, add the products to cart, checkout, select country, and validae success message.

    @Regression
    Scenario: ecommerce product delivery
    Given I open ecommerce page and fill the form
    When products are added to the cart
    And checkout and validate total
    Then I select country and validate success message

    @Smoke
    Scenario: Navigate to the shop cart page
    Given I open ecommerce page
    When I fill the form 
        |name       |email                 |password  |gender|
        |John Andrew|john.andrew@gmail.com |Test1234  |Male  |
    And validate two way binding 
    Then navigate to product page
    
