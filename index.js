import { Router } from './src/Rest/Router';
import { GatewayConnector } from './src/Gateway/Connector';

export class SPS {
    constructor(token) {
        this.router = new Router(token);
        this.ws = new GatewayConnector('WSEvents');
    }
}
