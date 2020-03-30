//connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('connected to mongoDb...'))
.catch(err=>console.error("couldn't connect to mongodb",err));

// schema-define shape of document within a collection in mongodb.
const courseSchema=new mongoose.Schema({
    name:{type:String,required:true},
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean,
    price:Number
});

const Course=mongoose.model('Course',courseSchema);
 
async function createCourse(){
const course=new Course({
//    name:'course 1',
   author:'Mosh',
   tags:['angular','frontend'] ,
   isPublished:true,
   price:15

});
try{
 //const isValid =  await course.validate();
 //if(!isValid){}
    const result =await course.save();
    console.log(result);
//  course.validate(err=>{
//      if(err){}
//  });
}

catch(ex){
   console.log(ex.message);
}
}
createCourse();
 

//retrieve data from mangodb
// async function getCourses(){
//  const courses= await Course
//  .find({author:'Mosh' })
//  .limit(1)
//  .sort({name:1})
//   .select({name:1,tags:1});
//  console.log(courses);
// }
// getCourses();

// comparision query operator
  //eq (equal)
    //ne (not equal)
    //gt (greater than)
    //gte(greater than or equal to)
    //lt(less than)
    //lte(less than equal to)
    //in ,nin(not in)
// async function getCourses(){
//      const courses= await Course
//      //.find({price:{$gt:10,$lte:20}})
//     .find({price:{$in:[10,15,20]}})
//      .limit(1)
//      .sort({name:1})
//       .select({name:1,tags:1});
//      console.log(courses);
//     }
//     getCourses();




//logical query operator
// async function getCourses(){
//     //or
//     //and
//  const courses= await Course
//  //.find({author:'Mosh' })
//  .find()
//  .or([{author:'Mosh'},{isPublished:true}])
//  //.and([{author:'Mosh'}])
//  .limit(1)
//  .sort({name:1})
//   .select({name:1,tags:1});
//  console.log(courses);
// }
// getCourses();


//Regular expressions

// async function getCourses(){
//  const courses= await Course
//  .find({author:'Mosh' })
 
// //start with mosh
// .find({author:/^Mosh/})

// //ends with homedani
// .find({author:/Hamedani$/i})

//Contains Mosh
// .find({author:/.*Mosh.*/i})

//  .limit(1)
//  .sort({name:1})
//   .select({name:1,tags:1});
//  console.log(courses);
// }
// getCourses();


//counting -no.of document not actual data show=>count method use count()
// async function getCourses(){
//  const courses= await Course
//  .find({author:'Mosh' })
//  .limit(2)
//  .sort({name:1})
//   .count();
//  console.log(courses);
// }
// getCourses();


//skip()- for paagination
// async function getCourses(){
//     const pageNumber=2;
//     const pagesixe=10;

//     //api/courses?pageNumbers=2&pageSize=10

//  const courses= await Course
//  .find({author:'Mosh' })
//  .sikip((pageNumber-1)*pageSize)
//  .limit(pageSize)
//  .sort({name:1})
//   .count();
//  console.log(courses);
// }
// getCourses();


// async function updateCourse(id){
//   const course= await Course.findById(id);
//  if(!course) return;
// //   course.isPublished=true;
// //   course.author='Another author';
// //ot
//  course.set({
// isPublished:true,
// author:'another author'
//  });

// const result=await course.save();
// console.log(result);

// }
//async function updateCourse(id){
  // const course= await Course.update({isPublished:false});
//update -directly update without retrieving data
//   const result= await Course.update(
//   {_id:id}, {
//        $set: {
//        author:'Mosh',
//        isPublished:flase
//   }
// });
// console.log(result);
// }

// async function updateCourse(id){
//   // const course= await Course.update({isPublished:false});
// //update -directly update without retrieving data
//   const course= await Course.findByIdAndUpdate(
//   id, {
//        $set: {
//        author:'hello',
//        isPublished:true
//   }
// });
// console.log(course);
// }

// updateCourse('5e7d7b265e18b737749ebc10');