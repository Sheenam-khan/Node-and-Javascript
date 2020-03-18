const EventEmitter=require('events');

//Create class
class MyEmitter extends EventEmitter { }

//Init Object
const myEmitter=new MyEmitter();

//Event Listener
myEmitter.on('event',()=> console.log('Event fired'));

//Init event
//emit is used to call event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
