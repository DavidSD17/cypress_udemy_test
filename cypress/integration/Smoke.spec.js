describe('Смок тесы', () => {
    it('Авторизация по логину', () => {
      cy.visit('http://kpi1.moesk.sigma-it.local/auth') // 1.
  
      cy.get(':nth-child(3) > .p-inputgroup > .p-inputtext') // 2.
        .type('admin') // 3.
  
        cy.get(':nth-child(4) > .p-inputgroup > .p-inputtext') // 4.
        .type('admin') // 5.
  
      cy.contains('Войти') // 6.
        .click() // 7.
  
      cy.url() // 8.
        .should('include', 'index')
  
        cy.get('.entity-page--header--header')// 9.
        .should('contain', 'Рабочий стол')
    })
    it('Переход в реестр карт КПЭ', () => {
        cy.get(':nth-child(4) > a.ng-star-inserted > .menu-button--icon > .pi')
        .click()
       // cy.pause()

        cy.url()
        .should('include', '/cards')
  })

  it('Переход в карточку карты КПЭ', () => {
    cy.get('[data-index="2"] > :nth-child(2) > .ng-star-inserted')
    .rightclick()
    cy.get('[data-ik="0"] > .p-menuitem-link' )
    .click()    
})

it('Ввод данных', () => {
    cy.get('[label="Действия"] > .custom-button-container > .custom-button-container-content')
    .click()
    cy.get('[data-ik="1"] > .p-menuitem-link')
    
    .click()
    
})
})