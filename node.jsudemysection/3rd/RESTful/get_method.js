const express= require('express');
const app= express();

// app.get('/',(req,res)=>{
//     res.send('hello world');
// });

// app.get('/api/courses',(req,res)=>{
//     res.send([1,23,3]);
// });

// //query parmeter for required values
// app.get('/api/courses/:id',(req,res)=>{
//     res.send(req.params.id);
// });

// app.get('/api/posts/:year/:month',(req,res)=>{
//     res.send(req.params);
// });


// //query String parameter used for optional additional data
// app.get('/api/posts/:year/:month',(req,res)=>{
//     res.send(req.query);
// });


//handling http reequests
const courses=[

    {id:1,name:'course1'},
    {id:2,name:'course2'},
   
];

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});


app.get('/api/courses/:id',(req,res)=>{
const course = courses.find(c => c.id === parseInt(req.params.id));
if(!course) res.status(404).send('the course with given id is not found')
    res.send(course);
})


//port 
const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`listening on port ${PORT} `));









