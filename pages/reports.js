import Head from 'next/head'
import Reports from '../components/pages/reports'


export default function ReportsPage() {
    return (
    <>
      <Head>
        <title>Media and Crypto Reports | CREDMARK</title>
        <meta content="Media and Crypto Reports | Credmark" property="og:title" key="og:title" />
        <meta name="description" content="Check out our latest press articles and crypto credit reports." />
        <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="nav">
        <Reports/>
      </div>
    </>
  )
}
