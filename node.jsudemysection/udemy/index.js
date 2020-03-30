const express= require('express');
const app=express();

//middleware
app.use('/posts',()=>{
console.log('this is middleware')
})


//routes
app.get('/',(req,res)=>{
    res.send("hello sheenam")
})

app.get('/posts',(req,res)=>{
    res.send("hello s")
})

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server is running on port"+port)
})
