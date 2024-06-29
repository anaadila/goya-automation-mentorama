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
  
  Scenario: User access the Wishlist page
    Given I visit the home page
    When I click on the "wishlist" on the Header
    Then I should be redirected to the "wishlist" page

  Scenario: Wishlist header counter
    Given I visit the home page
    When I add a product to the wishlist
    Then I should see the "wishlist" counter in the Header

  Scenario: User access the Cart page
    Given I visit the home page
    When I click on the "cart" on the Header
    Then I should see the Cart navbar

  Scenario: Cart header counter
    Given I visit the home page
    When I add a product to the cart
    Then I should see the "cart" counter in the Header

  Scenario: Access product page through the cart
    Given I visit the home page
    When I add a product to the cart
    When I click on the product in the cart
    Then I should be redirected to the "product" page

  Scenario Outline: Changing the quantity of a product in the cart for <quantity>
    Given I visit the home page
    When I add a product to the cart
    When I change the quantity of the product to <quantity>
    Then I should see the updated amount of the product in the cart

    Examples:
      | quantity |
      | "more"     |
      | "less"     |

  Scenario: Remove product from cart
    Given I visit the home page
    When I add a product to the cart
    When I remove the product from the cart
    Then I should see the product removed from the cart

  Scenario: Free shipping promotion
    Given I visit the home page
    When I add a product to the cart
    Then I should see the free shipping promotion "not applied"
    When I change the quantity of the product to "more"
    Then I should see the free shipping promotion "applied"

  Scenario: Access the Checkout page
    Given I visit the home page
    When I add a product to the cart
    When I click on the "checkout" button
    Then I should be redirected to the "checkout" page

  Scenario: Access the Cart page
    Given I visit the home page
    When I add a product to the cart
    When I click on the "cart" button
    Then I should be redirected to the "cart" page

  Scenario: Access the Catalog page
    Given I visit the home page
    When I click on the "catalog" on the Header
    Then I should be redirected to the "catalog" page

  Scenario Outline: Access the category <category> on Catalog page
    Given I visit the home page
    When I select the category <category> by hovering the catalog
    Then I should be redirected to the <category> page

    Examples:
      | category |
      | "mulher" |
      | "homem"  |
      | "caixas-de-som" |

  Scenario: Access the Catalog page via Menu
    Given I visit the home page
    When I click on the "menu" on the Header
    When I click on the "catalog" button
    Then I should be redirected to the "catalog" page

  Scenario Outline: Access the category <category> on Catalog page via Menu
    Given I visit the home page
    When I click on the "menu" on the Header
    When I click on the <category> button
    Then I should be redirected to the <category> page

    Examples:
      | category |
      | "mulher" |
      | "homem"  |
      | "caixas-de-som" |