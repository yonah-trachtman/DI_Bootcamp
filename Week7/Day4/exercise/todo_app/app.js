import { TodoList } from "./todo.js";

//     In app.js, import the TodoList class from the todo.js module.

//     Create an instance of the TodoList class.
const myList = new TodoList();
//     Add a few tasks, mark some as complete, and list all tasks.
myList.addTask('Buy groceries');
myList.addTask('Call the doctor');
myList.addTask('Finish the project');


myList.markTaskComplete('Buy groceries');
myList.markTaskComplete('Finish the project');


console.log(myList.listTasks());

//     Run app.js and verify that the todo list operations are working correctly.
