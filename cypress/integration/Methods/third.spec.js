const { should } = require("chai")

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
    it(' children ', () => {
        // check() , uncheck()
        cy.visit('https://www.spicejet.com/')
        cy.get('#ctl00_mainContent_rbtnl_Trip').children('input[type="radio"]').eq('1').check()
    })

    it('clearCookie and clearCookies', () => {
        // check() , uncheck()
        cy.visit('https://www.spicejet.com/')
        cy.get('#ctl00_mainContent_rbtnl_Trip').children('input[type="radio"]').eq('1').check()
        cy.clearCookie({'_ga':'GA1.2.872960257.1605608857'})
        cy.clearCookies()
    })

    it('clearCookie and clearCookies', () => {
        // check() , uncheck()
        cy.visit('https://www.spicejet.com/')
        cy.get('#ctl00_mainContent_rbtnl_Trip').children('input[type="radio"]').eq('1').check()
        cy.clearCookie({'_ga':'GA1.2.872960257.1605608857'})
        cy.clearCookies()
        cy.clearLocalStorage('{"cypress_docs_closed_banners":["3brBYbMkbs5dB8jfEq5eVW"]}')
    })
    
    it('click',() =>{

        cy.visit('https://app.recast.studio/auth/login/?next=/?ref=header-login')
        cy.get('#login-form_email').type('chinmaydeshpande010@gmail.com')
        cy.get('#login-form_password').type('chinmay123')
        cy.get('button[type="submit"]').click()


    })

    it('clock',() =>{

        // 0 janaury
        const  obj =  new Date()
        const  year =  obj.getFullYear()
        const  month =  obj.getMonth() + 1
        const  date =  obj.getDate() 
        const day = obj.getDay()
        cy.log(date,month)
        cy.visit('https://app.recast.studio/auth/login/?next=/?ref=header-login')
        cy.get('#login-form_email').type('chinmaydeshpande010@gmail.com')
        cy.get('#login-form_password').type('chinmay123')
        cy.get('button[type="submit"]').click()

        // const  date =  newDate(2020,3,10).getTime()
        // cy.clock(date)
        // cy.log(date)

    
    })


    it('closet',() =>{
        // ancestors only
        cy.visit('https://www.spicejet.com/')
        cy.get('#ctl00_mainContent_rbtnl_Trip_1').closest('table').should('have.class','tblTrip')
    
    })

    it('closet',() =>{
        // ancestors only
        cy.visit('https://www.spicejet.com/')
        cy.get('#ctl00_mainContent_rbtnl_Trip_1').closest('table').should('have.class','tblTrip')
    
    })


    it('contains ',() =>{
        // contains - assertion ... can be used to find .....chain
        // contains search the text in the html element 
        //<h1 id = "hello"> heading One</h1>


        cy.visit('https://www.spicejet.com/')
        // cy.contains('Round Trip').click().should('be.checked')
        // cy.contains('Round Trip').should('have.text','Round Trip')
        cy.contains('Round').should('have.text','Round Trip')


        cy.contains('/welocme .*/').click()
        cy.get('#id').click()






    
    })

    it('dbclick ',() =>{
        cy.visit('https://www.spicejet.com/')
        cy.contains('To').dblclick()
    })
    
    it.only('debug  , document',() =>{
        cy.visit('https://app.recast.studio/auth/login/?next=/?ref=header-login')
        cy.get('#login-form_email').type('chinmaydeshpande010@gmail.com').as('newElement')
        cy.debug('@newElement')
        cy.get('#login-form_password').type('chinmay123')
        cy.get('button[type="submit"]').click()
        cy.document().its('charset').should('eq', 'UTF-8')

    })

    it.only('document',() =>{

        cy.document().its('content-type').should('have.text','text.html')


    })


    it('each',()=>{

        cy.get('h1').each((el , index , arr)=>{



        })

        // reduce . filter , map , forEach , Array.from()







    })


    //  welcome chinmay
    // welcome admin

















    

    

    
    
    





   
  // assertion chanining

  //.and()


})