import { addDays, format, compareAsc} from 'date-fns';
import Project from './project_handler';
import Todo from './todo_handler';

import * as domHandler from './dom_handler';

const home = () => {
  const main = document.querySelector('main');
  const mainFormSection = main.querySelector('.form-section');

  const completedButton = document.querySelector('.completed-button');
  const todoButton = document.querySelector('.todo-button');

  const todaySection = document.querySelector('.today-section');
  const actualWeekSection = document.querySelector('.actual-week-section');
  const upcomingWeekSection = document.querySelector('.upcoming-week-section');

  const addTodoButton = document.querySelector('.add-todo-button');

  // const aside = document.querySelector('aside');
  // const asideButton = document.querySelector('.aside-button');

  // const asideFormSection = aside.querySelector('.form-section');
  const addProjectButton = document.querySelector('.add-project-button');

  // const projectSection = document.querySelector('.project-section');

  const projectList = []; /* Why as we have a object property */

  const todayDate = new Date();
  const todayDateFormat = format(todayDate, 'dd-MM-yyyy');

  const actualWeek  = addDays(new Date(todayDate), 7);
  const actualWeekFormat = format(actualWeek, 'dd-MM-yyyy');
  console.log(todayDateFormat, actualWeekFormat);

  domHandler.renderAside();

  const isDate = (value) => {
    if (value === -1) {
      return false;
    } 
      return true;
  }

  const isRequired = (value) => {
    if (value === '') {
      return false;
    } 
      return true;
  }

  const checkProjectName = () => {
    const projectName = document.querySelector('#project-name');

    let valid = false;
    const text = projectName.value.trim();

    if (!isRequired(text)) {
      domHandler.showError(projectName, '*Please fill this field');
    } else {
      domHandler.showSuccess(projectName);
      valid = true;
    }
    return valid;
  }

  const handleProjectForm = () => {
    const projectForm = domHandler.createProjectForm();

    projectForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formAsideValid = checkProjectName();
      const isFormValid = formAsideValid;

      if (isFormValid) {
        const projectName = document.querySelector('#project-name').value;
        const project = new Project(projectName);
        projectList.push(project);
        console.log(projectList);

        domHandler.createProject(projectName);
        projectForm.remove();

        domHandler.handleAsideGrid('hide');
        console.log('Valid form');
      } else {
        console.log('Invalid form');
      }
    })

    projectForm.addEventListener('input', (event) => {
      if (event.target.id === 'project-name') {
        checkProjectName();
      }
    })
  }

  (() => { // Init default project
    const project = new Project('Default');
    projectList.push(project);

    domHandler.createProject('Default');
  })();

  addProjectButton.addEventListener('click', () => {
    domHandler.handleAsideGrid('visible');
    handleProjectForm();
  })

  const checkTodoName = () => {
    const todoName = document.querySelector('#todo-name');

    let valid = false;
    const text = todoName.value.trim();

    if (!isRequired(text)) {
      domHandler.showError(todoName, '*Please fill this field');
    } else {
      domHandler.showSuccess(todoName);
      valid = true;
    }
    return valid;
  }

  const checkTodoDate = () => {
    const todoDate = document.querySelector('#todo-date');
    const todoDateValue = document.querySelector('#todo-date').value;

    const splitTodoDate = todoDateValue.split('-') ;
    const splitTodayDate = todayDateFormat.split('-');

    const compareDate = compareAsc( new Date(splitTodoDate[0],splitTodoDate[1],splitTodoDate[2]),
                                    new Date(splitTodayDate[2],splitTodayDate[1],splitTodayDate[0]));

    let valid = false;
    if (!isRequired(todoDateValue)) {
      domHandler.showError(todoDate, '*Please fill this field');
    } else if (!isDate(compareDate)) {
      domHandler.showError(todoDate, '*Please put a current date');
    } else {
      domHandler.showSuccess(todoDate);
      valid = true;
    }
    return valid;
  }

  const handleTodo = (selectedProject) => {
    const todoPriority = document.querySelector('#todo-priority').value;
    const todoDate = document.querySelector('#todo-date').value;
    const todoName = document.querySelector('#todo-name').value;
    const todoDescription = document.querySelector('#todo-description').value;

    const splitDate = todoDate.split('-');
    const displayedDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    const formatedDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    // isSameWeek(new Date(todayDateFormat), new Date(formatedDate)); // Alt

    const todo = domHandler.createTodo(todoName, displayedDate, todoPriority, todoDescription, selectedProject, projectList);

    if (formatedDate === todayDateFormat) {
      console.log('today date');
      todaySection.appendChild(todo);
    } else if (formatedDate > todayDateFormat && formatedDate <= actualWeekFormat) {
      console.log('actual week');
      actualWeekSection.appendChild(todo);
    } else if (formatedDate > actualWeekFormat) {
      console.log('next week');
      upcomingWeekSection.appendChild(todo);
    }
  }

  const handleTodoForm = () => {
    const {alertSection, todoForm} = domHandler.createTodoForm();

    todoForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formNameValid = checkTodoName();
      const formDateValid = checkTodoDate();
      const isFormValid = formNameValid && formDateValid;

      if (isFormValid) {
        const todoName = document.querySelector('#todo-name').value;
        const todoDate = document.querySelector('#todo-date').value;
        const todo = new Todo(todoName, todoDate);

        if (!document.contains(document.querySelector('.selected'))) {
          const selectedProject = 'Default'
          const project = projectList.find(p => p.name === selectedProject);

          project.addTodo(todo);
          console.log(todo, project, projectList);
          handleTodo(selectedProject);
        } else {
          const selectedProject = document.querySelector('.selected').textContent;
          const project = projectList.find(p => p.name === selectedProject);
  
          project.addTodo(todo);
          console.log(todo, project, projectList);
          handleTodo(selectedProject);
        }
        alertSection.remove();
        addTodoButton.disabled = false;
        
        console.log('Valid form');
      } else {
        console.log('Invalid form');
      }
    })

    todoForm.addEventListener('input', (event) => {
      if (event.target.id === 'todo-name') {
        checkTodoName();
      } else if (event.target.id === 'todo-date') {
        checkTodoDate();
      }
    })
  }

  addTodoButton.addEventListener('click', () => {
    handleTodoForm();
    addTodoButton.disabled = true;
  })

  completedButton.addEventListener('click', () => {
    const todoForm = document.querySelector('#todo-form');

    if (mainFormSection.hasChildNodes()) {
      todoForm.remove();
    }
    domHandler.handleTabButtons('completed');
  })

  todoButton.addEventListener('click', () => {
    domHandler.handleTabButtons('todo');
  })
};
export default home;
