describe('Verify login function',() =>{

    //cy.title().should('have.text','Google')

    it('verify login with valid credentials',() =>{

        cy.visit('https://app.recast.studio/auth/login/?next=/?ref=header-login')
        cy.wait(5000)
        cy.get('#carrot-messenger-frame').as('iframeOne')

        cy.get('@iframeOne').then($iframe =>{
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')

        })
        cy.get('@iframe').find('#notification-close').click()


    })

})