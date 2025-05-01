//import L from 'leaflet';

describe('template spec', () => {
  
  it('createNW', () => {
    
    cy.login();
    cy.get('#S124NavigationalWarnings').click()
    cy.get('#uncontrolled-tab-example-tab-createNavWarn').click();
    cy.get('#btn-LineString').click();
    
    cy.get("#map-container").should("be.visible");
    const pixelPoints = [
      [250, 300], // Approximate pixel position for [-141.5778, 55.3852]
      [450, 400], // Approximate pixel position for [-126.2028, 51.0095]
    ];

    pixelPoints.forEach(([x, y]) => {
      cy.get("#map-container").trigger("mousemove", x, y);
      cy.get("#map-container").click(x, y);
    });

    // Finish drawing (if a double-click is required)
    const [lastX, lastY] = pixelPoints[pixelPoints.length - 1];
    cy.get("#map-container").dblclick(lastX, lastY);
    cy.typeandselector('#typeHeadWarningType','Coastal In-Force Bulletin');
 // cy.get('#typeHeadWarningType').clear().type('Coastal In-Force Bulletin');
 // cy.contains('.dropdown-item', 'Coastal In-Force Bulletin').click();
    cy.typeandselector('#typeHeadProductionAgency','CCG');
    cy.typeandselector('#typeHeadNavWarnTypeGeneral','Aids to Navigation Changes');
    cy.typeandselector('#NavWarnCategory','all AtoN unreliable');
    cy.typeandselector('#TypeDetails','All Aids To Navigation Unreliable');
    cy.selectMultiple(['6624[104]', '4014[14]','4021[21]','19002[22]','4209[209]']);
    cy.get('#referenceMessageId').type('NW_18_2025');
    cy.contains('.dropdown-item','NW_18_2025').click();
    cy.get('#LocalityName').type('Freetown');
    cy.get('.p-1 > .hstack > .ms-auto').click();
  })
})