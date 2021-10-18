import { Selector, t } from 'testcafe';
import LoginPage from '../pages/LoginPage'
import { CREDENTIALS, URLS } from '../data/Constants'
import TodayHomePage from '../pages/TodayHomePage'
import { STANDARD_USER } from '../data/Roles'

fixture('Login feature test')
    .page `${URLS.LOGIN_URL}`

test.meta('type','smoke')('As a user, I should be able to log in succesfully by providing valid credentials', async t => {
    await t.useRole(STANDARD_USER)
    await t
        .wait(5000)
        .expect(TodayHomePage.title.exists).ok()
})

test.meta('type','regression')('As a user, I should receive an error message if there is a mistake in the login form. Invalid username and password', async t => {
    await LoginPage.submitLoginForm('test', 'test')
    await t
        .expect(LoginPage.errorMessageInvalidEmailddress.exists).ok()
})

test.meta('type','regression')('As a user, I should receive an error message if there is a mistake in the login form. Wrong password', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME, 'test')
    await t
        .expect(LoginPage.errorMessageInvalidUsrOrPss.exists).ok()
})

test.meta('type','regression')('As a user, I should receive an error message if there is a mistake in the login form. Wrong email', async t => {
    await LoginPage.submitLoginForm('test@algo.com', CREDENTIALS.STANDARD_USER.PASSWORD)
    await t
        .expect(LoginPage.errorMessageInvalidUsrOrPssEng.exists).ok()
})