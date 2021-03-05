describe('Verify the Google', ()=>{

    it('Verify the title for the google', ()=>{
        cy.visit('https://www.google.com/')
        cy.title().should('include','Google')
        cy.title().should('eq','Google')
        const c = cy.title()
        // cy.log(c.toString())

        cy.get('input[name="q"]').should('be.visible')
        // cy.get('input[name = "q"]').should('be.disabled')
        cy.get('input[name="q"]').should('be.enabled')
        // cy.get('input[name = "q"]').should('not.have.attr','class','hello')
        // cy.get('input[name = "q"]').should('not.have.attr','class','hello')
        //     .and().should('have.value','0')
        cy.get('input[name = "q"]').type('Python')
        cy.get('#viewport').click()
        cy.get('input[name = "btnk"]').click()
    })

   
})










