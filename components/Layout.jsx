import Head from 'next/head'
import Image from 'next/image'
import Nav from './nav/Nav'


const Layout = ({children}) => {
    return (
        <>
        <Head>
        <title>My Contacts List</title>
        <link rel="icon" href="/neural.png" />
      </Head>
        <Nav />
        <div>
            <main>{children}</main>
        </div>

        </>
        
    )
}

export default Layout