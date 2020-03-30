const mysql = require('mysql');
const express=require('express');
const app=express();
app.use(express.static('./views'))
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','pug');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'manas'
  })

connection.connect((err)=>{
if(err) throw err;
console.log("connected");
})

 
app.get('/',(req,res)=>{
    const sql="SELECT * FROM emp"
    connection.query(sql,(err,rows)=>{
        if(err) throw err;
        console.log(rows);
        res.render('index',{title:'user details',
         items:rows});
        // res.write("<table border=1><tr>");
        // for(let column in rows){
        //     res.write(`<td><label>${column}</label></td>`)
        // res.write('</tr></table>')
        // }
        console.log(rows);

})
connection.end();
})

app.post('/',(req,res)=>{
    console.log(req.body);

    const sql="insert into emp values('"+req.body.fname+"','"+req.body.lname+"')"
    connection.query(sql,(err)=>{
        if(err) throw err;
        res.render('index',{title:'data saved successfully'});

    })
 
    
})


const PORT=process.env.PORT  || 5000;
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))

