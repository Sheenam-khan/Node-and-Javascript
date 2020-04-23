const express = require('express');
const authRoutes = require('./routes/oauth');
const profileRoutes=require('./routes/profile')
const passportSetup = require('./config/passport-setup');
const mongoose=require('mongoose');
const keys=require('./config/key');
const cookieSession=require('cookie-session');
const passport=require('passport')
const app = express();

// set view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
maxAge:24*60*60*1000,
keys:[keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mangodb
mongoose.connect(keys.mangodb.dbURI,{useNewUrlParser:true, useFindAndModify:true,useUnifiedTopology:true})
.then(()=>console.log("connected to mongodb"))
.catch((err)=>console.log(err));

// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


// create home route
app.get('/', (req, res) => {
    res.render('home',{user:req.user});
});


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))
