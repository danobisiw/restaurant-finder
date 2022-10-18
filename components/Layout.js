import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({title, children}) => {
    return (<>
        <Head>
            <title> {
                title ? title + "-PD DIRECT" : "PD DIRECT"
            }</title>
            <meta name="description" content="Restaurant Finder"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <div className="flex min-h-screen flex-col">
            <Navbar/>
            <main className="container mx-auto px-4"> {children}</main>

            <Footer className="absolute bottom-0 m-auto px-4"></Footer>
        </div>
    </>);
};

export default Layout;
