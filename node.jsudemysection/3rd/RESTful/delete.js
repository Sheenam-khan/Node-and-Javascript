 
const express=require('express');
const app=express();

app.use(express.json());
const courses=[

    {id:1,name:'course1'},
    {id:2,name:'course2'},
   
];

app.delete('/api/courses/:id',(req,res)=>{

    //look up the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('the course with given id is not found')
    
    //delete course
 const index=courses.indexOf(course);
courses.splice(index,1);
    //return the same course
   res.send(course);
})

const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`listening on port ${PORT} `));

