describe("template spec", () => {
    it("passes", () => {
        cy.visit("http://localhost:3000");
        expect(true).to.equal(true);
    });
});
