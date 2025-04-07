import LoginPage from '../support/login.po';

describe('Debug Tests', () => {
  const loginPage = new LoginPage();

  it('should login into the application', () => {
   
    cy.visit('https://ecommerce-admin.azureedge.net/'); 

    loginPage.getEmailInput().type('ecommerceadmin@yopmail.com'); 

    loginPage.getPasswordInput().type('Test@123'); 
     
    // Handling cypress debugging
    cy.debug();

    loginPage.getSubmitButton().click();
  });
});