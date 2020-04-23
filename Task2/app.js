const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose= require('mongoose'); 
const flash=require('connect-flash');
const session=require('express-session');
const passport=require('passport');

const app= express();
require('./config/passport')(passport);
//DB config
const db=require('./config/keys').MongoURI;

//connect to Mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Mangodb connected.."))
.catch((err)=>console.log('connection error',err))

//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//bodyparser
const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
// app.use(bodyparser.json());

//Express session-middleware
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true,
}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Connect flash
app.use(flash());

//custom middleware Global Vars -colors
app.use((req,res,next)=>{
    res.locals.success_msg=req.flash('success_msg');
    res.locals.error_msg=req.flash('error_msg');
    res.locals.error=req.flash('error');
    next(); 
});


//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

const PORT=process.env.PORT || 4000;

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));


