/// <reference types="Cypress" />

import loginPage from "../pages/loginPage"
import homePage from "../pages/homePage";

const login = new loginPage();
const home = new homePage();


let url, username, password;
describe('Orange HRM - Login Tests', () => {

  before(()=>{
    cy.fixture('loginCredentials.json').then((credentials)=>{
      url = credentials.url;
      username = credentials.username;
      password = credentials.password;
    })
  })

  beforeEach(()=>{
    cy.visit(url);
  })


  it('Login with Valid Credentails', () => {
    login.loginWithValidCredentials(username, password);
  })

  it('Login with Invalid Credentails',()=>{
    login.loginWithInvalidCredentials(username,password);
  })
})

describe('Verify the Sidebar menus',()=>{

  before(()=>{
    cy.fixture('loginCredentials.json').then((credentials)=>{
      url = credentials.url;
      username = credentials.username;
      password = credentials.password;
    })
  })

  beforeEach(()=>{
    cy.visit(url);
  })


  it.only('Click on Admin',()=>{
    login.loginWithValidCredentials(username, password);
    home.clickOnSidebarLinks('Admin');
    home.clickOnSidebarLinks('PIM');
    home.clickOnSidebarLinks('Leave');
    home.clickOnSidebarLinks('Time');
    home.clickOnSidebarLinks('Recruitment');
    home.clickOnSidebarLinks('My Info');
    home.clickOnSidebarLinks('Performance');
    home.clickOnSidebarLinks('Dashboard');
    home.clickOnSidebarLinks('Directory');
    home.clickOnSidebarLinks('Maintenance');
    home.clickOnSidebarLinks('Claim');
    home.clickOnSidebarLinks('Buzz');
    home.logoutFromApp();
  })

  
})