beforeEach(function() {

    cy.fixture('example').then(function(data) {  //when writing cucumber hooks Mocha does not support the shortcut '() =>' have to write function() 
        
        //create this function so that i can retrieve data from example.json in fixtures folder

        this.data = data //without this the data variable is available only in this little function but with this.data = data i make it 
                            //available to the entire class so i can acces it from anywhere

    })
})