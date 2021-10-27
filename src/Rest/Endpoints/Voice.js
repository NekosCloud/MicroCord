export class Voice {
    constructor(rest) {
        this.rest = rest;
    }

    async regions(options = {}) {
        return await this.rest.get(`/voice/regions`, options);
    }
}