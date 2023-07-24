import React from 'react'
import Head from 'next/head'


const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <title>SAMZER Electrical Engineering</title>
                <link rel="icon" href='/logo.png' />
                <meta
                    name="SAMZER Electrical Engineering" />
            </Head>
            {children}

        </>
    )
}

export default Layout