describe("App Sidebar", () => {
  it('should navigate to canvas when "Starred" is clicked', () => {
    // Visit the page where the Sidebar is rendered
    cy.visit("/dashboard"); // Adjust this URL as per your app's root path

    // Click on the "Starred" link
    cy.contains("Starred").click();

    // Verify that the URL has changed to /canvas
    cy.url().should("include", "/canvas");
  });
});
