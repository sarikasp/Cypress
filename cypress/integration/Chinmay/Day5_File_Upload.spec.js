describe('upload file ',()=>{

    it('uploadfile',()=>{

        cy.visit('http://automationpractice.com/index.php?controller=contact')
        const fileName = 'regression-abc.png'
        cy.get('#fileUpload').attachFile(fileName)
        cy.get('.filename').contains('regression')

    })


    it('drag and drop the uploaded file',()=>{
        const fileName = 'regression-abc.png'
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        cy.get('#file').attachFile(fileName)
        cy.get('.box__restart',{timeout:2000}).should('have.text','Upload more?')

    })


    it.only('Multiple uploads',()=>{
        const a = 'regression-abc.png'
        const b = 'acv.png'
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload')
        .attachFile([a,b])
        

        //cy.get('.box__restart',{timeout:2000}).should('have.text','Upload more?')

    })

    describe("check",()=>{
        it("verify",{retries:{"openMode":2}},()=>{
            expect(2).to.be.eq(4)
        })
    })



})