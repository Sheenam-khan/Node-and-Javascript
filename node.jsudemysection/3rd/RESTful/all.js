const Joi= require('joi');
const express= require('express');
 
const router=express.Router();



//app.use(express.json());

const courses=[

    {id:1,name:'course1'},
    {id:2,name:'course2'},
   
];

router.get('/',(req,res)=>{
    res.send(courses);
});


router.get('/:id',(req,res)=>{
const course = courses.find(c => c.id === parseInt(req.params.id));
if(!course) res.status(404).send('the course with given id is not found')
    res.send(course);
})

router.post('/',(req,res)=>{
   
    const {error}=validatecourse(req.body);
    if(error)
    {
        //400  bad request
       return res.status(400).send(error.details[0].message)
    
    }
   const course={
    id:courses.length+1,
    name:req.body.name
   } ;
   courses.push(course);
    res.send(course);
})

router.put('/:id',(req,res)=>{
    //look  up the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('the course with given id is not found')
     
//validate course
 
const {error}=validatecourse(req.body);
if(error)
{
    //400  bad request
   return res.status(400).send(error.details[0].message)

}
        //update course
        course.name=req.body.name;
        res.send(course);

    })

    function validatecourse(course){
        const schema={
            name:Joi.string().min(3).required()
        }
    
        return Joi.validate(course,schema);
   
    }


    router.delete('/:id',(req,res)=>{

        //look up the course
        const course = courses.find(c => c.id === parseInt(req.params.id));
        if(!course) res.status(404).send('the course with given id is not found')
        
        //delete course
     const index=courses.indexOf(course);
    courses.splice(index,1);
        //return the same course
       res.send(course);
    })


module.exports=router;

//port 
// const PORT =process.env.PORT || 5000;
// router.listen(PORT,()=>console.log(`listening on port ${PORT} `));






