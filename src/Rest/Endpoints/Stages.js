export class Stage {
    constructor(rest) {
        this.rest = rest;
    }

    async create(body = {}, options = {}) {
        return await this.rest.post(`/stage-instances`, body, options);
    }

    async get(id, options = {}) {
        return await this.rest.get(`/stage-instances/${id}`, options);
    }

    async modify(id, body = {}, options = {}) {
        return await this.rest.patch(`/stage-instances/${id}`, body, options);
    }

    async delete(id, options = {}) {
        return await this.rest.delete(`/stage-instances/${id}`, options);
    }
}