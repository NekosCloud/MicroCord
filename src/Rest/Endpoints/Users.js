export class User {
    constructor(rest) {
        this.rest = rest;

        this.current.modify = this.currentModify;
        this.current.guilds = this.currentGuilds;
        this.current.leave = this.currentLeave;
        this.current.createDM = this.createDM;
        this.current.createDM.group = this.currentCreateGroupDM;
    }

    async current(options = {}) {
        return await this.rest.get(`/users/@me`, options);
    }

    async get(id, options = {}) {
        return await this.rest.get(`/users/${id}`, options);
    }

    async currentModify(id, body = {}, options = {}) {
        return await this.rest.patch(`/users/${id}`, body, options);
    }

    async currentGuilds(options = {}) {
        return await this.rest.get(`/users/@me/guilds`, options);
    }

    async currentLeave(guildid, options = {}) {
        return await this.rest.delete(`/users/@me/guilds/${guildid}`, options);
    }

    async currentCreateDM(body = {}, options = {}) {
        return await this.rest.post(`/users/@me/channels`, body, options);
    }

    async currentCreateGroupDM(body = {}, options = {}) {
        return await this.rest.post(`/users/@me/channels`, body, options);
    }

    async connections(options = {}) {
        return await this.rest.get(`/users/@me/connections`, options);
    }
}