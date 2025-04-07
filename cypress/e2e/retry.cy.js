import LoginPage from '../support/login.po';

describe('Retry mechanism', () => {
  const loginPage = new LoginPage();
  
  // Handling Retry Mechanism - 3 attempts
 
  it('should retry the test if it fails upto 3 attempts', { retries: 2 }, () => {
   
    cy.visit('https://ecommerce-admin.azureedge.net/');

    loginPage.getEmailInput().type('ecommerceadmin@yopmail.com');

    loginPage.getPasswordInput().type('Test123'); // Intentionally incorrect password to trigger retry

    loginPage.getSubmitButton().click();

    // Verify the URL contains '/dashboard'
    //Handling Assertion
    
    loginPage.verifyDashboardUrl();
  });
});