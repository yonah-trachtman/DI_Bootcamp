const fs = require("fs")

const fileReader = (file) => {

    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log(data);
    });
}





module.exports = {
    fileReader
}