import { Selector, t } from "testcafe"
import { GENERAL_CONFING } from '../data/Constants'

class TodayHomePage{
    constructor(){
        this.title = Selector('h1 > .simple_content').withExactText(GENERAL_CONFING.TEST_CONFIG.HOMEPAGE_TITLE)
        this.addTaskButton = Selector('.plus_add_button')
        this.nameTaskInput = Selector('.DraftEditor-editorContainer > .public-DraftEditor-content > div > div')
        this.descriptionTaskInput = Selector('.task_editor__input_fields > .task_editor__description_field')
        this.selectDateButton = Selector('.task_editor__extra_fields > .task_editor__extra_fields__pills > .item_due_selector')
        this.submitTaskButton = Selector('.task_editor__form_actions > div > div > .reactist_button')
        this.cancelTaskButton = Selector('.task_editor__form_actions > div > div > .reactist_button--secondary')
        this.calendarButton = Selector('button.item_due_selector')
        this.calendarSelectedButton = Selector('.calendar__day--selected')
        this.calendarSelectedDay = Selector('.calendar__day--selected > .calendar__day__date > .calendar__day__date__number')
        this.taskListItem = Selector('.task_list_item')
        this.taskRadioButton = Selector('.task_checkbox')
        this.taskListItemContent = Selector('.task_list_item__content')
        this.taskDetailOptionsButton = Selector('.item_actions_more')
        this.taskDetailInternalMenuDelete = Selector('.danger_menu > .icon_menu_item__content')
        this.taskConfirmDeleteButton = Selector('.confirm_dialog__actions > button.ist_button_red')
        this.calendarNewDay = Selector('.calendar__day > .calendar__day__date > .calendar__day__date__number')
        this.dayWeekButton = Selector('.calendar__day > .upcoming_view__day_cell__date > .upcoming_view__day_cell__date__number')
        this.taskNameLabelFromCalendar = Selector('.task_list_item__content > .task_list_item__content__wrapper > .task_content')
        this.taskNameLabel = Selector('.task_list_item__content > .task_list_item__content__wrapper > .markdown_content')
        this.taskDescriptionLabel = Selector('.task_list_item__content > .task_list_item__content__wrapper > .markdown_content')

        //menu lateral
        this.proximoSection = Selector('#list_holder > #top_filters > #filter_upcoming')
    }

    async addTaskToday(nameTask, descriptionTask){
        await t
        .click(this.addTaskButton)
        .typeText(this.nameTaskInput, nameTask)
        .typeText(this.descriptionTaskInput, descriptionTask)
        .click(this.submitTaskButton)
        .click(this.cancelTaskButton)
    }

    async addTaskCurrentDate(nameTask, descriptionTask, daycount){
        await t
        .click(this.addTaskButton)
        .typeText(this.nameTaskInput, nameTask)
        .typeText(this.descriptionTaskInput, descriptionTask)
        .click(this.calendarButton)
        let date = await this.calendarSelectedDay.innerText
        let dateInt = parseInt(date)
        let result = dateInt+parseInt(daycount)
        let resultString = result.toString()
        this.calendarNewDay.withExactText(resultString)
        this.calendarNewDaySpanParent = this.calendarNewDay.parent(0)
        this.calendarNewDayButton = this.calendarNewDaySpanParent.parent(0)
        await t.click(this.calendarNewDayButton)
        await t.click(this.submitTaskButton)
        await t.click(this.proximoSection)
        this.dayWeekButton.withExactText(resultString)
        await t.click(this.dayWeekButton)
        this.taskNameLabelFromCalendar.withExactText(nameTask)
    }

    async getCreatedTaskByName(taskName){
        this.taskNameLabel.withExactText(taskName)
    }

    async getCreatedTaskByDescription(taskDescription){
        this.taskDescriptionLabel.withExactText(taskDescription)
    }
}

export default new TodayHomePage