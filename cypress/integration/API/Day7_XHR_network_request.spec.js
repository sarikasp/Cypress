const { expect } = require("chai")

describe('XHR Network Request', ()=>{

    it('GET Request', ()=>{
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept('GET', '**/comments/*').as('getcomment')
        cy.get('.network-btn').click()
        cy.wait('@getcomment').its('response.statusCode').should('be.oneOf', [200, 304])    
    })

    it('POST Request', ()=>{
        cy.intercept('POST', '**/comments').as('postcomment')
        cy.get('.network-post').click()
        cy.wait('@postcomment').should(({request, response})=>{
            expect(request.body).to.include('email')
            expect(request.headers).to.have.property('content-type')
            expect(request.body && response.body).to.have.property('name', 'Using POST in cy.intercept()')
        })
    })

    it('PUT Request', ()=>{
        var message = 'I am new learner of Cypress'
        
        cy.intercept({
            method:'PUT',
            ulr:'**/comments/*',
        },{
            statusCode: 404,
            body: { error: "Hello i am chinmay" },
            headers: { 'access-control-allow-origin': '*' },
            delayMs: 500,
          }).as('putComment')
         
          cy.get('.network-put').click()
          cy.wait('@putComment')
          cy.get('.network-put-comment').should('contain', message)



        // {
        //     name: "Using PUT in cy.intercept()",
        //     email: "hello@cypress.io",
        //     body: "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE",
        //     id: 1
        //   }).as('putComment')
        
        // // cy.get('.network-put').click()
        // // cy.get('.btn btn-warning').click();
        // cy.get('.network-put.btn.btn-warning').click()

        // // xPath
        // // cy.get( '#network-requests > div > div:nth-child(5) > div > button.network-put.btn.btn-warning').click()

        // // CSS Selector
        // // cy.ge('//*[@id="network-requests"]/div/div[5]/div/button[3]')

        // // cy.wait(10000)
        // // cy.get('.network-put').click()
        // cy.wait('@putComment')
        // cy.get('.network-put-comment').should('contain', message)

        
    })
    
})