import { Selector, t } from 'testcafe';
import { CREDENTIALS, URLS, GENERAL_CONFING } from '../data/Constants'
import TodayHomePage from '../pages/TodayHomePage'
import { STANDARD_USER } from '../data/Roles'

fixture('Task management feature test')
    .page `${URLS.LOGIN_URL}`
    .beforeEach(async t => {
        await t.useRole(STANDARD_USER);
    })
    .afterEach(async t => {
        await t.click(TodayHomePage.proximoSection)
        while(TodayHomePage.taskListItem.exists){
            try{
                await t.click(TodayHomePage.taskListItemContent)
                .click(TodayHomePage.taskDetailOptionsButton)
                .click(TodayHomePage.taskDetailInternalMenuDelete)
                .click(TodayHomePage.taskConfirmDeleteButton)
            }catch(exception){
                break
            }
        }
    })

test.meta('type','smoke')('As a user, I should be able to create a Task', async t => {
    await TodayHomePage.addTaskToday(GENERAL_CONFING.TEST_CONFIG.TASK_CREATED_NAME,GENERAL_CONFING.TEST_CONFIG.TASK_CREATED_DESCRIPTION)
    let taskList = [GENERAL_CONFING.TEST_CONFIG.TASK_CREATED_NAME]

    for(const taskname of taskList) {
        TodayHomePage.getCreatedTaskByName(taskname)
        await t
            .expect(TodayHomePage.taskNameLabel.exists).ok()
    }
})

test.meta('type','smoke')('As a user, I should be able to create a Task with an account of days after today', async t => {
    // Consider only a number of days according to obtain a task scheduled in the same active week
    await TodayHomePage.addTaskCurrentDate(GENERAL_CONFING.TEST_CONFIG.TASK_CREATED_NAME,GENERAL_CONFING.TEST_CONFIG.TASK_CREATED_DESCRIPTION,GENERAL_CONFING.TEST_CONFIG.TASK_CREATED_NUMBER_DAYS_AFTER_TODAY)
    await t
        .expect(TodayHomePage.taskNameLabelFromCalendar.exists).ok()
    
})

test.meta('type','load')('Create task load test', async t => {
    let taskList = []

    for(let i = 1; i <= GENERAL_CONFING.TEST_CONFIG.TASK_NUMBER_FOR_LOAD_TESTING; i++){
        taskList.push(`${GENERAL_CONFING.TEST_CONFIG.TASK_CREATED_NAME_LOAD_TEST}${i}`)
    }

    for(const taskname of taskList) {
        TodayHomePage.addTaskToday(GENERAL_CONFING.TEST_CONFIG.TASK_CREATED_NAME,taskname)
        TodayHomePage.getCreatedTaskByDescription(taskname)
        await t
            .expect(TodayHomePage.taskDescriptionLabel.exists).ok()
    }
})