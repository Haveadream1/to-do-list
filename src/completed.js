const completed = () => {
  let buttonCompleted = document.querySelector(".button-completed");
  let buttonTodo = document.querySelector(".button-to");
  let todo = document.querySelector(".todo");

  const changeColor = (() => {
    buttonCompleted.style.color = "black";
    buttonTodo.style.color = "#B0B0B0";
    todo.remove();
  })();
};

export default completed;
