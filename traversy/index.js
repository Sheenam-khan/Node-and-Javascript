// const person=require('./person');
// console.log(person)


// const Person=require('./person');
// const person1=new Person('John doe',30);
// person1.greeting();


//const Logger=require('./reference/logger')
// const logger=new Logger();
// logger.on('message',data=>console.log('called listener',data));
// logger.log('hello world');
// logger.log('world');
// logger.log('hello ');


const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //     console.log(req.url);

    //     if (req.url === '/about') {
    //         fs.readFile(path.join(__dirname, 'public', 'about.html'),
    //             (err, content) => {
    //                 if (err) throw err;
    //                 res.writeHead(200, { 'Content-Type': 'text/html' });
    //                 res.end(content);

    //             });
    //     }

    //     if (req.url === '/') {
    //         const users = [
    //             { name: "Bob smith", age: 40 },
    //             { name: 'John Doe', age: 30 }
    //         ];
    //         res.writeHead(200, { 'Content-Type':'application/json' });
    //         res.end(JSON.stringify(users));
    //   }


    //Build file path dynamic
    let filepath = path.join(__dirname, 'public', req.url === '/' ?
        'index.html' : req.url);

    // console.log(filepath);
    // res.end();

    //Extension of file
    let extname = path.extname(filepath);

    //Initial content type
    let contentType = 'text/html';

    //Check ext and set content type
    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;

        case '.png':
            contentType = 'image/png';
            break;

        case '.json':
            contentType = 'application/json';
            break;

        case '.js':
            contentType = 'text/javascript';
            break;
    }


    //ReadFile
    fs.readFile(filepath, (err, content) => {
        if (err) {
            if (err.code == "ENONENT") {
                //page not found
                fs.readFile(path.join(__dirname, 'public', '4o4.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });

            }
            else {
                //Some server Error 
                res.writeHead(500);
                res.end(`server error:${err.code}`)
            }
        }
        else {
            //success
            res.writeHead(200, { 'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    })
});
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));