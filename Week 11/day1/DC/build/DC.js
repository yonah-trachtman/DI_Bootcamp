"use strict";
let processInput = (input) => {
    if (typeof input === "number") {
        console.log(input * input);
    }
    else if (typeof input === "string") {
        console.log(input.toUpperCase());
    }
    else {
        console.log(!input);
    }
};
processInput(12);
processInput("hello world");
processInput(true);
processInput(false);
