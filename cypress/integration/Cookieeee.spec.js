describe('Dashboard', () => {
    before(() => {
        
      // log in only once before any of the tests run.
      // your app will likely set some sort of session cookie.
      // you'll need to know the name of the cookie(s), which you can find
      // in your Resources -> Cookies panel in the Chrome Dev Tools.
      cy.login()
    })
  
    beforeEach(() => {
      // before each test, we can automatically preserve the
      // 'session_id' and 'remember_token' cookies. this means they
      // will not be cleared before the NEXT test starts.
      //
      // the name of your cookies will likely be different
      // this is an example
      
      Cypress.Cookies.preserveOnce('session', 'remember_token')
    })
  
    it('displays stats', () => {
        cy.visit('http://kpi1.moesk.sigma-it.local/cards')
        cy.get('.entity-page--header--header', )
        .should('contain', 'Реестр карт КПЭ')
      // ...
    })
  
    it('can do something', () => {
        cy.visit('http://kpi1.moesk.sigma-it.local/reports')
        // ...
    })
})