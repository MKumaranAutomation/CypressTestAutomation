class loginPage{

    usernameTxtField(){
        return cy.get('input[name="username"]')
    }

    passwordTxtField(){
        return cy.get('input[name="password"]')
    }

    signInBtn(){
        return cy.get('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]')
    }

    // LoginPage Functions

    loginWithValidCredentials(username,password){
        this.usernameTxtField().type(username);
        this.passwordTxtField().type(password);
        this.signInBtn().click();
    }
}
export default loginPage;