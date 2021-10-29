import { Router } from './Rest/Router.js';
import { GatewayConnector } from './Gateway/Connector.js';

export class Micro {
    constructor(token) {
        this.router = new Router(token);
        this.ws = new GatewayConnector('WSEvents');
    }
}
