import Head from 'next/head'
import Nav from '../../components/layout/nav'
import CareerDescription from '../../components/pages/senior-frontend-engineer'

export default function SeniorFrontendEngineerPage() {
  return (
    <>
      <Head>
        <title>Careers | Senior Frontend Engineer | CREDMARK</title>
        <meta content="Careers | Senior Frontend Engineer | CREDMARK" property="og:title" key="og:title" />
        <meta name="description" content="Build the future of DeFi with us by joining the Credmark team." />
        <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="nav">
        <Nav
          page={<CareerDescription />} />
      </div>
    </>
  )
}