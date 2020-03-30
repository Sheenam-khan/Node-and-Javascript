const express= require('express');

const path=require('path');

const app=express();
app.set('views',path.join(__dirname,'views'))
app.set('view engine',mustache);

app.engin('mustache',require('hogan-middleware').express);
// app.get('/',(req,res,next)=>{
//  res.send("hello");
// });

app.get('/json',(req,res,next)=>{
    const data={
        greeting:'hello!'

    }
    res.json(data);
   });
   
app.get('/home',(req,res,next)=>{
 res.render('home',null);
});


const port=process.env.PORT || 4000 ;

app.listen(port,()=>console.log("server is running on port"+ port));