// const { expect } = require("chai");

// describe('Hooks Concept',()=>{

//     before(()=>{
//         cy.log('Run Before Every Test')
//     })

//     beforeEach(()=>{
//         cy.log('Run Before Each Test')
//     })

//     afterEach(()=>{
//         cy.log('Run Before Each Test')
//     })

//     after(()=>{
//         cy.log('Run Before Each Test')
//     })

//     it('Test Case One', ()=>{
//         cy.log("Test Cose One")
//     })

//     it('Test Case Two', ()=>{
//         cy.log("Test Cose Two")
//         expect('1').to.equals('1')
//     })
// });


describe('Hooks Concept in Cypress', () =>{

    beforeEach(() =>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#data-table').invoke('removeAttr', 'target').click({force:true})
    })

    it('children () testcase to find children with specific properties', () =>{

        cy.get('.breadcrumb.traversal-breadcrumb').children('.active').contains('Contact Us')
        cy.get('.breadcrumb.traversal-breadcrumb').children('.active').should('contain','Contact Us')
    });

    it('closest testcase to find the closest element with closest method with the current reference and validate the property', () =>{
        cy.get("#sugar").closest('ul').should('have.class','traversal-drinks-list')
    });

    it('eq() to retrive any element based on the index', () =>{
        cy.get('.traversal-food-list > li').eq(2).contains('Banana')
        cy.get('.traversal-food-list > li').eq(2).should('have.text','Banana')
        // body > div > div:nth-child(9) > div.thumbnail > ul.traversal-food-list > li:nth-child(3)
    })
   
    it.only('eq() to retrive any element based on the index', () =>{
        
        // body > div > div:nth-child(9) > div.thumbnail > ul.traversal-food-list > li:nth-child(9)
       // cy.get('body > div > div:nth-child(9) > div.thumbnail > ul.traversal-food-list > li:nth-child(9)').contains('Broccoli')
        cy.get('.traversal-food-list > li').eq(8).contains('Broccoli')
        // cy.get('.traversal-food-list > #veggie > li').eq(7).should('have.text','Broccoli')

    })

    it.only('eq() to retrive element', () =>{

        // body > div > div:nth-child(9) > div.thumbnail > ul.traversal-job-list > ul > li:nth-child(1)
        //    cy.get('body > div > div:nth-child(9) > div.thumbnail > ul.traversal-job-list > ul > li:nth-child(1)').contains('Finance')
        cy.get('.traversal-job-list > ul > li').eq(0).contains('Finance')
       // cy.get('.traversal-job-list > li').eq(9).should('have.text','Finance')

    })

});

















