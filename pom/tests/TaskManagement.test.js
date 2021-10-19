import { Selector, t } from 'testcafe';
import { CREDENTIALS, URLS } from '../data/Constants'
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
                await t.click(TodayHomePage.taskRadioButton)
            }catch(exception){
                break
            }
        }
    })

test.meta('type','smoke')('As a user, I should be able to create a Task', async t => {
    await TodayHomePage.addTaskToday('test','test')
    let taskList = ["test"]

    for(const taskname of taskList) {
        TodayHomePage.getCreatedTaskByName(taskname)
        await t
            .expect(TodayHomePage.taskNameLabel.exists).ok()
    }
})

test.meta('type','smoke')('As a user, I should be able to create a Task with an account of days after today', async t => {
    // Consider only a number of days according to obtain a task scheduled in the same active week
    await TodayHomePage.addTaskCurrentDate('test','test',1)
    await t
        .expect(TodayHomePage.taskNameLabelFromCalendar.exists).ok()
    
})

test.meta('type','load')('Create task load test', async t => {
    let taskList = []

    for(let i = 1; i <= 10; i++){
        taskList.push(`TaskNum${i}`)
    }

    for(const taskname of taskList) {
        TodayHomePage.addTaskToday('test',taskname)
        TodayHomePage.getCreatedTaskByDescription(taskname)
        await t
            .expect(TodayHomePage.taskDescriptionLabel.exists).ok()
    }
})