// import websocket from '../utils/websocket';
import { connect, disconnect, send_message } from '../utils/websocket/index';
import { AccountData } from '../core/controllers/account/account.state';
import Router from 'next/router';
import Rooms from './rooms/me/index';

const Page = () => {
    const testing = () => {
        Router.replace('/test', '/rooms/me', {shallow: true})
        return <Rooms />
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => connect(AccountData.token.value)}>Connect to me daddy</button>

            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => disconnect()}>Disconnect</button> */}

            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => send_message()}>Send message</button> */}

            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => testing()}>Send message</button> */}

        </div>
    )
}

export default Page;
 