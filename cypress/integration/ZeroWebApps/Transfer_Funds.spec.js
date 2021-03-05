describe('Transfer Funds', ()=>{

    beforeEach(function(){
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
        cy.fixture('example').then(userDetails =>{
            cy.login2(userDetails.customer, userDetails.customerpassword)
            cy.get('#transfer_funds_tab > a').click()
        })
    })

    it('Validate Transfer and Make Payments', ()=>{

        const datas = {
            select:"3",
            select2:"3",
            amount:"100",
            description:"Hello"
        }
        // cy.get('#tf_fromAccountId').select('Checking(Avail. balance = $ -500.2')
        // cy.get('#tf_toAccountId').select('Checking(Avail. balance = $ -500.2')
        // cy.get('#tf_amount').type('100')
        // cy.get('#tf_description').type('new')
        // cy.get('#btn_submit').click()


        cy.get('#tf_fromAccountId').select(datas.select)
        cy.get('#tf_toAccountId').select(datas.select2)
        cy.get('#tf_amount').type(datas.amount)
        cy.get('#tf_description').type(datas.description)
        cy.get('#btn_submit').click()
        cy.get('#tf_fromAccountId').should('have.value', 'Savings')
        cy.get('#tf_toAccountId').should('have.value', 'Savings')
        cy.get('#tf_amount').should('have.value', datas.amount)
        cy.get('#tf_description').should('have.value',datas.description)
    })


    it('Transfer Money & Make Payments - Verify', ()=>{

        const datas = {
            select:"3",
            select2:"3",
            amount:"100",
            description:"Hello"
        }

    })


})