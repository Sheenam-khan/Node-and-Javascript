const express= require('express');
const route=express.Router();
const Detail=require('../models/details.model');

route.get('/',(req,res)=>{
     Detail.find({},(err,data)=>{
        if(err) throw err;
        console.log(data);
        res.render('homePage',{
            data:data
        });
    });
    
})
route.post('/',(req,res)=>{
    const detail=new Detail({
        first_Name:req.body.fname,
        last_Name:req.body.lname
    })
    detail.save();
    res.redirect('/');

})
route.put('/:id',(req,res)=>{
    Detail.update({_id:req.body._id},
        {data:req.body})
        .then(doc=>{
        if(!doc){ return res.status(404).end();}
        return res.status(200).json(doc)
        })
        .catch(err=>next(err));
    detail.save();
    res.redirect('/');

})

// route.post('/:id',(req,res)=>{
//     let cr=Course.findByIdAndUpdate(
//        id, {
//              $set: {
//               fname:req.body.first_Name,
//               lname:req.body.last_Name
//         }
//       },{new :true});
//       console.log(cr);
//       res.redirect('/');

// })
 
  
// router.post('/',(req,res)=>{
 
//     Detail.findOneAndUpdate({_id:req.body._id},{new:true},(err,data)=>{
//         if(!err){
//             res.redirect('/');
//         }
//         else{
//            res.render("homePage",{
//             first_Name:req.body.fname,
//             last_Name:req.body.lname
//                 });
//                console.log("error during record update",err)
//             }
//         });
    
// });



            
// router.get('/:id',(req,res)=>{
//     Employee.findById(req.params.id,(err,data)=>{
//         if(!err){
//             res.render("homePage",{
//                data:data
//             })
         
//         }
//         res.redirect('/');
//         console.log(data);
//     })
// })
  

router.delete('/:id',(req,res)=>{
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.redirect('/');
        }
        else{
            console.log("error in employee delete",err);
        }
    })
    
    })




module.exports=route;
