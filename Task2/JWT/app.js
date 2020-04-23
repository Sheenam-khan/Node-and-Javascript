const express=require('express');
const jwt=require('jsonwebtoken');

const app=express();

app.get('/api',(req,res)=>{
    res.json({
        message:"welcome to the api"
    })
});

app.post('/api/posts',verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authdata)=>{
        if(err) {
            res.sendStatus(403);
        }
        else{
            res.json({
                message:'post created',
                authdata
            });
        }
    });
   
});

app.post('/api/login',(req,res)=>{
    //mock user
    const user={
        id:1,
        username:'brad',
        email:'brad@gmail.com'
    }
    
    jwt.sign({user},'secretkey',(err,token)=>{
        res.json({
            token
        })
    });
});

//format of token
//AUTHORIZATION :Beare<access_token>

//verify token
function verifyToken(req,res,next){
 //Get auth header value
 const bearerHeader=req.headers['authorization']

 //check if bearer is undefined
 
 if(typeof bearerHeader!=='undefined'){

 //split at space
const bearer=bearerHeader.split(' ');

//get token from array
const bearerToken= bearer[1];

//set token
req.token=bearerToken;

//next middleware
next();

 }
 else{
     //forbidden
     res.sendStatus(403);
 }



}
app.listen(5000,(err,port)=>console.log('server runniing on port','4000'))