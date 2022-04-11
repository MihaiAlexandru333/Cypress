/// <reference types = "Cypress" />

const { get } = require("lodash")

describe('My checkboxAndStuff Suite', function() {

it('My FirstTestCase', function() {

//checkboxes

cy.visit(Cypress.env('url') +'/AutomationPractice/')

cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')  // check the checkbox, assert if it is checked and assert if the correct box was checked

cy.get('#checkBoxOption1').uncheck().should('not.be.checked')  // uncheck it and assert if it's not checked

cy.get('input[type = "checkbox"]').check(['option2' , 'option3'])  // check the multiple boxes with values option2 and option3

//static dropdown

cy.get('select').select('option2').should('have.value' , 'option2') // select option 2 from dropdown and assert if i selected the right option

//dynamic dropdown

cy.get('#autocomplete').type('ind') //type ind in search bar

//iterate through each of the 3 items nad click the one with India
cy.get('.ui-menu-item div').each(($e1, index, $list) => {
    
    if($e1.text()==="India") {

        $e1.trigger("click")
    }

})

cy.get('#autocomplete').should('have.value' , 'India')

//visible and invisible objects

cy.get('#displayed-text').should('be.visible')

cy.get('#hide-textbox').click() // click the hide textbox to hide the object

cy.get('#displayed-text').should('not.be.visible') //assert that the object is not visible

cy.get('#show-textbox').click() //click to show the textbox

cy.get('#displayed-text').should('be.visible') // assert if the item is visible

//radio buttons

cy.get('[value="radio2"]').check().should('be.checked')


} )

} )

