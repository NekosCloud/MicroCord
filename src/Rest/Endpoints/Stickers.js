export class Sticker {
    constructor(rest) {
        this.rest = rest;

        this.guild.get = this.guildGet;
        this.guild.create = this.guildCreate;
        this.guild.modify = this.guildModify;
        this.guild.delete = this.guildDelete;
    }

    async get(id, options = {}) {
        return await this.rest.get(`/stickers/${id}`, options);
    }

    async packs(options = {}) {
        return await this.rest.get(`/sticker-packs`, options);
    }

    async guild(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/stickers`, options);
    }

    async guildGet(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/stickers/${id}`, options);
    }

    async guildCreate(id, body = {}, options = {}) {
        return await this.rest.post(`/guilds/${id}/stickers`, body, options);
    }

    async guildModify(id, stickerid, body = {}, options = {}) {
        return await this.rest.patch(`/guilds/${id}/stickers/${stickerid}`, body, options);
    }

    async guildDelete(id, stickerid, options = {}) {
        return await this.rest.delete(`/guilds/${id}/stickers/${stickerid}`, options);
    }
}