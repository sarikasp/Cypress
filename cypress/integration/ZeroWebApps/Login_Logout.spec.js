describe('Login or Logout', () =>{

    before('Signin', function(){
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
        cy.url().should('include','login.html')
    })

    // it('Login test for Invalid user', () => {
    //     cy.get('#user_login').type('invalid')
    //     cy.get('#user_password').type('invalidpassword')
    //     cy.get('.btn').click()
    //     cy.get('.alert').should('be.visible')
    //     .and('contain', 'Login and/or password are wrong.')
        
    // })

    it('Login test for Invalid user', () => {
        cy.login2('invalid', 'invalidpassword')
        cy.get('.alert').should('be.visible')
        .and('contain', 'Login and/or password are wrong.')
        
    })


    // it('Login test for Valid user', () => {
    //     cy.get('#user_login').type('username')
    //     cy.get('#user_password').type('password')
    //     cy.get('.btn').click()
    //     cy.get('.offset2 > :nth-child(1)').should('be.visible')   
    // })

    it('Login test for Valid user', () => {
        cy.fixture('example').then((file) =>{
            cy.log(file.customer)
            cy.log(file.password)
            cy.login2(file.customer, file.customerpassword) 
            cy.get('.offset2 > :nth-child(1)').should('be.visible')  
        })
    })


    it('verify the logout functionality',() =>{
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('#logout_link').click()
        cy.url().should('include','index.html')
    })

})