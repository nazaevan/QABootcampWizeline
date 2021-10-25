import { Selector, t } from 'testcafe';
import { CREDENTIALS, URLS, GENERAL_CONFING } from '../data/Constants'
import ProjectPage from '../pages/ProjectPage'
import TodayHomePage from '../pages/TodayHomePage'
import { STANDARD_USER } from '../data/Roles'

fixture('Project management feature test')
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

test.meta('type','smoke')('As a user, I should be able to create a Project', async t => {
    //name of project, isFavorite?(true or false), type of project (list or panel)
    await ProjectPage.addProject(GENERAL_CONFING.TEST_CONFIG.PROJECT_CREATED_NAME_PROJECT,true,GENERAL_CONFING.TEST_CONFIG.PROJECT_TYPE_CREATED_PROJECT)
    ProjectPage.getCreatedProjectByName(GENERAL_CONFING.TEST_CONFIG.PROJECT_CREATED_NAME_PROJECT)
    await t
        .expect(ProjectPage.projectNameLabel.exists).ok()
})