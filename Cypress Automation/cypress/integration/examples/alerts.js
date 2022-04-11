/// <reference types = "Cypress" />

const { get } = require("lodash")

describe('My Alerts Suite', function() {

it('My FirstTestCase', function() {

    cy.visit(Cypress.env('url') + "/AutomationPractice/")

cy.get('#alertbtn').click() // pop alert and cypress takes care of it

cy.get('[value="Confirm"]').click() //confirm alert

//window:alert is an event that i can trigger from cypress in the browser, i can't see it when test runs cos cypress takes care of it on it's own
cy.on('window:alert', (str) => {

//mocha compare strings
    expect(str).to.equal('Hello , share this practice page and share your knowledge')

})

//window:confirm is an event that i can trigger from cypress in the browser, i can't see it when test runs cos cypress takes care of it on it's own
cy.on('window:confirm', (str) => {

    //mocha compare strings
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
    
    })
    




})

})
