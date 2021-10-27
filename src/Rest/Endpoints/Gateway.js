export class Gateway {
    constructor(rest) {
        this.rest = rest;
    }

    async get(options = {}) {
        return await this.rest.get(`/gateway`, options);
    }

    async bot(options = {}) {
        return await this.rest.get(`/gateway/bot`, options);
    }
}