const express= require('express');
const app= express();

//middleware
app.use(express.json());

const courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
   
];

app.post('/api/courses',(req,res)=>{
   
    if(!req.body.name || req.body.name.length <3)
    {
        //400  bad request
       return res.status(400).send('name is required and should be minimum 3 characters.')

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




