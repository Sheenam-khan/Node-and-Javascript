const http=require('http');

//create server object
http.createServer((req,res)=>{
    //write a response
res.write('<h1>hello NodeJs</h1>');
res.end();

}).listen(5000,()=>console.log('server running'));