export class Channel {
    constructor(rest) {
        this.rest = rest;

        this.messages.get = this.messageGet;
        this.messages.create = this.messageCreate;
        this.messages.crosspost = this.messageCrosspost;
        this.messages.edit = this.messageEdit;
        this.messages.delete = this.messageDelete;
        this.messages.delete.bulk = this.messageBulkDelete;
        this.reactions = this.reactionGet;
        this.reactions.create = this.reactionCreate;
        this.reactions.delete = this.reactionDelete;
        this.reactions.delete.all = this.reactionDeleteAll;
        this.reactions.delete.emoji = this.reactionDeleteEmoji;
        this.modify.permissions = this.modifyPermissions;
        this.delete.permissions = this.deletePermissions;
        this.invites.create = this.inviteCreate;
        this.pins.create = this.pinCreate;
        this.pins.delete = this.pinDelete;
        this.dm.add = this.dmAdd;
        this.dm.remove = this.dmRemove;
        this.threads.start = this.threadStart;
        this.threads.join = this.threadJoin;
        this.threads.add = this.threadAdd;
        this.threads.leave = this.threadLeave;
        this.threads.remove = this.threadRemove;
        this.threads.members = this.threadMembers;
        this.threads.archived = this.threadsArchived;
        this.threads.private = this.threadsJoinedPrivate;
        this.threads.private.archived = this.threadsArchivedPrivate;
    }

    async get(id, options = {}) {
        return await this.rest.get(`/channels/${id}`, options);
    }

    async modify(id, body = {}, options = {}) {
        return await this.rest.patch(`/channels/${id}`, body, options);
    }

    async delete(id, options = {}) {
        return await this.rest.delete(`/channels/${id}`, options);
    }

    async messages(id, options = {}) {
        return await this.rest.get(`/channels/${id}/messages`, options);
    }

    async messageGet(id, messageid, options = {}) {
        return await this.rest.get(`/channels/${id}/messages/${messageid}`, options);
    }

    async messageCreate(id, body = {}, options = {}) {
        return await this.rest.post(`/channels/${id}/messages`, body, options);
    }

    async messageCrosspost(id, messageid, body = {}, options = {}) {
        return await this.rest.post(`/channels/${id}/messages/${messageid}/crosspost`, body, options);
    }

    async reactionCreate(id, messageid, emoji, body = {}, options = {}) {
        return await this.rest.put(`/channels/${id}/messages/${messageid}/reactions/${emoji}/@me`, body, options);
    }

    async reactionDelete(id, messageid, emoji, user = false, options = {}) {
        return await this.rest.delete(`/channels/${id}/messages/${messageid}/reactions/${emoji}/${ user ? user : '@me' }`, options);
    }

    async reactionGet(id, messageid, emoji, options = {}) {
        return await this.rest.get(`/channels/${id}/messages/${messageid}/reactions/${emoji}`, options);
    }

    async reactionDeleteAll(id, messageid, options = {}) {
        return await this.rest.delete(`/channels/${id}/messages/${messageid}/reactions`, options);
    }

    async reactionDeleteEmoji(id, messageid, emoji, options = {}) {
        return await this.rest.delete(`/channels/${id}/messages/${messageid}/reactions/${emoji}`, options);
    }

    async messageEdit(id, messageid, body = {}, options = {}) {
        return await this.rest.patch(`/channels/${id}/messages/${messageid}`, body, options);
    }

    async messageDelete(id, messageid, options = {}) {
        return await this.rest.delete(`/channels/${id}/messages/${messageid}`, options);
    }

    async messageBulkDelete(id, body = {}, options = {}) {
        return await this.rest.post(`/channels/${id}/messages/bulk-delete`, body, options);
    }

    async modifyPermissions(id, overwriteid, body = {}, options = {}) {
        return await this.rest.put(`/channels/${id}/permissions/${overwriteid}`, body, options);
    }

    async invites(id, options = {}) {
        return await this.rest.get(`/channels/${id}/invites`, options);
    }

    async inviteCreate(id, body = {}, options = {}) {
        return await this.rest.post(`/channels/${id}/invites`, body, options);
    }

    async deletePermissions(id, overwriteid, options = {}) {
        return await this.rest.delete(`/channels/${id}/permissions/${overwriteid}`, options);
    }

    async follow(id, body = {}, options = {}) {
        return await this.rest.post(`/channels/${id}/followers`, body, options);
    }

    async typing(id, body = {}, options = {}) {
        return await this.rest.post(`/channels/${id}/typing`, body, options);
    }

    async pins(id, options = {}) {
        return await this.rest.get(`/channels/${id}/pins`, options);
    }

    async pinCreate(id, messageid, body = {}, options = {}) {
        return await this.rest.put(`/channels/${id}/pins/${messageid}`, body, options);
    }

    async pinDelete(id, messageid, options = {}) {
        return await this.rest.delete(`/channels/${id}/pins/${messageid}`, options);
    }

    async dm(id, options = {}) {
        const channel = await this.get(id, options);
        if (channel.type === 1 || channel.type === 3) return true;
        return false;
    }

    async dmAdd(id, userid, body = {}, options = {}) {
        return await this.rest.put(`/channels/${id}/recipients/${userid}`, body, options);
    }

    async dmRemove(id, userid, options = {}) {
        return await this.rest.delete(`/channels/${id}/recipients/${userid}`, options);
    }

    async threadStart(id, messageid = false, body = {}, options = {}) {
        return await this.rest.post(`/channels/${id}/${messageid ? `messages/${messageid}/threads` : 'threads'}`, body, options);
    }

    async threadJoin(id, body = {}, options = {}) {
        return await this.rest.put(`/channels/${id}/thread-members/@me`, body, options);
    }

    async threadAdd(id, userid, body = {}, options = {}) {
        return await this.rest.put(`/channels/${id}/thread-members/${userid}`, body, options);
    }

    async threadLeave(id, options = {}) {
        return await this.rest.delete(`/channels/${id}/thread-members/@me`, options);
    }

    async threadRemove(id, userid, options = {}) {
        return await this.rest.delete(`/channels/${id}/thread-members/${userid}`, options);
    }

    async threadMembers(id, options = {}) {
        return await this.rest.get(`/channels/${id}/thread-members`, options);
    }

    async threads(id, options = {}) {
        return await this.rest.get(`/channels/${id}/threads/active`, options);
    }

    async threadsArchived(id, options = {}) {
        return await this.rest.get(`/channels/${id}/threads/archived/public`, options);
    }

    async threadsArchivedPrivate(id, options = {}) {
        return await this.rest.get(`/channels/${id}/threads/archived/private`, options);
    }

    async threadsJoinedPrivate(id, options = {}) {
        return await this.rest.get(`/channels/${id}/users/@me/threads/archived/private`, options);
    }
}
