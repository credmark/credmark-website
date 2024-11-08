import Head from 'next/head'
import CareerDescription from '../../components/pages/senior-cloud-architect'

export default function SeniorCloudArchitectPage() {
  return (
    <>
      <Head>
        <title>Careers | Senior Cloud Architect | CREDMARK</title>
        <meta content="Careers | Senior Cloud Architect | CREDMARK" property="og:title" key="og:title" />
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