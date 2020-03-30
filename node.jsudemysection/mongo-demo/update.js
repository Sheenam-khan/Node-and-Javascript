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

//approach :Query first
//findById()

//Modify its properties
//save()

//Approach:Update first
//Update directly
// async function updateCourse(id){
//    const course= await Course.findById(id);
//   if(!course) return;
// //   course.isPublished=true;
// //   course.author='Another author';
// //or
//   course.set({
// isPublished:true,
// author:'Seenam author'
//   });

//  const result=await course.save();
// console.log(result);

// }


// async function updateCourse(id){
//     // const course= await Course.update({isPublished:false});
//   //update -directly update without retrieving data
//     const result= await Course.update(
//     {_id:id}, {
//          $set: {
//          author:'A',
//          isPublished:flase
//     }
// });
    
//  console.log(result);
 
//  }
// updateCourse('5e7d7d78769720454ceae27');


async function updateCourse(id){
    // const course= await Course.update({isPublished:false});
   
    const course= await Course.findByIdAndUpdate(
    id, {
         $set: {
         author:'C',
         isPublished:true
    }
  },{new :true});
  console.log(course);
  }
  
  updateCourse('5e7d7a2c131340418843624f');








