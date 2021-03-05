const { expect } = require("chai")

describe('POST & PUT Request', ()=>{
  
    it('Validate the POST Request Response', ()=>{
        cy.request('POST', 'https://reqres.in/api/users', {name:'Gauri',job:'Developer'},)
        .then((response)=>{
            expect(response.body).to.have.property('name','Gauri')
            expect(response.body).to.have.property('job','Developer')
            expect(response.body).to.have.property('id')
            expect(response.status).to.equals(201)
            expect(response.headers).to.have.property('content-type')
        })
        
    })

      // way - 2

      it('Another Way to validate post request response', ()=>{
        cy.request({
            method: "Post",
            url:"https://reqres.in/api/users",
            body:{
                name:"Gauri",
                job:"Developer"
            },
            heraders:{
                content_type:"application/xml"
            }

        }).then((response)=>{
            expect(response.body).to.have.property('name','Gauri')
            expect(response.body).to.have.property('job','Developer')
            expect(response.body).to.have.property('id')
            expect(response.status).to.equals(201)
            expect(response.headers).to.have.property('content-type')
        })
    })

    var updatedName = 'Sarika'
    it('Another Way to validate post request response', ()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                name:updatedName,
                job:"Developer"
            },
            headers:{
                content_type:"application/xml"
            }
        }).then((response)=>{
            expect(response.body).to.have.property('name',updatedName)
            expect(response.body).to.have.property('job','Developer')
            expect(response.body).to.have.property('id')
            expect(response.status).to.equals(201)
            expect(response.headers).to.have.property('content-type')
        })
    })


    // PUT Request:

    var name2 = Math.random().toString() + 'ABC'
    it('Validate the PUT Request Response',()=>{
        cy.log(name2)
        cy.request('PUT','https://reqres.in/api/users/2', {name:name2,job:'Developer'},)
        .then((response)=>{
            expect(response.body).to.have.property('name',name2)
            expect(response.body).to.have.property('job','Developer')
            expect(response.status).to.equals(200)
            expect(response.headers).to.have.property('content-type')
        })
    })

    
})

