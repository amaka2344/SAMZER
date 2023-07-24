import '@/styles/globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from '@/components/layout';
import '../styles/styles.css'


export default function App({ Component, pageProps }) {
  return (
    <Layout
    >
      <Component {...pageProps} />
    </Layout>
  )
}
