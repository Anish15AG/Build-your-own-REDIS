const net = require('net');
const Parser = require('redis-parser');

const server = net.createServer(connection=> {
    console.log('Client Connected...')

    connection.on('data', data => {
        const parser = new Parser({
            returnReply: (reply)=>{
                console.log('=>', reply);
            },
            returnError: (err) =>{
                console.log('=>', err);
            }
        })
        parser.execute(data);
        connection.write('+OK\r\n')
    })

})

server.listen(8000, () => console.log("Custom REDIS server running on Port 8000")) //Default server for REDIS2.0 is 8000 ideal is 6379
