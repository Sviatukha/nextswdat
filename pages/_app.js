import '../styles/globals.scss'
import Header from '../components/header/header'
import Navbar from '../components/navbar/navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SW</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
