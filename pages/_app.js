import '../styles/globals.scss';
import Header from '../components/header/header';
import Navbar from '../components/navbar/navbar';
import Head from 'next/head';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState({})
  return (
    <>
      <Head>
        <title>SW</title>
      </Head>
      <Header />
      <Navbar />
      <main>
        <Component {...pageProps}  setData={setData} data={data}/>
      </main>
    </>
  )
}

export default MyApp
