import Router from "next/router";
import { useEffect } from "react";
import App from 'next/app';

const Page = () => {
    useEffect(() => {
        if(process.browser) Router.push('/rooms/me')
    });
    return(null)
}

export default Page;