import { Amqp } from '@spectacles/brokers';
import { Events } from '../Constants.js';
import EventEmitter from 'events';

const EventsKeys = Object.keys(Events);

export class GatewayConnector extends EventEmitter {
    constructor(groupName = 'gateway', host = 'localhost', list = EventsKeys) {
        super();
        this.amqp = new Amqp(groupName);
        this._subscribe(host, list);
    }

    // id: String | 'guild'
    async send(id, data, options) {
        const amqpEvent = (options?.idType === 'guild') ? 'SEND' : id;
        const amqpPacket = (options?.idType === 'guild') ? { guild_id: id, packet: data } : data;
        return await this.amqp.publish(amqpEvent, amqpPacket, options);
    }

    async _subscribe(host, list) {
        await this.amqp.connect(host);
        await this.amqp.subscribe(list);
        await this.amqp.createQueue('0');

        for (const event of EventsKeys) {
            this.amqp.on(event, (data, { ack }) => {
                ack();
                this.emit(Events[event], data);
                // workaround
                this.emit('raw', data);
            });
        }
        this.emit('connected', true);
    }
}
