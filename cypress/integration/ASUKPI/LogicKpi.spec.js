/// <reference types="cypress" />
// Проверки расчёта Логических КПЭ на карте Пушкарский 2024
it('Авторизация по логину', () => {
    cy.visit('http://10.42.224.14/auth') 

    cy.get('[type="text"]') 
      .type('admin') 
      .should('have.value','admin' )
      cy.get('[type="password"]') 
      .type('admin') 

    cy.contains('Войти') 
      .click()
  })
it('Проверка входа', ()=> {
cy.get('[class="entity-page--header--header ng-star-inserted"]').should('have.text', ' Рабочий стол ')
})

it('Перейти в реестр карт', ()=> {
  cy.get('[href="/cards"]')
  .click()
})

it('Выбрать год', ()=> {
  cy.get('.mask-input > .p-inputtext')
  .click()

  cy.get('[class="date-cell out-of-month ng-star-inserted"]').contains(2024)
  .click({ force: true })
  cy.wait(1000)
  })
  

it('Открыть карту из КМ', ()=> {
  cy.get('[data-index="1"] > :nth-child(2) > .ng-star-inserted').should('have.text', 'Департамент электрических режимов. Директор департамента. Пушкарский Дмитрий Александрович')
  .rightclick()
  cy.contains('Открыть карточку')
  .click({ force: true })
  cy.get(':nth-child(3) > .router-link-active')
  .should('have.text', ' 2024 г. ')
  
})

it('Нажать Действия - ввод данных', ()=> {
  cy.get('[label="Действия"] > .custom-button-container > .custom-button-container-content')
  .click()
  
//Выбрать Ввод данных
 cy.get('[data-ik="1"]')
 .click()
 

})
it('Проверка плановых и фактическийх значений', ()=> {
  
    // №8 План Нет Факт Нет
    cy.get(':nth-child(3) > :nth-child(11) > .p-inputwrapper-filled > .p-dropdown > .p-dropdown-label')
    .should('have.text', 'Нет')
    cy.get(':nth-child(3) > :nth-child(12) > .p-inputwrapper-filled > .p-dropdown > .p-dropdown-label')
    .should('have.text', 'Нет')
    
    //1 План Да Факт Нет
    cy.get(':nth-child(6) > :nth-child(11) > .p-inputwrapper-filled > .p-dropdown > .p-dropdown-label')
    .should('have.text', 'Да')
    cy.get(':nth-child(6) > :nth-child(12) > .p-inputwrapper-filled > .p-dropdown > .p-dropdown-label')
    .should('have.text', 'Нет')

      //2 План Да Факт Да
      cy.get(':nth-child(7) > :nth-child(11) > .p-inputwrapper-filled > .p-dropdown > .p-dropdown-label')
      .should('have.text', 'Да')
      cy.get(':nth-child(7) > :nth-child(12) > .p-inputwrapper-filled > .p-dropdown > .p-dropdown-label')
      .should('have.text', 'Да')

      //3 План Нет Факт Да
      cy.get(':nth-child(10) > :nth-child(11) > .p-inputwrapper-filled > .p-dropdown > .p-dropdown-label')
      .should('have.text', 'Нет')
      cy.get(':nth-child(10) > :nth-child(12) > .p-inputwrapper-filled > .p-dropdown > .p-dropdown-label')
      .should('have.text', 'Да')

         //4 План Нет Факт Нет
         cy.get(':nth-child(11) > :nth-child(11) > .p-inputwrapper-filled > .p-dropdown > .p-dropdown-label')
         .should('have.text', 'Нет')
         cy.get(':nth-child(11) > :nth-child(12) > .p-inputwrapper-filled > .p-dropdown > .p-dropdown-label')
         .should('have.text', 'Нет')
})
it('Проверка % Вып', ()=> {
  
    cy.get('[label="Действия"] > .custom-button-container > .custom-button-container-content')
    .click()
    
  //Выбрать Ввод данных
   cy.get('[data-ik="1"]')
   .click({force: true})
   cy.wait(1000)
    
    cy.get('[label="Сохранить"] > .custom-button-container > .custom-button-container-content > .custom-button-text')
    .click({force: true})

     // Проверка №8
   cy.get(':nth-child(3) > :nth-child(13)')
   .should('have.text', ' 100,00 ')

     // Проверка №1
     cy.get(':nth-child(6) > :nth-child(13)')
     .should('have.text', ' 0,00 ')

      // Проверка №2
      cy.get(':nth-child(7) > :nth-child(13)')
      .should('have.text', ' 100,00 ')

       // Проверка №3
     cy.get(':nth-child(10) > :nth-child(13)')
     .should('have.text', ' 0,00 ')

      // Проверка №4
      cy.get(':nth-child(11) > :nth-child(13)')
      .should('have.text', ' 100,00 ')
  })