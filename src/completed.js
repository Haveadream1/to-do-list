const completed = () => {
  let buttonCompleted = document.querySelector(".button-completed");
  let buttonTodo = document.querySelector(".button-to");
  let todo = document.querySelector(".todo");

  const changeColor = (() => {
    buttonCompleted.style.color = "black";
    buttonTodo.style.color = "#F5F5F5";
    todo.remove();
  })();
};

export default completed;
