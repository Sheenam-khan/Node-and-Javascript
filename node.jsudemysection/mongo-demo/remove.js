const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('connected to mongoDb...'))
.catch(err=>console.error("couldn't connect to mongodb",err));

// schema-define shape of document within a collection in mongodb.
const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
});
 
const Course = mongoose.model('Course',  courseSchema);
 
async function removeCourse(id){
     
//const result= await Course
// .deleteOne({isPublished:false})   
//.deleteOne({_id:id})   
//.deleteMany({_id:id})

const result=await Course.findByIdAndRemove(id)
 console.log(result);
}

removeCourse('5e7d7a2c131340418843624f');








