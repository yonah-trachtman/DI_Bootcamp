// 🌟 Exercise 6: Simple NPM Package Usage
// Instructions

//     Create a directory named npm-beginner.

//     Inside the npm-beginner directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

//     Install the chalk package, which provides easy coloring for terminal output, by running npm install chalk in the terminal.

//     Create a file named app.js inside the npm-beginner directory.

//     In app.js, require the chalk package and use it to color and style text in the terminal.
const chalk = require("chalk")
//     Write a simple script that uses chalk to print a colorful message.
console.log(chalk.blue('Hello world!'));
//     Run app.js using Node.js and observe the colorful output in the terminal.
