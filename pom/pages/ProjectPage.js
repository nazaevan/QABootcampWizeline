import { Selector, t } from "testcafe"

class ProjectPage{
    constructor(){
        this.projectToggleButton = Selector('.expansion_panel__header > .expansion_panel__toggle').withExactText('Proyectos')
        this.addProjectButton = Selector('.expansion_panel__header > .expansion_panel__actions > .adder_icon')
        this.formProjectName = Selector('#edit_project_modal_field_name')
        this.formProjectColor = Selector('.color_dropdown_toggle')
        this.formCustomColor = Selector('.color_dropdown_select__name').withExactText('Celeste')
        this.formFavoriteProject = Selector('[name="is_favorite"]')
        this.formProjectViewList = Selector('.edit_project_modal__view_radio_group > #project_list_view_style_option')
        this.formProjectViewPanel = Selector('.edit_project_modal__view_radio_group > #project_list_view_style_option')
        this.formProjectSubmit = Selector('button.ist_button_red')
    }

    async addProject(nameProject, isFavorite, type){
        await t
        .click(this.addProjectButton)
        .click(this.addProjectButton)
        .typeText(this.formProjectName, nameProject)
        .click(this.formProjectColor)
        .click(this.formCustomColor)
        if(isFavorite){
            await t.click(this.formFavoriteProject)
        }
        if(type == 'list'){
            await t.click(this.formProjectViewList)
        }
        else if(type == 'panel'){
            await t.click(this.formProjectViewPanel)
        }
        await t.click(this.formProjectSubmit)

        /*.typeText(this.descriptionTaskInput, descriptionTask)
        .wait(500)
        .click(this.submitTaskButton)
        .wait(500)
        .click(this.cancelTaskButton)*/
    }

    async getCreatedProjectByName(projectName){
        this.projectNameLabel = Selector('.collapse > .collapse__wrapper > .collapse__wrapper_inner > ul > li > div > div > a > span').withExactText(projectName)
    }
}

export default new ProjectPage