function logging(req,res,next){
    console.log('logging...'); //req.body
    next();
}

module.exports=logging;