import { clickButton, clickLink, enterText, selectRadioButton, successfullMessage, validMessage } from "../../support/utilities";


class RegisterPage {

    private readonly locators = {
        registerLink: '.ico-register',
        gender: '#gender-male',
        firstName: '#FirstName',
        lastName: '#LastName',
        email: '#Email',
        passwod: '#Password',
        confrimPassword: '#ConfirmPassword',
        registerButton: '#register-button',
        successMessage: "div[class='result']",

        firstNameValidMsg:"span[for='FirstName']",
        lastNameValidMsg:"span[for='LastName']",
        emailValidMsg:"span[for='Email']",
        passwordValidMsg:"span[for='Password']",
        confirmPasswordValidMsg:"span[for='ConfirmPassword']",
        registredUserValidMessage:"div[class='validation-summary-errors']"
    }

    constructor() {
        console.log('Register Page is Created')
    }

    openURL() {
        cy.visit(Cypress.env('URL'))
    }

    clickOnRegisterLink() {
        clickLink(this.locators.registerLink)
    }

    selectGender() {
        selectRadioButton(this.locators.gender)
    }
    enterFirstName(firstName: string) {
        enterText(this.locators.firstName, firstName)
    }
    enterLastName(lastName: string) {
        enterText(this.locators.lastName, lastName)
    }
    enterEmail(email: string) {
        enterText(this.locators.email, email)

    }
    enterPassword(passwod: string) {
        enterText(this.locators.passwod, passwod)

    }
    enterConfrimPassword(confrimPassword: string) {
        enterText(this.locators.confrimPassword, confrimPassword)
    }
    clickOnRegisterButton() {
        clickButton(this.locators.registerButton)
    }
    verifySuccessMessage(successMessage: string) {
        return successfullMessage(this.locators.successMessage, successMessage)
    }

    verifyFirstNameValidMessage(firstNameValidMsg:string){
        validMessage(this.locators.firstNameValidMsg,firstNameValidMsg)
    }
    verifyLastNameValidMessage(lastNameValidMsg:string){
        validMessage(this.locators.lastNameValidMsg,lastNameValidMsg)
    }
    verifyEmailValidMessage(emailValidMsg:string){
        validMessage(this.locators.emailValidMsg,emailValidMsg)
    }
    verifyPasswordValidMessage(passwodValidMsg:string){
        validMessage(this.locators.passwordValidMsg,passwodValidMsg)
    }
    verifyConfrimPasswordValidMessage(confrimPasswordValidMsg:string){
        validMessage(this.locators.confirmPasswordValidMsg,confrimPasswordValidMsg)
    }
    verifyValidMessageForAlreadyRegisterUser(registeredUserMessage:string){
        validMessage(this.locators.registredUserValidMessage,registeredUserMessage)
    }



} export default RegisterPage;