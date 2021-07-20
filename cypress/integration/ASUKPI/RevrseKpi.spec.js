/// <reference types="cypress" />
// Проверки расчёта прямых КПЭ на карте Пушкарский 2018
it('Авторизация по логину', () => {
    cy.visit('http://10.42.224.14/auth') 

    cy.get('[type="text"]') 
      .type('admin') 
      .should('have.value','admin' )
      cy.get('[type="password"]') 
      .type('admin') // 5.

    cy.contains('Войти') // 6.
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

  cy.get('[class="date-cell out-of-month ng-star-inserted"]').contains(2018)
  .click({ force: true })
  cy.wait(1000)
  })
  

it('Открыть карту из КМ', ()=> {
  cy.get('[data-index="0"] > :nth-child(2) > .ng-star-inserted').should('have.text', 'Департамент электрических режимов. Директор департамента. Пушкарский Дмитрий Александрович')
  .rightclick()
  cy.contains('Открыть карточку')
  .click({ force: true })
  cy.get(':nth-child(3) > .router-link-active')
  .should('have.text', ' 2018 г. ')
  
})

it('Нажать Действия - ввод данных', ()=> {
  cy.get('[label="Действия"] > .custom-button-container > .custom-button-container-content')
  .click()
  
//Выбрать Ввод данных
 cy.get('[data-ik="1"]')
 .click()
 

})
it('Ввод плановых и фактическийх значений', ()=> {
  
  //Ввод значений №1
  cy.get(':nth-child(3) > :nth-child(11) > .ng-untouched > .p-inputtext')
  .focus()
  .type(100)
  cy.get(':nth-child(3) > :nth-child(12) > .ng-untouched > .p-inputtext')
  .focus()
  .type(50)

  //Ввод значений №2
  cy.get(':nth-child(4) > :nth-child(11) > .ng-untouched > .p-inputtext')
  .focus()
  .type(100)
  cy.get(':nth-child(4) > :nth-child(12) > .ng-untouched > .p-inputtext')
  .focus()
  .type('-50')

  //Ввод значений №3
  cy.get(':nth-child(7) > :nth-child(11) > .ng-untouched > .p-inputtext')
  .focus()
  .type(100)
  cy.get(':nth-child(7) > :nth-child(12) > .ng-untouched > .p-inputtext')
  .focus()
  .type(0)

  //Ввод значений №4
  cy.get(':nth-child(8) > :nth-child(11) > .ng-untouched > .p-inputtext')
  .focus()
  .type(179)
  cy.get(':nth-child(8) > :nth-child(12) > .ng-untouched > .p-inputtext')
  .focus()
  .type(205)

  //Ввод значений №5
  cy.get(':nth-child(9) > :nth-child(11) > .ng-untouched > .p-inputtext')
  .focus()
  .type('-100')
  cy.get(':nth-child(9) > :nth-child(12) > .ng-untouched > .p-inputtext')
  .focus()
  .type('-150')

   //Ввод значений №6
   cy.get(':nth-child(12) > :nth-child(11) > .ng-star-inserted > .p-inputtext')
   .focus()
   .type('-100')
   cy.get(':nth-child(12) > :nth-child(12) > .ng-star-inserted > .p-inputtext')
   .focus()
   .type('-50')

     //Ввод значений №7
     cy.get(':nth-child(15) > :nth-child(11) > .ng-star-inserted > .p-inputtext')
     .focus()
     .type('-100')
     cy.get(':nth-child(15) > :nth-child(12) > .ng-star-inserted > .p-inputtext')
     .focus()
     .type(0)

      //Ввод значений №8
      cy.get(':nth-child(16) > :nth-child(11) > .ng-star-inserted > .p-inputtext')
      .focus()
      .type(0)
      cy.get(':nth-child(16) > :nth-child(12) > .ng-star-inserted > .p-inputtext')
      .focus()
      .type(100)

   //Ввод значений №9
   cy.get(':nth-child(18) > :nth-child(11) > .ng-star-inserted > .p-inputtext')
   .focus()
   .type(0)
   cy.get(':nth-child(18) > :nth-child(12) > .ng-star-inserted > .p-inputtext')
   .focus()
   .type('-100')

   cy.get('[label="Сохранить"] > .custom-button-container > .custom-button-container-content > .custom-button-text')
   .click()
   cy.wait(500)
})

it('№1 Провекра % Вып = 100,00 ', ()=> {
    cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(3) > td:nth-child(13)')
    .should('have.text', ' 100,00 ')
  })
  
  it('№2 Провекра % Вып = 100,00 ', ()=> {
    cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(4) > td:nth-child(13)')
    .should('have.text', ' 100,00 ')
  })
  
  it('№3 Провекра % Вып = 100,00 ', ()=> {
    cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(7) > td:nth-child(13)')
    .should('have.text', ' 100,00 ')
  })
  
  it('№4 Провекра % Вып = 87,32 ', ()=> {
    cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(8) > td:nth-child(13)')
    .should('have.text', ' 87,32 ')
  })
  
  it('№5 Провекра % Вып = 100,00 ', ()=> {
    cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(9) > td:nth-child(13)')
    .should('have.text', ' 100,00 ')
  })
  
  it('№6 Провекра % Вып = 0,00 ', ()=> {
    cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(12) > td:nth-child(13)')
    .should('have.text', ' 0,00 ')
  })
  
  it('№7 Провекра % Вып = 0,00 ', ()=> {
    cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(15) > td:nth-child(13)')
    .should('have.text', ' 0,00 ')
  })
  
  it('№8 Провекра % Вып = 0,00 ', ()=> {
    cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(16) > td:nth-child(13)')
    .should('have.text', ' 0,00 ')
  })
  
  it('№9 Провекра % Вып = 100,00 ', ()=> {
    cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(18) > td:nth-child(13)')
    .should('have.text', ' 100,00 ')
    
  })


it('Очистить поля', ()=> {
  
    cy.get('[label="Действия"] > .custom-button-container > .custom-button-container-content')
    .click()
    
  //Выбрать Ввод данных
   cy.get('[data-ik="1"]')
   .click()
   cy.wait(1000)

//Очистка значений №1
  cy.get(':nth-child(3) > :nth-child(11) > .ng-untouched > .p-inputtext').scrollIntoView()
  .clear()
  cy.get(':nth-child(3) > :nth-child(12) > .ng-untouched > .p-inputtext')
  .clear()

  //Очистка значений №2
  cy.get(':nth-child(4) > :nth-child(11) > .ng-untouched > .p-inputtext')
  .clear()
  cy.get(':nth-child(4) > :nth-child(12) > .ng-untouched > .p-inputtext')
  .clear()

  //Очистка значений №3
  cy.get(':nth-child(7) > :nth-child(11) > .ng-untouched > .p-inputtext')
  .clear()
  cy.get(':nth-child(7) > :nth-child(12) > .ng-untouched > .p-inputtext')
  .clear()

  //Очистка значений №4
  cy.get(':nth-child(8) > :nth-child(11) > .ng-untouched > .p-inputtext')
  .clear()
  cy.get(':nth-child(8) > :nth-child(12) > .ng-untouched > .p-inputtext')
  .clear()

  //Очистка значений №5
  cy.get(':nth-child(9) > :nth-child(11) > .ng-untouched > .p-inputtext')
  .clear()
  cy.get(':nth-child(9) > :nth-child(12) > .ng-untouched > .p-inputtext')
  .clear()

   //Очистка значений №6
   cy.get(':nth-child(12) > :nth-child(11) > .ng-star-inserted > .p-inputtext')
   .clear()
   cy.get(':nth-child(12) > :nth-child(12) > .ng-star-inserted > .p-inputtext')
   .clear()

     //Очистка значений №7
     cy.get(':nth-child(15) > :nth-child(11) > .ng-star-inserted > .p-inputtext')
     .clear()
     cy.get(':nth-child(15) > :nth-child(12) > .ng-star-inserted > .p-inputtext')
     .clear()

     //Очистка значений №8
      cy.get(':nth-child(16) > :nth-child(11) > .ng-star-inserted > .p-inputtext')
      .clear({force: true})
      cy.get(':nth-child(16) > :nth-child(12) > .ng-star-inserted > .p-inputtext')
      .clear()

   //Очистка значений №9
   cy.get(':nth-child(18) > :nth-child(11) > .ng-star-inserted > .p-inputtext')
   .clear({force: true})
   cy.get(':nth-child(18) > :nth-child(12) > .ng-star-inserted > .p-inputtext')
   .clear({force: true})

    
    cy.get('[label="Сохранить"] > .custom-button-container > .custom-button-container-content > .custom-button-text')
    .click({force: true})
  })