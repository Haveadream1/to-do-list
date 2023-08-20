const completed = () => {
  const buttonCompleted = document.querySelector('.button-completed');
  const buttonTodo = document.querySelector('.button-to');
  const allCheckbox = document.querySelectorAll('.checkbox');
  const todo = document.querySelector('.todo');

  const changeColor = (() => {
    buttonCompleted.style.color = 'black';
    buttonTodo.style.color = '#B0B0B0';
  })();

  const removeUncompleted = (() => {
    if (test === 0) {
      allCheckbox.forEach((i) => {
        i.remove();
      });
    }
  })();
};

export default completed;

/*  need to get a value from todo when checkbox is on completed
    so we can remove all the section that doesn't have this status
    maybe not remove just copy the section so when we go back to todo
    we still have the object */
