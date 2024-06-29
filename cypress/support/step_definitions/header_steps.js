import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pageObjects/HomePage";

const homePage = new HomePage();

Given('I visit the home page', () => {
  homePage.visit();
});

When('I click on the logo on the Header', () => {
  homePage.click('logo');
});

Then('I should be redirected to the home page', () => {
  cy.url().should('equal', 'https://shop.lm.mentorama.com.br/');
});