const express= require('express');
const app= express();
const morgan=require('morgan');
const startUpDebugger=require('debug')('app:startup');
const dbDebugger=require('debug')('app:db');




if(app.get('env')==='development'){
    app.use(morgan('tiny'));
    startUpDebugger('morgan enabled...')
}

//Db work
dbDebugger('connected to the database...');
const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`listening on port ${PORT} `));
