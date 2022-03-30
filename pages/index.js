import Head from 'next/head'
import Homepage from '../components/pages/homepage'
import Nav from '../components/layout/nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>CREDMARK</title>
        <meta content="Credmark | High Integrity Data | Risk Modeling" property="og:title" key="og:title" />
        <meta key="og:description" name="description" content="Credmark is a financial modeling platform powered by reliable on-chain data. Validated models are readily composable making rapid app development simple." />
        <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png" />
        <link rel="icon" href="/favicon.ico" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=UA-201404361-1`}
        />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=UA-201404361-1'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-201404361-1');`
          }}
        ></script>
      </Head>

      <div className="nav">
        <Nav
          page={<Homepage />} />
      </div>
    </>
  )
}
