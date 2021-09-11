import type { NextPage } from 'next'
import Head from 'next/head'
import Header from './src/components/Header'
import Nav from './src/components/Nav'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Hulu UI Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
    </div>
  )
}

export default Home
