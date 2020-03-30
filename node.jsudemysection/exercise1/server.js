require('./models/db');

const express=require('express');
const app=express();
const bodyParser=require('body-parser')
//routing
const controller=require('./controllers/controller')
app.use('/users',controller);


const path=require('path');
const exphbs=require('express-handlebars');

//template engine-handlebars
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname +  '/views/layouts'}));
app.set('view engine','hbs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});



