Feature: End to End ecommerce validation

    Go to the homepage, fill the form, click on shop tab, add products to the cart. checkout, select country, and make the purchase.

    Scenario: Ecommerce products delivery
    Given I open the home page and fill the form
    When I add products to the cart 
    And validate the total amount
    Then I select country and submit
    