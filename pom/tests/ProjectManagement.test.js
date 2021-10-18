import { Selector, t } from 'testcafe';
import { CREDENTIALS, URLS } from '../data/Constants'
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
        while(TodayHomePage.taskDescriptionLabel.exists){
            await t.click(TodayHomePage.taskRadioButton)
        }
    })

test.meta('type','smoke')('As a user, I should be able to create a Project', async t => {
    await t.wait(1000)
    //name of project, isFavorite?(true or false), type of project (list or panel)
    await ProjectPage.addProject('NazaevanProject',true,'list')
    ProjectPage.getCreatedProjectByName('NazaevanProject',true)
    await t
        .expect(ProjectPage.projectNameLabel.exists).ok()
})