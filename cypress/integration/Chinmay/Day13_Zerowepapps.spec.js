describe('checking search ',()=>{

    it('checking the search functionality in cypress',()=>{

        cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=zero')
        cy.get('#searchTerm').type('zero{enter}')
        cy.contains('Zero - Personal Banking - Loans - Credit Cards').should('have.text','Zero - Personal Banking - Loans - Credit Cards')
    })



})

