import Head from 'next/head'
import LabsPrivacyPolicy from '../../../components/legal/labs-privacy'



export default function TOSPage() {
  return (
    <>
      <Head>
        <title>Terms of Service | CREDMARK</title>
        <meta content="Terms of Service | Credmark" property="og:title" key="og:title" />
        <meta name="description" content="Credmark's Terms of Service" />
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
      </Head>

      <div className="nav">
        <LabsPrivacyPolicy />
      </div>
    </>
  )
}