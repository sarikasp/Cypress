describe('Login/Logout', () => {

    before(function () {
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
        cy.url().should('include', 'login.html')

    })

    it('Login test for invalid user', () => {
        cy.login2('invalid', 'invalidpassword')
        cy.get('.alert.alert-error').should('be.visible')
            .and('contain', 'Login and/or password are wrong.')

    })

    it('Login test for valid user', () => {
        cy.fixture('example').then((file) => {
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
        cy.get('#logout_link').click()



    })




})