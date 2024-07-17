// 🌟 Exercise 3: File Management using CommonJS syntax
// Instructions
const fs = require('fs');
//     Create a file named fileManager.js.

//     Inside fileManager.js, define a module that exports functions for reading and writing files.
//         Export functions named readFile and writeFile.
//         Implement the readFile function to read the content of a specified file using the fs module.
const readFile = (file) => {
    fs.readFile(file, 'utf8', function (err, data){
        if (err){
            console.log(err);
        } else {
        console.log(data);
    }
    }) 
}
//         Implement the writeFile function to write content to a specified file using the fs module.
const writeFile = (file, data) => {
    fs.writeFile(file, data, function (err){
        if (err){
        console.log(err);
    } else {
        console.log("file written")
    }
}) 
}


module.exports = {
    readFile, 
    writeFile
}
//     Create a file “Hello World.txt” containing the sentence “Hello World !! “

//     Create a file “Bye World.txt” containing the sentence “Bye World !! “



