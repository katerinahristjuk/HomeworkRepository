const EventEmitter = require('events');

class Radio extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('signal', { message: 'This message is sent from emitter!' })
    }
}

module.exports = Radio