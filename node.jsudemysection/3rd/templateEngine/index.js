const express= require('express');
const app= express();
 

console.log(`NODE_ENV :${process.env.NODE_ENV}`);
console.log(`app:${app.get('env')}`);

 
//view engine
app.set('view engine','pug');
app.set('views','./views');// default


// built in middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));

 
 
//custom -middleware function
app.use((req,res,next)=>{
    console.log('authenticating...');
    next();
})
 
app.get('/',(req,res)=>{
    res.render('index.pug',{title:"my express app" ,message:"hello"})
})


const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`listening on port ${PORT} `));




