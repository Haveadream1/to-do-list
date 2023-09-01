const project = () => {
    const container = document.querySelector('.container');

    document.querySelectorAll('.test').forEach((element) => {
        element.style.display = 'none';
      });
    
      // issue todo doesn't show
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