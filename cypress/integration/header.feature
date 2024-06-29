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

  Scenario: User search for a product
    Given I visit the home page
    When I click on the "search" on the Header
    When I search for "bolsa"
    Then I should see the search results in the "general" category

  Scenario: User search for a product in category Homem
    Given I visit the home page
    When I click on the "search" on the Header
    When I select the category "homen"
    When I search for "camisa"
    Then I should see the search results in the "Homem" category

  Scenario: User search for a product in category Mulher
    Given I visit the home page
    When I click on the "search" on the Header
    When I select the category "mulher"
    When I search for "regata"
    Then I should see the search results in the "Mulher" category

  Scenario: User search for a product in category Caixas de som
    Given I visit the home page
    When I click on the "search" on the Header
    When I select the category "caixas-de-som"
    When I search for "som"
    Then I should see the search results in the "Caixas de som" category

  Scenario: User search for a product with empty fields
    Given I visit the home page
    When I click on the "search" on the Header
    When I search for ""
    Then I should see the search results in the "general" category