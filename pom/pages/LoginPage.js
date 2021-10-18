import { Selector, t } from 'testcafe'

class LoginPage{
    constructor(){
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton =  Selector ('form > .submit_btn')
        this.errorMessageInvalidEmailddress = Selector ('.error_msg > span').withExactText('Invalid email address.')
        this.errorMessageInvalidUsrOrPss = Selector ('.error_msg > span').withExactText('Email o contraseña incorrectos')
        this.errorMessageInvalidUsrOrPssEng = Selector ('.error_msg > span').withExactText('Wrong email or password.')
    }

    async submitLoginForm(username, password){
        await t
        .typeText(this.emailInput, username)
        .typeText(this.passwordInput, password)
        .click(this.loginButton)
    }

}

export default new LoginPage