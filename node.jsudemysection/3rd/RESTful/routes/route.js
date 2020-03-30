const express=require('express');
const app=express();
const all=require('../all');
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/courses',all);

const PORT =process.env.PORT || 7000;
app.listen(PORT,()=>console.log(`listening on port ${PORT} `));



