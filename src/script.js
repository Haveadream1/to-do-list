import { addDays, format, compareAsc} from 'date-fns';
import Project from './project_class';
import Todo from './todo_class';

import * as domHandler from './dom_handler';

const home = () => {
  const completedButton = document.querySelector('.completed-button');
  const todoButton = document.querySelector('.todo-button');

  const todaySection = document.querySelector('.today-section');
  const actualWeekSection = document.querySelector('.actual-week-section');
  const upcomingWeekSection = document.querySelector('.upcoming-week-section');

  const addTodoButton = document.querySelector('.add-todo-button');
  const addProjectButton = document.querySelector('.add-project-button');

  let projectList = []; 
  // localStorage.setItem('projectList', JSON.stringify(projectList));

  const todayDate = new Date();
  const todayDateFormat = format(todayDate, 'dd-MM-yyyy');

  const actualWeek  = addDays(new Date(todayDate), 7);
  const actualWeekFormat = format(actualWeek, 'dd-MM-yyyy');
  console.log(todayDateFormat, actualWeekFormat);

  domHandler.renderAside();


  const handleTodo = (todoPriority, todoDate, todoName, todoDescription, selectedProject, loading) => {
    // const todoPriority = document.querySelector('#todo-priority').value;
    // const todoDate = document.querySelector('#todo-date').value;
    // const todoName = document.querySelector('#todo-name').value;
    // const todoDescription = document.querySelector('#todo-description').value;

    const splitDate = todoDate.split('-');
    const displayedDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    const formatedDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    // isSameWeek(new Date(todayDateFormat), new Date(formatedDate)); // Alt

    const todo = domHandler.createTodo(todoName, displayedDate, todoPriority, todoDescription, selectedProject, projectList, loading);

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

  // Fecth todo from memory
    // if the memory is empty then create a default project
  // Loop over the memory 
    // Create each object buttons
    // Create each todo
  // Dont need to modify list, only create in the dom




  window.addEventListener('load', () => {
    const key = localStorage.key('projectList');
    const memoryList = JSON.parse(localStorage.getItem(key));

    // Init project
    if (memoryList.length === 0) {
      const project = new Project('Default');
      projectList.push(project);
      localStorage.setItem('projectList', JSON.stringify(projectList));
  
      domHandler.createProject('Default');
    } else { // Fetch project from memory
      for (let i = 0; i < memoryList.length; i++) {
        const projectName = memoryList[i].name;
        console.log(i, memoryList[i],projectList[i], memoryList.length);

        const project = new Project(projectName); // Just not default
        projectList.push(project);
        
        domHandler.createProject(projectName);
        console.log(projectList);

        for (let j = 0; j < memoryList[i].todoList.length; j++) {
          console.log(memoryList[i].todoList[j]);

          const todoPriority = memoryList[i].todoList[j].priority;
          const todoDate = memoryList[i].todoList[j].date;
          const todoName = memoryList[i].todoList[j].name;
          const todoDescription = memoryList[i].todoList[j].description;
          const todo = new Todo(todoPriority, todoName, todoDate, todoDescription);

          project.addTodo(todo);

          if (memoryList[i].name === 'Default') {
            console.log(memoryList[i].name)
            handleTodo(todoPriority, todoDate, todoName, todoDescription, projectName, false);
          } else {
            handleTodo(todoPriority, todoDate, todoName, todoDescription, projectName, true);
          }

          console.log(todo, project, projectList);
          // Delete each todo and create them from memory
          // Here call function to create the all the todo from default project
        }
      }
    }
    // Fecth the todo from the memory and insert in the projectList
    // Only make visible the default project todo, other with project hide



      // console.log(key, memoryList[0], memoryList[0].todoList);
      // const projectName = memoryList[i].name;

      // if (projectList[i].name !== projectName) { // Do the same with todoList
      //   const project = new Project(projectName); // Just not default
      //   projectList.push(project);
        
      //   domHandler.createProject(projectName);

      //   console.log(projectList);
      // } else {
      //   console.log(projectList);
      // }

    // if (localStorage.getItem('projectList') === '[]') { // Check if empty
    //   console.log('Local Storage empty');
    //   projectList = []; 
    //   localStorage.setItem('projectList', JSON.stringify(projectList));
    // } // else {
    //   console.log('Retrieve data from local storage')
    //   projectList = JSON.parse(localStorage.getItem('projectList'));
    //   console.log(projectList)
    // }
  })



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

        localStorage.setItem('projectList', JSON.stringify(projectList)) // Pass the whole array in the memory by modifying it to a string
        const storedProject = JSON.parse(localStorage.getItem('projectList')); // Extract the content by making it an array
        console.log(storedProject);

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

  // Remove after done with memory function
  // (() => { // Init default project
  //   const project = new Project('Default');
  //   projectList.push(project);
  //   // localStorage.setItem('projectList', JSON.stringify(projectList));

  //   domHandler.createProject('Default');
  // })();

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

    const splitTodoDate = todoDateValue.split('-');
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

  const handleTodoForm = () => {
    const {alertSection, todoForm} = domHandler.createTodoForm();

    todoForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formNameValid = checkTodoName();
      const formDateValid = checkTodoDate();
      const isFormValid = formNameValid && formDateValid;

      if (isFormValid) {
        const todoPriority = document.querySelector('#todo-priority').value;
        const todoDate = document.querySelector('#todo-date').value;
        const todoName = document.querySelector('#todo-name').value;
        const todoDescription = document.querySelector('#todo-description').value;
        const todo = new Todo(todoPriority, todoName, todoDate, todoDescription);

        if (!document.contains(document.querySelector('.selected'))) {
          const selectedProject = 'Default'
          const project = projectList.find(p => p.name === selectedProject);
          project.addTodo(todo);
          console.log(todo, project, projectList);

          localStorage.setItem('projectList', JSON.stringify(projectList))
          const storedProject = JSON.parse(localStorage.getItem('projectList'));
          console.log(storedProject);

          handleTodo(todoPriority, todoDate, todoName, todoDescription, selectedProject, false);
        } else {
          const selectedProject = document.querySelector('.selected').textContent;
          const project = projectList.find(p => p.name === selectedProject);
  
          project.addTodo(todo);
          console.log(todo, project, projectList);

          localStorage.setItem('projectList', JSON.stringify(projectList))
          const storedProject = JSON.parse(localStorage.getItem('projectList'));
          console.log(storedProject);

          handleTodo(todoPriority, todoDate, todoName, todoDescription, selectedProject, false);
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
    domHandler.handleTabButtons('completed');
  })

  todoButton.addEventListener('click', () => {
    domHandler.handleTabButtons('todo');
  })
};
export default home;
