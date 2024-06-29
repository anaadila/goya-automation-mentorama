Feature: Header functionality

  Scenario: User return to Home page
    Given I visit the home page
    When I click on the "logo" on the Header
    Then I should be redirected to the "home" page

  Scenario: User access the Login modal
    Given I visit the home page
    When I click on the "entrar" on the Header
    Then I should see the Login modal

  Scenario: User acess the Login modal with credentials not registered
    Given I visit the home page
    When I click on the "entrar" on the Header
    When I fill the login form with "not registered credentials"
    Then I should be redirected to the "login" page
    And I should see a message "credentials not registered"

  Scenario: User access the Login modal with empty credentials
    Given I visit the home page
    When I click on the "entrar" on the Header
    When I fill the login form with "empty credentials"
    Then I should be redirected to the "login" page
    And I should see a message "empty credentials"
