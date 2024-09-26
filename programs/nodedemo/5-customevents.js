var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('open the door!');
}

//Assign the event handler to an event:
eventEmitter.on('ringthebell', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('ringthebell');