/// <reference types="cypress" />
// it('Поиск по id',() => {
// cy.visit('http://www.facebook.com')
// cy.get('#email')
// }) 

// it('Поиск по class',() => {
//     cy.visit('https://docs.cypress.io/api/table-of-contents')
//     cy.get('.DocSearch-Button')
//     .type('Admin')
//     }) 

//     it('Поиск по tag',() => {
//         cy.visit('https://docs.cypress.io/api/commands/get#Syntax')
//         cy.get('nav')
       
//         }) 
//         it('Поиск по Value',() => {
//             cy.visit('http://www.facebook.com')
//             cy.get('[data-testid="open-registration-form-button"]')
           
//             }) 

//             it('Поиск по разным типам селекторов',() => {
//                 cy.visit('http://www.facebook.com')
//                 cy.get('[data-testid="open-registration-form-button"][role="button"]')
               
//                 }) 
//                 it.only('Поиск по содержимомоу contains',() => {
//                     cy.visit('https://www.vtb.ru/')
//                     cy.get('*[class^="ocWidget"]')  //* - любой
                  
//                     }) 

it('Get Find Eq',() => {
                 cy.visit('https://docs.cypress.io/api/commands/get#Arguments')
                 cy.get('tbody>tr').eq(2).find('td').eq(2)
                       }) 

        it.only('Get Find Eq',() => {
        cy.visit('https://docs.cypress.io/api/cypress-api/custom-commands')
        cy.get('div').find('nav').find('ul').find('li').find('a').eq(0)
       
        //.find('ul').find('li').eq(0)
      
         }) 