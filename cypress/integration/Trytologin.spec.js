/// <reference types="cypress" />

// login just once using API
let user

before(function fetchUser () {
  cy.request('POST', 'http://kpi1.moesk.sigma-it.local:8080/api/v1/user/login', {
    login: Cypress.env('login'),
    password: Cypress.env('password'),
  })
  .its('body')
  .then((res) => {
    user = res
  })
})

beforeEach(function setUser () {
    cy.visit('http://kpi1.moesk.sigma-it.local', {
      onBeforeLoad (win) {
        // and before the page finishes loading
        // set the user object in local storage
        win.localStorage.setItem('user', JSON.stringify(user))
      },
    })
    // the page should be opened and the user should be logged in
  })

  describe('JWT', () => {
    it('makes authenticated request', () => {
    // we can make authenticated request ourselves
    // since we know the token
      cy.request({
        url: 'http://kpi1.moesk.sigma-it.local:8080/api/v1/user/1',
        auth: {
          bearer: user.sessionId,
        },
      })
      .its('body')
      .should('deep.equal', [
        {
            sessionId: 'eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlbl9leHBpcmF0aW9uX2RhdGUiOjE2NTY3NjI0NDA5ODUsImxvZ2luIjoiYWRtaW4iLCJ0b2tlbl9jcmVhdGVfZGF0ZSI6MTYyNTIyNjQ0MDk4NX0.qrA9_MIUQrrogKS54jqft8hMdO__2t4bl9ABxO8UgIPodUKnn6JlFk3BAgSa5phd9LQ--GeTws_0uoENZSi-jA',
         // username: 'test',
         // firstName: 'Test',
         // lastName: 'User',
        },
      ])
    })
  
    it('is logged in', () => {
      cy.contains('Hi Test!').should('be.visible')
    })
})