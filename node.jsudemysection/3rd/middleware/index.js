const express= require('express');
const app= express();
const helmet= require('helmet');
const logging=require('./logger');
const morgan=require('morgan');
const config=require('config');

console.log(`NODE_ENV :${process.env.NODE_ENV}`);
console.log(`app:${app.get('env')}`);


//to set environment using $env:NODE_ENV="production"
// rc packge for configuration, and config
// env:app_password=1234
console.log("application Name:"+config.get('name'));
console.log(" Mail Server:"+config.get('mail.host'));
console.log(" password:"+config.get('mail.password'));


// built in middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));

app.use(helmet());
//app.use(morgan('tiny'));

if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    console.log('morgan enabled...')
}

//custom -middleware function

app.use(logging);

app.use((req,res,next)=>{
    console.log('authenticating...');
    next();
})
const courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
   
];

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});



app.post('/api/courses',(req,res)=>{
   
    if(!req.body.name || req.body.name.length <3)
    {
        //400  bad request
       return res.status(400).send('name is required and should be minimum 3 characters.')

    }
   const course={
    id:courses.length+1,
    name:req.body.name
   } ;
   courses.push(course);
    res.send(course);
})

const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`listening on port ${PORT} `));




