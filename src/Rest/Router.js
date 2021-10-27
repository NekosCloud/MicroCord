import { RedisMutex, Rest } from '@spectacles/rest';
import Redis from 'ioredis';

import { Application } from './Endpoints/Application.js';
import { AuditLog } from './Endpoints/AuditLog.js';
import { Channel } from './Endpoints/Channels.js';
import { Emoji } from './Endpoints/Emoji.js';
import { Gateway } from './Endpoints/Gateway.js';
import { Guild } from './Endpoints/Guilds.js';
import { Interaction } from './Endpoints/Interaction.js';
import { Invite } from './Endpoints/Invites.js';
import { Stage } from './Endpoints/Stages.js';
import { Sticker } from './Endpoints/Stickers.js';
import { User } from './Endpoints/Users.js';
import { Voice } from './Endpoints/Voice.js';
import { Webhook } from './Endpoints/Webhooks.js';

export class Router {
    constructor(token, RedisOptions) {
        const RestOptions = {
            base: 'https://discord.com',
            version: 9,
            mutex: new RedisMutex(new Redis(RedisOptions))
        }
        this.rest = new Rest(token, RestOptions);
        this.application = new Application
        this.auditlog = new AuditLog(this.rest);
        this.channels = new Channel(this.rest);
        this.emojis = new Emoji(this.rest);
        this.gateway = new Gateway(this.rest)
        this.guilds = new Guild(this.rest);
        this.interactions = new Interaction(this.rest);
        this.invites = new Invite(this.rest);
        this.stages = new Stage(this.rest);
        this.stickers = new Sticker(this.rest);
        this.users = new User(this.rest);
        this.voice = new Voice(this.rest);
        this.webhooks = new Webhook(this.rest);
    }
}
