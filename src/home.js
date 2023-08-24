import { addDays, addMonths, format} from 'date-fns';
import completed from './completed';
import todo from './todo';

// API and project
const home = () => {
  const dateAPI = new Date();
  const today = addDays(dateAPI, 0);
  const month = addMonths(dateAPI, 1);
  const formatMonth = format(month, 'MM');
  console.log(formatMonth);
  // const formatDate = format(dateAPI, 'MM/dd/yy');
  // console.log(formatDate);

  const container = document.querySelector('.container');
  const buttonAdd = document.querySelector('.add-to-do');
  const buttonTab = document.querySelector('.tab');
  const aside = document.querySelector('aside');
  const buttonCompleted = document.querySelector('.button-completed');
  const buttonTodo = document.querySelector('.button-to');
  const formSection = document.querySelector('.form-section');
  const formText = document.querySelector('#form-text');
  const formDate = document.querySelector('#form-date');
  const form = document.querySelector('#form');
  const formAside = document.querySelector('#form-aside');
  const buttonAddProject = document.querySelector('.add-project');
  const sectionAside = document.querySelector('.section-aside');
  const projectName = document.querySelector('#project-name');
  const buttonSubmitCancel = document.querySelector('.button-submit-cancel');
  const createdProject = document.querySelector('.created-project');
  const buttonProjectCancel = document.querySelector('.button-project-cancel');
  const myArray = [];

  class Object {
    constructor(date, text) {
      this.date = date;
      this.text = text;
      // need to fix 
      //this.projectNameValue = projectNameValue;
    }
  }

  const createTodo = () => {
    const createSection = document.createElement('section');
    createSection.classList.add('todo');
    container.appendChild(createSection);

    const createLine = document.createElement('div');

    const createCheckBox = document.createElement('input');
    createCheckBox.type = 'checkbox';
    createCheckBox.classList.add('checkbox');
    createCheckBox.addEventListener('change', () => {
      if (createCheckBox.checked) {
        createLine.classList.add('line');
        createSection.appendChild(createLine);
      } else if (!createCheckBox.checked) {
        createLine.remove();
      }
    });
    createSection.appendChild(createCheckBox);

    const createText = document.createElement('p');
    createText.type = 'text';
    createText.classList.add('text');
    createSection.appendChild(createText);

    const createDate = document.createElement('p');
    createDate.type = 'text';
    createDate.classList.add('date');
    createSection.appendChild(createDate);

    for (let i = 0; i < myArray.length; i+=1) {
      const object = myArray[i];
      createText.textContent = `${object.text}`;
      createDate.textContent = `${object.date}`;
      // DATE API
      // const formatDate = format(object.date, 'MM/dd/yy');
      // createDate.textContent = `${object.date}`;
    }
  };

  const getValue = () => {
    const text = document.querySelector('#form-text').value;
    const date = document.querySelector('#form-date').value;
    const newTodo = new Object(date, text);
    myArray.push(newTodo);
    console.log(myArray);
    createTodo();
  };

  buttonAdd.addEventListener('click', () => {
    formSection.style.visibility = 'visible';
    formText.value = '';
  });

  buttonSubmitCancel.addEventListener('click', () => {
    formSection.style.visibility = 'hidden';
    formText.value = '';
  });

  // aside

  // const myProject = [];
  /*
  class project {
      constructor(projectName) {
        this.projectName = projectName;
      };
  }
  */

  buttonTab.addEventListener('click', () => {
    aside.classList.toggle('visibility');
    sectionAside.style.visibility = 'hidden';
  });

  buttonAddProject.addEventListener('click', () => {
    sectionAside.style.visibility = 'visible';
    projectName.value = '';
    sectionAside.style.gridRow = '3';
    createdProject.style.gridRow = '4';
  });

  buttonProjectCancel.addEventListener('click', () => {
    sectionAside.style.visibility = 'hidden';
    projectName.value = '';
    sectionAside.style.gridRow = '5';
    createdProject.style.gridRow = '3';
  });

  const createProject = () => {
    const projectNameValue = document.querySelector('#project-name').value;
    const newProject = new Object(projectNameValue);
    myArray.push(newProject);
    console.log(myArray);

    // need to pass the project name as a object value

    /* 
    const projectNameValue = document.querySelector('#project-name').value;
    const newProject = new project(projectNameValue);
    myProject.push(newProject);
    console.log(myProject); */

    const projectP = document.createElement('p');
    projectP.textContent = projectName;
    createdProject.appendChild(projectP);
  };

  formAside.addEventListener('submit', (event) => {
    event.preventDefault();
    sectionAside.style.visibility = 'hidden';
    sectionAside.style.gridRow = '5';
    createdProject.style.gridRow = '3';
    createProject();
  });

  // tab
  buttonCompleted.addEventListener('click', completed);
  buttonTodo.addEventListener('click', todo);

  // validation 
  const isRequired = (value) => {
    if (value === '') {
      return false;
    // eslint-disable-next-line no-else-return
    } else {
      return true;
    }
  }

  const showError = (input, message) => {
    const fieldset = input.parentElement;
    input.classList.add('error');
    input.classList.remove('success');

    const small = fieldset.querySelector('small');
    small.textContent = message;
  }
  
  const showSuccess = (input) => {
    const fieldset = input.parentElement;
    input.classList.add('success');
    input.classList.remove('error');

    const small = fieldset.querySelector('small');
    small.textContent = '';
  }
  
  const checkFormText = () => {
    let valid = false;
    const text = formText.value.trim();
    if (!isRequired(text)) {
      showError(formText, 'Please fill this field');
    } else {
      showSuccess(formText);
      valid = true;
    }
    return valid;
  }

  const checkFormDate = () => {
    let valid = false;
    const date = formDate.value.trim();
    if (!isRequired(date)) {
      showError(formDate, 'Please fill this field');
    } else {
      showSuccess(formDate);
      valid = true;
    }
    return valid;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // eslint-disable-next-line one-var
    const isFormDateValid = checkFormDate(),
    isFormTextValid = checkFormText();

    const isFormValid = isFormDateValid && isFormTextValid;

    if (isFormValid) {
      // to submit date to server
      getValue();
      formSection.style.visibility = 'hidden';
      console.log('Valid form');
    } else {
      console.log('Error in the form');
    }
  });

  form.addEventListener('input', (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.id) {
      case 'form-text':
        checkFormText();
        break;
      case 'form-date':
        checkFormDate();
        break;
    }
  })
};

export default home;

/*  Create an object each time we create a new todo
    Take the input value after focus loose
    need to find a way to change the object and not creating a new one
    for completed remove the capacity of  creating new todo
    put it like only read
    if the checkbox if on on take the object and create that one in the completed page
    add style line with position relative to the box
    tab show with toggle
    option create a group */