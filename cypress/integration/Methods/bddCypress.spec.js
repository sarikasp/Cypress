import {
    Given,
    Then,
    And,
    When
  } from "cypress-cucumber-preprocessor/steps";
  
  
  const url = 'https://app.recast.studio/auth/login/?ref=header-login'
  Given('navigate to recast page', () => {
    cy.visit(url)
  })
  
  When("user logged in using {word}", (username) => {
    cy.get('#login-form_email').type(username)
  })
  
  
  And("password as {word}", (password) => {
    cy.get('#login-form_password').type(password)
  })
  
  And("user clicks on submit button", () => {
    cy.get('button[type="submit"]').click()
  })
  
  Then("home page should not be displayed", () => {
    cy.url().should('contains', 'https://app.recast.studio/?ref=header-login')
  })