import { text } from "stream/consumers";

import loginCredentials from "../../fixtures/login_credentials.json";
import productDetails from "../../fixtures/product_details.json";

import LoginPage from "../Pages/LoginPage";
import HomePage from "../Pages/HomePage";
import CartPage from "../Pages/CartPage";

const loginpage = new LoginPage()
const homepage = new HomePage()
const cartpage = new CartPage()

describe('Purchasing a product using the Webshop application', function () {

  it('Purchase laptop and verify success', function () {
    login();
    //Home Page Test
    homepage.enterProductNameIntoSearchBox(productDetails.produtName)
    homepage.clickOnSearchButton()
    homepage.clickOnAddToCartButton()
    homepage.verifYSuccessMessage()
    homepage.clickOnShoppingCartLink()
    //Cart Page Test
    cartpage.clickOnCountryDropDown(productDetails.conuntry)
    cartpage.clickOnTermsAndAgreeCheckBox()
    cartpage.clickOnCheckOutButton()
    cartpage.clickOnBillingAddresscontinueButtonButton()
    cartpage.clickStorePickUpCheckBox()
    cartpage.clickOnShippingAddressContinueButton()
    cartpage.clickOnPaymentMethodContinueButton()
    cartpage.clickOnPaymentInfoContinueButton()
    cartpage.clickOnConfrimOrderButton()
    cartpage.verifyOrderSuccessMessage(productDetails.orderProcessMessage)
    console.log(cartpage.gettingOrderID());
  })

  function login() {
    //login page
    loginpage.openURL()
    loginpage.clickLoginLink()
    loginpage.enterEmail(loginCredentials.email)
    loginpage.enterPassword(loginCredentials.password)
    loginpage.clickLoginButton()
  }

})





