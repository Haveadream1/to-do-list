const todo = () => {
  let buttonCompleted = document.querySelector(".button-completed");
  let buttonTodo = document.querySelector(".button-to");

  const changeColor = (() => {
    buttonCompleted.style.color = "#B0B0B0";
    buttonTodo.style.color = "black";
  })();
};

export default todo;
