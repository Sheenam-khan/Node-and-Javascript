const fs = require('fs');
const path = require('path');

// //create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('folder created');
// });


//create and write file

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
// 'hello',err=>{
//     if(err) throw err;
//     console.log("file written to...");
// });


// //append File
// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
// 'i love nodeJs',err=>{
//     if(err) throw err;
//     console.log("file append to...");
// });


//read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'),
'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});

//Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'),
path.join(__dirname, '/test', 'helloworld.txt'),err=>{
    if(err) throw err;
    console.log("file renamed");
});