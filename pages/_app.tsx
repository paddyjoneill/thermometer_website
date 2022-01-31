import '../src/assets/scss/main.scss'
import type { AppProps } from 'next/app'
import Layout from '../src/layout/Layout'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  // this for animation
  useEffect(() => {
    AOS.init();
  }, []);

  const page = pageProps.page

  return <Layout page={page}>
    <Component {...pageProps} />
  </Layout>
  
}

export default MyApp
