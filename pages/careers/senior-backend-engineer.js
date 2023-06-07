import Head from 'next/head'
import CareerDescription from '../../components/pages/senior-backend-engineer'

export default function SeniorBackendEngineerPage() {
  return (
    <>
      <Head>
        <title>Careers | Senior Backend Engineer | CREDMARK</title>
        <meta content="Careers | Senior Backend Engineer | CREDMARK" property="og:title" key="og:title" />
        <meta name="description" content="Build the future of DeFi with us by joining the Credmark team." />
        <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="nav">
        <CareerDescription />
      </div>
    </>
  )
}