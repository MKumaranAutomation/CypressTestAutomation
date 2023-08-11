class loginPage{

    usernameTxtField(){
        return cy.get('input[name="username"]')
    }

    passwordTxtField(){
        return cy.get('input[name="password"]')
    }

    invalidCredentialMessage(){
        return cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text')
    }

    signInBtn(){
        return cy.get('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]')
    }

    // LoginPage Functions
    IsInvalidCredentialsMessageDisplayed(){
        this.invalidCredentialMessage().should('be.visible')
    }

    loginWithValidCredentials(username,password){
        this.usernameTxtField().type(username);
        this.passwordTxtField().type(password);
        this.signInBtn().click();
    }

    loginWithInvalidCredentials(username,password){
        this.usernameTxtField().type(username);
        this.passwordTxtField().type("password");
        this.signInBtn().click();
        this.IsInvalidCredentialsMessageDisplayed();
        
    }
}
export default loginPage;