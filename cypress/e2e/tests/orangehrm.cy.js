import loginPage from "../pages/loginPage"

const login = new loginPage();


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


  it('Login to Orange HRM Demo Site', () => {
    login.loginWithValidCredentials(username, password);
  })
})