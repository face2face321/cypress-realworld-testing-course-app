describe("first tests", () => {
    it("go to page", () => {
      cy.visit("https://hexlet-products-store.vercel.app")
      cy.get(".page-link").contains("Next").click()
    })

    it("Go to cart", () => {
        cy.visit("https://hexlet-products-store.vercel.app")
        cy.get(":nth-child(2) > .nav-link").click()
    })

    it("Go to Instock", () => {
      cy.visit("https://hexlet-products-store.vercel.app")
      cy.get("#isInStock").click()
    })

    it("title search", () => {
      cy.visit("https://hexlet-products-store.vercel.app")
      cy.get("h6").eq(0).contains("iPhone 9")
    })

    it("Add item to cart", () => {
      cy.visit("https://hexlet-products-store.vercel.app")
      cy.get(".card-body").eq(0).contains("Add to cart").click()
      cy.get(".nav-link").contains("Cart").click()
    })

    it("View product card", () => {
      cy.visit("https://hexlet-products-store.vercel.app")
      cy.get(".card-body").eq(0).click()
    })
})