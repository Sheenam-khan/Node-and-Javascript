// function sayHello(name){
//     console.log('hello'+name);
// }

// sayHello('mosh');

// var mes='j';
// console.group(global.mes);

// const log= require('./logger');

// log('mess');

// const path=require('path');
// const os=require('os');
const fs= require('fs');

// console.log(process)
let totalmeomory=os.totalmem();
let freememory=os.freemem();
console.log(totalmeomory);
console.log(freememory);

const pathObj=path.parse(__filename);
console.log(pathObj);

const files=fs.readdirSync('./');
console.log(files);

fs.readdir('./',(err,files)=>{
    if(err) console.log('Error',err);
    else console.log('Result',files)
})











