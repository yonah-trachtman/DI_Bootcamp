// Instructions

// Create a fun emoji guessing game using an Express API.
// The game will present players with a random emoji and a set of options. Players need to guess the correct name of the emoji from the given options.
// The game will keep track of the player’s score and provide feedback on their guesses.

// Requirements:

//     Set up an Express server to handle the game.
const express = require('express')
const app = express()
app.use(express.json());
//     Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

app.listen(5000, ()=> {
    console.log("running in server 5000");
})
//     Create an array of emoji objects, each containing the emoji character and its corresponding name.
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
]
//     Generate a random emoji from the array and select a few incorrect options as distractors.

//     Using a form, present the player with the random emoji and multiple choice options (including the correct name).

//     Allow the player to submit their guess. Get the data from the form and POST it, using the Fetch API.

//     Check if the guess is correct and update the player’s score.

//     Provide feedback to the player, indicating whether their guess was correct or not.

//     Continue presenting new emojis and options for the player to guess.

//     Keep track of the player’s total score.

//     Implement a leaderboard to show the top scores.

// sample emojis


