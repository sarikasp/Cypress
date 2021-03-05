describe('transfer funds',()=>{

    beforeEach(function(){

        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
        cy.fixture('example').then(userDetails =>{
            cy.login2(userDetails.customer,userDetails.customerpassword)
            cy.get('#transfer_funds_tab > a').click()
        })

    })

    it('validate transfer and make payments',()=>{

        const abc = {
            select:"2",
            select2:"2",
            amount:"100",
            description:"new"

        }

        cy.get('#tf_fromAccountId').select(abc.select)
        cy.get('#tf_toAccountId').select(abc.select2)
        cy.get('#tf_amount').type(abc.amount)
        cy.get('#tf_description').type(abc.description)
        cy.get('#btn_submit').click()
        cy.get('#tf_fromAccountId').should('have.value',"Checking")
        cy.get('#tf_toAccountId').should('have.value',"Checking")
        cy.get('#tf_amount').should('have.value',abc.amount)
        cy.get('#tf_description').should('have.value',abc.description)




    })

    it.skip('Transfer Money & Make Payments - Verify',()=>{
        const abc = {
            select:"2",
            select2:"2",
            amount:"100",
            description:"new"

        }

        


    })

})
