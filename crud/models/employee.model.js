const mongoose= require('mongoose');
const courseSchema=new mongoose.Schema({
    first_Name:{
    type:String,
    required:'field is required'
    },
    last_Name:{
        type:String,
        required:'field is required'
        }
})
mongoose.model('Employee',courseSchema);
