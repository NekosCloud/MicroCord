export class Guild {
    constructor(rest) {
        this.rest = rest;

        this.channels.create = this.channelCreate;
        this.channels.modifyPosition = this.channelModifyPosition;
        this.members.get = this.memberGet;
        this.members.search = this.memberSearch;
        this.members.add = this.memberAdd;
        this.members.modify = this.memberModify;
        this.members.remove = this.memberRemove;
        this.members.roles = this.memberRole;
        this.members.roles.add = this.memberAddRole;
        this.members.roles.remove = this.memberRemoveRole;
        this.bans.get = this.banGet;
        this.bans.create = this.banCreate;
        this.bans.remove = this.banRemove;
        this.roles.create = this.roleCreate;
        this.roles.modify = this.roleModify;
        this.roles.modify.position = this.roleModifyPosition;
        this.roles.delete = this.roleDelete;
        this.prune.count = this.pruneCount;
        this.intergrations.delete = this.intergrationDelete;
        this.widget.modify = this.widgetModify;
        this.widget.settings = this.widgetSettings;
        this.widget.image = this.widgetImage;
        this.welcomeScreen.modify = this.welcomeScreenModify;
    }

    async create(body = {}, options = {}) {
        return await this.rest.post(`/guilds`, body, options);
    }

    async get(id, params = '', options = {}) {
        return await this.rest.get(`/guilds/${id}${params}`, options);
    }

    async preview(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/preview`, options);
    }

    async modify(id, body = {}, options = {}) {
        return await this.rest.patch(`/guilds/${id}`, body, options);
    }

    async delete(id, options = {}) {
        return await this.rest.delete(`/guilds/${id}`, options);
    }

    async channels(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/channels`, options);
    }

    async channelCreate(id, body = {}, options = {}) {
        return await this.rest.post(`/guilds/${id}/channels`, body, options);
    }

    async channelModifyPosition(id, body = {}, options = {}) {
        return await this.rest.patch(`/guilds/${id}/channels`, body, options);
    }

    async threads(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/threads/active`, options);
    }

    async memberGet(id, userid, options = {}) {
        return await this.rest.get(`/guilds/${id}/members/${userid}`, options);
    }

    async members(id, params = '', options = {}) {
        return await this.rest.get(`/guilds/${id}/members${params}`, options);
    }

    async memberSearch(id, params = '', options = {}) {
        return await this.rest.get(`/guilds/${id}/members/search${params}`, options);
    }

    async memberAdd(id, userid, body = {}, options = {}) {
        return await this.rest.put(`/guilds/${id}/members/${userid}`, body, options);
    }

    async memberModify(id, userid, body = {}, options = {}) {
        return await this.rest.patch(`/guilds/${id}/members/${userid}`, body, options);
    }

    async nickname(id, params = '', options = {}) {
        return await this.rest.patch(`/guilds/${id}/members/@me/nick${params}`, options);
    }

    async memberAddRole(id, userid, roleid, body = {}, options = {}) {
        return await this.rest.put(`/guilds/${id}/members/${userid}/roles/${roleid}`, body, options);
    }

    async memberRemoveRole(id, userid, roleid, options = {}) {
        return await this.rest.delete(`/guilds/${id}/members/${userid}/roles/${roleid}`, options);
    }

    async memberRemove(id, userid, options = {}) {
        return await this.rest.delete(`/guilds/${id}/members/${userid}`, options);
    }

    async memberRole(id, userid, options = {}) {
        const member = await this.memberGet(id, userid, options);
        return member.roles;
    }

    async bans(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/bans`, options);
    }

    async banGet(id, userid, options = {}) {
        return await this.rest.get(`/guilds/${id}/bans/${userid}`, options);
    }

    async banCreate(id, userid, body = {}, options = {}) {
        return await this.rest.put(`/guilds/${id}/bans/${userid}`, body, options);
    }

    async banRemove(id, userid, options = {}) {
        return await this.rest.delete(`/guilds/${id}/bans/${userid}`, options);
    }

    async roles(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/roles`, options);
    }

    async roleCreate(id, body = {}, options = {}) {
        return await this.rest.post(`/guilds/${id}/roles`, body, options);
    }

    async roleModifyPosition(id, body = {}, options = {}) {
        return await this.rest.patch(`/guilds/${id}/roles`, body, options);
    }

    async roleModify(id, roleid, body = {}, options = {}) {
        return await this.rest.patch(`/guilds/${id}/roles/${roleid}`, body, options);
    }

    async roleDelete(id, roleid, options = {}) {
        return await this.rest.delete(`/guilds/${id}/roles/${roleid}`, options);
    }

    async pruneCount(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/prune`, options);
    }

    async prune(id, body = {}, options = {}) {
        return await this.rest.post(`/guilds/${id}/prune`, body, options);
    }

    async voiceRegions(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/regions`, options);
    }

    async invites(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/invites`, options);
    }

    async intergrations(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/intergrations`, options);
    }

    async intergrationDelete(id, intergrationid, options = {}) {
        return await this.rest.delete(`/guilds/${id}/intergrations/${intergrationid}`, options);
    }

    async widgetSettings(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/widget`, options);
    }

    async widgetModify(id, body = {}, options = {}) {
        return await this.rest.patch(`/guilds/${id}/widget`, body, options);
    }

    async widget(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/widget.json`, options);
    }

    async vanityURL(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/vanity-url`, options);
    }

    async widgetImage(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/widget.png`, options);
    }

    async welcomeScreen(id, options = {}) {
        return await this.rest.get(`/guilds/${id}/welcome-screen`, options);
    }

    async welcomeScreenModify(id, body = {}, options = {}) {
        return await this.rest.patch(`/guilds/${id}/welcome-screen`, body, options);
    }

    async modifyVoiceState(id, userid = false, body = {}, options = {}) {
        return await this.rest.patch(`/guilds/${id}/voice-states/${userid ? userid : '@me'}`, body, options);
    }
}