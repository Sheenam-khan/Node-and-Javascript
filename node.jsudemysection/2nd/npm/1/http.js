const http= require('http');


// server=net.server is an EventEmitter 
// const server=http.createServer();
// server.listen(3000);

// server.on('connection',(socket)=>{
// console.log('new conection');
// })



const server=  http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("hello world");
        res.end();
    }
    if(req.url==='/api/courses'){
        res.write(JSON.stringify([1,2,3,4]))
   res.end();
    }
})

server.listen(3000,()=> console.log('listening on port 3000'));


