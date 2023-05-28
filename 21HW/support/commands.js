import { Login } from '../fixtures/Login';
var login = new Login();

Cypress.Commands.add('loginSS', (email, password) => {
  login.btnLogin().click().wait(5000);
  login.email().type(email);
  login.password().type(password);
  login.clickBtnLogin().wait(650).click();
});

Cypress.Commands.add('login', (email, password) => {
  cy.get(
    '.layout-1__header-wrapper-fixed > .layout-1__header > .header > .header__items > a > .base--clickable > .header-item__text > .txt--med'
  )
    .click()
    .wait(5000);
  cy.get(':nth-child(3) > .frm').type(email);
  cy.get(':nth-child(4) > .frm').type(password);
  cy.get('.btn-main').click().wait(5000);
});

Cypress.Commands.add('enterLogin', (selector, email) => {
  cy.get(selector).type(email);
});

const regSelectors = require('../fixtures/pageRegistrationSelector.json');

Cypress.Commands.add('validLogin', (email, userName) => {
  cy.typeUserName(regSelectors.nameField, userName),
    cy.get('[name="email"]').type(email),
    cy.get(loginButton).click(),
    cy
      .get(registrationField)
      .contains('Письмо отправлено!')
      .and('have.class', 'picture-notice__title txt-h3--semi txt');
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//Cypress.on('uncaught:exception', (err, runnable) => {
// returning false here prevents Cypress from
// failing the test
//return false;
//});
