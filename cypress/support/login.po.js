class LoginPage {
    // Selectors
    getEmailInput() {
      return cy.get('[data-testid="email-input"]');
    }
  
    getPasswordInput() {
      return cy.get('[data-testid="password-input"]');
    }
  
    getSubmitButton() {
      return cy.get('[data-testid="submit"]');
    }
  
    // Actions
    verifySubmitButtonIsVisible() {
      this.getSubmitButton().should('be.visible');
    }
    verifyDashboardUrl() {
        cy.url().should('include', '/dashboard');
      }
  }
  
  export default LoginPage;