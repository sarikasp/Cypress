describe('Nav bar', () => {

    beforeEach(function () {
        cy.visit('http://zero.webappsecurity.com/')

    })

    it('verify online banking page link', () => {

        cy.get('#onlineBankingMenu').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('be.visible')
        .and('have.text','Online Banking')
        // cy.get('h1').contains("Online banking")
        // assertion

    })
    it('verify the feedback page link', () => {
        cy.get('#feedback').click()
        cy.url().should('include','feedback.html')
        cy.get('h3[id="feedback-title"]').should('be.visible')
        .and('have.text','Feedback')
     
    })

    it('verify the home page link', () => {

        cy.get('#feedback').click()
        cy.url().should('include','feedback.html')
        cy.get('h3[id="feedback-title"]').should('be.visible')
        .and('have.text','Feedback')
        cy.get('a').contains('Zero Bank').click()
        cy.url().should('include','index.html')

    })

   




})