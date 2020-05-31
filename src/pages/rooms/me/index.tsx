import React, { useState, useEffect, Component } from 'react';
import { Account } from '../../../core';
import { AccountData } from '../../../core/controllers/account/account.state';
import { usePulse } from 'pulse-framework';
import Router from 'next/router';
import Rooms from '../../../components/rooms';
import ReactTooltip from 'react-tooltip';
import { connect, disconnect } from '../../../utils/websocket/index';

const Page = () => {
    const [username] = usePulse([AccountData.username]);

    // const [followingPosts] = usePulse([PostCollection.getGroup('')]);
    return (
        <div>
            <div className="flex bg-voxel-gray px-4 py-2 overflow-hidden overflow-y-auto overflow-x-none">
                <button>
                    <svg className="absolute right-0 top-15 space-x-5 transform -translate-x-cog user-settings" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2793 2.33333L10.7051 5.27734C9.74805 5.63964 8.86165 6.1455 8.08464 6.78352L5.25684 5.80826L2.53613 10.5251L4.79883 12.4915C4.71908 12.9837 4.66667 13.485 4.66667 14C4.66667 14.515 4.71908 15.0163 4.79883 15.5085L2.53613 17.4749L5.25684 22.1917L8.08464 21.2165C8.86165 21.8545 9.74805 22.3603 10.7051 22.7227L11.2793 25.6667H16.7207L17.2949 22.7227C18.252 22.3603 19.1383 21.8545 19.9154 21.2165L22.7432 22.1917L25.4639 17.4749L23.2012 15.5085C23.2809 15.0163 23.3333 14.515 23.3333 14C23.3333 13.485 23.2809 12.9837 23.2012 12.4915L25.4639 10.5251L22.7432 5.80826L19.9154 6.78352C19.1383 6.1455 18.252 5.63964 17.2949 5.27734L16.7207 2.33333H11.2793ZM14 9.33333C16.5771 9.33333 18.6667 11.4228 18.6667 14C18.6667 16.5771 16.5771 18.6667 14 18.6667C11.4229 18.6667 9.33333 16.5771 9.33333 14C9.33333 11.4228 11.4229 9.33333 14 9.33333Z" fill="#9F9DB9"/>
                    </svg>
                </button>
                <svg className="absolute right-0 top-15 space-x-5 transform -translate-x-cogborder" width="4" height="27" viewBox="0 0 4 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="4" height="27" rx="2" fill="#646570"/>
                </svg>
                <svg className="home" width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg" data-tip data-for="home">
                    <rect width="46" height="44" rx="11" fill="#9F9DB9"/>
                    <path d="M27.2583 18.8975L23.9893 28H22.3008L19.0889 18.8975H20.7393L22.9863 25.8037C23.0583 26.0238 23.1133 26.2798 23.1514 26.5718H23.1768C23.2064 26.3306 23.2677 26.0703 23.3608 25.791L25.6587 18.8975H27.2583Z" fill="#2B2A3C"/>
                </svg>
                <ReactTooltip id="home" backgroundColor='#000000' place="right" type="dark" effect="solid">
                    <b>Home</b>
                </ReactTooltip>
                <img src="/kyle.jpg" className="absolute right-0 -mt-1px -ml-4px space-x-5 transform -translate-x-pfp rounded-full" style={{height: '35px', width: '35px'}} />
                <p className="absolute right-0 top-0 mt-3 transform -translate-x-name text-white">{username}</p>
                {/* <div className="px-1 py-2 mx-3 text-white">
                    <div className="md:w-2/3">
                    <form>
                        <input
                            className="bg-voxel-dark-gray appearance-none border-2 border-none rounded w-full py-2 px-4 text-voxel-purple leading-tight focus:outline-none focus:bg-voxel-dark-gray focus:border-none"
                            type="search"
                            name="search_box"
                            placeholder="Search"
                        />
                    </form>
                    </div>
                </div> */}
            </div>
            <div className="flex">
                {/* This is the actual wrapper */}
                <div className="w-23 flex-none flex flex-col min-h-screen h-screen bg-voxel-rooms overflow-scroll overflow-y-auto overflow-x-none">
                    {/* <p className="text-white">rooms</p> */}
                    {/* <Rooms/> */}
                    <a className="box-border mx-4 mt-3" href="/rooms/voxel" data-tip data-for='server'>
                        <div className="room-wrapper room-no-icon rounded-full">V</div>
                        <ReactTooltip id='server' backgroundColor='#000000' place="right" type="dark" effect="solid">
                            <b>Voxel</b>
                        </ReactTooltip>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Page;
