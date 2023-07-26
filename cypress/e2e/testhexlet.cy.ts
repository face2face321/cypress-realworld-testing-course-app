describe("first tests", () => {
    beforeEach(() => {
      cy.visit("https://hexlet-products-store.vercel.app")
    })

    context("tests on home page", () => { 
    it("go to page", () => {
      cy.get(".page-link").contains("Next").click()
      cy.get("h6").eq(29).contains("Key Holder")
    })

    it("Parameter selection", () => {
      cy.get("#Apple-check").click()
      cy.get("#Samsung-check").click()
    })

    it("title search", () => {
      cy.get("h6").eq(0).contains("iPhone 9")
    })

    it("search box",() => {
      cy.get(".nav-link").contains("Category").click()
      cy.get(".dropdown-menu").contains("smartphones").click()
      cy.get(".mb-3").type("Samsung")
    })

    it("price form test",() => {
      cy.get("[min=0]").type(500)
      cy.get("[placeholder=11190]").type(4000)
    })
  }) 

   context("page transition tests", () => {  
    it("Add item to cart", () => {
      cy.get(".card-body").eq(0).contains("Add to cart").click()
      cy.get(".nav-link").contains("Cart").click()
    })

    it("Go to cart", () => {
      cy.get(":nth-child(2) > .nav-link").click()
      cy.location("pathname").should("equal", "/cart")
  })

    it("purchase of goods", () => {
      cy.get(".card-body").eq(0).click()
      cy.location("pathname").should("equal", "/products/1")
      cy.get(".btn").contains("Add to cart").click()
      cy.get(".nav-link").contains("Cart").click()
      cy.location("pathname").should("equal", "/cart")
      cy.get(".btn-success").click()
      cy.get(".modal-title").should("exist").contains("Order placed successfully")
    })
   })
})