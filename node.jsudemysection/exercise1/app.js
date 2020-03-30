const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const app=express();

mongoose.connect('mongodb://localhost:27017/student',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("database connected"))
.catch((err)=>console.log("error",err));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname+'/public')));

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'/views'));

const route=require('./routes/route');
app.use('/',route);



const PORT=process.env.PORT || 7000;
app.listen(PORT,()=>console.log(`server running on ${PORT}`));
