import React from 'react';
import '../styles/tailwind.css';
import { AppProps } from 'next/app'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from '../core/api';
import { AccountData } from '../core/controllers/account/account.state';
import { Account } from '../core';
import { usePulse } from 'pulse-framework';
import Landing from './index';

import MesaClient from 'mesa-js-client/dist/module'
const client = new MesaClient('ws://localhost:8000');

client.onDisconnected = () => {
  client.send(0, { status: 'offline' }, 'MEMBER_UPDATE');
}

// client.onConnected = async () => {
  // await client.authenticate({ token: `Bearer ${AccountData.token.value}` });
// }

toast.configure();

const routes = ['/login', 'register'];

const Voxel = ({ Component, pageProps, router }: AppProps) => {
  if (process.browser && AccountData.token.value !== undefined) {
    Api.config.options.headers["authorization"] = `Bearer ${AccountData.token.value}`;
  }
  const [logged] = usePulse([Account.isUserLoggedIn]);
  if (router.route === '/' && !logged) return <Landing/>;
  if(!process.browser) {
    <Component {...pageProps} />
  }
  if(logged) return <Component {...pageProps} />
  if(routes.includes(router.route))  return <Component {...pageProps} />
  return <Component {...pageProps} />
}

export default Voxel;

