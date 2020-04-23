const express= require('express');
const router =express.Router();
const bcrypt=require('bcryptjs');
const passport=require('passport');

//User model

const User=require('../models/User')
//login page

router.get('/login',(req,res)=>{
    res.render('login');
})


//Register page
router.get('/register',(req,res)=>{
    res.render('register');
})

//Register handle
router.post('/register',(req,res)=>{
    const {name,email,password,password2}=req.body;

    let errors=[];

    //check required fields
    if(!name || !email || !password || !password2){
        errors.push({mg:"please fill in all fields"});
    }
    else if(password!==password2){
        errors.push({msg:'password do not match'});
    }
    else if(password.length<6){
        errors.push({msg:'password must be atleast 6 characters'});
    }

    if(errors.length>0){
res.render('register',{
    errors,
    name,
    email,
    password,
    password2
});
    }
    else{
        //validation passed
  User.findOne({email:email})
  .then(user=>{
      if(user){
        //user exists
        errors.push({msg:"email already registered"});

        res.render('register',{
            errors,
            name,
            email,
            password,
            password2
        });
      }
      else{
const newUser=new User({
    name,email,password
});
bcrypt.genSalt(10,(err,salt)=>
  bcrypt.hash(newUser.password,salt,(err,hash)=>{
      if(err) throw err;
      //set Password to hash
      newUser.password=hash;
      //save user
      newUser.save()
      .then(user=>{
          req.flash('success_msg','successfuly registered')
          res.redirect('/users/login');
      })
      .catch(err=>console.log(err));
  }))

//const hash=bcrypt.hash(newUser.password, bcrypt.getSalt(10))

 
      }
  })
    }

})

//login handle
router.post('/login',(req,res,next)=>{
passport.authenticate('local',{
    successRedirect:'/dashboard',
    failureRedirect:'/users/login',
    failureFlash:true
})(req,res,next);
});

//logout handle
router.get('/logout',(req,res)=>{
    req.logout();
    req.flash('sucess_msg','you r logged out');
    res.redirect('/users/login')

})

module.exports=router;












