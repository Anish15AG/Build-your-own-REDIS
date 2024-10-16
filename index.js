const net = require('net');

const server = net.createServer(connection=> {
    console.log('Client Connected...')

})

server.listen(8000, () => console.log("Custom REDIS server running on Port 8000")) //Default server for REDIS2.0 is 8000 ideal is 6379
