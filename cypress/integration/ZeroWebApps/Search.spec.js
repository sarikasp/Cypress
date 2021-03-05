describe('checking search ',()=>{

    it('Checking the Search Functionality in Cypress',()=>{

        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=zero')
        cy.get('#searchTerm').type('zero{enter}')
        cy.contains('Zero - Personal Banking - Loans - Credit Cards').should('have.text', 'Zero - Personal Banking - Loans - Credit Cards')
      
    })



})


