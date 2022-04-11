/// <reference types = "Cypress" /> 

const { get } = require("lodash")

describe('My webTables Suite', function() {

it('My FirstTestCase', function() {

    cy.visit(Cypress.env('url') + '/AutomationPractice/')


//iterate through the table , css selector to read just the middle column and iterate through each item in the second column
cy.get('tr td:nth-child(2)').each(($e1 , index , $list) => {

    var text = $e1.text()

    if(text.includes('Python')) {

        //move to the sibling column with the price and assert if it is what i expect
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) { //can't extract the price with text() cos this is a jQuerry obj and the promise will not be resolved

            const priceText = price.text()

            expect(priceText).to.equal('25')

        }) 

    }

})

})

})
