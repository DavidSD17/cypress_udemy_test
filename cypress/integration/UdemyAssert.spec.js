/// <reference types="cypress" />

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
it('Утверждение', ()=> {
cy.get('[class="entity-page--header--header ng-star-inserted"]').should('have.text', ' Рабочий стол ')
})

it('Перейти в реестр карт', ()=> {
  cy.get('[href="/cards"]')
  .click()
})

it('Выбрать год', ()=> {
  cy.get('.mask-input > .p-inputtext')
  .click()

  cy.get('[class="date-cell out-of-month ng-star-inserted"]').contains(2016)
  .click({ force: true })
  cy.wait(1000)
  })
  

it('Открыть карту из КМ', ()=> {
  cy.get('[data-index="3"] > :nth-child(2) > .ng-star-inserted')
  .rightclick()
  cy.contains('Открыть карточку')
  .click({ force: true })
  cy.get(':nth-child(3) > .router-link-active')
  .should('have.text', ' 2016 г. ')
})

it('Нажать Действия - ввод данных', ()=> {
  cy.get('[label="Действия"] > .custom-button-container > .custom-button-container-content')
  .click()
  
//Выбрать Ввод данных
 cy.get('[data-ik="1"]')
 .click()

})
it(' №1 Ввести план 3 мес Непревышение максимального времени восстановления электроснабжения ', ()=> {
  
  //Ввод значений №1
  cy.get(':nth-child(3) > :nth-child(11) > .ng-untouched > .p-inputtext').scrollIntoView()
  .focus()
  .type(100)
  
  cy.get(':nth-child(3) > :nth-child(12) > .ng-untouched > .p-inputtext').scrollIntoView()
   .focus()
  .type(50)

// Ввод значений №2
cy.get(':nth-child(5) > :nth-child(11) > .ng-untouched > .p-inputtext').scrollIntoView()
.focus()
  .type(100)

  cy.get(':nth-child(5) > :nth-child(12) > .ng-untouched > .p-inputtext').scrollIntoView()
  .focus()
  .type('-50')
  
// Ввод значений №3
cy.get(':nth-child(8) > :nth-child(11) > .ng-star-inserted > .p-inputtext').scrollIntoView()
.focus()
.type(100)
cy.get(':nth-child(8) > :nth-child(12) > .ng-star-inserted > .p-inputtext').scrollIntoView()
.focus()
.type(0)
// Ввод значений №4
cy.get(':nth-child(9) > :nth-child(11) > .ng-star-inserted > .p-inputtext').scrollIntoView()
.focus()
.type(100)
cy.get(':nth-child(9) > :nth-child(12) > .ng-untouched > .p-inputtext').scrollIntoView()
.focus()
.type(150)
// Ввод значений №5
cy.get(':nth-child(10) > :nth-child(11) > .ng-untouched > .p-inputtext').scrollIntoView()
.focus()
.type('-100')
cy.get(':nth-child(10) > :nth-child(12) > .ng-untouched > .p-inputtext').scrollIntoView()
.focus()
.type('-150')
// Ввод значений №6 
cy.get(':nth-child(12) > :nth-child(11) > .ng-star-inserted > .p-inputtext').scrollIntoView()
.focus()
.type('-100')

cy.get(':nth-child(12) > :nth-child(12) > .ng-star-inserted > .p-inputtext').scrollIntoView()
.focus()
.type('-50')
//Ввод значений №7 
cy.get(':nth-child(15) > :nth-child(11) > .ng-star-inserted > .p-inputtext').scrollIntoView()
.focus()
.type('-100')
cy.get(':nth-child(15) > :nth-child(12) > .ng-star-inserted > .p-inputtext').scrollIntoView()
.focus()
.type(0)
// Ввод значений №8 
cy.get(':nth-child(17) > :nth-child(11) > .ng-star-inserted > .p-inputtext').scrollIntoView()
.focus()
.type('-100')

cy.get(':nth-child(17) > :nth-child(12) > .ng-star-inserted > .p-inputtext').scrollIntoView()
.focus()
.type(100)
// Ввод значений №9
cy.get(':nth-child(19) > :nth-child(11) > .ng-star-inserted > .p-inputtext').scrollIntoView()
.focus()
.type(0)

cy.get(':nth-child(19) > :nth-child(12) > .ng-star-inserted > .p-inputtext').scrollIntoView()
.focus()
.type('-100')

  cy.get('[label="Сохранить"] > .custom-button-container > .custom-button-container-content > .custom-button-text')
  .click()
  

})  

it('№1 Провекра % Вып = 0,00 ', ()=> {
  cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(3) > td:nth-child(13)')
  .should('have.text', ' 0,00 ')
})

it('№2 Провекра % Вып = 0,00 ', ()=> {
  cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(5) > td:nth-child(13)')
  .should('have.text', ' 0,00 ')
})

it('№3 Провекра % Вып = 0,00 ', ()=> {
  cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(8) > td:nth-child(13)')
  .should('have.text', ' 0,00 ')
})

it('№4 Провекра % Вып = 100,00 ', ()=> {
  cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(9) > td:nth-child(13)')
  .should('have.text', ' 100,00 ')
})

it('№5 Провекра % Вып = 00,00 ', ()=> {
  cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(10) > td:nth-child(13)')
  .should('have.text', ' 0,00 ')
})

it('№6 Провекра % Вып = 100,00 ', ()=> {
  cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(12) > td:nth-child(13)')
  .should('have.text', ' 100,00 ')
})

it('№7 Провекра % Вып = 100,00 ', ()=> {
  cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(15) > td:nth-child(13)')
  .should('have.text', ' 100,00 ')
})

it('№8 Провекра % Вып = 100,00 ', ()=> {
  cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(17) > td:nth-child(13)')
  .should('have.text', ' 100,00 ')
})

it('№9 Провекра % Вып = 000,00 ', ()=> {
  cy.get('.map-viewer--table > mc-base-table > div > div.table-body > table > tbody > tr:nth-child(19) > td:nth-child(13)')
  .should('have.text', ' 0,00 ')
  .pause()
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
   .clear({ force: true })
   
   cy.get(':nth-child(3) > :nth-child(12) > .ng-untouched > .p-inputtext').scrollIntoView()
   .clear()
 
 // Очистказначений №2
 cy.get(':nth-child(5) > :nth-child(11) > .ng-untouched > .p-inputtext').scrollIntoView()
 .clear()
 
   cy.get(':nth-child(5) > :nth-child(12) > .ng-untouched > .p-inputtext').scrollIntoView()
   .clear()
   
 // Очистка значений №3
 cy.get(':nth-child(8) > :nth-child(11) > .ng-star-inserted > .p-inputtext').scrollIntoView()
 .clear()
 cy.get(':nth-child(8) > :nth-child(12) > .ng-star-inserted > .p-inputtext')
 .clear()
 // Очистка значений №4
 cy.get(':nth-child(9) > :nth-child(11) > .ng-star-inserted > .p-inputtext').scrollIntoView()
 .clear()
 cy.get(':nth-child(9) > :nth-child(12) > .ng-untouched > .p-inputtext')
 .clear()
 // Очистказначений №5
 cy.get(':nth-child(10) > :nth-child(11) > .ng-untouched > .p-inputtext').scrollIntoView()
 .clear()
 cy.get(':nth-child(10) > :nth-child(12) > .ng-untouched > .p-inputtext')
 .clear({force: true})
 // Очистка значений №6 
 cy.get(':nth-child(12) > :nth-child(11) > .ng-star-inserted > .p-inputtext').scrollIntoView()
 .clear()
 
 cy.get(':nth-child(12) > :nth-child(12) > .ng-star-inserted > .p-inputtext')
 .clear()
 //Очистка значений №7 
 cy.get(':nth-child(15) > :nth-child(11) > .ng-star-inserted > .p-inputtext').scrollIntoView()
 .clear()
 cy.get(':nth-child(15) > :nth-child(12) > .ng-star-inserted > .p-inputtext')
 .clear()
 // Очистка значений №8 
 cy.get(':nth-child(17) > :nth-child(11) > .ng-star-inserted > .p-inputtext').scrollIntoView()
 .clear({ force: true })
 
 cy.get(':nth-child(17) > :nth-child(12) > .ng-star-inserted > .p-inputtext')
 .clear()
 // Очистказначений №9
 cy.get(':nth-child(19) > :nth-child(11) > .ng-star-inserted > .p-inputtext').scrollIntoView()
 .clear({ force: true })
 
 cy.get(':nth-child(19) > :nth-child(12) > .ng-star-inserted > .p-inputtext')
 .clear({force: true})
  
  cy.get('[label="Сохранить"] > .custom-button-container > .custom-button-container-content > .custom-button-text')
  .click({force: true})
})