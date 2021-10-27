export class Webhook {
    constructor(rest) {
        this.rest = rest;

        this.get.channel = this.channelGet;
        this.get.guild = this.guildGet;
        this.execute.slack = this.executeSlack;
        this.execute.github = this.executeGithub;
        this.message.modify = this.modifyMessage;
        this.message.delete = this.deleteMessage;
    }

    async create(channelid, body = {}, options = {}) {
        return await this.rest.post(`/channels/${channelid}/webhooks`, body, options);
    }

    async channelGet(channelid, options = {}) {
        return await this.rest.get(`/channels/${channelid}/webhooks`, options);
    }

    async guildGet(guildid, options = {}) {
        return await this.rest.get(`/channels/${guildid}/webhooks`, options);
    }

    async get(id, token = false, options = {}) {
        return await this.rest.get(`/webhooks/${id}${token ? `/${token}` : ''}`, options);
    }

    async modify(id, token = false, body = {}, options = {}) {
        return await this.rest.patch(`/webhooks/${id}${token ? `/${token}` : '' }`, body, options);
    }

    async delete(id, token = false, options = {}) {
        return await this.rest.delete(`/webhooks/${id}${token ? `/${token}` : ''}`, options);
    }

    async execute(id, token, body = {}, options = {}) {
        return await this.rest.post(`/webhooks/${id}/${token}`, body, options);
    }

    async executeSlack(id, token, body = {}, options = {}) {
        return await this.rest.post(`/webhooks/${id}/${token}/slack`, body, options);
    }

    async executeGithub(id, token, body = {}, options = {}) {
        return await this.rest.post(`/webhooks/${id}/${token}/github`, body, options);
    }

    async message(id, token, messageid, options = {}) {
        return await this.rest.get(`/webhooks/${id}/${token}/messages/${messageid}`, options);
    }

    async modifyMessage(id, token, messageid, body = {}, options = {}) {
        return await this.rest.patch(`/webhooks/${id}/${token}/messages/${messageid}`, body, options);
    }

    async deleteMessage(id, token, messageid, options = {}) {
        return await this.rest.delete(`/webhooks/${id}/${token}/messages/${messageid}`, options);
    }
}