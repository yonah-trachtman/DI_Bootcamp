// Recreate the todo list above:

//     Create an HTML, CSS and a JS file.

//     In the HTML file
//         create a form with one input type="text", and a “Submit” button.
//         add an empty div below the form
//         <div class="listTasks"></div>

//     In the js file, you must add the following functionalities:
//         Create an empty array : const tasks = [];

const tasks = [];
const form = document.getElementsByClassName("addtask")
const formInput = document.getElementById("newTask")
const tasklist = document.getElementsByClassName("list")
const clear = document.getElementsByClassName("clear")

//         Create a function called addTask(). As soon as the user clicks on the button:
//             check that the input is not empty,
//             then add it to the array (ie. add the text of the task)
//             then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
//             Each new task added should have (starting from left to right - check out the image at the top of the page)
//                 a “X” button. Use font awesome for the “X” button.
//                 an input type="checkbox". The label of the input is the task added by the user.
function addTask(e) {
    e.preventDefault()
    let newTask;
    if(formInput.value.trim() === ""){
        alert('Please put a valid input');
      } else {
        newTask = formInput.value.trim()
        let newTaskContainer = document.createElement("div")
        newTaskContainer.classList.add("listTasks")
        const x = document.createElement("div")
        x.innerHTML = '<i class="fa-solid fa-square-xmark" style="color: #e01b24;"></i>'
        newTaskContainer.append(x)
        const check = document.createElement("INPUT");
        check.setAttribute("type", "checkbox");
        newTaskContainer.append(check)
        const para = document.createElement("p");
        para.innerText = newTask
        newTaskContainer.append(para)
        tasks.unshift(newTaskContainer)
        x.addEventListener("click", function () {
            let self = tasks.indexOf(newTaskContainer)
            tasks.splice(self, 1)
            newTaskContainer.remove()
        })
        render(1)
      }

}
function render(i) {
    if (i == 1) {
        for (let index = 0; index < tasks.length; index++) {
            tasklist[0].insertBefore(tasks[index], tasklist[0].children[0])
    }} else {
        for (let index = 0; index < tasks.length; index++) {
            tasks[index].remove()
    }}

}




form[0].addEventListener("submit", addTask, false)

clear[0].addEventListener("click",function () {
    render(2)
    while (tasks.length > 0) {
        tasks.shift()
    }
    
})


// BONUS I (not mandatory):

//     Change the variable tasks to an array of task objects.
//     Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
//     Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
//     Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.

// BONUS II (not mandatory):

//     Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.

