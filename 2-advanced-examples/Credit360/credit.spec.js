/// <reference types = "cypress" />
describe ('Credit Application', () =>{
    it('Navigate to URL', () =>{
        cy.visit('https://fintrakcredit360web2.azurewebsites.net')
        //cy.wait(6000)
    });

    it('Ensure user can Login', () =>{
        cy.get('.m-t-60 > .col-xs-12 > .form-control').type('abidoyet')
        cy.get(':nth-child(3) > .col-xs-12 > .form-control').type('testing')
        cy.get('.col-xs-12 > .btn').click()
        cy.wait(60000)
    });

    it('Ensure Admin works', () =>{
        
        cy.get(':nth-child(2) > .ripplelink.ng-tns-c1-0 > span.ng-tns-c1-0').click()
        cy.wait(10000)
        cy.get('span.ng-tns-c1-4').click()
        cy.wait(8000)

    });
    it('Ensure user can open Customer management', () => {
        cy.get(':nth-child(3) > .ripplelink.ng-tns-c1-22 > span.ng-tns-c1-22').click()
        cy.get(':nth-child(1) > .ripplelink > .ng-tns-c1-122').click()
        cy.get(':nth-child(2) > .ripplelink > .ng-tns-c1-7').click()
        cy.get(':nth-child(3) > .ripplelink > .ng-tns-c1-79').click()

    });

    it('Does Approval work', () => {
        cy.get(':nth-child(4) > .ripplelink.ng-tns-c1-0 > span.ng-tns-c1-0').click()

    })
    it('Ensur Credit works', () =>{
        cy.get(':nth-child(6) > .ripplelink.ng-tns-c1-0 > span.ng-tns-c1-0').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .ripplelink.ng-tns-c1-13 > span.ng-tns-c1-13').click()
        cy.wait(2000)
        cy.get(':nth-child(6) > .ripplelink > .ng-tns-c1-14').click()
        cy.wait(10000)
        cy.get('#startLoanTypeId').click()
        cy.wait(10000)
        
    });
});
