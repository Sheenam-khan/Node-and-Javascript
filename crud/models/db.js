//connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employee',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('connected to mongoDb...'))
.catch(err=>console.error("couldn't connect to mongodb",err));

require('./employee.model');