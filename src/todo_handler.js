// class Todo {
//   constructor(name, date) {
//     this.name = name;
//     this.date = date;
//   }
// }
// export default Todo;

const todoModule = () => {
  class Todo {
    constructor(name, date) {
      this.name = name;
      this.date = date;
    }
  }


};

export default todoModule;

/*
Separate the js:
* Todo module
* Project module
* Dom manipulation
* home (our main)

// mymodule.js
export function myFunction() {
  // function code here
}

export class MyClass {
  // class code here
}

export const MY_VARIABLE = "some value";

import { myFunction, MyClass, MY_VARIABLE } from './mymodule.js';
 */