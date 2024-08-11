"use strict";
let processInput = (input) => {
    if (typeof input === "number") {
        return input * input;
    }
    else if (typeof input === "string") {
        return input.toUpperCase();
    }
    else {
        return !input;
    }
};
console.log(processInput(12));
console.log(processInput("hello world"));
console.log(processInput(true));
console.log(processInput(false));
