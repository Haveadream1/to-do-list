import { addDays, format, compareAsc} from 'date-fns';

const task = () => {
  const main = document.querySelector('main');
  const mainFormSection = main.querySelector('.form-section');

  const completedButton = document.querySelector('.completed-button');
  const todoButton = document.querySelector('.todo-button');

  const todaySection = document.querySelector('.today-section');
  const actualWeekSection = document.querySelector('.actual-week-section');
  const upcomingWeekSection = document.querySelector('.upcoming-week-section');

  const addTodoButton = document.querySelector('.add-todo-button');

  const todayDate = new Date();
  const todayDateFormat = format(todayDate, 'dd-MM-yyyy');

  const actualWeek  = addDays(new Date(todayDate), 7);
  const actualWeekFormat = format(actualWeek, 'dd-MM-yyyy');
  console.log(todayDateFormat, actualWeekFormat);

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

  const showError = (input, message) => {
    const fieldset = input.parentElement;
    input.classList.add('error');
    input.classList.remove('success');

    const small = fieldset.querySelector('small');
    small.style.padding = '10px 10px 0 10px';
    small.textContent = message;
  }
  
  const showSuccess = (input) => {
    const fieldset = input.parentElement;
    input.classList.add('success');
    input.classList.remove('error');

    const small = fieldset.querySelector('small');
    small.style.padding = '0';
    small.textContent = '';
  }

  const checkTodoName = () => {
    const todoName = document.querySelector('#todo-name');

    let valid = false;
    const text = todoName.value.trim();

    if (!isRequired(text)) {
      showError(todoName, '*Please fill this field');
    } else {
      showSuccess(todoName);
      valid = true;
    }
    return valid;
  }

  const checkTodoDate = () => {
    const todoDate = document.querySelector('#todo-date');
    const todoDateValue = document.querySelector('#todo-date').value;

    const splitTodoDate = todoDateValue.split('-') ;
    const splitTodayDate = todayDateFormat.split('-');

    const compareDate = compareAsc(new Date(splitTodoDate[0],splitTodoDate[1],splitTodoDate[2]), new Date(splitTodayDate[2],splitTodayDate[1],splitTodayDate[0]));

    let valid = false;
    if (!isRequired(todoDateValue)) {
      showError(todoDate, '*Please fill this field');
    } else if (!isDate(compareDate)) {
      showError(todoDate, '*Please put a current date');
    } else {
      showSuccess(todoDate);
      valid = true;
    }
    return valid;
  }

  const createTodo = () => {
    const todoDate = document.querySelector('#todo-date').value;
    const todoName = document.querySelector('#todo-name').value;

    const splitDate = todoDate.split('-');
    const displayedDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    const formatedDate = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    // isSameWeek(new Date(todayDateFormat), new Date(formatedDate)); // Alt

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

  const createTodoForm = () => {
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

    todoForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formNameValid = checkTodoName();
      const formDateValid = checkTodoDate();
      const isFormValid = formNameValid && formDateValid;

      if (isFormValid) {
        createTodo();
        todoForm.remove();
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

  createTodoForm(); // change position

  addTodoButton.addEventListener('click', () => {
    createTodoForm();
    addTodoButton.disabled = true;
  })

  completedButton.addEventListener('click', () => {
    const notCheckedTodo = document.querySelectorAll('.not-checked');
    const todoForm = document.querySelector('#todo-form');

    if (mainFormSection.hasChildNodes()) {
      todoForm.remove();
    }

    addTodoButton.classList.add('hide');

    completedButton.style.color = 'black';
    todoButton.style.color = 'var(--light-grey)';

    notCheckedTodo.forEach((e) => {
      e.classList.add('hide');
    });
  })

  todoButton.addEventListener('click', () => {
    const notCheckedTodo = document.querySelectorAll('.not-checked');

    addTodoButton.disabled = false;
    addTodoButton.classList.remove('hide');

    completedButton.style.color = 'var(--light-grey)';
    todoButton.style.color = 'black';

    notCheckedTodo.forEach((e) => {
      e.classList.remove('hide');
    });
  })
};
export default task;