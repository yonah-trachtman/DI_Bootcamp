// Task 1: Basic Module System

//     Inside the daily-challenge directory, create a file named greeting.js.

//     In greeting.js, define a function called greet that takes a name as a parameter and returns a personalized greeting message.
const greet = (name) => {
    return `Greetings, Planeswalker ${name}! ✨

    I hope your journey through the multiverse is filled with adventure and triumph. Whether you 
    seek wisdom, strategy, or just a moment of respite, I’m here to assist you in your quest. What can I 
    help you with today?`
}
//     Export the greet function using the Node.js module system.

module.exports = {
    greet
}

