import Head from 'next/head'
import Homepage from '../components/pages/homepage'
import Nav from '../components/layout/nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>CREDMARK</title>
        <meta content="Credmark | High Integrity Data | Risk Modeling" property="og:title" key="og:title" />
        <meta name="description" content="Credmark aims to provide high integrity data and risk metrics through a transparent, community-driven platform." />
        <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png"/>
        <link rel="icon" href="/favicon.ico" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {/* Hubspot code */}
           <script
            dangerouslySetInnerHTML={{
              __html: `
              type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/21299988.js"
          `,
            }}
            />
      </Head>

      <div className="nav">
      <Nav
                page={<Homepage />} />
      </div>
    </>
  )
}
