/// <reference types = "Cypress" />

const { get } = require("lodash")

describe('My ChildTab Suite', function() {

it('My FirstTestCase', function() {

    cy.visit(Cypress.env('url') +'/AutomationPractice/')

//i removed the target atribute so that the link will open in the same tab
// (otherwise the target attribute says it will open in a new tab) cos cypress can't handle tab switching
cy.get('#opentab').invoke('removeAttr', 'target').click()

//assert that we navigated to the requested page
cy.url().should('include' , 'rahulshettyacademy') 

//navigate to previous page (sort of hitting back button in the browser)
cy.go('back')




})

})
