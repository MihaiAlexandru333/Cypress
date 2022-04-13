Feature: Ecommerce End to End

    App Regression

    Scenario: Ecommerce products delivery
    Given I open the ECommerce Page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify ThankYou

    ##this feature file will acces it's step definition file from the folder with the same name as the feature file
    ##in this case ecommerce.feature will get its step def file from the folder named ecommerce