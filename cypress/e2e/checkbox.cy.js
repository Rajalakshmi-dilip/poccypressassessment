describe('checkbox handling', () => {
    it('should handle the checkbox', () => {
       
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.get('#checkboxes > :nth-child(1)').check();
        cy.get('#checkboxes > :nth-child(3)').uncheck();
        
    })
})