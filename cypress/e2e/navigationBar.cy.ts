describe("NavigationBar", () => {
    it("should render open button", () => {
        cy.visit("https://localhost:3000");
        cy.get("button").contains("Navigation Bar");
    });

    it("should open and close NavigationBar", () => {
        cy.visit("https://localhost:3000");
        cy.get("button").contains("Navigation Bar").click();
        cy.get("div").contains("Cases").click();
    });
});
