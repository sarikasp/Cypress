describe('Pay Bills', () =>{

    beforeEach(function(){
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
        cy.fixture('example').then(userDetails =>{
            cy.login2(userDetails.customer, userDetails.customerpassword)
            cy.get('#pay_bills_tab > a').click()
        })
    })

    it('Payee Save Payee', () =>{
        cy.get('#sp_payee').type('Sprint')
        cy.get('#sp_account').select('Checking')
        cy.get('#sp_amount').type('10')
        cy.get('#sp_date').click()
        cy.get('td > a').eq(22).contains('23').click()
        cy.get('#sp_description').type('Hello')
        cy.get('#pay_saved_payees').click()
        cy.get('#alert_content>span').should('be.visible')
        .and('have.text', 'The payment was successfully submitted.')
        

    })





})
























