///<reference types = "cypress" />
describe ('Selenium Easy', () =>{
    it('Navigate to URL', () =>{
        cy.visit('https://www.seleniumeasy.com/')
        cy.contains('Free selenium tutorials for beginners and experts')


        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          });
          
          it('fails to visit website 1', function () {
            cy.visit('https://harper-morpho-luna.myshopify.com')
            

          });
    });

    it('Ensure user can pick selenium dropdown', () =>{
        cy.get(':nth-child(2) > .dropdown-toggle').click()
        cy.wait(5000)
        // cy.get('.open > .dropdown-menu > .first > a').click()
        // cy.wait(5000)
        cy.get('.open > .dropdown-menu > .last > a').click()
        //cy.get('#at-cv-lightbox-close').click()
    });

    it('Ensure user can click TestNG Suite', () => {
        cy.get('.menu > :nth-child(3) > a').click()
        cy.contains('TestNG Tutorials')
        cy.get('#node-281 > header > h2 > a').click()
        cy.contains('We have customized default testng emailable report using')
        cy.get('.prev > a').click()
    });

    it('Ensure Maven suite works', () =>{
        cy.get('.menu > :nth-child(4) > a').click()
    });

    it(' Ensure user can use Jenkin', () =>{
        cy.get('.menu > :nth-child(5) > a').click()
        cy.contains('Jenkins configuration with Maven and GitHub').click()
    });

    it('Ensure user can pick Protactor', () => {
        cy.get('.menu > :nth-child(6) > a').click()
    })

    it('Ensure Appium works', () =>{
        cy.get('.menu > :nth-child(7) > a').click()
    });

    it('is Katalon working', () => {
        cy.get(':nth-child(9) > a').click()
        cy.get('h2 > span').click()
    })
    it('Ensure More can be selected', () => {
        cy.get('.last.expanded > .dropdown-toggle').click()
        cy.wait(1000)
        cy.get('.open > .dropdown-menu > .first > a').click()
        cy.wait(1000)
        //cy.get('.open > .dropdown-menu > :nth-child(2) > a').click()
    });
    
});