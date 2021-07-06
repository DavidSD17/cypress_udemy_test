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

//const { isArguments } = require("cypress/types/lodash")

Cypress.Commands.add('login', () => { 
    cy.request({
        method: 'POST',
        url: 'http://kpi1.moesk.sigma-it.local:8080/api/v1/user/login',
        headers: {
          
            "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
            "cache-control": "no-cache",
            "content-type": "application/json",
            "pragma": "no-cache"
        },
        body: {
           login: 'admin',
           password: 'admin'}
    })
//.then((response) => {
//expect(response).to.have.property('status').to.equal(200)
//window.localStorage.setItem('jwt', response.body.sessionId)

})

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
