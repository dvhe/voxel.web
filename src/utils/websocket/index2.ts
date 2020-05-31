import { Collection } from '@augu/immutable';

interface ExpectingMessage<T = any> {
    resolve(value?: T | PromiseLike<T>): void;
    reject(error?: any): void;
}

export enum OPCode {
    Heartbeat = 'heartbeat',
    Identify = 'identify',
    Status = 'status',
    Disconnect = 'disconnected'
}

// interface User {
//     username: string;
//     tag: string;
//     rooms: string[]
//     status: string;
// }

interface VoxelSockets {
    ws: WebSocket;
    connected: boolean;
    heartbeatInterval: any;
    startedAt: number;
    user: {
        username: string;
        tag: string;
        rooms: string[]
        status: string;
    }
}

class VoxelSockets {
    constructor() {
        this.ws = null;
        this.connected = false;
        this.heartbeatInterval = null;
        this.startedAt = null;
    }

    private uuid() {
        let uuid = '';
        for (let i = 0; i < 32; i += 1) {
          if (i === 8 || i === 12 || i === 16 || i === 20) uuid += '-';
          let n: number;
          if (i === 12) {
            n = 4;
          } else {
            const random = (Math.random() * 16) | 0;
            if (i === 16) {
              n = (random & 3) | 0;
            } else {
              n = random;
            }
          }
      
          uuid += n.toString();
        }
      
        return uuid;
    }

    public expectingMessages: Collection<ExpectingMessage> = new Collection();

    private send<T = any>(op: OPCode, data?: T, event?: string) {
        return new Promise((resolve, reject) => {
          const nonce = this.uuid();
          const packet = {
            nonce,
            op,
            t: Date.now(),
            // e: event,
            d: data
          };
    
          this.ws!.send(JSON.stringify(packet));
          this.expectingMessages.set(nonce, { resolve, reject });
        });
      }

    private identity(email: string, password: string, reconnect?: boolean) {
        this.send(OPCode.Identify, {
            email: email,
            password: password
        });
    }

    private onConnection() {
        console.log('[Gateway] [CONNECTED] Connected to wss://gateway.voxel.bar');
        
        this.startedAt = Date.now();
        // this.identity();
        this.ack();
    }

    connect(email: string, password: string) {
        if(this.ws != null && this.connected) throw new Error('Unable to connect to the websocket server due to a connection already being open.');
        // if(this.ws != null && this.connected) this.disconnect()
        this.ws = new WebSocket('wss://gateway.voxel.bar');
        this.connected = true;
        this.ws.onopen = () => {
            this.ws.onmessage = () => {                
                this.startedAt = Date.now();
                this.identity(email, password);
                console.log(email, password)
                this.ack();
                console.log('Connecting to websocket');
            }
            // this.onConnection.bind(this)
        };
    }

    disconnect() {
        if(this.ws === null && !this.connected) throw new Error('Unable to close websocket connection, it seems there is no connection.');
        this.ws.close(1000, 'Client disconnecting');
        this.ws = null;
        this.connected = false;
        clearInterval(this.heartbeatInterval);
        this.ws.onopen = () => {
            this.ws.send('close');
            this.send(OPCode.Disconnect, 'Connection was closed', 'CLIENT_DISCONNECT');
        }
        this.ws.close()
    }

    private ack() {
        this.heartbeatInterval = setInterval(() => {
            // emit heartbeat event
            this.ws.onopen = () => {
                this.ws.send('heartbeat');
                this.send(OPCode.Heartbeat);
            }
        }, 30000);
    }

    getRooms() {

    }

}

export default VoxelSockets;
module.exports = VoxelSockets;