const fs = require('fs');
const path = require('path');

//create folder
//Async function it will take a call back with it;

// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
//     if (err) throw err;
//     console.log('folder created')
// });

//creating files and writing to it

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello from node! ', (err) => {
//     if (err) throw err;
//     console.log('file created')
//     //Appending
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love node js', (err) => {
//         if (err) throw err;
//         console.log('file created')
//     });

// });

//Reading a file

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello_world.txt'), (err) => {
    if (err) throw err;
    console.log('file renamed');
});
