import Head from 'next/head'
import Nav from '../components/layout/nav'
import Careers from '../components/pages/careers'

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers | CREDMARK</title>
        <meta content="Team | Credmark" property="og:title" key="og:title" />
        <meta name="description" content="Build the future of DeFi with us by joining the Credmark team." />
        <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="nav">
        <Careers />
      </div>
    </>
  )
}