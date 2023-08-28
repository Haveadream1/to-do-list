/* eslint-disable no-else-return */
import { addDays, format, compareAsc} from 'date-fns';
import completed from './completed';
import todo from './todo';

const home = () => {
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
  const sectionToday = document.querySelector('.section-today');
  const sectionThisWeek = document.querySelector('.section-this-week');
  const sectionUpcoming = document.querySelector('.section-upcoming');
  const myArray = [];

  const dateAPI = new Date();
  const dateToday = format(dateAPI, 'yyyy-MM-dd');
  console.log(dateToday);

  const thisWeek  = addDays(new Date(dateToday), 7)
  const dateThisWeek = format(thisWeek, 'yyyy-MM-dd');
  console.log(dateThisWeek);

  const test = compareAsc(new Date(dateToday), new Date(dateThisWeek));
  console.log(test);
  /*
    const thisMonth  = addMonths(new Date(dateToday), 1)
    const dateNextWeek = format(thisMonth, 'yyyy-MM-dd');
    console.log(dateNextWeek);
  */

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
      
      const compareDate = compareAsc(new Date(dateToday), new Date(object.date));
      console.log(compareDate);

      if(compareDate === 0) {
        sectionToday.appendChild(createSection);
      } else if(object.date <= dateThisWeek) {
        sectionThisWeek.appendChild(createSection);
      } else if(object.date > dateThisWeek) {
        sectionUpcoming.appendChild(createSection);
      }
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

  const regroupResetFunction = () => {
    formDate.value = '';
    formText.value = '';
    formDate.classList.remove('success');
    formText.classList.remove('success');
  }

  buttonAdd.addEventListener('click', () => {
    formSection.style.visibility = 'visible';
    regroupResetFunction();
  });

  buttonSubmitCancel.addEventListener('click', () => {
    formSection.style.visibility = 'hidden';
    regroupResetFunction();
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
    projectName.classList.remove('success');
    sectionAside.style.gridRow = '3';
    createdProject.style.gridRow = '4';
  });

  buttonProjectCancel.addEventListener('click', () => {
    sectionAside.style.visibility = 'hidden';
    projectName.value = '';
    projectName.classList.remove('success');
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

    const projectP = document.createElement('button');
    projectP.classList.add('title-project');
    projectP.textContent = projectNameValue;
    createdProject.appendChild(projectP);
  };

  // tab
  buttonCompleted.addEventListener('click', completed);
  buttonTodo.addEventListener('click', todo);

  // validation main 
  const isRequired = (value) => {
    if (value === '') {
      return false;
    } else {
      return true;
    }
  }

  const isDate = (value) => {
    if (value === 1) {
      return false;
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
    const dateNoTrim = formDate.value;
    const compareDate = compareAsc(new Date(dateToday), new Date(dateNoTrim));

    if (!isRequired(date)) {
      showError(formDate, 'Please fill this field');
    } else if (!isDate(compareDate)) {
      showError(formDate, 'Please put a current date')
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

  // validation tab 
  const checkAsideText = () => {
    let valid = false;
    const text = projectName.value.trim();
    if (!isRequired(text)) {
      showError(projectName, 'Please fill this field');
    } else {
      showSuccess(projectName);
      valid = true;
    }
    return valid;
  }

  formAside.addEventListener('submit', (event) => {
    event.preventDefault();

    const formAsideValid = checkAsideText();
    const isFormValid = formAsideValid;

    if (isFormValid) {
      sectionAside.style.visibility = 'hidden';
      sectionAside.style.gridRow = '5';
      createdProject.style.gridRow = '3';
      createProject();
      console.log('Valid form');
    } else {
      console.log('Error in form');
    }
  });

  formAside.addEventListener('input', (event) => {
    if(event.target.id  === 'project-name') {
        checkAsideText()
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
    option create a group
    project name as a button
    when we click on a project the todo are ordered 
    by time, thanks to the API that will display
    date of today, in one week, in one month
    so divide the page in 3
    create page for each project and play with the visibility like
    with the tab */