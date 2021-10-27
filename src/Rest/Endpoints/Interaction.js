export class Interaction {
    constructor(rest) {
        this.rest = rest;

        this.response.create = this.responseCreate;
        this.response.edit = this.responseEdit;
        this.response.delete = this.responseDelete;
        this.followup.create = this.followupCreate;
        this.followup.edit = this.followupEdit;
        this.followup.delete = this.followupDelete;
    }

    async responseCreate(id, token, data = {}, options = {}) {
        return await this.rest.post(`/interactions/${id}/${token}/callback`, data, options);
    }

    async response(id, token, options = {}) {
        return await this.rest.get(`/webhooks/${id}/${token}/messages/@original`, options);
    }

    async responseEdit(id, token, data = {}, options = {}) {
        return await this.rest.patch(`/webhooks/${id}/${token}/messages/@original`, data, options);
    }

    async responseDelete(id, token, options = {}) {
        return await this.rest.delete(`/webhooks/${id}/${token}/messages/@original`, options);
    }

    async followupCreate(id, token, data = {}, options = {}) {
        return await this.rest.post(`/webhooks/${id}/${token}`, data, options);
    }

    async followup(id, token, messageid, options = {}) {
        return await this.rest.get(`/webhooks/${id}/${token}/messages/${messageid}`, options);
    }

    async followupEdit(id, token, messageid, body = {}, options = {}) {
        return await this.rest.patch(`/webhooks/${id}/${token}/messages/${messageid}`, body, options);
    }

    async followupDelete(id, token, messageid, options = {}) {
        return await this.rest.delete(`/webhooks/${id}/${token}/messages/${messageid}`, options);
    }
}