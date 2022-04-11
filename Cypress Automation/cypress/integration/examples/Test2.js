/// <reference types = "Cypress" />

const CliTable3 = require("cli-table3")

describe('My second Test Suite', function() {

it('My FirstTestCase', function() {

//we don't need to have ";" at the end of the statement cos
//cypress takes care od that on it's own   
cy.visit(Cypress.env('url') + "/seleniumPractise/#/")

//type "ca" in the searchbar
cy.get(".search-keyword").type("ca")

//wait for elements to load
cy.wait(2000)

cy.get('.products').as('productLocator') // assigh products locator to a variable named productLocator withouth the then() method

//use each method instead of hardcoding the index
cy.get('@productLocator').find('.product').each(($el, index, $list) => {

const textVeg = $el.find('.product-name').text()

if(textVeg.includes('Cashews')) {

    //clikc method is deprecated so we use wrap method instead
    cy.wrap($el).find('button').click() 

}
})

cy.get('.cart-icon > img').click()

cy.contains('PROCEED TO CHECKOUT').click()

cy.contains('Place Order').click()

})

})
