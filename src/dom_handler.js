// Handle all the DOM with a module

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

export const displayProjectName = () => {
  const projectButton = document.createElement('button');
  const projectName = document.querySelector('#project-name').value;
  const projectSection = document.querySelector('.project-section');

  projectButton.classList.add('project-button');
  projectButton.textContent = projectName;
  projectSection.appendChild(projectButton);

  projectButton.addEventListener('click', () => {
    const selected = document.querySelectorAll('.selected');
    if (!projectButton.classList.contains('selected')) {
      selected.forEach(e => e.classList.remove('selected'));
      projectButton.classList.add('selected');
      // window.alert('test');
    }
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

export const createTodo = (todoName, displayedDate) => {
  const todo = document.createElement('section');
  todo.classList.add('todo');
  todo.classList.add('not-checked');

  const checkbox = document.createElement('input');
  checkbox.classList.add('checkbox');
  checkbox.setAttribute('type', 'checkbox');
  todo.appendChild(checkbox);

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
  todo.appendChild(name);

  const date = document.createElement('p');
  date.classList.add('date');
  date.textContent = displayedDate;
  todo.appendChild(date);

  return todo;
}

export const createTodoForm = () => {
  const main = document.querySelector('main');
  const mainFormSection = main.querySelector('.form-section');
  const addTodoButton = document.querySelector('.add-todo-button');

  const todoForm = document.createElement('form');
  todoForm.setAttribute('id','todo-form');
  todoForm.setAttribute('action','post');
  todoForm.setAttribute('novalidate','true');

  const mainfieldset = document.createElement('fieldset');

  const textFieldset = document.createElement('fieldset');
  const formText = document.createElement('input');
  formText.type = 'text';
  formText.setAttribute('id','todo-name');
  formText.placeholder = 'Ex: morning task';
  textFieldset.appendChild(formText);

  const formTextSmall = document.createElement('small');
  textFieldset.appendChild(formTextSmall);
  mainfieldset.appendChild(textFieldset);

  const dateFieldset = document.createElement('fieldset');
  const formDate = document.createElement('input');
  formDate.type = 'date';
  formDate.setAttribute('id','todo-date');
  dateFieldset.appendChild(formDate);

  const formDateSmall = document.createElement('small');
  dateFieldset.appendChild(formDateSmall);
  mainfieldset.appendChild(dateFieldset);

  todoForm.appendChild(mainfieldset);

  const formButton = document.createElement('section')
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
    todoForm.remove();
    addTodoButton.disabled = false;
  })

  todoForm.appendChild(formButton);
  mainFormSection.appendChild(todoForm);

  return todoForm;
}

export const handleTabButtons = (state) => {
  const completedButton = document.querySelector('.completed-button');
  const todoButton = document.querySelector('.todo-button');
  const addTodoButton = document.querySelector('.add-todo-button');
  const notCheckedTodo = document.querySelectorAll('.not-checked');

  if (state === 'completed') {
    addTodoButton.classList.add('hide');

    completedButton.style.color = 'black';
    todoButton.style.color = 'var(--light-grey)';

    notCheckedTodo.forEach((e) => {
      e.classList.add('hide');
    });
  } else {
    addTodoButton.disabled = false;
    addTodoButton.classList.remove('hide');

    completedButton.style.color = 'var(--light-grey)';
    todoButton.style.color = 'black';
    notCheckedTodo.forEach((e) => {
      e.classList.remove('hide');
    });
  }
}
