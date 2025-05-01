describe('settings',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes("Failed to execute 'removeChild' on 'Node'")) {
          return false; // Ignore the removeChild error
        }
      });
      beforeEach(()=>{
        cy.login();
        // Click to open the dropdown menu
        cy.get('button.dropdown-toggle').click();
        cy.get('.dropdown-menu').should('be.visible');
    // Now dropdown menu appears -> click Settings
        cy.get('a.dropdown-item').contains('Settings');
        cy.get('.dropdown-menu > :nth-child(1)').click();
      })
      
    it('featurecatalogue',()=>{
     
    cy.get('#left-tabs-example-tab-featureCatalogue').click();
    cy.get('#inputGroupFile').attachFile('S-124 FC_(2.0.0)_1106.xml');
    cy.get('[title="Save"] > .bi').click();
    //cy.get('.modal-footer').contains('Yes').click();

    })
    it('templates',()=>{
        cy.get('#left-tabs-example-tab-Templates').click();
        cy.get('#left-tabs-example-tabpane-Templates > .card > .p-2 > .sc-Qotzb > .bi').click();
        cy.get('#Name').type('Test')
        cy.typeandselector('#typeHeadGeneralType','Aquaculture and Fishing Installations')
        cy.typeandselector('#typeHeadCategory','Aquaculture and Fishing Installations')
        cy.typeandselector('#typeHeadTypeDetails','Aquaculture Site')
        cy.get('#CustomDetails').type('Aquaculture and Fishing Installations');
        cy.get('.card-footer > .hstack > .ms-auto > .bi').click()

    })
    it('deletetemplate',()=>{
      cy.get('#left-tabs-example-tab-Templates').click();
      cy.get('#DataTables_Table_8') // Find the table
      .contains('tr', 'Test') // Find the row containing specific text
      .find('i[title="Delete"]')       // Find the delete icon inside that row
      .click();
      cy.get('.btn-warning').click();
    })
    it('addLocalarea',()=>{
      cy.get('#left-tabs-example-tab-LocalAreas').click();
      // Cypress command to click the "Add Local Area" button
    cy.get('button[title="Add Local Area"]').click();
    cy.get('#Name').type('area10');
    cy.get('#Description').type('area10');
    cy.typeandselector('#typeHeadAreaType','Area');
    cy.typeandselector('#typeHeadMessageType','Local Navigational Warning');

   const coords = `-29.390623569488525 25.101514050529474 -17.39062070846557 40.321976230151165 -14.015622138977049 29.759289010597627 -21.890623569488525 17.599343856941843 -29.390623569488525 25.101514050529474`;

  cy.get('#coordinates')
  .click()
  .clear()
  .type(coords, { delay: 0 });

  cy.wait(5000);
  
  cy.get('.card-footer > .hstack > .ms-auto').click()
})

it('deleteLocarea',()=>{
  cy.get('#left-tabs-example-tab-LocalAreas').click();
      cy.get('#DataTables_Table_9') // Find the table
      .contains('tr', 'area10') // Find the row containing specific text
      .find('i[title="Delete"]')       // Find the delete icon inside that row
      .click();
      cy.get('.btn-warning').click();
})
})

