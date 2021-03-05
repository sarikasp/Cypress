describe('Nav Bar', ()=>{

    beforeEach(function(){
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('Verify Online Banking Page', () => {
        cy.get('#onlineBankingMenu > div').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        .and('have.text', 'Online Banking')
    })

    it('Verify the FeedBack Page Link', () => {
        cy.get('#feedback > div > strong').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('be.visible')
        .and('have.text', 'Feedback')
    })

    it('Verify the Home Page Link', () => {
        cy.get('#feedback > div > strong').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('be.visible')
        .and('have.text', 'Feedback')
        cy.get('a').contains('Zero Bank').click()
        cy.url().should('include', 'index.html')

    })



})