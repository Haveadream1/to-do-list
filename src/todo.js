/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const todo = () => {
  const buttonCompleted = document.querySelector('.button-completed');
  const buttonTodo = document.querySelector('.button-to');
  const buttonAddTodo = document.querySelector('.add-todo');
  const formSection = document.querySelector('.form-section');
  const formText = document.querySelector('#form-text');
  const formDate = document.querySelector('#form-date');

  const changeColor = (() => {
    buttonCompleted.style.color = '#B0B0B0';
    buttonTodo.style.color = 'black';
  })();

  document.querySelectorAll('.not-checked').forEach((element) => {
    element.style.display = 'flex';
  });

  const fixAfterCompleted = (() => {
    formDate.value = '';
    formText.value = '';
    formDate.classList.remove('success');
    formText.classList.remove('success');

    buttonAddTodo.style.display = 'block';
    formSection.style.display = 'block';
  })(); 
  
};

export default todo;
