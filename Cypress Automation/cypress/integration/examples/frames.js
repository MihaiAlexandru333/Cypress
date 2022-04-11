/// <reference types = "Cypress" />
/// <reference types = "Cypress-iframe" />
import 'cypress-iframe'

describe('My Frames Suite', function() {

    it('My FirstTestCase', function() {

        cy.visit(Cypress.env('url') + '/AutomationPractice/')

//install iframe plugin first --   npm install -D cypress-iframe

cy.frameLoaded('#courses-iframe') // change focus to iframe

cy.iframe().find('a[href*="mentorship"]').eq(0).click() // click the required link with the one with index 0

cy.iframe().find("h1[class*='pricing-title']").should('have.lenght', 2) // assert that the div has 2 elem 


})

})
