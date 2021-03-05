
Cypress.Commands.add("login",(id,password)=>{
    cy.visit('/')
    cy.get('.form-control').type(id)
    cy.get('.btn-blue').click()
    cy.get('input[formcontrolname="password"]').type(password)

})


Cypress.Commands.add("logout",()=>{
cy.visit('/')
cy.get('.icon-logout').click()
})

describe('e-commerce login form ',()=>{



    beforeEach(()=>{
       cy.login('techi01','Welcome2Studi#')
    })

    afterEach(()=>{
        cy.visit('/')
        
    })

    it('counting the number of books',()=>{
        cy.get('.grade').eq(0)
        .should('have.text','Class 6')
        cy.get('.heading4.primary').contains('menu.syllabusTitle').click()
        cy.get('.card-title').then(($list),()=>{
            cy.log($list.length)
            cy.wrap('$list').first().click()
        })

    })

    it('open the book',()=>{


        cy.get('.heading4.primary').contains('menu.syllabusTitle').click()
        cy.get('.card-title').contains(' Mathematics ').click()
        cy.get('.heading5').contains(' Comparing Numbers ').click()
        cy.get('.heading5').contains(' Begin Revise ').click()
        cy.get('.btn-outline-primary').contains(' Begin Revision ').click()
        cy.get('.icon-add-note-white').click()
        cy.get('button[title="Play"]').should('have.class','vjs-paused')
        cy.get('.btn btn-lg.btn-outline-primary').contains(' Save Note ').should('have.attr','disabled')
        cy.get(div[data-placeholder]).type('New Code')
        cy.get('.btn btn-lg.btn-outline-primary').contains(' Save Note ').submit()
        //cy.get('.btn btn-lg.btn-outline-primary').contains(' Save Note ').click()
    })


})