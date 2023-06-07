import Head from 'next/head'
import Terms from '../../../components/legal/terms'



export default function TOSPage() {
  return (
    <>
      <Head>
        <title>Terms of Service | CREDMARK</title>
        <meta content="Terms of Service | Credmark" property="og:title" key="og:title" />
        <meta name="description" content="Credmark's Terms of Service" />
        <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="nav">
        <Terms />
      </div>
    </>
  )
}