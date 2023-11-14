const eventEmitter = require('events');

//Create Class;

class MyEmitter extends eventEmitter { }

//Object;

const myEmitter = new MyEmitter();

//Event Listener

myEmitter.on('event', () => console.log('Event Fired !'));


//Init Event

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
