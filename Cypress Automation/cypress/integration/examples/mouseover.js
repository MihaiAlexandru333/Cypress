/// <reference types = "Cypress" /> 

const { get } = require("lodash")

describe('My Alerts Suite', function() {

it('My mouseover', function() {

    cy.visit(Cypress.env('url') + '/AutomationPractice/')

cy.get('.mouse-hover-content').invoke('show') //use jquerry invoke to show the hidden element

//cy.get('#mousehover') - refers to the grandfather element of the 'Top' element i need to click so i need to cy.get('.mouse-hover-content') for the direct parent element
//jquerry got confused cos the element was not a direct parent

cy.contains('Top').click() // click on the element that contains top

cy.url().should('include', 'top') //assert that the page the element has opened is the corect one ( it has top in the link)

//you can force click on hidden elements without hovering the mous if the requirement does not explicitly require moseover

//cy.contains('Top').click({force:true})

})

})
