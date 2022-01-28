import '../src/assets/scss/main.scss'
import type { AppProps } from 'next/app'
import Layout from '../src/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {

  const page = pageProps.page

  return <Layout page={page}>
    <Component {...pageProps} />
  </Layout>
  
}

export default MyApp
