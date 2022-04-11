/// <reference types = "Cypress" />

const { get } = require("lodash")

describe('My Windows Suite', function() {

it('My FirstTestCase', function() {

    cy.visit(Cypress.env('url') + '/AutomationPractice/')

//.prop() is another jquery method to get the atribute of an object cos cypress doesn't know how to
cy.get('#opentab').then(function(e1) {

    const url = e1.prop('href') // get the url of the element with the url as the atribute

    cy.log(url)   // if u change the maint domain of the url in the test cypress again freaks out, it can handle only subdomains of the first cy.visit()

    cy.visit(url)


})




})

})
