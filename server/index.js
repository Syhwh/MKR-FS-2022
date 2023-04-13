const http = require('http');
const websocketServer = require('websocket').server;

const httpServer = http.createServer(function (request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
});

const websocket = new websocketServer({
    httpServer: httpServer,
});

httpServer.listen(3000, function () {
    console.log((new Date()) + ' Server is listening on port 3000');
});

websocket.on('request', function (request) {

    console.log('Client requested connection');

    const connection = request.accept(null, request.origin);

    connection.on('open', () => console.log('Connection opened'));

    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        }
    });

    connection.on('close', () => console.log('Connection closed'));

    const message = () => {
        connection.sendUTF('Hello from server');
        setTimeout(message, 2000);
    }
    message();
});