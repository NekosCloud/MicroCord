export class Invite {
    constructor(rest) {
        this.rest = rest;
    }

    async get(code, options = {}) {
        return await this.rest.get(`/invites/${code}`, options);
    }

    async delete(code, options = {}) {
        return await this.rest.delete(`/invites/${code}`, options);
    }
}