///<reference types = "cypress" />
describe ('demoqa', () =>{
    it('Navigate to URL', () =>{
        cy.visit('https://demoqa.com')
    });

    it('Ensure User can use Element', () =>{
        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg > path').click()
    });

    it('Ensure Textbox work', () => {
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
        cy.get('#userName').type('Oke Esther')
        cy.get('#userEmail').type('yemioke08@gmail.com')
        cy.get('#currentAddress').type('Online Bill Way, Parabank Street, Califonia')
        cy.get('#permanentAddress').type('13, HP Crescent, Dell Express, Nigeria')
        cy.get('#submit').click()
    });

    it('Ensure Check Box works', () => {
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
        cy.get('.rct-collapse > .rct-icon').click()
        cy.get('.rct-node-expanded > ol > :nth-child(1) > .rct-text > .rct-collapse > .rct-icon').click()
        cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > .rct-text > .rct-collapse > .rct-icon').click()
        cy.get(':nth-child(3) > .rct-text > .rct-collapse > .rct-icon').click()
    });

    it('Ensure Radio Button works', () => {
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click()
        cy.get(':nth-child(2) > .custom-control-label').click()
    });

    it('Ensure user can click Web Tables', () => {
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type('Esther')
        cy.get('#lastName').type('Oke')
        cy.get('#userEmail').type('email@example.com')
        cy.get('#age').type('45')
        cy.get('#salary').type('100000000')
        cy.get('#department').type('Quality Assurance')
        cy.get('#submit').click()
        cy.get('#searchBox').type('Esther')
    });

    it('Ensure user can click Buttons', () => {
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()
        
    });

    it('Ensure User can click Links', () => {
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').click()
        //cy.get('#simpleLink').click()
        cy.get('#created').click()
        cy.get('#no-content').click()
        cy.get('#bad-request').click()
    })

    it('Broken Link-Images', () => {
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-6').click()
    })

    it('Upload and Download', () => {
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-7').click()
        cy.get('#downloadButton').click()
        const fileuplod = 'example.json'
        cy.get('#uploadFile').attachFile(fileuplod)
    })

    it('Dynamic Properties', () => {
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-8').click()
    })
});
