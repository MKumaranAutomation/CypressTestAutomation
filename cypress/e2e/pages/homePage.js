import loginPage from "./loginPage";
// const jsonAssertion = require("soft-assert");


const login = new loginPage();

class homePage{

    sidebarLinks(){
        return cy.get('.oxd-text.oxd-text--span.oxd-main-menu-item--name');
    }

    sidebarLinksLandingPage(){
        return cy.get('.oxd-topbar-header-breadcrumb-module');
    }

    loggedInUser(){
        return cy.get('.oxd-userdropdown-name');
    }

    userProfileOptions(){
        return cy.get('.oxd-userdropdown-link');
    }


    clickOnSidebarLinks(link){
        this.sidebarLinks().each(($el,index,$list)=>{
            if($el.text() == link){
                cy.wrap($el).click();
                 this.sidebarLinksLandingPage().should('have.text',`${$el.text()}`);
            }
        })
    }

    clickOnLoggedInUserName(){
        this.loggedInUser().click();
    }

    clickOnUserProfileOption(option){
        this.clickOnLoggedInUserName();
        this.userProfileOptions().each(($el,index, $list)=>{
            if($el.text() == option){
                cy.wrap($el).click();
            }
        })
    }

    logoutFromApp(){
        this.clickOnUserProfileOption('Logout');
        login.isLoginPageDisplayed();

    }
    

}
export default homePage;