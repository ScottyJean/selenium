///<reference types = "cypress" />
describe ('Credit360 Test Case', () =>{
    it('Navigate to URL', () =>{
        cy.visit('https://fintrakcredit360web2.azurewebsites.net')
        cy.wait(1000)
    });

    it('Login', () =>{
        cy.get('.m-t-60 > .col-xs-12 > .form-control').type('abidoyet')
        cy.wait(2000)
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
        cy.get('.col-xs-12 > .btn').click()
        cy.wait(30000)
    });
});