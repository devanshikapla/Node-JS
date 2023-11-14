const path = require('path');

// Get the base file name
const fileName = path.parse(__filename).base;
console.log(fileName);

//Directory name

console.log(path.dirname(__filename));

// File extension

console.log(path.extname(__filename));

//Object 

console.log(path.parse(__filename).base);

//concatenate paths

console.log(path.join(__dirname, 'test', 'hello.html'));

