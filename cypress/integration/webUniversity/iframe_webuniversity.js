describe('Handling iFrame of WebUniversity',() =>{


    it('Automation for iframe',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#iframe').invoke('removeAttr', 'target').click()
        cy.get('#frame').then($iframe =>{
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')

        });
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@modal').find('p').then(($p) =>{
            cy.wrap($p).as('p')
            cy.get('@p').should('have.text', 'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')
        
        });

       // cy.get('@modal').find('#myModal > div > div > div.modal-footer > button:nth-child(2)').click()
        cy.get('@modal').find('.modal-footer > button:first-child').click()
    });


    it.only('Automation for iframe of jqueryui', () =>{
        cy.visit('https://jqueryui.com/draggable/')
        cy.get(".demo-frame").then($iframe =>{
            const body = $iframe.contents().find('body')
            cy.wrap(body).find('#draggable').click()

        });

    });




});