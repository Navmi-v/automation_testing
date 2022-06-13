import {LoginPage} from "../pages/login_page"
import { LogedIn } from "../pages/logedIn"

const loginPage = new LoginPage ()
const logedIn = new LogedIn ()

it('login test', () => {

    loginPage.navigate();

    // Login with locked out user
    loginPage.enterUsername('locked_out_user');
    loginPage.enterPassword('secret_sauce');
    loginPage.clickLogin();
    cy.get('[data-test="error"]')
    .should('have.text', "Epic sadface: Sorry, this user has been locked out.");

    //Login with standard user
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="password"]').clear();
    loginPage.enterUsername('standard_user');
    loginPage.enterPassword('secret_sauce');
    loginPage.clickLogin();
    logedIn.checkTitle();
    logedIn.addItem1();
    logedIn.addItem2();
    logedIn.addItem3();
    logedIn.addItem4();
    logedIn.addItem5();
    logedIn.addItem6();
    logedIn.clickOnCart();
    logedIn.validateCart();
    logedIn.checkout('Test', 'User', '17729');
    logedIn.checkoutOverview();
    logedIn.orderConfirmation();
    logedIn.logOut();

    //Login with performance_glitch_user
    loginPage.enterUsername('performance_glitch_user');
    loginPage.enterPassword('secret_sauce');
    loginPage.clickLogin();
    logedIn.checkTitle();
    logedIn.addItem1();
    logedIn.addItem2();
    logedIn.addItem3();
    logedIn.addItem4();
    logedIn.addItem5();
    logedIn.addItem6();
    logedIn.clickOnCart();
    logedIn.validateCart();
    logedIn.checkout('Test', 'User', '17729');
    logedIn.checkoutOverview();
    logedIn.orderConfirmation();
    logedIn.logOut();

    //Login with problem_user
    loginPage.enterUsername('problem_user');
    loginPage.enterPassword('secret_sauce');
    loginPage.clickLogin();
    logedIn.checkTitle();
    logedIn.addItem1();
    logedIn.addItem2();
    logedIn.addAllItems();
    logedIn.clickOnCart();
    logedIn.validateCart();
    logedIn.incorrectCheckout('ABC', 'XYZ', '16862');
    logedIn.logOut();    
    
})
