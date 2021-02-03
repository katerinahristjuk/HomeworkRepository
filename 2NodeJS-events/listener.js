const Radio = require('./emitter.js');

const radio = new Radio();

radio.on('signal', (eventArg) => {
    console.log('signal', eventArg);
});

radio.log('message');