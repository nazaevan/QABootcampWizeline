import { Role, t} from 'testcafe'
import { URLS, CREDENTIALS } from './Constants'
import LoginPage from '../pages/LoginPage'

export const STANDARD_USER = Role(URLS.LOGIN_URL, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD)
}, { preserveUrl:true })