describe('Post Requeest', () => {

    var result;
    it('Validate the reponse for the api', () => {
        cy
            .request('POST', 'https://reqres.in/api/users', { name: 'Jane', job: 'new' },)
            .then((response) => {
                // response.body is automatically serialized into JSON
                expect(response.body).to.have.property('name', 'Jane')
                expect(response.body).to.have.property('job', 'new')
                expect(response.body).to.have.property('id') // true
                expect(response.status).to.equals(201)
                expect(response.headers).to.have.property('content-type')
            })

        })
        
        it('Validate the reponse for the api', () => {
        cy.request({
            method: "POST",
            url: 'https://reqres.in/api/users',
            body: {
                name: 'Jane',
                job: 'new'

            },
            headers: {
                content_type: "application/xml"
            }

        }).then((response) => {
            // response.body is automatically serialized into JSON
            expect(response.body).to.have.property('name', 'Jane')
            expect(response.body).to.have.property('job', 'new')
            expect(response.body).to.have.property('id') // true
            expect(response.status).to.equals(201)
            expect(response.headers).to.have.property('content-type')
        })
    })
    var name2 = Math.random().toString() + "abc"
    

    it('Validate the reponse for the api', () => {
        cy.log(name2)
        cy
            .request('PUT', 'https://reqres.in/api/users/2', { name:name2,job: 'new' },)
            .then((response) => {
                // response.body is automatically serialized into JSON
                expect(response.body).to.have.property('name',name2)
                expect(response.body).to.have.property('job', 'new')
                //expect(response.body).to.have.property('id') // true
                expect(response.status).to.equals(200)
                expect(response.headers).to.have.property('content-type')
            })

        })
})

