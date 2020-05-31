import MesaClient from 'mesa-js-client/dist/module'

const client = new MesaClient('ws://localhost:8000');

export function connect(token: string) {
    // client.onConnected = async () => {
    //     await client.authenticate({ token: `Bearer ${token}` });
    //     client.send(0, { status: 'online' }, 'MEMBER_UPDATE');
    // }
    client.connect();
}

export function disconnect() {
    // client.onDisconnected = () => {
    //     client.send(0, { status: 'offline' }, 'MEMBER_UPDATE')
    // }
    client.disconnect(1000);
}

export function send_message() {
    client.send(0, {
        room_id: 'voxel',
        channel_id: '32483120944635718',
        content: 'hello'
    }, 'MESSAGE_SEND');
}