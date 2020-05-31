import React from 'react';
import MesaClient from 'mesa-js-client/dist/module'
const client = new MesaClient('ws://localhost:8000');
import { AccountData } from '../../core/controllers/account/account.state';
import { disconnect, connect } from '../../utils/websocket';

class Test extends React.Component {
    componentWillUnmount() {
        client.disconnect()
    }

    componentDidMount() {
        client.onConnected = async () => {
            await client.authenticate({ token: `Bearer ${AccountData.token.value}` });
        }
        setTimeout(() => {
            client.send(0, { status: 'online' }, 'MEMBER_UPDATE');
        }, 1000);
    }

    render() {
        return (
            <p>Hey</p>
        )
    }
}

export default Test;