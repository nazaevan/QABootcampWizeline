import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: 'https://todoist.com/users/showlogin'
}

export const CREDENTIALS = {
    STANDARD_USER: {
        USERNAME: process.env.STANDARD_USER_USERNAME,
        PASSWORD: process.env.STANDARD_USER_PASSWORD
    },
    GOOGLE_USER: {
        USERNAME: process.env.GOOGLE_USER_USERNAME,
        PASSWORD: process.env.GOOGLE_USER_PASSWORD
    }
}

export const GENERAL_CONFING = {
    TEST_CONFIG: {
        EXPLICIT_WAIT: process.env.EXPLICIT_WAIT_MILISECONDS,
        HOMEPAGE_TITLE: process.env.TODAY_HOMEPAGE_TITLE,
        PROJECTS_NAME_TOGGLE_MENU: process.env.TODAY_HOMEPAGE_TITLE
    }
}