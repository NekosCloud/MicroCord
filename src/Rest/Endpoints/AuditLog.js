export class AuditLog {
    constructor(rest) {
        this.rest = rest;
    }

    async get(guildid, options = {}) {
        return await this.rest.get(`/guilds/${guildid}/audit-logs`, options);
    }
}