// Instructions
// 1rst daily challenge

//     Create two functions. Each function should return a promise.
//     The first function called makeAllCaps(), takes an array of words as an argument
const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.every(e => typeof e === "string")) {
            resolve(arr.map(e => e.toUpperCase()));
        } else {
            reject("Sorry, that array does not contain only strings");
        }
    });
}

//         If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
//         else, reject the promise with a reason.
//     The second function called sortWords(), takes an array of words uppercased as an argument
const sortWords = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.length >= 4) {
            resolve(arr.sort());
        } else {
            reject("Sorry, that array does not have a length of 4 or greater");
        }
    })
}


//         If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
//         else, reject the promise with a reason.

// Test:

// //in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

// //in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))



// 2nd daily challenge

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
  " ": "/"
}`

//     Create three functions. The two first functions should return a promise..

//     The first function is named toJs():
//         this function converts the morse json string provided above to a morse javascript object.
//         if the morse javascript object is empty, throw an error (use reject)
//         else return the morse javascript object (use resolve)

const toJs = () => {
    return new Promise((resolve, reject) => {
        const morseObj = JSON.parse(morse);
        if (Object.keys(morseObj).length === 0) {
            reject("Error: Empty");
        } else {
            resolve(morseObj);
        }
    });
}




//     The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
//         This function asks the user for a word or a sentence.
//         if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
//         else return an array with the morse translation of the user’s word.

const toMorse = (morseJS) => {
    let userInput = prompt("please input a word or sentance")
    let stringArr = userInput.toLowerCase().split("")
    return new Promise((resolve, reject) => {
        for (let i = 0; i < stringArr.length; i++) {
            if (!Object.keys(morseJS).includes(stringArr[i])) {
                reject(`"${stringArr[i]}" doesn't exist in the morse code we're using`)
            } else {
                stringArr[i] = morseJS[stringArr[i]]
            }
            
        }
        resolve(stringArr)
    })
    
}

//         if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
//         if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


//     The third function called joinWords(morseTranslation), takes one argument: the morse translation array
//         this function joins the morse translation by using line break and display it on the page (ie. On the DOM)


const joinWords = (morseTranslation) => {
    const para = document.createElement("p");
    para.innerText = morseTranslation.join('\n');;
    document.body.appendChild(para);
}

//     Chain the three functions.
toJs()
.then((obj) => toMorse(obj))
.then((result) => joinWords(result))
.catch(error => console.log(error))
// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---
