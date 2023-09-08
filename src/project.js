const project = () => {
  const previousSection0 = document.querySelector('.rm-class-todo');
  previousSection0.classList.add('class-todo');
  previousSection0.classList.remove('rm-class-todo');
  
  const previousSection1 = document.querySelector('.rm-section-today');
  previousSection1.classList.add('section-today');
  previousSection1.classList.remove('rm-section-today');

  const previousSection2 = document.querySelector('.rm-section-this-week');
  previousSection2.classList.add('section-this-week');
  previousSection2.classList.remove('rm-section-this-week');

  const previousSection3 = document.querySelector('.rm-section-upcoming');
  previousSection3.classList.add('section-upcoming');
  previousSection3.classList.remove('rm-section-upcoming');
};

const createProject = () => {
  document.querySelectorAll('.class-todo').forEach((element) => {
    element.style.display = 'none';
  });

  // issue class 
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

  const container = document.querySelector('.container');
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
}
export {project,createProject};


  /* do the same as the completed tab, 
  add a specific class from the button to the todo
  and remove it when we click on another project */

  /* the project name should be a button that will
  display the container
  and every time we create a new button, a new container created
  maybe link them with a name class or a number
  play with overflow and hide */