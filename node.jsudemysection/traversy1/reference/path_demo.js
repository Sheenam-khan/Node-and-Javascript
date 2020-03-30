const path= require('path');

//Base name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__dirname));

//file extension
console.log(path.extname(__filename));

//create path  object
console.log(path.parse(__filename).base);

//concatenate path
console.log(path.join(__dirname,'test','hello.html'));











