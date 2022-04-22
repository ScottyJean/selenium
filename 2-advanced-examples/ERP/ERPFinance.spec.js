///<reference types = "cypress" />
describe('ERP Test Case', () =>{
    it('Navigate to URL', () =>{
        cy.visit('https://finnewerpclient.azurewebsites.net/')
        cy.wait(10000)
    });

    it('Login', () =>{
        cy.get('.kt-form > :nth-child(1) > .form-control').type('admin')
        cy.get(':nth-child(2) > .form-control').type('123456')
        cy.get('.kt-checkbox').click()
        cy.get('#forget-password').click
        cy.get('.btn').click
        


    });




});