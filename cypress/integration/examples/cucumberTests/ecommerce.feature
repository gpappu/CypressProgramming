Feature: end to end ecommerce validation

    go to url, fill the form, add the products to cart, checkout, select country, and validae success message.
    Scenario: ecommerce product delivery
    Given I open ecommerce page and fill the form
    When products are added to the cart
    And checkout and validate total
    Then I select country and validate success message
    
