import React, { useState } from 'react';
import { Account } from '../core';
import { Log } from '../utils';
import { usePulse } from 'pulse-framework';
import Router from 'next/router'
import Socket from '../utils/websocket/index2';

const Page = () => {
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const doLogin = async (ev) => {
      ev.preventDefault();
      if (!email) return;
      if (!password) return;
      const logged = await Account.login(email, password);  
      // @ts-ignore
      Log('Application', 'Logging in');
      if (logged.success) return Router.push('/app');
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full max-w-xs">
                <form onSubmit={doLogin} className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                    <b className="text-black">Welcome back!</b>
                    <br></br>
                    <br></br>
                    <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                        <input
                          type="email"
                          name="login_email"
                          placeholder=""
                          required
                          value={email}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          onChange={(change) => { setEmail(change.target.value) }}
                        />
                    </div>
                    <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                    </label>
                        <input
                          type="password"
                          name="login_password"
                          placeholder=""
                          maxLength={100}
                          minLength={8}
                          required
                          value={password}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          onChange={(change) => { setPassword(change.target.value) }}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Login" className="bg-gray-400"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page;
