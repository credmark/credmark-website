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
        <Contributors />
        </div>
    </>
  )
}