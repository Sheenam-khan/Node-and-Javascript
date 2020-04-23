const router=require('express').Router();

const authCheck=(req,res,next)=>{
    if(!req.user){
           //if user is not logged in
           res.redirect('/auth/login');
    }
    else{
        //if they r logged in 
        next();
    }
    
}

router.get('/',authCheck,(req,res)=>{
   // res.send('you r logged in ,this your profile'+req.user.username)
 res.render('profile',{user:req.user});
 
});

module.exports=router;