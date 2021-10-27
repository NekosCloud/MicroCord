export class ShoukakuPlugin {
    constructor(restclient, wsclient) {
        this.rest = restclient;
        this.ws = wsclient;
    }

    getters() {
        return {
            // TODO: replace this with the adaptor
            guilds: this.client.guilds,
            id: () => this.rest.users.get,
            // eslint-disable-next-line no-unused-vars
            ws: (shardId, payload, important = false) => this.ws.send(shardId, payload),
        };
    }

    build(shoukaku, nodes) {
        if (!nodes?.length) throw new Error('No nodes supplied');
        this.ws.once('ready', () => shoukaku._clientReady(nodes));
        this.ws.on('raw', packet => shoukaku._clientRaw(packet));
        return this.getters();
    }
}
