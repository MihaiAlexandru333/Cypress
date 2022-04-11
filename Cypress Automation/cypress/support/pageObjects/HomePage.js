class HomePage {

getEditBox() {

    return cy.get(':nth-child(1) > .form-control')

}

getTwoWayDataBiding() {

    return cy.get(':nth-child(4) > .ng-untouched')

}

getGender() {

    return cy.get('#exampleFormControlSelect1')

}

getEntrepreneaur () {

    return cy.get('#inlineRadio3')

}

getShopTab() {

    return cy.get(':nth-child(2) > .nav-link')

}


}


export default HomePage; // to make all the objects available on the entire framework