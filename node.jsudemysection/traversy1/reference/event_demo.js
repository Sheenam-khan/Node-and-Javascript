const Eventemitter=require('events');

//create class
class MyEmitter extends Eventemitter { }

//init object
const myEmitter =new MyEmitter();

//Event listener
myEmitter.on('event',()=>console.log('Event fired'));

//init and raise event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');


