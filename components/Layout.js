import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({title, children}) => {
  return (
    <>
      <Head>
        <title>{title ? title + "-PD DIRECT" : "PD DIRECT"}</title>
        <meta name="description" content="Restaurant Finder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Navbar />
        <main className="container m-auto px-4">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
