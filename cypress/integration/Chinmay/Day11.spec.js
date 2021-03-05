describe('Paybill tab ',()=>{

    beforeEach(function(){

        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
        cy.fixture('example').then(userDetails =>{
            cy.login2(userDetails.customer,userDetails.customerpassword)
            cy.get('#pay_bills_tab > a').click()
        })

    })

    it('Payee save payee',()=>{

        cy.get('#sp_payee').select('Sprint')
        cy.get('#sp_account').select('Checking')
        cy.get('#sp_amount').type('10')
        cy.get('#sp_date').click()
        cy.get('td > a').eq(9).contains('10').click()
        cy.get('#sp_description').type('hello')
        cy.get('#pay_saved_payees').click()
        cy.get('#alert_content > span')
        .should('be.visible').and('have.text','The payment was successfully submitted.')
        
    
    })


    it('Add new payee',()=>{

        const payee = "chinmay"
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type(payee)
        cy.get('#np_new_payee_address').type('new')
        cy.get('#np_new_payee_account').type('new')
        cy.get('#np_new_payee_details').type('details')
        cy.get('#add_new_payee').click()
        cy.get('#alert_content').should('contain',payee)
        

    })





})

