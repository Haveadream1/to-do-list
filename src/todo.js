const todo = () => {
  let buttonCompleted = document.querySelector(".button-completed");
  let buttonTodo = document.querySelector(".button-to");

  const changeColor = (() => {
    buttonCompleted.style.color = "#F5F5F5";
    buttonTodo.style.color = "black";
  })();
};

export default todo;
