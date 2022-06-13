export class LogedIn {

    checkTitle(){
        cy.get('.title').should('contain', "Products");
    }

    addItem1() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_badge')
        .should('have.class', 'shopping_cart_badge')
        .should('be.visible')
        .should('have.text', '1')
    }

    addItem2() {
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('.shopping_cart_badge')
        .should('have.class', 'shopping_cart_badge')
        .should('be.visible')
        .should('have.text', '2')
    }

    addItem3() {
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('.shopping_cart_badge')
        .should('have.class', 'shopping_cart_badge')
        .should('be.visible')
        .should('have.text', '3')
    }

    addItem4() {
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('.shopping_cart_badge')
        .should('have.class', 'shopping_cart_badge')
        .should('be.visible')
        .should('have.text', '4')
    }

    addItem5() {
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('.shopping_cart_badge')
        .should('have.class', 'shopping_cart_badge')
        .should('be.visible')
        .should('have.text', '5')
    }

    addItem6() {
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.get('.shopping_cart_badge')
        .should('have.class', 'shopping_cart_badge')
        .should('be.visible')
        .should('have.text', '6')
    }

    clickOnCart(){
        cy.get('.shopping_cart_link').click();
    }

    validateCart(){
        cy.get('.title').should('have.text', "Your Cart");
        cy.get('[data-test="checkout"]').click();
    }

    checkout(firstName: string, lastName: string, pincode: string){
        cy.get('.title').should('have.text', "Checkout: Your Information");
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(pincode);
        cy.get('[data-test="continue"]').click();

    }

    checkoutOverview(){
        cy.get('.title').should('have.text', "Checkout: Overview");
        cy.get('.summary_total_label').should('have.text', 'Total: $140.34');
        cy.get('[data-test="finish"]').click();    
    }

    orderConfirmation(){
        cy.get('.title').should('have.text', "Checkout: Complete!")
        cy.get('.complete-header').should('have.text', "THANK YOU FOR YOUR ORDER");
        cy.get('.complete-text').should('have.text', "Your order has been dispatched, and will arrive just as fast as the pony can get there!")
    }

    logOut(){
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    }

    addAllItems(){
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
        cy.wait(3000);
        cy.get('.shopping_cart_badge')
        .should('have.class', 'shopping_cart_badge')
        .should('be.visible')
        .should('have.text', '3')
        cy.contains('Add to cart').should('be.visible');
    } 

    incorrectCheckout(firstName: string, lastName: string, pincode: string){
        cy.get('.title').should('have.text', "Checkout: Your Information");
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(pincode);
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="error"]').should('have.text', "Error: Last Name is required");

    }

}
