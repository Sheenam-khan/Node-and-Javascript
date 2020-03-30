  const EventEmitter= require('events');
  //const emitter =new EventEmitter();

  //Register listener
//   emitter.on('messageLogged',(eventArg)=>{
//       console.log('listener called when raise event',eventArg)
//   })

  //raise an event 
//emitter.emit('messageLogged',{id:1,url:'https://'});



const Logger=require('./logger');
const logger=new Logger();
logger.on('messageLogged',(eventArg)=>{
    console.log('listener called when raise event',eventArg)
})

logger.log('message');




