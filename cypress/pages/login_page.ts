export class LoginPage {

    navigate(){
        cy.visit('https://www.saucedemo.com/');
    }

    enterUsername(username: string){
        cy.get('[data-test="username"]').type(username);
    }

    enterPassword(password: string){
        cy.get('[data-test="password"]').type(password);
    }

    clickLogin(){
        cy.get('[data-test="login-button"]').click();
    }
}
