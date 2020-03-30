const Joi=require('joi');
const express=require('express');
const app=express();

app.use(express.json());
const courses=[

    {id:1,name:'course1'},
    {id:2,name:'course2'},
   
];


app.put('/api/courses/:id',(req,res)=>{
    //look up  the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('the course with given id is not found')
     
//validate course

// const result=validatecourse(req.body);

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

 const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`listening on port ${PORT} `));

