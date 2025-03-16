// Handle all the DOM with a module
import deleteIcon from '../dist/images/DeleteIcon.svg'; // Import images this way not with the path in src
import downIcon from '../dist/images/DownIcon.svg';
import upIcon from '../dist/images/UpIcon.svg';

export const renderAside = () => {
  const aside = document.querySelector('aside');
  const asideButton = document.querySelector('.aside-button');

  asideButton.addEventListener('click', () => {
      if (aside.style.visibility === 'hidden') {
        aside.style.visibility = 'visible';
        asideButton.style.justifySelf = 'end';
      } else {
        aside.style.visibility = 'hidden';
        asideButton.style.justifySelf = 'start';
      }
  });
};

export const showError = (input, message) => { 
  const fieldset = input.parentElement;
  input.classList.add('error');
  input.classList.remove('success');

  const small = fieldset.querySelector('small');
  small.style.padding = '10px 10px 0 10px';
  small.textContent = message;
};

export const showSuccess = (input) => {
  const fieldset = input.parentElement;
  input.classList.add('success');
  input.classList.remove('error');

  const small = fieldset.querySelector('small');
  small.style.padding = '0';
  small.textContent = '';
};

export const createProject = (projectName) => {
  const projectButton = document.createElement('button');
  const projectSection = document.querySelector('.project-section');

  projectButton.classList.add('project-button');
  projectButton.textContent = projectName;
  projectSection.appendChild(projectButton);

  projectButton.addEventListener('click', () => {
    const selected = document.querySelectorAll('.selected');
    if (!projectButton.classList.contains('selected')) {
      selected.forEach(e => e.classList.remove('selected'));
      projectButton.classList.add('selected');
    }

    const todo = document.querySelectorAll('.todo');
    todo.forEach(e => {
      if (!e.classList.contains(projectName)) {
        e.classList.add('project-hide');
      } else {
        e.classList.remove('project-hide');
      }
    })
  })
}

export const createProjectForm = () => {
  const aside = document.querySelector('aside');
  const asideFormSection = aside.querySelector('.form-section');
  const addProjectButton = document.querySelector('.add-project-button');

  const projectForm = document.createElement('form');
  projectForm.setAttribute('id','project-form');
  projectForm.setAttribute('action','post');
  projectForm.setAttribute('novalidate','true');

  const fieldset = document.createElement('fieldset');

  const input = document.createElement('input');
  input.type = 'text';
  input.setAttribute('id','project-name');
  input.placeholder = 'Ex: Birthday';
  fieldset.appendChild(input);

  const small = document.createElement('small');
  fieldset.appendChild(small);
  projectForm.appendChild(fieldset);

  const formButton = document.createElement('section');
  formButton.classList.add('form-button');
  
  const submitProjectButton = document.createElement('button');
  submitProjectButton.classList.add('submit-project-button');
  submitProjectButton.setAttribute('type', 'submit');
  submitProjectButton.textContent = 'Submit';
  formButton.appendChild(submitProjectButton);

  const cancelProjectButton = document.createElement('button');
  cancelProjectButton.classList.add('cancel-project-button');
  cancelProjectButton.setAttribute('type', 'button');
  cancelProjectButton.textContent = 'Cancel';
  formButton.appendChild(cancelProjectButton);

  cancelProjectButton.addEventListener('click', () => {
    projectForm.remove();
    aside.style.gridTemplateRows = '100px 80px 1fr';
    addProjectButton.disabled = false;
  })
  projectForm.appendChild(formButton);
  asideFormSection.appendChild(projectForm)

  return projectForm;
}

export const handleAsideGrid = (state) => {
  const aside = document.querySelector('aside');
  const addProjectButton = document.querySelector('.add-project-button');

  if (state === 'visible') {
    aside.style.gridTemplateRows = '100px 200px 1fr';
    addProjectButton.disabled = true;
  } else {
    aside.style.gridTemplateRows = '100px 80px 1fr';
    addProjectButton.disabled = false;
  }
}

export const createTodo = (todoName, displayedDate, todoPriority, todoDescription, selectedProject, projectList, loading) => {
  const splitedProject = selectedProject.split(' ');
  const projectClassName = splitedProject.join('');
  console.log(splitedProject, projectClassName);
  
  const todo = document.createElement('section');
  todo.classList.add('todo');
  todo.classList.add('not-checked');
  todo.classList.add(projectClassName);
  if (loading === true) {
    todo.classList.add('project-hide');
  }

  const todoSection = document.createElement('section');
  todo.appendChild(todoSection);

  const priorityColor = document.createElement('section');
  if (todoPriority === 'low') {
    priorityColor.classList.add('priority-color-low')
  } else if (todoPriority === 'medium') {
    priorityColor.classList.add('priority-color-medium')
  } else if (todoPriority === 'high') {
    priorityColor.classList.add('priority-color-high')
  }
  todoSection.appendChild(priorityColor);

  const checkboxSection = document.createElement('section');
  todoSection.appendChild(checkboxSection);

  const checkboxLabel = document.createElement('label');
  checkboxLabel.setAttribute('for', 'checkbox');
  checkboxSection.appendChild(checkboxLabel);

  const checkbox = document.createElement('input');
  checkbox.classList.add('checkbox');
  checkbox.setAttribute('type', 'checkbox');
  checkboxSection.appendChild(checkbox);

  checkbox.addEventListener('change', () => {
    if (todo.classList.contains('not-checked')) {
      todo.classList.add('checked');
      todo.classList.remove('not-checked');
    } else {
      todo.classList.add('not-checked');
      todo.classList.remove('checked');
    }
  })

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = todoName;
  todoSection.appendChild(name);

  const date = document.createElement('p');
  date.classList.add('date');
  date.textContent = displayedDate;
  todoSection.appendChild(date);

  const seeMoreButton = document.createElement('button');
  seeMoreButton.setAttribute('type', 'button');
  seeMoreButton.classList.add('see-more-button');
  todoSection.appendChild(seeMoreButton);

  const seeMoreImage = document.createElement('img');
  seeMoreImage.src = downIcon;
  seeMoreImage.setAttribute('alt', 'See more button');
  seeMoreButton.appendChild(seeMoreImage);

  seeMoreButton.addEventListener('click', () => {
    if (!todo.classList.contains('todo-extended')) {
      todo.classList.add('todo-extended');
      seeMoreImage.src = upIcon;

      const descriptionSection = document.createElement('section');
      descriptionSection.classList.add('description-section');
      todo.appendChild(descriptionSection);
  
      const descriptionTitle = document.createElement('p');
      descriptionTitle.textContent = 'Description:';
      descriptionSection.appendChild(descriptionTitle);
  
      const descriptionText = document.createElement('p');
      descriptionText.textContent = todoDescription;
      descriptionSection.appendChild(descriptionText);
    } else {
      todo.classList.remove('todo-extended');
      seeMoreImage.src = downIcon;

      const descriptionSection = todo.querySelector('.description-section');
      descriptionSection.remove();
    }
  })

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('type', 'button');
  deleteButton.classList.add('delete-button');
  todoSection.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    const projectIndex = projectList.findIndex((project) => project.name === selectedProject);
    const todoIndex = projectList[projectIndex].todoList.findIndex((toDo) => toDo.name === todoName);

    projectList[projectIndex].todoList.splice(todoIndex, 1); // splice modifies the original array
    // console.log(projectList);

    localStorage.setItem('projectList', JSON.stringify(projectList)) // Update the memory
    const storedProject = JSON.parse(localStorage.getItem('projectList'));
    console.log(storedProject);

    todo.remove();
  })

  const deleteImage = document.createElement('img');
  deleteImage.src = deleteIcon;
  deleteImage.setAttribute('alt', 'Delete todo button');
  deleteButton.appendChild(deleteImage);

  return todo;
}

export const createTodoForm = () => {
  const body = document.querySelector('body')
  const addTodoButton = document.querySelector('.add-todo-button');

  const alertSection = document.createElement('section');
  alertSection.classList.add('alert-section');
  body.appendChild(alertSection);

  const mainFormSection = document.createElement('section');
  mainFormSection.classList.add('class', 'form-section-todo');
  alertSection.appendChild(mainFormSection);

  const sectionTitle = document.createElement('p');
  sectionTitle.textContent = 'New Task';
  mainFormSection.appendChild(sectionTitle);

  const todoForm = document.createElement('form');
  todoForm.setAttribute('id','todo-form');
  todoForm.setAttribute('action','post');
  todoForm.setAttribute('novalidate','true');
  mainFormSection.appendChild(todoForm);

  /* Priority input */
  const priorityFieldset = document.createElement('fieldset');
  todoForm.appendChild(priorityFieldset);

  const priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for', 'todo-priority');
  priorityLabel.textContent = 'Priority:';
  priorityFieldset.appendChild(priorityLabel);

  const prioritySelect = document.createElement('select');
  prioritySelect.setAttribute('name', 'todo-priority');
  prioritySelect.setAttribute('id', 'todo-priority');
  priorityFieldset.appendChild(prioritySelect);

  const lowOption = document.createElement('option');
  lowOption.setAttribute('value', 'low');
  lowOption.textContent = 'Low';
  prioritySelect.appendChild(lowOption);

  const mediumOption = document.createElement('option');
  mediumOption.setAttribute('value', 'medium');
  mediumOption.textContent = 'Medium';
  prioritySelect.appendChild(mediumOption);

  const highOption = document.createElement('option');
  highOption.setAttribute('value', 'high');
  highOption.textContent = 'High';
  prioritySelect.appendChild(highOption);

  /* Name input */
  const mainNameDateFieldset = document.createElement('fieldset');
  todoForm.appendChild(mainNameDateFieldset);

  const nameFieldset = document.createElement('fieldset');
  mainNameDateFieldset.appendChild(nameFieldset);

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'todo-name');
  nameLabel.textContent = 'Name:';
  nameFieldset.appendChild(nameLabel);

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'todo-name');
  nameFieldset.appendChild(nameInput);

  const nameSmall = document.createElement('small');
  nameFieldset.appendChild(nameSmall); 

  /* Date input */
  const dateFieldset = document.createElement('fieldset');
  mainNameDateFieldset.appendChild(dateFieldset);

  const dateLabel = document.createElement('label');
  dateLabel.setAttribute('for', 'todo-date');
  dateLabel.textContent = 'Due date:';
  dateFieldset.appendChild(dateLabel);

  const dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'date');
  dateInput.setAttribute('id', 'todo-date');
  dateFieldset.appendChild(dateInput);

  const dateSmall = document.createElement('small');
  dateFieldset.appendChild(dateSmall);
  
  /* Description input */
  const descriptionFieldset = document.createElement('fieldset');
  todoForm.appendChild(descriptionFieldset);

  const descriptionLabel = document.createElement('label');
  descriptionLabel.setAttribute('for', 'todo-description');
  descriptionLabel.textContent = 'Description:';
  descriptionFieldset.appendChild(descriptionLabel);

  const descriptionInput = document.createElement('input');
  descriptionInput.setAttribute('type', 'text');
  descriptionInput.setAttribute('id', 'todo-description');
  descriptionFieldset.appendChild(descriptionInput);

  const descriptionSmall = document.createElement('small');
  descriptionFieldset.appendChild(descriptionSmall);

  /* Form buttons */
  const formButton = document.createElement('section')
  formButton.classList.add('form-button');
  todoForm.appendChild(formButton);

  const submitButton = document.createElement('button');
  submitButton.classList.add('submit-todo-button');
  submitButton.setAttribute('type', 'submit');
  submitButton.textContent = 'Submit';
  formButton.appendChild(submitButton);

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('cancel-todo-button');
  cancelButton.setAttribute('type', 'button');
  cancelButton.textContent = 'Cancel';
  formButton.appendChild(cancelButton);

  cancelButton.addEventListener('click', () => {
    alertSection.remove();
    addTodoButton.disabled = false;
  })

  return {alertSection, todoForm};
}

export const handleTabButtons = (state) => {
  const completedButton = document.querySelector('.completed-button');
  const todoButton = document.querySelector('.todo-button');
  const addTodoButton = document.querySelector('.add-todo-button');
  const notCheckedTodo = document.querySelectorAll('.not-checked');

  if (state === 'completed') {
    addTodoButton.classList.add('tab-hide');

    completedButton.style.color = 'black';
    todoButton.style.color = 'var(--light-grey)';

    notCheckedTodo.forEach((e) => {
      e.classList.add('tab-hide');
    });
  } else {
    addTodoButton.disabled = false;
    addTodoButton.classList.remove('tab-hide');

    completedButton.style.color = 'var(--light-grey)';
    todoButton.style.color = 'black';
    notCheckedTodo.forEach((e) => {
      e.classList.remove('tab-hide');
    });
  }
}
