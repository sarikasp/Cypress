////<reference types = "cypress" />

describe('Hooks', ()=>{

    before(()=>{
        cy.log('runs before every test')
    })

    beforeEach(()=>{
        cy.log('runs before each test')
    })

    afterEach(()=>{

        cy.log('runs after the each test')

    })
    after(() =>{
        cy.log('run after every test')

    })

    it('Test case one ',()=>{
        cy.log('Test case one')
    })

    it('Test case Two',()=>{
        cy.log('Test case two')
        expect('1').to.equals('1')
    })

})

// Testrunner ??


describe('concepts hooks in cypress', () => {
    beforeEach(() =>{
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#data-table').invoke('removeAttr','target').click({force:true}) 
    })
    

    it('children () testcase to find children with specific properties', () => {
     
     cy.get('.breadcrumb.traversal-breadcrumb').children('.active').contains('Contact Us')  //here contains two cls names so we hv put . between two clsname in cy.get and then selected children
     cy.get('.breadcrumb.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')

})

it(' closest testcase to find the closest element with closest method with the current reference and validate the property', () => {

 cy.get('#sugar').closest('ul').should('have.class','traversal-drinks-list')
})

it('eq() to retrive any element based on the index', () => {

 cy.get('.traversal-food-list >li').eq(2).contains('Banana')
 cy.get('.traversal-food-list >li').eq(2).should('have.text','Banana')
})

})







// var x = document.querySelector('#demo')
// x.addEventListener('click',()=>{
//     x.style.color = "green";
// })
