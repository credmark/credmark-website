import Head from 'next/head'
import Privacy from '../../components/legal/privacy'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | CREDMARK</title>
        <meta content="Privacy Policy | CREDMARK" property="og:title" key="og:title" />
        <meta name="description" content="Credmark's privacy policy" />
        <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="nav">
        <Privacy />
      </div>
    </>
  )
}