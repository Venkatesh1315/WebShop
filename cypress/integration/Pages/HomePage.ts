import { addAbortListener } from "events";
import { clickButton, clickLink, clickTab, enterText, iterateAndClickElement } from "../../support/utilities";

class HomePage {


    private readonly locators = {

        searchBox: '#small-searchterms',
        searchButton: "input[value='Search']",
        addToCart: "input[value='Add to cart']",
        successMessage: '.content',
        shoppingCart: '.ico-cart .cart-label',
        books: "ul[class='top-menu'] a[href='/books']",
        allProducts: ".product-item",
        addToCartButton: "input[id='add-to-cart-button-22']"

    }

    constructor() {
        console.log('Home Page is Created')
    }


    enterProductNameIntoSearchBox(searchBox: string) {
        enterText(this.locators.searchBox, searchBox)
    }
    clickOnSearchButton() {
        clickButton(this.locators.searchButton)
    }
    clickOnAddToCartButton() {
        clickButton(this.locators.addToCart)
    }
    verifYSuccessMessage() {
        return cy.get(this.locators.successMessage).should('contain', 'The product has been added to your')
            .find('a')
            .should('have.text', 'shopping cart')
            .and('have.attr', 'href', '/cart');

    }
    clickOnShoppingCartLink() {
        clickLink(this.locators.shoppingCart)
    }

    clickBooksTab() {

        clickTab(this.locators.books)
    }
    clickOnProductTextWithGivenName(productName: string) {
        iterateAndClickElement(this.locators.allProducts, productName)
    }
    clickOnAddToCartButtonAgain() {

        clickButton(this.locators.addToCartButton)

    }

} export default HomePage;