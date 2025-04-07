describe('Recording script and Drodown handling', () => {
    it('should handle the dropdown', () => {
        /* ==== Generated with Cypress Studio ==== */

        //Recording script with cypress studio
        cy.visit('https://ecommerce-admin.azureedge.net/');
        cy.get('[data-testid="email-input"]').type('ecommerceadmin@yopmail.com');
        cy.get('.md\\:col-12').click();
        cy.get('[data-testid="password-input"]').type('Test@123');
        cy.get('[data-testid="submit"]').click();
        cy.get('#p-accordiontab-0').click();
        cy.get('ul.ng-star-inserted > :nth-child(1) > a').click();

    //Handling dropdown
        cy.get('[data-testid="delivery-method-filter"] > .p-dropdown > .p-dropdown-trigger').click();
        cy.get('[ng-reflect-label="Store Pickup"] > .p-ripple').click();
        /* ==== End Cypress Studio ==== */
    })
})