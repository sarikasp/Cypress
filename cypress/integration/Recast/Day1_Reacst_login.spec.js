// describe('Recast Studio Login', () =>{

//     it('Verify login with valid credieantials', () =>{
//         cy.visit('https://app.recast.studio/auth/login/?next=/?ref=header-login')
//        // cy.wait(5000)
//         cy.get('#carrot-messenger-frame',{timeout:60000}).as('iframeOne')
//         cy.get('@iframeOne').then($iframe =>{
//             const body = $iframe.contents().find('body')
//             cy.wrap(body).as('iframe')

//         })

//         // cy.get('@iframe').find('#login-form_email').type('chinmaydeshpande010@gmail.com')
//         // cy.get('@iframe').find('#login-form_password').type('chinmay123')
//         // // cy.get('@iframe').find('#login-form > div:nth-child(5) > div > div > div > button').click()
//         // cy.get('@iframe').find('button[type="submit"]').click()
//         cy.get('@iframe').find('#notification-close').click()


//     });

// });

///<reference types = "cypress" />

describe("login",()=>{


    it("recast login",()=>{
        cy.visit("https://app.recast.studio/auth/login/")
        cy.get("#login-form_email").type("amitchikte@gmail.com")
        cy.get("#login-form_password").type("9657363602")
        cy.get(".auth-form-button").click()
    })
})

