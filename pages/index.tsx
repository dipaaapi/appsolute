import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className="{styles.container}">
            <Head>
                <title>APPSOLUTE | Welcome Page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>welcome page</h1>
            <p className="">hi everyone this is a test page try to go to this page: <a href="./list" className="">list page</a></p>
        </div>
    )
}

export default Home
