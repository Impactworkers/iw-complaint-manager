describe("template spec", () => {
    it("passes", () => {
        cy.visit("https://localhost:3000");
        expect(true).to.equal(true);
    });
});
