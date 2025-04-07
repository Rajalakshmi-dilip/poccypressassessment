describe('Radiobutton handling', () => {
    it('should handle the radio button', () => {
       
        cy.visit('https://practice.expandtesting.com/radio-buttons');
        cy.get(':nth-child(1) > .card > .card-body > .row > .row-md-6 > :nth-child(3)').click();
        cy.get('#red').check();
        cy.get('#blue').check();
        cy.get('#basketball').check();
        cy.get('#football').check();
        
    })
})