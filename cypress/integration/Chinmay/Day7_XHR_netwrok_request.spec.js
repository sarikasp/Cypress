describe('Network request', () => {
    it('GET REQUEST', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept('GET', '*/comments/').as('getComment')
        cy.get('.network-btn').click()
        cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])
    })

    it('POST', () => {

        cy.intercept('POST', '**/comments').as('postComment')
        cy.get('.network-post').click()
        cy.wait('@postComment').should(({ request, response }) => {
            expect(request.body).to.include('email')
            expect(request.headers).to.have.property('content-type')
            expect(request.body && response.body).to.have.property('name', 'Using POST in cy.intercept()')
        })


    })

    it('PUT',()=>{

        var message = "hello"

        cy.intercept({
            method: 'PUT',
            url: '*/comments/',
          }, {
            statusCode: 404,
            body: { error: "Hello i am chinmay" },
            headers: { 'access-control-allow-origin': '*' },
            delayMs: 500,
          }).as('putComment')
         
          cy.get('.network-put').click()
          cy.wait('@putComment')
          cy.get('.network-put-comment').should('contain', message)
    })

})