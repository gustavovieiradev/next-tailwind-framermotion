import '../styles/tailwind.css';
import '../styles/globals.css';
import { AnimateSharedLayout } from 'framer-motion';
import { Layout } from '../components/Layout';


function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimateSharedLayout>
  )
}

export default MyApp
