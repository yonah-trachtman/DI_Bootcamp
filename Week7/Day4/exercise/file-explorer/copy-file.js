
// Create a directory named file-explorer.

// Inside the file-explorer directory, create a file named copy-file.js.

// In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.
var fs = require('fs');
fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err}`);
        return;
    }

    fs.writeFile('destination.txt', data, (err) => {
        if (err) {
            console.error(`Error writing file: ${err}`);
            return;
        }

        console.log('File has been copied successfully.');
    });
});