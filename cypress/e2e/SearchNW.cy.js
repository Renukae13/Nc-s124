describe('searchNavWarn',()=>{
  beforeEach(()=>{
    cy.login();
       
  })
  it('listnavwarn',()=>{
   cy.get('#S124NavigationalWarnings').click();
   cy.wait(5000);
    cy.get('.p-3 > .text-center > .mt-2').click();
    })
    it('measuredistance',()=>{
    cy.get('#Measure').click();
    cy.get('#type').select('length');
    cy.get('#units').select('meters');
    cy.get('#measureBtn').click();
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
    cy.get('#btn-Clear').click();
    cy.get('#FeatureInfo').click();
    })
}
)