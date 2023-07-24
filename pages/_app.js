import '@/styles/globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/styles.css'
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SAMZER Electrical Engineering</title>
        <link rel="icon" href='./favicon.ico' />
        <meta name="SAMZER Electrical Engineering" />
      </Head>
      <Component {...pageProps} />

    </>

  )
}
