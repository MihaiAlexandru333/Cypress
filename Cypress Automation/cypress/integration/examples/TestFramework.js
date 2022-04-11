/// <reference types = "Cypress" />
/// <reference types = "Cypress-iframe" />
import 'cypress-iframe'
import { result } from 'lodash'
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'


describe('My Framework Suite', function() {

    before(function() {
        //similar to testng annotations it runs a script ONCE before the tests
       
       
        cy.fixture('example').then(function(data) {  //create this function so that i can retrieve data from example.json in fixtures folder

            this.data = data //without this the data variable is available only in this little function but with this.data = data i make it 
                                //available to the entire class so i can acces it from anywhere



        })


    })


it('My FirstTestCase', function() {

const homePage = new HomePage()   // in order to get the elements from PageObject class -- import the class and create an object of that class to have acces to it's methods

const productPage = new ProductPage()

cy.visit(Cypress.env('url') + '/angularpractice/')   // use global variables in cypress.json wraped in "env" : { your global variables }
     // or you can change the url from terminal with "cypress run" -- for all tests or for specific tests
     // "cypress run --spec cypress/integration/examples/TestCaseFile" and for envir add "--env key=value --headed (it runs headless from terminal" from cypress.json file
     


homePage.getEditBox().type(this.data.name)  //retrieve data from "data" variable created to acces data from example.json in fixtures folder

homePage.getGender().select(this.data.gender)

homePage.getTwoWayDataBiding().should('have.value' , this.data.name)

homePage.getEditBox().should('have.attr','minlength','2') // assert that the minleght attribute is 2

homePage.getEntrepreneaur().should('be.disabled')


//custom cypress method from support commands.js --- and
 //in json fixtures if i want a single name i write one name but if i want multiple names i make an array with [] like java

homePage.getShopTab().click()  // navigate to the shop page

//u can use cy.pause() to pause the test at a certain step or .debug() that does the same thing

//get products (productName) from json fixtures array

this.data.productName.forEach(function(element)  { //add products to your cart , the products are from an array in 
    
    cy.selectProduct(element)  //this is a custom method located in support/commands.js

});

productPage.getCheckout().click()

var sum = 0 

//assert the sum of the items in the cart
//iterate through the products in the cart, selecting only the prices of each item
cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

var priceText = $el.text()
//get the price in a format we can use to calculate and assert the total
var res = priceText.split(" ")

res = res[1].trim()

sum = Number(sum) + Number(res) // sum of the items in cart

}).then(function(){   //beeing asyncronous i have to tell javascript to run the log(sum) after the each runs
                      //if not it will prin 0 cos it doesn't wait for the each loop to run
    cy.log(sum)
})


//assert tat the sum of the cart is correct
cy.get('h3 > strong').then(function(element){

    const ammount = element.text()

    var res = ammount.split(" ")

    var total = res[1].trim()

    expect(Number(total)).to.equal(Number(sum)) // expect the total here to be equal to the sum i extracted before

})

cy.get(':nth-child(4) > :nth-child(5) > .btn').click()

cy.get('#country').type('India')

cy.get('.suggestions > ul > li > a').click()

cy.get('#checkbox2').click({force:true})

cy.get('input[type="submit"').click()

cy.get('.alert').should('contain.text','Success')

//for html reporting instead of dashboard i need to install mochawesome with "npm install --save-dev mocha" and "npm install --save-dev mochawesome"

//specify the path to cypress.json with "reporter" : "mochawesome", and from terminal "cypress run --reporter mochawesome"


/*integrate to Jenkins:

in package.json under "scripts" we ca create scripts with "test: terminal comand with specs and etc"
and then i can run it from terminal with just invoking the name of the script under "scripts"

in the terminal "npm run 'test name from scripts in package.json' "




*/




})

})
