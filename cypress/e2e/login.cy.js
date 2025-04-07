import LoginPage from '../support/login.po';

describe('Login Page Tests', () => {
  const loginPage = new LoginPage();

  it('should login into the application', () => {
   
    cy.visit('https://ecommerce-admin.azureedge.net/'); 

    loginPage.getEmailInput().type('ecommerceadmin@yopmail.com'); 

    loginPage.getPasswordInput().type('Test@123'); 
    
    // Verify the login button is visible
    //Handling Assertion
    loginPage.verifySubmitButtonIsVisible();

    loginPage.getSubmitButton().click();
  });
});