import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";

const homePage = new HomePage();
const loginPage = new LoginPage();

Given('I visit the home page', () => {
  homePage.visit();
});

When('I click on the {string} on the Header', (link) => {
  homePage.click(link);
});

When('I fill the login form with {string}', (credentials) => {
  homePage.login(credentials);
});

Then('I should be redirected to the {string} page', (page) => {
  if (page == 'home') {
    cy.url().should('equal', 'https://shop.lm.mentorama.com.br/');
  } else if (page == 'login') {
    cy.url().should('equal', 'https://shop.lm.mentorama.com.br/?page_id=18');
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