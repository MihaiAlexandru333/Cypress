import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'

const homePage = new HomePage()   

const productPage = new ProductPage()

Given('I open the ECommerce Page', function() {

    cy.visit(Cypress.env('url') + '/angularpractice/')

})


When('I add items to Cart',function()  {         //if the function has no name i can replace 'function()' with '() =>' but in stepdef with hooks Mocha does not support it
                                                // the Mocha hook with Cucumber is used before each test to initiate the data variable, if the hook is not used i can use the shortcut
    homePage.getShopTab().click()

    this.data.productName.forEach(function(element) { 
    
        cy.selectProduct(element)  
    
    });
    
    productPage.getCheckout().click()

})

And ('Validate the total prices' , function()  {

    var sum = 0

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

Then ('select the country submit and verify ThankYou', function() {

    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()

    cy.get('#country').type('India')

    cy.get('.suggestions > ul > li > a').click()

    cy.get('#checkbox2').click({force:true})

    cy.get('input[type="submit"').click()

    cy.get('.alert').should('contain.text','Success')

})

})