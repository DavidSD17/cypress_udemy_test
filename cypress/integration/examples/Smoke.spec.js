describe('тест входа', ()=>{
it('Сохранить токен', ()=> {
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
})
.then((response) => {
console.log(response.body)
//window.localStorage.setItem('jwt', response.body.sessionId)
})
})