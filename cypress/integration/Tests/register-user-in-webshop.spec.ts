import register_user_details from "../../fixtures/register_user_details.json"
import already_register_user_details from "../../fixtures/already_register_user_details.json"
import validation_messages_in_userdetails from "../../fixtures/validation_messages_in_userdetails.json"
import RegisterPage from "../Pages/RegisterPage";
const registerpage = new RegisterPage()

describe('User registration in Web Shop Application', function () {


  it('Register user with valid data and verify success', function () {
    //Register Page
    registerpage.openURL()
    registerpage.clickOnRegisterLink()
    registerpage.selectGender()
    registerpage.enterFirstName(register_user_details.firstName)
    registerpage.enterLastName(register_user_details.lastName)
    registerpage.enterEmail(register_user_details.email)
    registerpage.enterPassword(register_user_details.passwod)
    registerpage.enterConfrimPassword(register_user_details.confrimPassword)
    registerpage.clickOnRegisterButton()
    registerpage.verifySuccessMessage(register_user_details.successMessage)

  })

  it('Verify validation messages are displaying for all fileds without enter data click on register button', function () {
    //Register Page
    registerpage.openURL()
    registerpage.clickOnRegisterLink()
    registerpage.clickOnRegisterButton()
    registerpage.verifyFirstNameValidMessage(validation_messages_in_userdetails.firstNameValidMessage)
    registerpage.verifyLastNameValidMessage(validation_messages_in_userdetails.lastNameValidMessage)
    registerpage.verifyEmailValidMessage(validation_messages_in_userdetails.emailValidMessage)
    registerpage.verifyPasswordValidMessage(validation_messages_in_userdetails.passwordValidMessage)
    registerpage.verifyConfrimPasswordValidMessage(validation_messages_in_userdetails.confrimPasswordValidMessage)
    })

    it('Verify validation message for already register user', function () {

      registerpage.openURL()
      registerpage.clickOnRegisterLink()
      registerpage.selectGender()
      registerpage.enterFirstName(already_register_user_details.firstName)
      registerpage.enterLastName(already_register_user_details.lastName)
      registerpage.enterEmail(already_register_user_details.email)
      registerpage.enterPassword(already_register_user_details.passwod)
      registerpage.enterConfrimPassword(already_register_user_details.confrimPassword)
      registerpage.clickOnRegisterButton()
      registerpage.verifyValidMessageForAlreadyRegisterUser(already_register_user_details.registeredUserValidationMessage)
    })
    
  
})