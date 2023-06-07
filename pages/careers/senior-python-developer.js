import Head from 'next/head'
import Nav from '../../components/layout/nav'
import CareerDescription from '../../components/pages/senior-python-developer'

export default function SeniorPythonDeveloperPage() {
  return (
    <>
      <Head>
        <title>Careers | Senior Python Developer | CREDMARK</title>
        <meta content="Careers | Senior Python Developer | CREDMARK" property="og:title" key="og:title" />
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