///<reference types = "cypress" />
describe ('demoqa', () =>{
    it('Navigate to URL', () =>{
        cy.visit('https://compendiumdev.co.uk/')
    });
    it('Ensure Title displays', () =>{
        cy.contains('Do you want to test and develop software better?')
    })
});