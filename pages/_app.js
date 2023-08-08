import '@/styles/globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/styles.css'
import Head from 'next/head';
import NavigationBar from '@/components/navigationBar';
import Footer from '@/components/footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SAMZER Electrical Engineering</title>
        <link rel="icon" href='./favicon.ico' />
        <meta name="SAMZER Electrical Engineering" />
        <meta name="title" content="Samzer Electrical Engineering" />
        <meta name="description" content="SAMZER Electrical is a dynamic and innovative electrical services company that was established and registered with the Corporate Affairs Commission (CAC) in 2019. With a passion for excellence and a commitment to customer satisfaction, SAMZER Electrical has rapidly grown to become a trusted provider of electrical solutions, catering to both residential and commercial clients." />
        <meta name="keywords" content="Electricity, Power, Light, Transformer, Energy, Money, Services, Automated, Automate, Sell, Buy, Engineering, Electrictian, Samzer, Wiring, electricity, power, light, transformer, energy, money, services, automated, automate, sell, buy, engineering, electrictian, samzer, wiring" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="SAMZER Electrical Engineering" />
        <link rel="canonical" href="https://www.samzerelectrical.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </>

  )
}
