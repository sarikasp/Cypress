describe('Login/Logout and command', () => {





    // before(function () {
    //     cy.visit('http://zero.webappsecurity.com/')
    //     cy.get('#signin_button').click()
    //     cy.url().should('include', 'login.html')




    // })

    it('Login test for invalid user', () => {
        cy.login2('invalid', 'invalidpassword')
        cy.get('.alert.alert-error').should('be.visible')
            .and('contain', 'Login and/or password are wrong.')

    })

    it('.as() assertion', () => {

        // .as()  .type() get() clear() pause()
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#searchTerm').as('searchInput')
        cy.pause()
        cy.get('@searchInput').type('hello')
        cy.pause()
        cy.get('@searchInput').clear()

    })


    it('.as() assertion', () => {

        // .as()  .type() get() clear() pause()
        cy.visit('http://zero.webappsecurity.com/')
        cy.pause()
        cy.get('#searchTerm').type('Hello').blur()
        cy.pause()
    })
    
    it('.as() assertion', () => {

        // check() -- radio and checkbox 
        // select() <select>
        // .as()  .type() get() clear() pause()
        cy.visit('http://zero.webappsecurity.com/')
        cy.pause()
        cy.get('#searchTerm').type('Hello').blur()
        cy.pause()
    })
    it(' check ', () => {
        // check() , uncheck()
        cy.visit('https://www.spicejet.com/')
        // check boxes
        cy.get('#ctl00_mainContent_chk_friendsandfamily').check().should('be.checked')
        cy.get('#ctl00_mainContent_chk_friendsandfamily').uncheck().should('not.be.checked')
        // radio button
        cy.get('#ctl00_mainContent_rbtnl_Trip_1').check().should('be.selected')
        //cy.get('#ctl00_mainContent_rbtnl_Trip_1').uncheck().should('not.be.checked')

    })
    it.only(' children ', () => {
        // check() , uncheck()
        cy.visit('https://www.spicejet.com/')
        cy.get('#ctl00_mainContent_rbtnl_Trip').children('input[type="radio"]').eq('1').check()
    })

    it.only('clearCookie and clearCookies', () => {
        // check() , uncheck()
        cy.visit('https://www.spicejet.com/')
        cy.get('#ctl00_mainContent_rbtnl_Trip').children('input[type="radio"]').eq('1').check()
        cy.clearCookie({'_ga':'GA1.2.872960257.1605608857'})
        cy.clearCookies()
    })

    it.only('clearCookie and clearCookies', () => {
        // check() , uncheck()
        cy.visit('https://www.spicejet.com/')
        cy.get('#ctl00_mainContent_rbtnl_Trip').children('input[type="radio"]').eq('1').check()
        cy.clearCookie({'_ga':'GA1.2.872960257.1605608857'})
        cy.clearCookies()
        cy.clearLocalStorage('{"cypress_docs_closed_banners":["3brBYbMkbs5dB8jfEq5eVW"]}')
    })
    


    
    
    





   
  // assertion chanining

  //.and()


})