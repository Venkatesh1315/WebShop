import { clickButton, clickLink, enterText } from "../../support/utilities";

class LoginPage {

    private readonly locators = {
        login: '.ico-login',
        email: '#Email',
        password: '#Password',
        loginButton: '.login-button'
    }

    constructor() {
        console.log('Login Page is Created')
    }

    openURL() {
        cy.visit(Cypress.env('URL'))

    }
    clickLoginLink() {
        clickLink(this.locators.login)
    }
    enterEmail(email: string) {
        enterText(this.locators.email, email)
    }
    enterPassword(password: string) {
        enterText(this.locators.password, password)
    }
    clickLoginButton() {
        clickButton(this.locators.loginButton)
    }

} export default LoginPage;