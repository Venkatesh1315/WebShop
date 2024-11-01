import { clickButton, orderNumber, seclectCheckBox, selectDropDownValue, successfullMessage } from "../../support/utilities";

export class CartPage {

   private readonly locators = {


        productName: '.product .product-name',
        subTotal: '.product-subtotal',
        countryDropDown: "select[id='CountryId']",
        termsAndAgreeCheckBox: "input[type='checkbox']:nth-child(1)",
        checkOutButton: "button[id='checkout']",
        BillingAddresscontinueButton: "div[id='billing-buttons-container'] input",
        storePickUpCheckBox: ".section input[id='PickUpInStore']",
        shippingAddressContinueButton: "div[id='shipping-buttons-container'] input",
        paymentMethodContinueButton: "div[id='payment-method-buttons-container'] input",
        paymentInfoContinueButton: "div[id='payment-info-buttons-container'] input",
        productNameDetails: '.product .product-name',
        productPriceDetails: '.product-unit-price',
        confrimOrderButton: "div[id='confirm-order-buttons-container'] input",
        gettingOrderId: "ul[class='details'] li",
        orderSuccessMessage: "div[class='title']"

    }

    constructor() {
        console.log('Cart Page is Created')
    }

    clickOnCountryDropDown(dropdownvalue: string) {

        selectDropDownValue(this.locators.countryDropDown, dropdownvalue)
    }
    clickOnTermsAndAgreeCheckBox() {
        seclectCheckBox(this.locators.termsAndAgreeCheckBox)
    }
    clickOnCheckOutButton() {
        clickButton(this.locators.checkOutButton)
    }
    clickOnBillingAddresscontinueButtonButton() {
        clickButton(this.locators.BillingAddresscontinueButton)
    }
    clickStorePickUpCheckBox() {
        seclectCheckBox(this.locators.storePickUpCheckBox)
    }
    clickOnShippingAddressContinueButton() {
        clickButton(this.locators.shippingAddressContinueButton)

    }
    clickOnPaymentMethodContinueButton() {
        clickButton(this.locators.paymentMethodContinueButton)
    }
    clickOnPaymentInfoContinueButton() {
        clickButton(this.locators.paymentInfoContinueButton)
    }
    clickOnConfrimOrderButton() {
        clickButton(this.locators.confrimOrderButton)
    }

    gettingOrderID() {
        return orderNumber(this.locators.gettingOrderId);
    }

    verifyOrderSuccessMessage(orderSuccessMessage: string) {

        return successfullMessage(this.locators.orderSuccessMessage, orderSuccessMessage)
    }

} export default CartPage;