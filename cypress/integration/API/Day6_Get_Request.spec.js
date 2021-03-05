const { expect } = require("chai")

describe('GET Request', ()=>{
  
    it('Validate the GET Request Response', ()=>{
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response)=>{
            expect(response.status).to.equals(200)
            expect(response.body).to.have.property('page',2)
        })
    })
})


