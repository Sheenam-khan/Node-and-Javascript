const Joi= require('joi');
const express= require('express');
const router= express.Router();


router.use(express.json());


const genres=[

    {id:1,name:'action1'},
    {id:2,name:'action2'},
   
];

router.get('/',(req,res)=>{
    res.send(genres);
});


router.get('/:id',(req,res)=>{
const genre = genres.find(c => c.id === parseInt(req.params.id));
if(!genre) res.status(404).send('the genre with given id is not found')
    res.send(genre);
})

router.post('/',(req,res)=>{
   
    const {error}=validatecourse(req.body);
    if(error)
    {
        //400  bad request
       return res.status(400).send(error.details[0].message)
    
    }
   const genre={
    id:genres.length+1,
    name:req.body.name
   } ;
   genres.push(genre);
    res.send(genre);
})

router.put('/:id',(req,res)=>{
    //look  up the genre
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) res.status(404).send('the genre with given id is not found')
     
//validate genre
 
const {error}=validatecourse(req.body);
if(error)
{
    //400  bad request
   return res.status(400).send(error.details[0].message)

}
        //update genre
        genre.name=req.body.name;
        res.send(genre);

    })

    router.delete('/:id',(req,res)=>{

        //look up the genre
        const genre = genres.find(c => c.id === parseInt(req.params.id));
        if(!genre) res.status(404).send('the genre with given id is not found')
        
        //delete genre
     const index=genres.indexOf(genre);
    genres.splice(index,1);
        //return the same genre
       res.send(genre);
    })

    function validatecourse(genre){
        const schema={
            name:Joi.string().min(3).required()
        }
    
        return Joi.validate(genre,schema);
   
    }

 module.exports=router;
