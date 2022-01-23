import '../styles/globals.scss'
import Header from '../components/header/header'
import Navbar from '../components/navbar/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
