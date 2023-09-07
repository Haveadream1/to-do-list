const project = () => {
    const container = document.querySelector('.container');
    const section = document.querySelector('.class-todo');

    document.querySelectorAll('.class-todo').forEach((element) => {
        element.style.display = 'none';
    });

    const verifyClassExistence = section.classList.contains('test');
    if(verifyClassExistence) {
      console.log('He has the class');
    } else {
      console.log('no class');
    }
    /*
    const checkIfAlreadyCreated = () => {
      if (section.classList === 'test') {
        console.log('work')
      } else {
         console.log('not work')
      }
    }
    checkIfAlreadyCreated()
    */

    // kinda work , so i want to add and remove those class when i 
    // add remove the todo and give a class or a container for the project
    // find a way to go back so check if a section is already create don't 
    // recreate one just give it the class class-todo
    const previousSection0 = document.querySelector('.class-todo');
    previousSection0.classList.remove('class-todo');
    previousSection0.classList.add('rm-class-todo');

    const previousSection1 = document.querySelector('.section-today');
    previousSection1.classList.remove('section-today');
    previousSection1.classList.add('rm-section-today');

    const previousSection2 = document.querySelector('.section-this-week');
    previousSection2.classList.remove('section-this-week');
    previousSection2.classList.add('rm-section-this-week');

    const previousSection3 = document.querySelector('.section-upcoming');
    previousSection3.classList.remove('section-upcoming');
    previousSection3.classList.add('rm-section-upcoming');


    const sectionClassTodo = document.createElement('section');
    sectionClassTodo.classList.add('class-todo');
    // sectionClassTodo.classList.add('test');
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

    
    /*
    const rmClassTodo = document.querySelector('.rm-class-todo');
    rmClassTodo.addEventListener('click', () => {
      console.log('okeke')
      const previousSection0 = document.querySelector('.rm-class-todo');

  
      const previousSection1 = document.querySelector('.rm-section-today');
  
      const previousSection2 = document.querySelector('.rm-section-this-week');

      const previousSection3 = document.querySelector('.rm-section-upcoming');
    })
    */

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