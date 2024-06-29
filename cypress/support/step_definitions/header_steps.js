import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import CatalogPage from "../pageObjects/CatalogPage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const catalogPage = new CatalogPage();

Given('I visit the home page', () => {
  homePage.visit();
});

When('I click on the {string} on the Header', (link) => {
  homePage.click(link);
});

When('I click on the {string} button', (button) => {
  if (button == "checkout") {
    homePage.elements.checkoutButton().click();
  } else if (button == "cart") {
    homePage.elements.cartButton().click();
  } else if (button == "catalog") {
    homePage.elements.catalogMenu().click();
  } else if (button == 'mulher') {
    homePage.elements.menuMulher().click();
  } else if (button == 'homem') {
    homePage.elements.menuHomem().click();
  } else if (button == 'caixas-de-som') {
    homePage.elements.menuCaixa().click();
  }
  
});

When('I fill the login form with {string}', (credentials) => {
  homePage.login(credentials);
});

When('I search for {string}', function(productName) {
  this.productName = productName;
  homePage.search(productName);
});

When('I select the category {string}', function(category) {
  this.category = category;
  homePage.select(category);
});

When('I add a product to the wishlist', () => {
  homePage.wishlistAProdut();
});

When('I add a product to the cart', () => {
  homePage.addAProductToCart();
});

When('I click on the product in the cart', () => {
  homePage.elements.cartProductList().find('li').find('div').first().click();
});

When('I change the quantity of the product to {string}', function(quantity) {
  this.quantity = quantity;

  if (quantity == 'more') {
    homePage.elements.cartProductList().find('li').find('span[class="plus"]').click();
    homePage.elements.cartProductList().find('li').find('span[class="plus"]').click();
  } else if (quantity == 'less') {
    homePage.elements.cartProductList().find('li').find('span[class="plus"]').click();
    homePage.elements.cartProductList().find('li').find('span[class="plus"]').click();
    homePage.elements.cartProductList().find('li').find('span[class="minus"]').click();
  }
});

When('I remove the product from the cart', () => {
  homePage.elements.cartProductList().find('li').find('a[class*="remove_from_cart_button"]').click();
});

When('I select the category {string} by hovering the catalog', (category) => {
  if (category == 'mulher') {
    homePage.elements.catalog().trigger('mouseover');
    homePage.elements.hoverMenuMulher().click({force: true});
  } else if (category == 'homem') {
    homePage.elements.catalog().trigger('mouseover');
    homePage.elements.hoverMenuHomem().click({force: true});
  } else if (category == 'caixas-de-som') {
    homePage.elements.catalog().trigger('mouseover');
    homePage.elements.hoverMenuCaixas().click({force: true});
  }
});

Then('I should see the product removed from the cart', () => {
  homePage.elements.cartEmpty().should('be.visible');
});

Then('I should see the free shipping promotion {string}', (promotion) => {
  if (promotion == 'not applied') {
    homePage.elements.freeShippingMessage().invoke('text').should('contain', 'Adicione mais').and('contain', 'para obter frete grátis!');
  } else if (promotion == 'applied') {
    homePage.elements.freeShippingMessage().invoke('text').should('contain', 'Você tem frete grátis!');
  }
});


Then('I should see the updated amount of the product in the cart', function() {
  const quantity = this.quantity;
  if (quantity == 'more') {
    homePage.elements.cartProductList().find('li').find('input').invoke('val').should('equal', '3');
  } else if (quantity == 'less') {
    homePage.elements.cartProductList().find('li').find('input').invoke('val').should('equal', '2');
  }
});


Then('I should be redirected to the {string} page', (page) => {
  if (page == 'home') {
    cy.url().should('equal', 'https://shop.lm.mentorama.com.br/');
  } else if (page == 'login') {
    cy.url().should('equal', 'https://shop.lm.mentorama.com.br/?page_id=18');
  } else if (page == 'wishlist') {
    cy.url().should('equal', 'https://shop.lm.mentorama.com.br/?page_id=23&wishlist-action');
  } else if (page == 'product') {
    cy.url().should('contain', 'https://shop.lm.mentorama.com.br/?product');
  } else if (page == 'checkout') {
    cy.url().should('equal', 'https://shop.lm.mentorama.com.br/?page_id=17');
  } else if (page == 'cart') {
    cy.url().should('equal', 'https://shop.lm.mentorama.com.br/?page_id=16');
  } else if (page == '"homem"') {
    cy.url().should('equal', 'https://shop.lm.mentorama.com.br/?product_cat=homen');
  } else if (page == '"mulher"') {
    cy.url().should('equal', 'https://shop.lm.mentorama.com.br/?product_cat=mulher');
  } else if (page == '"caixas-de-som"') {
    cy.url().should('equal', 'https://shop.lm.mentorama.com.br/?product_cat=caixas-de-som');
  } else if (page == 'catalog') {
    cy.url().should('equal', 'https://shop.lm.mentorama.com.br/?post_type=product');
  }
});

Then('I should see the Login modal', () => {
  homePage.elements.loginModal().should('be.visible');
});

Then('I should see a message {string}', (message) => {
  if (message == 'credentials not registered') {
    loginPage.elements.alert().should('contain', "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.");
  } else if (message == 'empty credentials') {
    loginPage.elements.alert().should('contain', "Erro: Nome de usuário é obrigatório.");
  }
});

Then('I should see the search results in the {string} category', function(category) {
  const productName = this.productName;

  if (category == 'general') {
    catalogPage.elements.breadcrumb().invoke('text').should('equal', 'Início / Loja / Resultados da pesquisa para “' + productName + '”')
  } else if (category == 'Mulher') {
    catalogPage.elements.breadcrumb().invoke('text').should('equal', 'Início / Mulher / Resultados da pesquisa para “' + productName + '”')
  } else if (category ==  'Homem') {
    catalogPage.elements.breadcrumb().invoke('text').should('equal', 'Início / Homen / Resultados da pesquisa para “' + productName + '”')
  } else if (category == 'Caixas de som') {
    catalogPage.elements.breadcrumb().invoke('text').should('equal', 'Início / Caixas de som / Resultados da pesquisa para “' + productName + '”')
  }
});

Then('I should see the {string} counter in the Header', (type) => {
  if (type == "wishlist") {
    homePage.elements.withlistCount().should('contain', '1');
  } else if (type == "cart") {
    homePage.elements.cartX().click();
    homePage.elements.cartCount().should('contain', '1');
  }
});

Then('I should see the Cart navbar', () => {
  homePage.elements.cartNav().should('be.visible');
});