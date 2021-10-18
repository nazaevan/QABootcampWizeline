import { Selector, t } from "testcafe"

class TodayHomePage{
    constructor(){
        this.title = Selector('div .view_header__content > h1 > .simple_content').withExactText('Hoy')
        this.addTaskButton = Selector('.list_holder > ul > li > .plus_add_button')
        this.nameTaskInput = Selector('.task_editor > .task_editor__editing_area > .task_editor__input_fields > .task_editor__content_field > .richtextinput > .DraftEditor-root > .DraftEditor-editorContainer > .public-DraftEditor-content > div > div')
        this.descriptionTaskInput = Selector('.task_editor > .task_editor__editing_area > .task_editor__input_fields > .task_editor__description_field')
        this.selectDateButton = Selector('.task_editor > .task_editor__editing_area > .task_editor__extra_fields > .task_editor__extra_fields__pills > .item_due_selector')
        this.submitTaskButton = Selector('.task_editor > .task_editor__form_actions > div > div > .reactist_button')
        this.cancelTaskButton = Selector('.task_editor > .task_editor__form_actions > div > div > .reactist_button--secondary')
        this.calendarButton = Selector('button.item_due_selector')
        this.calendarSelectedButton = Selector('.calendar__day--selected')
        this.calendarSelectedDay = Selector('.calendar__day--selected > .calendar__day__date > .calendar__day__date__number')
        this.taskListItem = Selector('.task_list_item')
        this.taskRadioButton = Selector('.task_checkbox')

        //menu lateral
        this.proximoSection = Selector('#list_holder > #top_filters > #filter_upcoming')
    }

    async addTaskToday(nameTask, descriptionTask){
        await t
        .click(this.addTaskButton)
        .wait(500)
        .typeText(this.nameTaskInput, nameTask)
        .wait(500)
        .typeText(this.descriptionTaskInput, descriptionTask)
        .wait(500)
        .click(this.submitTaskButton)
        .wait(500)
        .click(this.cancelTaskButton)
    }

    async addTaskCurrentDate(nameTask, descriptionTask, daycount){
        await t
        .click(this.addTaskButton)
        .wait(500)
        .typeText(this.nameTaskInput, nameTask)
        .wait(500)
        .typeText(this.descriptionTaskInput, descriptionTask)
        .wait(500)
        .click(this.calendarButton)
        .wait(500)
        let date = await this.calendarSelectedDay.innerText
        let dateInt = parseInt(date)
        let result = dateInt+daycount
        let resultString = result.toString()
        this.calendarNewDay = Selector('.calendar__day > .calendar__day__date > .calendar__day__date__number').withExactText(resultString)
        this.calendarNewDaySpanParent = this.calendarNewDay.parent(0)
        this.calendarNewDayButton = this.calendarNewDaySpanParent.parent(0)
        await t.click(this.calendarNewDayButton)
        await t.click(this.submitTaskButton)
        await t.wait(500)
        await t.click(this.proximoSection)
        this.dayWeekButton = Selector('.calendar__day > .upcoming_view__day_cell__date > .upcoming_view__day_cell__date__number').withExactText(resultString)
        await t.click(this.dayWeekButton)
        this.taskNameLabelFromCalendar = Selector('.task_list_item__body > .task_list_item__content > .task_list_item__content__wrapper > .task_content').withExactText(nameTask)
    }

    async getCreatedTaskByName(taskName){
        this.taskNameLabel = Selector('.view_content > .section > .list_holder > .items > .task_list_item > .task_list_item__body > .task_list_item__content > .task_list_item__content__wrapper > .markdown_content').withExactText(taskName)
    }

    async getCreatedTaskByDescription(taskDescription, isFavorite){
        if(isFavorite){
            this.taskDescriptionLabel = Selector('.view_content > .section > .list_holder > .items > .task_list_item > .task_list_item__body > .task_list_item__content > .task_list_item__content__wrapper > .markdown_content').withExactText(taskDescription)
        }
        else{
            this.taskDescriptionLabel = Selector('.view_content > .section > .list_holder > .items > .task_list_item > .task_list_item__body > .task_list_item__content > .task_list_item__content__wrapper > .markdown_content').withExactText(taskDescription)
        }
    }
}

export default new TodayHomePage