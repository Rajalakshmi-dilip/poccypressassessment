describe('API Authentication Test', () => {
  it('should authenticate successfully', () => {
      cy.request({
          method: 'POST',
          url: 'http://20.203.35.168/api/auth/login',
          headers: {
              platform: 'admin',
              'Content-Type': 'application/json'
          },
          body: {
              "email": "ecommerceadmin@yopmail.com",
              "password": "Test@123"
          }
      }).then((response) => {
          // Validate the status code
          expect(response.status).to.eq(200);

          
      });
  });
});
