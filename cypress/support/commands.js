import 'cypress-file-upload';
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
///<reference types="Cypress"/>
//<reference types="cypress-xpath"/>


  // Cypress test
  //for mutiple chart numbers.
 /* Cypress.Commands.add('selectMultiple', (options) => {
    options.forEach(option => {
      cy.get('.rbt-input-main').type(option);
      cy.get('.dropdown-menu').should('be.visible');
      cy.contains('.dropdown-item', option).click();
    }); 
  });*/
  Cypress.Commands.add('selectMultiple', (options) => {
    options.forEach(option => {
      cy.get('.rbt-input-main').should('be.visible').type(option);       // Ensure input is visible 
      cy.get('.dropdown-menu').should('be.visible');      // Ensure dropdown is open
      cy.contains('.dropdown-item', option).should('be.visible')       // Ensure the item is visible
        .click();
    }); 
  });
  //For selecting the dropdowns from list
  Cypress.Commands.add('typeandselector', (selector, text) => {
    cy.get(selector)
      .should('be.visible')      // Ensure the input is visible
      .clear()
      .type(text);
  
    cy.contains('.dropdown-item', text)
      .should('be.visible')      // Wait for the dropdown option to appear
      .click();
  });
//For login
Cypress.Commands.add('login',()=>{
  cy.visit('http://172.16.7.223:3042/')

    cy.get('#profileContainer').find('button.dropdown-toggle').click();
    cy.get('#login-btn').click()
    //cy.get('#S124NavigationalWarnings').click()
    cy.fixture("Login").then((data)=>{
      cy.get('#exampleForm\\.ControlInput1').type(data.username)
      cy.get('#exampleForm\\.ControlInput2').type(data.password)
      cy.contains('button', 'Login').click();
      cy.get('#profileContainer').find('button.dropdown-toggle').should('contain', data.username);
    })
})

  
  
  