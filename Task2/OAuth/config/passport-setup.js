const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20');
const keys=require('./key');
const User=require('../models/user-model');


passport.serializeUser((user,done)=>{
 done(null,user.id);
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    })
  
   })
   

passport.use(new GoogleStrategy({
    //options for  the google strategy
    callbackURL:'/auth/google/redirect',
    clientID:keys.google.clientId,
    clientSecret:keys.google.clientSecret
},(accessToken,refreshToken,profile,done)=>{
    //passport callback function
console.log('passort callback function called ')
 console.log(profile);
//check if user already exists in database
User.findOne({googleId:profile.id}).then((currentUser)=>{
if(currentUser){
//already have the user
   console.log(`user already Exists:${currentUser}`)
   done(null,currentUser);
}
else{
    //if not ,then create user in db
    new User({
        username:profile.displayName,
        googleId:profile.id,
        thumbnail:profile.json.picture
    }).save().then(result=>console.log(result))
    console.log('user not exists in database',err)
 done(null,newUser)
}

});
}))


