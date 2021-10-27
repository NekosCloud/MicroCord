import { GatewayConnector } from "./src/Gateway/Connector.js";

const ws = new GatewayConnector('gateway');

const testrpc = {
    "op": 3,
    "d": {
        "since": null,
        "activities": [{
            "name": "testing...",
            "type": 0
        }],
        "status": "online",
        "afk": false
    }
}

ws.once('connected', () => {
    console.log('ok')
    ws.send('0', testrpc);
    ws.on('messageCreate', (ctx) => console.log(ctx))
});
