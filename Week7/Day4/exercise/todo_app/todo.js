// 🌟 Exercise 4: Todo List using ES6 module syntax
// Instructions

//     Create a directory named todoApp.

//     Inside the todoApp directory, create two files: todo.js and app.js.

//     In todo.js, define an ES6 module that exports a TodoList class.
 class TodoList {
    constructor() {
        this.todos = [];
      }

      addTask(task) {
        this.todos.push({ task, completed: false });
      }
    
      markTaskComplete(task) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].task == task) {
                this.todos[i].completed = true;
            }   
        }
      }
    
      listTasks() {
        return this.todos;
      }
}
export {TodoList}
