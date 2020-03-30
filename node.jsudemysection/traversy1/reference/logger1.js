
const Eventemitter= require('events');
const uuid= require('uuid');
 
console.log(uuid.v4());

class Logger extends Eventemitter{
    log(msg){
        //call event
        this.emit('message',{id:uuid.v4(),msg});
    }
}

const logger =new Logger();

logger.on('message',(data)=>console.log('called listener',data));

logger.log('hello world');









