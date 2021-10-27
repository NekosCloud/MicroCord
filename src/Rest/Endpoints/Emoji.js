export class Emoji {
    constructor(rest) {
        this.rest = rest;
    }

    async list(guildid, options = {}) {
        return await this.rest.get(`/guilds/${guildid}/emojis`, options);
    }

    async get(guildid, emoji, options = {}) {
        return await this.rest.get(`/guilds/${guildid}/emojis/${emoji}`, options);
    }

    async create(guildid, body = {}, options = {}) {
        return await this.rest.post(`/guilds/${guildid}/emojis`, body, options);
    }

    async modify(guildid, emoji, body = {}, options = {}) {
        return await this.rest.patch(`/guilds/${guildid}/emojis/${emoji}`, body, options);
    }

    async delete(guildid, emoji, options = {}) {
        return await this.rest.delete(`/guilds/${guildid}/emojis/${emoji}`, options);
    }
}
