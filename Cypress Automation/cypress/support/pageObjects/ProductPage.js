class ProductPage {


    getCheckout() {

        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').should('be.visible')

    
    }


}

export default ProductPage;