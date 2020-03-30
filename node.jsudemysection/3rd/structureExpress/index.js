const express= require('express');
const app= express();
const helmet= require('helmet');
const logging=require('../middleware/logger');
const morgan=require('morgan');
 
const genres=require('./routes/genres')
const home=require('./routes/home');


// built in middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));

app.use(helmet());
//app.use(morgan('tiny'));

app.use('/api/genres',genres);
app.use('/',home);
//custom -middleware function

app.use(logging);

// app.use((req,res,next)=>{
//     console.log('authenticating...');
//     next();
// })
 
const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`listening on port ${PORT} `));




