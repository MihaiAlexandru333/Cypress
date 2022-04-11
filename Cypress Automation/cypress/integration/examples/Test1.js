/// <reference types = "Cypress" />

describe('My first Test Suite', function() {

it('My FirstTestCase', function() {

//we don't need to have ";" at the end of the statement cos
//cypress takes care od that on it's own   
cy.visit(Cypress.env('url') + '/seleniumPractise/#/')

//type "ca" in the searchbar
cy.get(".search-keyword").type("ca")

//wait for elements to load
cy.wait(2000)

//assert that there are 4 elements returned
//.product:visible cos there is one invisible element and it screws with
//my assertion
cy.get('.product:visible').should('have.length',4)

cy.get('.products').as('productLocator') // assigh products locator to a variable named productLocator withouth the then() method

//parent child change focus to just the div with the products
cy.get('@productLocator').find('.product').should('have.length', 4)

//from the 4 elements focus on the second one and click on add to cart
//index starts from 0
cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function() {

    console.log('each start')   // after click() in order to properly log we need to create a function 
                                //otherwise because cypress is asyncr it will print to browser console before the click and i need it to print after the click is executed
})



//use each method instead of hardcoding the index
cy.get('@productLocator').find('.product').each(($el, index, $list) => {

const textVeg = $el.find('.product-name').text()

if(textVeg.includes('Cashews')) {

    //clikc method is deprecated so we use wrap method instead
    cy.wrap($el).find('button').click() 

}
})

//assert if logo text is the expected one
cy.get('.brand').should('have.text','GREENKART')


//grab the greenkart logo text >> to assign to the logo we need to implement then
//method cos cypress is asyncronous and it freaks out if i assign something to a variable without then method
cy.get('.brand').then(function(logoelement)
{
    cy.log(logoelement.text()) //print text to console
 
})
//const logo = cy.get('.brand')


})

})
