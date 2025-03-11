// Limited to one class per file
export default class Project {
  constructor(name) {
    this.name = name;
    this.todoList = [];
  }

  addTodo(todo) {
    this.todoList.push(todo);
  }
}
