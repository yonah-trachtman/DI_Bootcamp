//     Create another file named app.js in the same directory.

//     In app.js, require the greeting.js module and use the greet function to greet a user.

const {greet} = require("./greeting.js")
const {welcomeToRedwall} = require("./colorful-message.js")

//     Run app.js using Node.js and see the greeting message.

console.log(greet("Jace"));

welcomeToRedwall()




