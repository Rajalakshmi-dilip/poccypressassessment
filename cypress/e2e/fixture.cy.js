import LoginPage from '../support/login.po';

describe('import fixtures data', () => {
  const loginPage = new LoginPage();

  it('should login into the application', () => {
   
    cy.visit('https://ecommerce-admin.azureedge.net/'); 

    //Import data from fixtures and page object
    
    cy.fixture('loginData').then((loginData) => {
  
    loginPage.getEmailInput().type(loginData.email); 

    loginPage.getPasswordInput().type(loginData.password); 
 
    loginPage.getSubmitButton().click();
  });
});
});