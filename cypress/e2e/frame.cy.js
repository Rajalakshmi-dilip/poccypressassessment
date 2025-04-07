describe('Handle iframe and type in TinyMCE', () => {
    it('should type "Hello world" in the TinyMCE text area', () => {
      
      cy.visit('https://the-internet.herokuapp.com/iframe'); 
  
      // Handling the iframe
      cy.get('iframe#mce_0_ifr').then(($iframe) => {
        const iframeBody = $iframe.contents().find('body#tinymce');
  
        cy.wrap(iframeBody).type('Hello world');
      });
    });
  });