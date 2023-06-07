import Head from 'next/head'
import Contributors from '../components/pages/contributors'

export default function ContributorsPage() {
  return (
    <>
      <Head>
        <title>Contributors | CREDMARK</title>
        <meta content="Contributors | Credmark" property="og:title" key="og:title" />
        <meta name="description" content="Meet Credmark's contributors." />
        <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="nav">
        <Contributors />
        </div>
    </>
  )
}