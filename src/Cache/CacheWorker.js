import Redis from 'ioredis';
import LRUCache from 'lru-cache';

export class CacheWorker {
    constructor(port, host, maxage) {
        this.redis = new Redis(port, host);
        this.cache = new LRUCache({ max: 1000, maxAge: maxage ? maxage : 1 * 60 * 60 * 1000 });
    }

    
}