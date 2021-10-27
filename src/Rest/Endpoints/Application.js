export class Application {
    constructor(rest) {
        this.rest = rest;

        this.global.create = this.globalCreate;
        this.global.get = this.globalGet;
        this.global.edit = this.globalEdit;
        this.global.delete = this.globalDelete;
        this.global.override = this.globalOverride;
        this.guild.create = this.guildCreate;
        this.guild.get = this.guildGet;
        this.guild.edit = this.guildEdit;
        this.guild.delete = this.guildDelete;
        this.guild.override = this.guildOverride;
        this.guild.permissions = this.guildPermissions;
        this.commandPermissions.edit = this.commandPermissionsEdit;
        this.commandPermissions.edit.batch = this.commandPermissionsEditBatch;
    }

    async global(id, options = {}) {
        return await this.rest.get(`/applications/${id}/commands`, options);
    }

    async globalCreate(id, body = {}, options = {}) {
        return await this.rest.post(`/applications/${id}/command`, body, options);
    }

    async globalGet(id, commandid, options = {}) {
        return await this.rest.get(`/applications/${id}/commands/${commandid}`, options);
    }

    async globalEdit(id, commandid, body = {}, options = {}) {
        return await this.rest.patch(`/application/${id}/commands/${commandid}`, body, options);
    }

    async globalDelete(id, commandid, options = {}) {
        return await this.rest.delete(`/application/${id}/commands/${commandid}`, options);
    }

    async guild(id, guildid, options = {}) {
        return await this.rest.get(`/application/${id}/guilds/${guildid}/commands`, options);
    }

    async globalOverride(id, body = {}, options = {}) {
        return await this.rest.put(`/applications/${id}/commands`, body, options);
    }

    async guildCreate(id, guildid, body = {}, options = {}) {
        return await this.rest.post(`/applications/${id}/guilds/${guildid}/commands`, body, options);
    }

    async guildGet(id, guildid, commandid, options = {}) {
        return await this.rest.get(`/applications/${id}/guilds/${guildid}/commands/${commandid}`, options);
    }

    async guildEdit(id, guildid, commandid, body = {}, options = {}) {
        return await this.rest.patch(`/applications/${id}/guilds/${guildid}/commands/${commandid}`, body, options);
    }

    async guildDelete(id, guildid, commandid, options = {}) {
        return await this.rest.delete(`/applications/${id}/guild/${guildid}/commands/${commandid}`, options);
    }

    async guildOverride(id, guildid, body = {}, options = {}) {
        return await this.rest.put(`/applications/${id}/guild/${guildid}/commands`, body, options);
    }

    async guildPermissions(id, guildid, options = {}) {
        return await this.rest.get(`/applications/${id}/guilds/${guildid}/commands/permissions`, options);
    }

    async commandPermissions(id, guildid, commandid, options = {}) {
        return await this.rest.get(`/applications/${id}/guilds/${guildid}/commands/${commandid}/permissions`, options);
    }

    async commandPermissionsEdit(id, guildid, commandid, body = {}, options = {}) {
        return await this.rest.put(`/applications/${id}/guilds/${guildid}/commands/${commandid}/permissions`, body, options);
    }

    async commandPermissionsEditBatch(id, guildid, body = {}, options = {}) {
        return await this.rest.put(`/applications/${id}/guilds/${guildid}/commands/permissions`, body, options);
    }
}