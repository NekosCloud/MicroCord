import Redis from 'ioredis';
import LRUCache from 'lru-cache';
import { GatewayConnector } from '../Gateway/Connector';

export class CacheWorker {
    constructor(redisopt, gatewayhost, maxage) {
        this.redis = new Redis(redisopt.port, redisopt.host);
        this.cache = new LRUCache({ max: 1000, maxAge: maxage ? maxage : 1 * 60 * 60 * 1000 });
        this.gateway = new GatewayConnector(gatewayhost);
    }
}