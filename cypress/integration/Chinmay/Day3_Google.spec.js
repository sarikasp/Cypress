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

    it('Verify the title for the google',()=>{
        cy.visit('https://www.google.com')
        cy.title().should('include', 'Google')
        cy.title().should('eq','Google')
        const c = cy.title()
        //cy.get('input[name = "q"]',{timeout:10000,log:true})
        cy.get('input[name = "q"]',{log:false})
        cy.get('input[name="q"]',{withinSubject:document.getElementsByTagName('li')})
        // cy.get("input ^ = 'catch-frameElement'")
        // cy.get("input $ = 'catch-frameElement'")

        cy.get('input[name = "q"]').should('be.visible')
        cy.get('input[name = "q"]').should('be.disabled')
        cy.get('input[name = "q"]').should('be.enabled')
        cy.get('input[name = "q"]').should('not.have.attr','class','hello')
        cy.get('input[name = "q"]').should('not.have.attr','class','hello')
            .and().should('have.value','0')
        cy.get('#search').within(()=>{
            cy.get('#q').should('have.text',"New")
        })
        //find
        cy.get('#q').find('#f',{log:false})
        cy.get('#q').find('#f',{timeout:20000})

        
    })

    it.only('Verify the title in cypress',() =>{

        cy.visit('https://www.google.com')
        cy.get('input[name = "q"]').type('python')
        cy.log('Hello').then(()=>{
            console.log('hello console')
        })

        cy.get('#facebook').should('have.attr','href','https://facebook.com')
        
    })


    cy.visit('https://www.goole.com')
    .should('have.attr','name')
    .type('python').find('#textbox')
    .should('have.value','python')
    .and('have.value','python')

    
    // assertion ----->

    // implicit , explicit , cypress assertions 

    // implicit //----

    //implicit  -- should 

    // explicit ---



    //explicit 

    // cypress assertions







    


    // cross origin manage

    //http://www.google.com
    //https://facebook.com

    // command ? synchrous vs asynchronus ?? ---- asynchronus 

    // executive synchronus 

    // javascript - cypress --- js ----> then()

    // try catch ?? //----
  



})