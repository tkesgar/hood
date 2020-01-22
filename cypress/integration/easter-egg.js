it("should show easter egg Hood", () => {
  cy.visit("/");

  cy.get("body").type("h");

  cy.get('[data-cy="easter-egg-hood"]');
  cy.contains("Close");

  cy.screenshot("easter-egg-hood");
});

it("should show easter egg Cute Hood", () => {
  cy.visit("/");

  cy.get("body").type("{ctrl}{shift}h");

  cy.get('[data-cy="easter-egg-cute-hood"]');
  cy.contains("Close");

  cy.screenshot("easter-egg-cute-hood");
});
