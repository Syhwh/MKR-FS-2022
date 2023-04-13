const WebSocketClient = require('websocket').client;

const client = new WebSocketClient();

client.on('connectFailed', function (error) {
    console.log('Connect Error: ' + error.toString());
});

client.on('connect', function (connection) {
    console.log('WebSocket Client Connected');

    connection.on('error', function (error) {
        console.log("Connection Error: " + error.toString());
    });

    connection.on('open', function () {
        console.log('WebSocket Client Connected open event');
    });

    connection.on('close', function () {
        console.log('echo-protocol Connection Closed');
    });
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            console.log("Received: '" + message.utf8Data + "'");
        }
    });

    function sendNumber() {
        if (connection.connected) {
            const number = `Client message -> ${Math.round(Math.random() * 0xFFFFFF)}`;
            connection.sendUTF(number);
            setTimeout(sendNumber, 2000);
        }
    }
    sendNumber();
});

client.connect('ws://localhost:3000/');