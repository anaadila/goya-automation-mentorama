Feature: Header functionality

  Scenario: User return to Home page
    Given I visit the home page
    When I click on the logo on the Header
    Then I should be redirected to the home page
    