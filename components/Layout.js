// const { default: Navbar } = require("./Navbar")

import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <title>SHOPFM</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;