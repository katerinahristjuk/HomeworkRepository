const app = require('./app');
const http = require('http');

const server = http.createServer(app);
server.listen(3000);

server.on('listening', ()=>{'Server is listening on port 3000... :) '})