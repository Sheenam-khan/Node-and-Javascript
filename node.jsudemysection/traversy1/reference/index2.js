const http=require('http');
const path=require('path');
const fs=require('fs');

const server=http.createServer((req,res)=>{
//  console.log(req.url);
//  if(req.url==='/'){
// fs.readFile(path.join(__dirname,'../public','index.html'),
// (err,data)=>{
    
//     if(err) throw err;

//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end(data);
// })
// }
// if(req.url==='/about'){
//     fs.readFile(path.join(__dirname,'../public','about.html'),
//     (err,data)=>{
        
//         if(err) throw err;
    
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.end(data);
//     })
//     }

//     if(req.url==='/api/users'){
//   const users=[
//                {name:'Bob smith',age:40},
//                {name:'john doe',age : 50}
//                 ];
//                 res.writeHead(200,{'Content-Type':'application/json'})
//                 res.end(JSON.stringify(users));
//     }

//  if(req.url==='/'){
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end('<h1>home</h1>');
// }



//build file path
let filepath=path.join(__dirname,'../public',req.url==='/' ? 'index.html' : req.url)


//Extension of file
let extname=path.extname(filepath);

//initial content type
let contentType= 'text/html';

// check ext and set content type
switch(extname){
    case '.js':
        contentType='text/javascript'
        break;
        case '.json':
            contentType='text/json'
            break;
            case '.css':
                contentType='text/css'
                break;
                case '.jpg':
                    contentType='image/jpg'
                    break;
}

//Read file
fs.readFile(filepath,(err,content)=>{
    if(err){
        if(err.code=='ENOENT'){
            //page not found
            fs.readFile(path.join(-__dirname,'../public','4o4.html'),(err,content)=>{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(content,'utf8')
            })
        }
        else {
            //some server error
            res.writeHead(500);
            res.end(`server error:${err.code}`);
        }
    }
    else{
        //success
        res.writeHead(200,{'Content-Type':contentType});
        res.end(content,'utf8');
    }
})
console.log(filepath);
res.end(contentType);





});


const PORT=process.env.PORT || 4000;

server.listen(PORT,()=>console.log(`server running on ${PORT}`));





