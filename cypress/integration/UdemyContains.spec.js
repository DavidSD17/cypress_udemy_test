/// <reference types="cypress" />
describe('Смок тесы', () => {
    it('Авторизация по логину', () => {
      cy.visit('http://kpi1.moesk.sigma-it.local/auth') // 1.
  
      cy.get(':nth-child(3) > .p-inputgroup > .p-inputtext') // 2.
        .type('admin') // 3.
  
        cy.get(':nth-child(4) > .p-inputgroup > .p-inputtext') // 4.
        .type('admin') // 5.
  
      cy.contains('Войти') // 6.
        .click()
    })

it('',() => {
    cy.contains('Админ Админович Админов')
    
})

it('',() => {
    
    cy.contains('div', 'АДМИН Админович Админов' ,{'matchCase': false}) // {'matchCase': false } Игнорировтаь регистр 
    
})
it('Контайнс с гет',() => {
    cy.get('.block--item--title').contains(' Задания на согласование ')
   
    
})
})