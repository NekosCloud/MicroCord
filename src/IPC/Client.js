import net from 'net';
import { platform } from 'process';
import { escape } from 'querystring';

export class IPCClient {
    constructor(name, path) {
        this.path = (platform === 'win32') ? `\\\\?\\pipe\\${name}` : path;
        this.socket = net.connect(this.path);

        this.socket.on('data', data_buffer => {
            this.emit('data', data_buffer.toString());
        });
    }

    send(data) {
        this.socket.write(`${escape(data)}`);
    }
}