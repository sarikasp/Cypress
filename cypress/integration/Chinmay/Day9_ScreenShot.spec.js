describe('screenshort ',()=>{
    
    it('complete screen shor in sypress',()=>{



        // cy.fixture('homepage').then('detail',()=>{

        //     cy.log(detail.inputvsalue)

        // })



        cy.visit('https://www.google.com')

        cy.get('input[name = "q"]').as('inputname')
        cy.get('@inputname').type('python')
        cy.wait(5000)
        cy.get('inputname').clear()
        cy.wait(3000)


        cy.pause()
        cy.screenshot() 
        
        // Entire page
        cy.reload()//


        // To verify the value is saved on db
        // Screen on failure
        // expect(true).to.equals(false)
        // Default configuration
        //cy.get('input[name = "q"]').screenshot()
        //cy.log('hello') // ??
        // logging?

        
    })



})