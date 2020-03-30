const http= require('http');

//create server object
http.createServer((req,res)=>{
    //Write response
    res.write('hello world');
    res.end();

}).listen(5000,()=>console.log('server runnning on port:5000'))