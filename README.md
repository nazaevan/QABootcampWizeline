# QABootcampWizeline

QABootcampWizeline
This project contains functional testcases for todoist.com webpage

### Tree Folder description:
#### pom/ (Abrebiation of Page Objet Model, base folder container)
#### ├─ data/ (It contains general configuration for constants needed for execution)
#### ├─ pages/ (It contains the pages mapped from webpage)
#### ├─ tests/ (It contains all the developed tests)

# After clone project, excecute npm run command to install all necessary dependencies

## For setup and run the project considere the next .env template
### This is the base structure of .env file, necessary for the excecution. Create this .env file at root.
#### Precondition: create a basic account on todoist (with email account, not google account or other.)
###### LOGIN_URL=base login URL of Todoist.com
###### INVALID_USER_USERNAME=invalid user name
###### INVALID_USER_PASSWORD=invalid user password
###### STANDARD_USER_USERNAME=your email account
###### STANDARD_USER_PASSWORD=your password account
###### GOOGLE_USER_USERNAME=google email account (not necessary)
###### GOOGLE_USER_PASSWORD=google password account (not necessary)
###### EXPLICIT_WAIT_MILISECONDS=explicit miliseconds of custome wait timeouts that are not configurable in testcaferc.json (not necessary)
###### TODAY_HOMEPAGE_TITLE=Set 'Hoy' if your web browser is in spanish, change it for 'Today' if is in english
###### PROJECT_NAME_TOGGLE_MENU=Set 'Proyectos' if your web browser is in spanish, change it for 'Projects' if is in english
###### TASK_NUMBER_FOR_LOAD_TESTING=number of tasks for Load testing
###### PROJECT_SELECTED_COLOR=Set the name of color for created project, for example Celeste
###### PROJECT_NAME_CREATED_PROJECT=Custom name project
###### PROJECT_IS_FAVORITE_PROJECT=isFavorite? true or false
###### PROJECT_TYPE_CREATED_PROJECT=type of project, list or panel. Check if the browser is in spanish set lista or panel
###### TASK_CREATED_NAME=task custom name
###### TASK_CREATED_DESCRIPTION=task custom description
###### TASK_CREATED_NUMBER_DAYS_AFTER_TODAY=days after today to create a task scheduled after days
###### TASK_CREATED_NAME_LOAD_TEST=Prefix of custom name for tasks created by load testing

### To execute the testcases scripts, considere the following instructions. These are defined in packages.json
#### --It runs all the testsuites and generates an html report to visualize the results.
"test": "testcafe chrome ./pom/tests --reporter html:./report.html"

#### --It runs only the tests in Login.test.js with two web browsers in headless mode. Login feature.
"login-testing": "testcafe chrome:headless,firefox:headless ./pom/tests/Login.test.js"

#### --It runs only the tests in ProjectManagement.test.js. ProjectManagement feature.
"project-testing": "testcafe chrome,firefox ./pom/tests/ProjectManagement.test.js"

#### --It runs only the tests in TaskManagement.test.js. TaskManagement feature.
"task-testing": "testcafe chrome,firefox ./pom/tests/TaskManagement.test.js"

#### --It runs only the tests with smoke type meta data configuration.
"smoke-testing": "testcafe chrome ./pom/tests --test-meta type=smoke"

#### --It runs only the tests with regression type meta data configuration.
"regression-testing": "testcafe chrome ./pom/tests --test-meta type=regression"

#### --It runs only the tests with load type meta data configuration
"load-testing": "testcafe chrome ./pom/tests --test-meta type=load"
