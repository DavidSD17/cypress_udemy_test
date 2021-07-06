
describe('login', ()=> {
it('n', ()=> {
cy.login()
.then((resp) =>  {
    window.localStorage.setItem('jwt', resp.body.sessionId)
})
})
})