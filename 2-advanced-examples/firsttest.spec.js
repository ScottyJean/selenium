///(referrence types = "Cypress" /)
describe('My Test', function(){

    it('Visit the URL', function(){

        cy.visit('http://fintrakcredit360web2.azurewebsites.net')
        cy.wait(10000)
    });

    it('login', function(){
        cy.get('.m-t-60 > .col-xs-12 > .form-control').type('Abidoyet')
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
        cy.get('.col-xs-12 > .btn').click()
        cy.wait(2000)
        cy.get('#topbar-menu-button > .material-icons').click()
    });
});