const Joi= require('joi');
const express= require('express');
const app= express();

//middleware
app.use(express.json());

const courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
   
];

app.post('/api/courses',(req,res)=>{
   
    const schema={
        name:Joi.string().min(3).required()
    }

    const result=Joi.validate(req.body,schema);
console.log(result);
    if(result.error)
    {
        //400  bad request
       return res.status(400).send(result.error.details[0].message)

    }
   const course={
    id:courses.length+1,
    name:req.body.name
   } ;
   courses.push(course);
    res.send(course);
})

const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`listening on port ${PORT} `));




