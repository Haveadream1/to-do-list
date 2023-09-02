const project = () => {
    const container = document.querySelector('.container');

    document.querySelectorAll('.test').forEach((element) => {
        element.style.display = 'none';
    });

    // kinda work , so i want to add and remove those class when i 
    // add remove the todo and give a class or a container for the project
    const previousSection0 = document.querySelector('.class-todo');
    previousSection0.classList.remove('class-todo');

    const previousSection1 = document.querySelector('.section-today');
    previousSection1.classList.remove('section-today');

    const previousSection2 = document.querySelector('.section-this-week');
    previousSection2.classList.remove('section-this-week');

    const previousSection3 = document.querySelector('.section-upcoming');
    previousSection3.classList.remove('section-upcoming');

    
    // issue todo doesn't show 
    /*
    const formSection = document.createElement('section');
    formSection.classList.add('form-section');
    container.appendChild(formSection);

    const form = document.createElement('form');
    form.setAttribute('id','form');
    form.setAttribute('action','post');
    form.noValidate = true;
    formSection.appendChild(form);

    const fieldset = document.createElement('fieldset');
    fieldset.classList.add('fieldset-form');
    form.appendChild(fieldset);

    const fieldsetIn1 = document.createElement('fieldset');
    fieldset.appendChild(fieldsetIn1);

    const inputText = document.createElement('input');
    inputText.setAttribute('type','text');
    inputText.setAttribute('id','form-text');
    inputText.setAttribute('placeholder','Add a new task');
    fieldsetIn1.appendChild(inputText);

    const small1 = document.createElement('small');
    fieldsetIn1.appendChild(small1);

    const fieldsetIn2 = document.createElement('fieldset');
    fieldset.appendChild(fieldsetIn2);

    const inputDate = document.createElement('input');
    inputDate.setAttribute('type','date');
    inputDate.setAttribute('id','form-date');
    fieldsetIn2.appendChild(inputDate);

    const small2 = document.createElement('small');
    fieldsetIn2.appendChild(small2);

    const sectionButton = document.createElement('section');
    sectionButton.classList.add('form-button');
    form.appendChild(sectionButton);

    const buttonSubmit = document.createElement('button');
    buttonSubmit.classList.add('button-submit');
    buttonSubmit.textContent = 'Submit';
    sectionButton.appendChild(buttonSubmit);

    const buttonSubmitCancel = document.createElement('button');
    buttonSubmitCancel.classList.add('button-submit-cancel');
    buttonSubmitCancel.textContent = 'Cancel';
    buttonSubmitCancel.setAttribute('type','button');
    sectionButton.appendChild(buttonSubmitCancel);
    */

    const sectionClassTodo = document.createElement('section');
    sectionClassTodo.classList.add('class-todo');
    container.appendChild(sectionClassTodo);

    const sectionToday = document.createElement('section');
    sectionToday.classList.add('section-today');
    sectionClassTodo.appendChild(sectionToday);

    const dateTodo = document.createElement('p');
    dateTodo.classList.add('date-todo');
    dateTodo.textContent = 'Today';
    sectionToday.appendChild(dateTodo);

    const sectionThisWeek = document.createElement('section');
    sectionThisWeek.classList.add('section-this-week');
    sectionClassTodo.appendChild(sectionThisWeek);

    const dateTodoWeek = document.createElement('p');
    dateTodoWeek.classList.add('date-todo');
    dateTodoWeek.textContent = 'This week';
    sectionThisWeek.appendChild(dateTodoWeek);

    const sectionUpcoming = document.createElement('section');
    sectionUpcoming.classList.add('section-upcoming');
    sectionClassTodo.appendChild(sectionUpcoming);

    const dateTodoUpcoming = document.createElement('p');
    dateTodoUpcoming.classList.add('date-todo');
    dateTodoUpcoming.textContent = 'Upcoming';
    sectionUpcoming.appendChild(dateTodoUpcoming);
};
export default project;
  /* re-make container in js 
    when the button is push create the form and the container
    when the button is pushed a second time don't re-create
    but display  
  */

  /* do the same as the completed tab, 
  add a specific class from the button to the todo
  and remove it when we click on another project */

  /* the project name should be a button that will
  display the container
  and every time we create a new button, a new container created
  maybe link them with a name class or a number
  play with overflow and hide */