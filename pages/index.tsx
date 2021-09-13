import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Header from './src/components/Header'
import Nav from './src/components/Nav'
import Results from './src/components/Results'
import requests, { Response } from './src/utils/requests'
import { getFromTMDB } from './src/utils/tmdb'

const Home: NextPage<Props> = ({ results }) => {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Hulu UI Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  )
}

type Props = {
  results: Response | null
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { genre } = ctx.query
  const url = requests[genre as string]?.url || requests['trending'].url

  let results: Response | null
  try {
    const { data } = await getFromTMDB(url)
    results = data
  } catch (error) {
    results = null
  }

  return { props: { results } }
}

export default Home
