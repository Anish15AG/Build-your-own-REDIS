const net = require('net');
const Parser = require('redis-parser');

const store = {};

const server = net.createServer((connection) => {
    console.log('Client Connected...');

    connection.on('data', (data) => {
        const parser = new Parser({
            returnReply: (reply) => {
                const command = reply[0].toLowerCase(); // Normalize command to lowercase
                switch (command) {
                    case 'set': {
                        const key = reply[1];
                        const value = reply[2];
                        store[key] = value;
                        connection.write('+OK\r\n'); // Acknowledge successful set
                        break;
                    }
                    case 'get': {
                        const key = reply[1];
                        const value = store[key];
                        if (value === undefined) {
                            connection.write('$-1\r\n'); // Null Bulk String for non-existent key
                        } else {
                            // Use a Bulk String response, but it will still just send the value.
                            connection.write(`$${value.length}\r\n${value}\r\n`);
                        }
                        break;
                    }
                    default: {
                        connection.write('-ERR unknown command\r\n'); // Handle unknown commands
                    }
                }
            },
            returnError: (err) => {
                console.error('Parser Error:', err);
                connection.write(`-ERR ${err.message}\r\n`);
            }
        });

        parser.execute(data); // Process incoming data through the Redis parser
    });

});

server.listen(8000, () => console.log("Custom REDIS server running on Port 8000"));
