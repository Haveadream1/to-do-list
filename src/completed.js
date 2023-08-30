/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const completed = () => {
  const buttonCompleted = document.querySelector('.button-completed');
  const buttonTodo = document.querySelector('.button-to');
  const buttonAddTodo = document.querySelector('.add-todo');
  const formSection = document.querySelector('.form-section');

  const changeColor = (() => {
    buttonCompleted.style.color = 'black';
    buttonTodo.style.color = '#B0B0B0';
  })();

  document.querySelectorAll('.not-checked').forEach((element) => {
    element.style.display = 'none';
  });

  const hideElements = (() => {
    buttonAddTodo.style.display = 'none';
    formSection.style.display = 'none';
  })();

};

export default completed;

/*  need to get a value from todo when checkbox is on completed
    so we can remove all the section that doesn't have this status
    maybe not remove just copy the section so when we go back to todo
    we still have the object */
