it("should show comic content", () => {
  cy.visit("/666");

  cy.contains("Silent Hammer");
  cy.contains("#666");
  cy.contains("23-11-2009");
  cy.contains("I bet he'll keep quiet for a couple weeks and then--");

  cy.get('img[src="https://imgs.xkcd.com/comics/silent_hammer.png"]');
});

it("◀️ should change comic to previous", () => {
  cy.visit("/666");

  cy.contains("◀️").click();

  cy.contains("#665");
});

it("▶️ should change comic to next", () => {
  cy.visit("/666");

  cy.contains("▶️").click();

  cy.contains("#667");
});

it("⏮️ should change comic to first", () => {
  cy.visit("/666");

  cy.contains("⏮️").click();

  cy.contains("#1");
});

it("⏭️ should change comic to last", () => {
  cy.request("https://xkcd.com/info.0.json").then(response => {
    const current = response.body.num;

    cy.visit("/666");

    cy.contains("⏭️").click();

    cy.contains(`#${current}`);
  });
});

it("🔀 should change comic to random", () => {
  cy.visit("/666");

  cy.contains("🔀").click();

  cy.contains("#666").not();
});

it("left arrow should change to previous comic", () => {
  cy.visit("/666");
  cy.wait(1000); // eslint-disable-line cypress/no-unnecessary-waiting

  cy.get("body").type("{leftarrow}");

  cy.contains("#665");
});

it("right arrow should change to next comic", () => {
  cy.visit("/666");
  cy.wait(1000); // eslint-disable-line cypress/no-unnecessary-waiting

  cy.get("body").type("{rightarrow}");

  cy.contains("#667");
});

it("F key should change comic to first", () => {
  cy.visit("/666");

  cy.get("body").type("f");

  cy.contains("#1");
});

it("L key should change comic to last", () => {
  cy.request("https://xkcd.com/info.0.json").then(response => {
    const current = response.body.num;

    cy.visit("/666");

    cy.get("body").type("l");

    cy.contains(`#${current}`);
  });
});

it("R key should change comic to random", () => {
  cy.visit("/666");

  cy.get("body").type("r");

  cy.contains("#666").not();
});
